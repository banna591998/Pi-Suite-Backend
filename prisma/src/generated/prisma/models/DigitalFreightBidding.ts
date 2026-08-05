





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type DigitalFreightBiddingModel = runtime.Types.Result.DefaultSelection<Prisma.$DigitalFreightBiddingPayload>

export type AggregateDigitalFreightBidding = {
  _count: DigitalFreightBiddingCountAggregateOutputType | null
  _avg: DigitalFreightBiddingAvgAggregateOutputType | null
  _sum: DigitalFreightBiddingSumAggregateOutputType | null
  _min: DigitalFreightBiddingMinAggregateOutputType | null
  _max: DigitalFreightBiddingMaxAggregateOutputType | null
}

export type DigitalFreightBiddingAvgAggregateOutputType = {
  offeredRate: number | null
}

export type DigitalFreightBiddingSumAggregateOutputType = {
  offeredRate: number | null
}

export type DigitalFreightBiddingMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  routeCode: string | null
  truckType: string | null
  offeredRate: number | null
  carrierName: string | null
  status: string | null
  createdAt: Date | null
}

export type DigitalFreightBiddingMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  routeCode: string | null
  truckType: string | null
  offeredRate: number | null
  carrierName: string | null
  status: string | null
  createdAt: Date | null
}

export type DigitalFreightBiddingCountAggregateOutputType = {
  id: number
  tenantId: number
  routeCode: number
  truckType: number
  offeredRate: number
  carrierName: number
  status: number
  createdAt: number
  _all: number
}


export type DigitalFreightBiddingAvgAggregateInputType = {
  offeredRate?: true
}

export type DigitalFreightBiddingSumAggregateInputType = {
  offeredRate?: true
}

export type DigitalFreightBiddingMinAggregateInputType = {
  id?: true
  tenantId?: true
  routeCode?: true
  truckType?: true
  offeredRate?: true
  carrierName?: true
  status?: true
  createdAt?: true
}

export type DigitalFreightBiddingMaxAggregateInputType = {
  id?: true
  tenantId?: true
  routeCode?: true
  truckType?: true
  offeredRate?: true
  carrierName?: true
  status?: true
  createdAt?: true
}

export type DigitalFreightBiddingCountAggregateInputType = {
  id?: true
  tenantId?: true
  routeCode?: true
  truckType?: true
  offeredRate?: true
  carrierName?: true
  status?: true
  createdAt?: true
  _all?: true
}

export type DigitalFreightBiddingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.DigitalFreightBiddingWhereInput
  
  orderBy?: Prisma.DigitalFreightBiddingOrderByWithRelationInput | Prisma.DigitalFreightBiddingOrderByWithRelationInput[]
  
  cursor?: Prisma.DigitalFreightBiddingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | DigitalFreightBiddingCountAggregateInputType
  
  _avg?: DigitalFreightBiddingAvgAggregateInputType
  
  _sum?: DigitalFreightBiddingSumAggregateInputType
  
  _min?: DigitalFreightBiddingMinAggregateInputType
  
  _max?: DigitalFreightBiddingMaxAggregateInputType
}

export type GetDigitalFreightBiddingAggregateType<T extends DigitalFreightBiddingAggregateArgs> = {
      [P in keyof T & keyof AggregateDigitalFreightBidding]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateDigitalFreightBidding[P]>
    : Prisma.GetScalarType<T[P], AggregateDigitalFreightBidding[P]>
}




export type DigitalFreightBiddingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.DigitalFreightBiddingWhereInput
  orderBy?: Prisma.DigitalFreightBiddingOrderByWithAggregationInput | Prisma.DigitalFreightBiddingOrderByWithAggregationInput[]
  by: Prisma.DigitalFreightBiddingScalarFieldEnum[] | Prisma.DigitalFreightBiddingScalarFieldEnum
  having?: Prisma.DigitalFreightBiddingScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: DigitalFreightBiddingCountAggregateInputType | true
  _avg?: DigitalFreightBiddingAvgAggregateInputType
  _sum?: DigitalFreightBiddingSumAggregateInputType
  _min?: DigitalFreightBiddingMinAggregateInputType
  _max?: DigitalFreightBiddingMaxAggregateInputType
}

export type DigitalFreightBiddingGroupByOutputType = {
  id: string
  tenantId: string
  routeCode: string
  truckType: string
  offeredRate: number
  carrierName: string
  status: string
  createdAt: Date
  _count: DigitalFreightBiddingCountAggregateOutputType | null
  _avg: DigitalFreightBiddingAvgAggregateOutputType | null
  _sum: DigitalFreightBiddingSumAggregateOutputType | null
  _min: DigitalFreightBiddingMinAggregateOutputType | null
  _max: DigitalFreightBiddingMaxAggregateOutputType | null
}

