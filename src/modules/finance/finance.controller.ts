import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UsePipes,
  Inject,
} from '@nestjs/common';
import { FinanceService } from './finance.service';
import {
  type CreateAssetDto,
  type LandedCostDto,
  type FinancialLedgerDto,
  type createAssetSchema,
  type landedCostSchema,
  type financialLedgerSchema,
} from './dto/finance.dto';

@Controller('finance')
export class FinanceController {
  constructor(
    @Inject(FinanceService) private readonly financeService: FinanceService,
  ) {}

  @Post('assets')
  async registerAsset(
    @Query('tenantId') tenantId: string,
    @Body() dto: CreateAssetDto,
  ) {
    return this.financeService.registerAsset(tenantId, dto);
  }

  @Get('assets')
  async getAssetsWithDepreciation(@Query('tenantId') tenantId: string) {
    return this.financeService.getAllAssets(tenantId);
  }

  @Post('landed-cost')
  async calculateLandedCost(
    @Query('tenantId') tenantId: string,
    @Body() dto: LandedCostDto,
  ) {
    return this.financeService.computeLandedCost(tenantId, dto);
  }

  @Post('ledger')
  async addLedgerEntry(
    @Query('tenantId') tenantId: string,
    @Body() dto: FinancialLedgerDto,
  ) {
    return this.financeService.recordTransaction(tenantId, dto);
  }

  @Get('ledger')
  async getLedger(@Query('tenantId') tenantId: string) {
    return this.financeService.getFinancialLedger(tenantId);
  }
}
