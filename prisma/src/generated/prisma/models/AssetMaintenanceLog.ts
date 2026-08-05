





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type AssetMaintenanceLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetMaintenanceLogPayload>

export type AggregateAssetMaintenanceLog = {
  _count: AssetMaintenanceLogCountAggregateOutputType | null
  _avg: AssetMaintenanceLogAvgAggregateOutputType | null
  _sum: AssetMaintenanceLogSumAggregateOutputType | null
  _min: AssetMaintenanceLogMinAggregateOutputType | null
  _max: AssetMaintenanceLogMaxAggregateOutputType | null
}

export type AssetMaintenanceLogAvgAggregateOutputType = {
  cost: number | null
}

export type AssetMaintenanceLogSumAggregateOutputType = {
  cost: number | null
}

export type AssetMaintenanceLogMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  assetId: string | null
  description: string | null
  cost: number | null
  performedAt: Date | null
}

export type AssetMaintenanceLogMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  assetId: string | null
  description: string | null
  cost: number | null
  performedAt: Date | null
}

export type AssetMaintenanceLogCountAggregateOutputType = {
  id: number
  tenantId: number
  assetId: number
  description: number
  cost: number
  performedAt: number
  _all: number
}


export type AssetMaintenanceLogAvgAggregateInputType = {
  cost?: true
}

export type AssetMaintenanceLogSumAggregateInputType = {
  cost?: true
}

export type AssetMaintenanceLogMinAggregateInputType = {
  id?: true
  tenantId?: true
  assetId?: true
  description?: true
  cost?: true
  performedAt?: true
}

export type AssetMaintenanceLogMaxAggregateInputType = {
  id?: true
  tenantId?: true
  assetId?: true
  description?: true
  cost?: true
  performedAt?: true
}

export type AssetMaintenanceLogCountAggregateInputType = {
  id?: true
  tenantId?: true
  assetId?: true
  description?: true
  cost?: true
  performedAt?: true
  _all?: true
}

export type AssetMaintenanceLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.AssetMaintenanceLogWhereInput
  
  orderBy?: Prisma.AssetMaintenanceLogOrderByWithRelationInput | Prisma.AssetMaintenanceLogOrderByWithRelationInput[]
  
  cursor?: Prisma.AssetMaintenanceLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | AssetMaintenanceLogCountAggregateInputType
  
  _avg?: AssetMaintenanceLogAvgAggregateInputType
  
  _sum?: AssetMaintenanceLogSumAggregateInputType
  
  _min?: AssetMaintenanceLogMinAggregateInputType
  
  _max?: AssetMaintenanceLogMaxAggregateInputType
}

export type GetAssetMaintenanceLogAggregateType<T extends AssetMaintenanceLogAggregateArgs> = {
      [P in keyof T & keyof AggregateAssetMaintenanceLog]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateAssetMaintenanceLog[P]>
    : Prisma.GetScalarType<T[P], AggregateAssetMaintenanceLog[P]>
}




export type AssetMaintenanceLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AssetMaintenanceLogWhereInput
  orderBy?: Prisma.AssetMaintenanceLogOrderByWithAggregationInput | Prisma.AssetMaintenanceLogOrderByWithAggregationInput[]
  by: Prisma.AssetMaintenanceLogScalarFieldEnum[] | Prisma.AssetMaintenanceLogScalarFieldEnum
  having?: Prisma.AssetMaintenanceLogScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: AssetMaintenanceLogCountAggregateInputType | true
  _avg?: AssetMaintenanceLogAvgAggregateInputType
  _sum?: AssetMaintenanceLogSumAggregateInputType
  _min?: AssetMaintenanceLogMinAggregateInputType
  _max?: AssetMaintenanceLogMaxAggregateInputType
}

