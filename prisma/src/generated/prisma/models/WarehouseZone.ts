





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type WarehouseZoneModel = runtime.Types.Result.DefaultSelection<Prisma.$WarehouseZonePayload>

export type AggregateWarehouseZone = {
  _count: WarehouseZoneCountAggregateOutputType | null
  _min: WarehouseZoneMinAggregateOutputType | null
  _max: WarehouseZoneMaxAggregateOutputType | null
}

export type WarehouseZoneMinAggregateOutputType = {
  id: string | null
  warehouseId: string | null
  tenantId: string | null
  zoneName: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WarehouseZoneMaxAggregateOutputType = {
  id: string | null
  warehouseId: string | null
  tenantId: string | null
  zoneName: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WarehouseZoneCountAggregateOutputType = {
  id: number
  warehouseId: number
  tenantId: number
  zoneName: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type WarehouseZoneMinAggregateInputType = {
  id?: true
  warehouseId?: true
  tenantId?: true
  zoneName?: true
  createdAt?: true
  updatedAt?: true
}

export type WarehouseZoneMaxAggregateInputType = {
  id?: true
  warehouseId?: true
  tenantId?: true
  zoneName?: true
  createdAt?: true
  updatedAt?: true
}

export type WarehouseZoneCountAggregateInputType = {
  id?: true
  warehouseId?: true
  tenantId?: true
  zoneName?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type WarehouseZoneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WarehouseZoneWhereInput
  
  orderBy?: Prisma.WarehouseZoneOrderByWithRelationInput | Prisma.WarehouseZoneOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseZoneWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | WarehouseZoneCountAggregateInputType
  
  _min?: WarehouseZoneMinAggregateInputType
  
  _max?: WarehouseZoneMaxAggregateInputType
}

export type GetWarehouseZoneAggregateType<T extends WarehouseZoneAggregateArgs> = {
      [P in keyof T & keyof AggregateWarehouseZone]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateWarehouseZone[P]>
    : Prisma.GetScalarType<T[P], AggregateWarehouseZone[P]>
}




export type WarehouseZoneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.WarehouseZoneWhereInput
  orderBy?: Prisma.WarehouseZoneOrderByWithAggregationInput | Prisma.WarehouseZoneOrderByWithAggregationInput[]
  by: Prisma.WarehouseZoneScalarFieldEnum[] | Prisma.WarehouseZoneScalarFieldEnum
  having?: Prisma.WarehouseZoneScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: WarehouseZoneCountAggregateInputType | true
  _min?: WarehouseZoneMinAggregateInputType
  _max?: WarehouseZoneMaxAggregateInputType
}

export type WarehouseZoneGroupByOutputType = {
  id: string
  warehouseId: string
  tenantId: string
  zoneName: string
  createdAt: Date
  updatedAt: Date
  _count: WarehouseZoneCountAggregateOutputType | null
  _min: WarehouseZoneMinAggregateOutputType | null
  _max: WarehouseZoneMaxAggregateOutputType | null
}

export type GetWarehouseZoneGroupByPayload<T extends WarehouseZoneGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<WarehouseZoneGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof WarehouseZoneGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], WarehouseZoneGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], WarehouseZoneGroupByOutputType[P]>
      }
    >
  >



export type WarehouseZoneWhereInput = {
  AND?: Prisma.WarehouseZoneWhereInput | Prisma.WarehouseZoneWhereInput[]
  OR?: Prisma.WarehouseZoneWhereInput[]
  NOT?: Prisma.WarehouseZoneWhereInput | Prisma.WarehouseZoneWhereInput[]
  id?: Prisma.StringFilter<"WarehouseZone"> | string
  warehouseId?: Prisma.StringFilter<"WarehouseZone"> | string
  tenantId?: Prisma.StringFilter<"WarehouseZone"> | string
  zoneName?: Prisma.StringFilter<"WarehouseZone"> | string
  createdAt?: Prisma.DateTimeFilter<"WarehouseZone"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"WarehouseZone"> | Date | string
  warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>
  inventories?: Prisma.InventoryItemListRelationFilter
}

