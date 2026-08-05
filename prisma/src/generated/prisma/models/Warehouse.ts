





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type WarehouseModel = runtime.Types.Result.DefaultSelection<Prisma.$WarehousePayload>

export type AggregateWarehouse = {
  _count: WarehouseCountAggregateOutputType | null
  _avg: WarehouseAvgAggregateOutputType | null
  _sum: WarehouseSumAggregateOutputType | null
  _min: WarehouseMinAggregateOutputType | null
  _max: WarehouseMaxAggregateOutputType | null
}

export type WarehouseAvgAggregateOutputType = {
  capacity3D: number | null
}

export type WarehouseSumAggregateOutputType = {
  capacity3D: number | null
}

export type WarehouseMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  name: string | null
  location: string | null
  capacity3D: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WarehouseMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  name: string | null
  location: string | null
  capacity3D: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WarehouseCountAggregateOutputType = {
  id: number
  tenantId: number
  name: number
  location: number
  capacity3D: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type WarehouseAvgAggregateInputType = {
  capacity3D?: true
}

export type WarehouseSumAggregateInputType = {
  capacity3D?: true
}

export type WarehouseMinAggregateInputType = {
  id?: true
  tenantId?: true
  name?: true
  location?: true
  capacity3D?: true
  createdAt?: true
  updatedAt?: true
}

export type WarehouseMaxAggregateInputType = {
  id?: true
  tenantId?: true
  name?: true
  location?: true
  capacity3D?: true
  createdAt?: true
  updatedAt?: true
}

export type WarehouseCountAggregateInputType = {
  id?: true
  tenantId?: true
  name?: true
  location?: true
  capacity3D?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type WarehouseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WarehouseWhereInput
  
  orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | WarehouseCountAggregateInputType
  
  _avg?: WarehouseAvgAggregateInputType
  
  _sum?: WarehouseSumAggregateInputType
  
  _min?: WarehouseMinAggregateInputType
  
  _max?: WarehouseMaxAggregateInputType
}

export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
      [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateWarehouse[P]>
    : Prisma.GetScalarType<T[P], AggregateWarehouse[P]>
}




export type WarehouseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.WarehouseWhereInput
  orderBy?: Prisma.WarehouseOrderByWithAggregationInput | Prisma.WarehouseOrderByWithAggregationInput[]
  by: Prisma.WarehouseScalarFieldEnum[] | Prisma.WarehouseScalarFieldEnum
  having?: Prisma.WarehouseScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: WarehouseCountAggregateInputType | true
  _avg?: WarehouseAvgAggregateInputType
  _sum?: WarehouseSumAggregateInputType
  _min?: WarehouseMinAggregateInputType
  _max?: WarehouseMaxAggregateInputType
}

export type WarehouseGroupByOutputType = {
  id: string
  tenantId: string
  name: string
  location: string
  capacity3D: number | null
  createdAt: Date
  updatedAt: Date
  _count: WarehouseCountAggregateOutputType | null
  _avg: WarehouseAvgAggregateOutputType | null
  _sum: WarehouseSumAggregateOutputType | null
  _min: WarehouseMinAggregateOutputType | null
  _max: WarehouseMaxAggregateOutputType | null
}

export type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<WarehouseGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], WarehouseGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], WarehouseGroupByOutputType[P]>
      }
    >
  >



export type WarehouseWhereInput = {
  AND?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[]
  OR?: Prisma.WarehouseWhereInput[]
  NOT?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[]
  id?: Prisma.StringFilter<"Warehouse"> | string
  tenantId?: Prisma.StringFilter<"Warehouse"> | string
  name?: Prisma.StringFilter<"Warehouse"> | string
  location?: Prisma.StringFilter<"Warehouse"> | string
  capacity3D?: Prisma.FloatNullableFilter<"Warehouse"> | number | null
  createdAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string
  zones?: Prisma.WarehouseZoneListRelationFilter
  inventories?: Prisma.InventoryItemListRelationFilter
}

