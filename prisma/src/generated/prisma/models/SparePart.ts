





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type SparePartModel = runtime.Types.Result.DefaultSelection<Prisma.$SparePartPayload>

export type AggregateSparePart = {
  _count: SparePartCountAggregateOutputType | null
  _avg: SparePartAvgAggregateOutputType | null
  _sum: SparePartSumAggregateOutputType | null
  _min: SparePartMinAggregateOutputType | null
  _max: SparePartMaxAggregateOutputType | null
}

export type SparePartAvgAggregateOutputType = {
  stockLevel: number | null
  minThreshold: number | null
  unitCost: number | null
}

export type SparePartSumAggregateOutputType = {
  stockLevel: number | null
  minThreshold: number | null
  unitCost: number | null
}

export type SparePartMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  partName: string | null
  sku: string | null
  stockLevel: number | null
  minThreshold: number | null
  unitCost: number | null
  assetId: string | null
}

export type SparePartMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  partName: string | null
  sku: string | null
  stockLevel: number | null
  minThreshold: number | null
  unitCost: number | null
  assetId: string | null
}

export type SparePartCountAggregateOutputType = {
  id: number
  tenantId: number
  partName: number
  sku: number
  stockLevel: number
  minThreshold: number
  unitCost: number
  assetId: number
  _all: number
}


export type SparePartAvgAggregateInputType = {
  stockLevel?: true
  minThreshold?: true
  unitCost?: true
}

export type SparePartSumAggregateInputType = {
  stockLevel?: true
  minThreshold?: true
  unitCost?: true
}

export type SparePartMinAggregateInputType = {
  id?: true
  tenantId?: true
  partName?: true
  sku?: true
  stockLevel?: true
  minThreshold?: true
  unitCost?: true
  assetId?: true
}

export type SparePartMaxAggregateInputType = {
  id?: true
  tenantId?: true
  partName?: true
  sku?: true
  stockLevel?: true
  minThreshold?: true
  unitCost?: true
  assetId?: true
}

export type SparePartCountAggregateInputType = {
  id?: true
  tenantId?: true
  partName?: true
  sku?: true
  stockLevel?: true
  minThreshold?: true
  unitCost?: true
  assetId?: true
  _all?: true
}

export type SparePartAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SparePartWhereInput
  
  orderBy?: Prisma.SparePartOrderByWithRelationInput | Prisma.SparePartOrderByWithRelationInput[]
  
  cursor?: Prisma.SparePartWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | SparePartCountAggregateInputType
  
  _avg?: SparePartAvgAggregateInputType
  
  _sum?: SparePartSumAggregateInputType
  
  _min?: SparePartMinAggregateInputType
  
  _max?: SparePartMaxAggregateInputType
}

export type GetSparePartAggregateType<T extends SparePartAggregateArgs> = {
      [P in keyof T & keyof AggregateSparePart]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateSparePart[P]>
    : Prisma.GetScalarType<T[P], AggregateSparePart[P]>
}




export type SparePartGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SparePartWhereInput
  orderBy?: Prisma.SparePartOrderByWithAggregationInput | Prisma.SparePartOrderByWithAggregationInput[]
  by: Prisma.SparePartScalarFieldEnum[] | Prisma.SparePartScalarFieldEnum
  having?: Prisma.SparePartScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: SparePartCountAggregateInputType | true
  _avg?: SparePartAvgAggregateInputType
  _sum?: SparePartSumAggregateInputType
  _min?: SparePartMinAggregateInputType
  _max?: SparePartMaxAggregateInputType
}

export type SparePartGroupByOutputType = {
  id: string
  tenantId: string
  partName: string
  sku: string
  stockLevel: number
  minThreshold: number
  unitCost: number
  assetId: string
  _count: SparePartCountAggregateOutputType | null
  _avg: SparePartAvgAggregateOutputType | null
  _sum: SparePartSumAggregateOutputType | null
  _min: SparePartMinAggregateOutputType | null
  _max: SparePartMaxAggregateOutputType | null
}

export type GetSparePartGroupByPayload<T extends SparePartGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<SparePartGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof SparePartGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], SparePartGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], SparePartGroupByOutputType[P]>
      }
    >
  >



