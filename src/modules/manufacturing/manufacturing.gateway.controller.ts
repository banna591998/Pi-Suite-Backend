import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface ManufacturingServiceClient {
  createBom(data: any): Observable<any>;
  getBoms(data: any): Observable<any>;
  createWorkOrder(data: any): Observable<any>;
  updateWorkOrderStatus(data: any): Observable<any>;
}

@Controller('manufacturing')
export class ManufacturingGatewayController implements OnModuleInit {
  private manufacturingService: ManufacturingServiceClient;

  constructor(
    @Inject('MANUFACTURING_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.manufacturingService =
      this.client.getService<ManufacturingServiceClient>(
        'ManufacturingServiceGrpc',
      );
  }

  // Create Bill of Materials (BOM)
  @Post('bom')
  async createBom(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.manufacturingService
      .createBom({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Get BOMs
  @Get('boms')
  async getBoms(@Query('tenantId') tenantId: string) {
    return this.manufacturingService.getBoms({ tenantId }).toPromise();
  }

  // Create Work Order
  @Post('work-order')
  async createWorkOrder(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.manufacturingService
      .createWorkOrder({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Update Work Order Status
  @Post('work-order/status')
  async updateWorkOrderStatus(
    @Body()
    body: {
      tenantId: string;
      id: string;
      [key: string]: any;
    },
  ) {
    const { tenantId, id, ...dto } = body;
    return this.manufacturingService
      .updateWorkOrderStatus({
        tenantId,
        id,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }
}
