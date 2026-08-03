import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  UsePipes,
} from '@nestjs/common';
import { SecurityService } from './security.service';
import {
  type AuditLogDto,
  type RbacAssignmentDto,
  type UptimeRecordDto,
  auditLogSchema,
  rbacAssignmentSchema,
  uptimeRecordSchema,
} from './security.dto';

@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('audit-logs')
  async createAuditLog(
    @Query('tenantId') tenantId: string,
    @Body() dto: AuditLogDto,
  ) {
    return this.securityService.logActivity(tenantId, dto);
  }

  @Get('audit-logs')
  async getAuditLogs(@Query('tenantId') tenantId: string) {
    return this.securityService.getTenantAuditLogs(tenantId);
  }

  @Post('rbac/assign')
  async assignRbacRole(@Body() dto: RbacAssignmentDto) {
    return this.securityService.assignRoleWithRBAC(dto);
  }

  @Post('uptime-metrics')
  async recordUptime(@Body() dto: UptimeRecordDto) {
    return this.securityService.recordUptime(dto);
  }

  @Get('uptime-dashboard')
  async getUptimeDashboard() {
    return this.securityService.getUptimeDashboard();
  }

  @Post('gdpr/erasure')
  async triggerGdprErasure(
    @Query('tenantId') tenantId: string,
    @Query('customerId') customerId: string,
  ) {
    return this.securityService.executeGdprErasure(tenantId, customerId);
  }
}