export type WarehouseZoneOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  warehouseId?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  zoneName?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  warehouse?: Prisma.WarehouseOrderByWithRelationInput
  inventories?: Prisma.InventoryItemOrderByRelationAggregateInput
}

export type WarehouseZoneWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.WarehouseZoneWhereInput | Prisma.WarehouseZoneWhereInput[]
  OR?: Prisma.WarehouseZoneWhereInput[]
  NOT?: Prisma.WarehouseZoneWhereInput | Prisma.WarehouseZoneWhereInput[]
  warehouseId?: Prisma.StringFilter<"WarehouseZone"> | string
  tenantId?: Prisma.StringFilter<"WarehouseZone"> | string
  zoneName?: Prisma.StringFilter<"WarehouseZone"> | string
  createdAt?: Prisma.DateTimeFilter<"WarehouseZone"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"WarehouseZone"> | Date | string
  warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>
  inventories?: Prisma.InventoryItemListRelationFilter
}, "id">

export type WarehouseZoneOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  warehouseId?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  zoneName?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.WarehouseZoneCountOrderByAggregateInput
  _max?: Prisma.WarehouseZoneMaxOrderByAggregateInput
  _min?: Prisma.WarehouseZoneMinOrderByAggregateInput
}

export type WarehouseZoneScalarWhereWithAggregatesInput = {
  AND?: Prisma.WarehouseZoneScalarWhereWithAggregatesInput | Prisma.WarehouseZoneScalarWhereWithAggregatesInput[]
  OR?: Prisma.WarehouseZoneScalarWhereWithAggregatesInput[]
  NOT?: Prisma.WarehouseZoneScalarWhereWithAggregatesInput | Prisma.WarehouseZoneScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"WarehouseZone"> | string
  warehouseId?: Prisma.StringWithAggregatesFilter<"WarehouseZone"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"WarehouseZone"> | string
  zoneName?: Prisma.StringWithAggregatesFilter<"WarehouseZone"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"WarehouseZone"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WarehouseZone"> | Date | string
}

export type WarehouseZoneCreateInput = {
  id?: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
  warehouse: Prisma.WarehouseCreateNestedOneWithoutZonesInput
  inventories?: Prisma.InventoryItemCreateNestedManyWithoutZoneInput
}

export type WarehouseZoneUncheckedCreateInput = {
  id?: string
  warehouseId: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
  inventories?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutZoneInput
}

export type WarehouseZoneUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutZonesNestedInput
  inventories?: Prisma.InventoryItemUpdateManyWithoutZoneNestedInput
}

export type WarehouseZoneUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  warehouseId?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  inventories?: Prisma.InventoryItemUncheckedUpdateManyWithoutZoneNestedInput
}

