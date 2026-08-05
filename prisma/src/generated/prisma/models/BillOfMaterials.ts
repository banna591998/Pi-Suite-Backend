





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type BillOfMaterialsModel = runtime.Types.Result.DefaultSelection<Prisma.$BillOfMaterialsPayload>

export type AggregateBillOfMaterials = {
  _count: BillOfMaterialsCountAggregateOutputType | null
  _avg: BillOfMaterialsAvgAggregateOutputType | null
  _sum: BillOfMaterialsSumAggregateOutputType | null
  _min: BillOfMaterialsMinAggregateOutputType | null
  _max: BillOfMaterialsMaxAggregateOutputType | null
}

export type BillOfMaterialsAvgAggregateOutputType = {
  version: number | null
  totalCost: number | null
}

export type BillOfMaterialsSumAggregateOutputType = {
  version: number | null
  totalCost: number | null
}

export type BillOfMaterialsMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  itemId: string | null
  productName: string | null
  version: number | null
  isActive: boolean | null
  isDefault: boolean | null
  totalCost: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type BillOfMaterialsMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  itemId: string | null
  productName: string | null
  version: number | null
  isActive: boolean | null
  isDefault: boolean | null
  totalCost: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type BillOfMaterialsCountAggregateOutputType = {
  id: number
  tenantId: number
  itemId: number
  productName: number
  rawMaterials: number
  operations: number
  version: number
  isActive: number
  isDefault: number
  totalCost: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type BillOfMaterialsAvgAggregateInputType = {
  version?: true
  totalCost?: true
}

export type BillOfMaterialsSumAggregateInputType = {
  version?: true
  totalCost?: true
}

export type BillOfMaterialsMinAggregateInputType = {
  id?: true
  tenantId?: true
  itemId?: true
  productName?: true
  version?: true
  isActive?: true
  isDefault?: true
  totalCost?: true
  createdAt?: true
  updatedAt?: true
}

export type BillOfMaterialsMaxAggregateInputType = {
  id?: true
  tenantId?: true
  itemId?: true
  productName?: true
  version?: true
  isActive?: true
  isDefault?: true
  totalCost?: true
  createdAt?: true
  updatedAt?: true
}

export type BillOfMaterialsCountAggregateInputType = {
  id?: true
  tenantId?: true
  itemId?: true
  productName?: true
  rawMaterials?: true
  operations?: true
  version?: true
  isActive?: true
  isDefault?: true
  totalCost?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type BillOfMaterialsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.BillOfMaterialsWhereInput
  
  orderBy?: Prisma.BillOfMaterialsOrderByWithRelationInput | Prisma.BillOfMaterialsOrderByWithRelationInput[]
  
  cursor?: Prisma.BillOfMaterialsWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | BillOfMaterialsCountAggregateInputType
  
  _avg?: BillOfMaterialsAvgAggregateInputType
  
  _sum?: BillOfMaterialsSumAggregateInputType
  
  _min?: BillOfMaterialsMinAggregateInputType
  
  _max?: BillOfMaterialsMaxAggregateInputType
}

export type GetBillOfMaterialsAggregateType<T extends BillOfMaterialsAggregateArgs> = {
      [P in keyof T & keyof AggregateBillOfMaterials]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateBillOfMaterials[P]>
    : Prisma.GetScalarType<T[P], AggregateBillOfMaterials[P]>
}




export type BillOfMaterialsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.BillOfMaterialsWhereInput
  orderBy?: Prisma.BillOfMaterialsOrderByWithAggregationInput | Prisma.BillOfMaterialsOrderByWithAggregationInput[]
  by: Prisma.BillOfMaterialsScalarFieldEnum[] | Prisma.BillOfMaterialsScalarFieldEnum
  having?: Prisma.BillOfMaterialsScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: BillOfMaterialsCountAggregateInputType | true
  _avg?: BillOfMaterialsAvgAggregateInputType
  _sum?: BillOfMaterialsSumAggregateInputType
  _min?: BillOfMaterialsMinAggregateInputType
  _max?: BillOfMaterialsMaxAggregateInputType
}

