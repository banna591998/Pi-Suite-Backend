





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type OtifMetricModel = runtime.Types.Result.DefaultSelection<Prisma.$OtifMetricPayload>

export type AggregateOtifMetric = {
  _count: OtifMetricCountAggregateOutputType | null
  _min: OtifMetricMinAggregateOutputType | null
  _max: OtifMetricMaxAggregateOutputType | null
}

export type OtifMetricMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  orderId: string | null
  isOnTime: boolean | null
  isFull: boolean | null
  performanceDate: Date | null
}

export type OtifMetricMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  orderId: string | null
  isOnTime: boolean | null
  isFull: boolean | null
  performanceDate: Date | null
}

export type OtifMetricCountAggregateOutputType = {
  id: number
  tenantId: number
  orderId: number
  isOnTime: number
  isFull: number
  performanceDate: number
  _all: number
}


export type OtifMetricMinAggregateInputType = {
  id?: true
  tenantId?: true
  orderId?: true
  isOnTime?: true
  isFull?: true
  performanceDate?: true
}

export type OtifMetricMaxAggregateInputType = {
  id?: true
  tenantId?: true
  orderId?: true
  isOnTime?: true
  isFull?: true
  performanceDate?: true
}

export type OtifMetricCountAggregateInputType = {
  id?: true
  tenantId?: true
  orderId?: true
  isOnTime?: true
  isFull?: true
  performanceDate?: true
  _all?: true
}

export type OtifMetricAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.OtifMetricWhereInput
  
  orderBy?: Prisma.OtifMetricOrderByWithRelationInput | Prisma.OtifMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.OtifMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | OtifMetricCountAggregateInputType
  
  _min?: OtifMetricMinAggregateInputType
  
  _max?: OtifMetricMaxAggregateInputType
}

export type GetOtifMetricAggregateType<T extends OtifMetricAggregateArgs> = {
      [P in keyof T & keyof AggregateOtifMetric]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateOtifMetric[P]>
    : Prisma.GetScalarType<T[P], AggregateOtifMetric[P]>
}




export type OtifMetricGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.OtifMetricWhereInput
  orderBy?: Prisma.OtifMetricOrderByWithAggregationInput | Prisma.OtifMetricOrderByWithAggregationInput[]
  by: Prisma.OtifMetricScalarFieldEnum[] | Prisma.OtifMetricScalarFieldEnum
  having?: Prisma.OtifMetricScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: OtifMetricCountAggregateInputType | true
  _min?: OtifMetricMinAggregateInputType
  _max?: OtifMetricMaxAggregateInputType
}

export type OtifMetricGroupByOutputType = {
  id: string
  tenantId: string
  orderId: string
  isOnTime: boolean
  isFull: boolean
  performanceDate: Date
  _count: OtifMetricCountAggregateOutputType | null
  _min: OtifMetricMinAggregateOutputType | null
  _max: OtifMetricMaxAggregateOutputType | null
}

export type GetOtifMetricGroupByPayload<T extends OtifMetricGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<OtifMetricGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof OtifMetricGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], OtifMetricGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], OtifMetricGroupByOutputType[P]>
      }
    >
  >



export type OtifMetricWhereInput = {
  AND?: Prisma.OtifMetricWhereInput | Prisma.OtifMetricWhereInput[]
  OR?: Prisma.OtifMetricWhereInput[]
  NOT?: Prisma.OtifMetricWhereInput | Prisma.OtifMetricWhereInput[]
  id?: Prisma.StringFilter<"OtifMetric"> | string
  tenantId?: Prisma.StringFilter<"OtifMetric"> | string
  orderId?: Prisma.StringFilter<"OtifMetric"> | string
  isOnTime?: Prisma.BoolFilter<"OtifMetric"> | boolean
  isFull?: Prisma.BoolFilter<"OtifMetric"> | boolean
  performanceDate?: Prisma.DateTimeFilter<"OtifMetric"> | Date | string
}

export type OtifMetricOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  isOnTime?: Prisma.SortOrder
  isFull?: Prisma.SortOrder
  performanceDate?: Prisma.SortOrder
}

export type OtifMetricWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.OtifMetricWhereInput | Prisma.OtifMetricWhereInput[]
  OR?: Prisma.OtifMetricWhereInput[]
  NOT?: Prisma.OtifMetricWhereInput | Prisma.OtifMetricWhereInput[]
  tenantId?: Prisma.StringFilter<"OtifMetric"> | string
  orderId?: Prisma.StringFilter<"OtifMetric"> | string
  isOnTime?: Prisma.BoolFilter<"OtifMetric"> | boolean
  isFull?: Prisma.BoolFilter<"OtifMetric"> | boolean
  performanceDate?: Prisma.DateTimeFilter<"OtifMetric"> | Date | string
}, "id">

