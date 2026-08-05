





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type WorkstationModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkstationPayload>

export type AggregateWorkstation = {
  _count: WorkstationCountAggregateOutputType | null
  _avg: WorkstationAvgAggregateOutputType | null
  _sum: WorkstationSumAggregateOutputType | null
  _min: WorkstationMinAggregateOutputType | null
  _max: WorkstationMaxAggregateOutputType | null
}

export type WorkstationAvgAggregateOutputType = {
  hourRate: number | null
}

export type WorkstationSumAggregateOutputType = {
  hourRate: number | null
}

export type WorkstationMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  workstationName: string | null
  hourRate: number | null
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WorkstationMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  workstationName: string | null
  hourRate: number | null
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type WorkstationCountAggregateOutputType = {
  id: number
  tenantId: number
  workstationName: number
  hourRate: number
  description: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type WorkstationAvgAggregateInputType = {
  hourRate?: true
}

export type WorkstationSumAggregateInputType = {
  hourRate?: true
}

export type WorkstationMinAggregateInputType = {
  id?: true
  tenantId?: true
  workstationName?: true
  hourRate?: true
  description?: true
  createdAt?: true
  updatedAt?: true
}

export type WorkstationMaxAggregateInputType = {
  id?: true
  tenantId?: true
  workstationName?: true
  hourRate?: true
  description?: true
  createdAt?: true
  updatedAt?: true
}

export type WorkstationCountAggregateInputType = {
  id?: true
  tenantId?: true
  workstationName?: true
  hourRate?: true
  description?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type WorkstationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WorkstationWhereInput
  
  orderBy?: Prisma.WorkstationOrderByWithRelationInput | Prisma.WorkstationOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkstationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | WorkstationCountAggregateInputType
  
  _avg?: WorkstationAvgAggregateInputType
  
  _sum?: WorkstationSumAggregateInputType
  
  _min?: WorkstationMinAggregateInputType
  
  _max?: WorkstationMaxAggregateInputType
}

export type GetWorkstationAggregateType<T extends WorkstationAggregateArgs> = {
      [P in keyof T & keyof AggregateWorkstation]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateWorkstation[P]>
    : Prisma.GetScalarType<T[P], AggregateWorkstation[P]>
}




export type WorkstationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.WorkstationWhereInput
  orderBy?: Prisma.WorkstationOrderByWithAggregationInput | Prisma.WorkstationOrderByWithAggregationInput[]
  by: Prisma.WorkstationScalarFieldEnum[] | Prisma.WorkstationScalarFieldEnum
  having?: Prisma.WorkstationScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: WorkstationCountAggregateInputType | true
  _avg?: WorkstationAvgAggregateInputType
  _sum?: WorkstationSumAggregateInputType
  _min?: WorkstationMinAggregateInputType
  _max?: WorkstationMaxAggregateInputType
}

export type WorkstationGroupByOutputType = {
  id: string
  tenantId: string
  workstationName: string
  hourRate: number
  description: string | null
  createdAt: Date
  updatedAt: Date
  _count: WorkstationCountAggregateOutputType | null
  _avg: WorkstationAvgAggregateOutputType | null
  _sum: WorkstationSumAggregateOutputType | null
  _min: WorkstationMinAggregateOutputType | null
  _max: WorkstationMaxAggregateOutputType | null
}

export type GetWorkstationGroupByPayload<T extends WorkstationGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<WorkstationGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof WorkstationGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], WorkstationGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], WorkstationGroupByOutputType[P]>
      }
    >
  >



export type WorkstationWhereInput = {
  AND?: Prisma.WorkstationWhereInput | Prisma.WorkstationWhereInput[]
  OR?: Prisma.WorkstationWhereInput[]
  NOT?: Prisma.WorkstationWhereInput | Prisma.WorkstationWhereInput[]
  id?: Prisma.StringFilter<"Workstation"> | string
  tenantId?: Prisma.StringFilter<"Workstation"> | string
  workstationName?: Prisma.StringFilter<"Workstation"> | string
  hourRate?: Prisma.FloatFilter<"Workstation"> | number
  description?: Prisma.StringNullableFilter<"Workstation"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Workstation"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Workstation"> | Date | string
  operations?: Prisma.OperationListRelationFilter
}

export type WorkstationOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  workstationName?: Prisma.SortOrder
  hourRate?: Prisma.SortOrder
  description?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  operations?: Prisma.OperationOrderByRelationAggregateInput
}

