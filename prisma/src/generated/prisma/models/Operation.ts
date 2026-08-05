





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type OperationModel = runtime.Types.Result.DefaultSelection<Prisma.$OperationPayload>

export type AggregateOperation = {
  _count: OperationCountAggregateOutputType | null
  _avg: OperationAvgAggregateOutputType | null
  _sum: OperationSumAggregateOutputType | null
  _min: OperationMinAggregateOutputType | null
  _max: OperationMaxAggregateOutputType | null
}

export type OperationAvgAggregateOutputType = {
  timeInMinutes: number | null
}

export type OperationSumAggregateOutputType = {
  timeInMinutes: number | null
}

export type OperationMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  operationName: string | null
  workstationId: string | null
  timeInMinutes: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type OperationMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  operationName: string | null
  workstationId: string | null
  timeInMinutes: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type OperationCountAggregateOutputType = {
  id: number
  tenantId: number
  operationName: number
  workstationId: number
  timeInMinutes: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type OperationAvgAggregateInputType = {
  timeInMinutes?: true
}

export type OperationSumAggregateInputType = {
  timeInMinutes?: true
}

export type OperationMinAggregateInputType = {
  id?: true
  tenantId?: true
  operationName?: true
  workstationId?: true
  timeInMinutes?: true
  createdAt?: true
  updatedAt?: true
}

export type OperationMaxAggregateInputType = {
  id?: true
  tenantId?: true
  operationName?: true
  workstationId?: true
  timeInMinutes?: true
  createdAt?: true
  updatedAt?: true
}

export type OperationCountAggregateInputType = {
  id?: true
  tenantId?: true
  operationName?: true
  workstationId?: true
  timeInMinutes?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type OperationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.OperationWhereInput
  
  orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[]
  
  cursor?: Prisma.OperationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | OperationCountAggregateInputType
  
  _avg?: OperationAvgAggregateInputType
  
  _sum?: OperationSumAggregateInputType
  
  _min?: OperationMinAggregateInputType
  
  _max?: OperationMaxAggregateInputType
}

export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
      [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateOperation[P]>
    : Prisma.GetScalarType<T[P], AggregateOperation[P]>
}




export type OperationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.OperationWhereInput
  orderBy?: Prisma.OperationOrderByWithAggregationInput | Prisma.OperationOrderByWithAggregationInput[]
  by: Prisma.OperationScalarFieldEnum[] | Prisma.OperationScalarFieldEnum
  having?: Prisma.OperationScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: OperationCountAggregateInputType | true
  _avg?: OperationAvgAggregateInputType
  _sum?: OperationSumAggregateInputType
  _min?: OperationMinAggregateInputType
  _max?: OperationMaxAggregateInputType
}

export type OperationGroupByOutputType = {
  id: string
  tenantId: string
  operationName: string
  workstationId: string
  timeInMinutes: number
  createdAt: Date
  updatedAt: Date
  _count: OperationCountAggregateOutputType | null
  _avg: OperationAvgAggregateOutputType | null
  _sum: OperationSumAggregateOutputType | null
  _min: OperationMinAggregateOutputType | null
  _max: OperationMaxAggregateOutputType | null
}

export type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<OperationGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], OperationGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], OperationGroupByOutputType[P]>
      }
    >
  >



export type OperationWhereInput = {
  AND?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[]
  OR?: Prisma.OperationWhereInput[]
  NOT?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[]
  id?: Prisma.StringFilter<"Operation"> | string
  tenantId?: Prisma.StringFilter<"Operation"> | string
  operationName?: Prisma.StringFilter<"Operation"> | string
  workstationId?: Prisma.StringFilter<"Operation"> | string
  timeInMinutes?: Prisma.IntFilter<"Operation"> | number
  createdAt?: Prisma.DateTimeFilter<"Operation"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Operation"> | Date | string
  workstation?: Prisma.XOR<Prisma.WorkstationScalarRelationFilter, Prisma.WorkstationWhereInput>
}

