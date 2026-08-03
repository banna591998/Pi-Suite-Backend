import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { ProcurementService } from './procurement.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class ProcurementController {
  constructor(
    @Inject(ProcurementService)
    private readonly procurementService: ProcurementService,
  ) {}

  @GrpcMethod('ProcurementServiceGrpc', 'OnboardVendor')
  async onboardVendor(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.procurementService.onboardVendor(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Vendor onboarded successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC OnboardVendor Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while onboarding vendor',
      });
    }
  }

  @GrpcMethod('ProcurementServiceGrpc', 'GetVendors')
  async getVendors(data: { tenantId: string }) {
    try {
      const result = await this.procurementService.getVendors(data.tenantId);
      return {
        success: true,
        message: 'Vendors fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetVendors Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching vendors',
      });
    }
  }

  @GrpcMethod('ProcurementServiceGrpc', 'SendAutomatedRfq')
  async sendAutomatedRfq(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.procurementService.sendAutomatedRfq(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'RFQ sent successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC SendAutomatedRfq Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while sending RFQ',
      });
    }
  }

  @GrpcMethod('ProcurementServiceGrpc', 'CreatePurchaseOrder')
  async createPurchaseOrder(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.procurementService.createPurchaseOrder(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Purchase order created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreatePurchaseOrder Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while creating purchase order',
      });
    }
  }

  @GrpcMethod('ProcurementServiceGrpc', 'PerformThreeWayMatching')
  async performThreeWayMatching(data: {
    tenantId: string;
    payloadJson: string;
  }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.procurementService.performThreeWayMatching(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Three-way matching performed successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC PerformThreeWayMatching Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error during three-way matching',
      });
    }
  }
}
