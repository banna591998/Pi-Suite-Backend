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

interface SecurityServiceClient {
  createAuditLog(data: any): Observable<any>;
  getAuditLogs(data: any): Observable<any>;
  assignRbacRole(data: any): Observable<any>;
  recordUptime(data: any): Observable<any>;
  getUptimeDashboard(data: any): Observable<any>;
  triggerGdprErasure(data: any): Observable<any>;
}

@Controller('security')
export class SecurityGatewayController implements OnModuleInit {
  private securityService: SecurityServiceClient;

  constructor(
    @Inject('SECURITY_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.securityService = this.client.getService<SecurityServiceClient>(
      'SecurityServiceGrpc',
    );
  }

  // Create Audit Log
  @Post('audit-log')
  async createAuditLog(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.securityService
      .createAuditLog({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Get Audit Logs
  @Get('audit-logs')
  async getAuditLogs(@Query('tenantId') tenantId: string) {
    return this.securityService.getAuditLogs({ tenantId }).toPromise();
  }

  // Assign RBAC Role
  @Post('rbac/assign')
  async assignRbacRole(@Body() body: any) {
    return this.securityService
      .assignRbacRole({
        payloadJson: JSON.stringify(body),
      })
      .toPromise();
  }

  // Record Uptime
  @Post('uptime/record')
  async recordUptime(@Body() body: any) {
    return this.securityService
      .recordUptime({
        payloadJson: JSON.stringify(body),
      })
      .toPromise();
  }

  // Get Uptime Dashboard
  @Get('uptime/dashboard')
  async getUptimeDashboard() {
    return this.securityService.getUptimeDashboard({}).toPromise();
  }

  // Trigger GDPR Erasure
  @Post('gdpr/erasure')
  async triggerGdprErasure(
    @Body() body: { tenantId: string; customerId: string },
  ) {
    return this.securityService
      .triggerGdprErasure({
        tenantId: body.tenantId,
        customerId: body.customerId,
      })
      .toPromise();
  }
}
