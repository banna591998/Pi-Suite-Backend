/*
  Warnings:

  - Added the required column `userCount` to the `TenantSubscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TenantSubscription" ADD COLUMN     "userCount" INTEGER NOT NULL;