export type BillOfMaterialsGroupByOutputType = {
  id: string
  tenantId: string
  itemId: string
  productName: string
  rawMaterials: runtime.JsonValue
  operations: runtime.JsonValue | null
  version: number
  isActive: boolean
  isDefault: boolean
  totalCost: number
  createdAt: Date
  updatedAt: Date
  _count: BillOfMaterialsCountAggregateOutputType | null
  _avg: BillOfMaterialsAvgAggregateOutputType | null
  _sum: BillOfMaterialsSumAggregateOutputType | null
  _min: BillOfMaterialsMinAggregateOutputType | null
  _max: BillOfMaterialsMaxAggregateOutputType | null
}

export type GetBillOfMaterialsGroupByPayload<T extends BillOfMaterialsGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<BillOfMaterialsGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof BillOfMaterialsGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], BillOfMaterialsGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], BillOfMaterialsGroupByOutputType[P]>
      }
    >
  >



export type BillOfMaterialsWhereInput = {
  AND?: Prisma.BillOfMaterialsWhereInput | Prisma.BillOfMaterialsWhereInput[]
  OR?: Prisma.BillOfMaterialsWhereInput[]
  NOT?: Prisma.BillOfMaterialsWhereInput | Prisma.BillOfMaterialsWhereInput[]
  id?: Prisma.StringFilter<"BillOfMaterials"> | string
  tenantId?: Prisma.StringFilter<"BillOfMaterials"> | string
  itemId?: Prisma.StringFilter<"BillOfMaterials"> | string
  productName?: Prisma.StringFilter<"BillOfMaterials"> | string
  rawMaterials?: Prisma.JsonFilter<"BillOfMaterials">
  operations?: Prisma.JsonNullableFilter<"BillOfMaterials">
  version?: Prisma.IntFilter<"BillOfMaterials"> | number
  isActive?: Prisma.BoolFilter<"BillOfMaterials"> | boolean
  isDefault?: Prisma.BoolFilter<"BillOfMaterials"> | boolean
  totalCost?: Prisma.FloatFilter<"BillOfMaterials"> | number
  createdAt?: Prisma.DateTimeFilter<"BillOfMaterials"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"BillOfMaterials"> | Date | string
  item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>
  workOrders?: Prisma.WorkOrderListRelationFilter
}

export type BillOfMaterialsOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  itemId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  rawMaterials?: Prisma.SortOrder
  operations?: Prisma.SortOrderInput | Prisma.SortOrder
  version?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  isDefault?: Prisma.SortOrder
  totalCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  item?: Prisma.ItemOrderByWithRelationInput
  workOrders?: Prisma.WorkOrderOrderByRelationAggregateInput
}

export type BillOfMaterialsWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.BillOfMaterialsWhereInput | Prisma.BillOfMaterialsWhereInput[]
  OR?: Prisma.BillOfMaterialsWhereInput[]
  NOT?: Prisma.BillOfMaterialsWhereInput | Prisma.BillOfMaterialsWhereInput[]
  tenantId?: Prisma.StringFilter<"BillOfMaterials"> | string
  itemId?: Prisma.StringFilter<"BillOfMaterials"> | string
  productName?: Prisma.StringFilter<"BillOfMaterials"> | string
  rawMaterials?: Prisma.JsonFilter<"BillOfMaterials">
  operations?: Prisma.JsonNullableFilter<"BillOfMaterials">
  version?: Prisma.IntFilter<"BillOfMaterials"> | number
  isActive?: Prisma.BoolFilter<"BillOfMaterials"> | boolean
  isDefault?: Prisma.BoolFilter<"BillOfMaterials"> | boolean
  totalCost?: Prisma.FloatFilter<"BillOfMaterials"> | number
  createdAt?: Prisma.DateTimeFilter<"BillOfMaterials"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"BillOfMaterials"> | Date | string
  item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>
  workOrders?: Prisma.WorkOrderListRelationFilter
}, "id">

