






import * as process from 'node:process'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
globalThis['__dirname'] = path.dirname(fileURLToPath(import.meta.url))

import * as runtime from "@prisma/client/runtime/client"
import * as $Enums from "./enums.js"
import * as $Class from "./internal/class.js"
import * as Prisma from "./internal/prismaNamespace.js"

export * as $Enums from './enums.js'
export * from "./enums.js"

export const PrismaClient = $Class.getPrismaClientClass()
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>
export { Prisma }


export type SupplierPortalRecord = Prisma.SupplierPortalRecordModel

export type ClientShipmentTracking = Prisma.ClientShipmentTrackingModel

export type ContractManufacturingOrder = Prisma.ContractManufacturingOrderModel

export type DigitalFreightBidding = Prisma.DigitalFreightBiddingModel

export type EnterpriseAsset = Prisma.EnterpriseAssetModel

export type SparePart = Prisma.SparePartModel

export type AssetMaintenanceLog = Prisma.AssetMaintenanceLogModel

export type FinancialLedger = Prisma.FinancialLedgerModel

export type LandedCostCalculation = Prisma.LandedCostCalculationModel

export type InventoryTurnoverMetric = Prisma.InventoryTurnoverMetricModel

export type OtifMetric = Prisma.OtifMetricModel

export type SupplyChainBottleneck = Prisma.SupplyChainBottleneckModel

export type CustomReportConfig = Prisma.CustomReportConfigModel

export type User = Prisma.UserModel

export type RefreshToken = Prisma.RefreshTokenModel

export type Permission = Prisma.PermissionModel

export type SystemUptimeRecord = Prisma.SystemUptimeRecordModel

export type AuditLog = Prisma.AuditLogModel

export type SalesOrder = Prisma.SalesOrderModel

export type OrderItem = Prisma.OrderItemModel

export type Price = Prisma.PriceModel

export type Invoice = Prisma.InvoiceModel

export type InventoryItem = Prisma.InventoryItemModel

export type Item = Prisma.ItemModel

export type Workstation = Prisma.WorkstationModel

export type Operation = Prisma.OperationModel

export type BillOfMaterials = Prisma.BillOfMaterialsModel

export type WorkOrder = Prisma.WorkOrderModel

export type Subscription = Prisma.SubscriptionModel

export type PaymentLog = Prisma.PaymentLogModel

export type TenantSubscription = Prisma.TenantSubscriptionModel

export type CustomerTransaction = Prisma.CustomerTransactionModel

export type Vendor = Prisma.VendorModel

export type RequestForQuote = Prisma.RequestForQuoteModel

export type PurchaseOrder = Prisma.PurchaseOrderModel

export type Role = Prisma.RoleModel

export type UserRole = Prisma.UserRoleModel

export type RolePermission = Prisma.RolePermissionModel

export type Tenant = Prisma.TenantModel

export type Branch = Prisma.BranchModel

export type FleetVehicle = Prisma.FleetVehicleModel

export type Shipment = Prisma.ShipmentModel

export type Warehouse = Prisma.WarehouseModel

export type WarehouseZone = Prisma.WarehouseZoneModel
