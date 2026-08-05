import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTenantDto, UpdateTenantDto } from './dto/tenant.dto';

@Injectable()
export class TenantRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}
  
  async findAllActive() {
    return await this.prisma.tenant.findMany({
      where: { isActive: true },
      select: {
        id: true,
        companyName: true,
        slug: true,
        isActive: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  
  async findById(id: string) {
    return await this.prisma.tenant.findUnique({
      where: { id },
      include: { branches: true },
    });
  }

  
  async findBySlug(slug: string) {
    return await this.prisma.tenant.findUnique({
      where: { slug },
      include: { branches: true },
    });
  }

  async create(dto: CreateTenantDto) {
    return await this.prisma.tenant.create({
      data: {
        ...dto,
        branches: {
          create: {
            name: `${dto.companyName} - Main HQ`,
            isMain: true,
            location: dto.address || 'Headquarters',
          },
        },
      },
      include: { branches: true },
    });
  }

  async update(id: string, dto: UpdateTenantDto) {
    return await this.prisma.tenant.update({
      where: { id },
      data: dto,
      include: { branches: true },
    });
  }

  async delete(id: string) {
    return await this.prisma.tenant.delete({
      where: { id },
    });
  }
}
