





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type FleetVehicleModel = runtime.Types.Result.DefaultSelection<Prisma.$FleetVehiclePayload>

export type AggregateFleetVehicle = {
  _count: FleetVehicleCountAggregateOutputType | null
  _avg: FleetVehicleAvgAggregateOutputType | null
  _sum: FleetVehicleSumAggregateOutputType | null
  _min: FleetVehicleMinAggregateOutputType | null
  _max: FleetVehicleMaxAggregateOutputType | null
}

export type FleetVehicleAvgAggregateOutputType = {
  capacityKg: number | null
  currentLat: number | null
  currentLng: number | null
}

export type FleetVehicleSumAggregateOutputType = {
  capacityKg: number | null
  currentLat: number | null
  currentLng: number | null
}

export type FleetVehicleMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  vehicleNumber: string | null
  driverName: string | null
  phoneNumber: string | null
  capacityKg: number | null
  currentLat: number | null
  currentLng: number | null
  status: $Enums.VehicleStatus | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type FleetVehicleMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  vehicleNumber: string | null
  driverName: string | null
  phoneNumber: string | null
  capacityKg: number | null
  currentLat: number | null
  currentLng: number | null
  status: $Enums.VehicleStatus | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type FleetVehicleCountAggregateOutputType = {
  id: number
  tenantId: number
  vehicleNumber: number
  driverName: number
  phoneNumber: number
  capacityKg: number
  currentLat: number
  currentLng: number
  status: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type FleetVehicleAvgAggregateInputType = {
  capacityKg?: true
  currentLat?: true
  currentLng?: true
}

export type FleetVehicleSumAggregateInputType = {
  capacityKg?: true
  currentLat?: true
  currentLng?: true
}

export type FleetVehicleMinAggregateInputType = {
  id?: true
  tenantId?: true
  vehicleNumber?: true
  driverName?: true
  phoneNumber?: true
  capacityKg?: true
  currentLat?: true
  currentLng?: true
  status?: true
  createdAt?: true
  updatedAt?: true
}

export type FleetVehicleMaxAggregateInputType = {
  id?: true
  tenantId?: true
  vehicleNumber?: true
  driverName?: true
  phoneNumber?: true
  capacityKg?: true
  currentLat?: true
  currentLng?: true
  status?: true
  createdAt?: true
  updatedAt?: true
}

export type FleetVehicleCountAggregateInputType = {
  id?: true
  tenantId?: true
  vehicleNumber?: true
  driverName?: true
  phoneNumber?: true
  capacityKg?: true
  currentLat?: true
  currentLng?: true
  status?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type FleetVehicleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.FleetVehicleWhereInput
  
  orderBy?: Prisma.FleetVehicleOrderByWithRelationInput | Prisma.FleetVehicleOrderByWithRelationInput[]
  
  cursor?: Prisma.FleetVehicleWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | FleetVehicleCountAggregateInputType
  
  _avg?: FleetVehicleAvgAggregateInputType
  
  _sum?: FleetVehicleSumAggregateInputType
  
  _min?: FleetVehicleMinAggregateInputType
  
  _max?: FleetVehicleMaxAggregateInputType
}

export type GetFleetVehicleAggregateType<T extends FleetVehicleAggregateArgs> = {
      [P in keyof T & keyof AggregateFleetVehicle]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateFleetVehicle[P]>
    : Prisma.GetScalarType<T[P], AggregateFleetVehicle[P]>
}




export type FleetVehicleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FleetVehicleWhereInput
  orderBy?: Prisma.FleetVehicleOrderByWithAggregationInput | Prisma.FleetVehicleOrderByWithAggregationInput[]
  by: Prisma.FleetVehicleScalarFieldEnum[] | Prisma.FleetVehicleScalarFieldEnum
  having?: Prisma.FleetVehicleScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: FleetVehicleCountAggregateInputType | true
  _avg?: FleetVehicleAvgAggregateInputType
  _sum?: FleetVehicleSumAggregateInputType
  _min?: FleetVehicleMinAggregateInputType
  _max?: FleetVehicleMaxAggregateInputType
}

