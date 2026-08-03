import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UsePipes,
  Inject,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import {
  type InventoryTurnoverDto,
  type OtifMetricDto,
  type BottleneckDto,
  type CustomReportDto,
  type inventoryTurnoverSchema,
  type otifMetricSchema,
  type bottleneckSchema,
  type customReportSchema,
} from './analytics.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    @Inject(AnalyticsService)
    private readonly analyticsService: AnalyticsService,
  ) {}

  @Post('turnover')
  async trackTurnover(
    @Query('tenantId') tenantId: string,
    @Body() dto: InventoryTurnoverDto,
  ) {
    return this.analyticsService.trackInventoryTurnover(tenantId, dto);
  }

  @Get('turnover')
  async getTurnoverDashboard(@Query('tenantId') tenantId: string) {
    return this.analyticsService.getTurnoverDashboard(tenantId);
  }

  @Post('otif')
  async recordOtif(
    @Query('tenantId') tenantId: string,
    @Body() dto: OtifMetricDto,
  ) {
    return this.analyticsService.calculateOtif(tenantId, dto);
  }

  @Post('bottlenecks')
  async recordBottleneck(
    @Query('tenantId') tenantId: string,
    @Body() dto: BottleneckDto,
  ) {
    return this.analyticsService.detectBottleneck(tenantId, dto);
  }

  @Get('bottlenecks')
  async getBottlenecks(@Query('tenantId') tenantId: string) {
    return this.analyticsService.getBottlenecksList(tenantId);
  }

  @Post('reports/custom')
  async createCustomReport(
    @Query('tenantId') tenantId: string,
    @Body() dto: CustomReportDto,
  ) {
    return this.analyticsService.generateCustomReport(tenantId, dto);
  }

  @Get('executive-kpis')
  async getExecutiveKpis(@Query('tenantId') tenantId: string) {
    return this.analyticsService.getExecutiveKpis(tenantId);
  }
}
