import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { BullModule } from '@nestjs/bull';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthController } from './auth.controller'; // ১. gRPC সার্ভার কন্ট্রোলার ইমপোর্ট করুন
import { AuthGatewayController } from './auth-gateway.controller'; // ২. HTTP API Gateway কন্ট্রোলার

@Module({
  imports: [
    JwtModule.register({}),
    BullModule.registerQueue({
      name: 'email-queue',
    }),
    ClientsModule.register([
      {
        name: 'AUTH_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(process.cwd(), 'src/proto/auth.proto'),
          url: 'localhost:50051', // Auth সার্ভিসের ঠিকানা
        },
      },
    ]),
  ],
  controllers: [
    AuthController, // ৩. এখানে gRPC হ্যান্ডেলার কন্ট্রোলার রেজিস্টার করুন
    AuthGatewayController, // ৪. এখানে HTTP গেটওয়ে কন্ট্রোলার রেজিস্টার করুন
  ],
  providers: [AuthService, AuthRepository],
  exports: [AuthService],
})
export class AuthModule {}
