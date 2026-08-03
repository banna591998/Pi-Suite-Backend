import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SalesRepository } from './sales.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { EmailProcessor } from 'src/common/email/consumer';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({}),
    BullModule.registerQueue({
      name: 'email-queue',
    }),
  ],
  controllers: [SalesController],
  providers: [SalesService, SalesRepository, EmailProcessor],
  exports: [SalesService],
})
export class SalesModule {}
