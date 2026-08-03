/*
  Warnings:

  - Added the required column `itemId` to the `BillOfMaterials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BillOfMaterials" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "itemId" TEXT NOT NULL,
ADD COLUMN     "operations" JSONB,
ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "WorkOrder" ADD COLUMN     "plannedEndDate" TIMESTAMP(3),
ADD COLUMN     "plannedStartDate" TIMESTAMP(3),
ADD COLUMN     "producedQty" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "itemCode" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemGroup" TEXT NOT NULL,
    "uom" TEXT NOT NULL,
    "standardRate" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workstation" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "workstationName" TEXT NOT NULL,
    "hourRate" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workstation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operation" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "operationName" TEXT NOT NULL,
    "workstationId" TEXT NOT NULL,
    "timeInMinutes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_itemCode_key" ON "Item"("itemCode");

-- CreateIndex
CREATE INDEX "Item_tenantId_idx" ON "Item"("tenantId");

-- CreateIndex
CREATE INDEX "Item_tenantId_itemCode_idx" ON "Item"("tenantId", "itemCode");

-- CreateIndex
CREATE INDEX "Workstation_tenantId_idx" ON "Workstation"("tenantId");

-- CreateIndex
CREATE INDEX "Operation_tenantId_idx" ON "Operation"("tenantId");

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillOfMaterials" ADD CONSTRAINT "BillOfMaterials_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
