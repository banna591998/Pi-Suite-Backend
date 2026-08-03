import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

@Injectable()
export class EnterpriseRolesGuard implements CanActivate {
  constructor(
    @Inject(Reflector) private reflector: Reflector,
    @Inject(PrismaService) private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // AuthGuard থেকে আসা পেইলড (যেখানে sub, email, tenantId থাকে)

    if (!user || !user.sub || !user.tenantId) {
      throw new ForbiddenException('Invalid tenant or user session context.');
    }

    // ডাটাবেজ থেকে ইউজারের সঠিক টেন্যান্ট এবং তার অ্যাসাইনড রোলগুলো ফেচ করা
    const dbUser = await this.prisma.user.findFirst({
      where: {
        id: user.sub,
        tenantId: user.tenantId, // টেন্যান্ট আইসোলেশন কঠোরভাবে নিশ্চিত করা হলো
      },
      include: {
        userRoles: {
          include: {
            role: {
              include: {
                rolePermissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!dbUser) {
      throw new ForbiddenException(
        'User context not found within this workspace.',
      );
    }

    // ইউজারের রোলগুলোর মধ্য থেকে রিকোয়ার্ড রোলের সাথে ম্যাচ করে কি না চেক করা
    const userRoleNames = dbUser.userRoles.map((ur) => ur.role.name);

    // যদি ইউজার সুপারঅ্যাডমিন বা টেন্যান্ট অ্যাডমিন হয়, তবে বাই-ডিফল্ট সব পাবে
    const hasAccess =
      userRoleNames.includes('SUPER_ADMIN' as any) ||
      userRoleNames.includes('TENANT_ADMIN' as any) ||
      requiredRoles.some((role) => userRoleNames.includes(role as any));

    if (!hasAccess) {
      throw new ForbiddenException(
        'You do not have the required workspace role or module permissions to perform this action.',
      );
    }

    return true;
  }
}
