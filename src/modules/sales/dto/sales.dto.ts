import { z } from 'zod';

export const CreateSalesOrderSchema = z.object({
  orderNumber: z.string().min(3, 'Order number is required'),
  channel: z.enum(['ECOMMERCE', 'RETAIL', 'WHOLESALE', 'B2B_PORTAL']),
  customerName: z.string().min(2, 'Customer name is required'),
  customerEmail: z
    .string()
    .email('Valid customer email is required for invoice notification'),
  items: z
    .array(
      z.object({
        productName: z.string().min(2),
        quantity: z.number().int().positive(),
        priceId: z.string().uuid('Invalid Price UUID'),
      }),
    )
    .min(1, 'At least one order item is required'),
});

export const GenerateInvoiceSchema = z.object({
  invoiceNumber: z.string().min(3, 'Invoice number is required'),
  taxAmount: z.number().nonnegative(),
  discountAmount: z.number().nonnegative().default(0.0),
});

export type CreateSalesOrderDto = z.infer<typeof CreateSalesOrderSchema>;
export type GenerateInvoiceDto = z.infer<typeof GenerateInvoiceSchema>;
