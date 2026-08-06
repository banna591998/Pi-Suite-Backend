import {
  Controller,
  Post,
  Body,
  Req,
  Headers,
  type RawBodyRequest,
  UseGuards,
  BadRequestException,
  Logger,
  Get,
  Param,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthGuard } from 'src/common/guards/auth-rbac.guard';

interface PaymentServiceClient {
  createTenantCheckout(data: any): Observable<any>;
  handleWebhookEvent(data: any): Observable<any>;
  saveTenantGatewayConfig(data: any): Observable<any>;
  createCustomerCheckout(data: any): Observable<any>;
  linkConnectedAccount(data: any): Observable<any>;
  verifyAndSavePayment(data: any): Observable<any>;
  getTenantSubscription(data: any): Observable<any>;
}

@Controller('payment')
export class PaymentGatewayController implements OnModuleInit {
  private paymentService: PaymentServiceClient;
  private readonly logger = new Logger(PaymentGatewayController.name);

  constructor(
    @Inject('PAYMENT_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.paymentService =
      this.client.getService<PaymentServiceClient>('PaymentServiceGrpc'); // আপনার proto ফাইলের সার্ভিস নাম অনুযায়ী দিন
  }

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
    return this.paymentService.createTenantCheckout(body).toPromise();
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

    // স্ট্রাইপ ওয়েবহুক ভেরিফিকেশন গেটকিপার হিসেবে এখানে রেখে মাইক্রোসার্ভিসে পাঠানো যায়
    return this.paymentService
      .handleWebhookEvent({
        rawBody: req.rawBody.toString(),
        signature: sig,
      })
      .toPromise();
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
    return this.paymentService.saveTenantGatewayConfig(body).toPromise();
  }

  @Post('customer-checkout')
  @UseGuards(AuthGuard)
  async customerCheckout(@Body() body: { tenantId: string; priceId: string }) {
    return this.paymentService.createCustomerCheckout(body).toPromise();
  }

  @Post('link-account')
  @UseGuards(AuthGuard)
  async linkStripeAccount(
    @Body() body: { tenantId: string; stripeAccountId: string },
  ) {
    return this.paymentService.linkConnectedAccount(body).toPromise();
  }

  @Post('verify-payment')
  @UseGuards(AuthGuard)
  async verifyPayment(
    @Body() body: { tenantId: string; sessionId: string; isPlatform?: boolean },
  ) {
    return this.paymentService.verifyAndSavePayment(body).toPromise();
  }

  @Get('subscription/status/:tenantId')
  @UseGuards(AuthGuard)
  async getTenantSubscription(@Param('tenantId') tenantId: string) {
    return this.paymentService.getTenantSubscription({ tenantId }).toPromise();
  }
}