export type OperationOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  operationName?: Prisma.SortOrder
  workstationId?: Prisma.SortOrder
  timeInMinutes?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  workstation?: Prisma.WorkstationOrderByWithRelationInput
}

export type OperationWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[]
  OR?: Prisma.OperationWhereInput[]
  NOT?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[]
  tenantId?: Prisma.StringFilter<"Operation"> | string
  operationName?: Prisma.StringFilter<"Operation"> | string
  workstationId?: Prisma.StringFilter<"Operation"> | string
  timeInMinutes?: Prisma.IntFilter<"Operation"> | number
  createdAt?: Prisma.DateTimeFilter<"Operation"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Operation"> | Date | string
  workstation?: Prisma.XOR<Prisma.WorkstationScalarRelationFilter, Prisma.WorkstationWhereInput>
}, "id">

export type OperationOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  operationName?: Prisma.SortOrder
  workstationId?: Prisma.SortOrder
  timeInMinutes?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.OperationCountOrderByAggregateInput
  _avg?: Prisma.OperationAvgOrderByAggregateInput
  _max?: Prisma.OperationMaxOrderByAggregateInput
  _min?: Prisma.OperationMinOrderByAggregateInput
  _sum?: Prisma.OperationSumOrderByAggregateInput
}

export type OperationScalarWhereWithAggregatesInput = {
  AND?: Prisma.OperationScalarWhereWithAggregatesInput | Prisma.OperationScalarWhereWithAggregatesInput[]
  OR?: Prisma.OperationScalarWhereWithAggregatesInput[]
  NOT?: Prisma.OperationScalarWhereWithAggregatesInput | Prisma.OperationScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Operation"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"Operation"> | string
  operationName?: Prisma.StringWithAggregatesFilter<"Operation"> | string
  workstationId?: Prisma.StringWithAggregatesFilter<"Operation"> | string
  timeInMinutes?: Prisma.IntWithAggregatesFilter<"Operation"> | number
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Operation"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Operation"> | Date | string
}

export type OperationCreateInput = {
  id?: string
  tenantId: string
  operationName: string
  timeInMinutes?: number
  createdAt?: Date | string
  updatedAt?: Date | string
  workstation: Prisma.WorkstationCreateNestedOneWithoutOperationsInput
}

export type OperationUncheckedCreateInput = {
  id?: string
  tenantId: string
  operationName: string
  workstationId: string
  timeInMinutes?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type OperationUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  operationName?: Prisma.StringFieldUpdateOperationsInput | string
  timeInMinutes?: Prisma.IntFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  workstation?: Prisma.WorkstationUpdateOneRequiredWithoutOperationsNestedInput
}

