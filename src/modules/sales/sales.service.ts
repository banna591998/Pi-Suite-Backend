import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SalesRepository } from './sales.repository';
import { CreateSalesOrderDto, GenerateInvoiceDto } from './dto/sales.dto';
import { InjectQueue } from '@nestjs/bull';
import { type Queue } from 'bull';

@Injectable()
export class SalesService {
  constructor(
    @Inject(SalesRepository) private readonly salesRepo: SalesRepository,
    @InjectQueue('email-queue') private readonly emailQueue: Queue,
  ) {}

  async createOrder(tenantId: string, dto: CreateSalesOrderDto) {
    return this.salesRepo.createSalesOrder(tenantId, dto);
  }

  // Feature 58 & BullMQ Email integration: Generate Invoice and trigger email
  async generateAndSendInvoice(
    tenantId: string,
    orderId: string,
    customerEmail: string,
    customerName: string,
    dto: GenerateInvoiceDto,
  ) {
    const order = await this.salesRepo.findOrderById(tenantId, orderId);
    if (!order) {
      throw new NotFoundException(`Sales Order with ID ${orderId} not found.`);
    }

    const invoice = await this.salesRepo.createInvoice(
      tenantId,
      orderId,
      order.totalAmount,
      dto,
    );

    // Push job to BullMQ queue for email dispatch
    await this.emailQueue.add('send-email', {
      type: 'payment.invoice.success',
      data: {
        email: customerEmail,
        name: customerName,
        plan: `Order Channel: ${order.channel}`,
        invoiceNumber: invoice.invoiceNumber,
        amount: invoice.netAmount,
        currency: 'USD',
      },
    });

    return {
      message: 'Invoice generated and email dispatch queued successfully.',
      invoice,
    };
  }
}
