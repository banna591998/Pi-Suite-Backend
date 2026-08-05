






import * as runtime from "@prisma/client/runtime/client"
import type * as Prisma from "../models.js"
import { type PrismaClient } from "./class.js"

export type * from '../models.js'

export type DMMF = typeof runtime.DMMF

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>



export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

export const PrismaClientInitializationError = runtime.PrismaClientInitializationError
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError

export const PrismaClientValidationError = runtime.PrismaClientValidationError
export type PrismaClientValidationError = runtime.PrismaClientValidationError


export const sql = runtime.sqltag
export const empty = runtime.empty
export const join = runtime.join
export const raw = runtime.raw
export const Sql = runtime.Sql
export type Sql = runtime.Sql




export const Decimal = runtime.Decimal
export type Decimal = runtime.Decimal

export type DecimalJsLike = runtime.DecimalJsLike


export type Extension = runtime.Types.Extensions.UserArgs
export const getExtensionContext = runtime.Extensions.getExtensionContext
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>

export type PrismaVersion = {
  client: string
  engine: string
}


export const prismaVersion: PrismaVersion = {
  client: "7.8.0",
  engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
}



export type Bytes = runtime.Bytes
export type JsonObject = runtime.JsonObject
export type JsonArray = runtime.JsonArray
export type JsonValue = runtime.JsonValue
export type InputJsonObject = runtime.InputJsonObject
export type InputJsonArray = runtime.InputJsonArray
export type InputJsonValue = runtime.InputJsonValue


export const NullTypes = {
  DbNull: runtime.NullTypes.DbNull as (new (secret: never) => typeof runtime.DbNull),
  JsonNull: runtime.NullTypes.JsonNull as (new (secret: never) => typeof runtime.JsonNull),
  AnyNull: runtime.NullTypes.AnyNull as (new (secret: never) => typeof runtime.AnyNull),
}

export const DbNull = runtime.DbNull


export const JsonNull = runtime.JsonNull


export const AnyNull = runtime.AnyNull


type SelectAndInclude = {
  select: any
  include: any
}

type SelectAndOmit = {
  select: any
  omit: any
}


type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

export type Enumerable<T> = T | Array<T>;


export type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};


export type SelectSubset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})


export type SubsetIntersection<T, U, K> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  K

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };


export type XOR<T, U> =
  T extends object ?
  U extends object ?
    (Without<T, U> & U) | (Without<U, T> & T)
  : U : T



type IsObject<T extends any> = T extends Array<any>
? False
: T extends Date
? False
: T extends Uint8Array
? False
: T extends BigInt
? False
: T extends object
? True
: False



export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T



type __Either<O extends object, K extends Key> = Omit<O, K> &
  {
    
    [P in K]: Prisma__Pick<O, P & keyof O> 
  }[K]

type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

type _Either<
  O extends object,
  K extends Key,
  strict extends Boolean
> = {
  1: EitherStrict<O, K>
  0: EitherLoose<O, K>
}[strict]

export type Either<
  O extends object,
  K extends Key,
  strict extends Boolean = 1
> = O extends unknown ? _Either<O, K, strict> : never

export type Union = any

export type PatchUndefined<O extends object, O1 extends object> = {
  [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
} & {}


export type IntersectOf<U extends Union> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};

type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;

type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];

export type ComputeRaw<A extends any> = A extends Function ? A : {
  [K in keyof A]: A[K];
} & {};

export type OptionalFlat<O> = {
  [K in keyof O]?: O[K];
} & {};

type _Record<K extends keyof any, T> = {
  [P in K]: T;
};


type NoExpand<T> = T extends unknown ? T : never;


export type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
  ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
    | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
  : never>;

type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

export type Strict<U extends object> = ComputeRaw<_Strict<U>>;


export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

export type Boolean = True | False

export type True = 1

export type False = 0

export type Not<B extends Boolean> = {
  0: 1
  1: 0
}[B]

export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
  ? 0 
  : A1 extends A2
  ? 1
  : 0

export type Has<U extends Union, U1 extends Union> = Not<
  Extends<Exclude<U1, U>, U1>
>

export type Or<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0
    1: 1
  }
  1: {
    0: 1
    1: 1
  }
}[B1][B2]

export type Keys<U extends Union> = U extends unknown ? keyof U : never

export type GetScalarType<T, O> = O extends object ? {
  [P in keyof T]: P extends keyof O
    ? O[P]
    : never
} : never

type FieldPaths<
  T,
  U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
> = IsObject<T> extends True ? U : T

export type GetHavingFields<T> = {
  [K in keyof T]: Or<
    Or<Extends<'OR', K>, Extends<'AND', K>>,
    Extends<'NOT', K>
  > extends True
    ? 
      
      
      T[K] extends infer TK
      ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
      : never
    : {} extends FieldPaths<T[K]>
    ? never
    : K
}[keyof T]


type _TupleToUnion<T> = T extends (infer E)[] ? E : never
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T


export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>


export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


export const ModelName = {
  SupplierPortalRecord: 'SupplierPortalRecord',
  ClientShipmentTracking: 'ClientShipmentTracking',
  ContractManufacturingOrder: 'ContractManufacturingOrder',
  DigitalFreightBidding: 'DigitalFreightBidding',
  EnterpriseAsset: 'EnterpriseAsset',
  SparePart: 'SparePart',
  AssetMaintenanceLog: 'AssetMaintenanceLog',
  FinancialLedger: 'FinancialLedger',
  LandedCostCalculation: 'LandedCostCalculation',
  InventoryTurnoverMetric: 'InventoryTurnoverMetric',
  OtifMetric: 'OtifMetric',
  SupplyChainBottleneck: 'SupplyChainBottleneck',
  CustomReportConfig: 'CustomReportConfig',
  User: 'User',
  RefreshToken: 'RefreshToken',
  Permission: 'Permission',
  SystemUptimeRecord: 'SystemUptimeRecord',
  AuditLog: 'AuditLog',
  SalesOrder: 'SalesOrder',
  OrderItem: 'OrderItem',
  Price: 'Price',
  Invoice: 'Invoice',
  InventoryItem: 'InventoryItem',
  Item: 'Item',
  Workstation: 'Workstation',
  Operation: 'Operation',
  BillOfMaterials: 'BillOfMaterials',
  WorkOrder: 'WorkOrder',
  Subscription: 'Subscription',
  PaymentLog: 'PaymentLog',
  TenantSubscription: 'TenantSubscription',
  CustomerTransaction: 'CustomerTransaction',
  Vendor: 'Vendor',
  RequestForQuote: 'RequestForQuote',
  PurchaseOrder: 'PurchaseOrder',
  Role: 'Role',
  UserRole: 'UserRole',
  RolePermission: 'RolePermission',
  Tenant: 'Tenant',
  Branch: 'Branch',
  FleetVehicle: 'FleetVehicle',
  Shipment: 'Shipment',
  Warehouse: 'Warehouse',
  WarehouseZone: 'WarehouseZone'
} as const

export type ModelName = (typeof ModelName)[keyof typeof ModelName]



export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{extArgs: runtime.Types.Extensions.InternalArgs }, runtime.Types.Utils.Record<string, any>> {
  returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>
}

