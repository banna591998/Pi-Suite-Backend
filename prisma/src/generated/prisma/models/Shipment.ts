





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type ShipmentModel = runtime.Types.Result.DefaultSelection<Prisma.$ShipmentPayload>

export type AggregateShipment = {
  _count: ShipmentCountAggregateOutputType | null
  _avg: ShipmentAvgAggregateOutputType | null
  _sum: ShipmentSumAggregateOutputType | null
  _min: ShipmentMinAggregateOutputType | null
  _max: ShipmentMaxAggregateOutputType | null
}

export type ShipmentAvgAggregateOutputType = {
  freightCost: number | null
}

export type ShipmentSumAggregateOutputType = {
  freightCost: number | null
}

export type ShipmentMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  trackingNumber: string | null
  vehicleId: string | null
  origin: string | null
  destination: string | null
  freightCost: number | null
  status: $Enums.ShipmentStatus | null
  eBOLDocumentUrl: string | null
  podOtp: string | null
  deliveredAt: Date | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type ShipmentMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  trackingNumber: string | null
  vehicleId: string | null
  origin: string | null
  destination: string | null
  freightCost: number | null
  status: $Enums.ShipmentStatus | null
  eBOLDocumentUrl: string | null
  podOtp: string | null
  deliveredAt: Date | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type ShipmentCountAggregateOutputType = {
  id: number
  tenantId: number
  trackingNumber: number
  vehicleId: number
  origin: number
  destination: number
  freightCost: number
  status: number
  eBOLDocumentUrl: number
  podOtp: number
  deliveredAt: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type ShipmentAvgAggregateInputType = {
  freightCost?: true
}

export type ShipmentSumAggregateInputType = {
  freightCost?: true
}

export type ShipmentMinAggregateInputType = {
  id?: true
  tenantId?: true
  trackingNumber?: true
  vehicleId?: true
  origin?: true
  destination?: true
  freightCost?: true
  status?: true
  eBOLDocumentUrl?: true
  podOtp?: true
  deliveredAt?: true
  createdAt?: true
  updatedAt?: true
}

export type ShipmentMaxAggregateInputType = {
  id?: true
  tenantId?: true
  trackingNumber?: true
  vehicleId?: true
  origin?: true
  destination?: true
  freightCost?: true
  status?: true
  eBOLDocumentUrl?: true
  podOtp?: true
  deliveredAt?: true
  createdAt?: true
  updatedAt?: true
}

export type ShipmentCountAggregateInputType = {
  id?: true
  tenantId?: true
  trackingNumber?: true
  vehicleId?: true
  origin?: true
  destination?: true
  freightCost?: true
  status?: true
  eBOLDocumentUrl?: true
  podOtp?: true
  deliveredAt?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type ShipmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.ShipmentWhereInput
  
  orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[]
  
  cursor?: Prisma.ShipmentWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | ShipmentCountAggregateInputType
  
  _avg?: ShipmentAvgAggregateInputType
  
  _sum?: ShipmentSumAggregateInputType
  
  _min?: ShipmentMinAggregateInputType
  
  _max?: ShipmentMaxAggregateInputType
}

export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
      [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateShipment[P]>
    : Prisma.GetScalarType<T[P], AggregateShipment[P]>
}




export type ShipmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ShipmentWhereInput
  orderBy?: Prisma.ShipmentOrderByWithAggregationInput | Prisma.ShipmentOrderByWithAggregationInput[]
  by: Prisma.ShipmentScalarFieldEnum[] | Prisma.ShipmentScalarFieldEnum
  having?: Prisma.ShipmentScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ShipmentCountAggregateInputType | true
  _avg?: ShipmentAvgAggregateInputType
  _sum?: ShipmentSumAggregateInputType
  _min?: ShipmentMinAggregateInputType
  _max?: ShipmentMaxAggregateInputType
}

export type ShipmentGroupByOutputType = {
  id: string
  tenantId: string
  trackingNumber: string
  vehicleId: string | null
  origin: string
  destination: string
  freightCost: number
  status: $Enums.ShipmentStatus
  eBOLDocumentUrl: string | null
  podOtp: string | null
  deliveredAt: Date | null
  createdAt: Date
  updatedAt: Date
  _count: ShipmentCountAggregateOutputType | null
  _avg: ShipmentAvgAggregateOutputType | null
  _sum: ShipmentSumAggregateOutputType | null
  _min: ShipmentMinAggregateOutputType | null
  _max: ShipmentMaxAggregateOutputType | null
}

