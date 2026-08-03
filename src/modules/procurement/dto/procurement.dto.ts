import { z } from 'zod';

export const CreateVendorSchema = z.object({
  name: z.string().min(2, 'Vendor name is required'),
  email: z.string().email('Invalid vendor email format'),
  phoneNumber: z.string().min(10, 'Valid phone number required'),
});

export const CreateRfqSchema = z.object({
  vendorId: z.string().uuid('Invalid vendor UUID'),
  itemDetails: z.string().min(5, 'Item details required'),
  targetPrice: z.number().positive('Target price must be greater than zero'),
});

export const CreatePoSchema = z.object({
  poNumber: z.string().min(3, 'PO Number is required'),
  vendorId: z.string().uuid('Invalid vendor UUID'),
  totalAmount: z.number().positive('Total amount must be positive'),
});

export const ThreeWayMatchSchema = z.object({
  poId: z.string().uuid('Invalid PO UUID'),
  invoicedAmount: z.number().positive(),
  receivedGoodsValue: z.number().positive(),
});

export type CreateVendorDto = z.infer<typeof CreateVendorSchema>;
export type CreateRfqDto = z.infer<typeof CreateRfqSchema>;
export type CreatePoDto = z.infer<typeof CreatePoSchema>;
export type ThreeWayMatchDto = z.infer<typeof ThreeWayMatchSchema>;