export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
  globalOmitOptions: {
    omit: GlobalOmitOptions
  }
  meta: {
    modelProps: "supplierPortalRecord" | "clientShipmentTracking" | "contractManufacturingOrder" | "digitalFreightBidding" | "enterpriseAsset" | "sparePart" | "assetMaintenanceLog" | "financialLedger" | "landedCostCalculation" | "inventoryTurnoverMetric" | "otifMetric" | "supplyChainBottleneck" | "customReportConfig" | "user" | "refreshToken" | "permission" | "systemUptimeRecord" | "auditLog" | "salesOrder" | "orderItem" | "price" | "invoice" | "inventoryItem" | "item" | "workstation" | "operation" | "billOfMaterials" | "workOrder" | "subscription" | "paymentLog" | "tenantSubscription" | "customerTransaction" | "vendor" | "requestForQuote" | "purchaseOrder" | "role" | "userRole" | "rolePermission" | "tenant" | "branch" | "fleetVehicle" | "shipment" | "warehouse" | "warehouseZone"
    txIsolationLevel: TransactionIsolationLevel
  }
  model: {
    SupplierPortalRecord: {
      payload: Prisma.$SupplierPortalRecordPayload<ExtArgs>
      fields: Prisma.SupplierPortalRecordFieldRefs
      operations: {
        findUnique: {
          args: Prisma.SupplierPortalRecordFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.SupplierPortalRecordFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>
        }
        findFirst: {
          args: Prisma.SupplierPortalRecordFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.SupplierPortalRecordFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>
        }
        findMany: {
          args: Prisma.SupplierPortalRecordFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>[]
        }
        create: {
          args: Prisma.SupplierPortalRecordCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>
        }
        createMany: {
          args: Prisma.SupplierPortalRecordCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.SupplierPortalRecordCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>[]
        }
        delete: {
          args: Prisma.SupplierPortalRecordDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>
        }
        update: {
          args: Prisma.SupplierPortalRecordUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>
        }
        deleteMany: {
          args: Prisma.SupplierPortalRecordDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.SupplierPortalRecordUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.SupplierPortalRecordUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>[]
        }
        upsert: {
          args: Prisma.SupplierPortalRecordUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPortalRecordPayload>
        }
        aggregate: {
          args: Prisma.SupplierPortalRecordAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierPortalRecord>
        }
        groupBy: {
          args: Prisma.SupplierPortalRecordGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SupplierPortalRecordGroupByOutputType>[]
        }
        count: {
          args: Prisma.SupplierPortalRecordCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SupplierPortalRecordCountAggregateOutputType> | number
        }
      }
    }
    ClientShipmentTracking: {
      payload: Prisma.$ClientShipmentTrackingPayload<ExtArgs>
      fields: Prisma.ClientShipmentTrackingFieldRefs
      operations: {
        findUnique: {
          args: Prisma.ClientShipmentTrackingFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.ClientShipmentTrackingFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>
        }
        findFirst: {
          args: Prisma.ClientShipmentTrackingFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.ClientShipmentTrackingFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>
        }
        findMany: {
          args: Prisma.ClientShipmentTrackingFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>[]
        }
        create: {
          args: Prisma.ClientShipmentTrackingCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>
        }
        createMany: {
          args: Prisma.ClientShipmentTrackingCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.ClientShipmentTrackingCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>[]
        }
        delete: {
          args: Prisma.ClientShipmentTrackingDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>
        }
        update: {
          args: Prisma.ClientShipmentTrackingUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>
        }
        deleteMany: {
          args: Prisma.ClientShipmentTrackingDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.ClientShipmentTrackingUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.ClientShipmentTrackingUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>[]
        }
        upsert: {
          args: Prisma.ClientShipmentTrackingUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientShipmentTrackingPayload>
        }
        aggregate: {
          args: Prisma.ClientShipmentTrackingAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateClientShipmentTracking>
        }
        groupBy: {
          args: Prisma.ClientShipmentTrackingGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ClientShipmentTrackingGroupByOutputType>[]
        }
        count: {
          args: Prisma.ClientShipmentTrackingCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ClientShipmentTrackingCountAggregateOutputType> | number
        }
      }
    }
    ContractManufacturingOrder: {
      payload: Prisma.$ContractManufacturingOrderPayload<ExtArgs>
      fields: Prisma.ContractManufacturingOrderFieldRefs
      operations: {
        findUnique: {
          args: Prisma.ContractManufacturingOrderFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.ContractManufacturingOrderFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>
        }
        findFirst: {
          args: Prisma.ContractManufacturingOrderFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.ContractManufacturingOrderFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>
        }
        findMany: {
          args: Prisma.ContractManufacturingOrderFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>[]
        }
        create: {
          args: Prisma.ContractManufacturingOrderCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>
        }
        createMany: {
          args: Prisma.ContractManufacturingOrderCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.ContractManufacturingOrderCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>[]
        }
        delete: {
          args: Prisma.ContractManufacturingOrderDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>
        }
        update: {
          args: Prisma.ContractManufacturingOrderUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>
        }
        deleteMany: {
          args: Prisma.ContractManufacturingOrderDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.ContractManufacturingOrderUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.ContractManufacturingOrderUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>[]
        }
        upsert: {
          args: Prisma.ContractManufacturingOrderUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractManufacturingOrderPayload>
        }
        aggregate: {
          args: Prisma.ContractManufacturingOrderAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateContractManufacturingOrder>
        }
        groupBy: {
          args: Prisma.ContractManufacturingOrderGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ContractManufacturingOrderGroupByOutputType>[]
        }
        count: {
          args: Prisma.ContractManufacturingOrderCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ContractManufacturingOrderCountAggregateOutputType> | number
        }
      }
    }
    DigitalFreightBidding: {
      payload: Prisma.$DigitalFreightBiddingPayload<ExtArgs>
      fields: Prisma.DigitalFreightBiddingFieldRefs
      operations: {
        findUnique: {
          args: Prisma.DigitalFreightBiddingFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.DigitalFreightBiddingFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>
        }
        findFirst: {
          args: Prisma.DigitalFreightBiddingFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.DigitalFreightBiddingFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>
        }
        findMany: {
          args: Prisma.DigitalFreightBiddingFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>[]
        }
        create: {
          args: Prisma.DigitalFreightBiddingCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>
        }
        createMany: {
          args: Prisma.DigitalFreightBiddingCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.DigitalFreightBiddingCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>[]
        }
        delete: {
          args: Prisma.DigitalFreightBiddingDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>
        }
        update: {
          args: Prisma.DigitalFreightBiddingUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>
        }
        deleteMany: {
          args: Prisma.DigitalFreightBiddingDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.DigitalFreightBiddingUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.DigitalFreightBiddingUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>[]
        }
        upsert: {
          args: Prisma.DigitalFreightBiddingUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$DigitalFreightBiddingPayload>
        }
        aggregate: {
          args: Prisma.DigitalFreightBiddingAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateDigitalFreightBidding>
        }
        groupBy: {
          args: Prisma.DigitalFreightBiddingGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.DigitalFreightBiddingGroupByOutputType>[]
        }
        count: {
          args: Prisma.DigitalFreightBiddingCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.DigitalFreightBiddingCountAggregateOutputType> | number
        }
      }
    }
    EnterpriseAsset: {
      payload: Prisma.$EnterpriseAssetPayload<ExtArgs>
      fields: Prisma.EnterpriseAssetFieldRefs
      operations: {
        findUnique: {
          args: Prisma.EnterpriseAssetFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.EnterpriseAssetFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>
        }
        findFirst: {
          args: Prisma.EnterpriseAssetFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.EnterpriseAssetFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>
        }
        findMany: {
          args: Prisma.EnterpriseAssetFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>[]
        }
        create: {
          args: Prisma.EnterpriseAssetCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>
        }
        createMany: {
          args: Prisma.EnterpriseAssetCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.EnterpriseAssetCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>[]
        }
        delete: {
          args: Prisma.EnterpriseAssetDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>
        }
        update: {
          args: Prisma.EnterpriseAssetUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>
        }
        deleteMany: {
          args: Prisma.EnterpriseAssetDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.EnterpriseAssetUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.EnterpriseAssetUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>[]
        }
        upsert: {
          args: Prisma.EnterpriseAssetUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$EnterpriseAssetPayload>
        }
        aggregate: {
          args: Prisma.EnterpriseAssetAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateEnterpriseAsset>
        }
        groupBy: {
          args: Prisma.EnterpriseAssetGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.EnterpriseAssetGroupByOutputType>[]
        }
        count: {
          args: Prisma.EnterpriseAssetCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.EnterpriseAssetCountAggregateOutputType> | number
        }
      }
    }
    SparePart: {
      payload: Prisma.$SparePartPayload<ExtArgs>
      fields: Prisma.SparePartFieldRefs
      operations: {
        findUnique: {
          args: Prisma.SparePartFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.SparePartFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>
        }
        findFirst: {
          args: Prisma.SparePartFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.SparePartFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>
        }
        findMany: {
          args: Prisma.SparePartFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>[]
        }
        create: {
          args: Prisma.SparePartCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>
        }
        createMany: {
          args: Prisma.SparePartCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.SparePartCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>[]
        }
        delete: {
          args: Prisma.SparePartDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>
        }
        update: {
          args: Prisma.SparePartUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>
        }
        deleteMany: {
          args: Prisma.SparePartDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.SparePartUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.SparePartUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>[]
        }
        upsert: {
          args: Prisma.SparePartUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SparePartPayload>
        }
        aggregate: {
          args: Prisma.SparePartAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateSparePart>
        }
        groupBy: {
          args: Prisma.SparePartGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SparePartGroupByOutputType>[]
        }
        count: {
          args: Prisma.SparePartCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SparePartCountAggregateOutputType> | number
        }
      }
    }
    AssetMaintenanceLog: {
      payload: Prisma.$AssetMaintenanceLogPayload<ExtArgs>
      fields: Prisma.AssetMaintenanceLogFieldRefs
      operations: {
        findUnique: {
          args: Prisma.AssetMaintenanceLogFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.AssetMaintenanceLogFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>
        }
        findFirst: {
          args: Prisma.AssetMaintenanceLogFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.AssetMaintenanceLogFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>
        }
        findMany: {
          args: Prisma.AssetMaintenanceLogFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>[]
        }
        create: {
          args: Prisma.AssetMaintenanceLogCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>
        }
        createMany: {
          args: Prisma.AssetMaintenanceLogCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.AssetMaintenanceLogCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>[]
        }
        delete: {
          args: Prisma.AssetMaintenanceLogDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>
        }
        update: {
          args: Prisma.AssetMaintenanceLogUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>
        }
        deleteMany: {
          args: Prisma.AssetMaintenanceLogDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.AssetMaintenanceLogUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.AssetMaintenanceLogUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>[]
        }
        upsert: {
          args: Prisma.AssetMaintenanceLogUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenanceLogPayload>
        }
        aggregate: {
          args: Prisma.AssetMaintenanceLogAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateAssetMaintenanceLog>
        }
        groupBy: {
          args: Prisma.AssetMaintenanceLogGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AssetMaintenanceLogGroupByOutputType>[]
        }
        count: {
          args: Prisma.AssetMaintenanceLogCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AssetMaintenanceLogCountAggregateOutputType> | number
        }
      }
    }
    FinancialLedger: {
      payload: Prisma.$FinancialLedgerPayload<ExtArgs>
      fields: Prisma.FinancialLedgerFieldRefs
      operations: {
        findUnique: {
          args: Prisma.FinancialLedgerFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.FinancialLedgerFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>
        }
        findFirst: {
          args: Prisma.FinancialLedgerFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.FinancialLedgerFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>
        }
        findMany: {
          args: Prisma.FinancialLedgerFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>[]
        }
        create: {
          args: Prisma.FinancialLedgerCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>
        }
        createMany: {
          args: Prisma.FinancialLedgerCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.FinancialLedgerCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>[]
        }
        delete: {
          args: Prisma.FinancialLedgerDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>
        }
        update: {
          args: Prisma.FinancialLedgerUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>
        }
        deleteMany: {
          args: Prisma.FinancialLedgerDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.FinancialLedgerUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.FinancialLedgerUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>[]
        }
        upsert: {
          args: Prisma.FinancialLedgerUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FinancialLedgerPayload>
        }
        aggregate: {
          args: Prisma.FinancialLedgerAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateFinancialLedger>
        }
        groupBy: {
          args: Prisma.FinancialLedgerGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.FinancialLedgerGroupByOutputType>[]
        }
        count: {
          args: Prisma.FinancialLedgerCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.FinancialLedgerCountAggregateOutputType> | number
        }
      }
    }
    LandedCostCalculation: {
      payload: Prisma.$LandedCostCalculationPayload<ExtArgs>
      fields: Prisma.LandedCostCalculationFieldRefs
      operations: {
        findUnique: {
          args: Prisma.LandedCostCalculationFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.LandedCostCalculationFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>
        }
        findFirst: {
          args: Prisma.LandedCostCalculationFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.LandedCostCalculationFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>
        }
        findMany: {
          args: Prisma.LandedCostCalculationFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>[]
        }
        create: {
          args: Prisma.LandedCostCalculationCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>
        }
        createMany: {
          args: Prisma.LandedCostCalculationCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.LandedCostCalculationCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>[]
        }
        delete: {
          args: Prisma.LandedCostCalculationDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>
        }
        update: {
          args: Prisma.LandedCostCalculationUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>
        }
        deleteMany: {
          args: Prisma.LandedCostCalculationDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.LandedCostCalculationUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.LandedCostCalculationUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>[]
        }
        upsert: {
          args: Prisma.LandedCostCalculationUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$LandedCostCalculationPayload>
        }
        aggregate: {
          args: Prisma.LandedCostCalculationAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateLandedCostCalculation>
        }
        groupBy: {
          args: Prisma.LandedCostCalculationGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.LandedCostCalculationGroupByOutputType>[]
        }
        count: {
          args: Prisma.LandedCostCalculationCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.LandedCostCalculationCountAggregateOutputType> | number
        }
      }
    }
    InventoryTurnoverMetric: {
      payload: Prisma.$InventoryTurnoverMetricPayload<ExtArgs>
      fields: Prisma.InventoryTurnoverMetricFieldRefs
      operations: {
        findUnique: {
          args: Prisma.InventoryTurnoverMetricFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.InventoryTurnoverMetricFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>
        }
        findFirst: {
          args: Prisma.InventoryTurnoverMetricFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.InventoryTurnoverMetricFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>
        }
        findMany: {
          args: Prisma.InventoryTurnoverMetricFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>[]
        }
        create: {
          args: Prisma.InventoryTurnoverMetricCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>
        }
        createMany: {
          args: Prisma.InventoryTurnoverMetricCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.InventoryTurnoverMetricCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>[]
        }
        delete: {
          args: Prisma.InventoryTurnoverMetricDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>
        }
        update: {
          args: Prisma.InventoryTurnoverMetricUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>
        }
        deleteMany: {
          args: Prisma.InventoryTurnoverMetricDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.InventoryTurnoverMetricUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.InventoryTurnoverMetricUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>[]
        }
        upsert: {
          args: Prisma.InventoryTurnoverMetricUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryTurnoverMetricPayload>
        }
        aggregate: {
          args: Prisma.InventoryTurnoverMetricAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateInventoryTurnoverMetric>
        }
        groupBy: {
          args: Prisma.InventoryTurnoverMetricGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.InventoryTurnoverMetricGroupByOutputType>[]
        }
        count: {
          args: Prisma.InventoryTurnoverMetricCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.InventoryTurnoverMetricCountAggregateOutputType> | number
        }
      }
    }
    OtifMetric: {
      payload: Prisma.$OtifMetricPayload<ExtArgs>
      fields: Prisma.OtifMetricFieldRefs
      operations: {
        findUnique: {
          args: Prisma.OtifMetricFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.OtifMetricFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>
        }
        findFirst: {
          args: Prisma.OtifMetricFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.OtifMetricFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>
        }
        findMany: {
          args: Prisma.OtifMetricFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>[]
        }
        create: {
          args: Prisma.OtifMetricCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>
        }
        createMany: {
          args: Prisma.OtifMetricCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.OtifMetricCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>[]
        }
        delete: {
          args: Prisma.OtifMetricDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>
        }
        update: {
          args: Prisma.OtifMetricUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>
        }
        deleteMany: {
          args: Prisma.OtifMetricDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.OtifMetricUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.OtifMetricUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>[]
        }
        upsert: {
          args: Prisma.OtifMetricUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OtifMetricPayload>
        }
        aggregate: {
          args: Prisma.OtifMetricAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateOtifMetric>
        }
        groupBy: {
          args: Prisma.OtifMetricGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.OtifMetricGroupByOutputType>[]
        }
        count: {
          args: Prisma.OtifMetricCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.OtifMetricCountAggregateOutputType> | number
        }
      }
    }
    SupplyChainBottleneck: {
      payload: Prisma.$SupplyChainBottleneckPayload<ExtArgs>
      fields: Prisma.SupplyChainBottleneckFieldRefs
      operations: {
        findUnique: {
          args: Prisma.SupplyChainBottleneckFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.SupplyChainBottleneckFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>
        }
        findFirst: {
          args: Prisma.SupplyChainBottleneckFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.SupplyChainBottleneckFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>
        }
        findMany: {
          args: Prisma.SupplyChainBottleneckFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>[]
        }
        create: {
          args: Prisma.SupplyChainBottleneckCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>
        }
        createMany: {
          args: Prisma.SupplyChainBottleneckCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.SupplyChainBottleneckCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>[]
        }
        delete: {
          args: Prisma.SupplyChainBottleneckDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>
        }
        update: {
          args: Prisma.SupplyChainBottleneckUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>
        }
        deleteMany: {
          args: Prisma.SupplyChainBottleneckDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.SupplyChainBottleneckUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.SupplyChainBottleneckUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>[]
        }
        upsert: {
          args: Prisma.SupplyChainBottleneckUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplyChainBottleneckPayload>
        }
        aggregate: {
          args: Prisma.SupplyChainBottleneckAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateSupplyChainBottleneck>
        }
        groupBy: {
          args: Prisma.SupplyChainBottleneckGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SupplyChainBottleneckGroupByOutputType>[]
        }
        count: {
          args: Prisma.SupplyChainBottleneckCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SupplyChainBottleneckCountAggregateOutputType> | number
        }
      }
    }
    CustomReportConfig: {
      payload: Prisma.$CustomReportConfigPayload<ExtArgs>
      fields: Prisma.CustomReportConfigFieldRefs
      operations: {
        findUnique: {
          args: Prisma.CustomReportConfigFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.CustomReportConfigFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>
        }
        findFirst: {
          args: Prisma.CustomReportConfigFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.CustomReportConfigFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>
        }
        findMany: {
          args: Prisma.CustomReportConfigFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>[]
        }
        create: {
          args: Prisma.CustomReportConfigCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>
        }
        createMany: {
          args: Prisma.CustomReportConfigCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.CustomReportConfigCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>[]
        }
        delete: {
          args: Prisma.CustomReportConfigDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>
        }
        update: {
          args: Prisma.CustomReportConfigUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>
        }
        deleteMany: {
          args: Prisma.CustomReportConfigDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.CustomReportConfigUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.CustomReportConfigUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>[]
        }
        upsert: {
          args: Prisma.CustomReportConfigUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomReportConfigPayload>
        }
        aggregate: {
          args: Prisma.CustomReportConfigAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateCustomReportConfig>
        }
        groupBy: {
          args: Prisma.CustomReportConfigGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CustomReportConfigGroupByOutputType>[]
        }
        count: {
          args: Prisma.CustomReportConfigCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CustomReportConfigCountAggregateOutputType> | number
        }
      }
    }
    User: {
      payload: Prisma.$UserPayload<ExtArgs>
      fields: Prisma.UserFieldRefs
      operations: {
        findUnique: {
          args: Prisma.UserFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        findFirst: {
          args: Prisma.UserFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        findMany: {
          args: Prisma.UserFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        create: {
          args: Prisma.UserCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        createMany: {
          args: Prisma.UserCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        delete: {
          args: Prisma.UserDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        update: {
          args: Prisma.UserUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        deleteMany: {
          args: Prisma.UserDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.UserUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        upsert: {
          args: Prisma.UserUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        aggregate: {
          args: Prisma.UserAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateUser>
        }
        groupBy: {
          args: Prisma.UserGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[]
        }
        count: {
          args: Prisma.UserCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number
        }
      }
    }
    RefreshToken: {
      payload: Prisma.$RefreshTokenPayload<ExtArgs>
      fields: Prisma.RefreshTokenFieldRefs
      operations: {
        findUnique: {
          args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        findFirst: {
          args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        findMany: {
          args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
        }
        create: {
          args: Prisma.RefreshTokenCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        createMany: {
          args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
        }
        delete: {
          args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        update: {
          args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        deleteMany: {
          args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
        }
        upsert: {
          args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
        }
        aggregate: {
          args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>
        }
        groupBy: {
          args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[]
        }
        count: {
          args: Prisma.RefreshTokenCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number
        }
      }
    }
    Permission: {
      payload: Prisma.$PermissionPayload<ExtArgs>
      fields: Prisma.PermissionFieldRefs
      operations: {
        findUnique: {
          args: Prisma.PermissionFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>
        }
        findFirst: {
          args: Prisma.PermissionFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>
        }
        findMany: {
          args: Prisma.PermissionFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[]
        }
        create: {
          args: Prisma.PermissionCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>
        }
        createMany: {
          args: Prisma.PermissionCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[]
        }
        delete: {
          args: Prisma.PermissionDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>
        }
        update: {
          args: Prisma.PermissionUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>
        }
        deleteMany: {
          args: Prisma.PermissionDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.PermissionUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[]
        }
        upsert: {
          args: Prisma.PermissionUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>
        }
        aggregate: {
          args: Prisma.PermissionAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregatePermission>
        }
        groupBy: {
          args: Prisma.PermissionGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PermissionGroupByOutputType>[]
        }
        count: {
          args: Prisma.PermissionCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PermissionCountAggregateOutputType> | number
        }
      }
    }
    SystemUptimeRecord: {
      payload: Prisma.$SystemUptimeRecordPayload<ExtArgs>
      fields: Prisma.SystemUptimeRecordFieldRefs
      operations: {
        findUnique: {
          args: Prisma.SystemUptimeRecordFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.SystemUptimeRecordFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>
        }
        findFirst: {
          args: Prisma.SystemUptimeRecordFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.SystemUptimeRecordFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>
        }
        findMany: {
          args: Prisma.SystemUptimeRecordFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>[]
        }
        create: {
          args: Prisma.SystemUptimeRecordCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>
        }
        createMany: {
          args: Prisma.SystemUptimeRecordCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.SystemUptimeRecordCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>[]
        }
        delete: {
          args: Prisma.SystemUptimeRecordDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>
        }
        update: {
          args: Prisma.SystemUptimeRecordUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>
        }
        deleteMany: {
          args: Prisma.SystemUptimeRecordDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.SystemUptimeRecordUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.SystemUptimeRecordUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>[]
        }
        upsert: {
          args: Prisma.SystemUptimeRecordUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemUptimeRecordPayload>
        }
        aggregate: {
          args: Prisma.SystemUptimeRecordAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateSystemUptimeRecord>
        }
        groupBy: {
          args: Prisma.SystemUptimeRecordGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SystemUptimeRecordGroupByOutputType>[]
        }
        count: {
          args: Prisma.SystemUptimeRecordCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SystemUptimeRecordCountAggregateOutputType> | number
        }
      }
    }
    AuditLog: {
      payload: Prisma.$AuditLogPayload<ExtArgs>
      fields: Prisma.AuditLogFieldRefs
      operations: {
        findUnique: {
          args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>
        }
        findFirst: {
          args: Prisma.AuditLogFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>
        }
        findMany: {
          args: Prisma.AuditLogFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
        }
        create: {
          args: Prisma.AuditLogCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>
        }
        createMany: {
          args: Prisma.AuditLogCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
        }
        delete: {
          args: Prisma.AuditLogDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>
        }
        update: {
          args: Prisma.AuditLogUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>
        }
        deleteMany: {
          args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
        }
        upsert: {
          args: Prisma.AuditLogUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>
        }
        aggregate: {
          args: Prisma.AuditLogAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>
        }
        groupBy: {
          args: Prisma.AuditLogGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[]
        }
        count: {
          args: Prisma.AuditLogCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number
        }
      }
    }
    SalesOrder: {
      payload: Prisma.$SalesOrderPayload<ExtArgs>
      fields: Prisma.SalesOrderFieldRefs
      operations: {
        findUnique: {
          args: Prisma.SalesOrderFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.SalesOrderFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>
        }
        findFirst: {
          args: Prisma.SalesOrderFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.SalesOrderFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>
        }
        findMany: {
          args: Prisma.SalesOrderFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
        }
        create: {
          args: Prisma.SalesOrderCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>
        }
        createMany: {
          args: Prisma.SalesOrderCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.SalesOrderCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
        }
        delete: {
          args: Prisma.SalesOrderDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>
        }
        update: {
          args: Prisma.SalesOrderUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>
        }
        deleteMany: {
          args: Prisma.SalesOrderDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.SalesOrderUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.SalesOrderUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
        }
        upsert: {
          args: Prisma.SalesOrderUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesOrderPayload>
        }
        aggregate: {
          args: Prisma.SalesOrderAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateSalesOrder>
        }
        groupBy: {
          args: Prisma.SalesOrderGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SalesOrderGroupByOutputType>[]
        }
        count: {
          args: Prisma.SalesOrderCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SalesOrderCountAggregateOutputType> | number
        }
      }
    }
    OrderItem: {
      payload: Prisma.$OrderItemPayload<ExtArgs>
      fields: Prisma.OrderItemFieldRefs
      operations: {
        findUnique: {
          args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>
        }
        findFirst: {
          args: Prisma.OrderItemFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>
        }
        findMany: {
          args: Prisma.OrderItemFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
        }
        create: {
          args: Prisma.OrderItemCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>
        }
        createMany: {
          args: Prisma.OrderItemCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
        }
        delete: {
          args: Prisma.OrderItemDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>
        }
        update: {
          args: Prisma.OrderItemUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>
        }
        deleteMany: {
          args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
        }
        upsert: {
          args: Prisma.OrderItemUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>
        }
        aggregate: {
          args: Prisma.OrderItemAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>
        }
        groupBy: {
          args: Prisma.OrderItemGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[]
        }
        count: {
          args: Prisma.OrderItemCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number
        }
      }
    }
    Price: {
      payload: Prisma.$PricePayload<ExtArgs>
      fields: Prisma.PriceFieldRefs
      operations: {
        findUnique: {
          args: Prisma.PriceFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>
        }
        findFirst: {
          args: Prisma.PriceFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>
        }
        findMany: {
          args: Prisma.PriceFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>[]
        }
        create: {
          args: Prisma.PriceCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>
        }
        createMany: {
          args: Prisma.PriceCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>[]
        }
        delete: {
          args: Prisma.PriceDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>
        }
        update: {
          args: Prisma.PriceUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>
        }
        deleteMany: {
          args: Prisma.PriceDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.PriceUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.PriceUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>[]
        }
        upsert: {
          args: Prisma.PriceUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PricePayload>
        }
        aggregate: {
          args: Prisma.PriceAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregatePrice>
        }
        groupBy: {
          args: Prisma.PriceGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PriceGroupByOutputType>[]
        }
        count: {
          args: Prisma.PriceCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PriceCountAggregateOutputType> | number
        }
      }
    }
    Invoice: {
      payload: Prisma.$InvoicePayload<ExtArgs>
      fields: Prisma.InvoiceFieldRefs
      operations: {
        findUnique: {
          args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>
        }
        findFirst: {
          args: Prisma.InvoiceFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>
        }
        findMany: {
          args: Prisma.InvoiceFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[]
        }
        create: {
          args: Prisma.InvoiceCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>
        }
        createMany: {
          args: Prisma.InvoiceCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[]
        }
        delete: {
          args: Prisma.InvoiceDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>
        }
        update: {
          args: Prisma.InvoiceUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>
        }
        deleteMany: {
          args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[]
        }
        upsert: {
          args: Prisma.InvoiceUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>
        }
        aggregate: {
          args: Prisma.InvoiceAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateInvoice>
        }
        groupBy: {
          args: Prisma.InvoiceGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.InvoiceGroupByOutputType>[]
        }
        count: {
          args: Prisma.InvoiceCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.InvoiceCountAggregateOutputType> | number
        }
      }
    }
    InventoryItem: {
      payload: Prisma.$InventoryItemPayload<ExtArgs>
      fields: Prisma.InventoryItemFieldRefs
      operations: {
        findUnique: {
          args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>
        }
        findFirst: {
          args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>
        }
        findMany: {
          args: Prisma.InventoryItemFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
        }
        create: {
          args: Prisma.InventoryItemCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>
        }
        createMany: {
          args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
        }
        delete: {
          args: Prisma.InventoryItemDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>
        }
        update: {
          args: Prisma.InventoryItemUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>
        }
        deleteMany: {
          args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
        }
        upsert: {
          args: Prisma.InventoryItemUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InventoryItemPayload>
        }
        aggregate: {
          args: Prisma.InventoryItemAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateInventoryItem>
        }
        groupBy: {
          args: Prisma.InventoryItemGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.InventoryItemGroupByOutputType>[]
        }
        count: {
          args: Prisma.InventoryItemCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.InventoryItemCountAggregateOutputType> | number
        }
      }
    }
    Item: {
      payload: Prisma.$ItemPayload<ExtArgs>
      fields: Prisma.ItemFieldRefs
      operations: {
        findUnique: {
          args: Prisma.ItemFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>
        }
        findFirst: {
          args: Prisma.ItemFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>
        }
        findMany: {
          args: Prisma.ItemFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>[]
        }
        create: {
          args: Prisma.ItemCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>
        }
        createMany: {
          args: Prisma.ItemCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>[]
        }
        delete: {
          args: Prisma.ItemDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>
        }
        update: {
          args: Prisma.ItemUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>
        }
        deleteMany: {
          args: Prisma.ItemDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.ItemUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>[]
        }
        upsert: {
          args: Prisma.ItemUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ItemPayload>
        }
        aggregate: {
          args: Prisma.ItemAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateItem>
        }
        groupBy: {
          args: Prisma.ItemGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ItemGroupByOutputType>[]
        }
        count: {
          args: Prisma.ItemCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ItemCountAggregateOutputType> | number
        }
      }
    }
    Workstation: {
      payload: Prisma.$WorkstationPayload<ExtArgs>
      fields: Prisma.WorkstationFieldRefs
      operations: {
        findUnique: {
          args: Prisma.WorkstationFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.WorkstationFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>
        }
        findFirst: {
          args: Prisma.WorkstationFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.WorkstationFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>
        }
        findMany: {
          args: Prisma.WorkstationFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>[]
        }
        create: {
          args: Prisma.WorkstationCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>
        }
        createMany: {
          args: Prisma.WorkstationCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.WorkstationCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>[]
        }
        delete: {
          args: Prisma.WorkstationDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>
        }
        update: {
          args: Prisma.WorkstationUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>
        }
        deleteMany: {
          args: Prisma.WorkstationDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.WorkstationUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.WorkstationUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>[]
        }
        upsert: {
          args: Prisma.WorkstationUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkstationPayload>
        }
        aggregate: {
          args: Prisma.WorkstationAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateWorkstation>
        }
        groupBy: {
          args: Prisma.WorkstationGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WorkstationGroupByOutputType>[]
        }
        count: {
          args: Prisma.WorkstationCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WorkstationCountAggregateOutputType> | number
        }
      }
    }
    Operation: {
      payload: Prisma.$OperationPayload<ExtArgs>
      fields: Prisma.OperationFieldRefs
      operations: {
        findUnique: {
          args: Prisma.OperationFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>
        }
        findFirst: {
          args: Prisma.OperationFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>
        }
        findMany: {
          args: Prisma.OperationFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[]
        }
        create: {
          args: Prisma.OperationCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>
        }
        createMany: {
          args: Prisma.OperationCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[]
        }
        delete: {
          args: Prisma.OperationDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>
        }
        update: {
          args: Prisma.OperationUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>
        }
        deleteMany: {
          args: Prisma.OperationDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.OperationUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[]
        }
        upsert: {
          args: Prisma.OperationUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>
        }
        aggregate: {
          args: Prisma.OperationAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateOperation>
        }
        groupBy: {
          args: Prisma.OperationGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.OperationGroupByOutputType>[]
        }
        count: {
          args: Prisma.OperationCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.OperationCountAggregateOutputType> | number
        }
      }
    }
    BillOfMaterials: {
      payload: Prisma.$BillOfMaterialsPayload<ExtArgs>
      fields: Prisma.BillOfMaterialsFieldRefs
      operations: {
        findUnique: {
          args: Prisma.BillOfMaterialsFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.BillOfMaterialsFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>
        }
        findFirst: {
          args: Prisma.BillOfMaterialsFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.BillOfMaterialsFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>
        }
        findMany: {
          args: Prisma.BillOfMaterialsFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>[]
        }
        create: {
          args: Prisma.BillOfMaterialsCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>
        }
        createMany: {
          args: Prisma.BillOfMaterialsCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.BillOfMaterialsCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>[]
        }
        delete: {
          args: Prisma.BillOfMaterialsDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>
        }
        update: {
          args: Prisma.BillOfMaterialsUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>
        }
        deleteMany: {
          args: Prisma.BillOfMaterialsDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.BillOfMaterialsUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.BillOfMaterialsUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>[]
        }
        upsert: {
          args: Prisma.BillOfMaterialsUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BillOfMaterialsPayload>
        }
        aggregate: {
          args: Prisma.BillOfMaterialsAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateBillOfMaterials>
        }
        groupBy: {
          args: Prisma.BillOfMaterialsGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.BillOfMaterialsGroupByOutputType>[]
        }
        count: {
          args: Prisma.BillOfMaterialsCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.BillOfMaterialsCountAggregateOutputType> | number
        }
      }
    }
    WorkOrder: {
      payload: Prisma.$WorkOrderPayload<ExtArgs>
      fields: Prisma.WorkOrderFieldRefs
      operations: {
        findUnique: {
          args: Prisma.WorkOrderFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.WorkOrderFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>
        }
        findFirst: {
          args: Prisma.WorkOrderFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.WorkOrderFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>
        }
        findMany: {
          args: Prisma.WorkOrderFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
        }
        create: {
          args: Prisma.WorkOrderCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>
        }
        createMany: {
          args: Prisma.WorkOrderCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.WorkOrderCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
        }
        delete: {
          args: Prisma.WorkOrderDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>
        }
        update: {
          args: Prisma.WorkOrderUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>
        }
        deleteMany: {
          args: Prisma.WorkOrderDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.WorkOrderUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.WorkOrderUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
        }
        upsert: {
          args: Prisma.WorkOrderUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkOrderPayload>
        }
        aggregate: {
          args: Prisma.WorkOrderAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateWorkOrder>
        }
        groupBy: {
          args: Prisma.WorkOrderGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WorkOrderGroupByOutputType>[]
        }
        count: {
          args: Prisma.WorkOrderCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WorkOrderCountAggregateOutputType> | number
        }
      }
    }
    Subscription: {
      payload: Prisma.$SubscriptionPayload<ExtArgs>
      fields: Prisma.SubscriptionFieldRefs
      operations: {
        findUnique: {
          args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>
        }
        findFirst: {
          args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>
        }
        findMany: {
          args: Prisma.SubscriptionFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
        }
        create: {
          args: Prisma.SubscriptionCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>
        }
        createMany: {
          args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
        }
        delete: {
          args: Prisma.SubscriptionDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>
        }
        update: {
          args: Prisma.SubscriptionUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>
        }
        deleteMany: {
          args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
        }
        upsert: {
          args: Prisma.SubscriptionUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>
        }
        aggregate: {
          args: Prisma.SubscriptionAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>
        }
        groupBy: {
          args: Prisma.SubscriptionGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[]
        }
        count: {
          args: Prisma.SubscriptionCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number
        }
      }
    }
    PaymentLog: {
      payload: Prisma.$PaymentLogPayload<ExtArgs>
      fields: Prisma.PaymentLogFieldRefs
      operations: {
        findUnique: {
          args: Prisma.PaymentLogFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.PaymentLogFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>
        }
        findFirst: {
          args: Prisma.PaymentLogFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.PaymentLogFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>
        }
        findMany: {
          args: Prisma.PaymentLogFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>[]
        }
        create: {
          args: Prisma.PaymentLogCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>
        }
        createMany: {
          args: Prisma.PaymentLogCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.PaymentLogCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>[]
        }
        delete: {
          args: Prisma.PaymentLogDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>
        }
        update: {
          args: Prisma.PaymentLogUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>
        }
        deleteMany: {
          args: Prisma.PaymentLogDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.PaymentLogUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.PaymentLogUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>[]
        }
        upsert: {
          args: Prisma.PaymentLogUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentLogPayload>
        }
        aggregate: {
          args: Prisma.PaymentLogAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregatePaymentLog>
        }
        groupBy: {
          args: Prisma.PaymentLogGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PaymentLogGroupByOutputType>[]
        }
        count: {
          args: Prisma.PaymentLogCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PaymentLogCountAggregateOutputType> | number
        }
      }
    }
    TenantSubscription: {
      payload: Prisma.$TenantSubscriptionPayload<ExtArgs>
      fields: Prisma.TenantSubscriptionFieldRefs
      operations: {
        findUnique: {
          args: Prisma.TenantSubscriptionFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.TenantSubscriptionFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>
        }
        findFirst: {
          args: Prisma.TenantSubscriptionFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.TenantSubscriptionFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>
        }
        findMany: {
          args: Prisma.TenantSubscriptionFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>[]
        }
        create: {
          args: Prisma.TenantSubscriptionCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>
        }
        createMany: {
          args: Prisma.TenantSubscriptionCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.TenantSubscriptionCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>[]
        }
        delete: {
          args: Prisma.TenantSubscriptionDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>
        }
        update: {
          args: Prisma.TenantSubscriptionUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>
        }
        deleteMany: {
          args: Prisma.TenantSubscriptionDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.TenantSubscriptionUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.TenantSubscriptionUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>[]
        }
        upsert: {
          args: Prisma.TenantSubscriptionUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantSubscriptionPayload>
        }
        aggregate: {
          args: Prisma.TenantSubscriptionAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateTenantSubscription>
        }
        groupBy: {
          args: Prisma.TenantSubscriptionGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.TenantSubscriptionGroupByOutputType>[]
        }
        count: {
          args: Prisma.TenantSubscriptionCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.TenantSubscriptionCountAggregateOutputType> | number
        }
      }
    }
    CustomerTransaction: {
      payload: Prisma.$CustomerTransactionPayload<ExtArgs>
      fields: Prisma.CustomerTransactionFieldRefs
      operations: {
        findUnique: {
          args: Prisma.CustomerTransactionFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.CustomerTransactionFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
        }
        findFirst: {
          args: Prisma.CustomerTransactionFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.CustomerTransactionFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
        }
        findMany: {
          args: Prisma.CustomerTransactionFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>[]
        }
        create: {
          args: Prisma.CustomerTransactionCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
        }
        createMany: {
          args: Prisma.CustomerTransactionCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.CustomerTransactionCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>[]
        }
        delete: {
          args: Prisma.CustomerTransactionDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
        }
        update: {
          args: Prisma.CustomerTransactionUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
        }
        deleteMany: {
          args: Prisma.CustomerTransactionDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.CustomerTransactionUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.CustomerTransactionUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>[]
        }
        upsert: {
          args: Prisma.CustomerTransactionUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTransactionPayload>
        }
        aggregate: {
          args: Prisma.CustomerTransactionAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerTransaction>
        }
        groupBy: {
          args: Prisma.CustomerTransactionGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CustomerTransactionGroupByOutputType>[]
        }
        count: {
          args: Prisma.CustomerTransactionCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CustomerTransactionCountAggregateOutputType> | number
        }
      }
    }
    Vendor: {
      payload: Prisma.$VendorPayload<ExtArgs>
      fields: Prisma.VendorFieldRefs
      operations: {
        findUnique: {
          args: Prisma.VendorFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>
        }
        findFirst: {
          args: Prisma.VendorFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>
        }
        findMany: {
          args: Prisma.VendorFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>[]
        }
        create: {
          args: Prisma.VendorCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>
        }
        createMany: {
          args: Prisma.VendorCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>[]
        }
        delete: {
          args: Prisma.VendorDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>
        }
        update: {
          args: Prisma.VendorUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>
        }
        deleteMany: {
          args: Prisma.VendorDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.VendorUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>[]
        }
        upsert: {
          args: Prisma.VendorUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>
        }
        aggregate: {
          args: Prisma.VendorAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateVendor>
        }
        groupBy: {
          args: Prisma.VendorGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.VendorGroupByOutputType>[]
        }
        count: {
          args: Prisma.VendorCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.VendorCountAggregateOutputType> | number
        }
      }
    }
    RequestForQuote: {
      payload: Prisma.$RequestForQuotePayload<ExtArgs>
      fields: Prisma.RequestForQuoteFieldRefs
      operations: {
        findUnique: {
          args: Prisma.RequestForQuoteFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.RequestForQuoteFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>
        }
        findFirst: {
          args: Prisma.RequestForQuoteFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.RequestForQuoteFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>
        }
        findMany: {
          args: Prisma.RequestForQuoteFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>[]
        }
        create: {
          args: Prisma.RequestForQuoteCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>
        }
        createMany: {
          args: Prisma.RequestForQuoteCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.RequestForQuoteCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>[]
        }
        delete: {
          args: Prisma.RequestForQuoteDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>
        }
        update: {
          args: Prisma.RequestForQuoteUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>
        }
        deleteMany: {
          args: Prisma.RequestForQuoteDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.RequestForQuoteUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.RequestForQuoteUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>[]
        }
        upsert: {
          args: Prisma.RequestForQuoteUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RequestForQuotePayload>
        }
        aggregate: {
          args: Prisma.RequestForQuoteAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRequestForQuote>
        }
        groupBy: {
          args: Prisma.RequestForQuoteGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RequestForQuoteGroupByOutputType>[]
        }
        count: {
          args: Prisma.RequestForQuoteCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RequestForQuoteCountAggregateOutputType> | number
        }
      }
    }
    PurchaseOrder: {
      payload: Prisma.$PurchaseOrderPayload<ExtArgs>
      fields: Prisma.PurchaseOrderFieldRefs
      operations: {
        findUnique: {
          args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
        }
        findFirst: {
          args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
        }
        findMany: {
          args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
        }
        create: {
          args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
        }
        createMany: {
          args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
        }
        delete: {
          args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
        }
        update: {
          args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
        }
        deleteMany: {
          args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
        }
        upsert: {
          args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
        }
        aggregate: {
          args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregatePurchaseOrder>
        }
        groupBy: {
          args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PurchaseOrderGroupByOutputType>[]
        }
        count: {
          args: Prisma.PurchaseOrderCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PurchaseOrderCountAggregateOutputType> | number
        }
      }
    }
    Role: {
      payload: Prisma.$RolePayload<ExtArgs>
      fields: Prisma.RoleFieldRefs
      operations: {
        findUnique: {
          args: Prisma.RoleFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>
        }
        findFirst: {
          args: Prisma.RoleFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>
        }
        findMany: {
          args: Prisma.RoleFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[]
        }
        create: {
          args: Prisma.RoleCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>
        }
        createMany: {
          args: Prisma.RoleCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[]
        }
        delete: {
          args: Prisma.RoleDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>
        }
        update: {
          args: Prisma.RoleUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>
        }
        deleteMany: {
          args: Prisma.RoleDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.RoleUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[]
        }
        upsert: {
          args: Prisma.RoleUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>
        }
        aggregate: {
          args: Prisma.RoleAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRole>
        }
        groupBy: {
          args: Prisma.RoleGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[]
        }
        count: {
          args: Prisma.RoleCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number
        }
      }
    }
    UserRole: {
      payload: Prisma.$UserRolePayload<ExtArgs>
      fields: Prisma.UserRoleFieldRefs
      operations: {
        findUnique: {
          args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>
        }
        findFirst: {
          args: Prisma.UserRoleFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>
        }
        findMany: {
          args: Prisma.UserRoleFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>[]
        }
        create: {
          args: Prisma.UserRoleCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>
        }
        createMany: {
          args: Prisma.UserRoleCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>[]
        }
        delete: {
          args: Prisma.UserRoleDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>
        }
        update: {
          args: Prisma.UserRoleUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>
        }
        deleteMany: {
          args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>[]
        }
        upsert: {
          args: Prisma.UserRoleUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>
        }
        aggregate: {
          args: Prisma.UserRoleAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateUserRole>
        }
        groupBy: {
          args: Prisma.UserRoleGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserRoleGroupByOutputType>[]
        }
        count: {
          args: Prisma.UserRoleCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserRoleCountAggregateOutputType> | number
        }
      }
    }
    RolePermission: {
      payload: Prisma.$RolePermissionPayload<ExtArgs>
      fields: Prisma.RolePermissionFieldRefs
      operations: {
        findUnique: {
          args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>
        }
        findFirst: {
          args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>
        }
        findMany: {
          args: Prisma.RolePermissionFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
        }
        create: {
          args: Prisma.RolePermissionCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>
        }
        createMany: {
          args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
        }
        delete: {
          args: Prisma.RolePermissionDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>
        }
        update: {
          args: Prisma.RolePermissionUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>
        }
        deleteMany: {
          args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
        }
        upsert: {
          args: Prisma.RolePermissionUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>
        }
        aggregate: {
          args: Prisma.RolePermissionAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRolePermission>
        }
        groupBy: {
          args: Prisma.RolePermissionGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RolePermissionGroupByOutputType>[]
        }
        count: {
          args: Prisma.RolePermissionCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RolePermissionCountAggregateOutputType> | number
        }
      }
    }
    Tenant: {
      payload: Prisma.$TenantPayload<ExtArgs>
      fields: Prisma.TenantFieldRefs
      operations: {
        findUnique: {
          args: Prisma.TenantFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>
        }
        findFirst: {
          args: Prisma.TenantFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>
        }
        findMany: {
          args: Prisma.TenantFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[]
        }
        create: {
          args: Prisma.TenantCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>
        }
        createMany: {
          args: Prisma.TenantCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[]
        }
        delete: {
          args: Prisma.TenantDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>
        }
        update: {
          args: Prisma.TenantUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>
        }
        deleteMany: {
          args: Prisma.TenantDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.TenantUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[]
        }
        upsert: {
          args: Prisma.TenantUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>
        }
        aggregate: {
          args: Prisma.TenantAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateTenant>
        }
        groupBy: {
          args: Prisma.TenantGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.TenantGroupByOutputType>[]
        }
        count: {
          args: Prisma.TenantCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.TenantCountAggregateOutputType> | number
        }
      }
    }
    Branch: {
      payload: Prisma.$BranchPayload<ExtArgs>
      fields: Prisma.BranchFieldRefs
      operations: {
        findUnique: {
          args: Prisma.BranchFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>
        }
        findFirst: {
          args: Prisma.BranchFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>
        }
        findMany: {
          args: Prisma.BranchFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[]
        }
        create: {
          args: Prisma.BranchCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>
        }
        createMany: {
          args: Prisma.BranchCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[]
        }
        delete: {
          args: Prisma.BranchDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>
        }
        update: {
          args: Prisma.BranchUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>
        }
        deleteMany: {
          args: Prisma.BranchDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.BranchUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[]
        }
        upsert: {
          args: Prisma.BranchUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>
        }
        aggregate: {
          args: Prisma.BranchAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateBranch>
        }
        groupBy: {
          args: Prisma.BranchGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.BranchGroupByOutputType>[]
        }
        count: {
          args: Prisma.BranchCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.BranchCountAggregateOutputType> | number
        }
      }
    }
    FleetVehicle: {
      payload: Prisma.$FleetVehiclePayload<ExtArgs>
      fields: Prisma.FleetVehicleFieldRefs
      operations: {
        findUnique: {
          args: Prisma.FleetVehicleFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.FleetVehicleFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>
        }
        findFirst: {
          args: Prisma.FleetVehicleFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.FleetVehicleFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>
        }
        findMany: {
          args: Prisma.FleetVehicleFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>[]
        }
        create: {
          args: Prisma.FleetVehicleCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>
        }
        createMany: {
          args: Prisma.FleetVehicleCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.FleetVehicleCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>[]
        }
        delete: {
          args: Prisma.FleetVehicleDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>
        }
        update: {
          args: Prisma.FleetVehicleUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>
        }
        deleteMany: {
          args: Prisma.FleetVehicleDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.FleetVehicleUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.FleetVehicleUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>[]
        }
        upsert: {
          args: Prisma.FleetVehicleUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$FleetVehiclePayload>
        }
        aggregate: {
          args: Prisma.FleetVehicleAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateFleetVehicle>
        }
        groupBy: {
          args: Prisma.FleetVehicleGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.FleetVehicleGroupByOutputType>[]
        }
        count: {
          args: Prisma.FleetVehicleCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.FleetVehicleCountAggregateOutputType> | number
        }
      }
    }
    Shipment: {
      payload: Prisma.$ShipmentPayload<ExtArgs>
      fields: Prisma.ShipmentFieldRefs
      operations: {
        findUnique: {
          args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>
        }
        findFirst: {
          args: Prisma.ShipmentFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>
        }
        findMany: {
          args: Prisma.ShipmentFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
        }
        create: {
          args: Prisma.ShipmentCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>
        }
        createMany: {
          args: Prisma.ShipmentCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
        }
        delete: {
          args: Prisma.ShipmentDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>
        }
        update: {
          args: Prisma.ShipmentUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>
        }
        deleteMany: {
          args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
        }
        upsert: {
          args: Prisma.ShipmentUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentPayload>
        }
        aggregate: {
          args: Prisma.ShipmentAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateShipment>
        }
        groupBy: {
          args: Prisma.ShipmentGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ShipmentGroupByOutputType>[]
        }
        count: {
          args: Prisma.ShipmentCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ShipmentCountAggregateOutputType> | number
        }
      }
    }
    Warehouse: {
      payload: Prisma.$WarehousePayload<ExtArgs>
      fields: Prisma.WarehouseFieldRefs
      operations: {
        findUnique: {
          args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>
        }
        findFirst: {
          args: Prisma.WarehouseFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>
        }
        findMany: {
          args: Prisma.WarehouseFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>[]
        }
        create: {
          args: Prisma.WarehouseCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>
        }
        createMany: {
          args: Prisma.WarehouseCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>[]
        }
        delete: {
          args: Prisma.WarehouseDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>
        }
        update: {
          args: Prisma.WarehouseUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>
        }
        deleteMany: {
          args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.WarehouseUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>[]
        }
        upsert: {
          args: Prisma.WarehouseUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehousePayload>
        }
        aggregate: {
          args: Prisma.WarehouseAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateWarehouse>
        }
        groupBy: {
          args: Prisma.WarehouseGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WarehouseGroupByOutputType>[]
        }
        count: {
          args: Prisma.WarehouseCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WarehouseCountAggregateOutputType> | number
        }
      }
    }
    WarehouseZone: {
      payload: Prisma.$WarehouseZonePayload<ExtArgs>
      fields: Prisma.WarehouseZoneFieldRefs
      operations: {
        findUnique: {
          args: Prisma.WarehouseZoneFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.WarehouseZoneFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>
        }
        findFirst: {
          args: Prisma.WarehouseZoneFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.WarehouseZoneFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>
        }
        findMany: {
          args: Prisma.WarehouseZoneFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>[]
        }
        create: {
          args: Prisma.WarehouseZoneCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>
        }
        createMany: {
          args: Prisma.WarehouseZoneCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.WarehouseZoneCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>[]
        }
        delete: {
          args: Prisma.WarehouseZoneDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>
        }
        update: {
          args: Prisma.WarehouseZoneUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>
        }
        deleteMany: {
          args: Prisma.WarehouseZoneDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.WarehouseZoneUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.WarehouseZoneUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>[]
        }
        upsert: {
          args: Prisma.WarehouseZoneUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$WarehouseZonePayload>
        }
        aggregate: {
          args: Prisma.WarehouseZoneAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateWarehouseZone>
        }
        groupBy: {
          args: Prisma.WarehouseZoneGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WarehouseZoneGroupByOutputType>[]
        }
        count: {
          args: Prisma.WarehouseZoneCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.WarehouseZoneCountAggregateOutputType> | number
        }
      }
    }
  }
} & {
  other: {
    payload: any
    operations: {
      $executeRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
    }
  }
}



export const TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
} as const)

export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


export const SupplierPortalRecordScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  supplierName: 'supplierName',
  supplierEmail: 'supplierEmail',
  invoiceNo: 'invoiceNo',
  shippingStatus: 'shippingStatus',
  submittedAt: 'submittedAt'
} as const

export type SupplierPortalRecordScalarFieldEnum = (typeof SupplierPortalRecordScalarFieldEnum)[keyof typeof SupplierPortalRecordScalarFieldEnum]


export const ClientShipmentTrackingScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  trackingCode: 'trackingCode',
  clientName: 'clientName',
  clientEmail: 'clientEmail',
  currentLocation: 'currentLocation',
  status: 'status',
  estimatedDelivery: 'estimatedDelivery',
  updatedAt: 'updatedAt'
} as const

export type ClientShipmentTrackingScalarFieldEnum = (typeof ClientShipmentTrackingScalarFieldEnum)[keyof typeof ClientShipmentTrackingScalarFieldEnum]


export const ContractManufacturingOrderScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  factoryName: 'factoryName',
  productName: 'productName',
  quantity: 'quantity',
  status: 'status',
  dueDate: 'dueDate',
  createdAt: 'createdAt'
} as const

export type ContractManufacturingOrderScalarFieldEnum = (typeof ContractManufacturingOrderScalarFieldEnum)[keyof typeof ContractManufacturingOrderScalarFieldEnum]


export const DigitalFreightBiddingScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  routeCode: 'routeCode',
  truckType: 'truckType',
  offeredRate: 'offeredRate',
  carrierName: 'carrierName',
  status: 'status',
  createdAt: 'createdAt'
} as const

export type DigitalFreightBiddingScalarFieldEnum = (typeof DigitalFreightBiddingScalarFieldEnum)[keyof typeof DigitalFreightBiddingScalarFieldEnum]


export const EnterpriseAssetScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  assetName: 'assetName',
  serialNumber: 'serialNumber',
  category: 'category',
  purchaseCost: 'purchaseCost',
  salvageValue: 'salvageValue',
  usefulLifeYears: 'usefulLifeYears',
  purchaseDate: 'purchaseDate',
  status: 'status',
  lastMaintenance: 'lastMaintenance',
  nextMaintenance: 'nextMaintenance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type EnterpriseAssetScalarFieldEnum = (typeof EnterpriseAssetScalarFieldEnum)[keyof typeof EnterpriseAssetScalarFieldEnum]


export const SparePartScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  partName: 'partName',
  sku: 'sku',
  stockLevel: 'stockLevel',
  minThreshold: 'minThreshold',
  unitCost: 'unitCost',
  assetId: 'assetId'
} as const

export type SparePartScalarFieldEnum = (typeof SparePartScalarFieldEnum)[keyof typeof SparePartScalarFieldEnum]


export const AssetMaintenanceLogScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  assetId: 'assetId',
  description: 'description',
  cost: 'cost',
  performedAt: 'performedAt'
} as const

export type AssetMaintenanceLogScalarFieldEnum = (typeof AssetMaintenanceLogScalarFieldEnum)[keyof typeof AssetMaintenanceLogScalarFieldEnum]


export const FinancialLedgerScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  transactionNo: 'transactionNo',
  currency: 'currency',
  amount: 'amount',
  exchangeRate: 'exchangeRate',
  category: 'category',
  referenceId: 'referenceId',
  description: 'description',
  createdAt: 'createdAt'
} as const

export type FinancialLedgerScalarFieldEnum = (typeof FinancialLedgerScalarFieldEnum)[keyof typeof FinancialLedgerScalarFieldEnum]


export const LandedCostCalculationScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  productId: 'productId',
  baseProductCost: 'baseProductCost',
  freightCost: 'freightCost',
  customsDuty: 'customsDuty',
  insurance: 'insurance',
  tax: 'tax',
  totalLandedCost: 'totalLandedCost',
  createdAt: 'createdAt'
} as const

export type LandedCostCalculationScalarFieldEnum = (typeof LandedCostCalculationScalarFieldEnum)[keyof typeof LandedCostCalculationScalarFieldEnum]


export const InventoryTurnoverMetricScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  productSku: 'productSku',
  turnoverRatio: 'turnoverRatio',
  holdingCost: 'holdingCost',
  calculatedAt: 'calculatedAt'
} as const

export type InventoryTurnoverMetricScalarFieldEnum = (typeof InventoryTurnoverMetricScalarFieldEnum)[keyof typeof InventoryTurnoverMetricScalarFieldEnum]


export const OtifMetricScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  orderId: 'orderId',
  isOnTime: 'isOnTime',
  isFull: 'isFull',
  performanceDate: 'performanceDate'
} as const

export type OtifMetricScalarFieldEnum = (typeof OtifMetricScalarFieldEnum)[keyof typeof OtifMetricScalarFieldEnum]


export const SupplyChainBottleneckScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  processStage: 'processStage',
  delayHours: 'delayHours',
  severity: 'severity',
  detectedAt: 'detectedAt'
} as const

