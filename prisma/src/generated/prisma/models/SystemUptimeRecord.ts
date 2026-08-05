





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type SystemUptimeRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$SystemUptimeRecordPayload>

export type AggregateSystemUptimeRecord = {
  _count: SystemUptimeRecordCountAggregateOutputType | null
  _avg: SystemUptimeRecordAvgAggregateOutputType | null
  _sum: SystemUptimeRecordSumAggregateOutputType | null
  _min: SystemUptimeRecordMinAggregateOutputType | null
  _max: SystemUptimeRecordMaxAggregateOutputType | null
}

export type SystemUptimeRecordAvgAggregateOutputType = {
  latencyMs: number | null
}

export type SystemUptimeRecordSumAggregateOutputType = {
  latencyMs: number | null
}

export type SystemUptimeRecordMinAggregateOutputType = {
  id: string | null
  serviceName: string | null
  status: string | null
  latencyMs: number | null
  checkedAt: Date | null
}

export type SystemUptimeRecordMaxAggregateOutputType = {
  id: string | null
  serviceName: string | null
  status: string | null
  latencyMs: number | null
  checkedAt: Date | null
}

export type SystemUptimeRecordCountAggregateOutputType = {
  id: number
  serviceName: number
  status: number
  latencyMs: number
  checkedAt: number
  _all: number
}


export type SystemUptimeRecordAvgAggregateInputType = {
  latencyMs?: true
}

export type SystemUptimeRecordSumAggregateInputType = {
  latencyMs?: true
}

export type SystemUptimeRecordMinAggregateInputType = {
  id?: true
  serviceName?: true
  status?: true
  latencyMs?: true
  checkedAt?: true
}

export type SystemUptimeRecordMaxAggregateInputType = {
  id?: true
  serviceName?: true
  status?: true
  latencyMs?: true
  checkedAt?: true
}

export type SystemUptimeRecordCountAggregateInputType = {
  id?: true
  serviceName?: true
  status?: true
  latencyMs?: true
  checkedAt?: true
  _all?: true
}

export type SystemUptimeRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SystemUptimeRecordWhereInput
  
  orderBy?: Prisma.SystemUptimeRecordOrderByWithRelationInput | Prisma.SystemUptimeRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SystemUptimeRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | SystemUptimeRecordCountAggregateInputType
  
  _avg?: SystemUptimeRecordAvgAggregateInputType
  
  _sum?: SystemUptimeRecordSumAggregateInputType
  
  _min?: SystemUptimeRecordMinAggregateInputType
  
  _max?: SystemUptimeRecordMaxAggregateInputType
}

export type GetSystemUptimeRecordAggregateType<T extends SystemUptimeRecordAggregateArgs> = {
      [P in keyof T & keyof AggregateSystemUptimeRecord]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateSystemUptimeRecord[P]>
    : Prisma.GetScalarType<T[P], AggregateSystemUptimeRecord[P]>
}




export type SystemUptimeRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SystemUptimeRecordWhereInput
  orderBy?: Prisma.SystemUptimeRecordOrderByWithAggregationInput | Prisma.SystemUptimeRecordOrderByWithAggregationInput[]
  by: Prisma.SystemUptimeRecordScalarFieldEnum[] | Prisma.SystemUptimeRecordScalarFieldEnum
  having?: Prisma.SystemUptimeRecordScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: SystemUptimeRecordCountAggregateInputType | true
  _avg?: SystemUptimeRecordAvgAggregateInputType
  _sum?: SystemUptimeRecordSumAggregateInputType
  _min?: SystemUptimeRecordMinAggregateInputType
  _max?: SystemUptimeRecordMaxAggregateInputType
}

export type SystemUptimeRecordGroupByOutputType = {
  id: string
  serviceName: string
  status: string
  latencyMs: number
  checkedAt: Date
  _count: SystemUptimeRecordCountAggregateOutputType | null
  _avg: SystemUptimeRecordAvgAggregateOutputType | null
  _sum: SystemUptimeRecordSumAggregateOutputType | null
  _min: SystemUptimeRecordMinAggregateOutputType | null
  _max: SystemUptimeRecordMaxAggregateOutputType | null
}