export type WarehouseZoneCreateManyInput = {
  id?: string
  warehouseId: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WarehouseZoneUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WarehouseZoneUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  warehouseId?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WarehouseZoneNullableScalarRelationFilter = {
  is?: Prisma.WarehouseZoneWhereInput | null
  isNot?: Prisma.WarehouseZoneWhereInput | null
}

export type WarehouseZoneListRelationFilter = {
  every?: Prisma.WarehouseZoneWhereInput
  some?: Prisma.WarehouseZoneWhereInput
  none?: Prisma.WarehouseZoneWhereInput
}

export type WarehouseZoneOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type WarehouseZoneCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  warehouseId?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  zoneName?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WarehouseZoneMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  warehouseId?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  zoneName?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WarehouseZoneMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  warehouseId?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  zoneName?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WarehouseZoneCreateNestedOneWithoutInventoriesInput = {
  create?: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutInventoriesInput, Prisma.WarehouseZoneUncheckedCreateWithoutInventoriesInput>
  connectOrCreate?: Prisma.WarehouseZoneCreateOrConnectWithoutInventoriesInput
  connect?: Prisma.WarehouseZoneWhereUniqueInput
}

export type WarehouseZoneUpdateOneWithoutInventoriesNestedInput = {
  create?: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutInventoriesInput, Prisma.WarehouseZoneUncheckedCreateWithoutInventoriesInput>
  connectOrCreate?: Prisma.WarehouseZoneCreateOrConnectWithoutInventoriesInput
  upsert?: Prisma.WarehouseZoneUpsertWithoutInventoriesInput
  disconnect?: Prisma.WarehouseZoneWhereInput | boolean
  delete?: Prisma.WarehouseZoneWhereInput | boolean
  connect?: Prisma.WarehouseZoneWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.WarehouseZoneUpdateToOneWithWhereWithoutInventoriesInput, Prisma.WarehouseZoneUpdateWithoutInventoriesInput>, Prisma.WarehouseZoneUncheckedUpdateWithoutInventoriesInput>
}

export type WarehouseZoneCreateNestedManyWithoutWarehouseInput = {
  create?: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput> | Prisma.WarehouseZoneCreateWithoutWarehouseInput[] | Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput[]
  connectOrCreate?: Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput | Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput[]
  createMany?: Prisma.WarehouseZoneCreateManyWarehouseInputEnvelope
  connect?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
}

export type WarehouseZoneUncheckedCreateNestedManyWithoutWarehouseInput = {
  create?: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput> | Prisma.WarehouseZoneCreateWithoutWarehouseInput[] | Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput[]
  connectOrCreate?: Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput | Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput[]
  createMany?: Prisma.WarehouseZoneCreateManyWarehouseInputEnvelope
  connect?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
}

export type WarehouseZoneUpdateManyWithoutWarehouseNestedInput = {
  create?: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput> | Prisma.WarehouseZoneCreateWithoutWarehouseInput[] | Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput[]
  connectOrCreate?: Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput | Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput[]
  upsert?: Prisma.WarehouseZoneUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.WarehouseZoneUpsertWithWhereUniqueWithoutWarehouseInput[]
  createMany?: Prisma.WarehouseZoneCreateManyWarehouseInputEnvelope
  set?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  disconnect?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  delete?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  connect?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  update?: Prisma.WarehouseZoneUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.WarehouseZoneUpdateWithWhereUniqueWithoutWarehouseInput[]
  updateMany?: Prisma.WarehouseZoneUpdateManyWithWhereWithoutWarehouseInput | Prisma.WarehouseZoneUpdateManyWithWhereWithoutWarehouseInput[]
  deleteMany?: Prisma.WarehouseZoneScalarWhereInput | Prisma.WarehouseZoneScalarWhereInput[]
}

export type WarehouseZoneUncheckedUpdateManyWithoutWarehouseNestedInput = {
  create?: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput> | Prisma.WarehouseZoneCreateWithoutWarehouseInput[] | Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput[]
  connectOrCreate?: Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput | Prisma.WarehouseZoneCreateOrConnectWithoutWarehouseInput[]
  upsert?: Prisma.WarehouseZoneUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.WarehouseZoneUpsertWithWhereUniqueWithoutWarehouseInput[]
  createMany?: Prisma.WarehouseZoneCreateManyWarehouseInputEnvelope
  set?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  disconnect?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  delete?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  connect?: Prisma.WarehouseZoneWhereUniqueInput | Prisma.WarehouseZoneWhereUniqueInput[]
  update?: Prisma.WarehouseZoneUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.WarehouseZoneUpdateWithWhereUniqueWithoutWarehouseInput[]
  updateMany?: Prisma.WarehouseZoneUpdateManyWithWhereWithoutWarehouseInput | Prisma.WarehouseZoneUpdateManyWithWhereWithoutWarehouseInput[]
  deleteMany?: Prisma.WarehouseZoneScalarWhereInput | Prisma.WarehouseZoneScalarWhereInput[]
}

export type WarehouseZoneCreateWithoutInventoriesInput = {
  id?: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
  warehouse: Prisma.WarehouseCreateNestedOneWithoutZonesInput
}

export type WarehouseZoneUncheckedCreateWithoutInventoriesInput = {
  id?: string
  warehouseId: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WarehouseZoneCreateOrConnectWithoutInventoriesInput = {
  where: Prisma.WarehouseZoneWhereUniqueInput
  create: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutInventoriesInput, Prisma.WarehouseZoneUncheckedCreateWithoutInventoriesInput>
}

export type WarehouseZoneUpsertWithoutInventoriesInput = {
  update: Prisma.XOR<Prisma.WarehouseZoneUpdateWithoutInventoriesInput, Prisma.WarehouseZoneUncheckedUpdateWithoutInventoriesInput>
  create: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutInventoriesInput, Prisma.WarehouseZoneUncheckedCreateWithoutInventoriesInput>
  where?: Prisma.WarehouseZoneWhereInput
}

export type WarehouseZoneUpdateToOneWithWhereWithoutInventoriesInput = {
  where?: Prisma.WarehouseZoneWhereInput
  data: Prisma.XOR<Prisma.WarehouseZoneUpdateWithoutInventoriesInput, Prisma.WarehouseZoneUncheckedUpdateWithoutInventoriesInput>
}

export type WarehouseZoneUpdateWithoutInventoriesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutZonesNestedInput
}

export type WarehouseZoneUncheckedUpdateWithoutInventoriesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  warehouseId?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WarehouseZoneCreateWithoutWarehouseInput = {
  id?: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
  inventories?: Prisma.InventoryItemCreateNestedManyWithoutZoneInput
}

export type WarehouseZoneUncheckedCreateWithoutWarehouseInput = {
  id?: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
  inventories?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutZoneInput
}

export type WarehouseZoneCreateOrConnectWithoutWarehouseInput = {
  where: Prisma.WarehouseZoneWhereUniqueInput
  create: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput>
}

export type WarehouseZoneCreateManyWarehouseInputEnvelope = {
  data: Prisma.WarehouseZoneCreateManyWarehouseInput | Prisma.WarehouseZoneCreateManyWarehouseInput[]
  skipDuplicates?: boolean
}

export type WarehouseZoneUpsertWithWhereUniqueWithoutWarehouseInput = {
  where: Prisma.WarehouseZoneWhereUniqueInput
  update: Prisma.XOR<Prisma.WarehouseZoneUpdateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedUpdateWithoutWarehouseInput>
  create: Prisma.XOR<Prisma.WarehouseZoneCreateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedCreateWithoutWarehouseInput>
}

export type WarehouseZoneUpdateWithWhereUniqueWithoutWarehouseInput = {
  where: Prisma.WarehouseZoneWhereUniqueInput
  data: Prisma.XOR<Prisma.WarehouseZoneUpdateWithoutWarehouseInput, Prisma.WarehouseZoneUncheckedUpdateWithoutWarehouseInput>
}

export type WarehouseZoneUpdateManyWithWhereWithoutWarehouseInput = {
  where: Prisma.WarehouseZoneScalarWhereInput
  data: Prisma.XOR<Prisma.WarehouseZoneUpdateManyMutationInput, Prisma.WarehouseZoneUncheckedUpdateManyWithoutWarehouseInput>
}

export type WarehouseZoneScalarWhereInput = {
  AND?: Prisma.WarehouseZoneScalarWhereInput | Prisma.WarehouseZoneScalarWhereInput[]
  OR?: Prisma.WarehouseZoneScalarWhereInput[]
  NOT?: Prisma.WarehouseZoneScalarWhereInput | Prisma.WarehouseZoneScalarWhereInput[]
  id?: Prisma.StringFilter<"WarehouseZone"> | string
  warehouseId?: Prisma.StringFilter<"WarehouseZone"> | string
  tenantId?: Prisma.StringFilter<"WarehouseZone"> | string
  zoneName?: Prisma.StringFilter<"WarehouseZone"> | string
  createdAt?: Prisma.DateTimeFilter<"WarehouseZone"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"WarehouseZone"> | Date | string
}

export type WarehouseZoneCreateManyWarehouseInput = {
  id?: string
  tenantId: string
  zoneName: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WarehouseZoneUpdateWithoutWarehouseInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  inventories?: Prisma.InventoryItemUpdateManyWithoutZoneNestedInput
}

export type WarehouseZoneUncheckedUpdateWithoutWarehouseInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  inventories?: Prisma.InventoryItemUncheckedUpdateManyWithoutZoneNestedInput
}