export type WorkstationWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.WorkstationWhereInput | Prisma.WorkstationWhereInput[]
  OR?: Prisma.WorkstationWhereInput[]
  NOT?: Prisma.WorkstationWhereInput | Prisma.WorkstationWhereInput[]
  tenantId?: Prisma.StringFilter<"Workstation"> | string
  workstationName?: Prisma.StringFilter<"Workstation"> | string
  hourRate?: Prisma.FloatFilter<"Workstation"> | number
  description?: Prisma.StringNullableFilter<"Workstation"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Workstation"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Workstation"> | Date | string
  operations?: Prisma.OperationListRelationFilter
}, "id">

export type WorkstationOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  workstationName?: Prisma.SortOrder
  hourRate?: Prisma.SortOrder
  description?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.WorkstationCountOrderByAggregateInput
  _avg?: Prisma.WorkstationAvgOrderByAggregateInput
  _max?: Prisma.WorkstationMaxOrderByAggregateInput
  _min?: Prisma.WorkstationMinOrderByAggregateInput
  _sum?: Prisma.WorkstationSumOrderByAggregateInput
}

export type WorkstationScalarWhereWithAggregatesInput = {
  AND?: Prisma.WorkstationScalarWhereWithAggregatesInput | Prisma.WorkstationScalarWhereWithAggregatesInput[]
  OR?: Prisma.WorkstationScalarWhereWithAggregatesInput[]
  NOT?: Prisma.WorkstationScalarWhereWithAggregatesInput | Prisma.WorkstationScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Workstation"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"Workstation"> | string
  workstationName?: Prisma.StringWithAggregatesFilter<"Workstation"> | string
  hourRate?: Prisma.FloatWithAggregatesFilter<"Workstation"> | number
  description?: Prisma.StringNullableWithAggregatesFilter<"Workstation"> | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Workstation"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Workstation"> | Date | string
}

export type WorkstationCreateInput = {
  id?: string
  tenantId: string
  workstationName: string
  hourRate?: number
  description?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  operations?: Prisma.OperationCreateNestedManyWithoutWorkstationInput
}

export type WorkstationUncheckedCreateInput = {
  id?: string
  tenantId: string
  workstationName: string
  hourRate?: number
  description?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  operations?: Prisma.OperationUncheckedCreateNestedManyWithoutWorkstationInput
}

export type WorkstationUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  workstationName?: Prisma.StringFieldUpdateOperationsInput | string
  hourRate?: Prisma.FloatFieldUpdateOperationsInput | number
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  operations?: Prisma.OperationUpdateManyWithoutWorkstationNestedInput
}

export type WorkstationUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  workstationName?: Prisma.StringFieldUpdateOperationsInput | string
  hourRate?: Prisma.FloatFieldUpdateOperationsInput | number
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  operations?: Prisma.OperationUncheckedUpdateManyWithoutWorkstationNestedInput
}

