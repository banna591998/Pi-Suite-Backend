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

interface TenantServiceClient {
  getMyWorkspace(data: any): Observable<any>;
  findAllActive(data: any): Observable<any>;
  createTenant(data: any): Observable<any>;
  findOneTenant(data: any): Observable<any>;
  updateTenant(data: any): Observable<any>;
  deleteTenant(data: any): Observable<any>;
}

@Controller('tenant')
export class TenantGatewayController implements OnModuleInit {
  private tenantService: TenantServiceClient;

  constructor(
    @Inject('TENANT_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.tenantService =
      this.client.getService<TenantServiceClient>('TenantServiceGrpc');
  }

  // Get My Workspace
  @Get('workspace')
  async getMyWorkspace(@Query('tenantId') tenantId: string) {
    return this.tenantService.getMyWorkspace({ tenantId }).toPromise();
  }

  // Find All Active Tenants
  @Get('active')
  async findAllActive() {
    return this.tenantService.findAllActive({}).toPromise();
  }

  // Create Tenant
  @Post()
  async createTenant(@Body() body: any) {
    return this.tenantService
      .createTenant({
        payloadJson: JSON.stringify(body),
      })
      .toPromise();
  }

  // Find One Tenant
  @Get(':id')
  async findOneTenant(@Param('id') id: string) {
    return this.tenantService.findOneTenant({ id }).toPromise();
  }

  // Update Tenant
  @Post(':id/update')
  async updateTenant(@Param('id') id: string, @Body() body: any) {
    return this.tenantService
      .updateTenant({
        id,
        payloadJson: JSON.stringify(body),
      })
      .toPromise();
  }

  // Delete Tenant
  @Post(':id/delete')
  async deleteTenant(@Param('id') id: string) {
    return this.tenantService.deleteTenant({ id }).toPromise();
  }
}