export type GetSystemUptimeRecordGroupByPayload<T extends SystemUptimeRecordGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<SystemUptimeRecordGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof SystemUptimeRecordGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], SystemUptimeRecordGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], SystemUptimeRecordGroupByOutputType[P]>
      }
    >
  >



export type SystemUptimeRecordWhereInput = {
  AND?: Prisma.SystemUptimeRecordWhereInput | Prisma.SystemUptimeRecordWhereInput[]
  OR?: Prisma.SystemUptimeRecordWhereInput[]
  NOT?: Prisma.SystemUptimeRecordWhereInput | Prisma.SystemUptimeRecordWhereInput[]
  id?: Prisma.StringFilter<"SystemUptimeRecord"> | string
  serviceName?: Prisma.StringFilter<"SystemUptimeRecord"> | string
  status?: Prisma.StringFilter<"SystemUptimeRecord"> | string
  latencyMs?: Prisma.FloatFilter<"SystemUptimeRecord"> | number
  checkedAt?: Prisma.DateTimeFilter<"SystemUptimeRecord"> | Date | string
}

export type SystemUptimeRecordOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  serviceName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  latencyMs?: Prisma.SortOrder
  checkedAt?: Prisma.SortOrder
}

export type SystemUptimeRecordWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.SystemUptimeRecordWhereInput | Prisma.SystemUptimeRecordWhereInput[]
  OR?: Prisma.SystemUptimeRecordWhereInput[]
  NOT?: Prisma.SystemUptimeRecordWhereInput | Prisma.SystemUptimeRecordWhereInput[]
  serviceName?: Prisma.StringFilter<"SystemUptimeRecord"> | string
  status?: Prisma.StringFilter<"SystemUptimeRecord"> | string
  latencyMs?: Prisma.FloatFilter<"SystemUptimeRecord"> | number
  checkedAt?: Prisma.DateTimeFilter<"SystemUptimeRecord"> | Date | string
}, "id">

export type SystemUptimeRecordOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  serviceName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  latencyMs?: Prisma.SortOrder
  checkedAt?: Prisma.SortOrder
  _count?: Prisma.SystemUptimeRecordCountOrderByAggregateInput
  _avg?: Prisma.SystemUptimeRecordAvgOrderByAggregateInput
  _max?: Prisma.SystemUptimeRecordMaxOrderByAggregateInput
  _min?: Prisma.SystemUptimeRecordMinOrderByAggregateInput
  _sum?: Prisma.SystemUptimeRecordSumOrderByAggregateInput
}

export type SystemUptimeRecordScalarWhereWithAggregatesInput = {
  AND?: Prisma.SystemUptimeRecordScalarWhereWithAggregatesInput | Prisma.SystemUptimeRecordScalarWhereWithAggregatesInput[]
  OR?: Prisma.SystemUptimeRecordScalarWhereWithAggregatesInput[]
  NOT?: Prisma.SystemUptimeRecordScalarWhereWithAggregatesInput | Prisma.SystemUptimeRecordScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"SystemUptimeRecord"> | string
  serviceName?: Prisma.StringWithAggregatesFilter<"SystemUptimeRecord"> | string
  status?: Prisma.StringWithAggregatesFilter<"SystemUptimeRecord"> | string
  latencyMs?: Prisma.FloatWithAggregatesFilter<"SystemUptimeRecord"> | number
  checkedAt?: Prisma.DateTimeWithAggregatesFilter<"SystemUptimeRecord"> | Date | string
}

export type SystemUptimeRecordCreateInput = {
  id?: string
  serviceName: string
  status: string
  latencyMs: number
  checkedAt?: Date | string
}

export type SystemUptimeRecordUncheckedCreateInput = {
  id?: string
  serviceName: string
  status: string
  latencyMs: number
  checkedAt?: Date | string
}

