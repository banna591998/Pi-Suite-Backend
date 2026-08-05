import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class RoleRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async findSubscriptionByTenantId(tenantId: string) {
    return await this.prisma.subscription.findUnique({
      where: { tenantId },
    });
  }

  async countTenantRoles(tenantId: string) {
    return await this.prisma.role.count({
      where: { tenantId },
    });
  }

  async createRole(tenantId: string, dto: CreateRoleDto) {
    return await this.prisma.role.upsert({
      where: {
        name_tenantId: {
          name: dto.name as any,
          tenantId: tenantId,
        },
      },
      update: {
        description: dto.description,
        rolePermissions: {
          deleteMany: {},
          create: dto.permissionIds.map((permissionId) => ({
            permissionId,
          })),
        },
      },
      create: {
        name: dto.name as any,
        description: dto.description,
        tenantId: tenantId,
        rolePermissions: {
          create: dto.permissionIds.map((permissionId) => ({
            permissionId,
          })),
        },
      },
      include: {
        rolePermissions: {
          include: { permission: true },
        },
      },
    });
  }

  async findAllRoles(tenantId: string) {
    return await this.prisma.role.findMany({
      where: { tenantId },
      include: {
        rolePermissions: {
          include: { permission: true },
        },
      },
    });
  }

  async findRoleById(id: string, tenantId: string) {
    return await this.prisma.role.findFirst({
      where: { id, tenantId },
      include: {
        rolePermissions: {
          include: { permission: true },
        },
      },
    });
  }

  async updateRole(id: string, tenantId: string, dto: UpdateRoleDto) {
    if (dto.permissionIds) {
      await this.prisma.rolePermission.deleteMany({
        where: { roleId: id },
      });
    }

    return await this.prisma.role.update({
      where: { id },
      data: {
        name: dto.name as any,
        description: dto.description,
        ...(dto.permissionIds && {
          rolePermissions: {
            create: dto.permissionIds.map((permissionId) => ({
              permissionId,
            })),
          },
        }),
      },
      include: {
        rolePermissions: {
          include: { permission: true },
        },
      },
    });
  }

  async deleteRole(id: string) {
    return await this.prisma.role.delete({
      where: { id },
    });
  }

  
  async getEnterpriseRoleEnums() {
    return [
      'SUPER_ADMIN',
      'TENANT_ADMIN',
      'WMS_MANAGER',
      'TMS_MANAGER',
      'PROCUREMENT_OFFICER',
      'FINANCE_CONTROLLER',
      'SUPPLY_CHAIN_ANALYST',
      'INVENTORY_CLERK',
      'VENDOR_REPRESENTATIVE',
      'COMPLIANCE_AUDITOR',
      'ADMIN',
      'MANAGER',
      'STAFF',
      'EDITOR',
      'WMS_SUPERVISOR',
    ];
  }
  async getAllPermissions() {
    return await this.prisma.permission.findMany();
  }
  async assignRoleToUser(
    tenantId: string,
    dto: {
      email: string;
      password?: string;
      roleId: string;
      firstName?: string;
      lastName?: string;
    },
  ) {
    const existingUser = await this.prisma.user.findFirst({
      where: { email: dto.email, tenantId },
      include: { userRoles: true },
    });

    const plainPassword = dto.password || 'DefaultPassword123@';
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(plainPassword, saltRounds);

    if (existingUser) {
      return await this.prisma.user.update({
        where: { id: existingUser.id },
        data: {
          userRoles: {
            deleteMany: {},
            create: {
              roleId: dto.roleId,
            },
          },
        },
        include: {
          userRoles: {
            include: { role: true },
          },
        },
      });
    }

    return await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash: passwordHash,
        firstName: dto.firstName || 'Employee',
        lastName: dto.lastName || 'Staff',
        tenantId: tenantId,
        userRoles: {
          create: {
            roleId: dto.roleId,
          },
        },
      },
      include: {
        userRoles: {
          include: { role: true },
        },
      },
    });
  }
}
