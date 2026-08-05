





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type TenantSubscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$TenantSubscriptionPayload>

export type AggregateTenantSubscription = {
  _count: TenantSubscriptionCountAggregateOutputType | null
  _avg: TenantSubscriptionAvgAggregateOutputType | null
  _sum: TenantSubscriptionSumAggregateOutputType | null
  _min: TenantSubscriptionMinAggregateOutputType | null
  _max: TenantSubscriptionMaxAggregateOutputType | null
}

export type TenantSubscriptionAvgAggregateOutputType = {
  userCount: number | null
}

export type TenantSubscriptionSumAggregateOutputType = {
  userCount: number | null
}

export type TenantSubscriptionMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  planType: string | null
  status: string | null
  userCount: number | null
  currentPeriodEnd: Date | null
}

export type TenantSubscriptionMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  planType: string | null
  status: string | null
  userCount: number | null
  currentPeriodEnd: Date | null
}

export type TenantSubscriptionCountAggregateOutputType = {
  id: number
  tenantId: number
  planType: number
  status: number
  userCount: number
  currentPeriodEnd: number
  _all: number
}


export type TenantSubscriptionAvgAggregateInputType = {
  userCount?: true
}

export type TenantSubscriptionSumAggregateInputType = {
  userCount?: true
}

export type TenantSubscriptionMinAggregateInputType = {
  id?: true
  tenantId?: true
  planType?: true
  status?: true
  userCount?: true
  currentPeriodEnd?: true
}

export type TenantSubscriptionMaxAggregateInputType = {
  id?: true
  tenantId?: true
  planType?: true
  status?: true
  userCount?: true
  currentPeriodEnd?: true
}

export type TenantSubscriptionCountAggregateInputType = {
  id?: true
  tenantId?: true
  planType?: true
  status?: true
  userCount?: true
  currentPeriodEnd?: true
  _all?: true
}

export type TenantSubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.TenantSubscriptionWhereInput
  
  orderBy?: Prisma.TenantSubscriptionOrderByWithRelationInput | Prisma.TenantSubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantSubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | TenantSubscriptionCountAggregateInputType
  
  _avg?: TenantSubscriptionAvgAggregateInputType
  
  _sum?: TenantSubscriptionSumAggregateInputType
  
  _min?: TenantSubscriptionMinAggregateInputType
  
  _max?: TenantSubscriptionMaxAggregateInputType
}

export type GetTenantSubscriptionAggregateType<T extends TenantSubscriptionAggregateArgs> = {
      [P in keyof T & keyof AggregateTenantSubscription]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateTenantSubscription[P]>
    : Prisma.GetScalarType<T[P], AggregateTenantSubscription[P]>
}




export type TenantSubscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.TenantSubscriptionWhereInput
  orderBy?: Prisma.TenantSubscriptionOrderByWithAggregationInput | Prisma.TenantSubscriptionOrderByWithAggregationInput[]
  by: Prisma.TenantSubscriptionScalarFieldEnum[] | Prisma.TenantSubscriptionScalarFieldEnum
  having?: Prisma.TenantSubscriptionScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: TenantSubscriptionCountAggregateInputType | true
  _avg?: TenantSubscriptionAvgAggregateInputType
  _sum?: TenantSubscriptionSumAggregateInputType
  _min?: TenantSubscriptionMinAggregateInputType
  _max?: TenantSubscriptionMaxAggregateInputType
}

export type TenantSubscriptionGroupByOutputType = {
  id: string
  tenantId: string
  planType: string
  status: string
  userCount: number
  currentPeriodEnd: Date
  _count: TenantSubscriptionCountAggregateOutputType | null
  _avg: TenantSubscriptionAvgAggregateOutputType | null
  _sum: TenantSubscriptionSumAggregateOutputType | null
  _min: TenantSubscriptionMinAggregateOutputType | null
  _max: TenantSubscriptionMaxAggregateOutputType | null
}

export type GetTenantSubscriptionGroupByPayload<T extends TenantSubscriptionGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<TenantSubscriptionGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof TenantSubscriptionGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], TenantSubscriptionGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], TenantSubscriptionGroupByOutputType[P]>
      }
    >
  >



export type TenantSubscriptionWhereInput = {
  AND?: Prisma.TenantSubscriptionWhereInput | Prisma.TenantSubscriptionWhereInput[]
  OR?: Prisma.TenantSubscriptionWhereInput[]
  NOT?: Prisma.TenantSubscriptionWhereInput | Prisma.TenantSubscriptionWhereInput[]
  id?: Prisma.StringFilter<"TenantSubscription"> | string
  tenantId?: Prisma.StringFilter<"TenantSubscription"> | string
  planType?: Prisma.StringFilter<"TenantSubscription"> | string
  status?: Prisma.StringFilter<"TenantSubscription"> | string
  userCount?: Prisma.IntFilter<"TenantSubscription"> | number
  currentPeriodEnd?: Prisma.DateTimeFilter<"TenantSubscription"> | Date | string
}

