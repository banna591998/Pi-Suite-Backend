import { Module } from '@nestjs/common';
import { CollaborationController } from './collaboration.controller';
import { CollaborationService } from './collaboration.service';
import { CollaborationRepository } from './collaboration.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [CollaborationController],
  providers: [CollaborationService, CollaborationRepository],
  exports: [CollaborationService],
})
export class CollaborationModule {}