export type WarehouseZoneUncheckedUpdateManyWithoutWarehouseInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  zoneName?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}




export type WarehouseZoneCountOutputType = {
  inventories: number
}

export type WarehouseZoneCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  inventories?: boolean | WarehouseZoneCountOutputTypeCountInventoriesArgs
}


export type WarehouseZoneCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneCountOutputTypeSelect<ExtArgs> | null
}


export type WarehouseZoneCountOutputTypeCountInventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.InventoryItemWhereInput
}


export type WarehouseZoneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  warehouseId?: boolean
  tenantId?: boolean
  zoneName?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>
  inventories?: boolean | Prisma.WarehouseZone$inventoriesArgs<ExtArgs>
  _count?: boolean | Prisma.WarehouseZoneCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["warehouseZone"]>

export type WarehouseZoneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  warehouseId?: boolean
  tenantId?: boolean
  zoneName?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>
}, ExtArgs["result"]["warehouseZone"]>

export type WarehouseZoneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  warehouseId?: boolean
  tenantId?: boolean
  zoneName?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>
}, ExtArgs["result"]["warehouseZone"]>

export type WarehouseZoneSelectScalar = {
  id?: boolean
  warehouseId?: boolean
  tenantId?: boolean
  zoneName?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type WarehouseZoneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "warehouseId" | "tenantId" | "zoneName" | "createdAt" | "updatedAt", ExtArgs["result"]["warehouseZone"]>
export type WarehouseZoneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>
  inventories?: boolean | Prisma.WarehouseZone$inventoriesArgs<ExtArgs>
  _count?: boolean | Prisma.WarehouseZoneCountOutputTypeDefaultArgs<ExtArgs>
}
export type WarehouseZoneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>
}
export type WarehouseZoneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>
}

