import { Controller, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface SalesServiceClient {
  createSalesOrder(data: any): Observable<any>;
  generateInvoice(data: any): Observable<any>;
}

@Controller('sales')
export class SalesGatewayController implements OnModuleInit {
  private salesService: SalesServiceClient;

  constructor(
    @Inject('SALES_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.salesService =
      this.client.getService<SalesServiceClient>('SalesServiceGrpc');
  }

  // Create Sales Order
  @Post('order')
  async createSalesOrder(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.salesService
      .createSalesOrder({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Generate Invoice
  @Post('invoice/generate')
  async generateInvoice(
    @Body()
    body: {
      tenantId: string;
      orderId: string;
      customerEmail: string;
      customerName: string;
      [key: string]: any;
    },
  ) {
    const { tenantId, orderId, customerEmail, customerName, ...dto } = body;
    return this.salesService
      .generateInvoice({
        tenantId,
        orderId,
        customerEmail,
        customerName,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }
}
