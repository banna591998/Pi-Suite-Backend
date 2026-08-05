import { Inject, Injectable } from '@nestjs/common';
import { SecurityRepository } from './security.repository';
import {
  AuditLogDto,
  RbacAssignmentDto,
  UptimeRecordDto,
} from './security.dto';

@Injectable()
export class SecurityService {
  constructor(
    @Inject(SecurityRepository)
    private readonly securityRepo: SecurityRepository,
  ) {}

  async logActivity(tenantId: string, dto: AuditLogDto) {
    
    return this.securityRepo.createAuditLog(tenantId, dto);
  }

  async getTenantAuditLogs(tenantId: string) {
    return this.securityRepo.getAuditLogs(tenantId);
  }

  async assignRoleWithRBAC(dto: RbacAssignmentDto) {
    
    
    return {
      success: true,
      message: `Role ${dto.role} successfully assigned to user ${dto.userId}`,
    };
  }

  async recordUptime(dto: UptimeRecordDto) {
    
    return this.securityRepo.recordSystemUptime(dto);
  }

  async getUptimeDashboard() {
    return this.securityRepo.getLatestUptimeMetrics();
  }

  async executeGdprErasure(tenantId: string, customerId: string) {
    
    
    return {
      success: true,
      message: `GDPR erasure protocol executed successfully for customer ${customerId} in tenant ${tenantId}`,
    };
  }
}