export type SupplyChainBottleneckScalarFieldEnum = (typeof SupplyChainBottleneckScalarFieldEnum)[keyof typeof SupplyChainBottleneckScalarFieldEnum]


export const CustomReportConfigScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  reportName: 'reportName',
  querySql: 'querySql',
  formatType: 'formatType',
  createdAt: 'createdAt'
} as const

export type CustomReportConfigScalarFieldEnum = (typeof CustomReportConfigScalarFieldEnum)[keyof typeof CustomReportConfigScalarFieldEnum]


export const UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  roleId: 'roleId',
  passwordHash: 'passwordHash',
  firstName: 'firstName',
  lastName: 'lastName',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tenantId: 'tenantId',
  resetToken: 'resetToken',
  resetTokenExpires: 'resetTokenExpires',
  isMfaEnabled: 'isMfaEnabled',
  mfaSecret: 'mfaSecret'
} as const

export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


export const RefreshTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  expiresAt: 'expiresAt',
  isRevoked: 'isRevoked',
  createdAt: 'createdAt',
  userId: 'userId',
  userAgent: 'userAgent',
  ipAddress: 'ipAddress',
  revoked: 'revoked'
} as const

export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


export const PermissionScalarFieldEnum = {
  id: 'id',
  action: 'action',
  resource: 'resource',
  description: 'description',
  createdAt: 'createdAt'
} as const

