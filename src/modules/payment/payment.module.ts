import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { PaymentGatewayController } from './payment-gateway.controller';
import { PaymentService } from './payment.service';
import { PaymentRepository } from './payment.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { join } from 'path';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({
      name: 'email-queue',
    }),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    ClientsModule.register([
      {
        name: 'PAYMENT_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'payment',
          protoPath: join(process.cwd(), 'src/proto/payment.proto'),
          url: 'localhost:50057', // পেমেন্ট মাইক্রোসার্ভিস পোর্ট
        },
      },
    ]),
  ],
  controllers: [PaymentGatewayController],
  providers: [PaymentService, PaymentRepository],
  exports: [PaymentService],
})
export class PaymentModule {}
