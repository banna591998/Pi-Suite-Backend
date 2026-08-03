import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { WarehouseRepository } from './warehouse.repository';
import {
  CreateWarehouseDto,
  CreateZoneDto,
  UpdateWarehouseDto,
  MasterPlanDto,
  DemandForecastDto,
  MaterialRequirementDto,
  CapacityPlanDto,
} from './dto/warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(
    @Inject(WarehouseRepository)
    private readonly warehouseRepo: WarehouseRepository,
  ) {}

  async create(tenantId: string, dto: CreateWarehouseDto) {
    return this.warehouseRepo.createWarehouse(tenantId, dto);
  }

  async findAll(tenantId: string) {
    const warehouses = await this.warehouseRepo.findAllWarehouses(tenantId);
    console.log('Fetched Warehouses from DB:', warehouses); // এটি টার্মিনালে প্রিন্ট করে চেক করুন
    return warehouses;
  }

  async findOne(tenantId: string, id: string) {
    const warehouse = await this.warehouseRepo.findWarehouseById(tenantId, id);
    if (!warehouse) {
      throw new NotFoundException(`Warehouse with ID ${id} not found.`);
    }
    return warehouse;
  }

  async update(tenantId: string, id: string, dto: UpdateWarehouseDto) {
    await this.findOne(tenantId, id);
    return this.warehouseRepo.updateWarehouse(tenantId, id, dto);
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.warehouseRepo.deleteWarehouse(tenantId, id);
  }

  async addZone(tenantId: string, dto: CreateZoneDto) {
    await this.findOne(tenantId, dto.warehouseId);
    return this.warehouseRepo.createZone(tenantId, dto);
  }

  async runMasterPlanning(tenantId: string, dto: MasterPlanDto) {
    return this.warehouseRepo.logMasterPlan(tenantId, dto);
  }

  async createDemandForecast(tenantId: string, dto: DemandForecastDto) {
    return this.warehouseRepo.logDemandForecast(tenantId, dto);
  }

  async calculateMaterialRequirements(
    tenantId: string,
    dto: MaterialRequirementDto,
  ) {
    return this.warehouseRepo.logMrp(tenantId, dto);
  }

  async optimizeCapacity(tenantId: string, dto: CapacityPlanDto) {
    return this.warehouseRepo.logCapacityPlanning(tenantId, dto);
  }
}