export type SparePartWhereInput = {
  AND?: Prisma.SparePartWhereInput | Prisma.SparePartWhereInput[]
  OR?: Prisma.SparePartWhereInput[]
  NOT?: Prisma.SparePartWhereInput | Prisma.SparePartWhereInput[]
  id?: Prisma.StringFilter<"SparePart"> | string
  tenantId?: Prisma.StringFilter<"SparePart"> | string
  partName?: Prisma.StringFilter<"SparePart"> | string
  sku?: Prisma.StringFilter<"SparePart"> | string
  stockLevel?: Prisma.IntFilter<"SparePart"> | number
  minThreshold?: Prisma.IntFilter<"SparePart"> | number
  unitCost?: Prisma.FloatFilter<"SparePart"> | number
  assetId?: Prisma.StringFilter<"SparePart"> | string
  asset?: Prisma.XOR<Prisma.EnterpriseAssetScalarRelationFilter, Prisma.EnterpriseAssetWhereInput>
}

export type SparePartOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  partName?: Prisma.SortOrder
  sku?: Prisma.SortOrder
  stockLevel?: Prisma.SortOrder
  minThreshold?: Prisma.SortOrder
  unitCost?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
  asset?: Prisma.EnterpriseAssetOrderByWithRelationInput
}

export type SparePartWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  sku?: string
  AND?: Prisma.SparePartWhereInput | Prisma.SparePartWhereInput[]
  OR?: Prisma.SparePartWhereInput[]
  NOT?: Prisma.SparePartWhereInput | Prisma.SparePartWhereInput[]
  tenantId?: Prisma.StringFilter<"SparePart"> | string
  partName?: Prisma.StringFilter<"SparePart"> | string
  stockLevel?: Prisma.IntFilter<"SparePart"> | number
  minThreshold?: Prisma.IntFilter<"SparePart"> | number
  unitCost?: Prisma.FloatFilter<"SparePart"> | number
  assetId?: Prisma.StringFilter<"SparePart"> | string
  asset?: Prisma.XOR<Prisma.EnterpriseAssetScalarRelationFilter, Prisma.EnterpriseAssetWhereInput>
}, "id" | "sku">

export type SparePartOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  partName?: Prisma.SortOrder
  sku?: Prisma.SortOrder
  stockLevel?: Prisma.SortOrder
  minThreshold?: Prisma.SortOrder
  unitCost?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
  _count?: Prisma.SparePartCountOrderByAggregateInput
  _avg?: Prisma.SparePartAvgOrderByAggregateInput
  _max?: Prisma.SparePartMaxOrderByAggregateInput
  _min?: Prisma.SparePartMinOrderByAggregateInput
  _sum?: Prisma.SparePartSumOrderByAggregateInput
}

export type SparePartScalarWhereWithAggregatesInput = {
  AND?: Prisma.SparePartScalarWhereWithAggregatesInput | Prisma.SparePartScalarWhereWithAggregatesInput[]
  OR?: Prisma.SparePartScalarWhereWithAggregatesInput[]
  NOT?: Prisma.SparePartScalarWhereWithAggregatesInput | Prisma.SparePartScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"SparePart"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"SparePart"> | string
  partName?: Prisma.StringWithAggregatesFilter<"SparePart"> | string
  sku?: Prisma.StringWithAggregatesFilter<"SparePart"> | string
  stockLevel?: Prisma.IntWithAggregatesFilter<"SparePart"> | number
  minThreshold?: Prisma.IntWithAggregatesFilter<"SparePart"> | number
  unitCost?: Prisma.FloatWithAggregatesFilter<"SparePart"> | number
  assetId?: Prisma.StringWithAggregatesFilter<"SparePart"> | string
}

export type SparePartCreateInput = {
  id?: string
  tenantId: string
  partName: string
  sku: string
  stockLevel?: number
  minThreshold?: number
  unitCost: number
  asset: Prisma.EnterpriseAssetCreateNestedOneWithoutSparePartsInput
}

export type SparePartUncheckedCreateInput = {
  id?: string
  tenantId: string
  partName: string
  sku: string
  stockLevel?: number
  minThreshold?: number
  unitCost: number
  assetId: string
}

export type SparePartUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  partName?: Prisma.StringFieldUpdateOperationsInput | string
  sku?: Prisma.StringFieldUpdateOperationsInput | string
  stockLevel?: Prisma.IntFieldUpdateOperationsInput | number
  minThreshold?: Prisma.IntFieldUpdateOperationsInput | number
  unitCost?: Prisma.FloatFieldUpdateOperationsInput | number
  asset?: Prisma.EnterpriseAssetUpdateOneRequiredWithoutSparePartsNestedInput
}

