
CREATE TABLE "SystemUptimeRecord" (
    "id" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "latencyMs" DOUBLE PRECISION NOT NULL,
    "checkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SystemUptimeRecord_pkey" PRIMARY KEY ("id")
);