export type OperationUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  operationName?: Prisma.StringFieldUpdateOperationsInput | string
  workstationId?: Prisma.StringFieldUpdateOperationsInput | string
  timeInMinutes?: Prisma.IntFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OperationCreateManyInput = {
  id?: string
  tenantId: string
  operationName: string
  workstationId: string
  timeInMinutes?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type OperationUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  operationName?: Prisma.StringFieldUpdateOperationsInput | string
  timeInMinutes?: Prisma.IntFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OperationUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  operationName?: Prisma.StringFieldUpdateOperationsInput | string
  workstationId?: Prisma.StringFieldUpdateOperationsInput | string
  timeInMinutes?: Prisma.IntFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OperationListRelationFilter = {
  every?: Prisma.OperationWhereInput
  some?: Prisma.OperationWhereInput
  none?: Prisma.OperationWhereInput
}

export type OperationOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type OperationCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  operationName?: Prisma.SortOrder
  workstationId?: Prisma.SortOrder
  timeInMinutes?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type OperationAvgOrderByAggregateInput = {
  timeInMinutes?: Prisma.SortOrder
}

export type OperationMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  operationName?: Prisma.SortOrder
  workstationId?: Prisma.SortOrder
  timeInMinutes?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type OperationMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  operationName?: Prisma.SortOrder
  workstationId?: Prisma.SortOrder
  timeInMinutes?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type OperationSumOrderByAggregateInput = {
  timeInMinutes?: Prisma.SortOrder
}

export type OperationCreateNestedManyWithoutWorkstationInput = {
  create?: Prisma.XOR<Prisma.OperationCreateWithoutWorkstationInput, Prisma.OperationUncheckedCreateWithoutWorkstationInput> | Prisma.OperationCreateWithoutWorkstationInput[] | Prisma.OperationUncheckedCreateWithoutWorkstationInput[]
  connectOrCreate?: Prisma.OperationCreateOrConnectWithoutWorkstationInput | Prisma.OperationCreateOrConnectWithoutWorkstationInput[]
  createMany?: Prisma.OperationCreateManyWorkstationInputEnvelope
  connect?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
}

export type OperationUncheckedCreateNestedManyWithoutWorkstationInput = {
  create?: Prisma.XOR<Prisma.OperationCreateWithoutWorkstationInput, Prisma.OperationUncheckedCreateWithoutWorkstationInput> | Prisma.OperationCreateWithoutWorkstationInput[] | Prisma.OperationUncheckedCreateWithoutWorkstationInput[]
  connectOrCreate?: Prisma.OperationCreateOrConnectWithoutWorkstationInput | Prisma.OperationCreateOrConnectWithoutWorkstationInput[]
  createMany?: Prisma.OperationCreateManyWorkstationInputEnvelope
  connect?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
}

export type OperationUpdateManyWithoutWorkstationNestedInput = {
  create?: Prisma.XOR<Prisma.OperationCreateWithoutWorkstationInput, Prisma.OperationUncheckedCreateWithoutWorkstationInput> | Prisma.OperationCreateWithoutWorkstationInput[] | Prisma.OperationUncheckedCreateWithoutWorkstationInput[]
  connectOrCreate?: Prisma.OperationCreateOrConnectWithoutWorkstationInput | Prisma.OperationCreateOrConnectWithoutWorkstationInput[]
  upsert?: Prisma.OperationUpsertWithWhereUniqueWithoutWorkstationInput | Prisma.OperationUpsertWithWhereUniqueWithoutWorkstationInput[]
  createMany?: Prisma.OperationCreateManyWorkstationInputEnvelope
  set?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  disconnect?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  delete?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  connect?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  update?: Prisma.OperationUpdateWithWhereUniqueWithoutWorkstationInput | Prisma.OperationUpdateWithWhereUniqueWithoutWorkstationInput[]
  updateMany?: Prisma.OperationUpdateManyWithWhereWithoutWorkstationInput | Prisma.OperationUpdateManyWithWhereWithoutWorkstationInput[]
  deleteMany?: Prisma.OperationScalarWhereInput | Prisma.OperationScalarWhereInput[]
}

export type OperationUncheckedUpdateManyWithoutWorkstationNestedInput = {
  create?: Prisma.XOR<Prisma.OperationCreateWithoutWorkstationInput, Prisma.OperationUncheckedCreateWithoutWorkstationInput> | Prisma.OperationCreateWithoutWorkstationInput[] | Prisma.OperationUncheckedCreateWithoutWorkstationInput[]
  connectOrCreate?: Prisma.OperationCreateOrConnectWithoutWorkstationInput | Prisma.OperationCreateOrConnectWithoutWorkstationInput[]
  upsert?: Prisma.OperationUpsertWithWhereUniqueWithoutWorkstationInput | Prisma.OperationUpsertWithWhereUniqueWithoutWorkstationInput[]
  createMany?: Prisma.OperationCreateManyWorkstationInputEnvelope
  set?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  disconnect?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  delete?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  connect?: Prisma.OperationWhereUniqueInput | Prisma.OperationWhereUniqueInput[]
  update?: Prisma.OperationUpdateWithWhereUniqueWithoutWorkstationInput | Prisma.OperationUpdateWithWhereUniqueWithoutWorkstationInput[]
  updateMany?: Prisma.OperationUpdateManyWithWhereWithoutWorkstationInput | Prisma.OperationUpdateManyWithWhereWithoutWorkstationInput[]
  deleteMany?: Prisma.OperationScalarWhereInput | Prisma.OperationScalarWhereInput[]
}

export type OperationCreateWithoutWorkstationInput = {
  id?: string
  tenantId: string
  operationName: string
  timeInMinutes?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type OperationUncheckedCreateWithoutWorkstationInput = {
  id?: string
  tenantId: string
  operationName: string
  timeInMinutes?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type OperationCreateOrConnectWithoutWorkstationInput = {
  where: Prisma.OperationWhereUniqueInput
  create: Prisma.XOR<Prisma.OperationCreateWithoutWorkstationInput, Prisma.OperationUncheckedCreateWithoutWorkstationInput>
}

export type OperationCreateManyWorkstationInputEnvelope = {
  data: Prisma.OperationCreateManyWorkstationInput | Prisma.OperationCreateManyWorkstationInput[]
  skipDuplicates?: boolean
}

export type OperationUpsertWithWhereUniqueWithoutWorkstationInput = {
  where: Prisma.OperationWhereUniqueInput
  update: Prisma.XOR<Prisma.OperationUpdateWithoutWorkstationInput, Prisma.OperationUncheckedUpdateWithoutWorkstationInput>
  create: Prisma.XOR<Prisma.OperationCreateWithoutWorkstationInput, Prisma.OperationUncheckedCreateWithoutWorkstationInput>
}

export type OperationUpdateWithWhereUniqueWithoutWorkstationInput = {
  where: Prisma.OperationWhereUniqueInput
  data: Prisma.XOR<Prisma.OperationUpdateWithoutWorkstationInput, Prisma.OperationUncheckedUpdateWithoutWorkstationInput>
}

export type OperationUpdateManyWithWhereWithoutWorkstationInput = {
  where: Prisma.OperationScalarWhereInput
  data: Prisma.XOR<Prisma.OperationUpdateManyMutationInput, Prisma.OperationUncheckedUpdateManyWithoutWorkstationInput>
}

export type OperationScalarWhereInput = {
  AND?: Prisma.OperationScalarWhereInput | Prisma.OperationScalarWhereInput[]
  OR?: Prisma.OperationScalarWhereInput[]
  NOT?: Prisma.OperationScalarWhereInput | Prisma.OperationScalarWhereInput[]
  id?: Prisma.StringFilter<"Operation"> | string
  tenantId?: Prisma.StringFilter<"Operation"> | string
  operationName?: Prisma.StringFilter<"Operation"> | string
  workstationId?: Prisma.StringFilter<"Operation"> | string
  timeInMinutes?: Prisma.IntFilter<"Operation"> | number
  createdAt?: Prisma.DateTimeFilter<"Operation"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Operation"> | Date | string
}

export type OperationCreateManyWorkstationInput = {
  id?: string
  tenantId: string
  operationName: string
  timeInMinutes?: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type OperationUpdateWithoutWorkstationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  operationName?: Prisma.StringFieldUpdateOperationsInput | string
  timeInMinutes?: Prisma.IntFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OperationUncheckedUpdateWithoutWorkstationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  operationName?: Prisma.StringFieldUpdateOperationsInput | string
  timeInMinutes?: Prisma.IntFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type OperationUncheckedUpdateManyWithoutWorkstationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  operationName?: Prisma.StringFieldUpdateOperationsInput | string
  timeInMinutes?: Prisma.IntFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type OperationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  operationName?: boolean
  workstationId?: boolean
  timeInMinutes?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  workstation?: boolean | Prisma.WorkstationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["operation"]>

export type OperationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  operationName?: boolean
  workstationId?: boolean
  timeInMinutes?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  workstation?: boolean | Prisma.WorkstationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["operation"]>

export type OperationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  operationName?: boolean
  workstationId?: boolean
  timeInMinutes?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  workstation?: boolean | Prisma.WorkstationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["operation"]>

export type OperationSelectScalar = {
  id?: boolean
  tenantId?: boolean
  operationName?: boolean
  workstationId?: boolean
  timeInMinutes?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type OperationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "operationName" | "workstationId" | "timeInMinutes" | "createdAt" | "updatedAt", ExtArgs["result"]["operation"]>
export type OperationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  workstation?: boolean | Prisma.WorkstationDefaultArgs<ExtArgs>
}
export type OperationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  workstation?: boolean | Prisma.WorkstationDefaultArgs<ExtArgs>
}
export type OperationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  workstation?: boolean | Prisma.WorkstationDefaultArgs<ExtArgs>
}

export type $OperationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Operation"
  objects: {
    workstation: Prisma.$WorkstationPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    operationName: string
    workstationId: string
    timeInMinutes: number
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["operation"]>
  composites: {}
}

export type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OperationPayload, S>

export type OperationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OperationCountAggregateInputType | true
  }

export interface OperationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
  
  findUnique<T extends OperationFindUniqueArgs>(args: Prisma.SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends OperationFindFirstArgs>(args?: Prisma.SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends OperationFindManyArgs>(args?: Prisma.SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends OperationCreateArgs>(args: Prisma.SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends OperationCreateManyArgs>(args?: Prisma.SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends OperationDeleteArgs>(args: Prisma.SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends OperationUpdateArgs>(args: Prisma.SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends OperationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends OperationUpdateManyArgs>(args: Prisma.SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends OperationUpsertArgs>(args: Prisma.SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends OperationCountArgs>(
    args?: Prisma.Subset<T, OperationCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], OperationCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends OperationAggregateArgs>(args: Prisma.Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

  
  groupBy<
    T extends OperationGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: OperationGroupByArgs['orderBy'] }
      : { orderBy?: OperationGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: OperationFieldRefs;
}


export interface Prisma__OperationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  workstation<T extends Prisma.WorkstationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkstationDefaultArgs<ExtArgs>>): Prisma.Prisma__WorkstationClient<runtime.Types.Result.GetResult<Prisma.$WorkstationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface OperationFieldRefs {
  readonly id: Prisma.FieldRef<"Operation", 'String'>
  readonly tenantId: Prisma.FieldRef<"Operation", 'String'>
  readonly operationName: Prisma.FieldRef<"Operation", 'String'>
  readonly workstationId: Prisma.FieldRef<"Operation", 'String'>
  readonly timeInMinutes: Prisma.FieldRef<"Operation", 'Int'>
  readonly createdAt: Prisma.FieldRef<"Operation", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Operation", 'DateTime'>
}
    



export type OperationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
  
  where: Prisma.OperationWhereUniqueInput
}


export type OperationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
  
  where: Prisma.OperationWhereUniqueInput
}


export type OperationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type OperationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type OperationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type OperationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OperationCreateInput, Prisma.OperationUncheckedCreateInput>
}


export type OperationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.OperationCreateManyInput | Prisma.OperationCreateManyInput[]
  skipDuplicates?: boolean
}


export type OperationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  data: Prisma.OperationCreateManyInput | Prisma.OperationCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.OperationIncludeCreateManyAndReturn<ExtArgs> | null
}


export type OperationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OperationUpdateInput, Prisma.OperationUncheckedUpdateInput>
  
  where: Prisma.OperationWhereUniqueInput
}


export type OperationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.OperationUpdateManyMutationInput, Prisma.OperationUncheckedUpdateManyInput>
  
  where?: Prisma.OperationWhereInput
  
  limit?: number
}


export type OperationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OperationUpdateManyMutationInput, Prisma.OperationUncheckedUpdateManyInput>
  
  where?: Prisma.OperationWhereInput
  
  limit?: number
  
  include?: Prisma.OperationIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type OperationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
  
  where: Prisma.OperationWhereUniqueInput
  
  create: Prisma.XOR<Prisma.OperationCreateInput, Prisma.OperationUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.OperationUpdateInput, Prisma.OperationUncheckedUpdateInput>
}


export type OperationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
  
  where: Prisma.OperationWhereUniqueInput
}


export type OperationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.OperationWhereInput
  
  limit?: number
}


export type OperationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OperationSelect<ExtArgs> | null
  
  omit?: Prisma.OperationOmit<ExtArgs> | null
  
  include?: Prisma.OperationInclude<ExtArgs> | null
}
