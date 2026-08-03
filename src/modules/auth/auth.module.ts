import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { BullModule } from '@nestjs/bull';
import { AuthGrpcController } from './auth.grpc.controller'; // নতুন যুক্ত হলো
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    JwtModule.register({}),
    BullModule.registerQueue({
      name: 'email-queue',
    }),
  ],
  controllers: [AuthGrpcController],
  providers: [AuthService, AuthRepository],
  exports: [AuthService],
})
export class AuthModule {}