export type BillOfMaterialsOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  itemId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  rawMaterials?: Prisma.SortOrder
  operations?: Prisma.SortOrderInput | Prisma.SortOrder
  version?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  isDefault?: Prisma.SortOrder
  totalCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.BillOfMaterialsCountOrderByAggregateInput
  _avg?: Prisma.BillOfMaterialsAvgOrderByAggregateInput
  _max?: Prisma.BillOfMaterialsMaxOrderByAggregateInput
  _min?: Prisma.BillOfMaterialsMinOrderByAggregateInput
  _sum?: Prisma.BillOfMaterialsSumOrderByAggregateInput
}

export type BillOfMaterialsScalarWhereWithAggregatesInput = {
  AND?: Prisma.BillOfMaterialsScalarWhereWithAggregatesInput | Prisma.BillOfMaterialsScalarWhereWithAggregatesInput[]
  OR?: Prisma.BillOfMaterialsScalarWhereWithAggregatesInput[]
  NOT?: Prisma.BillOfMaterialsScalarWhereWithAggregatesInput | Prisma.BillOfMaterialsScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"BillOfMaterials"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"BillOfMaterials"> | string
  itemId?: Prisma.StringWithAggregatesFilter<"BillOfMaterials"> | string
  productName?: Prisma.StringWithAggregatesFilter<"BillOfMaterials"> | string
  rawMaterials?: Prisma.JsonWithAggregatesFilter<"BillOfMaterials">
  operations?: Prisma.JsonNullableWithAggregatesFilter<"BillOfMaterials">
  version?: Prisma.IntWithAggregatesFilter<"BillOfMaterials"> | number
  isActive?: Prisma.BoolWithAggregatesFilter<"BillOfMaterials"> | boolean
  isDefault?: Prisma.BoolWithAggregatesFilter<"BillOfMaterials"> | boolean
  totalCost?: Prisma.FloatWithAggregatesFilter<"BillOfMaterials"> | number
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"BillOfMaterials"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BillOfMaterials"> | Date | string
}

export type BillOfMaterialsCreateInput = {
  id?: string
  tenantId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
  item: Prisma.ItemCreateNestedOneWithoutBomsInput
  workOrders?: Prisma.WorkOrderCreateNestedManyWithoutBomInput
}

export type BillOfMaterialsUncheckedCreateInput = {
  id?: string
  tenantId: string
  itemId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
  workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutBomInput
}

export type BillOfMaterialsUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  item?: Prisma.ItemUpdateOneRequiredWithoutBomsNestedInput
  workOrders?: Prisma.WorkOrderUpdateManyWithoutBomNestedInput
}

export type BillOfMaterialsUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutBomNestedInput
}