export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


export const SystemUptimeRecordScalarFieldEnum = {
  id: 'id',
  serviceName: 'serviceName',
  status: 'status',
  latencyMs: 'latencyMs',
  checkedAt: 'checkedAt'
} as const

export type SystemUptimeRecordScalarFieldEnum = (typeof SystemUptimeRecordScalarFieldEnum)[keyof typeof SystemUptimeRecordScalarFieldEnum]


export const AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  details: 'details',
  tenantId: 'tenantId',
  ipAddress: 'ipAddress',
  createdAt: 'createdAt'
} as const

export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


export const SalesOrderScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  orderNumber: 'orderNumber',
  channel: 'channel',
  customerName: 'customerName',
  totalAmount: 'totalAmount',
  isBackorder: 'isBackorder',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type SalesOrderScalarFieldEnum = (typeof SalesOrderScalarFieldEnum)[keyof typeof SalesOrderScalarFieldEnum]


export const OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productName: 'productName',
  quantity: 'quantity',
  priceId: 'priceId'
} as const

export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


export const PriceScalarFieldEnum = {
  id: 'id',
  productName: 'productName',
  amount: 'amount'
} as const

export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


export const InvoiceScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  invoiceNumber: 'invoiceNumber',
  orderId: 'orderId',
  taxAmount: 'taxAmount',
  discountAmount: 'discountAmount',
  netAmount: 'netAmount',
  createdAt: 'createdAt',
  subscription: 'subscription'
} as const

