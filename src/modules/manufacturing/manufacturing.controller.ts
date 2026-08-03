import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Query,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { ManufacturingService } from './manufacturing.service';
import {
  type CreateBomDto,
  type CreateWorkOrderDto,
  type UpdateWorkOrderStatusDto,
} from './dto/manufacturing.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { EnterpriseRole } from 'prisma/src/generated/prisma/enums';

@Controller('manufacturing')
@UseGuards(RolesGuard)
export class ManufacturingController {
  constructor(
    @Inject(ManufacturingService)
    private readonly manufacturingService: ManufacturingService,
  ) {}

  @Post('boms')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async createBom(
    @Body() dto: CreateBomDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.manufacturingService.createBillOfMaterials(tenantId, dto);
  }

  @Get('boms')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async getBoms(@Query('tenantId') tenantId: string) {
    return this.manufacturingService.getBoms(tenantId);
  }

  @Post('work-orders')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
  )
  async createWorkOrder(
    @Body() dto: CreateWorkOrderDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.manufacturingService.createWorkOrder(tenantId, dto);
  }

  @Put('work-orders/:id/status')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.WMS_MANAGER,
    EnterpriseRole.STAFF,
  )
  async updateWorkOrderStatus(
    @Query('tenantId') tenantId: string,
    @Param('id') id: string,
    @Body() dto: UpdateWorkOrderStatusDto,
  ) {
    return this.manufacturingService.updateWorkOrderStatus(tenantId, id, dto);
  }
}
