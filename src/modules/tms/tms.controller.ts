import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { TmsService } from './tms.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class TmsController {
  constructor(@Inject(TmsService) private readonly tmsService: TmsService) {}

  @GrpcMethod('TmsServiceGrpc', 'RegisterVehicle')
  async registerVehicle(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.tmsService.registerVehicle(data.tenantId, dto);
      return {
        success: true,
        message: 'Vehicle registered successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC RegisterVehicle Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while registering vehicle',
      });
    }
  }

  @GrpcMethod('TmsServiceGrpc', 'GetVehicles')
  async getVehicles(data: { tenantId: string }) {
    try {
      const result = await this.tmsService.getAllVehicles(data.tenantId);
      return {
        success: true,
        message: 'Vehicles fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetVehicles Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching vehicles',
      });
    }
  }

  @GrpcMethod('TmsServiceGrpc', 'UpdateVehicleLocation')
  async updateLocation(data: {
    tenantId: string;
    id: string;
    payloadJson: string;
  }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.tmsService.trackVehicle(
        data.tenantId,
        data.id,
        dto,
      );
      return {
        success: true,
        message: 'Vehicle location updated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpdateVehicleLocation Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while updating vehicle location',
      });
    }
  }

  @GrpcMethod('TmsServiceGrpc', 'CreateShipment')
  async createShipment(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.tmsService.createShipment(data.tenantId, dto);
      return {
        success: true,
        message: 'Shipment created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateShipment Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while creating shipment',
      });
    }
  }

  @GrpcMethod('TmsServiceGrpc', 'VerifyPoD')
  async verifyPoD(data: { tenantId: string; id: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.tmsService.verifyAndCompletePoD(
        data.tenantId,
        data.id,
        dto,
      );
      return {
        success: true,
        message: 'PoD verified successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC VerifyPoD Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while verifying PoD',
      });
    }
  }
}