export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


export const InventoryItemScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  warehouseId: 'warehouseId',
  zoneId: 'zoneId',
  sku: 'sku',
  name: 'name',
  stockCount: 'stockCount',
  safetyStock: 'safetyStock',
  reorderPoint: 'reorderPoint',
  batchNumber: 'batchNumber',
  serialNumber: 'serialNumber',
  expiryDate: 'expiryDate',
  qrCode: 'qrCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


export const ItemScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  itemCode: 'itemCode',
  itemName: 'itemName',
  itemGroup: 'itemGroup',
  uom: 'uom',
  standardRate: 'standardRate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


export const WorkstationScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  workstationName: 'workstationName',
  hourRate: 'hourRate',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type WorkstationScalarFieldEnum = (typeof WorkstationScalarFieldEnum)[keyof typeof WorkstationScalarFieldEnum]


export const OperationScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  operationName: 'operationName',
  workstationId: 'workstationId',
  timeInMinutes: 'timeInMinutes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


export const BillOfMaterialsScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  itemId: 'itemId',
  productName: 'productName',
  rawMaterials: 'rawMaterials',
  operations: 'operations',
  version: 'version',
  isActive: 'isActive',
  isDefault: 'isDefault',
  totalCost: 'totalCost',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type BillOfMaterialsScalarFieldEnum = (typeof BillOfMaterialsScalarFieldEnum)[keyof typeof BillOfMaterialsScalarFieldEnum]


