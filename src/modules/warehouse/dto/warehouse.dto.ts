import { z } from 'zod';

export const CreateWarehouseSchema = z.object({
  name: z.string().min(2, 'Warehouse name is required'),
  location: z.string().min(2, 'Location is required'),
  capacity3D: z.number().positive().optional(),
});

export const CreateZoneSchema = z.object({
  warehouseId: z.string().uuid(),
  zoneName: z.string().min(1, 'Zone name is required'),
});

export const MasterPlanSchema = z.object({
  planName: z.string().min(2, 'Plan name is required'),
  itemCode: z.string().min(1, 'Item code is required'),
  demandForecast: z.number().positive(),
  availableCapacity: z.number().positive(),
  leadTimeDays: z.number().int().positive(),
  safetyStock: z.number().nonnegative(),
});

export const DemandForecastSchema = z.object({
  productName: z.string().min(2, 'Product name is required'),
  predictedDemand: z.number().positive(),
  forecastAccuracyRate: z.number().min(0).max(100),
  period: z.string().min(2, 'Period is required (e.g., Q3-2026)'),
});

export const MaterialRequirementSchema = z.object({
  materialName: z.string().min(2, 'Material name is required'),
  requiredQuantity: z.number().positive(),
  scheduledReleaseDate: z.string().min(2, 'Release date is required'),
  carryingCostLimit: z.number().positive(),
});

export const CapacityPlanSchema = z.object({
  resourceName: z.string().min(2, 'Resource or machine name is required'),
  allocatedHours: z.number().positive(),
  maxCapacityHours: z.number().positive(),
  overtimeAllowed: z.boolean(),
});

export const InventoryPolicySchema = z.object({
  policyName: z.string().min(2, 'Policy name is required'),
  turnoverTarget: z.number().positive(),
  reorderPoint: z.number().nonnegative(),
  dynamicAdjustment: z.boolean(),
});

export const UpdateWarehouseSchema = CreateWarehouseSchema.partial();

export type CreateWarehouseDto = z.infer<typeof CreateWarehouseSchema>;
export type CreateZoneDto = z.infer<typeof CreateZoneSchema>;
export type MasterPlanDto = z.infer<typeof MasterPlanSchema>;
export type DemandForecastDto = z.infer<typeof DemandForecastSchema>;
export type MaterialRequirementDto = z.infer<typeof MaterialRequirementSchema>;
export type CapacityPlanDto = z.infer<typeof CapacityPlanSchema>;
export type InventoryPolicyDto = z.infer<typeof InventoryPolicySchema>;
export type UpdateWarehouseDto = z.infer<typeof UpdateWarehouseSchema>;
