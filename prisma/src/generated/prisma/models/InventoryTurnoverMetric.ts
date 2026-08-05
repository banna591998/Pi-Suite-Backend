





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type InventoryTurnoverMetricModel = runtime.Types.Result.DefaultSelection<Prisma.$InventoryTurnoverMetricPayload>

export type AggregateInventoryTurnoverMetric = {
  _count: InventoryTurnoverMetricCountAggregateOutputType | null
  _avg: InventoryTurnoverMetricAvgAggregateOutputType | null
  _sum: InventoryTurnoverMetricSumAggregateOutputType | null
  _min: InventoryTurnoverMetricMinAggregateOutputType | null
  _max: InventoryTurnoverMetricMaxAggregateOutputType | null
}

export type InventoryTurnoverMetricAvgAggregateOutputType = {
  turnoverRatio: number | null
  holdingCost: number | null
}

export type InventoryTurnoverMetricSumAggregateOutputType = {
  turnoverRatio: number | null
  holdingCost: number | null
}

export type InventoryTurnoverMetricMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  productSku: string | null
  turnoverRatio: number | null
  holdingCost: number | null
  calculatedAt: Date | null
}

export type InventoryTurnoverMetricMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  productSku: string | null
  turnoverRatio: number | null
  holdingCost: number | null
  calculatedAt: Date | null
}

export type InventoryTurnoverMetricCountAggregateOutputType = {
  id: number
  tenantId: number
  productSku: number
  turnoverRatio: number
  holdingCost: number
  calculatedAt: number
  _all: number
}


export type InventoryTurnoverMetricAvgAggregateInputType = {
  turnoverRatio?: true
  holdingCost?: true
}

export type InventoryTurnoverMetricSumAggregateInputType = {
  turnoverRatio?: true
  holdingCost?: true
}

export type InventoryTurnoverMetricMinAggregateInputType = {
  id?: true
  tenantId?: true
  productSku?: true
  turnoverRatio?: true
  holdingCost?: true
  calculatedAt?: true
}

export type InventoryTurnoverMetricMaxAggregateInputType = {
  id?: true
  tenantId?: true
  productSku?: true
  turnoverRatio?: true
  holdingCost?: true
  calculatedAt?: true
}

export type InventoryTurnoverMetricCountAggregateInputType = {
  id?: true
  tenantId?: true
  productSku?: true
  turnoverRatio?: true
  holdingCost?: true
  calculatedAt?: true
  _all?: true
}

export type InventoryTurnoverMetricAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.InventoryTurnoverMetricWhereInput
  
  orderBy?: Prisma.InventoryTurnoverMetricOrderByWithRelationInput | Prisma.InventoryTurnoverMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.InventoryTurnoverMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | InventoryTurnoverMetricCountAggregateInputType
  
  _avg?: InventoryTurnoverMetricAvgAggregateInputType
  
  _sum?: InventoryTurnoverMetricSumAggregateInputType
  
  _min?: InventoryTurnoverMetricMinAggregateInputType
  
  _max?: InventoryTurnoverMetricMaxAggregateInputType
}

export type GetInventoryTurnoverMetricAggregateType<T extends InventoryTurnoverMetricAggregateArgs> = {
      [P in keyof T & keyof AggregateInventoryTurnoverMetric]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateInventoryTurnoverMetric[P]>
    : Prisma.GetScalarType<T[P], AggregateInventoryTurnoverMetric[P]>
}




export type InventoryTurnoverMetricGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.InventoryTurnoverMetricWhereInput
  orderBy?: Prisma.InventoryTurnoverMetricOrderByWithAggregationInput | Prisma.InventoryTurnoverMetricOrderByWithAggregationInput[]
  by: Prisma.InventoryTurnoverMetricScalarFieldEnum[] | Prisma.InventoryTurnoverMetricScalarFieldEnum
  having?: Prisma.InventoryTurnoverMetricScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: InventoryTurnoverMetricCountAggregateInputType | true
  _avg?: InventoryTurnoverMetricAvgAggregateInputType
  _sum?: InventoryTurnoverMetricSumAggregateInputType
  _min?: InventoryTurnoverMetricMinAggregateInputType
  _max?: InventoryTurnoverMetricMaxAggregateInputType
}

