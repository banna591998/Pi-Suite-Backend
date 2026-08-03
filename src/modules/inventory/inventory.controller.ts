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
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import {
  type CreateInventoryDto,
  type UpdateInventoryDto,
} from './dto/inventory.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { EnterpriseRole } from 'prisma/src/generated/prisma/enums';

@Controller('inventory')
@UseGuards(RolesGuard)
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
    EnterpriseRole.INVENTORY_CLERK,
  )
  async create(
    @Body() dto: CreateInventoryDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.inventoryService.createItem(tenantId, dto);
  }

  @Get()
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
    EnterpriseRole.INVENTORY_CLERK,
    EnterpriseRole.SUPPLY_CHAIN_ANALYST,
    EnterpriseRole.FINANCE_CONTROLLER,
  )
  async findAll(@Query('tenantId') tenantId: string) {
    return this.inventoryService.findAllItems(tenantId);
  }

  @Get('reorder-alerts')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
    EnterpriseRole.PROCUREMENT_OFFICER,
  )
  async getReorderAlerts(@Query('tenantId') tenantId: string) {
    return this.inventoryService.getReorderAlerts(tenantId);
  }

  @Put(':id')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
    EnterpriseRole.INVENTORY_CLERK,
  )
  async update(
    @Query('tenantId') tenantId: string,
    @Param('id') id: string,
    @Body() dto: UpdateInventoryDto,
  ) {
    return this.inventoryService.updateItem(tenantId, id, dto);
  }

  @Delete(':id')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async remove(@Query('tenantId') tenantId: string, @Param('id') id: string) {
    return this.inventoryService.removeItem(tenantId, id);
  }
}
