import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { AnalyticsService } from './analytics.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class AnalyticsController {
  constructor(
    @Inject(AnalyticsService)
    private readonly analyticsService: AnalyticsService,
  ) {}

  @GrpcMethod('AnalyticsServiceGrpc', 'TrackInventoryTurnover')
  async trackInventoryTurnover(data: {
    tenantId: string;
    payloadJson: string;
  }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.analyticsService.trackInventoryTurnover(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Inventory turnover tracked successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC TrackInventoryTurnover Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error during inventory turnover tracking',
      });
    }
  }

  @GrpcMethod('AnalyticsServiceGrpc', 'GetTurnoverDashboard')
  async getTurnoverDashboard(data: { tenantId: string }) {
    try {
      const result = await this.analyticsService.getTurnoverDashboard(
        data.tenantId,
      );
      return {
        success: true,
        message: 'Turnover dashboard fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetTurnoverDashboard Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching turnover dashboard',
      });
    }
  }

  @GrpcMethod('AnalyticsServiceGrpc', 'RecordOtif')
  async recordOtif(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.analyticsService.calculateOtif(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'OTIF metric recorded successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RecordOtif Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while recording OTIF',
      });
    }
  }

  @GrpcMethod('AnalyticsServiceGrpc', 'RecordBottleneck')
  async recordBottleneck(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.analyticsService.detectBottleneck(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Bottleneck recorded successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RecordBottleneck Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while recording bottleneck',
      });
    }
  }

  @GrpcMethod('AnalyticsServiceGrpc', 'GetBottlenecksList')
  async getBottlenecksList(data: { tenantId: string }) {
    try {
      const result = await this.analyticsService.getBottlenecksList(
        data.tenantId,
      );
      return {
        success: true,
        message: 'Bottlenecks list fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetBottlenecksList Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching bottlenecks list',
      });
    }
  }

  @GrpcMethod('AnalyticsServiceGrpc', 'CreateCustomReport')
  async createCustomReport(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.analyticsService.generateCustomReport(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Custom report generated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateCustomReport Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while creating custom report',
      });
    }
  }

  @GrpcMethod('AnalyticsServiceGrpc', 'GetExecutiveKpis')
  async getExecutiveKpis(data: { tenantId: string }) {
    try {
      const result = await this.analyticsService.getExecutiveKpis(
        data.tenantId,
      );
      return {
        success: true,
        message: 'Executive KPIs fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetExecutiveKpis Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching executive KPIs',
      });
    }
  }
}
