import { Inject, Injectable } from '@nestjs/common';
import { CreateInventoryDto, UpdateInventoryDto } from './dto/inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventoryRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: CreateInventoryDto) {
    return this.prisma.inventoryItem.create({
      data: {
        tenantId,
        ...dto,
      },
    });
  }

  async findAll(tenantId: string, skip = 0, take = 50) {
    return this.prisma.inventoryItem.findMany({
      where: { tenantId },
      skip,
      take,
      orderBy: { updatedAt: 'desc' },
    });
  }

  async findById(tenantId: string, id: string) {
    return this.prisma.inventoryItem.findFirst({
      where: { id, tenantId },
    });
  }

  async update(tenantId: string, id: string, dto: UpdateInventoryDto) {
    return this.prisma.inventoryItem.update({
      where: { id },
      data: dto,
    });
  }

  async remove(tenantId: string, id: string) {
    return this.prisma.inventoryItem.delete({
      where: { id },
    });
  }

  async checkLowStock(tenantId: string) {
    // Automated Reorder Trigger Query O(log N) via index scan
    return this.prisma.$queryRaw`
      SELECT * FROM "InventoryItem" 
      WHERE "tenantId" = ${tenantId} 
      AND "stockCount" <= "reorderPoint"
    `;
  }
}
