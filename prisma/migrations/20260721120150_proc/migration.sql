
CREATE TYPE "RfqStatus" AS ENUM ('SENT', 'RECEIVED', 'ACCEPTED', 'REJECTED');


CREATE TYPE "PoStatus" AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'FULFILLED', 'CANCELLED');


CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "RequestForQuote" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "itemDetails" TEXT NOT NULL,
    "targetPrice" DOUBLE PRECISION NOT NULL,
    "status" "RfqStatus" NOT NULL DEFAULT 'SENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequestForQuote_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "PurchaseOrder" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "poNumber" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "status" "PoStatus" NOT NULL DEFAULT 'DRAFT',
    "invoiceMatch" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("id")
);


CREATE INDEX "Vendor_tenantId_idx" ON "Vendor"("tenantId");


CREATE INDEX "Vendor_tenantId_email_idx" ON "Vendor"("tenantId", "email");


CREATE INDEX "RequestForQuote_tenantId_idx" ON "RequestForQuote"("tenantId");


CREATE INDEX "RequestForQuote_tenantId_status_idx" ON "RequestForQuote"("tenantId", "status");


CREATE UNIQUE INDEX "PurchaseOrder_poNumber_key" ON "PurchaseOrder"("poNumber");


CREATE INDEX "PurchaseOrder_tenantId_idx" ON "PurchaseOrder"("tenantId");


CREATE INDEX "PurchaseOrder_tenantId_poNumber_idx" ON "PurchaseOrder"("tenantId", "poNumber");


CREATE INDEX "PurchaseOrder_tenantId_status_idx" ON "PurchaseOrder"("tenantId", "status");


ALTER TABLE "RequestForQuote" ADD CONSTRAINT "RequestForQuote_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
