import { z } from 'zod';

export const CreateSubscriptionSchema = z.object({
  tenantId: z.string().uuid(),
  userCount: z.number().min(10, 'Minimum user count must be at least 10'),
  customerName: z.string().optional(),
  customModuleHours: z.number().min(0).optional(),
});

export const CustomerPaymentSchema = z.object({
  tenantId: z.string().uuid(),
  amount: z.number().positive(),
  customerEmail: z.string().email(),
});

export type CreateSubscriptionDto = z.infer<typeof CreateSubscriptionSchema>;
export type CustomerPaymentDto = z.infer<typeof CustomerPaymentSchema>;