export type GetDigitalFreightBiddingGroupByPayload<T extends DigitalFreightBiddingGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<DigitalFreightBiddingGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof DigitalFreightBiddingGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], DigitalFreightBiddingGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], DigitalFreightBiddingGroupByOutputType[P]>
      }
    >
  >



export type DigitalFreightBiddingWhereInput = {
  AND?: Prisma.DigitalFreightBiddingWhereInput | Prisma.DigitalFreightBiddingWhereInput[]
  OR?: Prisma.DigitalFreightBiddingWhereInput[]
  NOT?: Prisma.DigitalFreightBiddingWhereInput | Prisma.DigitalFreightBiddingWhereInput[]
  id?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  tenantId?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  routeCode?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  truckType?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  offeredRate?: Prisma.FloatFilter<"DigitalFreightBidding"> | number
  carrierName?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  status?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  createdAt?: Prisma.DateTimeFilter<"DigitalFreightBidding"> | Date | string
}

export type DigitalFreightBiddingOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  routeCode?: Prisma.SortOrder
  truckType?: Prisma.SortOrder
  offeredRate?: Prisma.SortOrder
  carrierName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type DigitalFreightBiddingWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.DigitalFreightBiddingWhereInput | Prisma.DigitalFreightBiddingWhereInput[]
  OR?: Prisma.DigitalFreightBiddingWhereInput[]
  NOT?: Prisma.DigitalFreightBiddingWhereInput | Prisma.DigitalFreightBiddingWhereInput[]
  tenantId?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  routeCode?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  truckType?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  offeredRate?: Prisma.FloatFilter<"DigitalFreightBidding"> | number
  carrierName?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  status?: Prisma.StringFilter<"DigitalFreightBidding"> | string
  createdAt?: Prisma.DateTimeFilter<"DigitalFreightBidding"> | Date | string
}, "id">

export type DigitalFreightBiddingOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  routeCode?: Prisma.SortOrder
  truckType?: Prisma.SortOrder
  offeredRate?: Prisma.SortOrder
  carrierName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.DigitalFreightBiddingCountOrderByAggregateInput
  _avg?: Prisma.DigitalFreightBiddingAvgOrderByAggregateInput
  _max?: Prisma.DigitalFreightBiddingMaxOrderByAggregateInput
  _min?: Prisma.DigitalFreightBiddingMinOrderByAggregateInput
  _sum?: Prisma.DigitalFreightBiddingSumOrderByAggregateInput
}

export type DigitalFreightBiddingScalarWhereWithAggregatesInput = {
  AND?: Prisma.DigitalFreightBiddingScalarWhereWithAggregatesInput | Prisma.DigitalFreightBiddingScalarWhereWithAggregatesInput[]
  OR?: Prisma.DigitalFreightBiddingScalarWhereWithAggregatesInput[]
  NOT?: Prisma.DigitalFreightBiddingScalarWhereWithAggregatesInput | Prisma.DigitalFreightBiddingScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"DigitalFreightBidding"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"DigitalFreightBidding"> | string
  routeCode?: Prisma.StringWithAggregatesFilter<"DigitalFreightBidding"> | string
  truckType?: Prisma.StringWithAggregatesFilter<"DigitalFreightBidding"> | string
  offeredRate?: Prisma.FloatWithAggregatesFilter<"DigitalFreightBidding"> | number
  carrierName?: Prisma.StringWithAggregatesFilter<"DigitalFreightBidding"> | string
  status?: Prisma.StringWithAggregatesFilter<"DigitalFreightBidding"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"DigitalFreightBidding"> | Date | string
}

export type DigitalFreightBiddingCreateInput = {
  id?: string
  tenantId: string
  routeCode: string
  truckType: string
  offeredRate: number
  carrierName: string
  status?: string
  createdAt?: Date | string
}

export type DigitalFreightBiddingUncheckedCreateInput = {
  id?: string
  tenantId: string
  routeCode: string
  truckType: string
  offeredRate: number
  carrierName: string
  status?: string
  createdAt?: Date | string
}

export type DigitalFreightBiddingUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  routeCode?: Prisma.StringFieldUpdateOperationsInput | string
  truckType?: Prisma.StringFieldUpdateOperationsInput | string
  offeredRate?: Prisma.FloatFieldUpdateOperationsInput | number
  carrierName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type DigitalFreightBiddingUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  routeCode?: Prisma.StringFieldUpdateOperationsInput | string
  truckType?: Prisma.StringFieldUpdateOperationsInput | string
  offeredRate?: Prisma.FloatFieldUpdateOperationsInput | number
  carrierName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type DigitalFreightBiddingCreateManyInput = {
  id?: string
  tenantId: string
  routeCode: string
  truckType: string
  offeredRate: number
  carrierName: string
  status?: string
  createdAt?: Date | string
}

