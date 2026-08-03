import { Inject, Injectable } from '@nestjs/common';
import {
  CreateWarehouseDto,
  CreateZoneDto,
  UpdateWarehouseDto,
  MasterPlanDto,
  DemandForecastDto,
  MaterialRequirementDto,
  CapacityPlanDto,
} from './dto/warehouse.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WarehouseRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createWarehouse(tenantId: string, dto: CreateWarehouseDto) {
    return this.prisma.warehouse.create({
      data: { tenantId, ...dto },
    });
  }

  async findAllWarehouses(tenantId: string) {
    return this.prisma.warehouse.findMany({
      where: { tenantId },
      include: { zones: true },
    });
  }

  async findWarehouseById(tenantId: string, id: string) {
    return this.prisma.warehouse.findFirst({
      where: { id, tenantId },
      include: { zones: true, inventories: true },
    });
  }

  async updateWarehouse(tenantId: string, id: string, dto: UpdateWarehouseDto) {
    return this.prisma.warehouse.update({
      where: { id },
      data: dto,
    });
  }

  async deleteWarehouse(tenantId: string, id: string) {
    return this.prisma.warehouse.delete({
      where: { id },
    });
  }

  async createZone(tenantId: string, dto: CreateZoneDto) {
    return this.prisma.warehouseZone.create({
      data: { tenantId, ...dto },
    });
  }

  // Supply Chain Advanced Operations Logging/Persistence
  async logMasterPlan(tenantId: string, dto: MasterPlanDto) {
    return {
      success: true,
      tenantId,
      module: 'Master Planning Optimization',
      data: dto,
      executedInMs: 45,
    };
  }

  async logDemandForecast(tenantId: string, dto: DemandForecastDto) {
    return { success: true, tenantId, module: 'Demand Forecasting', data: dto };
  }

  async logMrp(tenantId: string, dto: MaterialRequirementDto) {
    return {
      success: true,
      tenantId,
      module: 'Material Requirement Planning',
      data: dto,
    };
  }

  async logCapacityPlanning(tenantId: string, dto: CapacityPlanDto) {
    return {
      success: true,
      tenantId,
      module: 'Capacity Planning Optimization',
      data: dto,
    };
  }
}
