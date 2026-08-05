





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type CustomReportConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomReportConfigPayload>

export type AggregateCustomReportConfig = {
  _count: CustomReportConfigCountAggregateOutputType | null
  _min: CustomReportConfigMinAggregateOutputType | null
  _max: CustomReportConfigMaxAggregateOutputType | null
}

export type CustomReportConfigMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  reportName: string | null
  querySql: string | null
  formatType: string | null
  createdAt: Date | null
}

export type CustomReportConfigMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  reportName: string | null
  querySql: string | null
  formatType: string | null
  createdAt: Date | null
}

export type CustomReportConfigCountAggregateOutputType = {
  id: number
  tenantId: number
  reportName: number
  querySql: number
  formatType: number
  createdAt: number
  _all: number
}


export type CustomReportConfigMinAggregateInputType = {
  id?: true
  tenantId?: true
  reportName?: true
  querySql?: true
  formatType?: true
  createdAt?: true
}

export type CustomReportConfigMaxAggregateInputType = {
  id?: true
  tenantId?: true
  reportName?: true
  querySql?: true
  formatType?: true
  createdAt?: true
}

export type CustomReportConfigCountAggregateInputType = {
  id?: true
  tenantId?: true
  reportName?: true
  querySql?: true
  formatType?: true
  createdAt?: true
  _all?: true
}

export type CustomReportConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.CustomReportConfigWhereInput
  
  orderBy?: Prisma.CustomReportConfigOrderByWithRelationInput | Prisma.CustomReportConfigOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomReportConfigWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | CustomReportConfigCountAggregateInputType
  
  _min?: CustomReportConfigMinAggregateInputType
  
  _max?: CustomReportConfigMaxAggregateInputType
}

export type GetCustomReportConfigAggregateType<T extends CustomReportConfigAggregateArgs> = {
      [P in keyof T & keyof AggregateCustomReportConfig]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateCustomReportConfig[P]>
    : Prisma.GetScalarType<T[P], AggregateCustomReportConfig[P]>
}




export type CustomReportConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.CustomReportConfigWhereInput
  orderBy?: Prisma.CustomReportConfigOrderByWithAggregationInput | Prisma.CustomReportConfigOrderByWithAggregationInput[]
  by: Prisma.CustomReportConfigScalarFieldEnum[] | Prisma.CustomReportConfigScalarFieldEnum
  having?: Prisma.CustomReportConfigScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: CustomReportConfigCountAggregateInputType | true
  _min?: CustomReportConfigMinAggregateInputType
  _max?: CustomReportConfigMaxAggregateInputType
}

export type CustomReportConfigGroupByOutputType = {
  id: string
  tenantId: string
  reportName: string
  querySql: string
  formatType: string
  createdAt: Date
  _count: CustomReportConfigCountAggregateOutputType | null
  _min: CustomReportConfigMinAggregateOutputType | null
  _max: CustomReportConfigMaxAggregateOutputType | null
}

export type GetCustomReportConfigGroupByPayload<T extends CustomReportConfigGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<CustomReportConfigGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof CustomReportConfigGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], CustomReportConfigGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], CustomReportConfigGroupByOutputType[P]>
      }
    >
  >



export type CustomReportConfigWhereInput = {
  AND?: Prisma.CustomReportConfigWhereInput | Prisma.CustomReportConfigWhereInput[]
  OR?: Prisma.CustomReportConfigWhereInput[]
  NOT?: Prisma.CustomReportConfigWhereInput | Prisma.CustomReportConfigWhereInput[]
  id?: Prisma.StringFilter<"CustomReportConfig"> | string
  tenantId?: Prisma.StringFilter<"CustomReportConfig"> | string
  reportName?: Prisma.StringFilter<"CustomReportConfig"> | string
  querySql?: Prisma.StringFilter<"CustomReportConfig"> | string
  formatType?: Prisma.StringFilter<"CustomReportConfig"> | string
  createdAt?: Prisma.DateTimeFilter<"CustomReportConfig"> | Date | string
}

export type CustomReportConfigOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  reportName?: Prisma.SortOrder
  querySql?: Prisma.SortOrder
  formatType?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type CustomReportConfigWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.CustomReportConfigWhereInput | Prisma.CustomReportConfigWhereInput[]
  OR?: Prisma.CustomReportConfigWhereInput[]
  NOT?: Prisma.CustomReportConfigWhereInput | Prisma.CustomReportConfigWhereInput[]
  tenantId?: Prisma.StringFilter<"CustomReportConfig"> | string
  reportName?: Prisma.StringFilter<"CustomReportConfig"> | string
  querySql?: Prisma.StringFilter<"CustomReportConfig"> | string
  formatType?: Prisma.StringFilter<"CustomReportConfig"> | string
  createdAt?: Prisma.DateTimeFilter<"CustomReportConfig"> | Date | string
}, "id">

