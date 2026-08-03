import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesOrderDto, GenerateInvoiceDto } from './dto/sales.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async createSalesOrder(tenantId: string, dto: CreateSalesOrderDto) {
    let totalAmount = 0;

    // Explicitly defining the type for itemsData array to prevent 'never[]' inference error
    const itemsData: Array<{
      productName: string;
      quantity: number;
      priceId: string;
    }> = [];

    for (const item of dto.items) {
      const priceRecord = await this.prisma.price.findUnique({
        where: { id: item.priceId },
      });
      totalAmount += (priceRecord?.amount || 0) * item.quantity;

      itemsData.push({
        productName: item.productName,
        quantity: item.quantity,
        priceId: item.priceId,
      });
    }

    return this.prisma.salesOrder.create({
      data: {
        tenantId,
        orderNumber: dto.orderNumber,
        channel: dto.channel,
        customerName: dto.customerName,
        totalAmount,
        orderItems: {
          create: itemsData,
        },
      },
      include: { orderItems: true },
    });
  }

  async findOrderById(tenantId: string, orderId: string) {
    return this.prisma.salesOrder.findFirst({
      where: { id: orderId, tenantId },
      include: { orderItems: true },
    });
  }

  async createInvoice(
    tenantId: string,
    orderId: string,
    totalAmount: number,
    dto: GenerateInvoiceDto,
  ) {
    const netAmount = totalAmount + dto.taxAmount - dto.discountAmount;

    return this.prisma.invoice.create({
      data: {
        tenantId,
        orderId,
        invoiceNumber: dto.invoiceNumber,
        taxAmount: dto.taxAmount,
        discountAmount: dto.discountAmount,
        netAmount,
      },
      include: { order: true },
    });
  }
}
