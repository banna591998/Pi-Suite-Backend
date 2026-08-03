import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { EnterpriseRole } from 'prisma/src/generated/prisma/enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(@Inject(Reflector) private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<EnterpriseRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('--- Final RolesGuard Debug ---');
    console.log('User from Request:', user);
    console.log('Required Roles:', requiredRoles);
    console.log('------------------------------');

    if (!requiredRoles) {
      return true;
    }

    if (!user) {
      return false;
    }

    const userRoles: string[] = user.roles || [user.role];

    // সুপার অ্যাডমিন হলে গ্লোবাল এক্সেস
    if (userRoles.includes(EnterpriseRole.SUPER_ADMIN)) {
      return true;
    }

    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
