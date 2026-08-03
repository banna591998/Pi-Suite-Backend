import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  PrismaClient,
  User as PrismaUser,
  Tenant as PrismaTenant,
  Role as PrismaRole,
  UserRole,
  RefreshToken,
} from 'prisma/src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

export interface UserWithRoles extends PrismaUser {
  userRoles: (UserRole & {
    role: PrismaRole;
  })[];
}

@Injectable()
export class AuthRepository implements OnModuleInit {
  private shardPools: PrismaClient[] = [];

  constructor(
    @Inject('mainClient') private readonly mainClient: PrismaClient,
  ) {}

  async onModuleInit(): Promise<void> {
    const shardUrls = [
      process.env.DATABASE_URL_SHARD_A || process.env.DATABASE_URL!,
      process.env.DATABASE_URL_SHARD_B || process.env.DATABASE_URL!,
    ];

    this.shardPools = shardUrls.map((url) => {
      const pool = new Pool({
        connectionString: url,
        max: 10,
        ssl: { rejectUnauthorized: false },
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000,
      });

      const adapter = new PrismaPg(pool);
      return new PrismaClient({ adapter });
    });
  }

  public getShardByTenant(tenantId: string): PrismaClient {
    const charCodeSum = tenantId
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const targetIndex = charCodeSum % this.shardPools.length;
    return this.shardPools[targetIndex];
  }

  async findTenantBySlug(slug: string): Promise<PrismaTenant | null> {
    return this.mainClient.tenant.findUnique({ where: { slug } });
  }

  async findUserByEmail(email: string): Promise<UserWithRoles | null> {
    const user = await this.mainClient.user.findUnique({
      where: { email },
      include: {
        userRoles: { include: { role: true } },
      },
    });
    return user as UserWithRoles | null;
  }

  async createTenantUser(dto: {
    tenantId: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    roleId: string;
  }) {
    return this.mainClient.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          passwordHash: dto.passwordHash, // সঠিক হাশ পাসওয়ার্ড
          tenantId: dto.tenantId,
        },
      });

      await tx.userRole.create({
        data: {
          userId: user.id,
          roleId: dto.roleId,
        },
      });

      return user;
    });
  }

  async createRefreshToken(
    userId: string,
    token: string,
    expiresAt: Date,
  ): Promise<RefreshToken> {
    return this.mainClient.refreshToken.create({
      data: { userId, token, expiresAt },
    });
  }

  async updateUserResetToken(
    userId: string,
    token: string,
    expiresAt: Date,
  ): Promise<void> {
    await this.mainClient.user.update({
      where: { id: userId },
      data: { resetToken: token, resetTokenExpires: expiresAt },
    });
  }

  async validateResetToken(email: string, token: string): Promise<any> {
    return this.mainClient.user.findFirst({
      where: { email, resetToken: token },
    });
  }

  async updatePasswordAndClearToken(
    userId: string,
    passwordHash: string,
  ): Promise<void> {
    await this.mainClient.user.update({
      where: { id: userId },
      data: { passwordHash, resetToken: null, resetTokenExpires: null },
    });
  }

  async executeTenantRegistrationTx(
    dto: any,
    passwordHash: string,
  ): Promise<{ user: PrismaUser; tenant: PrismaTenant }> {
    return this.mainClient.$transaction(async (tx) => {
      const tenant = await tx.tenant.create({
        data: { companyName: dto.companyName, slug: dto.slug },
      });

      const adminRole = await tx.role.create({
        data: { name: 'TENANT_ADMIN' as any, tenantId: tenant.id },
      });

      const user = await tx.user.create({
        data: {
          email: dto.email,
          passwordHash,
          firstName: dto.firstName,
          lastName: dto.lastName,
          tenantId: tenant.id,
        },
      });

      await tx.userRole.create({
        data: { userId: user.id, roleId: adminRole.id },
      });

      return { user, tenant };
    });
  }
}
