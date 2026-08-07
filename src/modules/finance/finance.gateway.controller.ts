import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface FinanceServiceClient {
  registerAsset(data: any): Observable<any>;
  getAssetsWithDepreciation(data: any): Observable<any>;
  calculateLandedCost(data: any): Observable<any>;
  addLedgerEntry(data: any): Observable<any>;
  getLedger(data: any): Observable<any>;
}

@Controller('finance')
export class FinanceGatewayController implements OnModuleInit {
  private financeService: FinanceServiceClient;

  constructor(
    @Inject('FINANCE_GRPC_SERVICE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.financeService =
      this.client.getService<FinanceServiceClient>('FinanceServiceGrpc');
  }

  // Register Asset
  @Post('asset/register')
  async registerAsset(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.financeService
      .registerAsset({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Get Assets with Depreciation
  @Get('assets')
  async getAssetsWithDepreciation(@Query('tenantId') tenantId: string) {
    return this.financeService
      .getAssetsWithDepreciation({ tenantId })
      .toPromise();
  }

  // Calculate Landed Cost
  @Post('landed-cost')
  async calculateLandedCost(
    @Body() body: { tenantId: string; [key: string]: any },
  ) {
    const { tenantId, ...dto } = body;
    return this.financeService
      .calculateLandedCost({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Add Ledger Entry
  @Post('ledger/entry')
  async addLedgerEntry(@Body() body: { tenantId: string; [key: string]: any }) {
    const { tenantId, ...dto } = body;
    return this.financeService
      .addLedgerEntry({
        tenantId,
        payloadJson: JSON.stringify(dto),
      })
      .toPromise();
  }

  // Get Financial Ledger
  @Get('ledger')
  async getLedger(@Query('tenantId') tenantId: string) {
    return this.financeService.getLedger({ tenantId }).toPromise();
  }
}
