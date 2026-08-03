import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import {
  type CreateWarehouseDto,
  type CreateZoneDto,
  type UpdateWarehouseDto,
  type MasterPlanDto,
  type DemandForecastDto,
  type MaterialRequirementDto,
  type CapacityPlanDto,
} from './dto/warehouse.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { EnterpriseRole } from 'prisma/src/generated/prisma/enums';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('warehouses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class WarehouseController {
  constructor(
    @Inject(WarehouseService)
    private readonly warehouseService: WarehouseService,
  ) {}

  @Post()
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async create(
    @Body() dto: CreateWarehouseDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.warehouseService.create(tenantId, dto);
  }

  @Post('zones')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async createZone(
    @Body() dto: CreateZoneDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.warehouseService.addZone(tenantId, dto);
  }

  @Post('master-planning')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async runMasterPlan(
    @Body() dto: MasterPlanDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.warehouseService.runMasterPlanning(tenantId, dto);
  }

  @Post('demand-forecast')
  @Roles(EnterpriseRole.SUPER_ADMIN, EnterpriseRole.TENANT_ADMIN)
  async createForecast(
    @Body() dto: DemandForecastDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.warehouseService.createDemandForecast(tenantId, dto);
  }

  @Post('material-requirements')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async calculateMrp(
    @Body() dto: MaterialRequirementDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.warehouseService.calculateMaterialRequirements(tenantId, dto);
  }

  @Post('capacity-planning')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async optimizeCapacity(
    @Body() dto: CapacityPlanDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.warehouseService.optimizeCapacity(tenantId, dto);
  }

  @Get()
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
    EnterpriseRole.WMS_SUPERVISOR,
  )
  async findAll(@Query('tenantId') tenantId: string) {
    return this.warehouseService.findAll(tenantId);
  }

  @Get(':id')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
    EnterpriseRole.INVENTORY_CLERK,
    EnterpriseRole.WMS_SUPERVISOR,
  )
  async findOne(@Query('tenantId') tenantId: string, @Param('id') id: string) {
    return this.warehouseService.findOne(tenantId, id);
  }

  @Put(':id')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async update(
    @Query('tenantId') tenantId: string,
    @Param('id') id: string,
    @Body() dto: UpdateWarehouseDto,
  ) {
    return this.warehouseService.update(tenantId, id, dto);
  }

  @Delete(':id')
  @Roles(EnterpriseRole.SUPER_ADMIN, EnterpriseRole.TENANT_ADMIN)
  async remove(@Query('tenantId') tenantId: string, @Param('id') id: string) {
    return this.warehouseService.remove(tenantId, id);
  }
}