export type OtifMetricOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  isOnTime?: Prisma.SortOrder
  isFull?: Prisma.SortOrder
  performanceDate?: Prisma.SortOrder
  _count?: Prisma.OtifMetricCountOrderByAggregateInput
  _max?: Prisma.OtifMetricMaxOrderByAggregateInput
  _min?: Prisma.OtifMetricMinOrderByAggregateInput
}

export type OtifMetricScalarWhereWithAggregatesInput = {
  AND?: Prisma.OtifMetricScalarWhereWithAggregatesInput | Prisma.OtifMetricScalarWhereWithAggregatesInput[]
  OR?: Prisma.OtifMetricScalarWhereWithAggregatesInput[]
  NOT?: Prisma.OtifMetricScalarWhereWithAggregatesInput | Prisma.OtifMetricScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"OtifMetric"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"OtifMetric"> | string
  orderId?: Prisma.StringWithAggregatesFilter<"OtifMetric"> | string
  isOnTime?: Prisma.BoolWithAggregatesFilter<"OtifMetric"> | boolean
  isFull?: Prisma.BoolWithAggregatesFilter<"OtifMetric"> | boolean
  performanceDate?: Prisma.DateTimeWithAggregatesFilter<"OtifMetric"> | Date | string
}

export type OtifMetricCreateInput = {
  id?: string
  tenantId: string
  orderId: string
  isOnTime: boolean
  isFull: boolean
  performanceDate?: Date | string
}

export type OtifMetricUncheckedCreateInput = {
  id?: string
  tenantId: string
  orderId: string
  isOnTime: boolean
  isFull: boolean
  performanceDate?: Date | string
}

export type OtifMetricUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  isOnTime?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isFull?: Prisma.BoolFieldUpdateOperationsInput | boolean
  performanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OtifMetricUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  isOnTime?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isFull?: Prisma.BoolFieldUpdateOperationsInput | boolean
  performanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OtifMetricCreateManyInput = {
  id?: string
  tenantId: string
  orderId: string
  isOnTime: boolean
  isFull: boolean
  performanceDate?: Date | string
}

export type OtifMetricUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  isOnTime?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isFull?: Prisma.BoolFieldUpdateOperationsInput | boolean
  performanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OtifMetricUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  isOnTime?: Prisma.BoolFieldUpdateOperationsInput | boolean
  isFull?: Prisma.BoolFieldUpdateOperationsInput | boolean
  performanceDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OtifMetricCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  isOnTime?: Prisma.SortOrder
  isFull?: Prisma.SortOrder
  performanceDate?: Prisma.SortOrder
}

export type OtifMetricMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  isOnTime?: Prisma.SortOrder
  isFull?: Prisma.SortOrder
  performanceDate?: Prisma.SortOrder
}

export type OtifMetricMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  isOnTime?: Prisma.SortOrder
  isFull?: Prisma.SortOrder
  performanceDate?: Prisma.SortOrder
}

export type BoolFieldUpdateOperationsInput = {
  set?: boolean
}



export type OtifMetricSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderId?: boolean
  isOnTime?: boolean
  isFull?: boolean
  performanceDate?: boolean
}, ExtArgs["result"]["otifMetric"]>

export type OtifMetricSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderId?: boolean
  isOnTime?: boolean
  isFull?: boolean
  performanceDate?: boolean
}, ExtArgs["result"]["otifMetric"]>

export type OtifMetricSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderId?: boolean
  isOnTime?: boolean
  isFull?: boolean
  performanceDate?: boolean
}, ExtArgs["result"]["otifMetric"]>

export type OtifMetricSelectScalar = {
  id?: boolean
  tenantId?: boolean
  orderId?: boolean
  isOnTime?: boolean
  isFull?: boolean
  performanceDate?: boolean
}

export type OtifMetricOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "orderId" | "isOnTime" | "isFull" | "performanceDate", ExtArgs["result"]["otifMetric"]>

export type $OtifMetricPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "OtifMetric"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    orderId: string
    isOnTime: boolean
    isFull: boolean
    performanceDate: Date
  }, ExtArgs["result"]["otifMetric"]>
  composites: {}
}

export type OtifMetricGetPayload<S extends boolean | null | undefined | OtifMetricDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload, S>

export type OtifMetricCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<OtifMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtifMetricCountAggregateInputType | true
  }

