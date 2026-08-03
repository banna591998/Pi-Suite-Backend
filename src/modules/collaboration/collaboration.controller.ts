import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
  UseGuards,
  Req,
  Inject,
} from '@nestjs/common';
import { CollaborationService } from './collaboration.service';
import {
  type SupplierPortalDto,
  type ClientTrackingDto,
  type ContractManufacturingDto,
  type FreightBiddingDto,
} from './collaboration.dto';
import { AuthGuard } from 'src/common/guards/auth-rbac.guard';

@Controller('collaboration')
export class CollaborationController {
  constructor(
    @Inject(CollaborationService)
    private readonly collaborationService: CollaborationService,
  ) {}

  @Get('enums/list')
  @UseGuards(AuthGuard)
  async getCollaborationEnums() {
    return this.collaborationService.getCollaborationEnums();
  }

  // --- Supplier Portal CRUD & Search ---
  @Post('supplier-portal')
  @UseGuards(AuthGuard)
  async createSupplierRecord(@Req() req: any, @Body() dto: SupplierPortalDto) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.handleSupplierSubmission(tenantId, dto);
  }

  @Get('supplier-portal')
  @UseGuards(AuthGuard)
  async getSupplierSubmissions(
    @Req() req: any,
    @Query('search') search: string,
  ) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.getSupplierSubmissions(tenantId, search);
  }

  @Put('supplier-portal/:id')
  @UseGuards(AuthGuard)
  async updateSupplierRecord(
    @Param('id') id: string,
    @Body() dto: SupplierPortalDto,
  ) {
    return this.collaborationService.updateSupplierRecord(id, dto);
  }

  @Delete('supplier-portal/:id')
  @UseGuards(AuthGuard)
  async deleteSupplierRecord(@Param('id') id: string) {
    return this.collaborationService.deleteSupplierRecord(id);
  }

  // --- Client Tracking CRUD & Search ---
  @Post('client-tracking')
  @UseGuards(AuthGuard)
  async upsertClientTracking(@Req() req: any, @Body() dto: ClientTrackingDto) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.updateClientTracking(tenantId, dto);
  }

  @Get('client-tracking')
  @UseGuards(AuthGuard)
  async getClientTrackings(@Req() req: any, @Query('search') search: string) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.getClientTrackings(tenantId, search);
  }

  @Delete('client-tracking/:id')
  @UseGuards(AuthGuard)
  async deleteClientTracking(@Param('id') id: string) {
    return this.collaborationService.deleteClientTracking(id);
  }

  // --- Contract Manufacturing CRUD & Search ---
  @Post('contract-manufacturing')
  @UseGuards(AuthGuard)
  async createContractOrder(
    @Req() req: any,
    @Body() dto: ContractManufacturingDto,
  ) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.manageContractManufacturing(tenantId, dto);
  }

  @Get('contract-manufacturing')
  @UseGuards(AuthGuard)
  async getContractOrders(@Req() req: any, @Query('search') search: string) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.getContractOrders(tenantId, search);
  }

  @Delete('contract-manufacturing/:id')
  @UseGuards(AuthGuard)
  async deleteContractOrder(@Param('id') id: string) {
    return this.collaborationService.deleteContractOrder(id);
  }

  // --- Freight Bidding CRUD & Search ---
  @Post('freight-bidding')
  @UseGuards(AuthGuard)
  async createFreightBid(@Req() req: any, @Body() dto: FreightBiddingDto) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.submitFreightBid(tenantId, dto);
  }

  @Get('freight-bidding')
  @UseGuards(AuthGuard)
  async getFreightBids(@Req() req: any, @Query('search') search: string) {
    const tenantId = req.user?.tenantId || req.query.tenantId;
    return this.collaborationService.getMarketplaceBids(tenantId, search);
  }

  @Delete('freight-bidding/:id')
  @UseGuards(AuthGuard)
  async deleteFreightBid(@Param('id') id: string) {
    return this.collaborationService.deleteFreightBid(id);
  }
}
