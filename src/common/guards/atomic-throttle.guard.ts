import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class AtomicThrottleGuard implements CanActivate {
  private activeLocks = new Map<string, number>();

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const ip = request.ip;
    const path = request.route.path;
    const lockKey = `${ip}:${path}`;
    const now = Date.now();

    if (this.activeLocks.has(lockKey)) {
      const lockTime = this.activeLocks.get(lockKey)!;
      if (now - lockTime < 5000) {
        throw new HttpException(
          'A request is already in progress. Please wait 5 seconds.',
          HttpStatus.TOO_MANY_REQUESTS,
        );
      }
    }

    this.activeLocks.set(lockKey, now);

    const response = context.switchToHttp().getResponse();
    response.on('finish', () => {
      this.activeLocks.delete(lockKey);
    });

    return true;
  }
}
