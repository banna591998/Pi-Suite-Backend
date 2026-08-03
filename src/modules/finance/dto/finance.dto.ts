import { z } from 'zod';

export const createAssetSchema = z.object({
  assetName: z.string().min(2, 'Asset name is required'),
  serialNumber: z.string().min(2, 'Serial number is required'),
  category: z.string().min(2, 'Category is required'),
  purchaseCost: z.number().positive('Purchase cost must be positive'),
  salvageValue: z.number().nonnegative().optional().default(0),
  usefulLifeYears: z
    .number()
    .int()
    .positive('Useful life must be at least 1 year'),
  purchaseDate: z.string().datetime('Invalid purchase date format'),
});

export const landedCostSchema = z.object({
  productId: z.string().uuid('Invalid Product ID'),
  baseProductCost: z.number().positive(),
  freightCost: z.number().nonnegative().optional().default(0),
  customsDuty: z.number().nonnegative().optional().default(0),
  insurance: z.number().nonnegative().optional().default(0),
  tax: z.number().nonnegative().optional().default(0),
});

export const financialLedgerSchema = z.object({
  transactionNo: z.string().min(2),
  currency: z.enum(['USD', 'EUR', 'BDT', 'GBP', 'CAD']),
  amount: z.number().positive(),
  exchangeRate: z.number().positive().default(1.0),
  category: z.string().min(2),
  referenceId: z.string().optional(),
  description: z.string(),
});

export type CreateAssetDto = z.infer<typeof createAssetSchema>;
export type LandedCostDto = z.infer<typeof landedCostSchema>;
export type FinancialLedgerDto = z.infer<typeof financialLedgerSchema>;
