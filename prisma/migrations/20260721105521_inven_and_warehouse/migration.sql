

ALTER TABLE "Warehouse" ADD COLUMN     "capacity3D" DOUBLE PRECISION;


ALTER TABLE "WarehouseZone" ADD COLUMN     "tenantId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;


CREATE INDEX "Warehouse_tenantId_id_idx" ON "Warehouse"("tenantId", "id");


CREATE INDEX "WarehouseZone_tenantId_warehouseId_idx" ON "WarehouseZone"("tenantId", "warehouseId");
