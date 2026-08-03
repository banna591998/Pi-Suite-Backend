import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class AuthGrpcController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @GrpcMethod('AuthServiceGrpc', 'RegisterTenant')
  async registerTenant(data: any) {
    try {
      const result = await this.authService.registerTenant(data);
      return {
        success: true,
        message: result.message,
      };
    } catch (error: any) {
      console.error('gRPC RegisterTenant Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error during tenant registration',
      });
    }
  }

  @GrpcMethod('AuthServiceGrpc', 'Login')
  async login(data: any) {
    try {
      const { tokens, user } = await this.authService.login(data);
      return {
        success: true,
        message: 'Login successful',
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        userJson: JSON.stringify(user),
      };
    } catch (error: any) {
      console.error('gRPC Login Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error during login',
      });
    }
  }

  @GrpcMethod('AuthServiceGrpc', 'CreateTenantUser')
  async createTenantUser(data: any) {
    try {
      const result = await this.authService.createTenantUser(data);
      return {
        success: result.success,
        message: result.message,
        userJson: JSON.stringify(result.user),
      };
    } catch (error: any) {
      console.error('gRPC CreateTenantUser Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error during user creation',
      });
    }
  }
}