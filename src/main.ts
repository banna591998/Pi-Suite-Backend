import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
const cookieParser = require('cookie-parser');
import 'dotenv/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  // ১. Cookie Parser যোগ করা
  app.use(cookieParser());

  // ৩. CORS কনফিগারেশন (প্রয়োজনীয়)
  app.enableCors({
    origin: [
      'http://localhost:3001',
      process.env.CLIENT_URL || 'http://localhost:3001',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // এটি true থাকলে origin এ '*' ব্যবহার করা যাবে না
  });

  // পোর্ট লিসেনিং
  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log(`🪐 Gateway Engine running on port: ${port}`);
}

bootstrap();
