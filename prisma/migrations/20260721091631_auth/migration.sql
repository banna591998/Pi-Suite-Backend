
ALTER TYPE "EnterpriseRole" ADD VALUE 'WMS_SUPERVISOR';


ALTER TABLE "Tenant" ADD COLUMN     "address" TEXT,
ADD COLUMN     "contactEmail" TEXT,
ADD COLUMN     "industry" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "size" TEXT;


CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "tenantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);


CREATE INDEX "Branch_tenantId_idx" ON "Branch"("tenantId");


CREATE INDEX "Tenant_slug_idx" ON "Tenant"("slug");


CREATE INDEX "Tenant_companyName_idx" ON "Tenant"("companyName");


ALTER TABLE "Branch" ADD CONSTRAINT "Branch_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
