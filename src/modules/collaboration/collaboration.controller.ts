import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { CollaborationService } from './collaboration.service';
import { status } from '@grpc/grpc-js';

@Controller()
export class CollaborationController {
  constructor(
    @Inject(CollaborationService)
    private readonly collaborationService: CollaborationService,
  ) {}

  @GrpcMethod('CollaborationServiceGrpc', 'GetCollaborationEnums')
  async getCollaborationEnums() {
    try {
      const result = await this.collaborationService.getCollaborationEnums();
      return {
        success: true,
        message: 'Enums fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetCollaborationEnums Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message: error.message || 'Internal server error while fetching enums',
      });
    }
  }

  
  @GrpcMethod('CollaborationServiceGrpc', 'CreateSupplierRecord')
  async createSupplierRecord(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.collaborationService.handleSupplierSubmission(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Supplier record created successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateSupplierRecord Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error during supplier creation',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'GetSupplierSubmissions')
  async getSupplierSubmissions(data: { tenantId: string; search: string }) {
    try {
      const result = await this.collaborationService.getSupplierSubmissions(
        data.tenantId,
        data.search,
      );
      return {
        success: true,
        message: 'Supplier submissions fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetSupplierSubmissions Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching supplier submissions',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'UpdateSupplierRecord')
  async updateSupplierRecord(data: { id: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.collaborationService.updateSupplierRecord(
        data.id,
        dto,
      );
      return {
        success: true,
        message: 'Supplier record updated successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpdateSupplierRecord Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while updating supplier record',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'DeleteSupplierRecord')
  async deleteSupplierRecord(data: { id: string }) {
    try {
      const result = await this.collaborationService.deleteSupplierRecord(
        data.id,
      );
      return {
        success: true,
        message: 'Supplier record deleted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC DeleteSupplierRecord Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while deleting supplier record',
      });
    }
  }

  
  @GrpcMethod('CollaborationServiceGrpc', 'C_RpcClientTrackingUpsert')
  async upsertClientTracking(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.collaborationService.updateClientTracking(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Client tracking upserted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC UpsertClientTracking Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error during client tracking upsert',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'GetClientTrackings')
  async getClientTrackings(data: { tenantId: string; search: string }) {
    try {
      const result = await this.collaborationService.getClientTrackings(
        data.tenantId,
        data.search,
      );
      return {
        success: true,
        message: 'Client trackings fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetClientTrackings Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching client trackings',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'DeleteClientTracking')
  async deleteClientTracking(data: { id: string }) {
    try {
      const result = await this.collaborationService.deleteClientTracking(
        data.id,
      );
      return {
        success: true,
        message: 'Client tracking deleted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC DeleteClientTracking Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while deleting client tracking',
      });
    }
  }

  
  @GrpcMethod('CollaborationServiceGrpc', 'CreateContractOrder')
  async createContractOrder(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result =
        await this.collaborationService.manageContractManufacturing(
          data.tenantId,
          dto,
        );
      return {
        success: true,
        message: 'Contract order managed successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateContractOrder Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error during contract order management',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'GetContractOrders')
  async getContractOrders(data: { tenantId: string; search: string }) {
    try {
      const result = await this.collaborationService.getContractOrders(
        data.tenantId,
        data.search,
      );
      return {
        success: true,
        message: 'Contract orders fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetContractOrders Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while fetching contract orders',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'DeleteContractOrder')
  async deleteContractOrder(data: { id: string }) {
    try {
      const result = await this.collaborationService.deleteContractOrder(
        data.id,
      );
      return {
        success: true,
        message: 'Contract order deleted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC DeleteContractOrder Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error while deleting contract order',
      });
    }
  }

  
  @GrpcMethod('CollaborationServiceGrpc', 'CreateFreightBid')
  async createFreightBid(data: { tenantId: string; payloadJson: string }) {
    try {
      const dto = JSON.parse(data.payloadJson || '{}');
      const result = await this.collaborationService.submitFreightBid(
        data.tenantId,
        dto,
      );
      return {
        success: true,
        message: 'Freight bid submitted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC CreateFreightBid Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message ||
          'Internal server error during freight bid submission',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'GetFreightBids')
  async getFreightBids(data: { tenantId: string; search: string }) {
    try {
      const result = await this.collaborationService.getMarketplaceBids(
        data.tenantId,
        data.search,
      );
      return {
        success: true,
        message: 'Freight bids fetched successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC GetFreightBids Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while fetching freight bids',
      });
    }
  }

  @GrpcMethod('CollaborationServiceGrpc', 'DeleteFreightBid')
  async deleteFreightBid(data: { id: string }) {
    try {
      const result = await this.collaborationService.deleteFreightBid(data.id);
      return {
        success: true,
        message: 'Freight bid deleted successfully',
        dataJson: JSON.stringify(result),
      };
    } catch (error: any) {
      console.error('gRPC DeleteFreightBid Error:', error);
      throw new RpcException({
        code: status.INTERNAL,
        message:
          error.message || 'Internal server error while deleting freight bid',
      });
    }
  }
}
