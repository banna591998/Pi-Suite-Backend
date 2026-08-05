import {
  Controller,
  Post,
  Body,
  Req,
  Headers,
  type RawBodyRequest,
  Inject,
  UseGuards,
  BadRequestException,
  Logger,
  Get,
  Param,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import Stripe from 'stripe';
import { AuthGuard } from 'src/common/guards/auth-rbac.guard';

@Controller('payment')
export class PaymentController {
  private stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-06-24.dahlia',
  });
  private readonly logger = new Logger(PaymentController.name);

  constructor(
    @Inject(PaymentService) private readonly service: PaymentService,
  ) {}

  @Post('create-checkout')
  @UseGuards(AuthGuard)
  async checkout(
    @Body()
    body: {
      tenantId: string;
      userCount: number;
      customerName: string;
      customModuleHours?: number;
      role?: string;
    },
  ) {
    if (!body.userCount || body.userCount < 10) {
      throw new BadRequestException('Minimum user count must be at least 10.');
    }

    return await this.service.createTenantCheckout(
      body.tenantId,
      body.userCount,
      body.customerName,
      body.customModuleHours || 0,
      body.role || 'TENANT_ADMIN',
    );
  }

  @Post('webhook')
  async webhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') sig: string,
  ) {
    if (!sig) {
      this.logger.error('Webhook received without signature');
      throw new BadRequestException('Missing signature');
    }

    if (!req.rawBody) {
      this.logger.error('Raw body is missing! Check main.ts configuration.');
      throw new BadRequestException('Raw body missing');
    }

    let event: Stripe.Event;

    try {
      const eventJson = JSON.parse(req.rawBody.toString());
      const metadata = eventJson.data?.object?.metadata;

      let webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

      if (metadata?.tenantId && metadata?.isCustomerPayment === 'true') {
        const tenantSecret = await this.service.getTenantWebhookSecret(
          metadata.tenantId,
        );
        if (tenantSecret) {
          webhookSecret = tenantSecret;
        }
      }

      event = this.stripe.webhooks.constructEvent(
        req.rawBody,
        sig,
        webhookSecret,
      );
    } catch (err: any) {
      this.logger.error(
        `Webhook Signature Verification Failed: ${err.message}`,
      );
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    this.logger.log(`Webhook Event Verified: ${event.type}`);
    await this.service.handleWebhookEvent(event);

    return { received: true };
  }

  @Post('setup-gateway')
  @UseGuards(AuthGuard)
  async setupGateway(
    @Body()
    body: {
      tenantId: string;
      stripeSecretKey: string;
      stripeWebhookSecret?: string;
    },
  ) {
    return await this.service.saveTenantGatewayConfig(
      body.tenantId,
      body.stripeSecretKey,
      body.stripeWebhookSecret || '',
    );
  }

  @Post('customer-checkout')
  @UseGuards(AuthGuard)
  async customerCheckout(@Body() body: { tenantId: string; priceId: string }) {
    return await this.service.createCustomerCheckout(
      body.tenantId,
      body.priceId,
    );
  }

  @Post('link-account')
  @UseGuards(AuthGuard)
  async linkStripeAccount(
    @Body() body: { tenantId: string; stripeAccountId: string },
  ) {
    return await this.service.linkConnectedAccount(
      body.tenantId,
      body.stripeAccountId,
    );
  }

  @Post('verify-payment')
  @UseGuards(AuthGuard)
  async verifyPayment(
    @Body() body: { tenantId: string; sessionId: string; isPlatform?: boolean },
  ) {
    return await this.service.verifyAndSavePayment(
      body.tenantId,
      body.sessionId,
      body.isPlatform || false,
    );
  }

  
  @Get('subscription/status/:tenantId')
  @UseGuards(AuthGuard)
  async getTenantSubscription(@Param('tenantId') tenantId: string) {
    return await this.service.getTenantSubscription(tenantId);
  }
}