export type TenantSubscriptionOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
}

export type TenantSubscriptionWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  tenantId?: string
  AND?: Prisma.TenantSubscriptionWhereInput | Prisma.TenantSubscriptionWhereInput[]
  OR?: Prisma.TenantSubscriptionWhereInput[]
  NOT?: Prisma.TenantSubscriptionWhereInput | Prisma.TenantSubscriptionWhereInput[]
  planType?: Prisma.StringFilter<"TenantSubscription"> | string
  status?: Prisma.StringFilter<"TenantSubscription"> | string
  userCount?: Prisma.IntFilter<"TenantSubscription"> | number
  currentPeriodEnd?: Prisma.DateTimeFilter<"TenantSubscription"> | Date | string
}, "id" | "tenantId">

export type TenantSubscriptionOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
  _count?: Prisma.TenantSubscriptionCountOrderByAggregateInput
  _avg?: Prisma.TenantSubscriptionAvgOrderByAggregateInput
  _max?: Prisma.TenantSubscriptionMaxOrderByAggregateInput
  _min?: Prisma.TenantSubscriptionMinOrderByAggregateInput
  _sum?: Prisma.TenantSubscriptionSumOrderByAggregateInput
}

export type TenantSubscriptionScalarWhereWithAggregatesInput = {
  AND?: Prisma.TenantSubscriptionScalarWhereWithAggregatesInput | Prisma.TenantSubscriptionScalarWhereWithAggregatesInput[]
  OR?: Prisma.TenantSubscriptionScalarWhereWithAggregatesInput[]
  NOT?: Prisma.TenantSubscriptionScalarWhereWithAggregatesInput | Prisma.TenantSubscriptionScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"TenantSubscription"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"TenantSubscription"> | string
  planType?: Prisma.StringWithAggregatesFilter<"TenantSubscription"> | string
  status?: Prisma.StringWithAggregatesFilter<"TenantSubscription"> | string
  userCount?: Prisma.IntWithAggregatesFilter<"TenantSubscription"> | number
  currentPeriodEnd?: Prisma.DateTimeWithAggregatesFilter<"TenantSubscription"> | Date | string
}

export type TenantSubscriptionCreateInput = {
  id?: string
  tenantId: string
  planType: string
  status: string
  userCount: number
  currentPeriodEnd: Date | string
}

export type TenantSubscriptionUncheckedCreateInput = {
  id?: string
  tenantId: string
  planType: string
  status: string
  userCount: number
  currentPeriodEnd: Date | string
}

export type TenantSubscriptionUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TenantSubscriptionUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TenantSubscriptionCreateManyInput = {
  id?: string
  tenantId: string
  planType: string
  status: string
  userCount: number
  currentPeriodEnd: Date | string
}

export type TenantSubscriptionUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TenantSubscriptionUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TenantSubscriptionCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
}

export type TenantSubscriptionAvgOrderByAggregateInput = {
  userCount?: Prisma.SortOrder
}

export type TenantSubscriptionMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
}

export type TenantSubscriptionMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
}

export type TenantSubscriptionSumOrderByAggregateInput = {
  userCount?: Prisma.SortOrder
}



export type TenantSubscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  planType?: boolean
  status?: boolean
  userCount?: boolean
  currentPeriodEnd?: boolean
}, ExtArgs["result"]["tenantSubscription"]>

export type TenantSubscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  planType?: boolean
  status?: boolean
  userCount?: boolean
  currentPeriodEnd?: boolean
}, ExtArgs["result"]["tenantSubscription"]>

export type TenantSubscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  planType?: boolean
  status?: boolean
  userCount?: boolean
  currentPeriodEnd?: boolean
}, ExtArgs["result"]["tenantSubscription"]>

export type TenantSubscriptionSelectScalar = {
  id?: boolean
  tenantId?: boolean
  planType?: boolean
  status?: boolean
  userCount?: boolean
  currentPeriodEnd?: boolean
}

export type TenantSubscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "planType" | "status" | "userCount" | "currentPeriodEnd", ExtArgs["result"]["tenantSubscription"]>

export type $TenantSubscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "TenantSubscription"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    planType: string
    status: string
    userCount: number
    currentPeriodEnd: Date
  }, ExtArgs["result"]["tenantSubscription"]>
  composites: {}
}

export type TenantSubscriptionGetPayload<S extends boolean | null | undefined | TenantSubscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload, S>

export type TenantSubscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<TenantSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TenantSubscriptionCountAggregateInputType | true
  }