export type FleetVehicleGroupByOutputType = {
  id: string
  tenantId: string
  vehicleNumber: string
  driverName: string
  phoneNumber: string
  capacityKg: number
  currentLat: number | null
  currentLng: number | null
  status: $Enums.VehicleStatus
  createdAt: Date
  updatedAt: Date
  _count: FleetVehicleCountAggregateOutputType | null
  _avg: FleetVehicleAvgAggregateOutputType | null
  _sum: FleetVehicleSumAggregateOutputType | null
  _min: FleetVehicleMinAggregateOutputType | null
  _max: FleetVehicleMaxAggregateOutputType | null
}

export type GetFleetVehicleGroupByPayload<T extends FleetVehicleGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<FleetVehicleGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof FleetVehicleGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], FleetVehicleGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], FleetVehicleGroupByOutputType[P]>
      }
    >
  >



export type FleetVehicleWhereInput = {
  AND?: Prisma.FleetVehicleWhereInput | Prisma.FleetVehicleWhereInput[]
  OR?: Prisma.FleetVehicleWhereInput[]
  NOT?: Prisma.FleetVehicleWhereInput | Prisma.FleetVehicleWhereInput[]
  id?: Prisma.StringFilter<"FleetVehicle"> | string
  tenantId?: Prisma.StringFilter<"FleetVehicle"> | string
  vehicleNumber?: Prisma.StringFilter<"FleetVehicle"> | string
  driverName?: Prisma.StringFilter<"FleetVehicle"> | string
  phoneNumber?: Prisma.StringFilter<"FleetVehicle"> | string
  capacityKg?: Prisma.FloatFilter<"FleetVehicle"> | number
  currentLat?: Prisma.FloatNullableFilter<"FleetVehicle"> | number | null
  currentLng?: Prisma.FloatNullableFilter<"FleetVehicle"> | number | null
  status?: Prisma.EnumVehicleStatusFilter<"FleetVehicle"> | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFilter<"FleetVehicle"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"FleetVehicle"> | Date | string
  shipments?: Prisma.ShipmentListRelationFilter
}

export type FleetVehicleOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vehicleNumber?: Prisma.SortOrder
  driverName?: Prisma.SortOrder
  phoneNumber?: Prisma.SortOrder
  capacityKg?: Prisma.SortOrder
  currentLat?: Prisma.SortOrderInput | Prisma.SortOrder
  currentLng?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  shipments?: Prisma.ShipmentOrderByRelationAggregateInput
}

export type FleetVehicleWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  vehicleNumber?: string
  AND?: Prisma.FleetVehicleWhereInput | Prisma.FleetVehicleWhereInput[]
  OR?: Prisma.FleetVehicleWhereInput[]
  NOT?: Prisma.FleetVehicleWhereInput | Prisma.FleetVehicleWhereInput[]
  tenantId?: Prisma.StringFilter<"FleetVehicle"> | string
  driverName?: Prisma.StringFilter<"FleetVehicle"> | string
  phoneNumber?: Prisma.StringFilter<"FleetVehicle"> | string
  capacityKg?: Prisma.FloatFilter<"FleetVehicle"> | number
  currentLat?: Prisma.FloatNullableFilter<"FleetVehicle"> | number | null
  currentLng?: Prisma.FloatNullableFilter<"FleetVehicle"> | number | null
  status?: Prisma.EnumVehicleStatusFilter<"FleetVehicle"> | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFilter<"FleetVehicle"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"FleetVehicle"> | Date | string
  shipments?: Prisma.ShipmentListRelationFilter
}, "id" | "vehicleNumber">

export type FleetVehicleOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vehicleNumber?: Prisma.SortOrder
  driverName?: Prisma.SortOrder
  phoneNumber?: Prisma.SortOrder
  capacityKg?: Prisma.SortOrder
  currentLat?: Prisma.SortOrderInput | Prisma.SortOrder
  currentLng?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.FleetVehicleCountOrderByAggregateInput
  _avg?: Prisma.FleetVehicleAvgOrderByAggregateInput
  _max?: Prisma.FleetVehicleMaxOrderByAggregateInput
  _min?: Prisma.FleetVehicleMinOrderByAggregateInput
  _sum?: Prisma.FleetVehicleSumOrderByAggregateInput
}

