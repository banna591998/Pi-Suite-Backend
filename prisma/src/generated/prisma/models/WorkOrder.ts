





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type WorkOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkOrderPayload>

export type AggregateWorkOrder = {
  _count: WorkOrderCountAggregateOutputType | null
  _avg: WorkOrderAvgAggregateOutputType | null
  _sum: WorkOrderSumAggregateOutputType | null
  _min: WorkOrderMinAggregateOutputType | null
  _max: WorkOrderMaxAggregateOutputType | null
}

export type WorkOrderAvgAggregateOutputType = {
  quantity: number | null
  producedQty: number | null
}

export type WorkOrderSumAggregateOutputType = {
  quantity: number | null
  producedQty: number | null
}

export type WorkOrderMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  orderNumber: string | null
  bomId: string | null
  quantity: number | null
  producedQty: number | null
  status: $Enums.WorkOrderStatus | null
  assignedLine: string | null
  plannedStartDate: Date | null
  plannedEndDate: Date | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WorkOrderMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  orderNumber: string | null
  bomId: string | null
  quantity: number | null
  producedQty: number | null
  status: $Enums.WorkOrderStatus | null
  assignedLine: string | null
  plannedStartDate: Date | null
  plannedEndDate: Date | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WorkOrderCountAggregateOutputType = {
  id: number
  tenantId: number
  orderNumber: number
  bomId: number
  quantity: number
  producedQty: number
  status: number
  assignedLine: number
  plannedStartDate: number
  plannedEndDate: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type WorkOrderAvgAggregateInputType = {
  quantity?: true
  producedQty?: true
}

export type WorkOrderSumAggregateInputType = {
  quantity?: true
  producedQty?: true
}

export type WorkOrderMinAggregateInputType = {
  id?: true
  tenantId?: true
  orderNumber?: true
  bomId?: true
  quantity?: true
  producedQty?: true
  status?: true
  assignedLine?: true
  plannedStartDate?: true
  plannedEndDate?: true
  createdAt?: true
  updatedAt?: true
}

export type WorkOrderMaxAggregateInputType = {
  id?: true
  tenantId?: true
  orderNumber?: true
  bomId?: true
  quantity?: true
  producedQty?: true
  status?: true
  assignedLine?: true
  plannedStartDate?: true
  plannedEndDate?: true
  createdAt?: true
  updatedAt?: true
}

export type WorkOrderCountAggregateInputType = {
  id?: true
  tenantId?: true
  orderNumber?: true
  bomId?: true
  quantity?: true
  producedQty?: true
  status?: true
  assignedLine?: true
  plannedStartDate?: true
  plannedEndDate?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type WorkOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WorkOrderWhereInput
  
  orderBy?: Prisma.WorkOrderOrderByWithRelationInput | Prisma.WorkOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | WorkOrderCountAggregateInputType
  
  _avg?: WorkOrderAvgAggregateInputType
  
  _sum?: WorkOrderSumAggregateInputType
  
  _min?: WorkOrderMinAggregateInputType
  
  _max?: WorkOrderMaxAggregateInputType
}

export type GetWorkOrderAggregateType<T extends WorkOrderAggregateArgs> = {
      [P in keyof T & keyof AggregateWorkOrder]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateWorkOrder[P]>
    : Prisma.GetScalarType<T[P], AggregateWorkOrder[P]>
}




export type WorkOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.WorkOrderWhereInput
  orderBy?: Prisma.WorkOrderOrderByWithAggregationInput | Prisma.WorkOrderOrderByWithAggregationInput[]
  by: Prisma.WorkOrderScalarFieldEnum[] | Prisma.WorkOrderScalarFieldEnum
  having?: Prisma.WorkOrderScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: WorkOrderCountAggregateInputType | true
  _avg?: WorkOrderAvgAggregateInputType
  _sum?: WorkOrderSumAggregateInputType
  _min?: WorkOrderMinAggregateInputType
  _max?: WorkOrderMaxAggregateInputType
}