export interface TenantSubscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantSubscription'], meta: { name: 'TenantSubscription' } }
  
  findUnique<T extends TenantSubscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends TenantSubscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends TenantSubscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, TenantSubscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends TenantSubscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TenantSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends TenantSubscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, TenantSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends TenantSubscriptionCreateArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends TenantSubscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, TenantSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends TenantSubscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TenantSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends TenantSubscriptionDeleteArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends TenantSubscriptionUpdateArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends TenantSubscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TenantSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends TenantSubscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends TenantSubscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends TenantSubscriptionUpsertArgs>(args: Prisma.SelectSubset<T, TenantSubscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__TenantSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$TenantSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends TenantSubscriptionCountArgs>(
    args?: Prisma.Subset<T, TenantSubscriptionCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], TenantSubscriptionCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends TenantSubscriptionAggregateArgs>(args: Prisma.Subset<T, TenantSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetTenantSubscriptionAggregateType<T>>

  
  groupBy<
    T extends TenantSubscriptionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: TenantSubscriptionGroupByArgs['orderBy'] }
      : { orderBy?: TenantSubscriptionGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, TenantSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: TenantSubscriptionFieldRefs;
}


export interface Prisma__TenantSubscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface TenantSubscriptionFieldRefs {
  readonly id: Prisma.FieldRef<"TenantSubscription", 'String'>
  readonly tenantId: Prisma.FieldRef<"TenantSubscription", 'String'>
  readonly planType: Prisma.FieldRef<"TenantSubscription", 'String'>
  readonly status: Prisma.FieldRef<"TenantSubscription", 'String'>
  readonly userCount: Prisma.FieldRef<"TenantSubscription", 'Int'>
  readonly currentPeriodEnd: Prisma.FieldRef<"TenantSubscription", 'DateTime'>
}
    



export type TenantSubscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  where: Prisma.TenantSubscriptionWhereUniqueInput
}


export type TenantSubscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  where: Prisma.TenantSubscriptionWhereUniqueInput
}


export type TenantSubscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  where?: Prisma.TenantSubscriptionWhereInput
  
  orderBy?: Prisma.TenantSubscriptionOrderByWithRelationInput | Prisma.TenantSubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantSubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.TenantSubscriptionScalarFieldEnum | Prisma.TenantSubscriptionScalarFieldEnum[]
}


export type TenantSubscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  where?: Prisma.TenantSubscriptionWhereInput
  
  orderBy?: Prisma.TenantSubscriptionOrderByWithRelationInput | Prisma.TenantSubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantSubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.TenantSubscriptionScalarFieldEnum | Prisma.TenantSubscriptionScalarFieldEnum[]
}


export type TenantSubscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  where?: Prisma.TenantSubscriptionWhereInput
  
  orderBy?: Prisma.TenantSubscriptionOrderByWithRelationInput | Prisma.TenantSubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantSubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.TenantSubscriptionScalarFieldEnum | Prisma.TenantSubscriptionScalarFieldEnum[]
}


export type TenantSubscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.TenantSubscriptionCreateInput, Prisma.TenantSubscriptionUncheckedCreateInput>
}


export type TenantSubscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.TenantSubscriptionCreateManyInput | Prisma.TenantSubscriptionCreateManyInput[]
  skipDuplicates?: boolean
}


export type TenantSubscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  data: Prisma.TenantSubscriptionCreateManyInput | Prisma.TenantSubscriptionCreateManyInput[]
  skipDuplicates?: boolean
}


export type TenantSubscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.TenantSubscriptionUpdateInput, Prisma.TenantSubscriptionUncheckedUpdateInput>
  
  where: Prisma.TenantSubscriptionWhereUniqueInput
}


export type TenantSubscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.TenantSubscriptionUpdateManyMutationInput, Prisma.TenantSubscriptionUncheckedUpdateManyInput>
  
  where?: Prisma.TenantSubscriptionWhereInput
  
  limit?: number
}


export type TenantSubscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.TenantSubscriptionUpdateManyMutationInput, Prisma.TenantSubscriptionUncheckedUpdateManyInput>
  
  where?: Prisma.TenantSubscriptionWhereInput
  
  limit?: number
}


export type TenantSubscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  where: Prisma.TenantSubscriptionWhereUniqueInput
  
  create: Prisma.XOR<Prisma.TenantSubscriptionCreateInput, Prisma.TenantSubscriptionUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.TenantSubscriptionUpdateInput, Prisma.TenantSubscriptionUncheckedUpdateInput>
}


export type TenantSubscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
  
  where: Prisma.TenantSubscriptionWhereUniqueInput
}


export type TenantSubscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.TenantSubscriptionWhereInput
  
  limit?: number
}


export type TenantSubscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.TenantSubscriptionOmit<ExtArgs> | null
}