export type SparePartUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  partName?: Prisma.StringFieldUpdateOperationsInput | string
  sku?: Prisma.StringFieldUpdateOperationsInput | string
  stockLevel?: Prisma.IntFieldUpdateOperationsInput | number
  minThreshold?: Prisma.IntFieldUpdateOperationsInput | number
  unitCost?: Prisma.FloatFieldUpdateOperationsInput | number
  assetId?: Prisma.StringFieldUpdateOperationsInput | string
}

export type SparePartCreateManyInput = {
  id?: string
  tenantId: string
  partName: string
  sku: string
  stockLevel?: number
  minThreshold?: number
  unitCost: number
  assetId: string
}

export type SparePartUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  partName?: Prisma.StringFieldUpdateOperationsInput | string
  sku?: Prisma.StringFieldUpdateOperationsInput | string
  stockLevel?: Prisma.IntFieldUpdateOperationsInput | number
  minThreshold?: Prisma.IntFieldUpdateOperationsInput | number
  unitCost?: Prisma.FloatFieldUpdateOperationsInput | number
}

export type SparePartUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  partName?: Prisma.StringFieldUpdateOperationsInput | string
  sku?: Prisma.StringFieldUpdateOperationsInput | string
  stockLevel?: Prisma.IntFieldUpdateOperationsInput | number
  minThreshold?: Prisma.IntFieldUpdateOperationsInput | number
  unitCost?: Prisma.FloatFieldUpdateOperationsInput | number
  assetId?: Prisma.StringFieldUpdateOperationsInput | string
}

export type SparePartListRelationFilter = {
  every?: Prisma.SparePartWhereInput
  some?: Prisma.SparePartWhereInput
  none?: Prisma.SparePartWhereInput
}

export type SparePartOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type SparePartCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  partName?: Prisma.SortOrder
  sku?: Prisma.SortOrder
  stockLevel?: Prisma.SortOrder
  minThreshold?: Prisma.SortOrder
  unitCost?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
}

export type SparePartAvgOrderByAggregateInput = {
  stockLevel?: Prisma.SortOrder
  minThreshold?: Prisma.SortOrder
  unitCost?: Prisma.SortOrder
}

export type SparePartMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  partName?: Prisma.SortOrder
  sku?: Prisma.SortOrder
  stockLevel?: Prisma.SortOrder
  minThreshold?: Prisma.SortOrder
  unitCost?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
}

export type SparePartMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  partName?: Prisma.SortOrder
  sku?: Prisma.SortOrder
  stockLevel?: Prisma.SortOrder
  minThreshold?: Prisma.SortOrder
  unitCost?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
}

export type SparePartSumOrderByAggregateInput = {
  stockLevel?: Prisma.SortOrder
  minThreshold?: Prisma.SortOrder
  unitCost?: Prisma.SortOrder
}

export type SparePartCreateNestedManyWithoutAssetInput = {
  create?: Prisma.XOR<Prisma.SparePartCreateWithoutAssetInput, Prisma.SparePartUncheckedCreateWithoutAssetInput> | Prisma.SparePartCreateWithoutAssetInput[] | Prisma.SparePartUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.SparePartCreateOrConnectWithoutAssetInput | Prisma.SparePartCreateOrConnectWithoutAssetInput[]
  createMany?: Prisma.SparePartCreateManyAssetInputEnvelope
  connect?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
}

export type SparePartUncheckedCreateNestedManyWithoutAssetInput = {
  create?: Prisma.XOR<Prisma.SparePartCreateWithoutAssetInput, Prisma.SparePartUncheckedCreateWithoutAssetInput> | Prisma.SparePartCreateWithoutAssetInput[] | Prisma.SparePartUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.SparePartCreateOrConnectWithoutAssetInput | Prisma.SparePartCreateOrConnectWithoutAssetInput[]
  createMany?: Prisma.SparePartCreateManyAssetInputEnvelope
  connect?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
}

