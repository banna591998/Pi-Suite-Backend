





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type SupplyChainBottleneckModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplyChainBottleneckPayload>

export type AggregateSupplyChainBottleneck = {
  _count: SupplyChainBottleneckCountAggregateOutputType | null
  _avg: SupplyChainBottleneckAvgAggregateOutputType | null
  _sum: SupplyChainBottleneckSumAggregateOutputType | null
  _min: SupplyChainBottleneckMinAggregateOutputType | null
  _max: SupplyChainBottleneckMaxAggregateOutputType | null
}

export type SupplyChainBottleneckAvgAggregateOutputType = {
  delayHours: number | null
}

export type SupplyChainBottleneckSumAggregateOutputType = {
  delayHours: number | null
}

export type SupplyChainBottleneckMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  processStage: string | null
  delayHours: number | null
  severity: string | null
  detectedAt: Date | null
}

export type SupplyChainBottleneckMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  processStage: string | null
  delayHours: number | null
  severity: string | null
  detectedAt: Date | null
}

export type SupplyChainBottleneckCountAggregateOutputType = {
  id: number
  tenantId: number
  processStage: number
  delayHours: number
  severity: number
  detectedAt: number
  _all: number
}


export type SupplyChainBottleneckAvgAggregateInputType = {
  delayHours?: true
}

export type SupplyChainBottleneckSumAggregateInputType = {
  delayHours?: true
}

export type SupplyChainBottleneckMinAggregateInputType = {
  id?: true
  tenantId?: true
  processStage?: true
  delayHours?: true
  severity?: true
  detectedAt?: true
}

export type SupplyChainBottleneckMaxAggregateInputType = {
  id?: true
  tenantId?: true
  processStage?: true
  delayHours?: true
  severity?: true
  detectedAt?: true
}

export type SupplyChainBottleneckCountAggregateInputType = {
  id?: true
  tenantId?: true
  processStage?: true
  delayHours?: true
  severity?: true
  detectedAt?: true
  _all?: true
}

export type SupplyChainBottleneckAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SupplyChainBottleneckWhereInput
  
  orderBy?: Prisma.SupplyChainBottleneckOrderByWithRelationInput | Prisma.SupplyChainBottleneckOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplyChainBottleneckWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | SupplyChainBottleneckCountAggregateInputType
  
  _avg?: SupplyChainBottleneckAvgAggregateInputType
  
  _sum?: SupplyChainBottleneckSumAggregateInputType
  
  _min?: SupplyChainBottleneckMinAggregateInputType
  
  _max?: SupplyChainBottleneckMaxAggregateInputType
}

export type GetSupplyChainBottleneckAggregateType<T extends SupplyChainBottleneckAggregateArgs> = {
      [P in keyof T & keyof AggregateSupplyChainBottleneck]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateSupplyChainBottleneck[P]>
    : Prisma.GetScalarType<T[P], AggregateSupplyChainBottleneck[P]>
}




export type SupplyChainBottleneckGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SupplyChainBottleneckWhereInput
  orderBy?: Prisma.SupplyChainBottleneckOrderByWithAggregationInput | Prisma.SupplyChainBottleneckOrderByWithAggregationInput[]
  by: Prisma.SupplyChainBottleneckScalarFieldEnum[] | Prisma.SupplyChainBottleneckScalarFieldEnum
  having?: Prisma.SupplyChainBottleneckScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: SupplyChainBottleneckCountAggregateInputType | true
  _avg?: SupplyChainBottleneckAvgAggregateInputType
  _sum?: SupplyChainBottleneckSumAggregateInputType
  _min?: SupplyChainBottleneckMinAggregateInputType
  _max?: SupplyChainBottleneckMaxAggregateInputType
}

export type SupplyChainBottleneckGroupByOutputType = {
  id: string
  tenantId: string
  processStage: string
  delayHours: number
  severity: string
  detectedAt: Date
  _count: SupplyChainBottleneckCountAggregateOutputType | null
  _avg: SupplyChainBottleneckAvgAggregateOutputType | null
  _sum: SupplyChainBottleneckSumAggregateOutputType | null
  _min: SupplyChainBottleneckMinAggregateOutputType | null
  _max: SupplyChainBottleneckMaxAggregateOutputType | null
}

export type GetSupplyChainBottleneckGroupByPayload<T extends SupplyChainBottleneckGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<SupplyChainBottleneckGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof SupplyChainBottleneckGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], SupplyChainBottleneckGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], SupplyChainBottleneckGroupByOutputType[P]>
      }
    >
  >



