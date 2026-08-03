import {
  Injectable,
  Inject,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { type Queue } from 'bull';
import { PaymentRepository } from './payment.repository';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-06-24.dahlia',
  });
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    @Inject(PaymentRepository) private readonly repo: PaymentRepository,
    @InjectQueue('email-queue') private readonly emailQueue: Queue,
  ) {}

  private calculateImplementationFee(userCount: number): number {
    if (userCount <= 50) {
      return 35000;
    } else if (userCount > 50 && userCount <= 500) {
      return 85000;
    } else {
      return 150000;
    }
  }

  async createTenantCheckout(
    tenantId: string,
    requestedUserCount: number,
    customerName: string,
    customModuleHours: number = 0,
    role: string = 'TENANT_ADMIN',
  ) {
    const actualUserCount = requestedUserCount < 10 ? 10 : requestedUserCount;

    const existingSubscription =
      await this.repo.findSubscriptionByTenantId(tenantId);

    const licenseCostPerUserUsd = 250 * 100;

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    let implementationFeeUsd = 0;
    let userCountForSubscription = actualUserCount;

    if (!existingSubscription) {
      implementationFeeUsd =
        this.calculateImplementationFee(actualUserCount) * 100;

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${customerName} - Platform License Subscription ($250/user/month)`,
          },
          unit_amount: licenseCostPerUserUsd,
          recurring: { interval: 'month' },
        },
        quantity: actualUserCount,
      });

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${customerName} - System Implementation & Setup Fee (One-time)`,
          },
          unit_amount: implementationFeeUsd,
        },
        quantity: 1,
      });
    } else {
      const previousUserCount = existingSubscription.userCount || 10;
      const additionalUsers = actualUserCount - previousUserCount;

      if (additionalUsers > 0) {
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${customerName} - Additional User Licenses (${additionalUsers} Users)`,
            },
            unit_amount: licenseCostPerUserUsd,
            recurring: { interval: 'month' },
          },
          quantity: additionalUsers,
        });
      }

      const previousImplementationFee =
        this.calculateImplementationFee(previousUserCount) * 100;
      const currentImplementationFee =
        this.calculateImplementationFee(actualUserCount) * 100;

      if (currentImplementationFee > previousImplementationFee) {
        const upgradeImplementationDiff =
          currentImplementationFee - previousImplementationFee;
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${customerName} - Implementation Fee Upgrade Tier Difference`,
            },
            unit_amount: upgradeImplementationDiff,
          },
          quantity: 1,
        });
      }

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${customerName} - Updated Base Platform License`,
          },
          unit_amount: licenseCostPerUserUsd,
          recurring: { interval: 'month' },
        },
        quantity: actualUserCount,
      });
    }

    if (customModuleHours > 0) {
      const customModuleRateUsd = 250 * 100;
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Custom Module Development (${customModuleHours} Hours @ $250/hr)`,
          },
          unit_amount: customModuleRateUsd,
        },
        quantity: customModuleHours,
      });
    }

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'subscription',
      subscription_data: {
        metadata: {
          tenantId,
          userCount: actualUserCount.toString(),
          customerName,
          role,
        },
      },
      metadata: {
        tenantId,
        userCount: actualUserCount.toString(),
        customerName,
        role,
      },
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}&tenantId=${tenantId}&isPlatform=true`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    return { url: session.url };
  }

  async createCustomerCheckout(tenantId: string, priceId: string) {
    const tenant = await this.repo.findTenantById(tenantId);

    if (!tenant?.stripeSecretKey) {
      throw new Error('Tenant has not configured their Stripe Secret Key.');
    }

    const tenantStripe = new Stripe(tenant.stripeSecretKey, {
      apiVersion: '2026-06-24.dahlia',
    });

    const session = await tenantStripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      metadata: {
        tenantId: tenantId,
        isCustomerPayment: 'true',
      },
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}&tenantId=${tenantId}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    return { url: session.url };
  }

  async saveTenantSecretKey(tenantId: string, secretKey: string) {
    return await this.repo.saveTenantSecretKey(tenantId, secretKey);
  }

  async linkConnectedAccount(tenantId: string, stripeAccountId: string) {
    return await this.repo.saveConnectedAccountId(tenantId, stripeAccountId);
  }

  async handleWebhookEvent(event: Stripe.Event) {
    this.logger.log(`Webhook Event Received: ${event.type}`);

    try {
      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object as Stripe.Checkout.Session;
          const amountTotal = session.amount_total
            ? session.amount_total / 100
            : 0;
          const metadata = session.metadata || {};
          const customerEmail =
            session.customer_details?.email || session.customer_email || 'N/A';
          const customerName =
            metadata.customerName ||
            session.customer_details?.name ||
            'Valued Client';

          const parsedUserCount = parseInt(metadata.userCount || '10', 10);
          const subscriptionId =
            typeof session.subscription === 'string'
              ? session.subscription
              : session.subscription?.id;
          const paymentIntentId =
            (session.payment_intent as string) || session.id;

          if (metadata.tenantId && metadata.isCustomerPayment !== 'true') {
            const role = metadata.role || 'TENANT_ADMIN';

            const licenseCost = 250 * parsedUserCount; // $250 per user license
            const implementationFee =
              this.calculateImplementationFee(parsedUserCount);

            await this.repo.upsertSubscription({
              tenantId: metadata.tenantId,
              planType: 'UNIFIED_ENTERPRISE',
              userCount: parsedUserCount,
              stripeSubId: subscriptionId,
              licenseCost: licenseCost,
              setupFee: implementationFee,
              paymentRef: paymentIntentId,
              customerName: customerName,
              role: role,
            });

            await this.repo.logPlatformPayment({
              tenantId: metadata.tenantId,
              amount: amountTotal,
              sessionId: session.id,
              currency: session.currency || 'usd',
            });

            await this.queueEmail('payment.invoice.success', {
              email: customerEmail,
              invoiceNumber: paymentIntentId,
              amount: amountTotal.toFixed(2),
              currency: session.currency?.toUpperCase() || 'USD',
              plan: 'Unified Platform Plan',
              name: customerName,
            });

            this.logger.log(
              `Subscription & payment saved successfully for Tenant: ${metadata.tenantId}`,
            );
          } else if (
            metadata.tenantId &&
            metadata.isCustomerPayment === 'true'
          ) {
            await this.repo.logCustomerTransaction({
              tenantId: metadata.tenantId,
              customerEmail: customerEmail,
              amount: amountTotal,
              gatewayReference: paymentIntentId,
              status: 'success',
            });
          }
          break;
        }

        case 'invoice.payment_succeeded': {
          const invoice = event.data.object as Stripe.Invoice;
          const rawSub = (invoice as any).subscription;
          const subscriptionId =
            typeof rawSub === 'string' ? rawSub : rawSub?.id;

          if (
            subscriptionId &&
            invoice.billing_reason === 'subscription_cycle'
          ) {
            const subscription =
              await this.stripe.subscriptions.retrieve(subscriptionId);
            const tenantId = subscription.metadata?.tenantId;

            if (tenantId) {
              const amountPaid = invoice.amount_paid
                ? invoice.amount_paid / 100
                : 0;
              await this.repo.logPlatformPayment({
                tenantId: tenantId,
                amount: amountPaid,
                sessionId: invoice.id,
                currency: invoice.currency || 'usd',
              });
            }
          }
          break;
        }

        case 'charge.failed': {
          const charge = event.data.object as Stripe.Charge;
          await this.queueEmail('payment.failed', {
            email: charge.billing_details?.email || 'N/A',
            reason: charge.failure_message || 'Payment failed',
            name: charge.billing_details?.name || 'Customer',
          });
          break;
        }
      }
    } catch (error: any) {
      this.logger.error(
        `Webhook processing critical error: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }

  private async queueEmail(type: string, data: any) {
    await this.emailQueue.add('send-email', { type, data });
  }

  async getTenantWebhookSecret(tenantId: string) {
    return await this.repo.findTenantWebhookSecret(tenantId);
  }

  async saveTenantGatewayConfig(
    tenantId: string,
    stripeSecretKey: string,
    stripeWebhookSecret: string,
  ) {
    await this.repo.saveTenantSecretKey(tenantId, stripeSecretKey);
    if (stripeWebhookSecret) {
      await this.repo.saveTenantWebhookSecret(tenantId, stripeWebhookSecret);
    }
    return { success: true, message: 'Tenant gateway configured successfully' };
  }

  async verifyAndSavePayment(
    tenantId: string,
    sessionId: string,
    isPlatform: boolean,
  ) {
    let targetStripe = this.stripe;

    if (!isPlatform) {
      const tenant = await this.repo.findTenantById(tenantId);
      if (!tenant?.stripeSecretKey) {
        throw new Error('Tenant secret key not found');
      }
      targetStripe = new Stripe(tenant.stripeSecretKey, {
        apiVersion: '2026-06-24.dahlia',
      });
    }

    const session = await targetStripe.checkout.sessions.retrieve(sessionId);

    if (session && session.payment_status === 'paid') {
      const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
      const customerEmail = session.customer_details?.email || 'N/A';
      const customerName =
        session.metadata?.customerName ||
        session.customer_details?.name ||
        'Valued Client';
      const subscriptionId =
        typeof session.subscription === 'string'
          ? session.subscription
          : (session.subscription as any)?.id;
      const paymentIntentId = (session.payment_intent as string) || session.id;

      if (isPlatform) {
        if (session.metadata?.tenantId) {
          const userCount = parseInt(session.metadata.userCount || '10', 10);

          await this.repo.upsertSubscription({
            tenantId: session.metadata.tenantId,
            planType: 'UNIFIED_ENTERPRISE',
            userCount: userCount,
            stripeSubId: subscriptionId,
            paymentRef: paymentIntentId,
            customerName: customerName,
            role: session.metadata.role || 'TENANT_ADMIN',
          });

          await this.repo.logPlatformPayment({
            tenantId: session.metadata.tenantId,
            amount: amountTotal,
            sessionId: session.id,
            currency: session.currency || 'usd',
          });
        }
      }

      return {
        success: true,
        message: 'Payment verified and transaction saved successfully',
      };
    }

    return { success: false, message: 'Payment not completed' };
  }

  async getTenantSubscription(tenantId: string) {
    return await this.repo.findSubscriptionByTenantId(tenantId);
  }
}
