import { Controller, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface AuthServiceClient {
  login(data: any): Observable<any>;
  registerTenant(data: any): Observable<any>;
}

@Controller('auth')
export class AuthGatewayController implements OnModuleInit {
  private authService: AuthServiceClient;

  constructor(
    @Inject('AUTH_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authService =
      this.client.getService<AuthServiceClient>('AuthServiceGrpc');
  }

  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.login(loginDto).toPromise();
  }

  @Post('tenant/register')
  async registerTenant(@Body() registerDto: any) {
    return this.authService.registerTenant(registerDto).toPromise();
  }
}
