import { Module } from '@nestjs/common';
import { ProcurementController } from './procurement.controller';
import { ProcurementService } from './procurement.service';
import { ProcurementRepository } from './procurement.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [ProcurementController],
  providers: [ProcurementService, ProcurementRepository],
  exports: [ProcurementService],
})
export class ProcurementModule {}
