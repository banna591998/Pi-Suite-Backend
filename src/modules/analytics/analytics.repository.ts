import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  InventoryTurnoverDto,
  OtifMetricDto,
  BottleneckDto,
  CustomReportDto,
} from './analytics.dto';

@Injectable()
export class AnalyticsRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createInventoryTurnover(tenantId: string, dto: InventoryTurnoverDto) {
    return this.prisma.inventoryTurnoverMetric.create({
      data: {
        tenantId,
        productSku: dto.productSku,
        turnoverRatio: dto.turnoverRatio,
        holdingCost: dto.holdingCost,
      },
    });
  }

  async getInventoryTurnovers(tenantId: string) {
    return this.prisma.inventoryTurnoverMetric.findMany({
      where: { tenantId },
      orderBy: { calculatedAt: 'desc' },
    });
  }

  async recordOtifMetric(tenantId: string, dto: OtifMetricDto) {
    return this.prisma.otifMetric.create({
      data: {
        tenantId,
        orderId: dto.orderId,
        isOnTime: dto.isOnTime,
        isFull: dto.isFull,
      },
    });
  }

  async getOtifSummary(tenantId: string) {
    const total = await this.prisma.otifMetric.count({ where: { tenantId } });
    const successful = await this.prisma.otifMetric.count({
      where: { tenantId, isOnTime: true, isFull: true },
    });
    return {
      totalOrdersTracked: total,
      successfulOtifOrders: successful,
      otifPercentage: total > 0 ? (successful / total) * 100 : 0,
    };
  }

  async recordBottleneck(tenantId: string, dto: BottleneckDto) {
    return this.prisma.supplyChainBottleneck.create({
      data: {
        tenantId,
        processStage: dto.processStage,
        delayHours: dto.delayHours,
        severity: dto.severity,
      },
    });
  }

  async getBottlenecks(tenantId: string) {
    return this.prisma.supplyChainBottleneck.findMany({
      where: { tenantId },
      orderBy: { delayHours: 'desc' },
    });
  }

  async saveCustomReport(tenantId: string, dto: CustomReportDto) {
    return this.prisma.customReportConfig.create({
      data: {
        tenantId,
        reportName: dto.reportName,
        querySql: dto.querySql,
        formatType: dto.formatType,
      },
    });
  }

  async getCustomReports(tenantId: string) {
    return this.prisma.customReportConfig.findMany({
      where: { tenantId },
    });
  }
}