export type CustomReportConfigOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  reportName?: Prisma.SortOrder
  querySql?: Prisma.SortOrder
  formatType?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.CustomReportConfigCountOrderByAggregateInput
  _max?: Prisma.CustomReportConfigMaxOrderByAggregateInput
  _min?: Prisma.CustomReportConfigMinOrderByAggregateInput
}

export type CustomReportConfigScalarWhereWithAggregatesInput = {
  AND?: Prisma.CustomReportConfigScalarWhereWithAggregatesInput | Prisma.CustomReportConfigScalarWhereWithAggregatesInput[]
  OR?: Prisma.CustomReportConfigScalarWhereWithAggregatesInput[]
  NOT?: Prisma.CustomReportConfigScalarWhereWithAggregatesInput | Prisma.CustomReportConfigScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"CustomReportConfig"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"CustomReportConfig"> | string
  reportName?: Prisma.StringWithAggregatesFilter<"CustomReportConfig"> | string
  querySql?: Prisma.StringWithAggregatesFilter<"CustomReportConfig"> | string
  formatType?: Prisma.StringWithAggregatesFilter<"CustomReportConfig"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomReportConfig"> | Date | string
}

export type CustomReportConfigCreateInput = {
  id?: string
  tenantId: string
  reportName: string
  querySql: string
  formatType: string
  createdAt?: Date | string
}

export type CustomReportConfigUncheckedCreateInput = {
  id?: string
  tenantId: string
  reportName: string
  querySql: string
  formatType: string
  createdAt?: Date | string
}

export type CustomReportConfigUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  reportName?: Prisma.StringFieldUpdateOperationsInput | string
  querySql?: Prisma.StringFieldUpdateOperationsInput | string
  formatType?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomReportConfigUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  reportName?: Prisma.StringFieldUpdateOperationsInput | string
  querySql?: Prisma.StringFieldUpdateOperationsInput | string
  formatType?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomReportConfigCreateManyInput = {
  id?: string
  tenantId: string
  reportName: string
  querySql: string
  formatType: string
  createdAt?: Date | string
}

export type CustomReportConfigUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  reportName?: Prisma.StringFieldUpdateOperationsInput | string
  querySql?: Prisma.StringFieldUpdateOperationsInput | string
  formatType?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomReportConfigUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  reportName?: Prisma.StringFieldUpdateOperationsInput | string
  querySql?: Prisma.StringFieldUpdateOperationsInput | string
  formatType?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomReportConfigCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  reportName?: Prisma.SortOrder
  querySql?: Prisma.SortOrder
  formatType?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type CustomReportConfigMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  reportName?: Prisma.SortOrder
  querySql?: Prisma.SortOrder
  formatType?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type CustomReportConfigMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  reportName?: Prisma.SortOrder
  querySql?: Prisma.SortOrder
  formatType?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}



export type CustomReportConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  reportName?: boolean
  querySql?: boolean
  formatType?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["customReportConfig"]>

export type CustomReportConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  reportName?: boolean
  querySql?: boolean
  formatType?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["customReportConfig"]>

export type CustomReportConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  reportName?: boolean
  querySql?: boolean
  formatType?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["customReportConfig"]>

export type CustomReportConfigSelectScalar = {
  id?: boolean
  tenantId?: boolean
  reportName?: boolean
  querySql?: boolean
  formatType?: boolean
  createdAt?: boolean
}

export type CustomReportConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "reportName" | "querySql" | "formatType" | "createdAt", ExtArgs["result"]["customReportConfig"]>

export type $CustomReportConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "CustomReportConfig"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    reportName: string
    querySql: string
    formatType: string
    createdAt: Date
  }, ExtArgs["result"]["customReportConfig"]>
  composites: {}
}

export type CustomReportConfigGetPayload<S extends boolean | null | undefined | CustomReportConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload, S>

export type CustomReportConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<CustomReportConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomReportConfigCountAggregateInputType | true
  }