export type WorkstationCreateManyInput = {
  id?: string
  tenantId: string
  workstationName: string
  hourRate?: number
  description?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkstationUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  workstationName?: Prisma.StringFieldUpdateOperationsInput | string
  hourRate?: Prisma.FloatFieldUpdateOperationsInput | number
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkstationUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  workstationName?: Prisma.StringFieldUpdateOperationsInput | string
  hourRate?: Prisma.FloatFieldUpdateOperationsInput | number
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkstationCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  workstationName?: Prisma.SortOrder
  hourRate?: Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WorkstationAvgOrderByAggregateInput = {
  hourRate?: Prisma.SortOrder
}

export type WorkstationMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  workstationName?: Prisma.SortOrder
  hourRate?: Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WorkstationMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  workstationName?: Prisma.SortOrder
  hourRate?: Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type WorkstationSumOrderByAggregateInput = {
  hourRate?: Prisma.SortOrder
}

export type WorkstationScalarRelationFilter = {
  is?: Prisma.WorkstationWhereInput
  isNot?: Prisma.WorkstationWhereInput
}

export type WorkstationCreateNestedOneWithoutOperationsInput = {
  create?: Prisma.XOR<Prisma.WorkstationCreateWithoutOperationsInput, Prisma.WorkstationUncheckedCreateWithoutOperationsInput>
  connectOrCreate?: Prisma.WorkstationCreateOrConnectWithoutOperationsInput
  connect?: Prisma.WorkstationWhereUniqueInput
}

export type WorkstationUpdateOneRequiredWithoutOperationsNestedInput = {
  create?: Prisma.XOR<Prisma.WorkstationCreateWithoutOperationsInput, Prisma.WorkstationUncheckedCreateWithoutOperationsInput>
  connectOrCreate?: Prisma.WorkstationCreateOrConnectWithoutOperationsInput
  upsert?: Prisma.WorkstationUpsertWithoutOperationsInput
  connect?: Prisma.WorkstationWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.WorkstationUpdateToOneWithWhereWithoutOperationsInput, Prisma.WorkstationUpdateWithoutOperationsInput>, Prisma.WorkstationUncheckedUpdateWithoutOperationsInput>
}

export type WorkstationCreateWithoutOperationsInput = {
  id?: string
  tenantId: string
  workstationName: string
  hourRate?: number
  description?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkstationUncheckedCreateWithoutOperationsInput = {
  id?: string
  tenantId: string
  workstationName: string
  hourRate?: number
  description?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WorkstationCreateOrConnectWithoutOperationsInput = {
  where: Prisma.WorkstationWhereUniqueInput
  create: Prisma.XOR<Prisma.WorkstationCreateWithoutOperationsInput, Prisma.WorkstationUncheckedCreateWithoutOperationsInput>
}

export type WorkstationUpsertWithoutOperationsInput = {
  update: Prisma.XOR<Prisma.WorkstationUpdateWithoutOperationsInput, Prisma.WorkstationUncheckedUpdateWithoutOperationsInput>
  create: Prisma.XOR<Prisma.WorkstationCreateWithoutOperationsInput, Prisma.WorkstationUncheckedCreateWithoutOperationsInput>
  where?: Prisma.WorkstationWhereInput
}

export type WorkstationUpdateToOneWithWhereWithoutOperationsInput = {
  where?: Prisma.WorkstationWhereInput
  data: Prisma.XOR<Prisma.WorkstationUpdateWithoutOperationsInput, Prisma.WorkstationUncheckedUpdateWithoutOperationsInput>
}

export type WorkstationUpdateWithoutOperationsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  workstationName?: Prisma.StringFieldUpdateOperationsInput | string
  hourRate?: Prisma.FloatFieldUpdateOperationsInput | number
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type WorkstationUncheckedUpdateWithoutOperationsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  workstationName?: Prisma.StringFieldUpdateOperationsInput | string
  hourRate?: Prisma.FloatFieldUpdateOperationsInput | number
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}




export type WorkstationCountOutputType = {
  operations: number
}

export type WorkstationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  operations?: boolean | WorkstationCountOutputTypeCountOperationsArgs
}


export type WorkstationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationCountOutputTypeSelect<ExtArgs> | null
}


export type WorkstationCountOutputTypeCountOperationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.OperationWhereInput
}


export type WorkstationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  workstationName?: boolean
  hourRate?: boolean
  description?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  operations?: boolean | Prisma.Workstation$operationsArgs<ExtArgs>
  _count?: boolean | Prisma.WorkstationCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["workstation"]>

export type WorkstationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  workstationName?: boolean
  hourRate?: boolean
  description?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["workstation"]>

export type WorkstationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  workstationName?: boolean
  hourRate?: boolean
  description?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["workstation"]>

export type WorkstationSelectScalar = {
  id?: boolean
  tenantId?: boolean
  workstationName?: boolean
  hourRate?: boolean
  description?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type WorkstationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "workstationName" | "hourRate" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["workstation"]>
export type WorkstationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  operations?: boolean | Prisma.Workstation$operationsArgs<ExtArgs>
  _count?: boolean | Prisma.WorkstationCountOutputTypeDefaultArgs<ExtArgs>
}
export type WorkstationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type WorkstationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $WorkstationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Workstation"
  objects: {
    operations: Prisma.$OperationPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    workstationName: string
    hourRate: number
    description: string | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["workstation"]>
  composites: {}
}

export type WorkstationGetPayload<S extends boolean | null | undefined | WorkstationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkstationPayload, S>

export type WorkstationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<WorkstationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkstationCountAggregateInputType | true
  }