export type SparePartUpdateManyWithoutAssetNestedInput = {
  create?: Prisma.XOR<Prisma.SparePartCreateWithoutAssetInput, Prisma.SparePartUncheckedCreateWithoutAssetInput> | Prisma.SparePartCreateWithoutAssetInput[] | Prisma.SparePartUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.SparePartCreateOrConnectWithoutAssetInput | Prisma.SparePartCreateOrConnectWithoutAssetInput[]
  upsert?: Prisma.SparePartUpsertWithWhereUniqueWithoutAssetInput | Prisma.SparePartUpsertWithWhereUniqueWithoutAssetInput[]
  createMany?: Prisma.SparePartCreateManyAssetInputEnvelope
  set?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  disconnect?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  delete?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  connect?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  update?: Prisma.SparePartUpdateWithWhereUniqueWithoutAssetInput | Prisma.SparePartUpdateWithWhereUniqueWithoutAssetInput[]
  updateMany?: Prisma.SparePartUpdateManyWithWhereWithoutAssetInput | Prisma.SparePartUpdateManyWithWhereWithoutAssetInput[]
  deleteMany?: Prisma.SparePartScalarWhereInput | Prisma.SparePartScalarWhereInput[]
}

export type SparePartUncheckedUpdateManyWithoutAssetNestedInput = {
  create?: Prisma.XOR<Prisma.SparePartCreateWithoutAssetInput, Prisma.SparePartUncheckedCreateWithoutAssetInput> | Prisma.SparePartCreateWithoutAssetInput[] | Prisma.SparePartUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.SparePartCreateOrConnectWithoutAssetInput | Prisma.SparePartCreateOrConnectWithoutAssetInput[]
  upsert?: Prisma.SparePartUpsertWithWhereUniqueWithoutAssetInput | Prisma.SparePartUpsertWithWhereUniqueWithoutAssetInput[]
  createMany?: Prisma.SparePartCreateManyAssetInputEnvelope
  set?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  disconnect?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  delete?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  connect?: Prisma.SparePartWhereUniqueInput | Prisma.SparePartWhereUniqueInput[]
  update?: Prisma.SparePartUpdateWithWhereUniqueWithoutAssetInput | Prisma.SparePartUpdateWithWhereUniqueWithoutAssetInput[]
  updateMany?: Prisma.SparePartUpdateManyWithWhereWithoutAssetInput | Prisma.SparePartUpdateManyWithWhereWithoutAssetInput[]
  deleteMany?: Prisma.SparePartScalarWhereInput | Prisma.SparePartScalarWhereInput[]
}

export type SparePartCreateWithoutAssetInput = {
  id?: string
  tenantId: string
  partName: string
  sku: string
  stockLevel?: number
  minThreshold?: number
  unitCost: number
}

export type SparePartUncheckedCreateWithoutAssetInput = {
  id?: string
  tenantId: string
  partName: string
  sku: string
  stockLevel?: number
  minThreshold?: number
  unitCost: number
}

export type SparePartCreateOrConnectWithoutAssetInput = {
  where: Prisma.SparePartWhereUniqueInput
  create: Prisma.XOR<Prisma.SparePartCreateWithoutAssetInput, Prisma.SparePartUncheckedCreateWithoutAssetInput>
}

export type SparePartCreateManyAssetInputEnvelope = {
  data: Prisma.SparePartCreateManyAssetInput | Prisma.SparePartCreateManyAssetInput[]
  skipDuplicates?: boolean
}

export type SparePartUpsertWithWhereUniqueWithoutAssetInput = {
  where: Prisma.SparePartWhereUniqueInput
  update: Prisma.XOR<Prisma.SparePartUpdateWithoutAssetInput, Prisma.SparePartUncheckedUpdateWithoutAssetInput>
  create: Prisma.XOR<Prisma.SparePartCreateWithoutAssetInput, Prisma.SparePartUncheckedCreateWithoutAssetInput>
}

export type SparePartUpdateWithWhereUniqueWithoutAssetInput = {
  where: Prisma.SparePartWhereUniqueInput
  data: Prisma.XOR<Prisma.SparePartUpdateWithoutAssetInput, Prisma.SparePartUncheckedUpdateWithoutAssetInput>
}

export type SparePartUpdateManyWithWhereWithoutAssetInput = {
  where: Prisma.SparePartScalarWhereInput
  data: Prisma.XOR<Prisma.SparePartUpdateManyMutationInput, Prisma.SparePartUncheckedUpdateManyWithoutAssetInput>
}

