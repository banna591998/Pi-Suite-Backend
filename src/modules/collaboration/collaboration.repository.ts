import { Inject, Injectable } from '@nestjs/common';
import {
  SupplierPortalDto,
  ClientTrackingDto,
  ContractManufacturingDto,
  FreightBiddingDto,
} from './collaboration.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShipmentStatus } from 'prisma/src/generated/prisma/enums';

@Injectable()
export class CollaborationRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  // --- Supplier Portal ---
  async createSupplierRecord(tenantId: string, dto: SupplierPortalDto) {
    return this.prisma.supplierPortalRecord.create({
      data: {
        tenantId,
        supplierName: dto.supplierName,
        supplierEmail: dto.supplierEmail,
        invoiceNo: dto.invoiceNo,
        shippingStatus: dto.shippingStatus as ShipmentStatus,
      },
    });
  }

  async findSupplierRecords(tenantId: string, search?: string) {
    return this.prisma.supplierPortalRecord.findMany({
      where: {
        tenantId,
        OR: search
          ? [
              { supplierName: { contains: search, mode: 'insensitive' } },
              { invoiceNo: { contains: search, mode: 'insensitive' } },
              { supplierEmail: { contains: search, mode: 'insensitive' } },
            ]
          : undefined,
      },
      orderBy: { submittedAt: 'desc' },
    });
  }

  async updateSupplierRecord(id: string, dto: SupplierPortalDto) {
    return this.prisma.supplierPortalRecord.update({
      where: { id },
      data: {
        supplierName: dto.supplierName,
        supplierEmail: dto.supplierEmail,
        invoiceNo: dto.invoiceNo,
        shippingStatus: dto.shippingStatus as ShipmentStatus,
      },
    });
  }

  async deleteSupplierRecord(id: string) {
    return this.prisma.supplierPortalRecord.delete({
      where: { id },
    });
  }

  // --- Client Tracking ---
  async upsertClientTracking(tenantId: string, dto: ClientTrackingDto) {
    return this.prisma.clientShipmentTracking.upsert({
      where: { trackingCode: dto.trackingCode },
      update: {
        clientName: dto.clientName,
        clientEmail: dto.clientEmail,
        currentLocation: dto.currentLocation,
        status: dto.status as ShipmentStatus,
        estimatedDelivery: new Date(dto.estimatedDelivery),
      },
      create: {
        tenantId,
        trackingCode: dto.trackingCode,
        clientName: dto.clientName,
        clientEmail: dto.clientEmail,
        currentLocation: dto.currentLocation,
        status: dto.status as ShipmentStatus,
        estimatedDelivery: new Date(dto.estimatedDelivery),
      },
    });
  }

  async findClientTrackings(tenantId: string, search?: string) {
    return this.prisma.clientShipmentTracking.findMany({
      where: {
        tenantId,
        OR: search
          ? [
              { trackingCode: { contains: search, mode: 'insensitive' } },
              { clientName: { contains: search, mode: 'insensitive' } },
              { currentLocation: { contains: search, mode: 'insensitive' } },
            ]
          : undefined,
      },
      orderBy: { estimatedDelivery: 'desc' },
    });
  }

  async getClientTrackingByCode(trackingCode: string) {
    return this.prisma.clientShipmentTracking.findUnique({
      where: { trackingCode },
    });
  }

  async deleteClientTracking(id: string) {
    return this.prisma.clientShipmentTracking.delete({
      where: { id },
    });
  }

  // --- Contract Manufacturing ---
  async createContractOrder(tenantId: string, dto: ContractManufacturingDto) {
    return this.prisma.contractManufacturingOrder.create({
      data: {
        tenantId,
        factoryName: dto.factoryName,
        productName: dto.productName,
        quantity: dto.quantity,
        status: dto.status as any,
        dueDate: new Date(dto.dueDate),
      },
    });
  }

  async getContractOrders(tenantId: string, search?: string) {
    return this.prisma.contractManufacturingOrder.findMany({
      where: {
        tenantId,
        OR: search
          ? [
              { factoryName: { contains: search, mode: 'insensitive' } },
              { productName: { contains: search, mode: 'insensitive' } },
            ]
          : undefined,
      },
      orderBy: { dueDate: 'asc' },
    });
  }

  async deleteContractOrder(id: string) {
    return this.prisma.contractManufacturingOrder.delete({
      where: { id },
    });
  }

  // --- Freight Bidding ---
  async createFreightBid(tenantId: string, dto: FreightBiddingDto) {
    return this.prisma.digitalFreightBidding.create({
      data: {
        tenantId,
        routeCode: dto.routeCode,
        truckType: dto.truckType,
        offeredRate: dto.offeredRate,
        carrierName: dto.carrierName,
      },
    });
  }

  async getFreightBids(tenantId: string, search?: string) {
    return this.prisma.digitalFreightBidding.findMany({
      where: {
        tenantId,
        OR: search
          ? [
              { routeCode: { contains: search, mode: 'insensitive' } },
              { carrierName: { contains: search, mode: 'insensitive' } },
              { truckType: { contains: search, mode: 'insensitive' } },
            ]
          : undefined,
      },
      orderBy: { offeredRate: 'asc' },
    });
  }

  async deleteFreightBid(id: string) {
    return this.prisma.digitalFreightBidding.delete({
      where: { id },
    });
  }
}