export type SupplyChainBottleneckWhereInput = {
  AND?: Prisma.SupplyChainBottleneckWhereInput | Prisma.SupplyChainBottleneckWhereInput[]
  OR?: Prisma.SupplyChainBottleneckWhereInput[]
  NOT?: Prisma.SupplyChainBottleneckWhereInput | Prisma.SupplyChainBottleneckWhereInput[]
  id?: Prisma.StringFilter<"SupplyChainBottleneck"> | string
  tenantId?: Prisma.StringFilter<"SupplyChainBottleneck"> | string
  processStage?: Prisma.StringFilter<"SupplyChainBottleneck"> | string
  delayHours?: Prisma.FloatFilter<"SupplyChainBottleneck"> | number
  severity?: Prisma.StringFilter<"SupplyChainBottleneck"> | string
  detectedAt?: Prisma.DateTimeFilter<"SupplyChainBottleneck"> | Date | string
}

export type SupplyChainBottleneckOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  processStage?: Prisma.SortOrder
  delayHours?: Prisma.SortOrder
  severity?: Prisma.SortOrder
  detectedAt?: Prisma.SortOrder
}

export type SupplyChainBottleneckWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.SupplyChainBottleneckWhereInput | Prisma.SupplyChainBottleneckWhereInput[]
  OR?: Prisma.SupplyChainBottleneckWhereInput[]
  NOT?: Prisma.SupplyChainBottleneckWhereInput | Prisma.SupplyChainBottleneckWhereInput[]
  tenantId?: Prisma.StringFilter<"SupplyChainBottleneck"> | string
  processStage?: Prisma.StringFilter<"SupplyChainBottleneck"> | string
  delayHours?: Prisma.FloatFilter<"SupplyChainBottleneck"> | number
  severity?: Prisma.StringFilter<"SupplyChainBottleneck"> | string
  detectedAt?: Prisma.DateTimeFilter<"SupplyChainBottleneck"> | Date | string
}, "id">

export type SupplyChainBottleneckOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  processStage?: Prisma.SortOrder
  delayHours?: Prisma.SortOrder
  severity?: Prisma.SortOrder
  detectedAt?: Prisma.SortOrder
  _count?: Prisma.SupplyChainBottleneckCountOrderByAggregateInput
  _avg?: Prisma.SupplyChainBottleneckAvgOrderByAggregateInput
  _max?: Prisma.SupplyChainBottleneckMaxOrderByAggregateInput
  _min?: Prisma.SupplyChainBottleneckMinOrderByAggregateInput
  _sum?: Prisma.SupplyChainBottleneckSumOrderByAggregateInput
}

export type SupplyChainBottleneckScalarWhereWithAggregatesInput = {
  AND?: Prisma.SupplyChainBottleneckScalarWhereWithAggregatesInput | Prisma.SupplyChainBottleneckScalarWhereWithAggregatesInput[]
  OR?: Prisma.SupplyChainBottleneckScalarWhereWithAggregatesInput[]
  NOT?: Prisma.SupplyChainBottleneckScalarWhereWithAggregatesInput | Prisma.SupplyChainBottleneckScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"SupplyChainBottleneck"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"SupplyChainBottleneck"> | string
  processStage?: Prisma.StringWithAggregatesFilter<"SupplyChainBottleneck"> | string
  delayHours?: Prisma.FloatWithAggregatesFilter<"SupplyChainBottleneck"> | number
  severity?: Prisma.StringWithAggregatesFilter<"SupplyChainBottleneck"> | string
  detectedAt?: Prisma.DateTimeWithAggregatesFilter<"SupplyChainBottleneck"> | Date | string
}

export type SupplyChainBottleneckCreateInput = {
  id?: string
  tenantId: string
  processStage: string
  delayHours: number
  severity: string
  detectedAt?: Date | string
}

export type SupplyChainBottleneckUncheckedCreateInput = {
  id?: string
  tenantId: string
  processStage: string
  delayHours: number
  severity: string
  detectedAt?: Date | string
}

export type SupplyChainBottleneckUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  processStage?: Prisma.StringFieldUpdateOperationsInput | string
  delayHours?: Prisma.FloatFieldUpdateOperationsInput | number
  severity?: Prisma.StringFieldUpdateOperationsInput | string
  detectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplyChainBottleneckUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  processStage?: Prisma.StringFieldUpdateOperationsInput | string
  delayHours?: Prisma.FloatFieldUpdateOperationsInput | number
  severity?: Prisma.StringFieldUpdateOperationsInput | string
  detectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplyChainBottleneckCreateManyInput = {
  id?: string
  tenantId: string
  processStage: string
  delayHours: number
  severity: string
  detectedAt?: Date | string
}