export type InventoryTurnoverMetricGroupByOutputType = {
  id: string
  tenantId: string
  productSku: string
  turnoverRatio: number
  holdingCost: number
  calculatedAt: Date
  _count: InventoryTurnoverMetricCountAggregateOutputType | null
  _avg: InventoryTurnoverMetricAvgAggregateOutputType | null
  _sum: InventoryTurnoverMetricSumAggregateOutputType | null
  _min: InventoryTurnoverMetricMinAggregateOutputType | null
  _max: InventoryTurnoverMetricMaxAggregateOutputType | null
}

export type GetInventoryTurnoverMetricGroupByPayload<T extends InventoryTurnoverMetricGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<InventoryTurnoverMetricGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof InventoryTurnoverMetricGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], InventoryTurnoverMetricGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], InventoryTurnoverMetricGroupByOutputType[P]>
      }
    >
  >



export type InventoryTurnoverMetricWhereInput = {
  AND?: Prisma.InventoryTurnoverMetricWhereInput | Prisma.InventoryTurnoverMetricWhereInput[]
  OR?: Prisma.InventoryTurnoverMetricWhereInput[]
  NOT?: Prisma.InventoryTurnoverMetricWhereInput | Prisma.InventoryTurnoverMetricWhereInput[]
  id?: Prisma.StringFilter<"InventoryTurnoverMetric"> | string
  tenantId?: Prisma.StringFilter<"InventoryTurnoverMetric"> | string
  productSku?: Prisma.StringFilter<"InventoryTurnoverMetric"> | string
  turnoverRatio?: Prisma.FloatFilter<"InventoryTurnoverMetric"> | number
  holdingCost?: Prisma.FloatFilter<"InventoryTurnoverMetric"> | number
  calculatedAt?: Prisma.DateTimeFilter<"InventoryTurnoverMetric"> | Date | string
}

export type InventoryTurnoverMetricOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productSku?: Prisma.SortOrder
  turnoverRatio?: Prisma.SortOrder
  holdingCost?: Prisma.SortOrder
  calculatedAt?: Prisma.SortOrder
}

export type InventoryTurnoverMetricWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.InventoryTurnoverMetricWhereInput | Prisma.InventoryTurnoverMetricWhereInput[]
  OR?: Prisma.InventoryTurnoverMetricWhereInput[]
  NOT?: Prisma.InventoryTurnoverMetricWhereInput | Prisma.InventoryTurnoverMetricWhereInput[]
  tenantId?: Prisma.StringFilter<"InventoryTurnoverMetric"> | string
  productSku?: Prisma.StringFilter<"InventoryTurnoverMetric"> | string
  turnoverRatio?: Prisma.FloatFilter<"InventoryTurnoverMetric"> | number
  holdingCost?: Prisma.FloatFilter<"InventoryTurnoverMetric"> | number
  calculatedAt?: Prisma.DateTimeFilter<"InventoryTurnoverMetric"> | Date | string
}, "id">

export type InventoryTurnoverMetricOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productSku?: Prisma.SortOrder
  turnoverRatio?: Prisma.SortOrder
  holdingCost?: Prisma.SortOrder
  calculatedAt?: Prisma.SortOrder
  _count?: Prisma.InventoryTurnoverMetricCountOrderByAggregateInput
  _avg?: Prisma.InventoryTurnoverMetricAvgOrderByAggregateInput
  _max?: Prisma.InventoryTurnoverMetricMaxOrderByAggregateInput
  _min?: Prisma.InventoryTurnoverMetricMinOrderByAggregateInput
  _sum?: Prisma.InventoryTurnoverMetricSumOrderByAggregateInput
}

