import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CollaborationRepository } from './collaboration.repository';
import {
  SupplierPortalDto,
  ClientTrackingDto,
  ContractManufacturingDto,
  FreightBiddingDto,
} from './collaboration.dto';

@Injectable()
export class CollaborationService {
  constructor(
    @Inject(CollaborationRepository)
    private readonly collaborationRepo: CollaborationRepository,
  ) {}

  async getCollaborationEnums() {
    return {
      shipmentStatuses: [
        'PENDING',
        'DISPATCHED',
        'IN_TRANSIT',
        'DELIVERED',
        'RETURNED',
        'DELAYED',
      ],
      workOrderStatuses: [
        'PLANNED',
        'IN_PROGRESS',
        'QUALITY_TESTING',
        'COMPLETED',
        'CANCELLED',
      ],
    };
  }

  
  async handleSupplierSubmission(tenantId: string, dto: SupplierPortalDto) {
    return this.collaborationRepo.createSupplierRecord(tenantId, dto);
  }

  async getSupplierSubmissions(tenantId: string, search?: string) {
    return this.collaborationRepo.findSupplierRecords(tenantId, search);
  }

  async updateSupplierRecord(id: string, dto: SupplierPortalDto) {
    return this.collaborationRepo.updateSupplierRecord(id, dto);
  }

  async deleteSupplierRecord(id: string) {
    return this.collaborationRepo.deleteSupplierRecord(id);
  }

  
  async updateClientTracking(tenantId: string, dto: ClientTrackingDto) {
    return this.collaborationRepo.upsertClientTracking(tenantId, dto);
  }

  async getClientTrackings(tenantId: string, search?: string) {
    return this.collaborationRepo.findClientTrackings(tenantId, search);
  }

  async trackShipment(trackingCode: string) {
    const shipment =
      await this.collaborationRepo.getClientTrackingByCode(trackingCode);
    if (!shipment) {
      throw new NotFoundException(`Tracking code ${trackingCode} not found.`);
    }
    return shipment;
  }

  async deleteClientTracking(id: string) {
    return this.collaborationRepo.deleteClientTracking(id);
  }

  
  async manageContractManufacturing(
    tenantId: string,
    dto: ContractManufacturingDto,
  ) {
    return this.collaborationRepo.createContractOrder(tenantId, dto);
  }

  async getContractOrders(tenantId: string, search?: string) {
    return this.collaborationRepo.getContractOrders(tenantId, search);
  }

  async deleteContractOrder(id: string) {
    return this.collaborationRepo.deleteContractOrder(id);
  }

  
  async submitFreightBid(tenantId: string, dto: FreightBiddingDto) {
    return this.collaborationRepo.createFreightBid(tenantId, dto);
  }

  async getMarketplaceBids(tenantId: string, search?: string) {
    return this.collaborationRepo.getFreightBids(tenantId, search);
  }

  async deleteFreightBid(id: string) {
    return this.collaborationRepo.deleteFreightBid(id);
  }
}