export type WorkOrderGroupByOutputType = {
  id: string
  tenantId: string
  orderNumber: string
  bomId: string
  quantity: number
  producedQty: number
  status: $Enums.WorkOrderStatus
  assignedLine: string
  plannedStartDate: Date | null
  plannedEndDate: Date | null
  createdAt: Date
  updatedAt: Date
  _count: WorkOrderCountAggregateOutputType | null
  _avg: WorkOrderAvgAggregateOutputType | null
  _sum: WorkOrderSumAggregateOutputType | null
  _min: WorkOrderMinAggregateOutputType | null
  _max: WorkOrderMaxAggregateOutputType | null
}

export type GetWorkOrderGroupByPayload<T extends WorkOrderGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<WorkOrderGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof WorkOrderGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
      }
    >
  >



export type WorkOrderWhereInput = {
  AND?: Prisma.WorkOrderWhereInput | Prisma.WorkOrderWhereInput[]
  OR?: Prisma.WorkOrderWhereInput[]
  NOT?: Prisma.WorkOrderWhereInput | Prisma.WorkOrderWhereInput[]
  id?: Prisma.StringFilter<"WorkOrder"> | string
  tenantId?: Prisma.StringFilter<"WorkOrder"> | string
  orderNumber?: Prisma.StringFilter<"WorkOrder"> | string
  bomId?: Prisma.StringFilter<"WorkOrder"> | string
  quantity?: Prisma.IntFilter<"WorkOrder"> | number
  producedQty?: Prisma.IntFilter<"WorkOrder"> | number
  status?: Prisma.EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFilter<"WorkOrder"> | string
  plannedStartDate?: Prisma.DateTimeNullableFilter<"WorkOrder"> | Date | string | null
  plannedEndDate?: Prisma.DateTimeNullableFilter<"WorkOrder"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"WorkOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"WorkOrder"> | Date | string
  bom?: Prisma.XOR<Prisma.BillOfMaterialsScalarRelationFilter, Prisma.BillOfMaterialsWhereInput>
}

export type WorkOrderOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  bomId?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  producedQty?: Prisma.SortOrder
  status?: Prisma.SortOrder
  assignedLine?: Prisma.SortOrder
  plannedStartDate?: Prisma.SortOrderInput | Prisma.SortOrder
  plannedEndDate?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  bom?: Prisma.BillOfMaterialsOrderByWithRelationInput
}

export type WorkOrderWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  orderNumber?: string
  AND?: Prisma.WorkOrderWhereInput | Prisma.WorkOrderWhereInput[]
  OR?: Prisma.WorkOrderWhereInput[]
  NOT?: Prisma.WorkOrderWhereInput | Prisma.WorkOrderWhereInput[]
  tenantId?: Prisma.StringFilter<"WorkOrder"> | string
  bomId?: Prisma.StringFilter<"WorkOrder"> | string
  quantity?: Prisma.IntFilter<"WorkOrder"> | number
  producedQty?: Prisma.IntFilter<"WorkOrder"> | number
  status?: Prisma.EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFilter<"WorkOrder"> | string
  plannedStartDate?: Prisma.DateTimeNullableFilter<"WorkOrder"> | Date | string | null
  plannedEndDate?: Prisma.DateTimeNullableFilter<"WorkOrder"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"WorkOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"WorkOrder"> | Date | string
  bom?: Prisma.XOR<Prisma.BillOfMaterialsScalarRelationFilter, Prisma.BillOfMaterialsWhereInput>
}, "id" | "orderNumber">

export type WorkOrderOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  bomId?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  producedQty?: Prisma.SortOrder
  status?: Prisma.SortOrder
  assignedLine?: Prisma.SortOrder
  plannedStartDate?: Prisma.SortOrderInput | Prisma.SortOrder
  plannedEndDate?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.WorkOrderCountOrderByAggregateInput
  _avg?: Prisma.WorkOrderAvgOrderByAggregateInput
  _max?: Prisma.WorkOrderMaxOrderByAggregateInput
  _min?: Prisma.WorkOrderMinOrderByAggregateInput
  _sum?: Prisma.WorkOrderSumOrderByAggregateInput
}

