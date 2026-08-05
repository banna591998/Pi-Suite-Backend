import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ManufacturingRepository } from './manufacturing.repository';
import {
  CreateBomDto,
  CreateWorkOrderDto,
  UpdateWorkOrderStatusDto,
} from './dto/manufacturing.dto';

@Injectable()
export class ManufacturingService {
  constructor(
    @Inject(ManufacturingRepository)
    private readonly manufacturingRepo: ManufacturingRepository,
  ) {}

  async createBillOfMaterials(tenantId: string, dto: CreateBomDto) {
    
    return this.manufacturingRepo.createBom(tenantId, dto);
  }

  async getBoms(tenantId: string) {
    return this.manufacturingRepo.findAllBoms(tenantId);
  }

  async createWorkOrder(tenantId: string, dto: CreateWorkOrderDto) {
    
    const bom = await this.manufacturingRepo.findBomById(tenantId, dto.bomId);
    if (!bom) {
      throw new NotFoundException(
        `Bill of Materials with ID ${dto.bomId} not found.`,
      );
    }

    
    return this.manufacturingRepo.createWorkOrder(tenantId, dto);
  }

  async updateWorkOrderStatus(
    tenantId: string,
    id: string,
    dto: UpdateWorkOrderStatusDto,
  ) {
    const workOrder = await this.manufacturingRepo.findWorkOrderById(
      tenantId,
      id,
    );
    if (!workOrder) {
      throw new NotFoundException(`Work Order with ID ${id} not found.`);
    }

    return this.manufacturingRepo.updateWorkOrderStatus(tenantId, id, dto);
  }
}
