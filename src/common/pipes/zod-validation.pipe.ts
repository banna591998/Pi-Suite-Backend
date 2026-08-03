import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    // লগ দিয়ে চেক করুন বডি খালি কিনা
    console.log('--- Incoming Body Data ---', value);

    const result = this.schema.safeParse(value);

    if (!result.success) {
      console.log('--- Validation Errors ---', result.error.errors);

      throw new BadRequestException({
        message: 'Validation failed',
        // Zod এর ফ্ল্যাট এরর মেসেজ ব্যবহার করুন
        details: result.error.flatten().fieldErrors,
      });
    }
    return result.data;
  }
}
