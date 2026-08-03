import { z } from 'zod';

export const auditLogSchema = z.object({
  userId: z.string().min(2, 'User ID is required'),
  action: z.string().min(2, 'Action description is required'),
  details: z.string().min(2, 'Details are required'),
  ipAddress: z.string().min(10, 'Invalid IP address format'),
});

export const rbacAssignmentSchema = z.object({
  userId: z.string().min(2, 'User ID is required'),
  role: z.enum(['SUPER_ADMIN', 'TENANT_ADMIN', 'MANAGER', 'DRIVER', 'LABOR']),
});

export const uptimeRecordSchema = z.object({
  serviceName: z.string().min(2, 'Service name is required'),
  status: z.enum(['UP', 'DOWN', 'DEGRADED']),
  latencyMs: z.number().positive('Latency must be a positive number'),
});

export type AuditLogDto = z.infer<typeof auditLogSchema>;
export type RbacAssignmentDto = z.infer<typeof rbacAssignmentSchema>;
export type UptimeRecordDto = z.infer<typeof uptimeRecordSchema>;