export type AssetMaintenanceLogGroupByOutputType = {
  id: string
  tenantId: string
  assetId: string
  description: string
  cost: number
  performedAt: Date
  _count: AssetMaintenanceLogCountAggregateOutputType | null
  _avg: AssetMaintenanceLogAvgAggregateOutputType | null
  _sum: AssetMaintenanceLogSumAggregateOutputType | null
  _min: AssetMaintenanceLogMinAggregateOutputType | null
  _max: AssetMaintenanceLogMaxAggregateOutputType | null
}

export type GetAssetMaintenanceLogGroupByPayload<T extends AssetMaintenanceLogGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<AssetMaintenanceLogGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof AssetMaintenanceLogGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], AssetMaintenanceLogGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], AssetMaintenanceLogGroupByOutputType[P]>
      }
    >
  >



export type AssetMaintenanceLogWhereInput = {
  AND?: Prisma.AssetMaintenanceLogWhereInput | Prisma.AssetMaintenanceLogWhereInput[]
  OR?: Prisma.AssetMaintenanceLogWhereInput[]
  NOT?: Prisma.AssetMaintenanceLogWhereInput | Prisma.AssetMaintenanceLogWhereInput[]
  id?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  tenantId?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  assetId?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  description?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  cost?: Prisma.FloatFilter<"AssetMaintenanceLog"> | number
  performedAt?: Prisma.DateTimeFilter<"AssetMaintenanceLog"> | Date | string
  asset?: Prisma.XOR<Prisma.EnterpriseAssetScalarRelationFilter, Prisma.EnterpriseAssetWhereInput>
}

export type AssetMaintenanceLogOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  cost?: Prisma.SortOrder
  performedAt?: Prisma.SortOrder
  asset?: Prisma.EnterpriseAssetOrderByWithRelationInput
}

export type AssetMaintenanceLogWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.AssetMaintenanceLogWhereInput | Prisma.AssetMaintenanceLogWhereInput[]
  OR?: Prisma.AssetMaintenanceLogWhereInput[]
  NOT?: Prisma.AssetMaintenanceLogWhereInput | Prisma.AssetMaintenanceLogWhereInput[]
  tenantId?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  assetId?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  description?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  cost?: Prisma.FloatFilter<"AssetMaintenanceLog"> | number
  performedAt?: Prisma.DateTimeFilter<"AssetMaintenanceLog"> | Date | string
  asset?: Prisma.XOR<Prisma.EnterpriseAssetScalarRelationFilter, Prisma.EnterpriseAssetWhereInput>
}, "id">

export type AssetMaintenanceLogOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  cost?: Prisma.SortOrder
  performedAt?: Prisma.SortOrder
  _count?: Prisma.AssetMaintenanceLogCountOrderByAggregateInput
  _avg?: Prisma.AssetMaintenanceLogAvgOrderByAggregateInput
  _max?: Prisma.AssetMaintenanceLogMaxOrderByAggregateInput
  _min?: Prisma.AssetMaintenanceLogMinOrderByAggregateInput
  _sum?: Prisma.AssetMaintenanceLogSumOrderByAggregateInput
}

export type AssetMaintenanceLogScalarWhereWithAggregatesInput = {
  AND?: Prisma.AssetMaintenanceLogScalarWhereWithAggregatesInput | Prisma.AssetMaintenanceLogScalarWhereWithAggregatesInput[]
  OR?: Prisma.AssetMaintenanceLogScalarWhereWithAggregatesInput[]
  NOT?: Prisma.AssetMaintenanceLogScalarWhereWithAggregatesInput | Prisma.AssetMaintenanceLogScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"AssetMaintenanceLog"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"AssetMaintenanceLog"> | string
  assetId?: Prisma.StringWithAggregatesFilter<"AssetMaintenanceLog"> | string
  description?: Prisma.StringWithAggregatesFilter<"AssetMaintenanceLog"> | string
  cost?: Prisma.FloatWithAggregatesFilter<"AssetMaintenanceLog"> | number
  performedAt?: Prisma.DateTimeWithAggregatesFilter<"AssetMaintenanceLog"> | Date | string
}

