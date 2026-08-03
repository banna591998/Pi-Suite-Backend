/*
  Warnings:

  - You are about to drop the column `stripeAccountId` on the `Tenant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "stripeAccountId",
ADD COLUMN     "stripeWebhookSecret" TEXT;