export type WarehouseOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  location?: Prisma.SortOrder
  capacity3D?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  zones?: Prisma.WarehouseZoneOrderByRelationAggregateInput
  inventories?: Prisma.InventoryItemOrderByRelationAggregateInput
}

export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[]
  OR?: Prisma.WarehouseWhereInput[]
  NOT?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[]
  tenantId?: Prisma.StringFilter<"Warehouse"> | string
  name?: Prisma.StringFilter<"Warehouse"> | string
  location?: Prisma.StringFilter<"Warehouse"> | string
  capacity3D?: Prisma.FloatNullableFilter<"Warehouse"> | number | null
  createdAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string
  zones?: Prisma.WarehouseZoneListRelationFilter
  inventories?: Prisma.InventoryItemListRelationFilter
}, "id">

export type WarehouseOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  location?: Prisma.SortOrder
  capacity3D?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.WarehouseCountOrderByAggregateInput
  _avg?: Prisma.WarehouseAvgOrderByAggregateInput
  _max?: Prisma.WarehouseMaxOrderByAggregateInput
  _min?: Prisma.WarehouseMinOrderByAggregateInput
  _sum?: Prisma.WarehouseSumOrderByAggregateInput
}

export type WarehouseScalarWhereWithAggregatesInput = {
  AND?: Prisma.WarehouseScalarWhereWithAggregatesInput | Prisma.WarehouseScalarWhereWithAggregatesInput[]
  OR?: Prisma.WarehouseScalarWhereWithAggregatesInput[]
  NOT?: Prisma.WarehouseScalarWhereWithAggregatesInput | Prisma.WarehouseScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string
  name?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string
  location?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string
  capacity3D?: Prisma.FloatNullableWithAggregatesFilter<"Warehouse"> | number | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
}

export type WarehouseCreateInput = {
  id?: string
  tenantId: string
  name: string
  location: string
  capacity3D?: number | null
  createdAt?: Date | string
  updatedAt?: Date | string
  zones?: Prisma.WarehouseZoneCreateNestedManyWithoutWarehouseInput
  inventories?: Prisma.InventoryItemCreateNestedManyWithoutWarehouseInput
}

export type WarehouseUncheckedCreateInput = {
  id?: string
  tenantId: string
  name: string
  location: string
  capacity3D?: number | null
  createdAt?: Date | string
  updatedAt?: Date | string
  zones?: Prisma.WarehouseZoneUncheckedCreateNestedManyWithoutWarehouseInput
  inventories?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutWarehouseInput
}

export type WarehouseUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  zones?: Prisma.WarehouseZoneUpdateManyWithoutWarehouseNestedInput
  inventories?: Prisma.InventoryItemUpdateManyWithoutWarehouseNestedInput
}

export type WarehouseUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  zones?: Prisma.WarehouseZoneUncheckedUpdateManyWithoutWarehouseNestedInput
  inventories?: Prisma.InventoryItemUncheckedUpdateManyWithoutWarehouseNestedInput
}

