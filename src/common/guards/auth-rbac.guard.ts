import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    const tokenFromCookie = request.cookies?.['access_token'];

    const token = authHeader?.startsWith('Bearer ')
      ? authHeader.split(' ')[1]
      : tokenFromCookie;

    if (!token) {
      throw new UnauthorizedException('Authentication token missing');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_ACCESS_SECRET,
      });

      request['user'] = payload;
      return true;
    } catch (e) {
      console.error('JWT Error:', (e as any).message);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
