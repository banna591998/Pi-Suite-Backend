import { z } from 'zod';

export const inventoryTurnoverSchema = z.object({
  productSku: z.string().min(2, 'Product SKU is required'),
  turnoverRatio: z.number().positive('Turnover ratio must be positive'),
  holdingCost: z.number().positive('Holding cost must be positive'),
});

export const otifMetricSchema = z.object({
  orderId: z.string().min(2, 'Order ID is required'),
  isOnTime: z.boolean(),
  isFull: z.boolean(),
});

export const bottleneckSchema = z.object({
  processStage: z.string().min(2, 'Process stage description is required'),
  delayHours: z.number().positive('Delay hours must be positive'),
  severity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
});

export const customReportSchema = z.object({
  reportName: z.string().min(2, 'Report name is required'),
  querySql: z.string().min(5, 'Query definition is required'),
  formatType: z.enum(['PDF', 'EXCEL', 'CSV']),
});

export type InventoryTurnoverDto = z.infer<typeof inventoryTurnoverSchema>;
export type OtifMetricDto = z.infer<typeof otifMetricSchema>;
export type BottleneckDto = z.infer<typeof bottleneckSchema>;
export type CustomReportDto = z.infer<typeof customReportSchema>;
