import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // কুকিজ অথবা হেডার থেকে টোকেন সংগ্রহ করা
    const token =
      request.cookies?.access_token ||
      request.headers['authorization']?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException(
        'Access token is missing from cookies or headers.',
      );
    }

    try {
      // সঠিক `.env` ভ্যারিয়েবল (JWT_ACCESS_SECRET) দিয়ে টোকেন ভেরিফাই ও ডিকোড করা
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET,
      });

      // রিকোয়েস্টে ইউজার যুক্ত করা
      request['user'] = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token.');
    }
  }
}
