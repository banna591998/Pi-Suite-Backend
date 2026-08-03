import { z } from 'zod';

export const CreateInventorySchema = z.object({
  warehouseId: z.string().uuid(),
  zoneId: z.string().uuid().optional(),
  sku: z.string().min(2),
  name: z.string().min(2),
  stockCount: z.number().int().nonnegative(),
  safetyStock: z.number().int().nonnegative().optional(),
  reorderPoint: z.number().int().nonnegative().optional(),
  batchNumber: z.string().optional(),
  serialNumber: z.string().optional(),
  expiryDate: z
    .string()
    .datetime()
    .optional()
    .transform((val) => (val ? new Date(val) : undefined)),
  qrCode: z.string().optional(),
});
import { z } from 'zod';

export const BulkInventoryImportSchema = z.object({
  warehouseId: z.string().uuid('Valid warehouse ID is required'),
  items: z.array(
    z.object({
      sku: z.string().min(2, 'SKU is required'),
      name: z.string().min(2, 'Product name is required'),
      stockCount: z.number().int().nonnegative(),
      safetyStock: z.number().int().nonnegative().optional(),
      reorderPoint: z.number().int().nonnegative().optional(),
      batchNumber: z.string().optional(),
      serialNumber: z.string().optional(),
      expiryDate: z.string().optional(),
      unitCost: z.number().positive().optional(), // প্রফিট ও ফাইন্যান্সিয়াল অ্যানালাইসিসের জন্য
      sellingPrice: z.number().positive().optional(), // প্রফিট মার্জিন গণনার জন্য
    }),
  ),
});

export type BulkInventoryImportDto = z.infer<typeof BulkInventoryImportSchema>;
export const UpdateInventorySchema = CreateInventorySchema.partial();

export type CreateInventoryDto = z.infer<typeof CreateInventorySchema>;
export type UpdateInventoryDto = z.infer<typeof UpdateInventorySchema>;
