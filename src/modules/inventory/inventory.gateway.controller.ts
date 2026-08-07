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

interface InventoryServiceClient {
  createItem(data: any): Observable<any>;
  findAllItems(data: any): Observable<any>;
  getReorderAlerts(data: any): Observable<any>;
  updateItem(data: any): Observable<any>;
  removeItem(data: any): Observable<any>;
}

@Controller('inventory')
export class InventoryGatewayController implements OnModuleInit {
  private inventoryService: InventoryServiceClient;

  constructor(
    @Inject('INVENTORY_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.inventoryService = this.client.getService<InventoryServiceClient>(
      'InventoryServiceGrpc',
    );
  }

  // Create Item
  @Post('item')
  async createItem(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.inventoryService
      .createItem({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Find All Items
  @Get('items')
  async findAllItems(@Query('tenantId') tenantId: string) {
    return this.inventoryService.findAllItems({ tenantId }).toPromise();
  }

  // Get Reorder Alerts
  @Get('reorder-alerts')
  async getReorderAlerts(@Query('tenantId') tenantId: string) {
    return this.inventoryService.getReorderAlerts({ tenantId }).toPromise();
  }

  // Update Item
  @Post('item/update')
  async updateItem(
    @Body()
    body: {
      tenantId: string;
      id: string;
      [key: string]: any;
    },
  ) {
    const { tenantId, id, ...dto } = body;
    return this.inventoryService
      .updateItem({
        tenantId,
        id,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Remove Item
  @Post('item/remove')
  async removeItem(@Body() body: { tenantId: string; id: string }) {
    return this.inventoryService
      .removeItem({
        tenantId: body.tenantId,
        id: body.id,
      })
      .toPromise();
  }
}
