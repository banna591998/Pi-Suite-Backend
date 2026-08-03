import { z } from 'zod';

export const RawMaterialItemSchema = z.object({
  materialCode: z.string().min(1, 'Material code is required'),
  materialName: z.string().min(2, 'Material name is required'),
  requiredQuantity: z.number().positive('Quantity must be positive'),
  unit: z.string().min(1, 'Unit is required'),
  unitRate: z.number().nonnegative('Unit rate cannot be negative'),
});

export const OperationItemSchema = z.object({
  operationId: z.string().uuid('Invalid Operation UUID'),
  sequence: z.number().int().positive(),
  timeInMinutes: z.number().int().positive(),
  operatingCost: z.number().nonnegative(),
});

export const CreateBomSchema = z.object({
  itemId: z.string().uuid('Invalid Item UUID'),
  productName: z.string().min(2, 'Product name is required'),
  rawMaterials: z
    .array(RawMaterialItemSchema)
    .min(1, 'At least one raw material required for BOM'),
  operations: z.array(OperationItemSchema).optional(),
  version: z.number().int().positive().default(1),
  isDefault: z.boolean().default(true),
});

export const CreateWorkOrderSchema = z.object({
  orderNumber: z.string().min(3, 'Order number is required'),
  bomId: z.string().uuid('Invalid BOM UUID'),
  quantity: z.number().int().positive('Quantity must be positive'),
  assignedLine: z.string().min(2, 'Assigned production line is required'),
  plannedStartDate: z.string().optional(),
  plannedEndDate: z.string().optional(),
});

export const UpdateWorkOrderStatusSchema = z.object({
  status: z.enum([
    'PLANNED',
    'IN_PROGRESS',
    'QUALITY_TESTING',
    'COMPLETED',
    'CANCELLED',
  ]),
  producedQty: z.number().int().nonnegative().optional(),
});

export type CreateBomDto = z.infer<typeof CreateBomSchema>;
export type CreateWorkOrderDto = z.infer<typeof CreateWorkOrderSchema>;
export type UpdateWorkOrderStatusDto = z.infer<
  typeof UpdateWorkOrderStatusSchema
>;
