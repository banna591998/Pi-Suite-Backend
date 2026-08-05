

ALTER TABLE "BillOfMaterials" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "itemId" TEXT NOT NULL,
ADD COLUMN     "operations" JSONB,
ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL DEFAULT 0.0;


ALTER TABLE "WorkOrder" ADD COLUMN     "plannedEndDate" TIMESTAMP(3),
ADD COLUMN     "plannedStartDate" TIMESTAMP(3),
ADD COLUMN     "producedQty" INTEGER NOT NULL DEFAULT 0;


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


CREATE UNIQUE INDEX "Item_itemCode_key" ON "Item"("itemCode");


CREATE INDEX "Item_tenantId_idx" ON "Item"("tenantId");


CREATE INDEX "Item_tenantId_itemCode_idx" ON "Item"("tenantId", "itemCode");


CREATE INDEX "Workstation_tenantId_idx" ON "Workstation"("tenantId");


CREATE INDEX "Operation_tenantId_idx" ON "Operation"("tenantId");


ALTER TABLE "Operation" ADD CONSTRAINT "Operation_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


ALTER TABLE "BillOfMaterials" ADD CONSTRAINT "BillOfMaterials_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