export type FleetVehicleScalarWhereWithAggregatesInput = {
  AND?: Prisma.FleetVehicleScalarWhereWithAggregatesInput | Prisma.FleetVehicleScalarWhereWithAggregatesInput[]
  OR?: Prisma.FleetVehicleScalarWhereWithAggregatesInput[]
  NOT?: Prisma.FleetVehicleScalarWhereWithAggregatesInput | Prisma.FleetVehicleScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"FleetVehicle"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"FleetVehicle"> | string
  vehicleNumber?: Prisma.StringWithAggregatesFilter<"FleetVehicle"> | string
  driverName?: Prisma.StringWithAggregatesFilter<"FleetVehicle"> | string
  phoneNumber?: Prisma.StringWithAggregatesFilter<"FleetVehicle"> | string
  capacityKg?: Prisma.FloatWithAggregatesFilter<"FleetVehicle"> | number
  currentLat?: Prisma.FloatNullableWithAggregatesFilter<"FleetVehicle"> | number | null
  currentLng?: Prisma.FloatNullableWithAggregatesFilter<"FleetVehicle"> | number | null
  status?: Prisma.EnumVehicleStatusWithAggregatesFilter<"FleetVehicle"> | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"FleetVehicle"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FleetVehicle"> | Date | string
}

export type FleetVehicleCreateInput = {
  id?: string
  tenantId: string
  vehicleNumber: string
  driverName: string
  phoneNumber: string
  capacityKg: number
  currentLat?: number | null
  currentLng?: number | null
  status?: $Enums.VehicleStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  shipments?: Prisma.ShipmentCreateNestedManyWithoutVehicleInput
}

export type FleetVehicleUncheckedCreateInput = {
  id?: string
  tenantId: string
  vehicleNumber: string
  driverName: string
  phoneNumber: string
  capacityKg: number
  currentLat?: number | null
  currentLng?: number | null
  status?: $Enums.VehicleStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  shipments?: Prisma.ShipmentUncheckedCreateNestedManyWithoutVehicleInput
}

export type FleetVehicleUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string
  driverName?: Prisma.StringFieldUpdateOperationsInput | string
  phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string
  capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number
  currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  shipments?: Prisma.ShipmentUpdateManyWithoutVehicleNestedInput
}

export type FleetVehicleUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string
  driverName?: Prisma.StringFieldUpdateOperationsInput | string
  phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string
  capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number
  currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  shipments?: Prisma.ShipmentUncheckedUpdateManyWithoutVehicleNestedInput
}