export type AssetMaintenanceLogCreateInput = {
  id?: string
  tenantId: string
  description: string
  cost: number
  performedAt?: Date | string
  asset: Prisma.EnterpriseAssetCreateNestedOneWithoutMaintenanceLogsInput
}

export type AssetMaintenanceLogUncheckedCreateInput = {
  id?: string
  tenantId: string
  assetId: string
  description: string
  cost: number
  performedAt?: Date | string
}

export type AssetMaintenanceLogUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  cost?: Prisma.FloatFieldUpdateOperationsInput | number
  performedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  asset?: Prisma.EnterpriseAssetUpdateOneRequiredWithoutMaintenanceLogsNestedInput
}

export type AssetMaintenanceLogUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetId?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  cost?: Prisma.FloatFieldUpdateOperationsInput | number
  performedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type AssetMaintenanceLogCreateManyInput = {
  id?: string
  tenantId: string
  assetId: string
  description: string
  cost: number
  performedAt?: Date | string
}

export type AssetMaintenanceLogUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  cost?: Prisma.FloatFieldUpdateOperationsInput | number
  performedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type AssetMaintenanceLogUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetId?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  cost?: Prisma.FloatFieldUpdateOperationsInput | number
  performedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type AssetMaintenanceLogListRelationFilter = {
  every?: Prisma.AssetMaintenanceLogWhereInput
  some?: Prisma.AssetMaintenanceLogWhereInput
  none?: Prisma.AssetMaintenanceLogWhereInput
}

export type AssetMaintenanceLogOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type AssetMaintenanceLogCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  cost?: Prisma.SortOrder
  performedAt?: Prisma.SortOrder
}

export type AssetMaintenanceLogAvgOrderByAggregateInput = {
  cost?: Prisma.SortOrder
}

export type AssetMaintenanceLogMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  cost?: Prisma.SortOrder
  performedAt?: Prisma.SortOrder
}

export type AssetMaintenanceLogMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  cost?: Prisma.SortOrder
  performedAt?: Prisma.SortOrder
}

export type AssetMaintenanceLogSumOrderByAggregateInput = {
  cost?: Prisma.SortOrder
}

export type AssetMaintenanceLogCreateNestedManyWithoutAssetInput = {
  create?: Prisma.XOR<Prisma.AssetMaintenanceLogCreateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceLogCreateWithoutAssetInput[] | Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput[]
  createMany?: Prisma.AssetMaintenanceLogCreateManyAssetInputEnvelope
  connect?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
}

export type AssetMaintenanceLogUncheckedCreateNestedManyWithoutAssetInput = {
  create?: Prisma.XOR<Prisma.AssetMaintenanceLogCreateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceLogCreateWithoutAssetInput[] | Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput[]
  createMany?: Prisma.AssetMaintenanceLogCreateManyAssetInputEnvelope
  connect?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
}

export type AssetMaintenanceLogUpdateManyWithoutAssetNestedInput = {
  create?: Prisma.XOR<Prisma.AssetMaintenanceLogCreateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceLogCreateWithoutAssetInput[] | Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput[]
  upsert?: Prisma.AssetMaintenanceLogUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceLogUpsertWithWhereUniqueWithoutAssetInput[]
  createMany?: Prisma.AssetMaintenanceLogCreateManyAssetInputEnvelope
  set?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  disconnect?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  delete?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  connect?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  update?: Prisma.AssetMaintenanceLogUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceLogUpdateWithWhereUniqueWithoutAssetInput[]
  updateMany?: Prisma.AssetMaintenanceLogUpdateManyWithWhereWithoutAssetInput | Prisma.AssetMaintenanceLogUpdateManyWithWhereWithoutAssetInput[]
  deleteMany?: Prisma.AssetMaintenanceLogScalarWhereInput | Prisma.AssetMaintenanceLogScalarWhereInput[]
}