export type BillOfMaterialsCreateManyInput = {
  id?: string
  tenantId: string
  itemId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type BillOfMaterialsUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type BillOfMaterialsUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type BillOfMaterialsListRelationFilter = {
  every?: Prisma.BillOfMaterialsWhereInput
  some?: Prisma.BillOfMaterialsWhereInput
  none?: Prisma.BillOfMaterialsWhereInput
}

export type BillOfMaterialsOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type BillOfMaterialsCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  itemId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  rawMaterials?: Prisma.SortOrder
  operations?: Prisma.SortOrder
  version?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  isDefault?: Prisma.SortOrder
  totalCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type BillOfMaterialsAvgOrderByAggregateInput = {
  version?: Prisma.SortOrder
  totalCost?: Prisma.SortOrder
}

export type BillOfMaterialsMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  itemId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  version?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  isDefault?: Prisma.SortOrder
  totalCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type BillOfMaterialsMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  itemId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  version?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  isDefault?: Prisma.SortOrder
  totalCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type BillOfMaterialsSumOrderByAggregateInput = {
  version?: Prisma.SortOrder
  totalCost?: Prisma.SortOrder
}

export type BillOfMaterialsScalarRelationFilter = {
  is?: Prisma.BillOfMaterialsWhereInput
  isNot?: Prisma.BillOfMaterialsWhereInput
}

export type BillOfMaterialsCreateNestedManyWithoutItemInput = {
  create?: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutItemInput, Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput> | Prisma.BillOfMaterialsCreateWithoutItemInput[] | Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput[]
  connectOrCreate?: Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput | Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput[]
  createMany?: Prisma.BillOfMaterialsCreateManyItemInputEnvelope
  connect?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
}

export type BillOfMaterialsUncheckedCreateNestedManyWithoutItemInput = {
  create?: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutItemInput, Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput> | Prisma.BillOfMaterialsCreateWithoutItemInput[] | Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput[]
  connectOrCreate?: Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput | Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput[]
  createMany?: Prisma.BillOfMaterialsCreateManyItemInputEnvelope
  connect?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
}

export type BillOfMaterialsUpdateManyWithoutItemNestedInput = {
  create?: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutItemInput, Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput> | Prisma.BillOfMaterialsCreateWithoutItemInput[] | Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput[]
  connectOrCreate?: Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput | Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput[]
  upsert?: Prisma.BillOfMaterialsUpsertWithWhereUniqueWithoutItemInput | Prisma.BillOfMaterialsUpsertWithWhereUniqueWithoutItemInput[]
  createMany?: Prisma.BillOfMaterialsCreateManyItemInputEnvelope
  set?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  disconnect?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  delete?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  connect?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  update?: Prisma.BillOfMaterialsUpdateWithWhereUniqueWithoutItemInput | Prisma.BillOfMaterialsUpdateWithWhereUniqueWithoutItemInput[]
  updateMany?: Prisma.BillOfMaterialsUpdateManyWithWhereWithoutItemInput | Prisma.BillOfMaterialsUpdateManyWithWhereWithoutItemInput[]
  deleteMany?: Prisma.BillOfMaterialsScalarWhereInput | Prisma.BillOfMaterialsScalarWhereInput[]
}

export type BillOfMaterialsUncheckedUpdateManyWithoutItemNestedInput = {
  create?: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutItemInput, Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput> | Prisma.BillOfMaterialsCreateWithoutItemInput[] | Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput[]
  connectOrCreate?: Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput | Prisma.BillOfMaterialsCreateOrConnectWithoutItemInput[]
  upsert?: Prisma.BillOfMaterialsUpsertWithWhereUniqueWithoutItemInput | Prisma.BillOfMaterialsUpsertWithWhereUniqueWithoutItemInput[]
  createMany?: Prisma.BillOfMaterialsCreateManyItemInputEnvelope
  set?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  disconnect?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  delete?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  connect?: Prisma.BillOfMaterialsWhereUniqueInput | Prisma.BillOfMaterialsWhereUniqueInput[]
  update?: Prisma.BillOfMaterialsUpdateWithWhereUniqueWithoutItemInput | Prisma.BillOfMaterialsUpdateWithWhereUniqueWithoutItemInput[]
  updateMany?: Prisma.BillOfMaterialsUpdateManyWithWhereWithoutItemInput | Prisma.BillOfMaterialsUpdateManyWithWhereWithoutItemInput[]
  deleteMany?: Prisma.BillOfMaterialsScalarWhereInput | Prisma.BillOfMaterialsScalarWhereInput[]
}

export type BillOfMaterialsCreateNestedOneWithoutWorkOrdersInput = {
  create?: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutWorkOrdersInput, Prisma.BillOfMaterialsUncheckedCreateWithoutWorkOrdersInput>
  connectOrCreate?: Prisma.BillOfMaterialsCreateOrConnectWithoutWorkOrdersInput
  connect?: Prisma.BillOfMaterialsWhereUniqueInput
}

export type BillOfMaterialsUpdateOneRequiredWithoutWorkOrdersNestedInput = {
  create?: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutWorkOrdersInput, Prisma.BillOfMaterialsUncheckedCreateWithoutWorkOrdersInput>
  connectOrCreate?: Prisma.BillOfMaterialsCreateOrConnectWithoutWorkOrdersInput
  upsert?: Prisma.BillOfMaterialsUpsertWithoutWorkOrdersInput
  connect?: Prisma.BillOfMaterialsWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.BillOfMaterialsUpdateToOneWithWhereWithoutWorkOrdersInput, Prisma.BillOfMaterialsUpdateWithoutWorkOrdersInput>, Prisma.BillOfMaterialsUncheckedUpdateWithoutWorkOrdersInput>
}

export type BillOfMaterialsCreateWithoutItemInput = {
  id?: string
  tenantId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
  workOrders?: Prisma.WorkOrderCreateNestedManyWithoutBomInput
}

export type BillOfMaterialsUncheckedCreateWithoutItemInput = {
  id?: string
  tenantId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
  workOrders?: Prisma.WorkOrderUncheckedCreateNestedManyWithoutBomInput
}

export type BillOfMaterialsCreateOrConnectWithoutItemInput = {
  where: Prisma.BillOfMaterialsWhereUniqueInput
  create: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutItemInput, Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput>
}

export type BillOfMaterialsCreateManyItemInputEnvelope = {
  data: Prisma.BillOfMaterialsCreateManyItemInput | Prisma.BillOfMaterialsCreateManyItemInput[]
  skipDuplicates?: boolean
}

export type BillOfMaterialsUpsertWithWhereUniqueWithoutItemInput = {
  where: Prisma.BillOfMaterialsWhereUniqueInput
  update: Prisma.XOR<Prisma.BillOfMaterialsUpdateWithoutItemInput, Prisma.BillOfMaterialsUncheckedUpdateWithoutItemInput>
  create: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutItemInput, Prisma.BillOfMaterialsUncheckedCreateWithoutItemInput>
}

export type BillOfMaterialsUpdateWithWhereUniqueWithoutItemInput = {
  where: Prisma.BillOfMaterialsWhereUniqueInput
  data: Prisma.XOR<Prisma.BillOfMaterialsUpdateWithoutItemInput, Prisma.BillOfMaterialsUncheckedUpdateWithoutItemInput>
}

export type BillOfMaterialsUpdateManyWithWhereWithoutItemInput = {
  where: Prisma.BillOfMaterialsScalarWhereInput
  data: Prisma.XOR<Prisma.BillOfMaterialsUpdateManyMutationInput, Prisma.BillOfMaterialsUncheckedUpdateManyWithoutItemInput>
}

export type BillOfMaterialsScalarWhereInput = {
  AND?: Prisma.BillOfMaterialsScalarWhereInput | Prisma.BillOfMaterialsScalarWhereInput[]
  OR?: Prisma.BillOfMaterialsScalarWhereInput[]
  NOT?: Prisma.BillOfMaterialsScalarWhereInput | Prisma.BillOfMaterialsScalarWhereInput[]
  id?: Prisma.StringFilter<"BillOfMaterials"> | string
  tenantId?: Prisma.StringFilter<"BillOfMaterials"> | string
  itemId?: Prisma.StringFilter<"BillOfMaterials"> | string
  productName?: Prisma.StringFilter<"BillOfMaterials"> | string
  rawMaterials?: Prisma.JsonFilter<"BillOfMaterials">
  operations?: Prisma.JsonNullableFilter<"BillOfMaterials">
  version?: Prisma.IntFilter<"BillOfMaterials"> | number
  isActive?: Prisma.BoolFilter<"BillOfMaterials"> | boolean
  isDefault?: Prisma.BoolFilter<"BillOfMaterials"> | boolean
  totalCost?: Prisma.FloatFilter<"BillOfMaterials"> | number
  createdAt?: Prisma.DateTimeFilter<"BillOfMaterials"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"BillOfMaterials"> | Date | string
}

export type BillOfMaterialsCreateWithoutWorkOrdersInput = {
  id?: string
  tenantId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
  item: Prisma.ItemCreateNestedOneWithoutBomsInput
}

export type BillOfMaterialsUncheckedCreateWithoutWorkOrdersInput = {
  id?: string
  tenantId: string
  itemId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type BillOfMaterialsCreateOrConnectWithoutWorkOrdersInput = {
  where: Prisma.BillOfMaterialsWhereUniqueInput
  create: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutWorkOrdersInput, Prisma.BillOfMaterialsUncheckedCreateWithoutWorkOrdersInput>
}

export type BillOfMaterialsUpsertWithoutWorkOrdersInput = {
  update: Prisma.XOR<Prisma.BillOfMaterialsUpdateWithoutWorkOrdersInput, Prisma.BillOfMaterialsUncheckedUpdateWithoutWorkOrdersInput>
  create: Prisma.XOR<Prisma.BillOfMaterialsCreateWithoutWorkOrdersInput, Prisma.BillOfMaterialsUncheckedCreateWithoutWorkOrdersInput>
  where?: Prisma.BillOfMaterialsWhereInput
}

export type BillOfMaterialsUpdateToOneWithWhereWithoutWorkOrdersInput = {
  where?: Prisma.BillOfMaterialsWhereInput
  data: Prisma.XOR<Prisma.BillOfMaterialsUpdateWithoutWorkOrdersInput, Prisma.BillOfMaterialsUncheckedUpdateWithoutWorkOrdersInput>
}

export type BillOfMaterialsUpdateWithoutWorkOrdersInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  item?: Prisma.ItemUpdateOneRequiredWithoutBomsNestedInput
}

export type BillOfMaterialsUncheckedUpdateWithoutWorkOrdersInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type BillOfMaterialsCreateManyItemInput = {
  id?: string
  tenantId: string
  productName: string
  rawMaterials: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: number
  isActive?: boolean
  isDefault?: boolean
  totalCost?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type BillOfMaterialsUpdateWithoutItemInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  workOrders?: Prisma.WorkOrderUpdateManyWithoutBomNestedInput
}

export type BillOfMaterialsUncheckedUpdateWithoutItemInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  workOrders?: Prisma.WorkOrderUncheckedUpdateManyWithoutBomNestedInput
}

