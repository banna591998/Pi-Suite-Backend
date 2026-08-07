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

interface TmsServiceClient {
  registerVehicle(data: any): Observable<any>;
  getVehicles(data: any): Observable<any>;
  updateVehicleLocation(data: any): Observable<any>;
  createShipment(data: any): Observable<any>;
  verifyPoD(data: any): Observable<any>;
}

@Controller('tms')
export class TmsGatewayController implements OnModuleInit {
  private tmsService: TmsServiceClient;

  constructor(
    @Inject('TMS_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.tmsService =
      this.client.getService<TmsServiceClient>('TmsServiceGrpc');
  }

  // Register Vehicle
  @Post('vehicle/register')
  async registerVehicle(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.tmsService
      .registerVehicle({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Get Vehicles
  @Get('vehicles')
  async getVehicles(@Query('tenantId') tenantId: string) {
    return this.tmsService.getVehicles({ tenantId }).toPromise();
  }

  // Update Vehicle Location
  @Post('vehicle/:id/location')
  async updateLocation(
    @Param('id') id: string,
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.tmsService
      .updateVehicleLocation({
        tenantId,
        id,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Create Shipment
  @Post('shipment')
  async createShipment(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.tmsService
      .createShipment({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Verify Proof of Delivery (PoD)
  @Post('shipment/:id/verify-pod')
  async verifyPoD(
    @Param('id') id: string,
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.tmsService
      .verifyPoD({
        tenantId,
        id,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }
}
