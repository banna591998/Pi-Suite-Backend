import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  UsePipes,
  Inject,
  Req,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import {
  createTenantSchema,
  updateTenantSchema,
  type CreateTenantDto,
  type UpdateTenantDto,
} from './dto/tenant.dto';
import { AuthGuard } from 'src/common/guards/auth-rbac.guard';

@Controller('tenants')
@UseGuards(AuthGuard)
export class TenantController {
  constructor(
    @Inject(TenantService) private readonly tenantService: TenantService,
  ) {}
  @Get('my-workspace')
  async getMyWorkspace(@Req() req: any) {
    const tenantId = req.user.tenantId; // AuthGuard থেকে টেনেন্ট আইডি পাওয়া যাবে
    return await this.tenantService.getTenantById(tenantId);
  }
  @Get()
  async findAllActive() {
    return await this.tenantService.getAllActiveTenants();
  }
  @Post()
  async create(@Body() body: CreateTenantDto) {
    return await this.tenantService.createTenant(body);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.tenantService.getTenantById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() body: UpdateTenantDto) {
    return await this.tenantService.updateTenant(id, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string) {
    return await this.tenantService.deleteTenant(id);
  }
}