export type WorkOrderScalarWhereWithAggregatesInput = {
  AND?: Prisma.WorkOrderScalarWhereWithAggregatesInput | Prisma.WorkOrderScalarWhereWithAggregatesInput[]
  OR?: Prisma.WorkOrderScalarWhereWithAggregatesInput[]
  NOT?: Prisma.WorkOrderScalarWhereWithAggregatesInput | Prisma.WorkOrderScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"WorkOrder"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"WorkOrder"> | string
  orderNumber?: Prisma.StringWithAggregatesFilter<"WorkOrder"> | string
  bomId?: Prisma.StringWithAggregatesFilter<"WorkOrder"> | string
  quantity?: Prisma.IntWithAggregatesFilter<"WorkOrder"> | number
  producedQty?: Prisma.IntWithAggregatesFilter<"WorkOrder"> | number
  status?: Prisma.EnumWorkOrderStatusWithAggregatesFilter<"WorkOrder"> | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringWithAggregatesFilter<"WorkOrder"> | string
  plannedStartDate?: Prisma.DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
  plannedEndDate?: Prisma.DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"WorkOrder"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WorkOrder"> | Date | string
}

export type WorkOrderCreateInput = {
  id?: string
  tenantId: string
  orderNumber: string
  quantity: number
  producedQty?: number
  status?: $Enums.WorkOrderStatus
  assignedLine: string
  plannedStartDate?: Date | string | null
  plannedEndDate?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  bom: Prisma.BillOfMaterialsCreateNestedOneWithoutWorkOrdersInput
}

export type WorkOrderUncheckedCreateInput = {
  id?: string
  tenantId: string
  orderNumber: string
  bomId: string
  quantity: number
  producedQty?: number
  status?: $Enums.WorkOrderStatus
  assignedLine: string
  plannedStartDate?: Date | string | null
  plannedEndDate?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkOrderUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  producedQty?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFieldUpdateOperationsInput | string
  plannedStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  plannedEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  bom?: Prisma.BillOfMaterialsUpdateOneRequiredWithoutWorkOrdersNestedInput
}