export type SparePartScalarWhereInput = {
  AND?: Prisma.SparePartScalarWhereInput | Prisma.SparePartScalarWhereInput[]
  OR?: Prisma.SparePartScalarWhereInput[]
  NOT?: Prisma.SparePartScalarWhereInput | Prisma.SparePartScalarWhereInput[]
  id?: Prisma.StringFilter<"SparePart"> | string
  tenantId?: Prisma.StringFilter<"SparePart"> | string
  partName?: Prisma.StringFilter<"SparePart"> | string
  sku?: Prisma.StringFilter<"SparePart"> | string
  stockLevel?: Prisma.IntFilter<"SparePart"> | number
  minThreshold?: Prisma.IntFilter<"SparePart"> | number
  unitCost?: Prisma.FloatFilter<"SparePart"> | number
  assetId?: Prisma.StringFilter<"SparePart"> | string
}

export type SparePartCreateManyAssetInput = {
  id?: string
  tenantId: string
  partName: string
  sku: string
  stockLevel?: number
  minThreshold?: number
  unitCost: number
}

export type SparePartUpdateWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  partName?: Prisma.StringFieldUpdateOperationsInput | string
  sku?: Prisma.StringFieldUpdateOperationsInput | string
  stockLevel?: Prisma.IntFieldUpdateOperationsInput | number
  minThreshold?: Prisma.IntFieldUpdateOperationsInput | number
  unitCost?: Prisma.FloatFieldUpdateOperationsInput | number
}

export type SparePartUncheckedUpdateWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  partName?: Prisma.StringFieldUpdateOperationsInput | string
  sku?: Prisma.StringFieldUpdateOperationsInput | string
  stockLevel?: Prisma.IntFieldUpdateOperationsInput | number
  minThreshold?: Prisma.IntFieldUpdateOperationsInput | number
  unitCost?: Prisma.FloatFieldUpdateOperationsInput | number
}

export type SparePartUncheckedUpdateManyWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  partName?: Prisma.StringFieldUpdateOperationsInput | string
  sku?: Prisma.StringFieldUpdateOperationsInput | string
  stockLevel?: Prisma.IntFieldUpdateOperationsInput | number
  minThreshold?: Prisma.IntFieldUpdateOperationsInput | number
  unitCost?: Prisma.FloatFieldUpdateOperationsInput | number
}



export type SparePartSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  partName?: boolean
  sku?: boolean
  stockLevel?: boolean
  minThreshold?: boolean
  unitCost?: boolean
  assetId?: boolean
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}, ExtArgs["result"]["sparePart"]>

export type SparePartSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  partName?: boolean
  sku?: boolean
  stockLevel?: boolean
  minThreshold?: boolean
  unitCost?: boolean
  assetId?: boolean
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}, ExtArgs["result"]["sparePart"]>

export type SparePartSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  partName?: boolean
  sku?: boolean
  stockLevel?: boolean
  minThreshold?: boolean
  unitCost?: boolean
  assetId?: boolean
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}, ExtArgs["result"]["sparePart"]>

export type SparePartSelectScalar = {
  id?: boolean
  tenantId?: boolean
  partName?: boolean
  sku?: boolean
  stockLevel?: boolean
  minThreshold?: boolean
  unitCost?: boolean
  assetId?: boolean
}

export type SparePartOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "partName" | "sku" | "stockLevel" | "minThreshold" | "unitCost" | "assetId", ExtArgs["result"]["sparePart"]>
export type SparePartInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}
export type SparePartIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}
export type SparePartIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}

export type $SparePartPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "SparePart"
  objects: {
    asset: Prisma.$EnterpriseAssetPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    partName: string
    sku: string
    stockLevel: number
    minThreshold: number
    unitCost: number
    assetId: string
  }, ExtArgs["result"]["sparePart"]>
  composites: {}
}

export type SparePartGetPayload<S extends boolean | null | undefined | SparePartDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SparePartPayload, S>

export type SparePartCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<SparePartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SparePartCountAggregateInputType | true
  }

