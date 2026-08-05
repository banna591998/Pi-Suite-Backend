import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { InjectQueue } from '@nestjs/bull';
import { type Queue } from 'bull';
import { LoginDto, RegisterTenantDto } from './dto/auth.dto';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  private loginAttempts = new Map<
    string,
    { count: number; lockUntil?: Date }
  >();

  constructor(
    @Inject(AuthRepository) private readonly authRepo: AuthRepository,
    @Inject(JwtService) private readonly jwtService: JwtService,
    @InjectQueue('email-queue') private readonly emailQueue: Queue,
  ) {}

  async registerTenant(dto: RegisterTenantDto) {
    const existingTenant = await this.authRepo.findTenantBySlug(dto.slug);
    if (existingTenant)
      throw new ConflictException('Tenant workspace already exists');

    const existingUser = await this.authRepo.findUserByEmail(dto.email);
    if (existingUser)
      throw new ConflictException('Email context already registered');

    const passwordHash = await bcrypt.hash(dto.password, 12);
    const result = await this.authRepo.executeTenantRegistrationTx(
      dto,
      passwordHash,
    );

    const baseDomain = process.env.BASE_DOMAIN || 'localhost:3000';

    this.emailQueue
      .add('send-email', {
        type: 'tenant.registered',
        data: {
          email: result.user.email,
          name: `${result.user.firstName} ${result.user.lastName}`,
          company: result.tenant.companyName,
          loginUrl: `http://${baseDomain}/auth/login`,
        },
      })
      .catch((err) => console.error('Queue push failed', err));

    return {
      success: true,
      message: 'Instance provisioned successfully.',
    };
  }

  async login(dto: LoginDto) {
    const attemptKey = dto.email.toLowerCase();
    const currentAttempt = this.loginAttempts.get(attemptKey);

    if (currentAttempt?.lockUntil && currentAttempt.lockUntil > new Date()) {
      throw new BadRequestException('Account locked. Try again later.');
    }

    const user = await this.authRepo.findUserByEmail(dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      const count = (currentAttempt?.count || 0) + 1;
      if (count >= 3) {
        this.loginAttempts.set(attemptKey, {
          count,
          lockUntil: new Date(Date.now() + 15 * 60 * 1000),
        });
      } else {
        this.loginAttempts.set(attemptKey, { count });
      }
      throw new UnauthorizedException('Authentication credentials mismatch');
    }

    this.loginAttempts.delete(attemptKey);
    const payload = {
      sub: user.id,
      email: user.email,
      tenantId: user.tenantId,
      roles: user.userRoles.map((ur) => ur.role.name),
    };

    const tokens = {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '7d',
      }),
      refreshToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '30d',
      }),
    };

    await this.authRepo.createRefreshToken(
      user.id,
      tokens.refreshToken,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    );

    const { passwordHash, resetToken, resetTokenExpires, ...userProfile } =
      user;
    return { tokens, user: userProfile };
  }

  async createTenantUser(dto: {
    tenantId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: string;
  }) {
    if (!dto.tenantId) {
      throw new BadRequestException(
        'Tenant context missing from authorization token.',
      );
    }

    const existingUser = await this.authRepo.findUserByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('Email already registered in the system');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const user = await this.authRepo.createTenantUser({
      tenantId: dto.tenantId, 
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      passwordHash,
      roleId: dto.roleId,
    });

    const { passwordHash: _, ...userProfile } = user;
    return {
      success: true,
      message: 'User provisioned and role assigned successfully under tenant.',
      user: userProfile,
    };
  }

  async resetPassword(dto: { email: string; newPassword: string }) {
    const user = await this.authRepo.findUserByEmail(dto.email);
    if (!user) throw new NotFoundException('User not found');
    const passwordHash = await bcrypt.hash(dto.newPassword, 12);
    await this.authRepo.updatePasswordAndClearToken(user.id, passwordHash);

    await this.emailQueue.add('send-email', {
      type: 'password.reset_requested',
      data: {
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        resetUrl: `http://${process.env.BASE_DOMAIN}/auth/reset-password?token=${user.resetToken}`,
      },
    });

    return { success: true, message: 'Password updated successfully' };
  }
}