export type $WarehouseZonePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "WarehouseZone"
  objects: {
    warehouse: Prisma.$WarehousePayload<ExtArgs>
    inventories: Prisma.$InventoryItemPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    warehouseId: string
    tenantId: string
    zoneName: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["warehouseZone"]>
  composites: {}
}

export type WarehouseZoneGetPayload<S extends boolean | null | undefined | WarehouseZoneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload, S>

export type WarehouseZoneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<WarehouseZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WarehouseZoneCountAggregateInputType | true
  }

export interface WarehouseZoneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarehouseZone'], meta: { name: 'WarehouseZone' } }
  
  findUnique<T extends WarehouseZoneFindUniqueArgs>(args: Prisma.SelectSubset<T, WarehouseZoneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends WarehouseZoneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WarehouseZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends WarehouseZoneFindFirstArgs>(args?: Prisma.SelectSubset<T, WarehouseZoneFindFirstArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends WarehouseZoneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WarehouseZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends WarehouseZoneFindManyArgs>(args?: Prisma.SelectSubset<T, WarehouseZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends WarehouseZoneCreateArgs>(args: Prisma.SelectSubset<T, WarehouseZoneCreateArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends WarehouseZoneCreateManyArgs>(args?: Prisma.SelectSubset<T, WarehouseZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends WarehouseZoneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WarehouseZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends WarehouseZoneDeleteArgs>(args: Prisma.SelectSubset<T, WarehouseZoneDeleteArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends WarehouseZoneUpdateArgs>(args: Prisma.SelectSubset<T, WarehouseZoneUpdateArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends WarehouseZoneDeleteManyArgs>(args?: Prisma.SelectSubset<T, WarehouseZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends WarehouseZoneUpdateManyArgs>(args: Prisma.SelectSubset<T, WarehouseZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends WarehouseZoneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WarehouseZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends WarehouseZoneUpsertArgs>(args: Prisma.SelectSubset<T, WarehouseZoneUpsertArgs<ExtArgs>>): Prisma.Prisma__WarehouseZoneClient<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends WarehouseZoneCountArgs>(
    args?: Prisma.Subset<T, WarehouseZoneCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], WarehouseZoneCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends WarehouseZoneAggregateArgs>(args: Prisma.Subset<T, WarehouseZoneAggregateArgs>): Prisma.PrismaPromise<GetWarehouseZoneAggregateType<T>>

  
  groupBy<
    T extends WarehouseZoneGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: WarehouseZoneGroupByArgs['orderBy'] }
      : { orderBy?: WarehouseZoneGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, WarehouseZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: WarehouseZoneFieldRefs;
}


export interface Prisma__WarehouseZoneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  inventories<T extends Prisma.WarehouseZone$inventoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseZone$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface WarehouseZoneFieldRefs {
  readonly id: Prisma.FieldRef<"WarehouseZone", 'String'>
  readonly warehouseId: Prisma.FieldRef<"WarehouseZone", 'String'>
  readonly tenantId: Prisma.FieldRef<"WarehouseZone", 'String'>
  readonly zoneName: Prisma.FieldRef<"WarehouseZone", 'String'>
  readonly createdAt: Prisma.FieldRef<"WarehouseZone", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"WarehouseZone", 'DateTime'>
}
    



export type WarehouseZoneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  where: Prisma.WarehouseZoneWhereUniqueInput
}


export type WarehouseZoneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  where: Prisma.WarehouseZoneWhereUniqueInput
}


export type WarehouseZoneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  where?: Prisma.WarehouseZoneWhereInput
  
  orderBy?: Prisma.WarehouseZoneOrderByWithRelationInput | Prisma.WarehouseZoneOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseZoneWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WarehouseZoneScalarFieldEnum | Prisma.WarehouseZoneScalarFieldEnum[]
}


export type WarehouseZoneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  where?: Prisma.WarehouseZoneWhereInput
  
  orderBy?: Prisma.WarehouseZoneOrderByWithRelationInput | Prisma.WarehouseZoneOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseZoneWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WarehouseZoneScalarFieldEnum | Prisma.WarehouseZoneScalarFieldEnum[]
}


export type WarehouseZoneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  where?: Prisma.WarehouseZoneWhereInput
  
  orderBy?: Prisma.WarehouseZoneOrderByWithRelationInput | Prisma.WarehouseZoneOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseZoneWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WarehouseZoneScalarFieldEnum | Prisma.WarehouseZoneScalarFieldEnum[]
}


export type WarehouseZoneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WarehouseZoneCreateInput, Prisma.WarehouseZoneUncheckedCreateInput>
}


export type WarehouseZoneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.WarehouseZoneCreateManyInput | Prisma.WarehouseZoneCreateManyInput[]
  skipDuplicates?: boolean
}


export type WarehouseZoneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  data: Prisma.WarehouseZoneCreateManyInput | Prisma.WarehouseZoneCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.WarehouseZoneIncludeCreateManyAndReturn<ExtArgs> | null
}


