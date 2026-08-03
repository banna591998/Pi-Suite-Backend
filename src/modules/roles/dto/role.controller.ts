import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Inject,
  BadRequestException,
  Req,
} from '@nestjs/common';
import { RoleService } from './role.service';
import {
  createRoleSchema,
  updateRoleSchema,
  type CreateRoleDto,
  type UpdateRoleDto,
} from './role.dto';
import { AuthGuard } from 'src/common/guards/auth-rbac.guard';

@Controller('roles')
export class RoleController {
  constructor(@Inject(RoleService) private readonly roleService: RoleService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Req() req: any, @Body() body: CreateRoleDto) {
    const tenantId = req.user?.tenantId || body.tenantId;
    const payload = { ...body, tenantId };

    const validationResult = createRoleSchema.safeParse(payload);
    if (!validationResult.success) {
      throw new BadRequestException(validationResult.error.format());
    }

    return await this.roleService.createRole(tenantId, validationResult.data);
  }

  // ১. স্ট্যাটিক রুটগুলোকে সবসময় ডায়নামিক রুট (:id) এর উপরে রাখতে হবে
  @Get('enums/list')
  @UseGuards(AuthGuard)
  async getEnterpriseRoleEnums() {
    return await this.roleService.getEnterpriseRoleEnums();
  }

  @Get('permissions/list')
  @UseGuards(AuthGuard)
  async getAllPermissions() {
    return await this.roleService.getAllPermissions();
  }

  // এমপ্লয়ি বা ইউজারকে রোল অ্যাসাইন করার রুট
  @Post('assign-user')
  @UseGuards(AuthGuard)
  async assignRoleToUser(@Req() req: any, @Body() body: any) {
    const tenantId = req.user?.tenantId;
    return await this.roleService.assignRoleToUser({ ...body, tenantId });
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Req() req: any) {
    const tenantId = req.user?.tenantId;
    return await this.roleService.getAllRoles(tenantId);
  }

  // ২. ডায়নামিক রুট (:id) নিচে থাকবে
  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Req() req: any, @Param('id') id: string) {
    const tenantId = req.user?.tenantId;
    return await this.roleService.getRoleById(id, tenantId);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() body: UpdateRoleDto,
  ) {
    const tenantId = req.user?.tenantId;
    const payload = { ...body, tenantId };

    const validationResult = updateRoleSchema.safeParse(payload);
    if (!validationResult.success) {
      throw new BadRequestException(validationResult.error.format());
    }

    return await this.roleService.updateRole(
      id,
      tenantId,
      validationResult.data,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Req() req: any, @Param('id') id: string) {
    const tenantId = req.user?.tenantId;
    return await this.roleService.deleteRole(id, tenantId);
  }
}
