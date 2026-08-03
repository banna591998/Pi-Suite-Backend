import {
  Controller,
  Post,
  Body,
  UsePipes,
  UseGuards,
  UseInterceptors,
  Inject,
  Res,
  Query,
  Get,
  Req,
} from '@nestjs/common';
import { type Response } from 'express';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { AtomicThrottleGuard } from '../../common/guards/atomic-throttle.guard';

import {
  RegisterTenantSchema,
  RegisterTenantDto,
  LoginDto,
} from './dto/auth.dto';
import { AuthService } from './auth.service';
import { GlobalLoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthGuard } from 'src/common/guards/auth-rbac.guard';

@Controller('auth')
@UseInterceptors(GlobalLoggingInterceptor)
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  @Post('tenant/register')
  @UseGuards(AtomicThrottleGuard)
  @UsePipes(new ZodValidationPipe(RegisterTenantSchema))
  async registerTenant(@Body() dto: RegisterTenantDto) {
    return await this.authService.registerTenant(dto);
  }

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { tokens, user } = await this.authService.login(dto);

    const isProduction = process.env.NODE_ENV === 'production';

    response.cookie('access_token', tokens.accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
    });

    response.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 1000,
      path: '/',
    });

    return {
      success: true,
      user,
    };
  }

  @Post('tenant/users')
  @UseGuards(AuthGuard)
  async createTenantUser(
    @Req() req: any, // রিকোয়েস্ট অবজেক্ট ধরুন যেখানে গার্ড থেকে ইউজার ডাটা সেট করা আছে
    @Body()
    body: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      roleId: string;
    },
  ) {
    const tenantId = req.user.tenantId; // টোকেন থেকে টেন্যান্ট আইডি এক্সট্রাক্ট করা হলো

    return await this.authService.createTenantUser({
      ...body,
      tenantId,
    });
  }

  @Get('reset-password')
  async showResetForm(@Query('email') email: string, @Res() res: Response) {
    return res.send(`
    <form action="/auth/reset-password?email=${encodeURIComponent(email)}" method="POST">
      <input type="password" name="newPassword" placeholder="New Password" required />
      <button type="submit">Update Password</button>
    </form>
  `);
  }

  @Post('reset-password')
  async resetPassword(
    @Query('email') email: string,
    @Body() body: { newPassword: string },
    @Res() res: Response,
  ) {
    const { newPassword } = body;
    await this.authService.resetPassword({ email, newPassword });
    return res.json('Password updated successfully!');
  }
}
