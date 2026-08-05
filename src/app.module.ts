import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { PaymentModule } from './modules/payment/payment.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './modules/roles/dto/role.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import { TmsModule } from './modules/tms/tms.module';
import { ProcurementModule } from './modules/procurement/procurement.module';
import { ManufacturingModule } from './modules/manufacturing/manufacturing.module';
import { SalesModule } from './modules/sales/sales.module';
import { FinanceModule } from './modules/finance/finance.module';
import { CollaborationModule } from './modules/collaboration/collaboration.module';
import { SecurityModule } from './modules/security/security.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { GrpcGlobalModule } from './grpc/grpc.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({
      redis: {
        host: 'redis-10335.c245.us-east-1-3.ec2.cloud.redislabs.com',
        port: 10335,
        password: 'W1bOD96uYJvz9Mb7JEzX7Tb3wpCJeIps',
        username: 'default',
      },
    }),
    BullModule.registerQueue({ name: 'email-queue' }),
    GrpcGlobalModule,
    AuthModule,
    PaymentModule,
    PrismaModule,
    RoleModule,
    TenantModule,
    InventoryModule,
    WarehouseModule,
    TmsModule,
    ProcurementModule,
    ManufacturingModule,
    SalesModule,
    FinanceModule,
    CollaborationModule,
    SecurityModule,
    AnalyticsModule,
  ],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
