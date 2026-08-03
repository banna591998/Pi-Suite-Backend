/*
  Warnings:

  - A unique constraint covering the columns `[stripeSubId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userCount` on table `Subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "permissions" TEXT[],
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'TENANT_ADMIN',
ADD COLUMN     "setupFee" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "trainingFee" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ALTER COLUMN "userCount" SET NOT NULL,
ALTER COLUMN "userCount" SET DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripeSubId_key" ON "Subscription"("stripeSubId");
