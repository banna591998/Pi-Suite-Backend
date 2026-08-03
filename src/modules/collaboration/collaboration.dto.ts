import { z } from 'zod';

export const supplierPortalSchema = z.object({
  supplierName: z.string().min(2, 'Supplier name is required'),
  supplierEmail: z.string().email('Invalid email address'),
  invoiceNo: z.string().min(2, 'Invoice number is required'),
  shippingStatus: z.enum([
    'PENDING',
    'DISPATCHED',
    'IN_TRANSIT',
    'DELIVERED',
    'RETURNED',
    'DELAYED',
  ]),
});

export const clientTrackingSchema = z.object({
  trackingCode: z.string().min(4, 'Tracking code is required'),
  clientName: z.string().min(2, 'Client name is required'),
  clientEmail: z.string().email('Invalid email address'),
  currentLocation: z.string().min(2, 'Location is required'),
  status: z.enum([
    'PENDING',
    'DISPATCHED',
    'IN_TRANSIT',
    'DELIVERED',
    'RETURNED',
    'DELAYED',
  ]),
  estimatedDelivery: z.string().min(2, 'Estimated delivery date is required'),
});

export const contractManufacturingSchema = z.object({
  factoryName: z.string().min(2, 'Factory name is required'),
  productName: z.string().min(2, 'Product name is required'),
  quantity: z.number().int().positive('Quantity must be positive'),
  status: z.enum([
    'PLANNED',
    'IN_PROGRESS',
    'QUALITY_TESTING',
    'COMPLETED',
    'CANCELLED',
  ]),
  dueDate: z.string().min(2, 'Due date is required'),
});

export const freightBiddingSchema = z.object({
  routeCode: z.string().min(2, 'Route code is required'),
  truckType: z.string().min(2, 'Truck type is required'),
  offeredRate: z.number().positive('Offered rate must be positive'),
  carrierName: z.string().min(2, 'Carrier name is required'),
});

export type SupplierPortalDto = z.infer<typeof supplierPortalSchema>;
export type ClientTrackingDto = z.infer<typeof clientTrackingSchema>;
export type ContractManufacturingDto = z.infer<
  typeof contractManufacturingSchema
>;
export type FreightBiddingDto = z.infer<typeof freightBiddingSchema>;
