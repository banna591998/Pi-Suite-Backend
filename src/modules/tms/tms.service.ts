import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { TmsRepository } from './tms.repository';
import {
  CreateVehicleDto,
  CreateShipmentDto,
  UpdateVehicleLocationDto,
  VerifyPoDDto,
} from './dto/tms.dto';

@Injectable()
export class TmsService {
  constructor(@Inject(TmsRepository) private readonly tmsRepo: TmsRepository) {}

  async registerVehicle(tenantId: string, dto: CreateVehicleDto) {
    return this.tmsRepo.createVehicle(tenantId, dto);
  }

  async trackVehicle(
    tenantId: string,
    id: string,
    dto: UpdateVehicleLocationDto,
  ) {
    return this.tmsRepo.updateVehicleLocation(tenantId, id, dto);
  }

  async getAllVehicles(tenantId: string) {
    return this.tmsRepo.findAllVehicles(tenantId);
  }

  async createShipment(tenantId: string, dto: CreateShipmentDto) {
    
    return this.tmsRepo.createShipment(tenantId, dto);
  }

  
  async verifyAndCompletePoD(
    tenantId: string,
    shipmentId: string,
    dto: VerifyPoDDto,
  ) {
    const shipment = await this.tmsRepo.findShipmentById(tenantId, shipmentId);
    if (!shipment) {
      throw new NotFoundException(`Shipment with ID ${shipmentId} not found.`);
    }

    if (shipment.podOtp && shipment.podOtp !== dto.podOtp) {
      throw new BadRequestException('Invalid Proof of Delivery (PoD) OTP.');
    }

    return this.tmsRepo.updateShipmentStatus(
      tenantId,
      shipmentId,
      'DELIVERED',
      {
        deliveredAt: new Date(),
      },
    );
  }
}
