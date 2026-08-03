import { z } from 'zod';

export const createTenantSchema = z.object({
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters long'),
  slug: z.string().min(2, 'Slug must be unique and valid').toLowerCase(),
  industry: z.string().optional(),
  size: z.string().optional(),
  address: z.string().optional(),
  contactEmail: z.string().email('Invalid contact email format').optional(),
  phone: z.string().optional(),
});

export const updateTenantSchema = createTenantSchema.partial();

export type CreateTenantDto = z.infer<typeof createTenantSchema>;
export type UpdateTenantDto = z.infer<typeof updateTenantSchema>;