export type DigitalFreightBiddingUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  routeCode?: Prisma.StringFieldUpdateOperationsInput | string
  truckType?: Prisma.StringFieldUpdateOperationsInput | string
  offeredRate?: Prisma.FloatFieldUpdateOperationsInput | number
  carrierName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type DigitalFreightBiddingUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  routeCode?: Prisma.StringFieldUpdateOperationsInput | string
  truckType?: Prisma.StringFieldUpdateOperationsInput | string
  offeredRate?: Prisma.FloatFieldUpdateOperationsInput | number
  carrierName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type DigitalFreightBiddingCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  routeCode?: Prisma.SortOrder
  truckType?: Prisma.SortOrder
  offeredRate?: Prisma.SortOrder
  carrierName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type DigitalFreightBiddingAvgOrderByAggregateInput = {
  offeredRate?: Prisma.SortOrder
}

export type DigitalFreightBiddingMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  routeCode?: Prisma.SortOrder
  truckType?: Prisma.SortOrder
  offeredRate?: Prisma.SortOrder
  carrierName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type DigitalFreightBiddingMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  routeCode?: Prisma.SortOrder
  truckType?: Prisma.SortOrder
  offeredRate?: Prisma.SortOrder
  carrierName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type DigitalFreightBiddingSumOrderByAggregateInput = {
  offeredRate?: Prisma.SortOrder
}

export type FloatFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}



export type DigitalFreightBiddingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  routeCode?: boolean
  truckType?: boolean
  offeredRate?: boolean
  carrierName?: boolean
  status?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["digitalFreightBidding"]>

export type DigitalFreightBiddingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  routeCode?: boolean
  truckType?: boolean
  offeredRate?: boolean
  carrierName?: boolean
  status?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["digitalFreightBidding"]>

export type DigitalFreightBiddingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  routeCode?: boolean
  truckType?: boolean
  offeredRate?: boolean
  carrierName?: boolean
  status?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["digitalFreightBidding"]>

export type DigitalFreightBiddingSelectScalar = {
  id?: boolean
  tenantId?: boolean
  routeCode?: boolean
  truckType?: boolean
  offeredRate?: boolean
  carrierName?: boolean
  status?: boolean
  createdAt?: boolean
}

export type DigitalFreightBiddingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "routeCode" | "truckType" | "offeredRate" | "carrierName" | "status" | "createdAt", ExtArgs["result"]["digitalFreightBidding"]>

export type $DigitalFreightBiddingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "DigitalFreightBidding"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    routeCode: string
    truckType: string
    offeredRate: number
    carrierName: string
    status: string
    createdAt: Date
  }, ExtArgs["result"]["digitalFreightBidding"]>
  composites: {}
}

export type DigitalFreightBiddingGetPayload<S extends boolean | null | undefined | DigitalFreightBiddingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload, S>

export type DigitalFreightBiddingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<DigitalFreightBiddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DigitalFreightBiddingCountAggregateInputType | true
  }

export interface DigitalFreightBiddingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DigitalFreightBidding'], meta: { name: 'DigitalFreightBidding' } }
  
  findUnique<T extends DigitalFreightBiddingFindUniqueArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends DigitalFreightBiddingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends DigitalFreightBiddingFindFirstArgs>(args?: Prisma.SelectSubset<T, DigitalFreightBiddingFindFirstArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends DigitalFreightBiddingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DigitalFreightBiddingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends DigitalFreightBiddingFindManyArgs>(args?: Prisma.SelectSubset<T, DigitalFreightBiddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends DigitalFreightBiddingCreateArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingCreateArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends DigitalFreightBiddingCreateManyArgs>(args?: Prisma.SelectSubset<T, DigitalFreightBiddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends DigitalFreightBiddingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DigitalFreightBiddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends DigitalFreightBiddingDeleteArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingDeleteArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends DigitalFreightBiddingUpdateArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingUpdateArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends DigitalFreightBiddingDeleteManyArgs>(args?: Prisma.SelectSubset<T, DigitalFreightBiddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends DigitalFreightBiddingUpdateManyArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends DigitalFreightBiddingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends DigitalFreightBiddingUpsertArgs>(args: Prisma.SelectSubset<T, DigitalFreightBiddingUpsertArgs<ExtArgs>>): Prisma.Prisma__DigitalFreightBiddingClient<runtime.Types.Result.GetResult<Prisma.$DigitalFreightBiddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends DigitalFreightBiddingCountArgs>(
    args?: Prisma.Subset<T, DigitalFreightBiddingCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], DigitalFreightBiddingCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends DigitalFreightBiddingAggregateArgs>(args: Prisma.Subset<T, DigitalFreightBiddingAggregateArgs>): Prisma.PrismaPromise<GetDigitalFreightBiddingAggregateType<T>>

  
  groupBy<
    T extends DigitalFreightBiddingGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: DigitalFreightBiddingGroupByArgs['orderBy'] }
      : { orderBy?: DigitalFreightBiddingGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, DigitalFreightBiddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDigitalFreightBiddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: DigitalFreightBiddingFieldRefs;
}


export interface Prisma__DigitalFreightBiddingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface DigitalFreightBiddingFieldRefs {
  readonly id: Prisma.FieldRef<"DigitalFreightBidding", 'String'>
  readonly tenantId: Prisma.FieldRef<"DigitalFreightBidding", 'String'>
  readonly routeCode: Prisma.FieldRef<"DigitalFreightBidding", 'String'>
  readonly truckType: Prisma.FieldRef<"DigitalFreightBidding", 'String'>
  readonly offeredRate: Prisma.FieldRef<"DigitalFreightBidding", 'Float'>
  readonly carrierName: Prisma.FieldRef<"DigitalFreightBidding", 'String'>
  readonly status: Prisma.FieldRef<"DigitalFreightBidding", 'String'>
  readonly createdAt: Prisma.FieldRef<"DigitalFreightBidding", 'DateTime'>
}
    



export type DigitalFreightBiddingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  where: Prisma.DigitalFreightBiddingWhereUniqueInput
}


export type DigitalFreightBiddingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  where: Prisma.DigitalFreightBiddingWhereUniqueInput
}


export type DigitalFreightBiddingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  where?: Prisma.DigitalFreightBiddingWhereInput
  
  orderBy?: Prisma.DigitalFreightBiddingOrderByWithRelationInput | Prisma.DigitalFreightBiddingOrderByWithRelationInput[]
  
  cursor?: Prisma.DigitalFreightBiddingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.DigitalFreightBiddingScalarFieldEnum | Prisma.DigitalFreightBiddingScalarFieldEnum[]
}


