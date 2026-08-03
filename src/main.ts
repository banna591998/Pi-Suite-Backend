import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
const cookieParser = require('cookie-parser');
import 'dotenv/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.use(cookieParser());

  app.enableCors({
    origin: [
      'http://localhost:3001',
      process.env.CLIENT_URL || 'http://localhost:3001',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // ১. Auth gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(process.cwd(), 'src/proto/auth.proto'),
      url: '0.0.0.0:50051',
    },
  });

  // ২. Analytics gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'analytics',
      protoPath: join(process.cwd(), 'src/proto/analytics.proto'),
      url: '0.0.0.0:50052', // অথবা একই পোর্টে রাখতে চাইলে পোর্ট শেয়ারিং লজিক ব্যবহার করতে পারেন
    },
  });
  // Collaboration gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'collaboration',
      protoPath: join(process.cwd(), 'src/proto/collaboration.proto'),
      url: '0.0.0.0:50053', // পোর্ট আলাদা রাখতে পারেন অথবা একই পোর্টে কনফিগার করতে পারেন
    },
  });
  // Finance gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'finance',
      protoPath: join(process.cwd(), 'src/proto/finance.proto'),
      url: '0.0.0.0:50054', // আলাদা পোর্ট বা প্রয়োজন অনুযায়ী কনফিগার করুন
    },
  });
  // Inventory gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'inventory',
      protoPath: join(process.cwd(), 'src/proto/inventory.proto'),
      url: '0.0.0.0:50055', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Manufacturing gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'manufacturing',
      protoPath: join(process.cwd(), 'src/proto/manufacturing.proto'),
      url: '0.0.0.0:50056', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Payment gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'payment',
      protoPath: join(process.cwd(), 'src/proto/payment.proto'),
      url: '0.0.0.0:50057', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Procurement gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'procurement',
      protoPath: join(process.cwd(), 'src/proto/procurement.proto'),
      url: '0.0.0.0:50058', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Role gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'role',
      protoPath: join(process.cwd(), 'src/proto/role.proto'),
      url: '0.0.0.0:50059', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Sales gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'sales',
      protoPath: join(process.cwd(), 'src/proto/sales.proto'),
      url: '0.0.0.0:50060', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Security gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'security',
      protoPath: join(process.cwd(), 'src/proto/security.proto'),
      url: '0.0.0.0:50061', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Tenant gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'tenant',
      protoPath: join(process.cwd(), 'src/proto/tenant.proto'),
      url: '0.0.0.0:50062', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // TMS gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'tms',
      protoPath: join(process.cwd(), 'src/proto/tms.proto'),
      url: '0.0.0.0:50063', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  // Warehouse gRPC Microservice কানেক্ট করা
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'warehouse',
      protoPath: join(process.cwd(), 'src/proto/warehouse.proto'),
      url: '0.0.0.0:50064', // আলাদা পোর্ট কনফিগার করা হলো
    },
  });
  await app.init();
  await app.startAllMicroservices();

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log(`🪐 Gateway & Microservices Engine running on port: ${port}`);
}

bootstrap();
