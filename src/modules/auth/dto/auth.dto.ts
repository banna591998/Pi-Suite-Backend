import { z } from 'zod';

export const RegisterTenantSchema = z.object({
  companyName: z.string().min(2),
  slug: z.string().min(2).lowercase(),
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  slug: z.string().optional(),
  tenantId: z.string().optional(),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email(),
  token: z.string(),
  newPassword: z.string().min(8),
});

export class RegisterTenantDto {
  companyName!: string;
  slug!: string;
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
}

export class LoginDto {
  email!: string;
  password!: string;
  slug?: string;
  tenantId?: string;
}

export class ForgotPasswordDto {
  email!: string;
}

export class ResetPasswordDto {
  email!: string;
  token!: string;
  newPassword!: string;
}