export type WarehouseZoneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WarehouseZoneUpdateInput, Prisma.WarehouseZoneUncheckedUpdateInput>
  
  where: Prisma.WarehouseZoneWhereUniqueInput
}


export type WarehouseZoneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.WarehouseZoneUpdateManyMutationInput, Prisma.WarehouseZoneUncheckedUpdateManyInput>
  
  where?: Prisma.WarehouseZoneWhereInput
  
  limit?: number
}


export type WarehouseZoneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WarehouseZoneUpdateManyMutationInput, Prisma.WarehouseZoneUncheckedUpdateManyInput>
  
  where?: Prisma.WarehouseZoneWhereInput
  
  limit?: number
  
  include?: Prisma.WarehouseZoneIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type WarehouseZoneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  where: Prisma.WarehouseZoneWhereUniqueInput
  
  create: Prisma.XOR<Prisma.WarehouseZoneCreateInput, Prisma.WarehouseZoneUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.WarehouseZoneUpdateInput, Prisma.WarehouseZoneUncheckedUpdateInput>
}


export type WarehouseZoneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
  
  where: Prisma.WarehouseZoneWhereUniqueInput
}


export type WarehouseZoneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WarehouseZoneWhereInput
  
  limit?: number
}


export type WarehouseZone$inventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryItemSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryItemOmit<ExtArgs> | null
  
  include?: Prisma.InventoryItemInclude<ExtArgs> | null
  where?: Prisma.InventoryItemWhereInput
  orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[]
  cursor?: Prisma.InventoryItemWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[]
}


export type WarehouseZoneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseZoneSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseZoneOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseZoneInclude<ExtArgs> | null
}