export type SystemUptimeRecordUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  serviceName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  latencyMs?: Prisma.FloatFieldUpdateOperationsInput | number
  checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SystemUptimeRecordUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  serviceName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  latencyMs?: Prisma.FloatFieldUpdateOperationsInput | number
  checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SystemUptimeRecordCreateManyInput = {
  id?: string
  serviceName: string
  status: string
  latencyMs: number
  checkedAt?: Date | string
}

export type SystemUptimeRecordUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  serviceName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  latencyMs?: Prisma.FloatFieldUpdateOperationsInput | number
  checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SystemUptimeRecordUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  serviceName?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  latencyMs?: Prisma.FloatFieldUpdateOperationsInput | number
  checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SystemUptimeRecordCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  serviceName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  latencyMs?: Prisma.SortOrder
  checkedAt?: Prisma.SortOrder
}

export type SystemUptimeRecordAvgOrderByAggregateInput = {
  latencyMs?: Prisma.SortOrder
}

export type SystemUptimeRecordMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  serviceName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  latencyMs?: Prisma.SortOrder
  checkedAt?: Prisma.SortOrder
}

export type SystemUptimeRecordMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  serviceName?: Prisma.SortOrder
  status?: Prisma.SortOrder
  latencyMs?: Prisma.SortOrder
  checkedAt?: Prisma.SortOrder
}

export type SystemUptimeRecordSumOrderByAggregateInput = {
  latencyMs?: Prisma.SortOrder
}



export type SystemUptimeRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  serviceName?: boolean
  status?: boolean
  latencyMs?: boolean
  checkedAt?: boolean
}, ExtArgs["result"]["systemUptimeRecord"]>

export type SystemUptimeRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  serviceName?: boolean
  status?: boolean
  latencyMs?: boolean
  checkedAt?: boolean
}, ExtArgs["result"]["systemUptimeRecord"]>

export type SystemUptimeRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  serviceName?: boolean
  status?: boolean
  latencyMs?: boolean
  checkedAt?: boolean
}, ExtArgs["result"]["systemUptimeRecord"]>

export type SystemUptimeRecordSelectScalar = {
  id?: boolean
  serviceName?: boolean
  status?: boolean
  latencyMs?: boolean
  checkedAt?: boolean
}

export type SystemUptimeRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "serviceName" | "status" | "latencyMs" | "checkedAt", ExtArgs["result"]["systemUptimeRecord"]>

export type $SystemUptimeRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "SystemUptimeRecord"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    serviceName: string
    status: string
    latencyMs: number
    checkedAt: Date
  }, ExtArgs["result"]["systemUptimeRecord"]>
  composites: {}
}

export type SystemUptimeRecordGetPayload<S extends boolean | null | undefined | SystemUptimeRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload, S>

export type SystemUptimeRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<SystemUptimeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SystemUptimeRecordCountAggregateInputType | true
  }

export interface SystemUptimeRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemUptimeRecord'], meta: { name: 'SystemUptimeRecord' } }
  
  findUnique<T extends SystemUptimeRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends SystemUptimeRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends SystemUptimeRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, SystemUptimeRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends SystemUptimeRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SystemUptimeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends SystemUptimeRecordFindManyArgs>(args?: Prisma.SelectSubset<T, SystemUptimeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends SystemUptimeRecordCreateArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordCreateArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends SystemUptimeRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, SystemUptimeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends SystemUptimeRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SystemUptimeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends SystemUptimeRecordDeleteArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends SystemUptimeRecordUpdateArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends SystemUptimeRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, SystemUptimeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends SystemUptimeRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends SystemUptimeRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends SystemUptimeRecordUpsertArgs>(args: Prisma.SelectSubset<T, SystemUptimeRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__SystemUptimeRecordClient<runtime.Types.Result.GetResult<Prisma.$SystemUptimeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends SystemUptimeRecordCountArgs>(
    args?: Prisma.Subset<T, SystemUptimeRecordCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], SystemUptimeRecordCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends SystemUptimeRecordAggregateArgs>(args: Prisma.Subset<T, SystemUptimeRecordAggregateArgs>): Prisma.PrismaPromise<GetSystemUptimeRecordAggregateType<T>>

  
  groupBy<
    T extends SystemUptimeRecordGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: SystemUptimeRecordGroupByArgs['orderBy'] }
      : { orderBy?: SystemUptimeRecordGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, SystemUptimeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemUptimeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: SystemUptimeRecordFieldRefs;
}


export interface Prisma__SystemUptimeRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface SystemUptimeRecordFieldRefs {
  readonly id: Prisma.FieldRef<"SystemUptimeRecord", 'String'>
  readonly serviceName: Prisma.FieldRef<"SystemUptimeRecord", 'String'>
  readonly status: Prisma.FieldRef<"SystemUptimeRecord", 'String'>
  readonly latencyMs: Prisma.FieldRef<"SystemUptimeRecord", 'Float'>
  readonly checkedAt: Prisma.FieldRef<"SystemUptimeRecord", 'DateTime'>
}
    



export type SystemUptimeRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  where: Prisma.SystemUptimeRecordWhereUniqueInput
}


