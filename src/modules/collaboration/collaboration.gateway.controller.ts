import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface CollaborationServiceClient {
  getCollaborationEnums(data: any): Observable<any>;
  createSupplierRecord(data: any): Observable<any>;
  getSupplierSubmissions(data: any): Observable<any>;
  updateSupplierRecord(data: any): Observable<any>;
  deleteSupplierRecord(data: any): Observable<any>;
  c_RpcClientTrackingUpsert(data: any): Observable<any>;
  getClientTrackings(data: any): Observable<any>;
  deleteClientTracking(data: any): Observable<any>;
  createContractOrder(data: any): Observable<any>;
  getContractOrders(data: any): Observable<any>;
  deleteContractOrder(data: any): Observable<any>;
  createFreightBid(data: any): Observable<any>;
  getFreightBids(data: any): Observable<any>;
  deleteFreightBid(data: any): Observable<any>;
}

@Controller('collaboration')
export class CollaborationGatewayController implements OnModuleInit {
  private collaborationService: CollaborationServiceClient;

  constructor(
    @Inject('COLLABORATION_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.collaborationService =
      this.client.getService<CollaborationServiceClient>(
        'CollaborationServiceGrpc',
      );
  }

  // Enums
  @Get('enums')
  async getCollaborationEnums() {
    return this.collaborationService.getCollaborationEnums({}).toPromise();
  }

  // --- Supplier Portal ---
  @Post('supplier/record')
  async createSupplierRecord(@Body() dto: any) {
    return this.collaborationService.createSupplierRecord(dto).toPromise();
  }

  @Get('supplier/submissions')
  async getSupplierSubmissions(@Query() query: any) {
    return this.collaborationService.getSupplierSubmissions(query).toPromise();
  }

  @Post('supplier/record/update')
  async updateSupplierRecord(@Body() dto: any) {
    return this.collaborationService.updateSupplierRecord(dto).toPromise();
  }

  @Post('supplier/record/delete')
  async deleteSupplierRecord(@Body() dto: any) {
    return this.collaborationService.deleteSupplierRecord(dto).toPromise();
  }

  // --- Client Tracking ---
  @Post('client-tracking/upsert')
  async c_RpcClientTrackingUpsert(@Body() dto: any) {
    return this.collaborationService.c_RpcClientTrackingUpsert(dto).toPromise();
  }

  @Get('client-tracking')
  async GetClientTrackings(@Query() query: any) {
    return this.collaborationService.getClientTrackings(query).toPromise();
  }

  @Post('client-tracking/delete')
  async deleteClientTracking(@Body() dto: any) {
    return this.collaborationService.deleteClientTracking(dto).toPromise();
  }

  // --- Contract Manufacturing ---
  @Post('contract-order')
  async createContractOrder(@Body() dto: any) {
    return this.collaborationService.createContractOrder(dto).toPromise();
  }

  @Get('contract-orders')
  async getContractOrders(@Query() query: any) {
    return this.collaborationService.getContractOrders(query).toPromise();
  }

  @Post('contract-order/delete')
  async deleteContractOrder(@Body() dto: any) {
    return this.collaborationService.deleteContractOrder(dto).toPromise();
  }

  // --- Freight Bidding ---
  @Post('freight-bid')
  async createFreightBid(@Body() dto: any) {
    return this.collaborationService.createFreightBid(dto).toPromise();
  }

  @Get('freight-bids')
  async getFreightBids(@Query() query: any) {
    return this.collaborationService.getFreightBids(query).toPromise();
  }

  @Post('freight-bid/delete')
  async deleteFreightBid(@Body() dto: any) {
    return this.collaborationService.deleteFreightBid(dto).toPromise();
  }
}