export type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ShipmentGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ShipmentGroupByOutputType[P]>
      }
    >
  >



export type ShipmentWhereInput = {
  AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[]
  OR?: Prisma.ShipmentWhereInput[]
  NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[]
  id?: Prisma.StringFilter<"Shipment"> | string
  tenantId?: Prisma.StringFilter<"Shipment"> | string
  trackingNumber?: Prisma.StringFilter<"Shipment"> | string
  vehicleId?: Prisma.StringNullableFilter<"Shipment"> | string | null
  origin?: Prisma.StringFilter<"Shipment"> | string
  destination?: Prisma.StringFilter<"Shipment"> | string
  freightCost?: Prisma.FloatFilter<"Shipment"> | number
  status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.StringNullableFilter<"Shipment"> | string | null
  podOtp?: Prisma.StringNullableFilter<"Shipment"> | string | null
  deliveredAt?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string
  vehicle?: Prisma.XOR<Prisma.FleetVehicleNullableScalarRelationFilter, Prisma.FleetVehicleWhereInput> | null
}

export type ShipmentOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingNumber?: Prisma.SortOrder
  vehicleId?: Prisma.SortOrderInput | Prisma.SortOrder
  origin?: Prisma.SortOrder
  destination?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  status?: Prisma.SortOrder
  eBOLDocumentUrl?: Prisma.SortOrderInput | Prisma.SortOrder
  podOtp?: Prisma.SortOrderInput | Prisma.SortOrder
  deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  vehicle?: Prisma.FleetVehicleOrderByWithRelationInput
}

export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  trackingNumber?: string
  AND?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[]
  OR?: Prisma.ShipmentWhereInput[]
  NOT?: Prisma.ShipmentWhereInput | Prisma.ShipmentWhereInput[]
  tenantId?: Prisma.StringFilter<"Shipment"> | string
  vehicleId?: Prisma.StringNullableFilter<"Shipment"> | string | null
  origin?: Prisma.StringFilter<"Shipment"> | string
  destination?: Prisma.StringFilter<"Shipment"> | string
  freightCost?: Prisma.FloatFilter<"Shipment"> | number
  status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.StringNullableFilter<"Shipment"> | string | null
  podOtp?: Prisma.StringNullableFilter<"Shipment"> | string | null
  deliveredAt?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string
  vehicle?: Prisma.XOR<Prisma.FleetVehicleNullableScalarRelationFilter, Prisma.FleetVehicleWhereInput> | null
}, "id" | "trackingNumber">

export type ShipmentOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingNumber?: Prisma.SortOrder
  vehicleId?: Prisma.SortOrderInput | Prisma.SortOrder
  origin?: Prisma.SortOrder
  destination?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  status?: Prisma.SortOrder
  eBOLDocumentUrl?: Prisma.SortOrderInput | Prisma.SortOrder
  podOtp?: Prisma.SortOrderInput | Prisma.SortOrder
  deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.ShipmentCountOrderByAggregateInput
  _avg?: Prisma.ShipmentAvgOrderByAggregateInput
  _max?: Prisma.ShipmentMaxOrderByAggregateInput
  _min?: Prisma.ShipmentMinOrderByAggregateInput
  _sum?: Prisma.ShipmentSumOrderByAggregateInput
}

export type ShipmentScalarWhereWithAggregatesInput = {
  AND?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[]
  OR?: Prisma.ShipmentScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ShipmentScalarWhereWithAggregatesInput | Prisma.ShipmentScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Shipment"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"Shipment"> | string
  trackingNumber?: Prisma.StringWithAggregatesFilter<"Shipment"> | string
  vehicleId?: Prisma.StringNullableWithAggregatesFilter<"Shipment"> | string | null
  origin?: Prisma.StringWithAggregatesFilter<"Shipment"> | string
  destination?: Prisma.StringWithAggregatesFilter<"Shipment"> | string
  freightCost?: Prisma.FloatWithAggregatesFilter<"Shipment"> | number
  status?: Prisma.EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.StringNullableWithAggregatesFilter<"Shipment"> | string | null
  podOtp?: Prisma.StringNullableWithAggregatesFilter<"Shipment"> | string | null
  deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Shipment"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Shipment"> | Date | string
}

