import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuditLogDto, UptimeRecordDto } from './security.dto';

@Injectable()
export class SecurityRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createAuditLog(tenantId: string, dto: AuditLogDto) {
    return this.prisma.auditLog.create({
      data: {
        tenantId,
        userId: dto.userId,
        action: dto.action,
        details: dto.details,
        ipAddress: dto.ipAddress,
      },
    });
  }

  async getAuditLogs(tenantId: string) {
    return this.prisma.auditLog.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async recordSystemUptime(dto: UptimeRecordDto) {
    return this.prisma.systemUptimeRecord.create({
      data: {
        serviceName: dto.serviceName,
        status: dto.status,
        latencyMs: dto.latencyMs,
      },
    });
  }

  async getLatestUptimeMetrics() {
    return this.prisma.systemUptimeRecord.findMany({
      orderBy: { checkedAt: 'desc' },
      take: 20,
    });
  }
}
