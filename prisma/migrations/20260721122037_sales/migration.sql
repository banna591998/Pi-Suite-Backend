
CREATE TYPE "SalesChannel" AS ENUM ('ECOMMERCE', 'RETAIL', 'WHOLESALE', 'B2B_PORTAL');


CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'ATP_VERIFIED', 'BACKORDERED', 'PROCESSING', 'FULFILLED', 'CANCELLED');


CREATE TABLE "SalesOrder" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "channel" "SalesChannel" NOT NULL DEFAULT 'ECOMMERCE',
    "customerName" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "isBackorder" BOOLEAN NOT NULL DEFAULT false,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesOrder_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "priceId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "taxAmount" DOUBLE PRECISION NOT NULL,
    "discountAmount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "netAmount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "SalesOrder_orderNumber_key" ON "SalesOrder"("orderNumber");


CREATE INDEX "SalesOrder_tenantId_idx" ON "SalesOrder"("tenantId");


CREATE INDEX "SalesOrder_tenantId_orderNumber_idx" ON "SalesOrder"("tenantId", "orderNumber");


CREATE INDEX "SalesOrder_tenantId_status_idx" ON "SalesOrder"("tenantId", "status");


CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");


CREATE INDEX "Invoice_tenantId_idx" ON "Invoice"("tenantId");


CREATE INDEX "Invoice_tenantId_invoiceNumber_idx" ON "Invoice"("tenantId", "invoiceNumber");


ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "SalesOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "SalesOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