export type WarehouseCreateManyInput = {
  id?: string
  tenantId: string
  name: string
  location: string
  capacity3D?: number | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WarehouseUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WarehouseUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WarehouseScalarRelationFilter = {
  is?: Prisma.WarehouseWhereInput
  isNot?: Prisma.WarehouseWhereInput
}

export type WarehouseCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  location?: Prisma.SortOrder
  capacity3D?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WarehouseAvgOrderByAggregateInput = {
  capacity3D?: Prisma.SortOrder
}

export type WarehouseMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  location?: Prisma.SortOrder
  capacity3D?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WarehouseMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  location?: Prisma.SortOrder
  capacity3D?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WarehouseSumOrderByAggregateInput = {
  capacity3D?: Prisma.SortOrder
}

export type WarehouseCreateNestedOneWithoutInventoriesInput = {
  create?: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoriesInput, Prisma.WarehouseUncheckedCreateWithoutInventoriesInput>
  connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutInventoriesInput
  connect?: Prisma.WarehouseWhereUniqueInput
}

export type WarehouseUpdateOneRequiredWithoutInventoriesNestedInput = {
  create?: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoriesInput, Prisma.WarehouseUncheckedCreateWithoutInventoriesInput>
  connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutInventoriesInput
  upsert?: Prisma.WarehouseUpsertWithoutInventoriesInput
  connect?: Prisma.WarehouseWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.WarehouseUpdateToOneWithWhereWithoutInventoriesInput, Prisma.WarehouseUpdateWithoutInventoriesInput>, Prisma.WarehouseUncheckedUpdateWithoutInventoriesInput>
}

export type WarehouseCreateNestedOneWithoutZonesInput = {
  create?: Prisma.XOR<Prisma.WarehouseCreateWithoutZonesInput, Prisma.WarehouseUncheckedCreateWithoutZonesInput>
  connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutZonesInput
  connect?: Prisma.WarehouseWhereUniqueInput
}

export type WarehouseUpdateOneRequiredWithoutZonesNestedInput = {
  create?: Prisma.XOR<Prisma.WarehouseCreateWithoutZonesInput, Prisma.WarehouseUncheckedCreateWithoutZonesInput>
  connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutZonesInput
  upsert?: Prisma.WarehouseUpsertWithoutZonesInput
  connect?: Prisma.WarehouseWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.WarehouseUpdateToOneWithWhereWithoutZonesInput, Prisma.WarehouseUpdateWithoutZonesInput>, Prisma.WarehouseUncheckedUpdateWithoutZonesInput>
}

export type WarehouseCreateWithoutInventoriesInput = {
  id?: string
  tenantId: string
  name: string
  location: string
  capacity3D?: number | null
  createdAt?: Date | string
  updatedAt?: Date | string
  zones?: Prisma.WarehouseZoneCreateNestedManyWithoutWarehouseInput
}

export type WarehouseUncheckedCreateWithoutInventoriesInput = {
  id?: string
  tenantId: string
  name: string
  location: string
  capacity3D?: number | null
  createdAt?: Date | string
  updatedAt?: Date | string
  zones?: Prisma.WarehouseZoneUncheckedCreateNestedManyWithoutWarehouseInput
}

export type WarehouseCreateOrConnectWithoutInventoriesInput = {
  where: Prisma.WarehouseWhereUniqueInput
  create: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoriesInput, Prisma.WarehouseUncheckedCreateWithoutInventoriesInput>
}

export type WarehouseUpsertWithoutInventoriesInput = {
  update: Prisma.XOR<Prisma.WarehouseUpdateWithoutInventoriesInput, Prisma.WarehouseUncheckedUpdateWithoutInventoriesInput>
  create: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoriesInput, Prisma.WarehouseUncheckedCreateWithoutInventoriesInput>
  where?: Prisma.WarehouseWhereInput
}

export type WarehouseUpdateToOneWithWhereWithoutInventoriesInput = {
  where?: Prisma.WarehouseWhereInput
  data: Prisma.XOR<Prisma.WarehouseUpdateWithoutInventoriesInput, Prisma.WarehouseUncheckedUpdateWithoutInventoriesInput>
}

export type WarehouseUpdateWithoutInventoriesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  zones?: Prisma.WarehouseZoneUpdateManyWithoutWarehouseNestedInput
}

export type WarehouseUncheckedUpdateWithoutInventoriesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  zones?: Prisma.WarehouseZoneUncheckedUpdateManyWithoutWarehouseNestedInput
}

export type WarehouseCreateWithoutZonesInput = {
  id?: string
  tenantId: string
  name: string
  location: string
  capacity3D?: number | null
  createdAt?: Date | string
  updatedAt?: Date | string
  inventories?: Prisma.InventoryItemCreateNestedManyWithoutWarehouseInput
}

