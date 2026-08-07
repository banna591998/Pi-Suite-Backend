import { z } from 'zod';

export const createRoleSchema = z.object({
  tenantId: z.string().uuid({ message: 'Invalid tenant ID format' }),
  name: z
    .string()
    .min(2, { message: 'Role name must be at least 2 characters long' }),
  description: z.string().optional(),
  permissionIds: z
    .array(z.string().uuid())
    .min(1, { message: 'At least one permission is required' }),
});

export const updateRoleSchema = z.object({
  name: z.string().min(2).optional(),
  description: z.string().optional(),
  permissionIds: z.array(z.string().uuid()).optional(),
});

export type CreateRoleDto = z.infer<typeof createRoleSchema>;
export type UpdateRoleDto = z.infer<typeof updateRoleSchema>;
