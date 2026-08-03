import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { WarehouseService } from './warehouse.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class WarehouseController {
  constructor(
    @Inject(WarehouseService)
    private readonly warehouseService: WarehouseService,
  ) {}

  @GrpcMethod('WarehouseServiceGrpc', 'CreateWarehouse')
  async create(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.warehouseService.create(data.tenantId, dto);
      return {
        success: true,
        message: 'Warehouse created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateWarehouse Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while creating warehouse',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'CreateZone')
  async createZone(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.warehouseService.addZone(data.tenantId, dto);
      return {
        success: true,
        message: 'Warehouse zone added successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateZone Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while adding zone',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'RunMasterPlan')
  async runMasterPlan(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.warehouseService.runMasterPlanning(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Master planning executed successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RunMasterPlan Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error during master planning',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'CreateForecast')
  async createForecast(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.warehouseService.createDemandForecast(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Demand forecast created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateForecast Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while creating demand forecast',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'CalculateMrp')
  async calculateMrp(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.warehouseService.calculateMaterialRequirements(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Material requirements calculated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CalculateMrp Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while calculating material requirements',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'OptimizeCapacity')
  async optimizeCapacity(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.warehouseService.optimizeCapacity(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Capacity optimized successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC OptimizeCapacity Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while optimizing capacity',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'FindAllWarehouses')
  async findAll(data: { tenantId: string }) {
    try {
      const result = await this.warehouseService.findAll(data.tenantId);
      return {
        success: true,
        message: 'Warehouses fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC FindAllWarehouses Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching warehouses',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'FindOneWarehouse')
  async findOne(data: { tenantId: string; id: string }) {
    try {
      const result = await this.warehouseService.findOne(
        data.tenantId,
        data.id,
      );
      return {
        success: true,
        message: 'Warehouse fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC FindOneWarehouse Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching warehouse',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'UpdateWarehouse')
  async update(data: { tenantId: string; id: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.warehouseService.update(
        data.tenantId,
        data.id,
        dto,
      );
      return {
        success: true,
        message: 'Warehouse updated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpdateWarehouse Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while updating warehouse',
      });
    }
  }

  @GrpcMethod('WarehouseServiceGrpc', 'RemoveWarehouse')
  async remove(data: { tenantId: string; id: string }) {
    try {
      const result = await this.warehouseService.remove(data.tenantId, data.id);
      return {
        success: true,
        message: 'Warehouse removed successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RemoveWarehouse Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while removing warehouse',
      });
    }
  }
}