export type ShipmentCreateInput = {
  id?: string
  tenantId: string
  trackingNumber: string
  origin: string
  destination: string
  freightCost: number
  status?: $Enums.ShipmentStatus
  eBOLDocumentUrl?: string | null
  podOtp?: string | null
  deliveredAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  vehicle?: Prisma.FleetVehicleCreateNestedOneWithoutShipmentsInput
}

export type ShipmentUncheckedCreateInput = {
  id?: string
  tenantId: string
  trackingNumber: string
  vehicleId?: string | null
  origin: string
  destination: string
  freightCost: number
  status?: $Enums.ShipmentStatus
  eBOLDocumentUrl?: string | null
  podOtp?: string | null
  deliveredAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ShipmentUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingNumber?: Prisma.StringFieldUpdateOperationsInput | string
  origin?: Prisma.StringFieldUpdateOperationsInput | string
  destination?: Prisma.StringFieldUpdateOperationsInput | string
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  podOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  vehicle?: Prisma.FleetVehicleUpdateOneWithoutShipmentsNestedInput
}

export type ShipmentUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingNumber?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  origin?: Prisma.StringFieldUpdateOperationsInput | string
  destination?: Prisma.StringFieldUpdateOperationsInput | string
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  podOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ShipmentCreateManyInput = {
  id?: string
  tenantId: string
  trackingNumber: string
  vehicleId?: string | null
  origin: string
  destination: string
  freightCost: number
  status?: $Enums.ShipmentStatus
  eBOLDocumentUrl?: string | null
  podOtp?: string | null
  deliveredAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ShipmentUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingNumber?: Prisma.StringFieldUpdateOperationsInput | string
  origin?: Prisma.StringFieldUpdateOperationsInput | string
  destination?: Prisma.StringFieldUpdateOperationsInput | string
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  podOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ShipmentUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingNumber?: Prisma.StringFieldUpdateOperationsInput | string
  vehicleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  origin?: Prisma.StringFieldUpdateOperationsInput | string
  destination?: Prisma.StringFieldUpdateOperationsInput | string
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  podOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ShipmentListRelationFilter = {
  every?: Prisma.ShipmentWhereInput
  some?: Prisma.ShipmentWhereInput
  none?: Prisma.ShipmentWhereInput
}

export type ShipmentOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type ShipmentCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingNumber?: Prisma.SortOrder
  vehicleId?: Prisma.SortOrder
  origin?: Prisma.SortOrder
  destination?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  status?: Prisma.SortOrder
  eBOLDocumentUrl?: Prisma.SortOrder
  podOtp?: Prisma.SortOrder
  deliveredAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ShipmentAvgOrderByAggregateInput = {
  freightCost?: Prisma.SortOrder
}

export type ShipmentMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingNumber?: Prisma.SortOrder
  vehicleId?: Prisma.SortOrder
  origin?: Prisma.SortOrder
  destination?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  status?: Prisma.SortOrder
  eBOLDocumentUrl?: Prisma.SortOrder
  podOtp?: Prisma.SortOrder
  deliveredAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ShipmentMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingNumber?: Prisma.SortOrder
  vehicleId?: Prisma.SortOrder
  origin?: Prisma.SortOrder
  destination?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  status?: Prisma.SortOrder
  eBOLDocumentUrl?: Prisma.SortOrder
  podOtp?: Prisma.SortOrder
  deliveredAt?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ShipmentSumOrderByAggregateInput = {
  freightCost?: Prisma.SortOrder
}

export type ShipmentCreateNestedManyWithoutVehicleInput = {
  create?: Prisma.XOR<Prisma.ShipmentCreateWithoutVehicleInput, Prisma.ShipmentUncheckedCreateWithoutVehicleInput> | Prisma.ShipmentCreateWithoutVehicleInput[] | Prisma.ShipmentUncheckedCreateWithoutVehicleInput[]
  connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutVehicleInput | Prisma.ShipmentCreateOrConnectWithoutVehicleInput[]
  createMany?: Prisma.ShipmentCreateManyVehicleInputEnvelope
  connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
}

export type ShipmentUncheckedCreateNestedManyWithoutVehicleInput = {
  create?: Prisma.XOR<Prisma.ShipmentCreateWithoutVehicleInput, Prisma.ShipmentUncheckedCreateWithoutVehicleInput> | Prisma.ShipmentCreateWithoutVehicleInput[] | Prisma.ShipmentUncheckedCreateWithoutVehicleInput[]
  connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutVehicleInput | Prisma.ShipmentCreateOrConnectWithoutVehicleInput[]
  createMany?: Prisma.ShipmentCreateManyVehicleInputEnvelope
  connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
}

export type ShipmentUpdateManyWithoutVehicleNestedInput = {
  create?: Prisma.XOR<Prisma.ShipmentCreateWithoutVehicleInput, Prisma.ShipmentUncheckedCreateWithoutVehicleInput> | Prisma.ShipmentCreateWithoutVehicleInput[] | Prisma.ShipmentUncheckedCreateWithoutVehicleInput[]
  connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutVehicleInput | Prisma.ShipmentCreateOrConnectWithoutVehicleInput[]
  upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutVehicleInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutVehicleInput[]
  createMany?: Prisma.ShipmentCreateManyVehicleInputEnvelope
  set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutVehicleInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutVehicleInput[]
  updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutVehicleInput | Prisma.ShipmentUpdateManyWithWhereWithoutVehicleInput[]
  deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[]
}

export type ShipmentUncheckedUpdateManyWithoutVehicleNestedInput = {
  create?: Prisma.XOR<Prisma.ShipmentCreateWithoutVehicleInput, Prisma.ShipmentUncheckedCreateWithoutVehicleInput> | Prisma.ShipmentCreateWithoutVehicleInput[] | Prisma.ShipmentUncheckedCreateWithoutVehicleInput[]
  connectOrCreate?: Prisma.ShipmentCreateOrConnectWithoutVehicleInput | Prisma.ShipmentCreateOrConnectWithoutVehicleInput[]
  upsert?: Prisma.ShipmentUpsertWithWhereUniqueWithoutVehicleInput | Prisma.ShipmentUpsertWithWhereUniqueWithoutVehicleInput[]
  createMany?: Prisma.ShipmentCreateManyVehicleInputEnvelope
  set?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  disconnect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  delete?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  connect?: Prisma.ShipmentWhereUniqueInput | Prisma.ShipmentWhereUniqueInput[]
  update?: Prisma.ShipmentUpdateWithWhereUniqueWithoutVehicleInput | Prisma.ShipmentUpdateWithWhereUniqueWithoutVehicleInput[]
  updateMany?: Prisma.ShipmentUpdateManyWithWhereWithoutVehicleInput | Prisma.ShipmentUpdateManyWithWhereWithoutVehicleInput[]
  deleteMany?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[]
}

export type ShipmentCreateWithoutVehicleInput = {
  id?: string
  tenantId: string
  trackingNumber: string
  origin: string
  destination: string
  freightCost: number
  status?: $Enums.ShipmentStatus
  eBOLDocumentUrl?: string | null
  podOtp?: string | null
  deliveredAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ShipmentUncheckedCreateWithoutVehicleInput = {
  id?: string
  tenantId: string
  trackingNumber: string
  origin: string
  destination: string
  freightCost: number
  status?: $Enums.ShipmentStatus
  eBOLDocumentUrl?: string | null
  podOtp?: string | null
  deliveredAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ShipmentCreateOrConnectWithoutVehicleInput = {
  where: Prisma.ShipmentWhereUniqueInput
  create: Prisma.XOR<Prisma.ShipmentCreateWithoutVehicleInput, Prisma.ShipmentUncheckedCreateWithoutVehicleInput>
}

export type ShipmentCreateManyVehicleInputEnvelope = {
  data: Prisma.ShipmentCreateManyVehicleInput | Prisma.ShipmentCreateManyVehicleInput[]
  skipDuplicates?: boolean
}

export type ShipmentUpsertWithWhereUniqueWithoutVehicleInput = {
  where: Prisma.ShipmentWhereUniqueInput
  update: Prisma.XOR<Prisma.ShipmentUpdateWithoutVehicleInput, Prisma.ShipmentUncheckedUpdateWithoutVehicleInput>
  create: Prisma.XOR<Prisma.ShipmentCreateWithoutVehicleInput, Prisma.ShipmentUncheckedCreateWithoutVehicleInput>
}

export type ShipmentUpdateWithWhereUniqueWithoutVehicleInput = {
  where: Prisma.ShipmentWhereUniqueInput
  data: Prisma.XOR<Prisma.ShipmentUpdateWithoutVehicleInput, Prisma.ShipmentUncheckedUpdateWithoutVehicleInput>
}

export type ShipmentUpdateManyWithWhereWithoutVehicleInput = {
  where: Prisma.ShipmentScalarWhereInput
  data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyWithoutVehicleInput>
}

export type ShipmentScalarWhereInput = {
  AND?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[]
  OR?: Prisma.ShipmentScalarWhereInput[]
  NOT?: Prisma.ShipmentScalarWhereInput | Prisma.ShipmentScalarWhereInput[]
  id?: Prisma.StringFilter<"Shipment"> | string
  tenantId?: Prisma.StringFilter<"Shipment"> | string
  trackingNumber?: Prisma.StringFilter<"Shipment"> | string
  vehicleId?: Prisma.StringNullableFilter<"Shipment"> | string | null
  origin?: Prisma.StringFilter<"Shipment"> | string
  destination?: Prisma.StringFilter<"Shipment"> | string
  freightCost?: Prisma.FloatFilter<"Shipment"> | number
  status?: Prisma.EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.StringNullableFilter<"Shipment"> | string | null
  podOtp?: Prisma.StringNullableFilter<"Shipment"> | string | null
  deliveredAt?: Prisma.DateTimeNullableFilter<"Shipment"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Shipment"> | Date | string
}

export type ShipmentCreateManyVehicleInput = {
  id?: string
  tenantId: string
  trackingNumber: string
  origin: string
  destination: string
  freightCost: number
  status?: $Enums.ShipmentStatus
  eBOLDocumentUrl?: string | null
  podOtp?: string | null
  deliveredAt?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ShipmentUpdateWithoutVehicleInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingNumber?: Prisma.StringFieldUpdateOperationsInput | string
  origin?: Prisma.StringFieldUpdateOperationsInput | string
  destination?: Prisma.StringFieldUpdateOperationsInput | string
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  podOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ShipmentUncheckedUpdateWithoutVehicleInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingNumber?: Prisma.StringFieldUpdateOperationsInput | string
  origin?: Prisma.StringFieldUpdateOperationsInput | string
  destination?: Prisma.StringFieldUpdateOperationsInput | string
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  podOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ShipmentUncheckedUpdateManyWithoutVehicleInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingNumber?: Prisma.StringFieldUpdateOperationsInput | string
  origin?: Prisma.StringFieldUpdateOperationsInput | string
  destination?: Prisma.StringFieldUpdateOperationsInput | string
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  eBOLDocumentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  podOtp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type ShipmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  trackingNumber?: boolean
  vehicleId?: boolean
  origin?: boolean
  destination?: boolean
  freightCost?: boolean
  status?: boolean
  eBOLDocumentUrl?: boolean
  podOtp?: boolean
  deliveredAt?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vehicle?: boolean | Prisma.Shipment$vehicleArgs<ExtArgs>
}, ExtArgs["result"]["shipment"]>

export type ShipmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  trackingNumber?: boolean
  vehicleId?: boolean
  origin?: boolean
  destination?: boolean
  freightCost?: boolean
  status?: boolean
  eBOLDocumentUrl?: boolean
  podOtp?: boolean
  deliveredAt?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vehicle?: boolean | Prisma.Shipment$vehicleArgs<ExtArgs>
}, ExtArgs["result"]["shipment"]>

export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  trackingNumber?: boolean
  vehicleId?: boolean
  origin?: boolean
  destination?: boolean
  freightCost?: boolean
  status?: boolean
  eBOLDocumentUrl?: boolean
  podOtp?: boolean
  deliveredAt?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vehicle?: boolean | Prisma.Shipment$vehicleArgs<ExtArgs>
}, ExtArgs["result"]["shipment"]>

export type ShipmentSelectScalar = {
  id?: boolean
  tenantId?: boolean
  trackingNumber?: boolean
  vehicleId?: boolean
  origin?: boolean
  destination?: boolean
  freightCost?: boolean
  status?: boolean
  eBOLDocumentUrl?: boolean
  podOtp?: boolean
  deliveredAt?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type ShipmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "trackingNumber" | "vehicleId" | "origin" | "destination" | "freightCost" | "status" | "eBOLDocumentUrl" | "podOtp" | "deliveredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["shipment"]>
export type ShipmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vehicle?: boolean | Prisma.Shipment$vehicleArgs<ExtArgs>
}
export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vehicle?: boolean | Prisma.Shipment$vehicleArgs<ExtArgs>
}
export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vehicle?: boolean | Prisma.Shipment$vehicleArgs<ExtArgs>
}