export const WorkOrderScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  orderNumber: 'orderNumber',
  bomId: 'bomId',
  quantity: 'quantity',
  producedQty: 'producedQty',
  status: 'status',
  assignedLine: 'assignedLine',
  plannedStartDate: 'plannedStartDate',
  plannedEndDate: 'plannedEndDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type WorkOrderScalarFieldEnum = (typeof WorkOrderScalarFieldEnum)[keyof typeof WorkOrderScalarFieldEnum]


export const SubscriptionScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  stripeCustomerId: 'stripeCustomerId',
  stripeSubId: 'stripeSubId',
  status: 'status',
  planType: 'planType',
  currentPeriodEnd: 'currentPeriodEnd',
  userCount: 'userCount',
  licenseCost: 'licenseCost',
  setupFee: 'setupFee',
  trainingFee: 'trainingFee',
  customModuleFee: 'customModuleFee',
  paymentRef: 'paymentRef',
  customerName: 'customerName',
  role: 'role',
  permissions: 'permissions',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


export const PaymentLogScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  stripeSessionId: 'stripeSessionId',
  amount: 'amount',
  currency: 'currency',
  status: 'status',
  invoiceUrl: 'invoiceUrl',
  createdAt: 'createdAt'
} as const

export type PaymentLogScalarFieldEnum = (typeof PaymentLogScalarFieldEnum)[keyof typeof PaymentLogScalarFieldEnum]


