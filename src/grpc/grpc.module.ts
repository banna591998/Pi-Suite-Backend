import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(process.cwd(), 'src/proto/auth.proto'),
          url: 'localhost:50051',
        },
      },
      {
        name: 'ANALYTICS_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'analytics',
          protoPath: join(process.cwd(), 'src/proto/analytics.proto'),
          url: 'localhost:50052',
        },
      },
      {
        name: 'COLLABORATION_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'collaboration',
          protoPath: join(process.cwd(), 'src/proto/collaboration.proto'),
          url: 'localhost:50053',
        },
      },
      {
        name: 'FINANCE_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'finance',
          protoPath: join(process.cwd(), 'src/proto/finance.proto'),
          url: 'localhost:50054',
        },
      },
      {
        name: 'INVENTORY_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'inventory',
          protoPath: join(process.cwd(), 'src/proto/inventory.proto'),
          url: 'localhost:50055',
        },
      },
      {
        name: 'MANUFACTURING_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'manufacturing',
          protoPath: join(process.cwd(), 'src/proto/manufacturing.proto'),
          url: 'localhost:50056',
        },
      },
      {
        name: 'PAYMENT_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'payment',
          protoPath: join(process.cwd(), 'src/proto/payment.proto'),
          url: 'localhost:50057',
        },
      },
      {
        name: 'PROCUREMENT_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'procurement',
          protoPath: join(process.cwd(), 'src/proto/procurement.proto'),
          url: 'localhost:50058',
        },
      },
      {
        name: 'ROLE_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'role',
          protoPath: join(process.cwd(), 'src/proto/role.proto'),
          url: 'localhost:50059',
        },
      },
      {
        name: 'SALES_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'sales',
          protoPath: join(process.cwd(), 'src/proto/sales.proto'),
          url: 'localhost:50060',
        },
      },
      {
        name: 'SECURITY_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'security',
          protoPath: join(process.cwd(), 'src/proto/security.proto'),
          url: 'localhost:50061',
        },
      },
      {
        name: 'TENANT_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'tenant',
          protoPath: join(process.cwd(), 'src/proto/tenant.proto'),
          url: 'localhost:50062',
        },
      },
      {
        name: 'TMS_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'tms',
          protoPath: join(process.cwd(), 'src/proto/tms.proto'),
          url: 'localhost:50063',
        },
      },
      {
        name: 'WAREHOUSE_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'warehouse',
          protoPath: join(process.cwd(), 'src/proto/warehouse.proto'),
          url: 'localhost:50064',
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcGlobalModule {}