export type $ShipmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Shipment"
  objects: {
    vehicle: Prisma.$FleetVehiclePayload<ExtArgs> | null
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    trackingNumber: string
    vehicleId: string | null
    origin: string
    destination: string
    freightCost: number
    status: $Enums.ShipmentStatus
    eBOLDocumentUrl: string | null
    podOtp: string | null
    deliveredAt: Date | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["shipment"]>
  composites: {}
}

export type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShipmentPayload, S>

export type ShipmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentCountAggregateInputType | true
  }

export interface ShipmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
  
  findUnique<T extends ShipmentFindUniqueArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends ShipmentFindFirstArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends ShipmentFindManyArgs>(args?: Prisma.SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends ShipmentCreateArgs>(args: Prisma.SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends ShipmentCreateManyArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends ShipmentDeleteArgs>(args: Prisma.SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends ShipmentUpdateArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends ShipmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends ShipmentUpdateManyArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends ShipmentUpsertArgs>(args: Prisma.SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma.Prisma__ShipmentClient<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends ShipmentCountArgs>(
    args?: Prisma.Subset<T, ShipmentCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ShipmentCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends ShipmentAggregateArgs>(args: Prisma.Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

  
  groupBy<
    T extends ShipmentGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ShipmentGroupByArgs['orderBy'] }
      : { orderBy?: ShipmentGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: ShipmentFieldRefs;
}


export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  vehicle<T extends Prisma.Shipment$vehicleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Shipment$vehicleArgs<ExtArgs>>): Prisma.Prisma__FleetVehicleClient<runtime.Types.Result.GetResult<Prisma.$FleetVehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface ShipmentFieldRefs {
  readonly id: Prisma.FieldRef<"Shipment", 'String'>
  readonly tenantId: Prisma.FieldRef<"Shipment", 'String'>
  readonly trackingNumber: Prisma.FieldRef<"Shipment", 'String'>
  readonly vehicleId: Prisma.FieldRef<"Shipment", 'String'>
  readonly origin: Prisma.FieldRef<"Shipment", 'String'>
  readonly destination: Prisma.FieldRef<"Shipment", 'String'>
  readonly freightCost: Prisma.FieldRef<"Shipment", 'Float'>
  readonly status: Prisma.FieldRef<"Shipment", 'ShipmentStatus'>
  readonly eBOLDocumentUrl: Prisma.FieldRef<"Shipment", 'String'>
  readonly podOtp: Prisma.FieldRef<"Shipment", 'String'>
  readonly deliveredAt: Prisma.FieldRef<"Shipment", 'DateTime'>
  readonly createdAt: Prisma.FieldRef<"Shipment", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Shipment", 'DateTime'>
}
    



export type ShipmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
  
  where: Prisma.ShipmentWhereUniqueInput
}


export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
  
  where: Prisma.ShipmentWhereUniqueInput
}


export type ShipmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type ShipmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type ShipmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type ShipmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>
}


export type ShipmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[]
  skipDuplicates?: boolean
}


