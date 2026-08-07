import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  Param,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface RoleServiceClient {
  createRole(data: any): Observable<any>;
  getEnterpriseRoleEnums(data: any): Observable<any>;
  getAllPermissions(data: any): Observable<any>;
  assignRoleToUser(data: any): Observable<any>;
  findAllRoles(data: any): Observable<any>;
  findOneRole(data: any): Observable<any>;
  updateRole(data: any): Observable<any>;
  removeRole(data: any): Observable<any>;
}

@Controller('role')
export class RoleGatewayController implements OnModuleInit {
  private roleService: RoleServiceClient;

  constructor(
    @Inject('ROLE_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.roleService =
      this.client.getService<RoleServiceClient>('RoleServiceGrpc');
  }

  // Create Role
  @Post()
  async createRole(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.roleService
      .createRole({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Get Enterprise Role Enums
  @Get('enums/enterprise')
  async getEnterpriseRoleEnums(@Query('tenantId') tenantId: string) {
    return this.roleService
      .getEnterpriseRoleEnums({ tenantId: tenantId || '' })
      .toPromise();
  }

  // Get All Permissions
  @Get('permissions')
  async getAllPermissions(@Query('tenantId') tenantId: string) {
    return this.roleService
      .getAllPermissions({ tenantId: tenantId || '' })
      .toPromise();
  }

  // Assign Role To User
  @Post('assign')
  async assignRoleToUser(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.roleService
      .assignRoleToUser({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Find All Roles
  @Get('all')
  async findAllRoles(@Query('tenantId') tenantId: string) {
    return this.roleService.findAllRoles({ tenantId }).toPromise();
  }

  // Find One Role
  @Get(':id')
  async findOneRole(
    @Param('id') id: string,
    @Query('tenantId') tenantId: string,
  ) {
    return this.roleService.findOneRole({ tenantId, id }).toPromise();
  }

  // Update Role
  @Post(':id/update')
  async updateRole(
    @Param('id') id: string,
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.roleService
      .updateRole({
        tenantId,
        id,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Remove Role
  @Post(':id/remove')
  async removeRole(
    @Param('id') id: string,
    @Body() body: { tenantId: string },
  ) {
    return this.roleService
      .removeRole({
        tenantId: body.tenantId,
        id,
      })
      .toPromise();
  }
}