export interface SparePartDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SparePart'], meta: { name: 'SparePart' } }
  
  findUnique<T extends SparePartFindUniqueArgs>(args: Prisma.SelectSubset<T, SparePartFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends SparePartFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SparePartFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends SparePartFindFirstArgs>(args?: Prisma.SelectSubset<T, SparePartFindFirstArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends SparePartFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SparePartFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends SparePartFindManyArgs>(args?: Prisma.SelectSubset<T, SparePartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends SparePartCreateArgs>(args: Prisma.SelectSubset<T, SparePartCreateArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends SparePartCreateManyArgs>(args?: Prisma.SelectSubset<T, SparePartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends SparePartCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SparePartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends SparePartDeleteArgs>(args: Prisma.SelectSubset<T, SparePartDeleteArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends SparePartUpdateArgs>(args: Prisma.SelectSubset<T, SparePartUpdateArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends SparePartDeleteManyArgs>(args?: Prisma.SelectSubset<T, SparePartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends SparePartUpdateManyArgs>(args: Prisma.SelectSubset<T, SparePartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends SparePartUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SparePartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends SparePartUpsertArgs>(args: Prisma.SelectSubset<T, SparePartUpsertArgs<ExtArgs>>): Prisma.Prisma__SparePartClient<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends SparePartCountArgs>(
    args?: Prisma.Subset<T, SparePartCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], SparePartCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends SparePartAggregateArgs>(args: Prisma.Subset<T, SparePartAggregateArgs>): Prisma.PrismaPromise<GetSparePartAggregateType<T>>

  
  groupBy<
    T extends SparePartGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: SparePartGroupByArgs['orderBy'] }
      : { orderBy?: SparePartGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, SparePartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSparePartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: SparePartFieldRefs;
}


export interface Prisma__SparePartClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  asset<T extends Prisma.EnterpriseAssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseAssetDefaultArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface SparePartFieldRefs {
  readonly id: Prisma.FieldRef<"SparePart", 'String'>
  readonly tenantId: Prisma.FieldRef<"SparePart", 'String'>
  readonly partName: Prisma.FieldRef<"SparePart", 'String'>
  readonly sku: Prisma.FieldRef<"SparePart", 'String'>
  readonly stockLevel: Prisma.FieldRef<"SparePart", 'Int'>
  readonly minThreshold: Prisma.FieldRef<"SparePart", 'Int'>
  readonly unitCost: Prisma.FieldRef<"SparePart", 'Float'>
  readonly assetId: Prisma.FieldRef<"SparePart", 'String'>
}
    



export type SparePartFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  where: Prisma.SparePartWhereUniqueInput
}


export type SparePartFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  where: Prisma.SparePartWhereUniqueInput
}


export type SparePartFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  where?: Prisma.SparePartWhereInput
  
  orderBy?: Prisma.SparePartOrderByWithRelationInput | Prisma.SparePartOrderByWithRelationInput[]
  
  cursor?: Prisma.SparePartWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SparePartScalarFieldEnum | Prisma.SparePartScalarFieldEnum[]
}


export type SparePartFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  where?: Prisma.SparePartWhereInput
  
  orderBy?: Prisma.SparePartOrderByWithRelationInput | Prisma.SparePartOrderByWithRelationInput[]
  
  cursor?: Prisma.SparePartWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SparePartScalarFieldEnum | Prisma.SparePartScalarFieldEnum[]
}


export type SparePartFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  where?: Prisma.SparePartWhereInput
  
  orderBy?: Prisma.SparePartOrderByWithRelationInput | Prisma.SparePartOrderByWithRelationInput[]
  
  cursor?: Prisma.SparePartWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SparePartScalarFieldEnum | Prisma.SparePartScalarFieldEnum[]
}


export type SparePartCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SparePartCreateInput, Prisma.SparePartUncheckedCreateInput>
}


export type SparePartCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.SparePartCreateManyInput | Prisma.SparePartCreateManyInput[]
  skipDuplicates?: boolean
}


export type SparePartCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  data: Prisma.SparePartCreateManyInput | Prisma.SparePartCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.SparePartIncludeCreateManyAndReturn<ExtArgs> | null
}


export type SparePartUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SparePartUpdateInput, Prisma.SparePartUncheckedUpdateInput>
  
  where: Prisma.SparePartWhereUniqueInput
}


export type SparePartUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.SparePartUpdateManyMutationInput, Prisma.SparePartUncheckedUpdateManyInput>
  
  where?: Prisma.SparePartWhereInput
  
  limit?: number
}


export type SparePartUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SparePartUpdateManyMutationInput, Prisma.SparePartUncheckedUpdateManyInput>
  
  where?: Prisma.SparePartWhereInput
  
  limit?: number
  
  include?: Prisma.SparePartIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type SparePartUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  where: Prisma.SparePartWhereUniqueInput
  
  create: Prisma.XOR<Prisma.SparePartCreateInput, Prisma.SparePartUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.SparePartUpdateInput, Prisma.SparePartUncheckedUpdateInput>
}


export type SparePartDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  
  where: Prisma.SparePartWhereUniqueInput
}


export type SparePartDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SparePartWhereInput
  
  limit?: number
}


export type SparePartDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
}