export type SupplyChainBottleneckUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  processStage?: Prisma.StringFieldUpdateOperationsInput | string
  delayHours?: Prisma.FloatFieldUpdateOperationsInput | number
  severity?: Prisma.StringFieldUpdateOperationsInput | string
  detectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplyChainBottleneckUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  processStage?: Prisma.StringFieldUpdateOperationsInput | string
  delayHours?: Prisma.FloatFieldUpdateOperationsInput | number
  severity?: Prisma.StringFieldUpdateOperationsInput | string
  detectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplyChainBottleneckCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  processStage?: Prisma.SortOrder
  delayHours?: Prisma.SortOrder
  severity?: Prisma.SortOrder
  detectedAt?: Prisma.SortOrder
}

export type SupplyChainBottleneckAvgOrderByAggregateInput = {
  delayHours?: Prisma.SortOrder
}

export type SupplyChainBottleneckMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  processStage?: Prisma.SortOrder
  delayHours?: Prisma.SortOrder
  severity?: Prisma.SortOrder
  detectedAt?: Prisma.SortOrder
}

export type SupplyChainBottleneckMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  processStage?: Prisma.SortOrder
  delayHours?: Prisma.SortOrder
  severity?: Prisma.SortOrder
  detectedAt?: Prisma.SortOrder
}

export type SupplyChainBottleneckSumOrderByAggregateInput = {
  delayHours?: Prisma.SortOrder
}



export type SupplyChainBottleneckSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  processStage?: boolean
  delayHours?: boolean
  severity?: boolean
  detectedAt?: boolean
}, ExtArgs["result"]["supplyChainBottleneck"]>

export type SupplyChainBottleneckSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  processStage?: boolean
  delayHours?: boolean
  severity?: boolean
  detectedAt?: boolean
}, ExtArgs["result"]["supplyChainBottleneck"]>

export type SupplyChainBottleneckSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  processStage?: boolean
  delayHours?: boolean
  severity?: boolean
  detectedAt?: boolean
}, ExtArgs["result"]["supplyChainBottleneck"]>

export type SupplyChainBottleneckSelectScalar = {
  id?: boolean
  tenantId?: boolean
  processStage?: boolean
  delayHours?: boolean
  severity?: boolean
  detectedAt?: boolean
}

export type SupplyChainBottleneckOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "processStage" | "delayHours" | "severity" | "detectedAt", ExtArgs["result"]["supplyChainBottleneck"]>

export type $SupplyChainBottleneckPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "SupplyChainBottleneck"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    processStage: string
    delayHours: number
    severity: string
    detectedAt: Date
  }, ExtArgs["result"]["supplyChainBottleneck"]>
  composites: {}
}

export type SupplyChainBottleneckGetPayload<S extends boolean | null | undefined | SupplyChainBottleneckDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload, S>

export type SupplyChainBottleneckCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<SupplyChainBottleneckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplyChainBottleneckCountAggregateInputType | true
  }

export interface SupplyChainBottleneckDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplyChainBottleneck'], meta: { name: 'SupplyChainBottleneck' } }
  
  findUnique<T extends SupplyChainBottleneckFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends SupplyChainBottleneckFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends SupplyChainBottleneckFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplyChainBottleneckFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends SupplyChainBottleneckFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplyChainBottleneckFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends SupplyChainBottleneckFindManyArgs>(args?: Prisma.SelectSubset<T, SupplyChainBottleneckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends SupplyChainBottleneckCreateArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckCreateArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends SupplyChainBottleneckCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplyChainBottleneckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends SupplyChainBottleneckCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplyChainBottleneckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends SupplyChainBottleneckDeleteArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends SupplyChainBottleneckUpdateArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends SupplyChainBottleneckDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplyChainBottleneckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends SupplyChainBottleneckUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends SupplyChainBottleneckUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends SupplyChainBottleneckUpsertArgs>(args: Prisma.SelectSubset<T, SupplyChainBottleneckUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplyChainBottleneckClient<runtime.Types.Result.GetResult<Prisma.$SupplyChainBottleneckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends SupplyChainBottleneckCountArgs>(
    args?: Prisma.Subset<T, SupplyChainBottleneckCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], SupplyChainBottleneckCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends SupplyChainBottleneckAggregateArgs>(args: Prisma.Subset<T, SupplyChainBottleneckAggregateArgs>): Prisma.PrismaPromise<GetSupplyChainBottleneckAggregateType<T>>

  
  groupBy<
    T extends SupplyChainBottleneckGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: SupplyChainBottleneckGroupByArgs['orderBy'] }
      : { orderBy?: SupplyChainBottleneckGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, SupplyChainBottleneckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplyChainBottleneckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: SupplyChainBottleneckFieldRefs;
}


export interface Prisma__SupplyChainBottleneckClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface SupplyChainBottleneckFieldRefs {
  readonly id: Prisma.FieldRef<"SupplyChainBottleneck", 'String'>
  readonly tenantId: Prisma.FieldRef<"SupplyChainBottleneck", 'String'>
  readonly processStage: Prisma.FieldRef<"SupplyChainBottleneck", 'String'>
  readonly delayHours: Prisma.FieldRef<"SupplyChainBottleneck", 'Float'>
  readonly severity: Prisma.FieldRef<"SupplyChainBottleneck", 'String'>
  readonly detectedAt: Prisma.FieldRef<"SupplyChainBottleneck", 'DateTime'>
}
    



export type SupplyChainBottleneckFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  where: Prisma.SupplyChainBottleneckWhereUniqueInput
}


