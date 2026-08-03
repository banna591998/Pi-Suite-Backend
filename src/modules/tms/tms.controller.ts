import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Query,
  UseGuards,
  UsePipes,
  Inject,
} from '@nestjs/common';
import { TmsService } from './tms.service';
import {
  type CreateVehicleDto,
  type CreateShipmentDto,
  type UpdateVehicleLocationDto,
  type VerifyPoDDto,
} from './dto/tms.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { EnterpriseRole } from 'prisma/src/generated/prisma/enums';

@Controller('tms')
@UseGuards(RolesGuard)
export class TmsController {
  constructor(@Inject(TmsService) private readonly tmsService: TmsService) {}

  @Post('vehicles')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.TMS_MANAGER,
  )
  async registerVehicle(
    @Body() dto: CreateVehicleDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.tmsService.registerVehicle(tenantId, dto);
  }

  @Get('vehicles')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.TMS_MANAGER,
  )
  async getVehicles(@Query('tenantId') tenantId: string) {
    return this.tmsService.getAllVehicles(tenantId);
  }

  @Put('vehicles/:id/location')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.TMS_MANAGER,
  )
  async updateLocation(
    @Query('tenantId') tenantId: string,
    @Param('id') id: string,
    @Body() dto: UpdateVehicleLocationDto,
  ) {
    return this.tmsService.trackVehicle(tenantId, id, dto);
  }

  @Post('shipments')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.TMS_MANAGER,
  )
  async createShipment(
    @Body() dto: CreateShipmentDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.tmsService.createShipment(tenantId, dto);
  }

  @Post('shipments/:id/pod')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.TMS_MANAGER,
    EnterpriseRole.INVENTORY_CLERK,
  )
  async verifyPoD(
    @Query('tenantId') tenantId: string,
    @Param('id') id: string,
    @Body() dto: VerifyPoDDto,
  ) {
    return this.tmsService.verifyAndCompletePoD(tenantId, id, dto);
  }
}