export type ShipmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  data: Prisma.ShipmentCreateManyInput | Prisma.ShipmentCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
}


export type ShipmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>
  
  where: Prisma.ShipmentWhereUniqueInput
}


export type ShipmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>
  
  where?: Prisma.ShipmentWhereInput
  
  limit?: number
}


export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ShipmentUpdateManyMutationInput, Prisma.ShipmentUncheckedUpdateManyInput>
  
  where?: Prisma.ShipmentWhereInput
  
  limit?: number
  
  include?: Prisma.ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type ShipmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
  
  where: Prisma.ShipmentWhereUniqueInput
  
  create: Prisma.XOR<Prisma.ShipmentCreateInput, Prisma.ShipmentUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.ShipmentUpdateInput, Prisma.ShipmentUncheckedUpdateInput>
}


export type ShipmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
  
  where: Prisma.ShipmentWhereUniqueInput
}


export type ShipmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.ShipmentWhereInput
  
  limit?: number
}


export type Shipment$vehicleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FleetVehicleSelect<ExtArgs> | null
  
  omit?: Prisma.FleetVehicleOmit<ExtArgs> | null
  
  include?: Prisma.FleetVehicleInclude<ExtArgs> | null
  where?: Prisma.FleetVehicleWhereInput
}


export type ShipmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ShipmentSelect<ExtArgs> | null
  
  omit?: Prisma.ShipmentOmit<ExtArgs> | null
  
  include?: Prisma.ShipmentInclude<ExtArgs> | null
}
