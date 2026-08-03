/*
  Warnings:

  - Changed the type of `name` on the `Role` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EnterpriseRole" AS ENUM ('SUPER_ADMIN', 'TENANT_ADMIN', 'WMS_MANAGER', 'TMS_MANAGER', 'PROCUREMENT_OFFICER', 'FINANCE_CONTROLLER', 'SUPPLY_CHAIN_ANALYST', 'INVENTORY_CLERK', 'VENDOR_REPRESENTATIVE', 'COMPLIANCE_AUDITOR', 'ADMIN', 'MANAGER', 'STAFF', 'EDITOR');

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "name",
ADD COLUMN     "name" "EnterpriseRole" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_tenantId_key" ON "Role"("name", "tenantId");
