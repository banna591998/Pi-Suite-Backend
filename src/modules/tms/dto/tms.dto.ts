import { z } from 'zod';

export const CreateVehicleSchema = z.object({
  vehicleNumber: z.string().min(3, 'Vehicle number is required'),
  driverName: z.string().min(2, 'Driver name is required'),
  phoneNumber: z.string().min(10, 'Valid phone number required'),
  capacityKg: z.number().positive('Capacity must be greater than zero'),
});

export const CreateShipmentSchema = z.object({
  trackingNumber: z.string().min(3, 'Tracking number is required'),
  vehicleId: z.string().uuid().optional(),
  origin: z.string().min(2, 'Origin is required'),
  destination: z.string().min(2, 'Destination is required'),
  freightCost: z.number().positive('Freight cost must be positive'),
});

export const UpdateVehicleLocationSchema = z.object({
  currentLat: z.number(),
  currentLng: z.number(),
});

export const VerifyPoDSchema = z.object({
  podOtp: z.string().length(6, 'OTP must be 6 digits'),
});

export type CreateVehicleDto = z.infer<typeof CreateVehicleSchema>;
export type CreateShipmentDto = z.infer<typeof CreateShipmentSchema>;
export type UpdateVehicleLocationDto = z.infer<
  typeof UpdateVehicleLocationSchema
>;
export type VerifyPoDDto = z.infer<typeof VerifyPoDSchema>;