export interface WorkstationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workstation'], meta: { name: 'Workstation' } }
  
  findUnique<T extends WorkstationFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkstationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends WorkstationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkstationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends WorkstationFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkstationFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends WorkstationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkstationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends WorkstationFindManyArgs>(args?: Prisma.SelectSubset<T, WorkstationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends WorkstationCreateArgs>(args: Prisma.SelectSubset<T, WorkstationCreateArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends WorkstationCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkstationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends WorkstationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkstationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends WorkstationDeleteArgs>(args: Prisma.SelectSubset<T, WorkstationDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends WorkstationUpdateArgs>(args: Prisma.SelectSubset<T, WorkstationUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends WorkstationDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkstationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends WorkstationUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkstationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends WorkstationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkstationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends WorkstationUpsertArgs>(args: Prisma.SelectSubset<T, WorkstationUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends WorkstationCountArgs>(
    args?: Prisma.Subset<T, WorkstationCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], WorkstationCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends WorkstationAggregateArgs>(args: Prisma.Subset<T, WorkstationAggregateArgs>): Prisma.PrismaPromise<GetWorkstationAggregateType<T>>

  
  groupBy<
    T extends WorkstationGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: WorkstationGroupByArgs['orderBy'] }
      : { orderBy?: WorkstationGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, WorkstationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkstationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: WorkstationFieldRefs;
}


export interface Prisma__WorkstationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  operations<T extends Prisma.Workstation$operationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Workstation$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface WorkstationFieldRefs {
  readonly id: Prisma.FieldRef<"Workstation", 'String'>
  readonly tenantId: Prisma.FieldRef<"Workstation", 'String'>
  readonly workstationName: Prisma.FieldRef<"Workstation", 'String'>
  readonly hourRate: Prisma.FieldRef<"Workstation", 'Float'>
  readonly description: Prisma.FieldRef<"Workstation", 'String'>
  readonly createdAt: Prisma.FieldRef<"Workstation", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Workstation", 'DateTime'>
}
    



export type WorkstationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  where: Prisma.WorkstationWhereUniqueInput
}


export type WorkstationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  where: Prisma.WorkstationWhereUniqueInput
}


export type WorkstationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  where?: Prisma.WorkstationWhereInput
  
  orderBy?: Prisma.WorkstationOrderByWithRelationInput | Prisma.WorkstationOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkstationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WorkstationScalarFieldEnum | Prisma.WorkstationScalarFieldEnum[]
}


export type WorkstationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  where?: Prisma.WorkstationWhereInput
  
  orderBy?: Prisma.WorkstationOrderByWithRelationInput | Prisma.WorkstationOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkstationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WorkstationScalarFieldEnum | Prisma.WorkstationScalarFieldEnum[]
}


export type WorkstationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  where?: Prisma.WorkstationWhereInput
  
  orderBy?: Prisma.WorkstationOrderByWithRelationInput | Prisma.WorkstationOrderByWithRelationInput[]
  
  cursor?: Prisma.WorkstationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.WorkstationScalarFieldEnum | Prisma.WorkstationScalarFieldEnum[]
}


export type WorkstationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WorkstationCreateInput, Prisma.WorkstationUncheckedCreateInput>
}


export type WorkstationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.WorkstationCreateManyInput | Prisma.WorkstationCreateManyInput[]
  skipDuplicates?: boolean
}


export type WorkstationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  data: Prisma.WorkstationCreateManyInput | Prisma.WorkstationCreateManyInput[]
  skipDuplicates?: boolean
}


export type WorkstationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WorkstationUpdateInput, Prisma.WorkstationUncheckedUpdateInput>
  
  where: Prisma.WorkstationWhereUniqueInput
}


export type WorkstationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.WorkstationUpdateManyMutationInput, Prisma.WorkstationUncheckedUpdateManyInput>
  
  where?: Prisma.WorkstationWhereInput
  
  limit?: number
}


export type WorkstationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.WorkstationUpdateManyMutationInput, Prisma.WorkstationUncheckedUpdateManyInput>
  
  where?: Prisma.WorkstationWhereInput
  
  limit?: number
}


export type WorkstationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  where: Prisma.WorkstationWhereUniqueInput
  
  create: Prisma.XOR<Prisma.WorkstationCreateInput, Prisma.WorkstationUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.WorkstationUpdateInput, Prisma.WorkstationUncheckedUpdateInput>
}


export type WorkstationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
  
  where: Prisma.WorkstationWhereUniqueInput
}


export type WorkstationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.WorkstationWhereInput
  
  limit?: number
}


export type Workstation$operationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
  where?: Prisma.OperationWhereInput
  orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[]
  cursor?: Prisma.OperationWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[]
}


export type WorkstationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.WorkstationSelect<ExtArgs> | null
  
  omit?: Prisma.WorkstationOmit<ExtArgs> | null
  
  include?: Prisma.WorkstationInclude<ExtArgs> | null
}