export const TenantSubscriptionScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  planType: 'planType',
  status: 'status',
  userCount: 'userCount',
  currentPeriodEnd: 'currentPeriodEnd'
} as const

export type TenantSubscriptionScalarFieldEnum = (typeof TenantSubscriptionScalarFieldEnum)[keyof typeof TenantSubscriptionScalarFieldEnum]


export const CustomerTransactionScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  customerEmail: 'customerEmail',
  amount: 'amount',
  status: 'status',
  gatewayReference: 'gatewayReference',
  createdAt: 'createdAt'
} as const

export type CustomerTransactionScalarFieldEnum = (typeof CustomerTransactionScalarFieldEnum)[keyof typeof CustomerTransactionScalarFieldEnum]


export const VendorScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  name: 'name',
  email: 'email',
  phoneNumber: 'phoneNumber',
  rating: 'rating',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


export const RequestForQuoteScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  vendorId: 'vendorId',
  itemDetails: 'itemDetails',
  targetPrice: 'targetPrice',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type RequestForQuoteScalarFieldEnum = (typeof RequestForQuoteScalarFieldEnum)[keyof typeof RequestForQuoteScalarFieldEnum]


export const PurchaseOrderScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  poNumber: 'poNumber',
  vendorId: 'vendorId',
  totalAmount: 'totalAmount',
  status: 'status',
  invoiceMatch: 'invoiceMatch',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


