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

interface WarehouseServiceClient {
  createWarehouse(data: any): Observable<any>;
  createZone(data: any): Observable<any>;
  runMasterPlan(data: any): Observable<any>;
  createForecast(data: any): Observable<any>;
  calculateMrp(data: any): Observable<any>;
  optimizeCapacity(data: any): Observable<any>;
  findAllWarehouses(data: any): Observable<any>;
  findOneWarehouse(data: any): Observable<any>;
  updateWarehouse(data: any): Observable<any>;
  removeWarehouse(data: any): Observable<any>;
}

@Controller('warehouse')
export class WarehouseGatewayController implements OnModuleInit {
  private warehouseService: WarehouseServiceClient;

  constructor(
    @Inject('WAREHOUSE_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.warehouseService = this.client.getService<WarehouseServiceClient>(
      'WarehouseServiceGrpc',
    );
  }

  // Create Warehouse
  @Post()
  async create(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.warehouseService
      .createWarehouse({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Create Zone
  @Post('zone')
  async createZone(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.warehouseService
      .createZone({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Run Master Plan
  @Post('master-plan')
  async runMasterPlan(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.warehouseService
      .runMasterPlan({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Create Forecast
  @Post('forecast')
  async createForecast(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.warehouseService
      .createForecast({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Calculate MRP
  @Post('mrp')
  async calculateMrp(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.warehouseService
      .calculateMrp({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Optimize Capacity
  @Post('optimize-capacity')
  async optimizeCapacity(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.warehouseService
      .optimizeCapacity({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Find All Warehouses
  @Get('all')
  async findAll(@Query('tenantId') tenantId: string) {
    return this.warehouseService.findAllWarehouses({ tenantId }).toPromise();
  }

  // Find One Warehouse
  @Get(':id')
  async findOne(@Param('id') id: string, @Query('tenantId') tenantId: string) {
    return this.warehouseService.findOneWarehouse({ tenantId, id }).toPromise();
  }

  // Update Warehouse
  @Post(':id/update')
  async update(
    @Param('id') id: string,
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.warehouseService
      .updateWarehouse({
        tenantId,
        id,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Remove Warehouse
  @Post(':id/remove')
  async remove(@Param('id') id: string, @Body() body: { tenantId: string }) {
    return this.warehouseService
      .removeWarehouse({
        tenantId: body.tenantId,
        id,
      })
      .toPromise();
  }
}