export type SupplyChainBottleneckFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  where: Prisma.SupplyChainBottleneckWhereUniqueInput
}


export type SupplyChainBottleneckFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  where?: Prisma.SupplyChainBottleneckWhereInput
  
  orderBy?: Prisma.SupplyChainBottleneckOrderByWithRelationInput | Prisma.SupplyChainBottleneckOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplyChainBottleneckWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SupplyChainBottleneckScalarFieldEnum | Prisma.SupplyChainBottleneckScalarFieldEnum[]
}


export type SupplyChainBottleneckFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  where?: Prisma.SupplyChainBottleneckWhereInput
  
  orderBy?: Prisma.SupplyChainBottleneckOrderByWithRelationInput | Prisma.SupplyChainBottleneckOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplyChainBottleneckWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SupplyChainBottleneckScalarFieldEnum | Prisma.SupplyChainBottleneckScalarFieldEnum[]
}


export type SupplyChainBottleneckFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  where?: Prisma.SupplyChainBottleneckWhereInput
  
  orderBy?: Prisma.SupplyChainBottleneckOrderByWithRelationInput | Prisma.SupplyChainBottleneckOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplyChainBottleneckWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SupplyChainBottleneckScalarFieldEnum | Prisma.SupplyChainBottleneckScalarFieldEnum[]
}


export type SupplyChainBottleneckCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SupplyChainBottleneckCreateInput, Prisma.SupplyChainBottleneckUncheckedCreateInput>
}


export type SupplyChainBottleneckCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.SupplyChainBottleneckCreateManyInput | Prisma.SupplyChainBottleneckCreateManyInput[]
  skipDuplicates?: boolean
}


export type SupplyChainBottleneckCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  data: Prisma.SupplyChainBottleneckCreateManyInput | Prisma.SupplyChainBottleneckCreateManyInput[]
  skipDuplicates?: boolean
}


export type SupplyChainBottleneckUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SupplyChainBottleneckUpdateInput, Prisma.SupplyChainBottleneckUncheckedUpdateInput>
  
  where: Prisma.SupplyChainBottleneckWhereUniqueInput
}


export type SupplyChainBottleneckUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.SupplyChainBottleneckUpdateManyMutationInput, Prisma.SupplyChainBottleneckUncheckedUpdateManyInput>
  
  where?: Prisma.SupplyChainBottleneckWhereInput
  
  limit?: number
}


export type SupplyChainBottleneckUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SupplyChainBottleneckUpdateManyMutationInput, Prisma.SupplyChainBottleneckUncheckedUpdateManyInput>
  
  where?: Prisma.SupplyChainBottleneckWhereInput
  
  limit?: number
}


export type SupplyChainBottleneckUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  where: Prisma.SupplyChainBottleneckWhereUniqueInput
  
  create: Prisma.XOR<Prisma.SupplyChainBottleneckCreateInput, Prisma.SupplyChainBottleneckUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.SupplyChainBottleneckUpdateInput, Prisma.SupplyChainBottleneckUncheckedUpdateInput>
}


export type SupplyChainBottleneckDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
  
  where: Prisma.SupplyChainBottleneckWhereUniqueInput
}


export type SupplyChainBottleneckDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SupplyChainBottleneckWhereInput
  
  limit?: number
}


export type SupplyChainBottleneckDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplyChainBottleneckSelect<ExtArgs> | null
  
  omit?: Prisma.SupplyChainBottleneckOmit<ExtArgs> | null
}
