
CREATE TABLE "BillOfMaterials" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "rawMaterials" JSONB NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillOfMaterials_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "WorkOrder" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "bomId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" "WorkOrderStatus" NOT NULL DEFAULT 'PLANNED',
    "assignedLine" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkOrder_pkey" PRIMARY KEY ("id")
);


CREATE INDEX "BillOfMaterials_tenantId_idx" ON "BillOfMaterials"("tenantId");


CREATE INDEX "BillOfMaterials_tenantId_productName_idx" ON "BillOfMaterials"("tenantId", "productName");


CREATE UNIQUE INDEX "WorkOrder_orderNumber_key" ON "WorkOrder"("orderNumber");


CREATE INDEX "WorkOrder_tenantId_idx" ON "WorkOrder"("tenantId");


CREATE INDEX "WorkOrder_tenantId_orderNumber_idx" ON "WorkOrder"("tenantId", "orderNumber");


CREATE INDEX "WorkOrder_tenantId_status_idx" ON "WorkOrder"("tenantId", "status");


ALTER TABLE "WorkOrder" ADD CONSTRAINT "WorkOrder_bomId_fkey" FOREIGN KEY ("bomId") REFERENCES "BillOfMaterials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
