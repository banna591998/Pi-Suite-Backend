import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseGuards,
  UsePipes,
  Inject,
} from '@nestjs/common';
import { ProcurementService } from './procurement.service';
import {
  type CreateRfqSchema,
  type CreatePoSchema,
  type ThreeWayMatchSchema,
  type CreateVendorDto,
  type CreateRfqDto,
  type CreatePoDto,
  type ThreeWayMatchDto,
} from './dto/procurement.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { EnterpriseRole } from 'prisma/src/generated/prisma/enums';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('procurement')
@UseGuards(RolesGuard)
export class ProcurementController {
  constructor(
    @Inject(ProcurementService)
    private readonly procurementService: ProcurementService,
  ) {}

  @Post('vendors')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.PROCUREMENT_OFFICER,
  )
  async onboardVendor(
    @Body() dto: CreateVendorDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.procurementService.onboardVendor(tenantId, dto);
  }

  @Get('vendors')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.PROCUREMENT_OFFICER,
  )
  async getVendors(@Query('tenantId') tenantId: string) {
    return this.procurementService.getVendors(tenantId);
  }

  @Post('rfq')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.PROCUREMENT_OFFICER,
  )
  async sendRfq(
    @Body() dto: CreateRfqDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.procurementService.sendAutomatedRfq(tenantId, dto);
  }

  @Post('po')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.PROCUREMENT_OFFICER,
  )
  async createPo(
    @Body() dto: CreatePoDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.procurementService.createPurchaseOrder(tenantId, dto);
  }

  @Post('three-way-match')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.FINANCE_CONTROLLER,
    EnterpriseRole.PROCUREMENT_OFFICER,
  )
  async threeWayMatch(
    @Body() dto: ThreeWayMatchDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.procurementService.performThreeWayMatching(tenantId, dto);
  }
}
