import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { SalesService } from './sales.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @GrpcMethod('SalesServiceGrpc', 'CreateSalesOrder')
  async createSalesOrder(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.salesService.createOrder(data.tenantId, dto);
      return {
        success: true,
        message: 'Sales order created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateSalesOrder Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while creating sales order',
      });
    }
  }

  @GrpcMethod('SalesServiceGrpc', 'GenerateInvoice')
  async generateInvoice(data: {
    tenantId: string;
    orderId: string;
    customerEmail: string;
    customerName: string;
    payloadJson: string;
  }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.salesService.generateAndSendInvoice(
        data.tenantId,
        data.orderId,
        data.customerEmail,
        data.customerName,
        dto,
      );
      return {
        success: true,
        message: 'Invoice generated and sent successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GenerateInvoice Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while generating invoice',
      });
    }
  }
}