export type WarehouseUncheckedCreateWithoutZonesInput = {
  id?: string
  tenantId: string
  name: string
  location: string
  capacity3D?: number | null
  createdAt?: Date | string
  updatedAt?: Date | string
  inventories?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutWarehouseInput
}

export type WarehouseCreateOrConnectWithoutZonesInput = {
  where: Prisma.WarehouseWhereUniqueInput
  create: Prisma.XOR<Prisma.WarehouseCreateWithoutZonesInput, Prisma.WarehouseUncheckedCreateWithoutZonesInput>
}

export type WarehouseUpsertWithoutZonesInput = {
  update: Prisma.XOR<Prisma.WarehouseUpdateWithoutZonesInput, Prisma.WarehouseUncheckedUpdateWithoutZonesInput>
  create: Prisma.XOR<Prisma.WarehouseCreateWithoutZonesInput, Prisma.WarehouseUncheckedCreateWithoutZonesInput>
  where?: Prisma.WarehouseWhereInput
}

export type WarehouseUpdateToOneWithWhereWithoutZonesInput = {
  where?: Prisma.WarehouseWhereInput
  data: Prisma.XOR<Prisma.WarehouseUpdateWithoutZonesInput, Prisma.WarehouseUncheckedUpdateWithoutZonesInput>
}

export type WarehouseUpdateWithoutZonesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  inventories?: Prisma.InventoryItemUpdateManyWithoutWarehouseNestedInput
}

export type WarehouseUncheckedUpdateWithoutZonesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  location?: Prisma.StringFieldUpdateOperationsInput | string
  capacity3D?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  inventories?: Prisma.InventoryItemUncheckedUpdateManyWithoutWarehouseNestedInput
}




export type WarehouseCountOutputType = {
  zones: number
  inventories: number
}

export type WarehouseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  zones?: boolean | WarehouseCountOutputTypeCountZonesArgs
  inventories?: boolean | WarehouseCountOutputTypeCountInventoriesArgs
}


export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseCountOutputTypeSelect<ExtArgs> | null
}


export type WarehouseCountOutputTypeCountZonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.WarehouseZoneWhereInput
}


export type WarehouseCountOutputTypeCountInventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.InventoryItemWhereInput
}


export type WarehouseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  name?: boolean
  location?: boolean
  capacity3D?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  zones?: boolean | Prisma.Warehouse$zonesArgs<ExtArgs>
  inventories?: boolean | Prisma.Warehouse$inventoriesArgs<ExtArgs>
  _count?: boolean | Prisma.WarehouseCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["warehouse"]>

export type WarehouseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  name?: boolean
  location?: boolean
  capacity3D?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["warehouse"]>

export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  name?: boolean
  location?: boolean
  capacity3D?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["warehouse"]>

export type WarehouseSelectScalar = {
  id?: boolean
  tenantId?: boolean
  name?: boolean
  location?: boolean
  capacity3D?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type WarehouseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "name" | "location" | "capacity3D" | "createdAt" | "updatedAt", ExtArgs["result"]["warehouse"]>
export type WarehouseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  zones?: boolean | Prisma.Warehouse$zonesArgs<ExtArgs>
  inventories?: boolean | Prisma.Warehouse$inventoriesArgs<ExtArgs>
  _count?: boolean | Prisma.WarehouseCountOutputTypeDefaultArgs<ExtArgs>
}
export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $WarehousePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Warehouse"
  objects: {
    zones: Prisma.$WarehouseZonePayload<ExtArgs>[]
    inventories: Prisma.$InventoryItemPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    name: string
    location: string
    capacity3D: number | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["warehouse"]>
  composites: {}
}

export type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WarehousePayload, S>

export type WarehouseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WarehouseCountAggregateInputType | true
  }

