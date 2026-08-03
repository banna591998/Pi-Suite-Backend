import { Inject, Injectable } from '@nestjs/common';
import {
  CreateBomDto,
  CreateWorkOrderDto,
  UpdateWorkOrderStatusDto,
} from './dto/manufacturing.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ManufacturingRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createBom(tenantId: string, dto: CreateBomDto) {
    // মোট কস্ট ক্যালকুলেশন (Raw materials + Operations)
    const rawMaterialsCost = dto.rawMaterials.reduce(
      (acc, item) => acc + item.requiredQuantity * item.unitRate,
      0,
    );

    const operationsCost = dto.operations
      ? dto.operations.reduce((acc, op) => acc + op.operatingCost, 0)
      : 0;

    const totalCost = rawMaterialsCost + operationsCost;

    return this.prisma.billOfMaterials.create({
      data: {
        tenantId,
        itemId: dto.itemId,
        productName: dto.productName,
        rawMaterials: dto.rawMaterials as any,
        operations: dto.operations ? (dto.operations as any) : [],
        version: dto.version,
        isDefault: dto.isDefault,
        totalCost,
      },
    });
  }

  async findAllBoms(tenantId: string) {
    return this.prisma.billOfMaterials.findMany({
      where: { tenantId, isActive: true },
      include: { item: true, workOrders: true },
    });
  }

  async findBomById(tenantId: string, id: string) {
    return this.prisma.billOfMaterials.findFirst({
      where: { id, tenantId },
      include: { item: true },
    });
  }

  async createWorkOrder(tenantId: string, dto: CreateWorkOrderDto) {
    return this.prisma.workOrder.create({
      data: {
        tenantId,
        orderNumber: dto.orderNumber,
        bomId: dto.bomId,
        quantity: dto.quantity,
        assignedLine: dto.assignedLine,
        plannedStartDate: dto.plannedStartDate
          ? new Date(dto.plannedStartDate)
          : undefined,
        plannedEndDate: dto.plannedEndDate
          ? new Date(dto.plannedEndDate)
          : undefined,
      },
    });
  }

  async findWorkOrderById(tenantId: string, id: string) {
    return this.prisma.workOrder.findFirst({
      where: { id, tenantId },
      include: { bom: true },
    });
  }

  async updateWorkOrderStatus(
    tenantId: string,
    id: string,
    dto: UpdateWorkOrderStatusDto,
  ) {
    return this.prisma.workOrder.update({
      where: { id },
      data: {
        status: dto.status,
        producedQty: dto.producedQty,
      },
    });
  }
}