export const RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tenantId: 'tenantId'
} as const

export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


export const UserRoleScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roleId: 'roleId',
  assignedAt: 'assignedAt'
} as const

export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


export const RolePermissionScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  permissionId: 'permissionId',
  assignedAt: 'assignedAt'
} as const

export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


export const TenantScalarFieldEnum = {
  id: 'id',
  companyName: 'companyName',
  slug: 'slug',
  isActive: 'isActive',
  industry: 'industry',
  size: 'size',
  address: 'address',
  contactEmail: 'contactEmail',
  phone: 'phone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  allowedIps: 'allowedIps',
  stripeSecretKey: 'stripeSecretKey',
  stripeWebhookSecret: 'stripeWebhookSecret'
} as const

export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


export const BranchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  location: 'location',
  isMain: 'isMain',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


export const FleetVehicleScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  vehicleNumber: 'vehicleNumber',
  driverName: 'driverName',
  phoneNumber: 'phoneNumber',
  capacityKg: 'capacityKg',
  currentLat: 'currentLat',
  currentLng: 'currentLng',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type FleetVehicleScalarFieldEnum = (typeof FleetVehicleScalarFieldEnum)[keyof typeof FleetVehicleScalarFieldEnum]


export const ShipmentScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  trackingNumber: 'trackingNumber',
  vehicleId: 'vehicleId',
  origin: 'origin',
  destination: 'destination',
  freightCost: 'freightCost',
  status: 'status',
  eBOLDocumentUrl: 'eBOLDocumentUrl',
  podOtp: 'podOtp',
  deliveredAt: 'deliveredAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


export const WarehouseScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  name: 'name',
  location: 'location',
  capacity3D: 'capacity3D',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


export const WarehouseZoneScalarFieldEnum = {
  id: 'id',
  warehouseId: 'warehouseId',
  tenantId: 'tenantId',
  zoneName: 'zoneName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type WarehouseZoneScalarFieldEnum = (typeof WarehouseZoneScalarFieldEnum)[keyof typeof WarehouseZoneScalarFieldEnum]


export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
} as const

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export const JsonNullValueInput = {
  JsonNull: JsonNull
} as const

export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


export const NullableJsonNullValueInput = {
  DbNull: DbNull,
  JsonNull: JsonNull
} as const

export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


export const QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
} as const

export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


export const NullsOrder = {
  first: 'first',
  last: 'last'
} as const

export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


export const JsonNullValueFilter = {
  DbNull: DbNull,
  JsonNull: JsonNull,
  AnyNull: AnyNull
} as const

export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]







export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    



export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    



export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    



export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    



export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    



export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    



export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    



export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    



export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    



export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    



export type EnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus'>
    



export type ListEnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus[]'>
    



export type EnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType'>
    



export type ListEnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType[]'>
    



export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    



export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    



export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    



export type EnumSalesChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalesChannel'>
    



export type ListEnumSalesChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalesChannel[]'>
    



export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    



export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    



export type EnumWorkOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkOrderStatus'>
    



export type ListEnumWorkOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkOrderStatus[]'>
    



export type EnumRfqStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RfqStatus'>
    



export type ListEnumRfqStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RfqStatus[]'>
    



export type EnumPoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoStatus'>
    



export type ListEnumPoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoStatus[]'>
    



export type EnumEnterpriseRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnterpriseRole'>
    



export type ListEnumEnterpriseRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnterpriseRole[]'>
    



export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    



export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


export type BatchPayload = {
  count: number
}

export const defineExtension = runtime.Extensions.defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>
export type DefaultPrismaClient = PrismaClient
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
export type PrismaClientOptions = ({
  
  adapter: runtime.SqlDriverAdapterFactory
  accelerateUrl?: never
} | {
  
  accelerateUrl: string
  adapter?: never
}) & {
  
  errorFormat?: ErrorFormat
  
  log?: (LogLevel | LogDefinition)[]
  
  transactionOptions?: {
    maxWait?: number
    timeout?: number
    isolationLevel?: TransactionIsolationLevel
  }
  
  omit?: GlobalOmitConfig
  
  comments?: runtime.SqlCommenterPlugin[]
  
  queryPlanCacheMaxSize?: number
}
export type GlobalOmitConfig = {
  supplierPortalRecord?: Prisma.SupplierPortalRecordOmit
  clientShipmentTracking?: Prisma.ClientShipmentTrackingOmit
  contractManufacturingOrder?: Prisma.ContractManufacturingOrderOmit
  digitalFreightBidding?: Prisma.DigitalFreightBiddingOmit
  enterpriseAsset?: Prisma.EnterpriseAssetOmit
  sparePart?: Prisma.SparePartOmit
  assetMaintenanceLog?: Prisma.AssetMaintenanceLogOmit
  financialLedger?: Prisma.FinancialLedgerOmit
  landedCostCalculation?: Prisma.LandedCostCalculationOmit
  inventoryTurnoverMetric?: Prisma.InventoryTurnoverMetricOmit
  otifMetric?: Prisma.OtifMetricOmit
  supplyChainBottleneck?: Prisma.SupplyChainBottleneckOmit
  customReportConfig?: Prisma.CustomReportConfigOmit
  user?: Prisma.UserOmit
  refreshToken?: Prisma.RefreshTokenOmit
  permission?: Prisma.PermissionOmit
  systemUptimeRecord?: Prisma.SystemUptimeRecordOmit
  auditLog?: Prisma.AuditLogOmit
  salesOrder?: Prisma.SalesOrderOmit
  orderItem?: Prisma.OrderItemOmit
  price?: Prisma.PriceOmit
  invoice?: Prisma.InvoiceOmit
  inventoryItem?: Prisma.InventoryItemOmit
  item?: Prisma.ItemOmit
  workstation?: Prisma.WorkstationOmit
  operation?: Prisma.OperationOmit
  billOfMaterials?: Prisma.BillOfMaterialsOmit
  workOrder?: Prisma.WorkOrderOmit
  subscription?: Prisma.SubscriptionOmit
  paymentLog?: Prisma.PaymentLogOmit
  tenantSubscription?: Prisma.TenantSubscriptionOmit
  customerTransaction?: Prisma.CustomerTransactionOmit
  vendor?: Prisma.VendorOmit
  requestForQuote?: Prisma.RequestForQuoteOmit
  purchaseOrder?: Prisma.PurchaseOrderOmit
  role?: Prisma.RoleOmit
  userRole?: Prisma.UserRoleOmit
  rolePermission?: Prisma.RolePermissionOmit
  tenant?: Prisma.TenantOmit
  branch?: Prisma.BranchOmit
  fleetVehicle?: Prisma.FleetVehicleOmit
  shipment?: Prisma.ShipmentOmit
  warehouse?: Prisma.WarehouseOmit
  warehouseZone?: Prisma.WarehouseZoneOmit
}


export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

export type GetLogType<T> = CheckIsLogLevel<
  T extends LogDefinition ? T['level'] : T
>;

export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
  ? GetLogType<T[number]>
  : never;

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}



export type PrismaAction =
  | 'findUnique'
  | 'findUniqueOrThrow'
  | 'findMany'
  | 'findFirst'
  | 'findFirstOrThrow'
  | 'create'
  | 'createMany'
  | 'createManyAndReturn'
  | 'update'
  | 'updateMany'
  | 'updateManyAndReturn'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'
  | 'count'
  | 'runCommandRaw'
  | 'findRaw'
  | 'groupBy'


export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>

