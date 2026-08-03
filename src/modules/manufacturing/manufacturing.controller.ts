import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { ManufacturingService } from './manufacturing.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class ManufacturingController {
  constructor(
    @Inject(ManufacturingService)
    private readonly manufacturingService: ManufacturingService,
  ) {}

  @GrpcMethod('ManufacturingServiceGrpc', 'CreateBom')
  async createBom(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.manufacturingService.createBillOfMaterials(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Bill of Materials created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateBom Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while creating BOM',
      });
    }
  }

  @GrpcMethod('ManufacturingServiceGrpc', 'GetBoms')
  async getBoms(data: { tenantId: string }) {
    try {
      const result = await this.manufacturingService.getBoms(data.tenantId);
      return {
        success: true,
        message: 'BOMs fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetBoms Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while fetching BOMs',
      });
    }
  }

  @GrpcMethod('ManufacturingServiceGrpc', 'CreateWorkOrder')
  async createWorkOrder(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.manufacturingService.createWorkOrder(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Work order created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateWorkOrder Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while creating work order',
      });
    }
  }

  @GrpcMethod('ManufacturingServiceGrpc', 'UpdateWorkOrderStatus')
  async updateWorkOrderStatus(data: {
    tenantId: string;
    id: string;
    payloadJson: string;
  }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.manufacturingService.updateWorkOrderStatus(
        data.tenantId,
        data.id,
        dto,
      );
      return {
        success: true,
        message: 'Work order status updated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpdateWorkOrderStatus Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while updating work order status',
      });
    }
  }
}
