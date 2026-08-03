import { Inject, Injectable } from '@nestjs/common';
import {
  CreateVendorDto,
  CreateRfqDto,
  CreatePoDto,
} from './dto/procurement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProcurementRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createVendor(tenantId: string, dto: CreateVendorDto) {
    return this.prisma.vendor.create({
      data: { tenantId, ...dto },
    });
  }

  async findAllVendors(tenantId: string) {
    return this.prisma.vendor.findMany({
      where: { tenantId },
      include: { purchaseOrders: true },
    });
  }

  async createRfq(tenantId: string, dto: CreateRfqDto) {
    return this.prisma.requestForQuote.create({
      data: { tenantId, ...dto },
    });
  }

  async createPurchaseOrder(tenantId: string, dto: CreatePoDto) {
    return this.prisma.purchaseOrder.create({
      data: { tenantId, ...dto },
    });
  }

  async findPoById(tenantId: string, id: string) {
    return this.prisma.purchaseOrder.findFirst({
      where: { id, tenantId },
      include: { vendor: true },
    });
  }

  async updatePoMatchStatus(
    tenantId: string,
    id: string,
    matchResult: boolean,
  ) {
    return this.prisma.purchaseOrder.update({
      where: { id },
      data: {
        invoiceMatch: matchResult,
        status: matchResult ? 'APPROVED' : 'PENDING_APPROVAL',
      },
    });
  }
}