export type SystemUptimeRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  where: Prisma.SystemUptimeRecordWhereUniqueInput
}


export type SystemUptimeRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  where?: Prisma.SystemUptimeRecordWhereInput
  
  orderBy?: Prisma.SystemUptimeRecordOrderByWithRelationInput | Prisma.SystemUptimeRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SystemUptimeRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SystemUptimeRecordScalarFieldEnum | Prisma.SystemUptimeRecordScalarFieldEnum[]
}


export type SystemUptimeRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  where?: Prisma.SystemUptimeRecordWhereInput
  
  orderBy?: Prisma.SystemUptimeRecordOrderByWithRelationInput | Prisma.SystemUptimeRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SystemUptimeRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SystemUptimeRecordScalarFieldEnum | Prisma.SystemUptimeRecordScalarFieldEnum[]
}


export type SystemUptimeRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  where?: Prisma.SystemUptimeRecordWhereInput
  
  orderBy?: Prisma.SystemUptimeRecordOrderByWithRelationInput | Prisma.SystemUptimeRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SystemUptimeRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SystemUptimeRecordScalarFieldEnum | Prisma.SystemUptimeRecordScalarFieldEnum[]
}


export type SystemUptimeRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SystemUptimeRecordCreateInput, Prisma.SystemUptimeRecordUncheckedCreateInput>
}


export type SystemUptimeRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.SystemUptimeRecordCreateManyInput | Prisma.SystemUptimeRecordCreateManyInput[]
  skipDuplicates?: boolean
}


export type SystemUptimeRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  data: Prisma.SystemUptimeRecordCreateManyInput | Prisma.SystemUptimeRecordCreateManyInput[]
  skipDuplicates?: boolean
}


export type SystemUptimeRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SystemUptimeRecordUpdateInput, Prisma.SystemUptimeRecordUncheckedUpdateInput>
  
  where: Prisma.SystemUptimeRecordWhereUniqueInput
}


export type SystemUptimeRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.SystemUptimeRecordUpdateManyMutationInput, Prisma.SystemUptimeRecordUncheckedUpdateManyInput>
  
  where?: Prisma.SystemUptimeRecordWhereInput
  
  limit?: number
}


export type SystemUptimeRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SystemUptimeRecordUpdateManyMutationInput, Prisma.SystemUptimeRecordUncheckedUpdateManyInput>
  
  where?: Prisma.SystemUptimeRecordWhereInput
  
  limit?: number
}


export type SystemUptimeRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  where: Prisma.SystemUptimeRecordWhereUniqueInput
  
  create: Prisma.XOR<Prisma.SystemUptimeRecordCreateInput, Prisma.SystemUptimeRecordUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.SystemUptimeRecordUpdateInput, Prisma.SystemUptimeRecordUncheckedUpdateInput>
}


export type SystemUptimeRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
  
  where: Prisma.SystemUptimeRecordWhereUniqueInput
}


export type SystemUptimeRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SystemUptimeRecordWhereInput
  
  limit?: number
}


export type SystemUptimeRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SystemUptimeRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SystemUptimeRecordOmit<ExtArgs> | null
}
