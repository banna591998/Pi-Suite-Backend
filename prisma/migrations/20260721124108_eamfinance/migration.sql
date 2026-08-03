-- CreateEnum
CREATE TYPE "AssetStatus" AS ENUM ('OPERATIONAL', 'MAINTENANCE_REQUIRED', 'UNDER_REPAIR', 'DECOMMISSIONED');

-- CreateEnum
CREATE TYPE "CurrencyType" AS ENUM ('USD', 'EUR', 'BDT', 'GBP', 'CAD');

-- CreateTable
CREATE TABLE "EnterpriseAsset" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "assetName" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "purchaseCost" DOUBLE PRECISION NOT NULL,
    "salvageValue" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "usefulLifeYears" INTEGER NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "status" "AssetStatus" NOT NULL DEFAULT 'OPERATIONAL',
    "lastMaintenance" TIMESTAMP(3),
    "nextMaintenance" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EnterpriseAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SparePart" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "partName" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "stockLevel" INTEGER NOT NULL DEFAULT 0,
    "minThreshold" INTEGER NOT NULL DEFAULT 5,
    "unitCost" DOUBLE PRECISION NOT NULL,
    "assetId" TEXT NOT NULL,

    CONSTRAINT "SparePart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetMaintenanceLog" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "performedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssetMaintenanceLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialLedger" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "transactionNo" TEXT NOT NULL,
    "currency" "CurrencyType" NOT NULL DEFAULT 'USD',
    "amount" DOUBLE PRECISION NOT NULL,
    "exchangeRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "category" TEXT NOT NULL,
    "referenceId" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinancialLedger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandedCostCalculation" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "baseProductCost" DOUBLE PRECISION NOT NULL,
    "freightCost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "customsDuty" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "insurance" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tax" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "totalLandedCost" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LandedCostCalculation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EnterpriseAsset_serialNumber_key" ON "EnterpriseAsset"("serialNumber");

-- CreateIndex
CREATE INDEX "EnterpriseAsset_tenantId_idx" ON "EnterpriseAsset"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "SparePart_sku_key" ON "SparePart"("sku");

-- CreateIndex
CREATE INDEX "SparePart_tenantId_assetId_idx" ON "SparePart"("tenantId", "assetId");

-- CreateIndex
CREATE INDEX "AssetMaintenanceLog_tenantId_assetId_idx" ON "AssetMaintenanceLog"("tenantId", "assetId");

-- CreateIndex
CREATE UNIQUE INDEX "FinancialLedger_transactionNo_key" ON "FinancialLedger"("transactionNo");

-- CreateIndex
CREATE INDEX "FinancialLedger_tenantId_idx" ON "FinancialLedger"("tenantId");

-- CreateIndex
CREATE INDEX "LandedCostCalculation_tenantId_idx" ON "LandedCostCalculation"("tenantId");

-- AddForeignKey
ALTER TABLE "SparePart" ADD CONSTRAINT "SparePart_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "EnterpriseAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetMaintenanceLog" ADD CONSTRAINT "AssetMaintenanceLog_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "EnterpriseAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