export type BillOfMaterialsUncheckedUpdateManyWithoutItemInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  rawMaterials?: Prisma.JsonNullValueInput | runtime.InputJsonValue
  operations?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue
  version?: Prisma.IntFieldUpdateOperationsInput | number
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean
  totalCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}




export type BillOfMaterialsCountOutputType = {
  workOrders: number
}

export type BillOfMaterialsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  workOrders?: boolean | BillOfMaterialsCountOutputTypeCountWorkOrdersArgs
}


export type BillOfMaterialsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsCountOutputTypeSelect<ExtArgs> | null
}


export type BillOfMaterialsCountOutputTypeCountWorkOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.WorkOrderWhereInput
}


export type BillOfMaterialsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  itemId?: boolean
  productName?: boolean
  rawMaterials?: boolean
  operations?: boolean
  version?: boolean
  isActive?: boolean
  isDefault?: boolean
  totalCost?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>
  workOrders?: boolean | Prisma.BillOfMaterials$workOrdersArgs<ExtArgs>
  _count?: boolean | Prisma.BillOfMaterialsCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["billOfMaterials"]>

export type BillOfMaterialsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  itemId?: boolean
  productName?: boolean
  rawMaterials?: boolean
  operations?: boolean
  version?: boolean
  isActive?: boolean
  isDefault?: boolean
  totalCost?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>
}, ExtArgs["result"]["billOfMaterials"]>

