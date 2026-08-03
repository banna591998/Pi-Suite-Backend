import {
  Controller,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import {
  type CreateSalesOrderSchema,
  type GenerateInvoiceSchema,
  type CreateSalesOrderDto,
  type GenerateInvoiceDto,
} from './dto/sales.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { EnterpriseRole } from 'prisma/src/generated/prisma/enums';

@Controller('sales')
@UseGuards(RolesGuard)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post('orders')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.MANAGER,
    EnterpriseRole.STAFF,
  )
  async createSalesOrder(
    @Body() dto: CreateSalesOrderDto,
    @Query('tenantId') tenantId: string,
  ) {
    return this.salesService.createOrder(tenantId, dto);
  }

  @Post('orders/:orderId/invoice')
  @Roles(
    EnterpriseRole.SUPER_ADMIN,
    EnterpriseRole.TENANT_ADMIN,
    EnterpriseRole.FINANCE_CONTROLLER,
  )
  async generateInvoice(
    @Query('tenantId') tenantId: string,
    @Param('orderId') orderId: string,
    @Query('email') customerEmail: string,
    @Query('name') customerName: string,
    @Body() dto: GenerateInvoiceDto,
  ) {
    return this.salesService.generateAndSendInvoice(
      tenantId,
      orderId,
      customerEmail,
      customerName,
      dto,
    );
  }
}
