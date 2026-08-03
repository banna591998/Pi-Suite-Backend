import { Inject, Injectable } from '@nestjs/common';
import {
  CreateVehicleDto,
  CreateShipmentDto,
  UpdateVehicleLocationDto,
} from './dto/tms.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TmsRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createVehicle(tenantId: string, dto: CreateVehicleDto) {
    return this.prisma.fleetVehicle.create({
      data: { tenantId, ...dto },
    });
  }

  async updateVehicleLocation(
    tenantId: string,
    id: string,
    dto: UpdateVehicleLocationDto,
  ) {
    return this.prisma.fleetVehicle.update({
      where: { id },
      data: dto,
    });
  }

  async findAllVehicles(tenantId: string) {
    return this.prisma.fleetVehicle.findMany({
      where: { tenantId },
      include: { shipments: true },
    });
  }

  async createShipment(tenantId: string, dto: CreateShipmentDto) {
    return this.prisma.shipment.create({
      data: { tenantId, ...dto },
    });
  }

  async findShipmentById(tenantId: string, id: string) {
    return this.prisma.shipment.findFirst({
      where: { id, tenantId },
      include: { vehicle: true },
    });
  }

  async updateShipmentStatus(
    tenantId: string,
    id: string,
    status: any,
    additionalData?: any,
  ) {
    return this.prisma.shipment.update({
      where: { id },
      data: { status, ...additionalData },
    });
  }
}
