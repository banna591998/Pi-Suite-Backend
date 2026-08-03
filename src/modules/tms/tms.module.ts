import { Module } from '@nestjs/common';
import { TmsController } from './tms.controller';
import { TmsService } from './tms.service';
import { TmsRepository } from './tms.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [TmsController],
  providers: [TmsService, TmsRepository],
  exports: [TmsService],
})
export class TmsModule {}
