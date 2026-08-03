import { Module } from '@nestjs/common';
import { SecurityController } from './security.controller';
import { SecurityService } from './security.service';
import { SecurityRepository } from './security.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [SecurityController],
  providers: [SecurityService, SecurityRepository],
  exports: [SecurityService],
})
export class SecurityModule {}