export type AssetMaintenanceLogUncheckedUpdateManyWithoutAssetNestedInput = {
  create?: Prisma.XOR<Prisma.AssetMaintenanceLogCreateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceLogCreateWithoutAssetInput[] | Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput[]
  connectOrCreate?: Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceLogCreateOrConnectWithoutAssetInput[]
  upsert?: Prisma.AssetMaintenanceLogUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceLogUpsertWithWhereUniqueWithoutAssetInput[]
  createMany?: Prisma.AssetMaintenanceLogCreateManyAssetInputEnvelope
  set?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  disconnect?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  delete?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  connect?: Prisma.AssetMaintenanceLogWhereUniqueInput | Prisma.AssetMaintenanceLogWhereUniqueInput[]
  update?: Prisma.AssetMaintenanceLogUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceLogUpdateWithWhereUniqueWithoutAssetInput[]
  updateMany?: Prisma.AssetMaintenanceLogUpdateManyWithWhereWithoutAssetInput | Prisma.AssetMaintenanceLogUpdateManyWithWhereWithoutAssetInput[]
  deleteMany?: Prisma.AssetMaintenanceLogScalarWhereInput | Prisma.AssetMaintenanceLogScalarWhereInput[]
}

export type AssetMaintenanceLogCreateWithoutAssetInput = {
  id?: string
  tenantId: string
  description: string
  cost: number
  performedAt?: Date | string
}

export type AssetMaintenanceLogUncheckedCreateWithoutAssetInput = {
  id?: string
  tenantId: string
  description: string
  cost: number
  performedAt?: Date | string
}

export type AssetMaintenanceLogCreateOrConnectWithoutAssetInput = {
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
  create: Prisma.XOR<Prisma.AssetMaintenanceLogCreateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput>
}

export type AssetMaintenanceLogCreateManyAssetInputEnvelope = {
  data: Prisma.AssetMaintenanceLogCreateManyAssetInput | Prisma.AssetMaintenanceLogCreateManyAssetInput[]
  skipDuplicates?: boolean
}

export type AssetMaintenanceLogUpsertWithWhereUniqueWithoutAssetInput = {
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
  update: Prisma.XOR<Prisma.AssetMaintenanceLogUpdateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedUpdateWithoutAssetInput>
  create: Prisma.XOR<Prisma.AssetMaintenanceLogCreateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedCreateWithoutAssetInput>
}

export type AssetMaintenanceLogUpdateWithWhereUniqueWithoutAssetInput = {
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
  data: Prisma.XOR<Prisma.AssetMaintenanceLogUpdateWithoutAssetInput, Prisma.AssetMaintenanceLogUncheckedUpdateWithoutAssetInput>
}

export type AssetMaintenanceLogUpdateManyWithWhereWithoutAssetInput = {
  where: Prisma.AssetMaintenanceLogScalarWhereInput
  data: Prisma.XOR<Prisma.AssetMaintenanceLogUpdateManyMutationInput, Prisma.AssetMaintenanceLogUncheckedUpdateManyWithoutAssetInput>
}

export type AssetMaintenanceLogScalarWhereInput = {
  AND?: Prisma.AssetMaintenanceLogScalarWhereInput | Prisma.AssetMaintenanceLogScalarWhereInput[]
  OR?: Prisma.AssetMaintenanceLogScalarWhereInput[]
  NOT?: Prisma.AssetMaintenanceLogScalarWhereInput | Prisma.AssetMaintenanceLogScalarWhereInput[]
  id?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  tenantId?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  assetId?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  description?: Prisma.StringFilter<"AssetMaintenanceLog"> | string
  cost?: Prisma.FloatFilter<"AssetMaintenanceLog"> | number
  performedAt?: Prisma.DateTimeFilter<"AssetMaintenanceLog"> | Date | string
}