export type WorkOrderUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  bomId?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  producedQty?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFieldUpdateOperationsInput | string
  plannedStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  plannedEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkOrderCreateManyInput = {
  id?: string
  tenantId: string
  orderNumber: string
  bomId: string
  quantity: number
  producedQty?: number
  status?: $Enums.WorkOrderStatus
  assignedLine: string
  plannedStartDate?: Date | string | null
  plannedEndDate?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkOrderUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  producedQty?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFieldUpdateOperationsInput | string
  plannedStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  plannedEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkOrderUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  bomId?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  producedQty?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFieldUpdateOperationsInput | string
  plannedStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  plannedEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkOrderListRelationFilter = {
  every?: Prisma.WorkOrderWhereInput
  some?: Prisma.WorkOrderWhereInput
  none?: Prisma.WorkOrderWhereInput
}

export type WorkOrderOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type WorkOrderCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  bomId?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  producedQty?: Prisma.SortOrder
  status?: Prisma.SortOrder
  assignedLine?: Prisma.SortOrder
  plannedStartDate?: Prisma.SortOrder
  plannedEndDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WorkOrderAvgOrderByAggregateInput = {
  quantity?: Prisma.SortOrder
  producedQty?: Prisma.SortOrder
}

export type WorkOrderMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  bomId?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  producedQty?: Prisma.SortOrder
  status?: Prisma.SortOrder
  assignedLine?: Prisma.SortOrder
  plannedStartDate?: Prisma.SortOrder
  plannedEndDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WorkOrderMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  bomId?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  producedQty?: Prisma.SortOrder
  status?: Prisma.SortOrder
  assignedLine?: Prisma.SortOrder
  plannedStartDate?: Prisma.SortOrder
  plannedEndDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WorkOrderSumOrderByAggregateInput = {
  quantity?: Prisma.SortOrder
  producedQty?: Prisma.SortOrder
}

export type WorkOrderCreateNestedManyWithoutBomInput = {
  create?: Prisma.XOR<Prisma.WorkOrderCreateWithoutBomInput, Prisma.WorkOrderUncheckedCreateWithoutBomInput> | Prisma.WorkOrderCreateWithoutBomInput[] | Prisma.WorkOrderUncheckedCreateWithoutBomInput[]
  connectOrCreate?: Prisma.WorkOrderCreateOrConnectWithoutBomInput | Prisma.WorkOrderCreateOrConnectWithoutBomInput[]
  createMany?: Prisma.WorkOrderCreateManyBomInputEnvelope
  connect?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
}

export type WorkOrderUncheckedCreateNestedManyWithoutBomInput = {
  create?: Prisma.XOR<Prisma.WorkOrderCreateWithoutBomInput, Prisma.WorkOrderUncheckedCreateWithoutBomInput> | Prisma.WorkOrderCreateWithoutBomInput[] | Prisma.WorkOrderUncheckedCreateWithoutBomInput[]
  connectOrCreate?: Prisma.WorkOrderCreateOrConnectWithoutBomInput | Prisma.WorkOrderCreateOrConnectWithoutBomInput[]
  createMany?: Prisma.WorkOrderCreateManyBomInputEnvelope
  connect?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
}

export type WorkOrderUpdateManyWithoutBomNestedInput = {
  create?: Prisma.XOR<Prisma.WorkOrderCreateWithoutBomInput, Prisma.WorkOrderUncheckedCreateWithoutBomInput> | Prisma.WorkOrderCreateWithoutBomInput[] | Prisma.WorkOrderUncheckedCreateWithoutBomInput[]
  connectOrCreate?: Prisma.WorkOrderCreateOrConnectWithoutBomInput | Prisma.WorkOrderCreateOrConnectWithoutBomInput[]
  upsert?: Prisma.WorkOrderUpsertWithWhereUniqueWithoutBomInput | Prisma.WorkOrderUpsertWithWhereUniqueWithoutBomInput[]
  createMany?: Prisma.WorkOrderCreateManyBomInputEnvelope
  set?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  disconnect?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  delete?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  connect?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  update?: Prisma.WorkOrderUpdateWithWhereUniqueWithoutBomInput | Prisma.WorkOrderUpdateWithWhereUniqueWithoutBomInput[]
  updateMany?: Prisma.WorkOrderUpdateManyWithWhereWithoutBomInput | Prisma.WorkOrderUpdateManyWithWhereWithoutBomInput[]
  deleteMany?: Prisma.WorkOrderScalarWhereInput | Prisma.WorkOrderScalarWhereInput[]
}

export type WorkOrderUncheckedUpdateManyWithoutBomNestedInput = {
  create?: Prisma.XOR<Prisma.WorkOrderCreateWithoutBomInput, Prisma.WorkOrderUncheckedCreateWithoutBomInput> | Prisma.WorkOrderCreateWithoutBomInput[] | Prisma.WorkOrderUncheckedCreateWithoutBomInput[]
  connectOrCreate?: Prisma.WorkOrderCreateOrConnectWithoutBomInput | Prisma.WorkOrderCreateOrConnectWithoutBomInput[]
  upsert?: Prisma.WorkOrderUpsertWithWhereUniqueWithoutBomInput | Prisma.WorkOrderUpsertWithWhereUniqueWithoutBomInput[]
  createMany?: Prisma.WorkOrderCreateManyBomInputEnvelope
  set?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  disconnect?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  delete?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  connect?: Prisma.WorkOrderWhereUniqueInput | Prisma.WorkOrderWhereUniqueInput[]
  update?: Prisma.WorkOrderUpdateWithWhereUniqueWithoutBomInput | Prisma.WorkOrderUpdateWithWhereUniqueWithoutBomInput[]
  updateMany?: Prisma.WorkOrderUpdateManyWithWhereWithoutBomInput | Prisma.WorkOrderUpdateManyWithWhereWithoutBomInput[]
  deleteMany?: Prisma.WorkOrderScalarWhereInput | Prisma.WorkOrderScalarWhereInput[]
}

export type EnumWorkOrderStatusFieldUpdateOperationsInput = {
  set?: $Enums.WorkOrderStatus
}

export type WorkOrderCreateWithoutBomInput = {
  id?: string
  tenantId: string
  orderNumber: string
  quantity: number
  producedQty?: number
  status?: $Enums.WorkOrderStatus
  assignedLine: string
  plannedStartDate?: Date | string | null
  plannedEndDate?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkOrderUncheckedCreateWithoutBomInput = {
  id?: string
  tenantId: string
  orderNumber: string
  quantity: number
  producedQty?: number
  status?: $Enums.WorkOrderStatus
  assignedLine: string
  plannedStartDate?: Date | string | null
  plannedEndDate?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkOrderCreateOrConnectWithoutBomInput = {
  where: Prisma.WorkOrderWhereUniqueInput
  create: Prisma.XOR<Prisma.WorkOrderCreateWithoutBomInput, Prisma.WorkOrderUncheckedCreateWithoutBomInput>
}

export type WorkOrderCreateManyBomInputEnvelope = {
  data: Prisma.WorkOrderCreateManyBomInput | Prisma.WorkOrderCreateManyBomInput[]
  skipDuplicates?: boolean
}

export type WorkOrderUpsertWithWhereUniqueWithoutBomInput = {
  where: Prisma.WorkOrderWhereUniqueInput
  update: Prisma.XOR<Prisma.WorkOrderUpdateWithoutBomInput, Prisma.WorkOrderUncheckedUpdateWithoutBomInput>
  create: Prisma.XOR<Prisma.WorkOrderCreateWithoutBomInput, Prisma.WorkOrderUncheckedCreateWithoutBomInput>
}

export type WorkOrderUpdateWithWhereUniqueWithoutBomInput = {
  where: Prisma.WorkOrderWhereUniqueInput
  data: Prisma.XOR<Prisma.WorkOrderUpdateWithoutBomInput, Prisma.WorkOrderUncheckedUpdateWithoutBomInput>
}

export type WorkOrderUpdateManyWithWhereWithoutBomInput = {
  where: Prisma.WorkOrderScalarWhereInput
  data: Prisma.XOR<Prisma.WorkOrderUpdateManyMutationInput, Prisma.WorkOrderUncheckedUpdateManyWithoutBomInput>
}

export type WorkOrderScalarWhereInput = {
  AND?: Prisma.WorkOrderScalarWhereInput | Prisma.WorkOrderScalarWhereInput[]
  OR?: Prisma.WorkOrderScalarWhereInput[]
  NOT?: Prisma.WorkOrderScalarWhereInput | Prisma.WorkOrderScalarWhereInput[]
  id?: Prisma.StringFilter<"WorkOrder"> | string
  tenantId?: Prisma.StringFilter<"WorkOrder"> | string
  orderNumber?: Prisma.StringFilter<"WorkOrder"> | string
  bomId?: Prisma.StringFilter<"WorkOrder"> | string
  quantity?: Prisma.IntFilter<"WorkOrder"> | number
  producedQty?: Prisma.IntFilter<"WorkOrder"> | number
  status?: Prisma.EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFilter<"WorkOrder"> | string
  plannedStartDate?: Prisma.DateTimeNullableFilter<"WorkOrder"> | Date | string | null
  plannedEndDate?: Prisma.DateTimeNullableFilter<"WorkOrder"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"WorkOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"WorkOrder"> | Date | string
}

export type WorkOrderCreateManyBomInput = {
  id?: string
  tenantId: string
  orderNumber: string
  quantity: number
  producedQty?: number
  status?: $Enums.WorkOrderStatus
  assignedLine: string
  plannedStartDate?: Date | string | null
  plannedEndDate?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkOrderUpdateWithoutBomInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  producedQty?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFieldUpdateOperationsInput | string
  plannedStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  plannedEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkOrderUncheckedUpdateWithoutBomInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  producedQty?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFieldUpdateOperationsInput | string
  plannedStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  plannedEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkOrderUncheckedUpdateManyWithoutBomInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  producedQty?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
  assignedLine?: Prisma.StringFieldUpdateOperationsInput | string
  plannedStartDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  plannedEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type WorkOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  bomId?: boolean
  quantity?: boolean
  producedQty?: boolean
  status?: boolean
  assignedLine?: boolean
  plannedStartDate?: boolean
  plannedEndDate?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  bom?: boolean | Prisma.BillOfMaterialsDefaultArgs<ExtArgs>
}, ExtArgs["result"]["workOrder"]>

export type WorkOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  bomId?: boolean
  quantity?: boolean
  producedQty?: boolean
  status?: boolean
  assignedLine?: boolean
  plannedStartDate?: boolean
  plannedEndDate?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  bom?: boolean | Prisma.BillOfMaterialsDefaultArgs<ExtArgs>
}, ExtArgs["result"]["workOrder"]>

export type WorkOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  bomId?: boolean
  quantity?: boolean
  producedQty?: boolean
  status?: boolean
  assignedLine?: boolean
  plannedStartDate?: boolean
  plannedEndDate?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  bom?: boolean | Prisma.BillOfMaterialsDefaultArgs<ExtArgs>
}, ExtArgs["result"]["workOrder"]>

export type WorkOrderSelectScalar = {
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  bomId?: boolean
  quantity?: boolean
  producedQty?: boolean
  status?: boolean
  assignedLine?: boolean
  plannedStartDate?: boolean
  plannedEndDate?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type WorkOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "orderNumber" | "bomId" | "quantity" | "producedQty" | "status" | "assignedLine" | "plannedStartDate" | "plannedEndDate" | "createdAt" | "updatedAt", ExtArgs["result"]["workOrder"]>
export type WorkOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  bom?: boolean | Prisma.BillOfMaterialsDefaultArgs<ExtArgs>
}
export type WorkOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  bom?: boolean | Prisma.BillOfMaterialsDefaultArgs<ExtArgs>
}
export type WorkOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  bom?: boolean | Prisma.BillOfMaterialsDefaultArgs<ExtArgs>
}