export interface CustomReportConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomReportConfig'], meta: { name: 'CustomReportConfig' } }
  
  findUnique<T extends CustomReportConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomReportConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends CustomReportConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomReportConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends CustomReportConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomReportConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends CustomReportConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomReportConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends CustomReportConfigFindManyArgs>(args?: Prisma.SelectSubset<T, CustomReportConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends CustomReportConfigCreateArgs>(args: Prisma.SelectSubset<T, CustomReportConfigCreateArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends CustomReportConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomReportConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends CustomReportConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomReportConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends CustomReportConfigDeleteArgs>(args: Prisma.SelectSubset<T, CustomReportConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends CustomReportConfigUpdateArgs>(args: Prisma.SelectSubset<T, CustomReportConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends CustomReportConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomReportConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends CustomReportConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomReportConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends CustomReportConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomReportConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends CustomReportConfigUpsertArgs>(args: Prisma.SelectSubset<T, CustomReportConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomReportConfigClient<runtime.Types.Result.GetResult<Prisma.$CustomReportConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends CustomReportConfigCountArgs>(
    args?: Prisma.Subset<T, CustomReportConfigCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], CustomReportConfigCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends CustomReportConfigAggregateArgs>(args: Prisma.Subset<T, CustomReportConfigAggregateArgs>): Prisma.PrismaPromise<GetCustomReportConfigAggregateType<T>>

  
  groupBy<
    T extends CustomReportConfigGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: CustomReportConfigGroupByArgs['orderBy'] }
      : { orderBy?: CustomReportConfigGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, CustomReportConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomReportConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: CustomReportConfigFieldRefs;
}


export interface Prisma__CustomReportConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface CustomReportConfigFieldRefs {
  readonly id: Prisma.FieldRef<"CustomReportConfig", 'String'>
  readonly tenantId: Prisma.FieldRef<"CustomReportConfig", 'String'>
  readonly reportName: Prisma.FieldRef<"CustomReportConfig", 'String'>
  readonly querySql: Prisma.FieldRef<"CustomReportConfig", 'String'>
  readonly formatType: Prisma.FieldRef<"CustomReportConfig", 'String'>
  readonly createdAt: Prisma.FieldRef<"CustomReportConfig", 'DateTime'>
}
    



export type CustomReportConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  where: Prisma.CustomReportConfigWhereUniqueInput
}


export type CustomReportConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  where: Prisma.CustomReportConfigWhereUniqueInput
}


export type CustomReportConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  where?: Prisma.CustomReportConfigWhereInput
  
  orderBy?: Prisma.CustomReportConfigOrderByWithRelationInput | Prisma.CustomReportConfigOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomReportConfigWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.CustomReportConfigScalarFieldEnum | Prisma.CustomReportConfigScalarFieldEnum[]
}


export type CustomReportConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  where?: Prisma.CustomReportConfigWhereInput
  
  orderBy?: Prisma.CustomReportConfigOrderByWithRelationInput | Prisma.CustomReportConfigOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomReportConfigWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.CustomReportConfigScalarFieldEnum | Prisma.CustomReportConfigScalarFieldEnum[]
}


export type CustomReportConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  where?: Prisma.CustomReportConfigWhereInput
  
  orderBy?: Prisma.CustomReportConfigOrderByWithRelationInput | Prisma.CustomReportConfigOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomReportConfigWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.CustomReportConfigScalarFieldEnum | Prisma.CustomReportConfigScalarFieldEnum[]
}


export type CustomReportConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.CustomReportConfigCreateInput, Prisma.CustomReportConfigUncheckedCreateInput>
}


export type CustomReportConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.CustomReportConfigCreateManyInput | Prisma.CustomReportConfigCreateManyInput[]
  skipDuplicates?: boolean
}


export type CustomReportConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  data: Prisma.CustomReportConfigCreateManyInput | Prisma.CustomReportConfigCreateManyInput[]
  skipDuplicates?: boolean
}


export type CustomReportConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.CustomReportConfigUpdateInput, Prisma.CustomReportConfigUncheckedUpdateInput>
  
  where: Prisma.CustomReportConfigWhereUniqueInput
}


export type CustomReportConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.CustomReportConfigUpdateManyMutationInput, Prisma.CustomReportConfigUncheckedUpdateManyInput>
  
  where?: Prisma.CustomReportConfigWhereInput
  
  limit?: number
}


export type CustomReportConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.CustomReportConfigUpdateManyMutationInput, Prisma.CustomReportConfigUncheckedUpdateManyInput>
  
  where?: Prisma.CustomReportConfigWhereInput
  
  limit?: number
}


export type CustomReportConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  where: Prisma.CustomReportConfigWhereUniqueInput
  
  create: Prisma.XOR<Prisma.CustomReportConfigCreateInput, Prisma.CustomReportConfigUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.CustomReportConfigUpdateInput, Prisma.CustomReportConfigUncheckedUpdateInput>
}


export type CustomReportConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
  
  where: Prisma.CustomReportConfigWhereUniqueInput
}


export type CustomReportConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.CustomReportConfigWhereInput
  
  limit?: number
}


export type CustomReportConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomReportConfigSelect<ExtArgs> | null
  
  omit?: Prisma.CustomReportConfigOmit<ExtArgs> | null
}
