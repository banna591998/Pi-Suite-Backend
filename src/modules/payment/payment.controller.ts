import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { PaymentService } from './payment.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class PaymentController {
  constructor(
    @Inject(PaymentService) private readonly service: PaymentService,
  ) {}

  @GrpcMethod('PaymentServiceGrpc', 'Checkout')
  async checkout(data: { tenantId: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      if (!body.userCount || body.userCount < 10) {
        throw new Error('Minimum user count must be at least 10.');
      }

      const result = await this.service.createTenantCheckout(
        data.tenantId || body.tenantId,
        body.userCount,
        body.customerName,
        body.customModuleHours || 0,
        body.role || 'TENANT_ADMIN',
      );

      return {
        success: true,
        message: 'Checkout session created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC Checkout Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error during checkout',
      });
    }
  }

  @GrpcMethod('PaymentServiceGrpc', 'SetupGateway')
  async setupGateway(data: { tenantId: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const result = await this.service.saveTenantGatewayConfig(
        data.tenantId || body.tenantId,
        body.stripeSecretKey,
        body.stripeWebhookSecret || '',
      );

      return {
        success: true,
        message: 'Gateway configuration saved successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC SetupGateway Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error during gateway setup',
      });
    }
  }

  @GrpcMethod('PaymentServiceGrpc', 'CustomerCheckout')
  async customerCheckout(data: { tenantId: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const result = await this.service.createCustomerCheckout(
        data.tenantId || body.tenantId,
        body.priceId,
      );

      return {
        success: true,
        message: 'Customer checkout session created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CustomerCheckout Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error during customer checkout',
      });
    }
  }

  @GrpcMethod('PaymentServiceGrpc', 'LinkStripeAccount')
  async linkStripeAccount(data: { tenantId: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const result = await this.service.linkConnectedAccount(
        data.tenantId || body.tenantId,
        body.stripeAccountId,
      );

      return {
        success: true,
        message: 'Stripe account linked successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC LinkStripeAccount Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while linking Stripe account',
      });
    }
  }

  @GrpcMethod('PaymentServiceGrpc', 'VerifyPayment')
  async verifyPayment(data: { tenantId: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const result = await this.service.verifyAndSavePayment(
        data.tenantId || body.tenantId,
        body.sessionId,
        body.isPlatform || false,
      );

      return {
        success: true,
        message: 'Payment verified successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC VerifyPayment Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error during payment verification',
      });
    }
  }

  @GrpcMethod('PaymentServiceGrpc', 'GetTenantSubscription')
  async getTenantSubscription(data: { tenantId: string }) {
    try {
      const result = await this.service.getTenantSubscription(data.tenantId);

      return {
        success: true,
        message: 'Tenant subscription fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetTenantSubscription Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching tenant subscription',
      });
    }
  }
}