export type FleetVehicleCreateManyInput = {
  id?: string
  tenantId: string
  vehicleNumber: string
  driverName: string
  phoneNumber: string
  capacityKg: number
  currentLat?: number | null
  currentLng?: number | null
  status?: $Enums.VehicleStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FleetVehicleUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string
  driverName?: Prisma.StringFieldUpdateOperationsInput | string
  phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string
  capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number
  currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FleetVehicleUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string
  driverName?: Prisma.StringFieldUpdateOperationsInput | string
  phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string
  capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number
  currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FleetVehicleCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vehicleNumber?: Prisma.SortOrder
  driverName?: Prisma.SortOrder
  phoneNumber?: Prisma.SortOrder
  capacityKg?: Prisma.SortOrder
  currentLat?: Prisma.SortOrder
  currentLng?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type FleetVehicleAvgOrderByAggregateInput = {
  capacityKg?: Prisma.SortOrder
  currentLat?: Prisma.SortOrder
  currentLng?: Prisma.SortOrder
}

export type FleetVehicleMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vehicleNumber?: Prisma.SortOrder
  driverName?: Prisma.SortOrder
  phoneNumber?: Prisma.SortOrder
  capacityKg?: Prisma.SortOrder
  currentLat?: Prisma.SortOrder
  currentLng?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type FleetVehicleMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vehicleNumber?: Prisma.SortOrder
  driverName?: Prisma.SortOrder
  phoneNumber?: Prisma.SortOrder
  capacityKg?: Prisma.SortOrder
  currentLat?: Prisma.SortOrder
  currentLng?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type FleetVehicleSumOrderByAggregateInput = {
  capacityKg?: Prisma.SortOrder
  currentLat?: Prisma.SortOrder
  currentLng?: Prisma.SortOrder
}

export type FleetVehicleNullableScalarRelationFilter = {
  is?: Prisma.FleetVehicleWhereInput | null
  isNot?: Prisma.FleetVehicleWhereInput | null
}

export type NullableFloatFieldUpdateOperationsInput = {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type EnumVehicleStatusFieldUpdateOperationsInput = {
  set?: $Enums.VehicleStatus
}

export type FleetVehicleCreateNestedOneWithoutShipmentsInput = {
  create?: Prisma.XOR<Prisma.FleetVehicleCreateWithoutShipmentsInput, Prisma.FleetVehicleUncheckedCreateWithoutShipmentsInput>
  connectOrCreate?: Prisma.FleetVehicleCreateOrConnectWithoutShipmentsInput
  connect?: Prisma.FleetVehicleWhereUniqueInput
}

export type FleetVehicleUpdateOneWithoutShipmentsNestedInput = {
  create?: Prisma.XOR<Prisma.FleetVehicleCreateWithoutShipmentsInput, Prisma.FleetVehicleUncheckedCreateWithoutShipmentsInput>
  connectOrCreate?: Prisma.FleetVehicleCreateOrConnectWithoutShipmentsInput
  upsert?: Prisma.FleetVehicleUpsertWithoutShipmentsInput
  disconnect?: Prisma.FleetVehicleWhereInput | boolean
  delete?: Prisma.FleetVehicleWhereInput | boolean
  connect?: Prisma.FleetVehicleWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.FleetVehicleUpdateToOneWithWhereWithoutShipmentsInput, Prisma.FleetVehicleUpdateWithoutShipmentsInput>, Prisma.FleetVehicleUncheckedUpdateWithoutShipmentsInput>
}

export type FleetVehicleCreateWithoutShipmentsInput = {
  id?: string
  tenantId: string
  vehicleNumber: string
  driverName: string
  phoneNumber: string
  capacityKg: number
  currentLat?: number | null
  currentLng?: number | null
  status?: $Enums.VehicleStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FleetVehicleUncheckedCreateWithoutShipmentsInput = {
  id?: string
  tenantId: string
  vehicleNumber: string
  driverName: string
  phoneNumber: string
  capacityKg: number
  currentLat?: number | null
  currentLng?: number | null
  status?: $Enums.VehicleStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FleetVehicleCreateOrConnectWithoutShipmentsInput = {
  where: Prisma.FleetVehicleWhereUniqueInput
  create: Prisma.XOR<Prisma.FleetVehicleCreateWithoutShipmentsInput, Prisma.FleetVehicleUncheckedCreateWithoutShipmentsInput>
}

export type FleetVehicleUpsertWithoutShipmentsInput = {
  update: Prisma.XOR<Prisma.FleetVehicleUpdateWithoutShipmentsInput, Prisma.FleetVehicleUncheckedUpdateWithoutShipmentsInput>
  create: Prisma.XOR<Prisma.FleetVehicleCreateWithoutShipmentsInput, Prisma.FleetVehicleUncheckedCreateWithoutShipmentsInput>
  where?: Prisma.FleetVehicleWhereInput
}

export type FleetVehicleUpdateToOneWithWhereWithoutShipmentsInput = {
  where?: Prisma.FleetVehicleWhereInput
  data: Prisma.XOR<Prisma.FleetVehicleUpdateWithoutShipmentsInput, Prisma.FleetVehicleUncheckedUpdateWithoutShipmentsInput>
}

export type FleetVehicleUpdateWithoutShipmentsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string
  driverName?: Prisma.StringFieldUpdateOperationsInput | string
  phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string
  capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number
  currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FleetVehicleUncheckedUpdateWithoutShipmentsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string
  driverName?: Prisma.StringFieldUpdateOperationsInput | string
  phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string
  capacityKg?: Prisma.FloatFieldUpdateOperationsInput | number
  currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}




export type FleetVehicleCountOutputType = {
  shipments: number
}

export type FleetVehicleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  shipments?: boolean | FleetVehicleCountOutputTypeCountShipmentsArgs
}


export type FleetVehicleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleCountOutputTypeSelect<ExtArgs> | null
}


export type FleetVehicleCountOutputTypeCountShipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ShipmentWhereInput
}


