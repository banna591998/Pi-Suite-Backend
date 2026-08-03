import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { RoleService } from './role.service';
import { createRoleSchema, updateRoleSchema } from './role.dto';
import { status } from '@grpc/grpc-js';

@Controller()
export class RoleController {
  constructor(@Inject(RoleService) private readonly roleService: RoleService) {}

  @GrpcMethod('RoleServiceGrpc', 'CreateRole')
  async createRole(data: { tenantId: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const tenantId = data.tenantId || body.tenantId;
      const payload = { ...body, tenantId };

      const validationResult = createRoleSchema.safeParse(payload);
      if (!validationResult.success) {
        throw new Error(JSON.stringify(validationResult.error.format()));
      }

      const result = await this.roleService.createRole(
        tenantId,
        validationResult.data,
      );
      return {
        success: true,
        message: 'Role created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateRole Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while creating role',
      });
    }
  }

  @GrpcMethod('RoleServiceGrpc', 'GetEnterpriseRoleEnums')
  async getEnterpriseRoleEnums() {
    try {
      const result = await this.roleService.getEnterpriseRoleEnums();
      return {
        success: true,
        message: 'Enterprise role enums fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetEnterpriseRoleEnums Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching role enums',
      });
    }
  }

  @GrpcMethod('RoleServiceGrpc', 'GetAllPermissions')
  async getAllPermissions() {
    try {
      const result = await this.roleService.getAllPermissions();
      return {
        success: true,
        message: 'All permissions fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetAllPermissions Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching permissions',
      });
    }
  }

  @GrpcMethod('RoleServiceGrpc', 'AssignRoleToUser')
  async assignRoleToUser(data: { tenantId: string; payloadJson: string }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const tenantId = data.tenantId || body.tenantId;
      const result = await this.roleService.assignRoleToUser({
        ...body,
        tenantId,
      });
      return {
        success: true,
        message: 'Role assigned to user successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC AssignRoleToUser Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while assigning role to user',
      });
    }
  }

  @GrpcMethod('RoleServiceGrpc', 'FindAllRoles')
  async findAllRoles(data: { tenantId: string }) {
    try {
      const result = await this.roleService.getAllRoles(data.tenantId);
      return {
        success: true,
        message: 'Roles fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC FindAllRoles Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while fetching roles',
      });
    }
  }

  @GrpcMethod('RoleServiceGrpc', 'FindOneRole')
  async findOneRole(data: { tenantId: string; id: string }) {
    try {
      const result = await this.roleService.getRoleById(data.id, data.tenantId);
      return {
        success: true,
        message: 'Role fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC FindOneRole Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while fetching role',
      });
    }
  }

  @GrpcMethod('RoleServiceGrpc', 'UpdateRole')
  async updateRole(data: {
    tenantId: string;
    id: string;
    payloadJson: string;
  }) {
    try {
      const body = JSON.parse(data.payloadJson || '{}');
      const tenantId = data.tenantId || body.tenantId;
      const payload = { ...body, tenantId };

      const validationResult = updateRoleSchema.safeParse(payload);
      if (!validationResult.success) {
        throw new Error(JSON.stringify(validationResult.error.format()));
      }

      const result = await this.roleService.updateRole(
        data.id,
        tenantId,
        validationResult.data,
      );
      return {
        success: true,
        message: 'Role updated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpdateRole Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while updating role',
      });
    }
  }

  @GrpcMethod('RoleServiceGrpc', 'RemoveRole')
  async removeRole(data: { tenantId: string; id: string }) {
    try {
      const result = await this.roleService.deleteRole(data.id, data.tenantId);
      return {
        success: true,
        message: 'Role deleted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RemoveRole Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while deleting role',
      });
    }
  }
}
