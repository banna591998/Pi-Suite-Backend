import { Inject, Injectable } from '@nestjs/common';
import { AnalyticsRepository } from './analytics.repository';
import {
  InventoryTurnoverDto,
  OtifMetricDto,
  BottleneckDto,
  CustomReportDto,
} from './analytics.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    @Inject(AnalyticsRepository)
    private readonly analyticsRepo: AnalyticsRepository,
  ) {}

  async trackInventoryTurnover(tenantId: string, dto: InventoryTurnoverDto) {
    
    return this.analyticsRepo.createInventoryTurnover(tenantId, dto);
  }

  async getTurnoverDashboard(tenantId: string) {
    return this.analyticsRepo.getInventoryTurnovers(tenantId);
  }

  async calculateOtif(tenantId: string, dto: OtifMetricDto) {
    
    await this.analyticsRepo.recordOtifMetric(tenantId, dto);
    return this.analyticsRepo.getOtifSummary(tenantId);
  }

  async detectBottleneck(tenantId: string, dto: BottleneckDto) {
    
    return this.analyticsRepo.recordBottleneck(tenantId, dto);
  }

  async getBottlenecksList(tenantId: string) {
    return this.analyticsRepo.getBottlenecks(tenantId);
  }

  async generateCustomReport(tenantId: string, dto: CustomReportDto) {
    
    return this.analyticsRepo.saveCustomReport(tenantId, dto);
  }

  async getExecutiveKpis(tenantId: string) {
    
    const otif = await this.analyticsRepo.getOtifSummary(tenantId);
    const turnovers = await this.analyticsRepo.getInventoryTurnovers(tenantId);
    const bottlenecks = await this.analyticsRepo.getBottlenecks(tenantId);

    return {
      summary: 'Executive Supply Chain Overview',
      otifMetrics: otif,
      averageTurnoverRatio:
        turnovers.length > 0
          ? turnovers.reduce((acc, curr) => acc + curr.turnoverRatio, 0) /
            turnovers.length
          : 0,
      activeBottlenecksCount: bottlenecks.length,
    };
  }
}
