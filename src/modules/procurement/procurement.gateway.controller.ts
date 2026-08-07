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

interface ProcurementServiceClient {
  onboardVendor(data: any): Observable<any>;
  getVendors(data: any): Observable<any>;
  sendAutomatedRfq(data: any): Observable<any>;
  createPurchaseOrder(data: any): Observable<any>;
  performThreeWayMatching(data: any): Observable<any>;
}

@Controller('procurement')
export class ProcurementGatewayController implements OnModuleInit {
  private procurementService: ProcurementServiceClient;

  constructor(
    @Inject('PROCUREMENT_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.procurementService = this.client.getService<ProcurementServiceClient>(
      'ProcurementServiceGrpc',
    );
  }

  // Onboard Vendor
  @Post('vendor/onboard')
  async onboardVendor(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.procurementService
      .onboardVendor({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Get Vendors
  @Get('vendors')
  async getVendors(@Query('tenantId') tenantId: string) {
    return this.procurementService.getVendors({ tenantId }).toPromise();
  }

  // Send Automated RFQ
  @Post('rfq/send')
  async sendAutomatedRfq(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.procurementService
      .sendAutomatedRfq({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Create Purchase Order
  @Post('purchase-order')
  async createPurchaseOrder(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.procurementService
      .createPurchaseOrder({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Perform Three-Way Matching
  @Post('three-way-matching')
  async performThreeWayMatching(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.procurementService
      .performThreeWayMatching({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }
}