export interface WarehouseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
  
  findUnique<T extends WarehouseFindUniqueArgs>(args: Prisma.SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends WarehouseFindFirstArgs>(args?: Prisma.SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends WarehouseFindManyArgs>(args?: Prisma.SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends WarehouseCreateArgs>(args: Prisma.SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends WarehouseCreateManyArgs>(args?: Prisma.SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends WarehouseDeleteArgs>(args: Prisma.SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends WarehouseUpdateArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends WarehouseDeleteManyArgs>(args?: Prisma.SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends WarehouseUpdateManyArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends WarehouseUpsertArgs>(args: Prisma.SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends WarehouseCountArgs>(
    args?: Prisma.Subset<T, WarehouseCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], WarehouseCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends WarehouseAggregateArgs>(args: Prisma.Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

  
  groupBy<
    T extends WarehouseGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: WarehouseGroupByArgs['orderBy'] }
      : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: WarehouseFieldRefs;
}


export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  zones<T extends Prisma.Warehouse$zonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Warehouse$zonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehouseZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  inventories<T extends Prisma.Warehouse$inventoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Warehouse$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface WarehouseFieldRefs {
  readonly id: Prisma.FieldRef<"Warehouse", 'String'>
  readonly tenantId: Prisma.FieldRef<"Warehouse", 'String'>
  readonly name: Prisma.FieldRef<"Warehouse", 'String'>
  readonly location: Prisma.FieldRef<"Warehouse", 'String'>
  readonly capacity3D: Prisma.FieldRef<"Warehouse", 'Float'>
  readonly createdAt: Prisma.FieldRef<"Warehouse", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Warehouse", 'DateTime'>
}
    



export type WarehouseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  where: Prisma.WarehouseWhereUniqueInput
}


export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  where: Prisma.WarehouseWhereUniqueInput
}


export type WarehouseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  where?: Prisma.WarehouseWhereInput
  
  orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[]
}


export type WarehouseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  where?: Prisma.WarehouseWhereInput
  
  orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[]
}


export type WarehouseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  where?: Prisma.WarehouseWhereInput
  
  orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[]
  
  cursor?: Prisma.WarehouseWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[]
}


export type WarehouseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WarehouseCreateInput, Prisma.WarehouseUncheckedCreateInput>
}


export type WarehouseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.WarehouseCreateManyInput | Prisma.WarehouseCreateManyInput[]
  skipDuplicates?: boolean
}


export type WarehouseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  data: Prisma.WarehouseCreateManyInput | Prisma.WarehouseCreateManyInput[]
  skipDuplicates?: boolean
}


export type WarehouseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WarehouseUpdateInput, Prisma.WarehouseUncheckedUpdateInput>
  
  where: Prisma.WarehouseWhereUniqueInput
}


export type WarehouseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.WarehouseUpdateManyMutationInput, Prisma.WarehouseUncheckedUpdateManyInput>
  
  where?: Prisma.WarehouseWhereInput
  
  limit?: number
}


export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WarehouseUpdateManyMutationInput, Prisma.WarehouseUncheckedUpdateManyInput>
  
  where?: Prisma.WarehouseWhereInput
  
  limit?: number
}


export type WarehouseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  where: Prisma.WarehouseWhereUniqueInput
  
  create: Prisma.XOR<Prisma.WarehouseCreateInput, Prisma.WarehouseUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.WarehouseUpdateInput, Prisma.WarehouseUncheckedUpdateInput>
}


export type WarehouseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
  
  where: Prisma.WarehouseWhereUniqueInput
}


export type WarehouseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WarehouseWhereInput
  
  limit?: number
}


export type Warehouse$zonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type Warehouse$inventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type WarehouseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WarehouseSelect<ExtArgs> | null
  
  omit?: Prisma.WarehouseOmit<ExtArgs> | null
  
  include?: Prisma.WarehouseInclude<ExtArgs> | null
}