export type FleetVehicleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  vehicleNumber?: boolean
  driverName?: boolean
  phoneNumber?: boolean
  capacityKg?: boolean
  currentLat?: boolean
  currentLng?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  shipments?: boolean | Prisma.FleetVehicle$shipmentsArgs<ExtArgs>
  _count?: boolean | Prisma.FleetVehicleCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["fleetVehicle"]>

export type FleetVehicleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  vehicleNumber?: boolean
  driverName?: boolean
  phoneNumber?: boolean
  capacityKg?: boolean
  currentLat?: boolean
  currentLng?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["fleetVehicle"]>

export type FleetVehicleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  vehicleNumber?: boolean
  driverName?: boolean
  phoneNumber?: boolean
  capacityKg?: boolean
  currentLat?: boolean
  currentLng?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["fleetVehicle"]>

export type FleetVehicleSelectScalar = {
  id?: boolean
  tenantId?: boolean
  vehicleNumber?: boolean
  driverName?: boolean
  phoneNumber?: boolean
  capacityKg?: boolean
  currentLat?: boolean
  currentLng?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type FleetVehicleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "vehicleNumber" | "driverName" | "phoneNumber" | "capacityKg" | "currentLat" | "currentLng" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["fleetVehicle"]>
export type FleetVehicleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  shipments?: boolean | Prisma.FleetVehicle$shipmentsArgs<ExtArgs>
  _count?: boolean | Prisma.FleetVehicleCountOutputTypeDefaultArgs<ExtArgs>
}
export type FleetVehicleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type FleetVehicleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $FleetVehiclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "FleetVehicle"
  objects: {
    shipments: Prisma.$ShipmentPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    vehicleNumber: string
    driverName: string
    phoneNumber: string
    capacityKg: number
    currentLat: number | null
    currentLng: number | null
    status: $Enums.VehicleStatus
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["fleetVehicle"]>
  composites: {}
}

export type FleetVehicleGetPayload<S extends boolean | null | undefined | FleetVehicleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload, S>

export type FleetVehicleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<FleetVehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FleetVehicleCountAggregateInputType | true
  }

