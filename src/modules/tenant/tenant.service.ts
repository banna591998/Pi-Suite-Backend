import {
  Injectable,
  Inject,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { TenantRepository } from './tenant.repository';
import { CreateTenantDto, UpdateTenantDto } from './dto/tenant.dto';

@Injectable()
export class TenantService {
  constructor(
    @Inject(TenantRepository) private readonly tenantRepo: TenantRepository,
  ) {}
  // tenant.service.ts
  async getAllActiveTenants() {
    return await this.tenantRepo.findAllActive();
  }
  async createTenant(dto: CreateTenantDto) {
    // Check if slug already exists to maintain consistency and uniqueness
    const existing = await this.tenantRepo.findBySlug(dto.slug);
    if (existing) {
      throw new ConflictException(
        `Tenant with slug '${dto.slug}' already exists.`,
      );
    }
    return await this.tenantRepo.create(dto);
  }

  async getTenantById(id: string) {
    const tenant = await this.tenantRepo.findById(id);
    if (!tenant) {
      throw new NotFoundException('Tenant/Company profile not found.');
    }
    return tenant;
  }

  async updateTenant(id: string, dto: UpdateTenantDto) {
    await this.getTenantById(id); // Ensure existence before update
    return await this.tenantRepo.update(id, dto);
  }

  async deleteTenant(id: string) {
    await this.getTenantById(id); // Ensure existence before deletion
    return await this.tenantRepo.delete(id);
  }
}
