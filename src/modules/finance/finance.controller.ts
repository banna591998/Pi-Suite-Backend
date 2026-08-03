import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { FinanceService } from './finance.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class FinanceController {
  constructor(
    @Inject(FinanceService) private readonly financeService: FinanceService,
  ) {}

  @GrpcMethod('FinanceServiceGrpc', 'RegisterAsset')
  async registerAsset(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.financeService.registerAsset(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Asset registered successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RegisterAsset Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error during asset registration',
      });
    }
  }

  @GrpcMethod('FinanceServiceGrpc', 'GetAssetsWithDepreciation')
  async getAssetsWithDepreciation(data: { tenantId: string }) {
    try {
      const result = await this.financeService.getAllAssets(data.tenantId);
      return {
        success: true,
        message: 'Assets fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetAssetsWithDepreciation Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while fetching assets',
      });
    }
  }

  @GrpcMethod('FinanceServiceGrpc', 'CalculateLandedCost')
  async calculateLandedCost(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.financeService.computeLandedCost(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Landed cost calculated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CalculateLandedCost Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error during landed cost calculation',
      });
    }
  }

  @GrpcMethod('FinanceServiceGrpc', 'AddLedgerEntry')
  async addLedgerEntry(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.financeService.recordTransaction(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Ledger entry added successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC AddLedgerEntry Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while adding ledger entry',
      });
    }
  }

  @GrpcMethod('FinanceServiceGrpc', 'GetLedger')
  async getLedger(data: { tenantId: string }) {
    try {
      const result = await this.financeService.getFinancialLedger(
        data.tenantId,
      );
      return {
        success: true,
        message: 'Financial ledger fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetLedger Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching financial ledger',
      });
    }
  }
}
