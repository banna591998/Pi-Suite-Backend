-- AlterEnum
ALTER TYPE "ShipmentStatus" ADD VALUE 'PENDING';

-- CreateTable
CREATE TABLE "SupplierPortalRecord" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL,
    "supplierEmail" TEXT NOT NULL,
    "invoiceNo" TEXT NOT NULL,
    "shippingStatus" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupplierPortalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientShipmentTracking" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "trackingCode" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "currentLocation" TEXT NOT NULL,
    "status" "ShipmentStatus" NOT NULL DEFAULT 'PENDING',
    "estimatedDelivery" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientShipmentTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractManufacturingOrder" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "factoryName" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContractManufacturingOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigitalFreightBidding" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "routeCode" TEXT NOT NULL,
    "truckType" TEXT NOT NULL,
    "offeredRate" DOUBLE PRECISION NOT NULL,
    "carrierName" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DigitalFreightBidding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SupplierPortalRecord_tenantId_idx" ON "SupplierPortalRecord"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "ClientShipmentTracking_trackingCode_key" ON "ClientShipmentTracking"("trackingCode");

-- CreateIndex
CREATE INDEX "ClientShipmentTracking_tenantId_trackingCode_idx" ON "ClientShipmentTracking"("tenantId", "trackingCode");

-- CreateIndex
CREATE INDEX "ContractManufacturingOrder_tenantId_idx" ON "ContractManufacturingOrder"("tenantId");

-- CreateIndex
CREATE INDEX "DigitalFreightBidding_tenantId_idx" ON "DigitalFreightBidding"("tenantId");