export type AssetMaintenanceLogCreateManyAssetInput = {
  id?: string
  tenantId: string
  description: string
  cost: number
  performedAt?: Date | string
}

export type AssetMaintenanceLogUpdateWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  cost?: Prisma.FloatFieldUpdateOperationsInput | number
  performedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type AssetMaintenanceLogUncheckedUpdateWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  cost?: Prisma.FloatFieldUpdateOperationsInput | number
  performedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type AssetMaintenanceLogUncheckedUpdateManyWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  cost?: Prisma.FloatFieldUpdateOperationsInput | number
  performedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type AssetMaintenanceLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  assetId?: boolean
  description?: boolean
  cost?: boolean
  performedAt?: boolean
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}, ExtArgs["result"]["assetMaintenanceLog"]>

export type AssetMaintenanceLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  assetId?: boolean
  description?: boolean
  cost?: boolean
  performedAt?: boolean
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}, ExtArgs["result"]["assetMaintenanceLog"]>

export type AssetMaintenanceLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  assetId?: boolean
  description?: boolean
  cost?: boolean
  performedAt?: boolean
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}, ExtArgs["result"]["assetMaintenanceLog"]>

export type AssetMaintenanceLogSelectScalar = {
  id?: boolean
  tenantId?: boolean
  assetId?: boolean
  description?: boolean
  cost?: boolean
  performedAt?: boolean
}

export type AssetMaintenanceLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "assetId" | "description" | "cost" | "performedAt", ExtArgs["result"]["assetMaintenanceLog"]>
export type AssetMaintenanceLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}
export type AssetMaintenanceLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}
export type AssetMaintenanceLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  asset?: boolean | Prisma.EnterpriseAssetDefaultArgs<ExtArgs>
}

export type $AssetMaintenanceLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "AssetMaintenanceLog"
  objects: {
    asset: Prisma.$EnterpriseAssetPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    assetId: string
    description: string
    cost: number
    performedAt: Date
  }, ExtArgs["result"]["assetMaintenanceLog"]>
  composites: {}
}

export type AssetMaintenanceLogGetPayload<S extends boolean | null | undefined | AssetMaintenanceLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload, S>

export type AssetMaintenanceLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<AssetMaintenanceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetMaintenanceLogCountAggregateInputType | true
  }

export interface AssetMaintenanceLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetMaintenanceLog'], meta: { name: 'AssetMaintenanceLog' } }
  
  findUnique<T extends AssetMaintenanceLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends AssetMaintenanceLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends AssetMaintenanceLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends AssetMaintenanceLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends AssetMaintenanceLogFindManyArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends AssetMaintenanceLogCreateArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogCreateArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends AssetMaintenanceLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends AssetMaintenanceLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends AssetMaintenanceLogDeleteArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends AssetMaintenanceLogUpdateArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends AssetMaintenanceLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends AssetMaintenanceLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends AssetMaintenanceLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends AssetMaintenanceLogUpsertArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceLogClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends AssetMaintenanceLogCountArgs>(
    args?: Prisma.Subset<T, AssetMaintenanceLogCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], AssetMaintenanceLogCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends AssetMaintenanceLogAggregateArgs>(args: Prisma.Subset<T, AssetMaintenanceLogAggregateArgs>): Prisma.PrismaPromise<GetAssetMaintenanceLogAggregateType<T>>

  
  groupBy<
    T extends AssetMaintenanceLogGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: AssetMaintenanceLogGroupByArgs['orderBy'] }
      : { orderBy?: AssetMaintenanceLogGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, AssetMaintenanceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetMaintenanceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: AssetMaintenanceLogFieldRefs;
}


