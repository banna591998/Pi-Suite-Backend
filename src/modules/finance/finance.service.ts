import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FinanceRepository } from './finance.repository';
import {
  CreateAssetDto,
  LandedCostDto,
  FinancialLedgerDto,
} from './dto/finance.dto';

@Injectable()
export class FinanceService {
  constructor(
    @Inject(FinanceRepository) private readonly financeRepo: FinanceRepository,
  ) {}

  async registerAsset(tenantId: string, dto: CreateAssetDto) {
    return this.financeRepo.createAsset(tenantId, dto);
  }

  async getAllAssets(tenantId: string) {
    const assets = await this.financeRepo.findAssets(tenantId);

    // Feature 67: Fixed Asset Depreciation Calculation (Straight-Line Method)
    return assets.map((asset) => {
      const yearsElapsed =
        (new Date().getTime() - new Date(asset.purchaseDate).getTime()) /
        (1000 * 60 * 60 * 24 * 365);

      const annualDepreciation =
        (asset.purchaseCost - asset.salvageValue) / asset.usefulLifeYears;

      let currentBookValue =
        asset.purchaseCost - annualDepreciation * yearsElapsed;
      if (currentBookValue < asset.salvageValue) {
        currentBookValue = asset.salvageValue;
      }

      return {
        ...asset,
        currentBookValue: Number(currentBookValue.toFixed(2)),
        annualDepreciation: Number(annualDepreciation.toFixed(2)),
      };
    });
  }

  async computeLandedCost(tenantId: string, dto: LandedCostDto) {
    // Feature 65: Landed Cost Estimation Engine
    return this.financeRepo.calculateAndSaveLandedCost(tenantId, dto);
  }

  async recordTransaction(tenantId: string, dto: FinancialLedgerDto) {
    // Feature 63: Multi-Currency Ledger conversion normalization
    const normalizedAmountUSD = dto.amount / dto.exchangeRate;

    return this.financeRepo.createLedgerEntry(tenantId, {
      ...dto,
      amount: Number(normalizedAmountUSD.toFixed(2)), // Stored in base USD equivalent
    });
  }

  async getFinancialLedger(tenantId: string) {
    return this.financeRepo.getLedgerSummary(tenantId);
  }
}