export interface OtifMetricDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtifMetric'], meta: { name: 'OtifMetric' } }
  
  findUnique<T extends OtifMetricFindUniqueArgs>(args: Prisma.SelectSubset<T, OtifMetricFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends OtifMetricFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtifMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends OtifMetricFindFirstArgs>(args?: Prisma.SelectSubset<T, OtifMetricFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends OtifMetricFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtifMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends OtifMetricFindManyArgs>(args?: Prisma.SelectSubset<T, OtifMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends OtifMetricCreateArgs>(args: Prisma.SelectSubset<T, OtifMetricCreateArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends OtifMetricCreateManyArgs>(args?: Prisma.SelectSubset<T, OtifMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends OtifMetricCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtifMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends OtifMetricDeleteArgs>(args: Prisma.SelectSubset<T, OtifMetricDeleteArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends OtifMetricUpdateArgs>(args: Prisma.SelectSubset<T, OtifMetricUpdateArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends OtifMetricDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtifMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends OtifMetricUpdateManyArgs>(args: Prisma.SelectSubset<T, OtifMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends OtifMetricUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtifMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends OtifMetricUpsertArgs>(args: Prisma.SelectSubset<T, OtifMetricUpsertArgs<ExtArgs>>): Prisma.Prisma__OtifMetricClient<runtime.Types.Result.GetResult<Prisma.$OtifMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends OtifMetricCountArgs>(
    args?: Prisma.Subset<T, OtifMetricCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], OtifMetricCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends OtifMetricAggregateArgs>(args: Prisma.Subset<T, OtifMetricAggregateArgs>): Prisma.PrismaPromise<GetOtifMetricAggregateType<T>>

  
  groupBy<
    T extends OtifMetricGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: OtifMetricGroupByArgs['orderBy'] }
      : { orderBy?: OtifMetricGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, OtifMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtifMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: OtifMetricFieldRefs;
}


export interface Prisma__OtifMetricClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface OtifMetricFieldRefs {
  readonly id: Prisma.FieldRef<"OtifMetric", 'String'>
  readonly tenantId: Prisma.FieldRef<"OtifMetric", 'String'>
  readonly orderId: Prisma.FieldRef<"OtifMetric", 'String'>
  readonly isOnTime: Prisma.FieldRef<"OtifMetric", 'Boolean'>
  readonly isFull: Prisma.FieldRef<"OtifMetric", 'Boolean'>
  readonly performanceDate: Prisma.FieldRef<"OtifMetric", 'DateTime'>
}
    



export type OtifMetricFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  where: Prisma.OtifMetricWhereUniqueInput
}


export type OtifMetricFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  where: Prisma.OtifMetricWhereUniqueInput
}


export type OtifMetricFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  where?: Prisma.OtifMetricWhereInput
  
  orderBy?: Prisma.OtifMetricOrderByWithRelationInput | Prisma.OtifMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.OtifMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.OtifMetricScalarFieldEnum | Prisma.OtifMetricScalarFieldEnum[]
}


export type OtifMetricFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  where?: Prisma.OtifMetricWhereInput
  
  orderBy?: Prisma.OtifMetricOrderByWithRelationInput | Prisma.OtifMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.OtifMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.OtifMetricScalarFieldEnum | Prisma.OtifMetricScalarFieldEnum[]
}


export type OtifMetricFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  where?: Prisma.OtifMetricWhereInput
  
  orderBy?: Prisma.OtifMetricOrderByWithRelationInput | Prisma.OtifMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.OtifMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.OtifMetricScalarFieldEnum | Prisma.OtifMetricScalarFieldEnum[]
}


export type OtifMetricCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OtifMetricCreateInput, Prisma.OtifMetricUncheckedCreateInput>
}


export type OtifMetricCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.OtifMetricCreateManyInput | Prisma.OtifMetricCreateManyInput[]
  skipDuplicates?: boolean
}


export type OtifMetricCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  data: Prisma.OtifMetricCreateManyInput | Prisma.OtifMetricCreateManyInput[]
  skipDuplicates?: boolean
}


export type OtifMetricUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OtifMetricUpdateInput, Prisma.OtifMetricUncheckedUpdateInput>
  
  where: Prisma.OtifMetricWhereUniqueInput
}


export type OtifMetricUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.OtifMetricUpdateManyMutationInput, Prisma.OtifMetricUncheckedUpdateManyInput>
  
  where?: Prisma.OtifMetricWhereInput
  
  limit?: number
}


export type OtifMetricUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OtifMetricUpdateManyMutationInput, Prisma.OtifMetricUncheckedUpdateManyInput>
  
  where?: Prisma.OtifMetricWhereInput
  
  limit?: number
}


export type OtifMetricUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  where: Prisma.OtifMetricWhereUniqueInput
  
  create: Prisma.XOR<Prisma.OtifMetricCreateInput, Prisma.OtifMetricUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.OtifMetricUpdateInput, Prisma.OtifMetricUncheckedUpdateInput>
}


export type OtifMetricDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
  
  where: Prisma.OtifMetricWhereUniqueInput
}


export type OtifMetricDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.OtifMetricWhereInput
  
  limit?: number
}


export type OtifMetricDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OtifMetricSelect<ExtArgs> | null
  
  omit?: Prisma.OtifMetricOmit<ExtArgs> | null
}
