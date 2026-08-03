import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: 'mainClient',
      useExisting: PrismaService,
    },
  ],
  exports: [PrismaService, 'mainClient'],
})
export class PrismaModule {}
