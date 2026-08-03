import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { SecurityService } from './security.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @GrpcMethod('SecurityServiceGrpc', 'CreateAuditLog')
  async createAuditLog(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.securityService.logActivity(data.tenantId, dto);
      return {
        success: true,
        message: 'Audit log created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateAuditLog Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while creating audit log',
      });
    }
  }

  @GrpcMethod('SecurityServiceGrpc', 'GetAuditLogs')
  async getAuditLogs(data: { tenantId: string }) {
    try {
      const result = await this.securityService.getTenantAuditLogs(
        data.tenantId,
      );
      return {
        success: true,
        message: 'Audit logs fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetAuditLogs Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching audit logs',
      });
    }
  }

  @GrpcMethod('SecurityServiceGrpc', 'AssignRbacRole')
  async assignRbacRole(data: { payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.securityService.assignRoleWithRBAC(dto);
      return {
        success: true,
        message: 'RBAC role assigned successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC AssignRbacRole Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while assigning RBAC role',
      });
    }
  }

  @GrpcMethod('SecurityServiceGrpc', 'RecordUptime')
  async recordUptime(data: { payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.securityService.recordUptime(dto);
      return {
        success: true,
        message: 'Uptime recorded successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RecordUptime Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while recording uptime',
      });
    }
  }

  @GrpcMethod('SecurityServiceGrpc', 'GetUptimeDashboard')
  async getUptimeDashboard() {
    try {
      const result = await this.securityService.getUptimeDashboard();
      return {
        success: true,
        message: 'Uptime dashboard fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetUptimeDashboard Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching uptime dashboard',
      });
    }
  }

  @GrpcMethod('SecurityServiceGrpc', 'TriggerGdprErasure')
  async triggerGdprErasure(data: { tenantId: string; customerId: string }) {
    try {
      const result = await this.securityService.executeGdprErasure(
        data.tenantId,
        data.customerId,
      );
      return {
        success: true,
        message: 'GDPR erasure triggered successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC TriggerGdprErasure Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error during GDPR erasure',
      });
    }
  }
}
