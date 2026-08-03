import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleRepository } from './role.repository'; // Ensure this path is correct
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [RoleController],
  providers: [
    RoleService,
    RoleRepository, // Registering RoleRepository as a provider here
  ],
  exports: [RoleService],
})
export class RoleModule {}
