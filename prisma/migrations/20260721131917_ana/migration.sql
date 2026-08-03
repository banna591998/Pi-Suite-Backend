-- CreateTable
CREATE TABLE "InventoryTurnoverMetric" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "productSku" TEXT NOT NULL,
    "turnoverRatio" DOUBLE PRECISION NOT NULL,
    "holdingCost" DOUBLE PRECISION NOT NULL,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryTurnoverMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtifMetric" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "isOnTime" BOOLEAN NOT NULL,
    "isFull" BOOLEAN NOT NULL,
    "performanceDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OtifMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplyChainBottleneck" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "processStage" TEXT NOT NULL,
    "delayHours" DOUBLE PRECISION NOT NULL,
    "severity" TEXT NOT NULL,
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupplyChainBottleneck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomReportConfig" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "reportName" TEXT NOT NULL,
    "querySql" TEXT NOT NULL,
    "formatType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomReportConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "InventoryTurnoverMetric_tenantId_idx" ON "InventoryTurnoverMetric"("tenantId");

-- CreateIndex
CREATE INDEX "OtifMetric_tenantId_idx" ON "OtifMetric"("tenantId");

-- CreateIndex
CREATE INDEX "SupplyChainBottleneck_tenantId_idx" ON "SupplyChainBottleneck"("tenantId");

-- CreateIndex
CREATE INDEX "CustomReportConfig_tenantId_idx" ON "CustomReportConfig"("tenantId");