export type BillOfMaterialsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  itemId?: boolean
  productName?: boolean
  rawMaterials?: boolean
  operations?: boolean
  version?: boolean
  isActive?: boolean
  isDefault?: boolean
  totalCost?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>
}, ExtArgs["result"]["billOfMaterials"]>

export type BillOfMaterialsSelectScalar = {
  id?: boolean
  tenantId?: boolean
  itemId?: boolean
  productName?: boolean
  rawMaterials?: boolean
  operations?: boolean
  version?: boolean
  isActive?: boolean
  isDefault?: boolean
  totalCost?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type BillOfMaterialsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "itemId" | "productName" | "rawMaterials" | "operations" | "version" | "isActive" | "isDefault" | "totalCost" | "createdAt" | "updatedAt", ExtArgs["result"]["billOfMaterials"]>
export type BillOfMaterialsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>
  workOrders?: boolean | Prisma.BillOfMaterials$workOrdersArgs<ExtArgs>
  _count?: boolean | Prisma.BillOfMaterialsCountOutputTypeDefaultArgs<ExtArgs>
}
export type BillOfMaterialsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>
}
export type BillOfMaterialsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>
}

export type $BillOfMaterialsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "BillOfMaterials"
  objects: {
    item: Prisma.$ItemPayload<ExtArgs>
    workOrders: Prisma.$WorkOrderPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    itemId: string
    productName: string
    rawMaterials: runtime.JsonValue
    operations: runtime.JsonValue | null
    version: number
    isActive: boolean
    isDefault: boolean
    totalCost: number
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["billOfMaterials"]>
  composites: {}
}

