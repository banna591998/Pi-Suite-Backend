

ALTER TABLE "Tenant" DROP COLUMN "stripeAccountId",
ADD COLUMN     "stripeWebhookSecret" TEXT;
