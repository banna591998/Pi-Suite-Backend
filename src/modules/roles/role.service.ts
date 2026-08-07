import {
  Injectable,
  BadRequestException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';

@Injectable()
export class RoleService {
  constructor(
    @Inject(RoleRepository) private readonly roleRepo: RoleRepository,
  ) {}

  async createRole(tenantId: string, dto: CreateRoleDto) {
    const subscription =
      await this.roleRepo.findSubscriptionByTenantId(tenantId);

    if (!subscription || subscription.status !== 'active') {
      throw new BadRequestException(
        'Active subscription not found for this tenant. Please complete payment first.',
      );
    }

    const currentRoleCount = await this.roleRepo.countTenantRoles(tenantId);

    if (currentRoleCount >= subscription?.userCount) {
      throw new BadRequestException(
        `Role creation limit reached. Your current paid plan allows up to ${subscription.userCount} roles/users. Please upgrade your plan.`,
      );
    }

    return await this.roleRepo.createRole(tenantId, dto);
  }

  async getAllRoles(tenantId: string) {
    return await this.roleRepo.findAllRoles(tenantId);
  }

  async getRoleById(id: string, tenantId: string) {
    const role = await this.roleRepo.findRoleById(id, tenantId);
    if (!role) {
      throw new NotFoundException('Role not found or unauthorized');
    }
    return role;
  }

  async updateRole(id: string, tenantId: string, dto: UpdateRoleDto) {
    await this.getRoleById(id, tenantId);
    return await this.roleRepo.updateRole(id, tenantId, dto);
  }

  async deleteRole(id: string, tenantId: string) {
    await this.getRoleById(id, tenantId);
    return await this.roleRepo.deleteRole(id);
  }

  async getEnterpriseRoleEnums() {
    return await this.roleRepo.getEnterpriseRoleEnums();
  }
  async getAllPermissions() {
    return await this.roleRepo.getAllPermissions();
  }
  async assignRoleToUser(dto: {
    email: string;
    password?: string;
    roleId: string;
    tenantId: string;
  }) {
    const subscription = await this.roleRepo.findSubscriptionByTenantId(
      dto.tenantId,
    );
    if (!subscription || subscription.status !== 'active') {
      throw new BadRequestException(
        'Active subscription required to assign roles to employees.',
      );
    }

    return await this.roleRepo.assignRoleToUser(dto.tenantId, {
      email: dto.email,
      password: dto.password,
      roleId: dto.roleId,
    });
  }
}