export type BillOfMaterialsGetPayload<S extends boolean | null | undefined | BillOfMaterialsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload, S>

export type BillOfMaterialsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<BillOfMaterialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BillOfMaterialsCountAggregateInputType | true
  }

export interface BillOfMaterialsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillOfMaterials'], meta: { name: 'BillOfMaterials' } }
  
  findUnique<T extends BillOfMaterialsFindUniqueArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends BillOfMaterialsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends BillOfMaterialsFindFirstArgs>(args?: Prisma.SelectSubset<T, BillOfMaterialsFindFirstArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends BillOfMaterialsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BillOfMaterialsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends BillOfMaterialsFindManyArgs>(args?: Prisma.SelectSubset<T, BillOfMaterialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends BillOfMaterialsCreateArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsCreateArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends BillOfMaterialsCreateManyArgs>(args?: Prisma.SelectSubset<T, BillOfMaterialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends BillOfMaterialsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BillOfMaterialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends BillOfMaterialsDeleteArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsDeleteArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends BillOfMaterialsUpdateArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsUpdateArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends BillOfMaterialsDeleteManyArgs>(args?: Prisma.SelectSubset<T, BillOfMaterialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends BillOfMaterialsUpdateManyArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends BillOfMaterialsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends BillOfMaterialsUpsertArgs>(args: Prisma.SelectSubset<T, BillOfMaterialsUpsertArgs<ExtArgs>>): Prisma.Prisma__BillOfMaterialsClient<runtime.Types.Result.GetResult<Prisma.$BillOfMaterialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends BillOfMaterialsCountArgs>(
    args?: Prisma.Subset<T, BillOfMaterialsCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], BillOfMaterialsCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends BillOfMaterialsAggregateArgs>(args: Prisma.Subset<T, BillOfMaterialsAggregateArgs>): Prisma.PrismaPromise<GetBillOfMaterialsAggregateType<T>>

  
  groupBy<
    T extends BillOfMaterialsGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: BillOfMaterialsGroupByArgs['orderBy'] }
      : { orderBy?: BillOfMaterialsGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, BillOfMaterialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillOfMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: BillOfMaterialsFieldRefs;
}


export interface Prisma__BillOfMaterialsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  item<T extends Prisma.ItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  workOrders<T extends Prisma.BillOfMaterials$workOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BillOfMaterials$workOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface BillOfMaterialsFieldRefs {
  readonly id: Prisma.FieldRef<"BillOfMaterials", 'String'>
  readonly tenantId: Prisma.FieldRef<"BillOfMaterials", 'String'>
  readonly itemId: Prisma.FieldRef<"BillOfMaterials", 'String'>
  readonly productName: Prisma.FieldRef<"BillOfMaterials", 'String'>
  readonly rawMaterials: Prisma.FieldRef<"BillOfMaterials", 'Json'>
  readonly operations: Prisma.FieldRef<"BillOfMaterials", 'Json'>
  readonly version: Prisma.FieldRef<"BillOfMaterials", 'Int'>
  readonly isActive: Prisma.FieldRef<"BillOfMaterials", 'Boolean'>
  readonly isDefault: Prisma.FieldRef<"BillOfMaterials", 'Boolean'>
  readonly totalCost: Prisma.FieldRef<"BillOfMaterials", 'Float'>
  readonly createdAt: Prisma.FieldRef<"BillOfMaterials", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"BillOfMaterials", 'DateTime'>
}
    



export type BillOfMaterialsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  where: Prisma.BillOfMaterialsWhereUniqueInput
}


export type BillOfMaterialsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  where: Prisma.BillOfMaterialsWhereUniqueInput
}


export type BillOfMaterialsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  where?: Prisma.BillOfMaterialsWhereInput
  
  orderBy?: Prisma.BillOfMaterialsOrderByWithRelationInput | Prisma.BillOfMaterialsOrderByWithRelationInput[]
  
  cursor?: Prisma.BillOfMaterialsWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.BillOfMaterialsScalarFieldEnum | Prisma.BillOfMaterialsScalarFieldEnum[]
}