export interface FleetVehicleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FleetVehicle'], meta: { name: 'FleetVehicle' } }
  
  findUnique<T extends FleetVehicleFindUniqueArgs>(args: Prisma.SelectSubset<T, FleetVehicleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends FleetVehicleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FleetVehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends FleetVehicleFindFirstArgs>(args?: Prisma.SelectSubset<T, FleetVehicleFindFirstArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends FleetVehicleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FleetVehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends FleetVehicleFindManyArgs>(args?: Prisma.SelectSubset<T, FleetVehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends FleetVehicleCreateArgs>(args: Prisma.SelectSubset<T, FleetVehicleCreateArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends FleetVehicleCreateManyArgs>(args?: Prisma.SelectSubset<T, FleetVehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends FleetVehicleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FleetVehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends FleetVehicleDeleteArgs>(args: Prisma.SelectSubset<T, FleetVehicleDeleteArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends FleetVehicleUpdateArgs>(args: Prisma.SelectSubset<T, FleetVehicleUpdateArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends FleetVehicleDeleteManyArgs>(args?: Prisma.SelectSubset<T, FleetVehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends FleetVehicleUpdateManyArgs>(args: Prisma.SelectSubset<T, FleetVehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends FleetVehicleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FleetVehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends FleetVehicleUpsertArgs>(args: Prisma.SelectSubset<T, FleetVehicleUpsertArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends FleetVehicleCountArgs>(
    args?: Prisma.Subset<T, FleetVehicleCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], FleetVehicleCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends FleetVehicleAggregateArgs>(args: Prisma.Subset<T, FleetVehicleAggregateArgs>): Prisma.PrismaPromise<GetFleetVehicleAggregateType<T>>

  
  groupBy<
    T extends FleetVehicleGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: FleetVehicleGroupByArgs['orderBy'] }
      : { orderBy?: FleetVehicleGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, FleetVehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFleetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: FleetVehicleFieldRefs;
}


export interface Prisma__FleetVehicleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  shipments<T extends Prisma.FleetVehicle$shipmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FleetVehicle$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface FleetVehicleFieldRefs {
  readonly id: Prisma.FieldRef<"FleetVehicle", 'String'>
  readonly tenantId: Prisma.FieldRef<"FleetVehicle", 'String'>
  readonly vehicleNumber: Prisma.FieldRef<"FleetVehicle", 'String'>
  readonly driverName: Prisma.FieldRef<"FleetVehicle", 'String'>
  readonly phoneNumber: Prisma.FieldRef<"FleetVehicle", 'String'>
  readonly capacityKg: Prisma.FieldRef<"FleetVehicle", 'Float'>
  readonly currentLat: Prisma.FieldRef<"FleetVehicle", 'Float'>
  readonly currentLng: Prisma.FieldRef<"FleetVehicle", 'Float'>
  readonly status: Prisma.FieldRef<"FleetVehicle", 'VehicleStatus'>
  readonly createdAt: Prisma.FieldRef<"FleetVehicle", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"FleetVehicle", 'DateTime'>
}
    



export type FleetVehicleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  where: Prisma.FleetVehicleWhereUniqueInput
}


export type FleetVehicleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  where: Prisma.FleetVehicleWhereUniqueInput
}


export type FleetVehicleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  where?: Prisma.FleetVehicleWhereInput
  
  orderBy?: Prisma.FleetVehicleOrderByWithRelationInput | Prisma.FleetVehicleOrderByWithRelationInput[]
  
  cursor?: Prisma.FleetVehicleWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.FleetVehicleScalarFieldEnum | Prisma.FleetVehicleScalarFieldEnum[]
}


export type FleetVehicleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  where?: Prisma.FleetVehicleWhereInput
  
  orderBy?: Prisma.FleetVehicleOrderByWithRelationInput | Prisma.FleetVehicleOrderByWithRelationInput[]
  
  cursor?: Prisma.FleetVehicleWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.FleetVehicleScalarFieldEnum | Prisma.FleetVehicleScalarFieldEnum[]
}


export type FleetVehicleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  where?: Prisma.FleetVehicleWhereInput
  
  orderBy?: Prisma.FleetVehicleOrderByWithRelationInput | Prisma.FleetVehicleOrderByWithRelationInput[]
  
  cursor?: Prisma.FleetVehicleWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.FleetVehicleScalarFieldEnum | Prisma.FleetVehicleScalarFieldEnum[]
}


export type FleetVehicleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.FleetVehicleCreateInput, Prisma.FleetVehicleUncheckedCreateInput>
}


export type FleetVehicleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.FleetVehicleCreateManyInput | Prisma.FleetVehicleCreateManyInput[]
  skipDuplicates?: boolean
}


export type FleetVehicleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  data: Prisma.FleetVehicleCreateManyInput | Prisma.FleetVehicleCreateManyInput[]
  skipDuplicates?: boolean
}


export type FleetVehicleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.FleetVehicleUpdateInput, Prisma.FleetVehicleUncheckedUpdateInput>
  
  where: Prisma.FleetVehicleWhereUniqueInput
}


export type FleetVehicleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.FleetVehicleUpdateManyMutationInput, Prisma.FleetVehicleUncheckedUpdateManyInput>
  
  where?: Prisma.FleetVehicleWhereInput
  
  limit?: number
}


export type FleetVehicleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.FleetVehicleUpdateManyMutationInput, Prisma.FleetVehicleUncheckedUpdateManyInput>
  
  where?: Prisma.FleetVehicleWhereInput
  
  limit?: number
}


export type FleetVehicleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  where: Prisma.FleetVehicleWhereUniqueInput
  
  create: Prisma.XOR<Prisma.FleetVehicleCreateInput, Prisma.FleetVehicleUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.FleetVehicleUpdateInput, Prisma.FleetVehicleUncheckedUpdateInput>
}


export type FleetVehicleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  
  where: Prisma.FleetVehicleWhereUniqueInput
}


export type FleetVehicleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.FleetVehicleWhereInput
  
  limit?: number
}


export type FleetVehicle$shipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
  where?: Prisma.ShipmentWhereInput
  orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[]
  cursor?: Prisma.ShipmentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[]
}


export type FleetVehicleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
}
