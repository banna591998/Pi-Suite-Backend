import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProcurementRepository } from './procurement.repository';
import {
  CreateVendorDto,
  CreateRfqDto,
  CreatePoDto,
  ThreeWayMatchDto,
} from './dto/procurement.dto';

@Injectable()
export class ProcurementService {
  constructor(
    @Inject(ProcurementRepository)
    private readonly procurementRepo: ProcurementRepository,
  ) {}

  async onboardVendor(tenantId: string, dto: CreateVendorDto) {
    return this.procurementRepo.createVendor(tenantId, dto);
  }

  async getVendors(tenantId: string) {
    return this.procurementRepo.findAllVendors(tenantId);
  }

  async sendAutomatedRfq(tenantId: string, dto: CreateRfqDto) {
    
    return this.procurementRepo.createRfq(tenantId, dto);
  }

  async createPurchaseOrder(tenantId: string, dto: CreatePoDto) {
    
    return this.procurementRepo.createPurchaseOrder(tenantId, dto);
  }

  
  async performThreeWayMatching(tenantId: string, dto: ThreeWayMatchDto) {
    const po = await this.procurementRepo.findPoById(tenantId, dto.poId);
    if (!po) {
      throw new NotFoundException(
        `Purchase Order with ID ${dto.poId} not found.`,
      );
    }

    const isMatched =
      po.totalAmount === dto.invoicedAmount &&
      po.totalAmount === dto.receivedGoodsValue;

    return this.procurementRepo.updatePoMatchStatus(
      tenantId,
      dto.poId,
      isMatched,
    );
  }
}
