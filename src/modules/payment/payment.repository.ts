import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { decrypt, encrypt } from 'src/utils/encryption.util';

@Injectable()
export class PaymentRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async logPlatformPayment(data: {
    tenantId: string;
    amount: number;
    sessionId: string;
    currency?: string;
  }) {
    return this.prisma.paymentLog.create({
      data: {
        tenantId: data.tenantId,
        amount: data.amount,
        stripeSessionId: data.sessionId,
        status: 'succeeded',
        currency: data.currency ? data.currency.toLowerCase() : 'usd',
      },
    });
  }

  async logCustomerTransaction(data: {
    tenantId: string;
    customerEmail: string;
    amount: number;
    gatewayReference: string;
    status: string;
  }) {
    return this.prisma.customerTransaction.create({
      data: {
        tenantId: data.tenantId,
        customerEmail: data.customerEmail || 'unknown@customer.com',
        amount: data.amount,
        gatewayReference: data.gatewayReference,
        status: data.status,
      },
    });
  }

  async upsertSubscription(data: {
    tenantId: string;
    planType: string;
    userCount: number;
    stripeSubId?: string;
    licenseCost?: number;
    setupFee?: number;
    trainingFee?: number;
    customModuleFee?: number;
    paymentRef?: string;
    customerName?: string;
    role?: string;
    permissions?: string[];
  }) {
    const defaultPermissions = data.permissions || [
      'all:read',
      'all:write',
      'advanced:analytics',
      'ai:access',
    ];

    const finalUserCount = data.userCount < 10 ? 10 : data.userCount;

    return this.prisma.subscription.upsert({
      where: { tenantId: data.tenantId },
      update: {
        planType: data.planType,
        userCount: finalUserCount,
        status: 'active',
        ...(data.stripeSubId && { stripeSubId: data.stripeSubId }),
        ...(data.licenseCost !== undefined && {
          licenseCost: data.licenseCost,
        }),
        ...(data.setupFee !== undefined && { setupFee: data.setupFee }),
        ...(data.trainingFee !== undefined && {
          trainingFee: data.trainingFee,
        }),
        ...(data.customModuleFee !== undefined && {
          customModuleFee: data.customModuleFee,
        }),
        ...(data.paymentRef && { paymentRef: data.paymentRef }),
        ...(data.customerName && { customerName: data.customerName }),
        ...(data.role && { role: data.role }),
        permissions: defaultPermissions,
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      create: {
        tenantId: data.tenantId,
        planType: data.planType,
        userCount: finalUserCount,
        status: 'active',
        stripeSubId: data.stripeSubId || null,
        licenseCost: data.licenseCost || 0.0,
        setupFee: data.setupFee || 0.0,
        trainingFee: data.trainingFee || 0.0,
        customModuleFee: data.customModuleFee || 0.0,
        paymentRef: data.paymentRef || null,
        customerName: data.customerName || 'Valued Enterprise Client',
        role: data.role || 'TENANT_ADMIN',
        permissions: defaultPermissions,
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });
  }

  async saveConnectedAccountId(tenantId: string, stripeAccountId: string) {
    return this.prisma.tenant.update({
      where: { id: tenantId },
      data: { stripeAccountId: stripeAccountId },
    });
  }

  async findTenantById(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      select: { id: true, stripeSecretKey: true },
    });

    return tenant
      ? {
          ...tenant,
          stripeSecretKey: tenant.stripeSecretKey
            ? decrypt(tenant.stripeSecretKey)
            : null,
        }
      : null;
  }

  async saveTenantSecretKey(tenantId: string, secretKey: string) {
    return this.prisma.tenant.update({
      where: { id: tenantId },
      data: { stripeSecretKey: encrypt(secretKey) },
    });
  }

  async saveTenantWebhookSecret(tenantId: string, webhookSecret: string) {
    return this.prisma.tenant.update({
      where: { id: tenantId },
      data: { stripeWebhookSecret: encrypt(webhookSecret) },
    });
  }

  async findTenantWebhookSecret(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      select: { stripeWebhookSecret: true },
    });
    return tenant?.stripeWebhookSecret
      ? decrypt(tenant.stripeWebhookSecret)
      : null;
  }

  async findSubscriptionByTenantId(tenantId: string) {
    return await this.prisma.subscription.findUnique({
      where: {
        tenantId: tenantId,
      },
    });
  }

  async findSubscriptionByStripeSubId(stripeSubId: string) {
    return await this.prisma.subscription.findFirst({
      where: {
        stripeSubId: stripeSubId,
      },
    });
  }
}