export type $WorkOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "WorkOrder"
  objects: {
    bom: Prisma.$BillOfMaterialsPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    orderNumber: string
    bomId: string
    quantity: number
    producedQty: number
    status: $Enums.WorkOrderStatus
    assignedLine: string
    plannedStartDate: Date | null
    plannedEndDate: Date | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["workOrder"]>
  composites: {}
}

export type WorkOrderGetPayload<S extends boolean | null | undefined | WorkOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload, S>

export type WorkOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<WorkOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkOrderCountAggregateInputType | true
  }

export interface WorkOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkOrder'], meta: { name: 'WorkOrder' } }
  
  findUnique<T extends WorkOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends WorkOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends WorkOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends WorkOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends WorkOrderFindManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends WorkOrderCreateArgs>(args: Prisma.SelectSubset<T, WorkOrderCreateArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends WorkOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends WorkOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends WorkOrderDeleteArgs>(args: Prisma.SelectSubset<T, WorkOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends WorkOrderUpdateArgs>(args: Prisma.SelectSubset<T, WorkOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends WorkOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends WorkOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends WorkOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends WorkOrderUpsertArgs>(args: Prisma.SelectSubset<T, WorkOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkOrderClient<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends WorkOrderCountArgs>(
    args?: Prisma.Subset<T, WorkOrderCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], WorkOrderCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends WorkOrderAggregateArgs>(args: Prisma.Subset<T, WorkOrderAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderAggregateType<T>>

  
  groupBy<
    T extends WorkOrderGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: WorkOrderGroupByArgs['orderBy'] }
      : { orderBy?: WorkOrderGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, WorkOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: WorkOrderFieldRefs;
}


export interface Prisma__WorkOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  bom<T extends Prisma.BillOfMaterialsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillOfMaterialsDefaultArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface WorkOrderFieldRefs {
  readonly id: Prisma.FieldRef<"WorkOrder", 'String'>
  readonly tenantId: Prisma.FieldRef<"WorkOrder", 'String'>
  readonly orderNumber: Prisma.FieldRef<"WorkOrder", 'String'>
  readonly bomId: Prisma.FieldRef<"WorkOrder", 'String'>
  readonly quantity: Prisma.FieldRef<"WorkOrder", 'Int'>
  readonly producedQty: Prisma.FieldRef<"WorkOrder", 'Int'>
  readonly status: Prisma.FieldRef<"WorkOrder", 'WorkOrderStatus'>
  readonly assignedLine: Prisma.FieldRef<"WorkOrder", 'String'>
  readonly plannedStartDate: Prisma.FieldRef<"WorkOrder", 'DateTime'>
  readonly plannedEndDate: Prisma.FieldRef<"WorkOrder", 'DateTime'>
  readonly createdAt: Prisma.FieldRef<"WorkOrder", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"WorkOrder", 'DateTime'>
}
    



export type WorkOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  where: Prisma.WorkOrderWhereUniqueInput
}


export type WorkOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  where: Prisma.WorkOrderWhereUniqueInput
}


export type WorkOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  where?: Prisma.WorkOrderWhereInput
  
  orderBy?: Prisma.WorkOrderOrderByWithRelationInput | Prisma.WorkOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WorkOrderScalarFieldEnum | Prisma.WorkOrderScalarFieldEnum[]
}


export type WorkOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  where?: Prisma.WorkOrderWhereInput
  
  orderBy?: Prisma.WorkOrderOrderByWithRelationInput | Prisma.WorkOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WorkOrderScalarFieldEnum | Prisma.WorkOrderScalarFieldEnum[]
}


