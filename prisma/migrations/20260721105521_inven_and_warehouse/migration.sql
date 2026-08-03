/*
  Warnings:

  - Added the required column `tenantId` to the `WarehouseZone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WarehouseZone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Warehouse" ADD COLUMN     "capacity3D" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "WarehouseZone" ADD COLUMN     "tenantId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Warehouse_tenantId_id_idx" ON "Warehouse"("tenantId", "id");

-- CreateIndex
CREATE INDEX "WarehouseZone_tenantId_warehouseId_idx" ON "WarehouseZone"("tenantId", "warehouseId");