export type BillOfMaterialsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  where?: Prisma.BillOfMaterialsWhereInput
  
  orderBy?: Prisma.BillOfMaterialsOrderByWithRelationInput | Prisma.BillOfMaterialsOrderByWithRelationInput[]
  
  cursor?: Prisma.BillOfMaterialsWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.BillOfMaterialsScalarFieldEnum | Prisma.BillOfMaterialsScalarFieldEnum[]
}


export type BillOfMaterialsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  where?: Prisma.BillOfMaterialsWhereInput
  
  orderBy?: Prisma.BillOfMaterialsOrderByWithRelationInput | Prisma.BillOfMaterialsOrderByWithRelationInput[]
  
  cursor?: Prisma.BillOfMaterialsWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.BillOfMaterialsScalarFieldEnum | Prisma.BillOfMaterialsScalarFieldEnum[]
}


export type BillOfMaterialsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.BillOfMaterialsCreateInput, Prisma.BillOfMaterialsUncheckedCreateInput>
}


export type BillOfMaterialsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.BillOfMaterialsCreateManyInput | Prisma.BillOfMaterialsCreateManyInput[]
  skipDuplicates?: boolean
}


export type BillOfMaterialsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  data: Prisma.BillOfMaterialsCreateManyInput | Prisma.BillOfMaterialsCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.BillOfMaterialsIncludeCreateManyAndReturn<ExtArgs> | null
}


export type BillOfMaterialsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.BillOfMaterialsUpdateInput, Prisma.BillOfMaterialsUncheckedUpdateInput>
  
  where: Prisma.BillOfMaterialsWhereUniqueInput
}


export type BillOfMaterialsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.BillOfMaterialsUpdateManyMutationInput, Prisma.BillOfMaterialsUncheckedUpdateManyInput>
  
  where?: Prisma.BillOfMaterialsWhereInput
  
  limit?: number
}


export type BillOfMaterialsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.BillOfMaterialsUpdateManyMutationInput, Prisma.BillOfMaterialsUncheckedUpdateManyInput>
  
  where?: Prisma.BillOfMaterialsWhereInput
  
  limit?: number
  
  include?: Prisma.BillOfMaterialsIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type BillOfMaterialsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  where: Prisma.BillOfMaterialsWhereUniqueInput
  
  create: Prisma.XOR<Prisma.BillOfMaterialsCreateInput, Prisma.BillOfMaterialsUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.BillOfMaterialsUpdateInput, Prisma.BillOfMaterialsUncheckedUpdateInput>
}


export type BillOfMaterialsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
  
  where: Prisma.BillOfMaterialsWhereUniqueInput
}


export type BillOfMaterialsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.BillOfMaterialsWhereInput
  
  limit?: number
}


export type BillOfMaterials$workOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type BillOfMaterialsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BillOfMaterialsSelect<ExtArgs> | null
  
  omit?: Prisma.BillOfMaterialsOmit<ExtArgs> | null
  
  include?: Prisma.BillOfMaterialsInclude<ExtArgs> | null
}