export type InventoryTurnoverMetricScalarWhereWithAggregatesInput = {
  AND?: Prisma.InventoryTurnoverMetricScalarWhereWithAggregatesInput | Prisma.InventoryTurnoverMetricScalarWhereWithAggregatesInput[]
  OR?: Prisma.InventoryTurnoverMetricScalarWhereWithAggregatesInput[]
  NOT?: Prisma.InventoryTurnoverMetricScalarWhereWithAggregatesInput | Prisma.InventoryTurnoverMetricScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"InventoryTurnoverMetric"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"InventoryTurnoverMetric"> | string
  productSku?: Prisma.StringWithAggregatesFilter<"InventoryTurnoverMetric"> | string
  turnoverRatio?: Prisma.FloatWithAggregatesFilter<"InventoryTurnoverMetric"> | number
  holdingCost?: Prisma.FloatWithAggregatesFilter<"InventoryTurnoverMetric"> | number
  calculatedAt?: Prisma.DateTimeWithAggregatesFilter<"InventoryTurnoverMetric"> | Date | string
}

export type InventoryTurnoverMetricCreateInput = {
  id?: string
  tenantId: string
  productSku: string
  turnoverRatio: number
  holdingCost: number
  calculatedAt?: Date | string
}

export type InventoryTurnoverMetricUncheckedCreateInput = {
  id?: string
  tenantId: string
  productSku: string
  turnoverRatio: number
  holdingCost: number
  calculatedAt?: Date | string
}

export type InventoryTurnoverMetricUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productSku?: Prisma.StringFieldUpdateOperationsInput | string
  turnoverRatio?: Prisma.FloatFieldUpdateOperationsInput | number
  holdingCost?: Prisma.FloatFieldUpdateOperationsInput | number
  calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type InventoryTurnoverMetricUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productSku?: Prisma.StringFieldUpdateOperationsInput | string
  turnoverRatio?: Prisma.FloatFieldUpdateOperationsInput | number
  holdingCost?: Prisma.FloatFieldUpdateOperationsInput | number
  calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type InventoryTurnoverMetricCreateManyInput = {
  id?: string
  tenantId: string
  productSku: string
  turnoverRatio: number
  holdingCost: number
  calculatedAt?: Date | string
}

export type InventoryTurnoverMetricUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productSku?: Prisma.StringFieldUpdateOperationsInput | string
  turnoverRatio?: Prisma.FloatFieldUpdateOperationsInput | number
  holdingCost?: Prisma.FloatFieldUpdateOperationsInput | number
  calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type InventoryTurnoverMetricUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productSku?: Prisma.StringFieldUpdateOperationsInput | string
  turnoverRatio?: Prisma.FloatFieldUpdateOperationsInput | number
  holdingCost?: Prisma.FloatFieldUpdateOperationsInput | number
  calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type InventoryTurnoverMetricCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productSku?: Prisma.SortOrder
  turnoverRatio?: Prisma.SortOrder
  holdingCost?: Prisma.SortOrder
  calculatedAt?: Prisma.SortOrder
}

export type InventoryTurnoverMetricAvgOrderByAggregateInput = {
  turnoverRatio?: Prisma.SortOrder
  holdingCost?: Prisma.SortOrder
}

export type InventoryTurnoverMetricMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productSku?: Prisma.SortOrder
  turnoverRatio?: Prisma.SortOrder
  holdingCost?: Prisma.SortOrder
  calculatedAt?: Prisma.SortOrder
}

export type InventoryTurnoverMetricMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productSku?: Prisma.SortOrder
  turnoverRatio?: Prisma.SortOrder
  holdingCost?: Prisma.SortOrder
  calculatedAt?: Prisma.SortOrder
}

export type InventoryTurnoverMetricSumOrderByAggregateInput = {
  turnoverRatio?: Prisma.SortOrder
  holdingCost?: Prisma.SortOrder
}



export type InventoryTurnoverMetricSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  productSku?: boolean
  turnoverRatio?: boolean
  holdingCost?: boolean
  calculatedAt?: boolean
}, ExtArgs["result"]["inventoryTurnoverMetric"]>

export type InventoryTurnoverMetricSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  productSku?: boolean
  turnoverRatio?: boolean
  holdingCost?: boolean
  calculatedAt?: boolean
}, ExtArgs["result"]["inventoryTurnoverMetric"]>

export type InventoryTurnoverMetricSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  productSku?: boolean
  turnoverRatio?: boolean
  holdingCost?: boolean
  calculatedAt?: boolean
}, ExtArgs["result"]["inventoryTurnoverMetric"]>

export type InventoryTurnoverMetricSelectScalar = {
  id?: boolean
  tenantId?: boolean
  productSku?: boolean
  turnoverRatio?: boolean
  holdingCost?: boolean
  calculatedAt?: boolean
}

export type InventoryTurnoverMetricOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "productSku" | "turnoverRatio" | "holdingCost" | "calculatedAt", ExtArgs["result"]["inventoryTurnoverMetric"]>

export type $InventoryTurnoverMetricPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "InventoryTurnoverMetric"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    productSku: string
    turnoverRatio: number
    holdingCost: number
    calculatedAt: Date
  }, ExtArgs["result"]["inventoryTurnoverMetric"]>
  composites: {}
}

export type InventoryTurnoverMetricGetPayload<S extends boolean | null | undefined | InventoryTurnoverMetricDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload, S>

export type InventoryTurnoverMetricCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<InventoryTurnoverMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryTurnoverMetricCountAggregateInputType | true
  }

export interface InventoryTurnoverMetricDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTurnoverMetric'], meta: { name: 'InventoryTurnoverMetric' } }
  
  findUnique<T extends InventoryTurnoverMetricFindUniqueArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends InventoryTurnoverMetricFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends InventoryTurnoverMetricFindFirstArgs>(args?: Prisma.SelectSubset<T, InventoryTurnoverMetricFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends InventoryTurnoverMetricFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventoryTurnoverMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends InventoryTurnoverMetricFindManyArgs>(args?: Prisma.SelectSubset<T, InventoryTurnoverMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends InventoryTurnoverMetricCreateArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricCreateArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends InventoryTurnoverMetricCreateManyArgs>(args?: Prisma.SelectSubset<T, InventoryTurnoverMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends InventoryTurnoverMetricCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventoryTurnoverMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends InventoryTurnoverMetricDeleteArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricDeleteArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends InventoryTurnoverMetricUpdateArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricUpdateArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends InventoryTurnoverMetricDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventoryTurnoverMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends InventoryTurnoverMetricUpdateManyArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends InventoryTurnoverMetricUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends InventoryTurnoverMetricUpsertArgs>(args: Prisma.SelectSubset<T, InventoryTurnoverMetricUpsertArgs<ExtArgs>>): Prisma.Prisma__InventoryTurnoverMetricClient<runtime.Types.Result.GetResult<Prisma.$InventoryTurnoverMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends InventoryTurnoverMetricCountArgs>(
    args?: Prisma.Subset<T, InventoryTurnoverMetricCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], InventoryTurnoverMetricCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends InventoryTurnoverMetricAggregateArgs>(args: Prisma.Subset<T, InventoryTurnoverMetricAggregateArgs>): Prisma.PrismaPromise<GetInventoryTurnoverMetricAggregateType<T>>

  
  groupBy<
    T extends InventoryTurnoverMetricGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: InventoryTurnoverMetricGroupByArgs['orderBy'] }
      : { orderBy?: InventoryTurnoverMetricGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, InventoryTurnoverMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTurnoverMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: InventoryTurnoverMetricFieldRefs;
}


export interface Prisma__InventoryTurnoverMetricClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface InventoryTurnoverMetricFieldRefs {
  readonly id: Prisma.FieldRef<"InventoryTurnoverMetric", 'String'>
  readonly tenantId: Prisma.FieldRef<"InventoryTurnoverMetric", 'String'>
  readonly productSku: Prisma.FieldRef<"InventoryTurnoverMetric", 'String'>
  readonly turnoverRatio: Prisma.FieldRef<"InventoryTurnoverMetric", 'Float'>
  readonly holdingCost: Prisma.FieldRef<"InventoryTurnoverMetric", 'Float'>
  readonly calculatedAt: Prisma.FieldRef<"InventoryTurnoverMetric", 'DateTime'>
}
    



export type InventoryTurnoverMetricFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  where: Prisma.InventoryTurnoverMetricWhereUniqueInput
}


export type InventoryTurnoverMetricFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  where: Prisma.InventoryTurnoverMetricWhereUniqueInput
}


export type InventoryTurnoverMetricFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  where?: Prisma.InventoryTurnoverMetricWhereInput
  
  orderBy?: Prisma.InventoryTurnoverMetricOrderByWithRelationInput | Prisma.InventoryTurnoverMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.InventoryTurnoverMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.InventoryTurnoverMetricScalarFieldEnum | Prisma.InventoryTurnoverMetricScalarFieldEnum[]
}


export type InventoryTurnoverMetricFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  where?: Prisma.InventoryTurnoverMetricWhereInput
  
  orderBy?: Prisma.InventoryTurnoverMetricOrderByWithRelationInput | Prisma.InventoryTurnoverMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.InventoryTurnoverMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.InventoryTurnoverMetricScalarFieldEnum | Prisma.InventoryTurnoverMetricScalarFieldEnum[]
}


export type InventoryTurnoverMetricFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  where?: Prisma.InventoryTurnoverMetricWhereInput
  
  orderBy?: Prisma.InventoryTurnoverMetricOrderByWithRelationInput | Prisma.InventoryTurnoverMetricOrderByWithRelationInput[]
  
  cursor?: Prisma.InventoryTurnoverMetricWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.InventoryTurnoverMetricScalarFieldEnum | Prisma.InventoryTurnoverMetricScalarFieldEnum[]
}


export type InventoryTurnoverMetricCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.InventoryTurnoverMetricCreateInput, Prisma.InventoryTurnoverMetricUncheckedCreateInput>
}


export type InventoryTurnoverMetricCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.InventoryTurnoverMetricCreateManyInput | Prisma.InventoryTurnoverMetricCreateManyInput[]
  skipDuplicates?: boolean
}


export type InventoryTurnoverMetricCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  data: Prisma.InventoryTurnoverMetricCreateManyInput | Prisma.InventoryTurnoverMetricCreateManyInput[]
  skipDuplicates?: boolean
}


export type InventoryTurnoverMetricUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.InventoryTurnoverMetricUpdateInput, Prisma.InventoryTurnoverMetricUncheckedUpdateInput>
  
  where: Prisma.InventoryTurnoverMetricWhereUniqueInput
}


export type InventoryTurnoverMetricUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.InventoryTurnoverMetricUpdateManyMutationInput, Prisma.InventoryTurnoverMetricUncheckedUpdateManyInput>
  
  where?: Prisma.InventoryTurnoverMetricWhereInput
  
  limit?: number
}


export type InventoryTurnoverMetricUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.InventoryTurnoverMetricUpdateManyMutationInput, Prisma.InventoryTurnoverMetricUncheckedUpdateManyInput>
  
  where?: Prisma.InventoryTurnoverMetricWhereInput
  
  limit?: number
}


export type InventoryTurnoverMetricUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  where: Prisma.InventoryTurnoverMetricWhereUniqueInput
  
  create: Prisma.XOR<Prisma.InventoryTurnoverMetricCreateInput, Prisma.InventoryTurnoverMetricUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.InventoryTurnoverMetricUpdateInput, Prisma.InventoryTurnoverMetricUncheckedUpdateInput>
}


export type InventoryTurnoverMetricDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
  
  where: Prisma.InventoryTurnoverMetricWhereUniqueInput
}


export type InventoryTurnoverMetricDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.InventoryTurnoverMetricWhereInput
  
  limit?: number
}


export type InventoryTurnoverMetricDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InventoryTurnoverMetricSelect<ExtArgs> | null
  
  omit?: Prisma.InventoryTurnoverMetricOmit<ExtArgs> | null
}
