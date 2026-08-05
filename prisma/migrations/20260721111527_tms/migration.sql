
CREATE TYPE "VehicleStatus" AS ENUM ('IDLE', 'ON_TRIP', 'MAINTENANCE', 'OFFLINE');


CREATE TYPE "ShipmentStatus" AS ENUM ('DISPATCHED', 'IN_TRANSIT', 'DELIVERED', 'RETURNED', 'DELAYED');


CREATE TABLE "FleetVehicle" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "vehicleNumber" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "capacityKg" DOUBLE PRECISION NOT NULL,
    "currentLat" DOUBLE PRECISION,
    "currentLng" DOUBLE PRECISION,
    "status" "VehicleStatus" NOT NULL DEFAULT 'IDLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FleetVehicle_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "Shipment" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "trackingNumber" TEXT NOT NULL,
    "vehicleId" TEXT,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "freightCost" DOUBLE PRECISION NOT NULL,
    "status" "ShipmentStatus" NOT NULL DEFAULT 'DISPATCHED',
    "eBOLDocumentUrl" TEXT,
    "podOtp" TEXT,
    "deliveredAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "FleetVehicle_vehicleNumber_key" ON "FleetVehicle"("vehicleNumber");


CREATE INDEX "FleetVehicle_tenantId_idx" ON "FleetVehicle"("tenantId");


CREATE INDEX "FleetVehicle_tenantId_status_idx" ON "FleetVehicle"("tenantId", "status");


CREATE UNIQUE INDEX "Shipment_trackingNumber_key" ON "Shipment"("trackingNumber");


CREATE INDEX "Shipment_tenantId_idx" ON "Shipment"("tenantId");


CREATE INDEX "Shipment_tenantId_trackingNumber_idx" ON "Shipment"("tenantId", "trackingNumber");


CREATE INDEX "Shipment_tenantId_status_idx" ON "Shipment"("tenantId", "status");


ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "FleetVehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