export type DigitalFreightBiddingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  where?: Prisma.DigitalFreightBiddingWhereInput
  
  orderBy?: Prisma.DigitalFreightBiddingOrderByWithRelationInput | Prisma.DigitalFreightBiddingOrderByWithRelationInput[]
  
  cursor?: Prisma.DigitalFreightBiddingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.DigitalFreightBiddingScalarFieldEnum | Prisma.DigitalFreightBiddingScalarFieldEnum[]
}


export type DigitalFreightBiddingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  where?: Prisma.DigitalFreightBiddingWhereInput
  
  orderBy?: Prisma.DigitalFreightBiddingOrderByWithRelationInput | Prisma.DigitalFreightBiddingOrderByWithRelationInput[]
  
  cursor?: Prisma.DigitalFreightBiddingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.DigitalFreightBiddingScalarFieldEnum | Prisma.DigitalFreightBiddingScalarFieldEnum[]
}


export type DigitalFreightBiddingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.DigitalFreightBiddingCreateInput, Prisma.DigitalFreightBiddingUncheckedCreateInput>
}


export type DigitalFreightBiddingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.DigitalFreightBiddingCreateManyInput | Prisma.DigitalFreightBiddingCreateManyInput[]
  skipDuplicates?: boolean
}


export type DigitalFreightBiddingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  data: Prisma.DigitalFreightBiddingCreateManyInput | Prisma.DigitalFreightBiddingCreateManyInput[]
  skipDuplicates?: boolean
}


export type DigitalFreightBiddingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.DigitalFreightBiddingUpdateInput, Prisma.DigitalFreightBiddingUncheckedUpdateInput>
  
  where: Prisma.DigitalFreightBiddingWhereUniqueInput
}


export type DigitalFreightBiddingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.DigitalFreightBiddingUpdateManyMutationInput, Prisma.DigitalFreightBiddingUncheckedUpdateManyInput>
  
  where?: Prisma.DigitalFreightBiddingWhereInput
  
  limit?: number
}


export type DigitalFreightBiddingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.DigitalFreightBiddingUpdateManyMutationInput, Prisma.DigitalFreightBiddingUncheckedUpdateManyInput>
  
  where?: Prisma.DigitalFreightBiddingWhereInput
  
  limit?: number
}


export type DigitalFreightBiddingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  where: Prisma.DigitalFreightBiddingWhereUniqueInput
  
  create: Prisma.XOR<Prisma.DigitalFreightBiddingCreateInput, Prisma.DigitalFreightBiddingUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.DigitalFreightBiddingUpdateInput, Prisma.DigitalFreightBiddingUncheckedUpdateInput>
}


export type DigitalFreightBiddingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
  
  where: Prisma.DigitalFreightBiddingWhereUniqueInput
}


export type DigitalFreightBiddingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.DigitalFreightBiddingWhereInput
  
  limit?: number
}


export type DigitalFreightBiddingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.DigitalFreightBiddingSelect<ExtArgs> | null
  
  omit?: Prisma.DigitalFreightBiddingOmit<ExtArgs> | null
}
