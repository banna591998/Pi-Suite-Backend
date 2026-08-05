import { Inject, Injectable } from '@nestjs/common';
import {
  CreateAssetDto,
  LandedCostDto,
  FinancialLedgerDto,
} from './dto/finance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FinanceRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createAsset(tenantId: string, dto: CreateAssetDto) {
    const usefulLife = dto.usefulLifeYears;
    const nextMaint = new Date(dto.purchaseDate);
    nextMaint.setMonth(nextMaint.getMonth() + 6); 

    return this.prisma.enterpriseAsset.create({
      data: {
        tenantId,
        assetName: dto.assetName,
        serialNumber: dto.serialNumber,
        category: dto.category,
        purchaseCost: dto.purchaseCost,
        salvageValue: dto.salvageValue,
        usefulLifeYears: usefulLife,
        purchaseDate: new Date(dto.purchaseDate),
        nextMaintenance: nextMaint,
      },
    });
  }

  async findAssets(tenantId: string) {
    return this.prisma.enterpriseAsset.findMany({
      where: { tenantId },
      include: { spareParts: true, maintenanceLogs: true },
    });
  }

  async calculateAndSaveLandedCost(tenantId: string, dto: LandedCostDto) {
    const totalLandedCost =
      dto.baseProductCost +
      dto.freightCost +
      dto.customsDuty +
      dto.insurance +
      dto.tax;

    return this.prisma.landedCostCalculation.create({
      data: {
        tenantId,
        productId: dto.productId,
        baseProductCost: dto.baseProductCost,
        freightCost: dto.freightCost,
        customsDuty: dto.customsDuty,
        insurance: dto.insurance,
        tax: dto.tax,
        totalLandedCost,
      },
    });
  }

  async createLedgerEntry(tenantId: string, dto: FinancialLedgerDto) {
    return this.prisma.financialLedger.create({
      data: {
        tenantId,
        transactionNo: dto.transactionNo,
        currency: dto.currency,
        amount: dto.amount,
        exchangeRate: dto.exchangeRate,
        category: dto.category,
        referenceId: dto.referenceId,
        description: dto.description,
      },
    });
  }

  async getLedgerSummary(tenantId: string) {
    return this.prisma.financialLedger.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