export interface Prisma__AssetMaintenanceLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  asset<T extends Prisma.EnterpriseAssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseAssetDefaultArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface AssetMaintenanceLogFieldRefs {
  readonly id: Prisma.FieldRef<"AssetMaintenanceLog", 'String'>
  readonly tenantId: Prisma.FieldRef<"AssetMaintenanceLog", 'String'>
  readonly assetId: Prisma.FieldRef<"AssetMaintenanceLog", 'String'>
  readonly description: Prisma.FieldRef<"AssetMaintenanceLog", 'String'>
  readonly cost: Prisma.FieldRef<"AssetMaintenanceLog", 'Float'>
  readonly performedAt: Prisma.FieldRef<"AssetMaintenanceLog", 'DateTime'>
}
    



export type AssetMaintenanceLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
}


export type AssetMaintenanceLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
}


export type AssetMaintenanceLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  where?: Prisma.AssetMaintenanceLogWhereInput
  
  orderBy?: Prisma.AssetMaintenanceLogOrderByWithRelationInput | Prisma.AssetMaintenanceLogOrderByWithRelationInput[]
  
  cursor?: Prisma.AssetMaintenanceLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.AssetMaintenanceLogScalarFieldEnum | Prisma.AssetMaintenanceLogScalarFieldEnum[]
}


export type AssetMaintenanceLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  where?: Prisma.AssetMaintenanceLogWhereInput
  
  orderBy?: Prisma.AssetMaintenanceLogOrderByWithRelationInput | Prisma.AssetMaintenanceLogOrderByWithRelationInput[]
  
  cursor?: Prisma.AssetMaintenanceLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.AssetMaintenanceLogScalarFieldEnum | Prisma.AssetMaintenanceLogScalarFieldEnum[]
}


export type AssetMaintenanceLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  where?: Prisma.AssetMaintenanceLogWhereInput
  
  orderBy?: Prisma.AssetMaintenanceLogOrderByWithRelationInput | Prisma.AssetMaintenanceLogOrderByWithRelationInput[]
  
  cursor?: Prisma.AssetMaintenanceLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.AssetMaintenanceLogScalarFieldEnum | Prisma.AssetMaintenanceLogScalarFieldEnum[]
}


export type AssetMaintenanceLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.AssetMaintenanceLogCreateInput, Prisma.AssetMaintenanceLogUncheckedCreateInput>
}


export type AssetMaintenanceLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.AssetMaintenanceLogCreateManyInput | Prisma.AssetMaintenanceLogCreateManyInput[]
  skipDuplicates?: boolean
}


export type AssetMaintenanceLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  data: Prisma.AssetMaintenanceLogCreateManyInput | Prisma.AssetMaintenanceLogCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.AssetMaintenanceLogIncludeCreateManyAndReturn<ExtArgs> | null
}


export type AssetMaintenanceLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.AssetMaintenanceLogUpdateInput, Prisma.AssetMaintenanceLogUncheckedUpdateInput>
  
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
}


export type AssetMaintenanceLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.AssetMaintenanceLogUpdateManyMutationInput, Prisma.AssetMaintenanceLogUncheckedUpdateManyInput>
  
  where?: Prisma.AssetMaintenanceLogWhereInput
  
  limit?: number
}


export type AssetMaintenanceLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.AssetMaintenanceLogUpdateManyMutationInput, Prisma.AssetMaintenanceLogUncheckedUpdateManyInput>
  
  where?: Prisma.AssetMaintenanceLogWhereInput
  
  limit?: number
  
  include?: Prisma.AssetMaintenanceLogIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type AssetMaintenanceLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
  
  create: Prisma.XOR<Prisma.AssetMaintenanceLogCreateInput, Prisma.AssetMaintenanceLogUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.AssetMaintenanceLogUpdateInput, Prisma.AssetMaintenanceLogUncheckedUpdateInput>
}


export type AssetMaintenanceLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  
  where: Prisma.AssetMaintenanceLogWhereUniqueInput
}


export type AssetMaintenanceLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.AssetMaintenanceLogWhereInput
  
  limit?: number
}


export type AssetMaintenanceLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
}
