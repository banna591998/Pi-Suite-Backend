import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { TenantService } from './tenant.service';
import { createTenantSchema, updateTenantSchema } from './dto/tenant.dto';
import { status } from '@grpc/grpc-js';

@Controller()
export class TenantController {
  constructor(
    @Inject(TenantService) private readonly tenantService: TenantService,
  ) {}

  @GrpcMethod('TenantServiceGrpc', 'GetMyWorkspace')
  async getMyWorkspace(data: { tenantId: string }) {
    try {
      const result = await this.tenantService.getTenantById(data.tenantId);
      return {
        success: true,
        message: 'Workspace fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetMyWorkspace Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching workspace',
      });
    }
  }

  @GrpcMethod('TenantServiceGrpc', 'FindAllActive')
  async findAllActive() {
    try {
      const result = await this.tenantService.getAllActiveTenants();
      return {
        success: true,
        message: 'Active tenants fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC FindAllActive Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching active tenants',
      });
    }
  }

  @GrpcMethod('TenantServiceGrpc', 'CreateTenant')
  async createTenant(data: { payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const validationResult = createTenantSchema.safeParse(body);
      if (!validationResult.success) {
        throw new Error(JSON.stringify(validationResult.error.format()));
      }

      const result = await this.tenantService.createTenant(
        validationResult.data,
      );
      return {
        success: true,
        message: 'Tenant created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateTenant Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while creating tenant',
      });
    }
  }

  @GrpcMethod('TenantServiceGrpc', 'FindOneTenant')
  async findOneTenant(data: { id: string }) {
    try {
      const result = await this.tenantService.getTenantById(data.id);
      return {
        success: true,
        message: 'Tenant fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC FindOneTenant Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while fetching tenant',
      });
    }
  }

  @GrpcMethod('TenantServiceGrpc', 'UpdateTenant')
  async updateTenant(data: { id: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const validationResult = updateTenantSchema.safeParse(body);
      if (!validationResult.success) {
        throw new Error(JSON.stringify(validationResult.error.format()));
      }

      const result = await this.tenantService.updateTenant(
        data.id,
        validationResult.data,
      );
      return {
        success: true,
        message: 'Tenant updated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpdateTenant Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while updating tenant',
      });
    }
  }

  @GrpcMethod('TenantServiceGrpc', 'DeleteTenant')
  async deleteTenant(data: { id: string }) {
    try {
      const result = await this.tenantService.deleteTenant(data.id);
      return {
        success: true,
        message: 'Tenant deleted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC DeleteTenant Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while deleting tenant',
      });
    }
  }
}
