import { Module } from '@nestjs/common';
import { ManufacturingController } from './manufacturing.controller';
import { ManufacturingService } from './manufacturing.service';
import { ManufacturingRepository } from './manufacturing.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [ManufacturingController],
  providers: [ManufacturingService, ManufacturingRepository],
  exports: [ManufacturingService],
})
export class ManufacturingModule {}
