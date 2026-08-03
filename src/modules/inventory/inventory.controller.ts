import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { InventoryService } from './inventory.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class InventoryController {
  constructor(
    @Inject(InventoryService)
    private readonly inventoryService: InventoryService,
  ) {}

  @GrpcMethod('InventoryServiceGrpc', 'CreateItem')
  async createItem(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.inventoryService.createItem(data.tenantId, dto);
      return {
        success: true,
        message: 'Inventory item created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateItem Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while creating inventory item',
      });
    }
  }

  @GrpcMethod('InventoryServiceGrpc', 'FindAllItems')
  async findAllItems(data: { tenantId: string }) {
    try {
      const result = await this.inventoryService.findAllItems(data.tenantId);
      return {
        success: true,
        message: 'Inventory items fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC FindAllItems Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching inventory items',
      });
    }
  }

  @GrpcMethod('InventoryServiceGrpc', 'GetReorderAlerts')
  async getReorderAlerts(data: { tenantId: string }) {
    try {
      const result = await this.inventoryService.getReorderAlerts(
        data.tenantId,
      );
      return {
        success: true,
        message: 'Reorder alerts fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetReorderAlerts Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching reorder alerts',
      });
    }
  }

  @GrpcMethod('InventoryServiceGrpc', 'UpdateItem')
  async updateItem(data: {
    tenantId: string;
    id: string;
    payloadJson: string;
  }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.inventoryService.updateItem(
        data.tenantId,
        data.id,
        dto,
      );
      return {
        success: true,
        message: 'Inventory item updated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpdateItem Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while updating inventory item',
      });
    }
  }

  @GrpcMethod('InventoryServiceGrpc', 'RemoveItem')
  async removeItem(data: { tenantId: string; id: string }) {
    try {
      const result = await this.inventoryService.removeItem(
        data.tenantId,
        data.id,
      );
      return {
        success: true,
        message: 'Inventory item removed successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RemoveItem Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while removing inventory item',
      });
    }
  }
}