export type WorkOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  where?: Prisma.WorkOrderWhereInput
  
  orderBy?: Prisma.WorkOrderOrderByWithRelationInput | Prisma.WorkOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WorkOrderScalarFieldEnum | Prisma.WorkOrderScalarFieldEnum[]
}


export type WorkOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WorkOrderCreateInput, Prisma.WorkOrderUncheckedCreateInput>
}


export type WorkOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.WorkOrderCreateManyInput | Prisma.WorkOrderCreateManyInput[]
  skipDuplicates?: boolean
}


export type WorkOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  data: Prisma.WorkOrderCreateManyInput | Prisma.WorkOrderCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.WorkOrderIncludeCreateManyAndReturn<ExtArgs> | null
}


export type WorkOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WorkOrderUpdateInput, Prisma.WorkOrderUncheckedUpdateInput>
  
  where: Prisma.WorkOrderWhereUniqueInput
}


export type WorkOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.WorkOrderUpdateManyMutationInput, Prisma.WorkOrderUncheckedUpdateManyInput>
  
  where?: Prisma.WorkOrderWhereInput
  
  limit?: number
}


export type WorkOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WorkOrderUpdateManyMutationInput, Prisma.WorkOrderUncheckedUpdateManyInput>
  
  where?: Prisma.WorkOrderWhereInput
  
  limit?: number
  
  include?: Prisma.WorkOrderIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type WorkOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  where: Prisma.WorkOrderWhereUniqueInput
  
  create: Prisma.XOR<Prisma.WorkOrderCreateInput, Prisma.WorkOrderUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.WorkOrderUpdateInput, Prisma.WorkOrderUncheckedUpdateInput>
}


export type WorkOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
  
  where: Prisma.WorkOrderWhereUniqueInput
}


export type WorkOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WorkOrderWhereInput
  
  limit?: number
}


export type WorkOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkOrderSelect<ExtArgs> | null
  
  omit?: Prisma.WorkOrderOmit<ExtArgs> | null
  
  include?: Prisma.WorkOrderInclude<ExtArgs> | null
}
