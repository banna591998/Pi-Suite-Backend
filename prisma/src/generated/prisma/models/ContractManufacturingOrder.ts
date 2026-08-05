





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type ContractManufacturingOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$ContractManufacturingOrderPayload>

export type AggregateContractManufacturingOrder = {
  _count: ContractManufacturingOrderCountAggregateOutputType | null
  _avg: ContractManufacturingOrderAvgAggregateOutputType | null
  _sum: ContractManufacturingOrderSumAggregateOutputType | null
  _min: ContractManufacturingOrderMinAggregateOutputType | null
  _max: ContractManufacturingOrderMaxAggregateOutputType | null
}

export type ContractManufacturingOrderAvgAggregateOutputType = {
  quantity: number | null
}

export type ContractManufacturingOrderSumAggregateOutputType = {
  quantity: number | null
}

export type ContractManufacturingOrderMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  factoryName: string | null
  productName: string | null
  quantity: number | null
  status: string | null
  dueDate: Date | null
  createdAt: Date | null
}

export type ContractManufacturingOrderMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  factoryName: string | null
  productName: string | null
  quantity: number | null
  status: string | null
  dueDate: Date | null
  createdAt: Date | null
}

export type ContractManufacturingOrderCountAggregateOutputType = {
  id: number
  tenantId: number
  factoryName: number
  productName: number
  quantity: number
  status: number
  dueDate: number
  createdAt: number
  _all: number
}


export type ContractManufacturingOrderAvgAggregateInputType = {
  quantity?: true
}

export type ContractManufacturingOrderSumAggregateInputType = {
  quantity?: true
}

export type ContractManufacturingOrderMinAggregateInputType = {
  id?: true
  tenantId?: true
  factoryName?: true
  productName?: true
  quantity?: true
  status?: true
  dueDate?: true
  createdAt?: true
}

export type ContractManufacturingOrderMaxAggregateInputType = {
  id?: true
  tenantId?: true
  factoryName?: true
  productName?: true
  quantity?: true
  status?: true
  dueDate?: true
  createdAt?: true
}

export type ContractManufacturingOrderCountAggregateInputType = {
  id?: true
  tenantId?: true
  factoryName?: true
  productName?: true
  quantity?: true
  status?: true
  dueDate?: true
  createdAt?: true
  _all?: true
}

export type ContractManufacturingOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.ContractManufacturingOrderWhereInput
  
  orderBy?: Prisma.ContractManufacturingOrderOrderByWithRelationInput | Prisma.ContractManufacturingOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.ContractManufacturingOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | ContractManufacturingOrderCountAggregateInputType
  
  _avg?: ContractManufacturingOrderAvgAggregateInputType
  
  _sum?: ContractManufacturingOrderSumAggregateInputType
  
  _min?: ContractManufacturingOrderMinAggregateInputType
  
  _max?: ContractManufacturingOrderMaxAggregateInputType
}

export type GetContractManufacturingOrderAggregateType<T extends ContractManufacturingOrderAggregateArgs> = {
      [P in keyof T & keyof AggregateContractManufacturingOrder]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateContractManufacturingOrder[P]>
    : Prisma.GetScalarType<T[P], AggregateContractManufacturingOrder[P]>
}




export type ContractManufacturingOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ContractManufacturingOrderWhereInput
  orderBy?: Prisma.ContractManufacturingOrderOrderByWithAggregationInput | Prisma.ContractManufacturingOrderOrderByWithAggregationInput[]
  by: Prisma.ContractManufacturingOrderScalarFieldEnum[] | Prisma.ContractManufacturingOrderScalarFieldEnum
  having?: Prisma.ContractManufacturingOrderScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ContractManufacturingOrderCountAggregateInputType | true
  _avg?: ContractManufacturingOrderAvgAggregateInputType
  _sum?: ContractManufacturingOrderSumAggregateInputType
  _min?: ContractManufacturingOrderMinAggregateInputType
  _max?: ContractManufacturingOrderMaxAggregateInputType
}

export type ContractManufacturingOrderGroupByOutputType = {
  id: string
  tenantId: string
  factoryName: string
  productName: string
  quantity: number
  status: string
  dueDate: Date
  createdAt: Date
  _count: ContractManufacturingOrderCountAggregateOutputType | null
  _avg: ContractManufacturingOrderAvgAggregateOutputType | null
  _sum: ContractManufacturingOrderSumAggregateOutputType | null
  _min: ContractManufacturingOrderMinAggregateOutputType | null
  _max: ContractManufacturingOrderMaxAggregateOutputType | null
}

export type GetContractManufacturingOrderGroupByPayload<T extends ContractManufacturingOrderGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ContractManufacturingOrderGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ContractManufacturingOrderGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ContractManufacturingOrderGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ContractManufacturingOrderGroupByOutputType[P]>
      }
    >
  >



export type ContractManufacturingOrderWhereInput = {
  AND?: Prisma.ContractManufacturingOrderWhereInput | Prisma.ContractManufacturingOrderWhereInput[]
  OR?: Prisma.ContractManufacturingOrderWhereInput[]
  NOT?: Prisma.ContractManufacturingOrderWhereInput | Prisma.ContractManufacturingOrderWhereInput[]
  id?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  tenantId?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  factoryName?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  productName?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  quantity?: Prisma.IntFilter<"ContractManufacturingOrder"> | number
  status?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  dueDate?: Prisma.DateTimeFilter<"ContractManufacturingOrder"> | Date | string
  createdAt?: Prisma.DateTimeFilter<"ContractManufacturingOrder"> | Date | string
}

export type ContractManufacturingOrderOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  factoryName?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  status?: Prisma.SortOrder
  dueDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ContractManufacturingOrderWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.ContractManufacturingOrderWhereInput | Prisma.ContractManufacturingOrderWhereInput[]
  OR?: Prisma.ContractManufacturingOrderWhereInput[]
  NOT?: Prisma.ContractManufacturingOrderWhereInput | Prisma.ContractManufacturingOrderWhereInput[]
  tenantId?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  factoryName?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  productName?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  quantity?: Prisma.IntFilter<"ContractManufacturingOrder"> | number
  status?: Prisma.StringFilter<"ContractManufacturingOrder"> | string
  dueDate?: Prisma.DateTimeFilter<"ContractManufacturingOrder"> | Date | string
  createdAt?: Prisma.DateTimeFilter<"ContractManufacturingOrder"> | Date | string
}, "id">

export type ContractManufacturingOrderOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  factoryName?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  status?: Prisma.SortOrder
  dueDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.ContractManufacturingOrderCountOrderByAggregateInput
  _avg?: Prisma.ContractManufacturingOrderAvgOrderByAggregateInput
  _max?: Prisma.ContractManufacturingOrderMaxOrderByAggregateInput
  _min?: Prisma.ContractManufacturingOrderMinOrderByAggregateInput
  _sum?: Prisma.ContractManufacturingOrderSumOrderByAggregateInput
}

export type ContractManufacturingOrderScalarWhereWithAggregatesInput = {
  AND?: Prisma.ContractManufacturingOrderScalarWhereWithAggregatesInput | Prisma.ContractManufacturingOrderScalarWhereWithAggregatesInput[]
  OR?: Prisma.ContractManufacturingOrderScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ContractManufacturingOrderScalarWhereWithAggregatesInput | Prisma.ContractManufacturingOrderScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"ContractManufacturingOrder"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"ContractManufacturingOrder"> | string
  factoryName?: Prisma.StringWithAggregatesFilter<"ContractManufacturingOrder"> | string
  productName?: Prisma.StringWithAggregatesFilter<"ContractManufacturingOrder"> | string
  quantity?: Prisma.IntWithAggregatesFilter<"ContractManufacturingOrder"> | number
  status?: Prisma.StringWithAggregatesFilter<"ContractManufacturingOrder"> | string
  dueDate?: Prisma.DateTimeWithAggregatesFilter<"ContractManufacturingOrder"> | Date | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContractManufacturingOrder"> | Date | string
}

export type ContractManufacturingOrderCreateInput = {
  id?: string
  tenantId: string
  factoryName: string
  productName: string
  quantity: number
  status: string
  dueDate: Date | string
  createdAt?: Date | string
}

export type ContractManufacturingOrderUncheckedCreateInput = {
  id?: string
  tenantId: string
  factoryName: string
  productName: string
  quantity: number
  status: string
  dueDate: Date | string
  createdAt?: Date | string
}

export type ContractManufacturingOrderUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  factoryName?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ContractManufacturingOrderUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  factoryName?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ContractManufacturingOrderCreateManyInput = {
  id?: string
  tenantId: string
  factoryName: string
  productName: string
  quantity: number
  status: string
  dueDate: Date | string
  createdAt?: Date | string
}

export type ContractManufacturingOrderUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  factoryName?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ContractManufacturingOrderUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  factoryName?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ContractManufacturingOrderCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  factoryName?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  status?: Prisma.SortOrder
  dueDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ContractManufacturingOrderAvgOrderByAggregateInput = {
  quantity?: Prisma.SortOrder
}

export type ContractManufacturingOrderMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  factoryName?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  status?: Prisma.SortOrder
  dueDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ContractManufacturingOrderMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  factoryName?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  status?: Prisma.SortOrder
  dueDate?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ContractManufacturingOrderSumOrderByAggregateInput = {
  quantity?: Prisma.SortOrder
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}



export type ContractManufacturingOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  factoryName?: boolean
  productName?: boolean
  quantity?: boolean
  status?: boolean
  dueDate?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["contractManufacturingOrder"]>

export type ContractManufacturingOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  factoryName?: boolean
  productName?: boolean
  quantity?: boolean
  status?: boolean
  dueDate?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["contractManufacturingOrder"]>

export type ContractManufacturingOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  factoryName?: boolean
  productName?: boolean
  quantity?: boolean
  status?: boolean
  dueDate?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["contractManufacturingOrder"]>

export type ContractManufacturingOrderSelectScalar = {
  id?: boolean
  tenantId?: boolean
  factoryName?: boolean
  productName?: boolean
  quantity?: boolean
  status?: boolean
  dueDate?: boolean
  createdAt?: boolean
}

export type ContractManufacturingOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "factoryName" | "productName" | "quantity" | "status" | "dueDate" | "createdAt", ExtArgs["result"]["contractManufacturingOrder"]>

export type $ContractManufacturingOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "ContractManufacturingOrder"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    factoryName: string
    productName: string
    quantity: number
    status: string
    dueDate: Date
    createdAt: Date
  }, ExtArgs["result"]["contractManufacturingOrder"]>
  composites: {}
}

export type ContractManufacturingOrderGetPayload<S extends boolean | null | undefined | ContractManufacturingOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload, S>

export type ContractManufacturingOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ContractManufacturingOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContractManufacturingOrderCountAggregateInputType | true
  }

export interface ContractManufacturingOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractManufacturingOrder'], meta: { name: 'ContractManufacturingOrder' } }
  
  findUnique<T extends ContractManufacturingOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends ContractManufacturingOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends ContractManufacturingOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, ContractManufacturingOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends ContractManufacturingOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContractManufacturingOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends ContractManufacturingOrderFindManyArgs>(args?: Prisma.SelectSubset<T, ContractManufacturingOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends ContractManufacturingOrderCreateArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderCreateArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends ContractManufacturingOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, ContractManufacturingOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends ContractManufacturingOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContractManufacturingOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends ContractManufacturingOrderDeleteArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends ContractManufacturingOrderUpdateArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends ContractManufacturingOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContractManufacturingOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends ContractManufacturingOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends ContractManufacturingOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends ContractManufacturingOrderUpsertArgs>(args: Prisma.SelectSubset<T, ContractManufacturingOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__ContractManufacturingOrderClient<runtime.Types.Result.GetResult<Prisma.$ContractManufacturingOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends ContractManufacturingOrderCountArgs>(
    args?: Prisma.Subset<T, ContractManufacturingOrderCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ContractManufacturingOrderCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends ContractManufacturingOrderAggregateArgs>(args: Prisma.Subset<T, ContractManufacturingOrderAggregateArgs>): Prisma.PrismaPromise<GetContractManufacturingOrderAggregateType<T>>

  
  groupBy<
    T extends ContractManufacturingOrderGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ContractManufacturingOrderGroupByArgs['orderBy'] }
      : { orderBy?: ContractManufacturingOrderGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, ContractManufacturingOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractManufacturingOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: ContractManufacturingOrderFieldRefs;
}


export interface Prisma__ContractManufacturingOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface ContractManufacturingOrderFieldRefs {
  readonly id: Prisma.FieldRef<"ContractManufacturingOrder", 'String'>
  readonly tenantId: Prisma.FieldRef<"ContractManufacturingOrder", 'String'>
  readonly factoryName: Prisma.FieldRef<"ContractManufacturingOrder", 'String'>
  readonly productName: Prisma.FieldRef<"ContractManufacturingOrder", 'String'>
  readonly quantity: Prisma.FieldRef<"ContractManufacturingOrder", 'Int'>
  readonly status: Prisma.FieldRef<"ContractManufacturingOrder", 'String'>
  readonly dueDate: Prisma.FieldRef<"ContractManufacturingOrder", 'DateTime'>
  readonly createdAt: Prisma.FieldRef<"ContractManufacturingOrder", 'DateTime'>
}
    



export type ContractManufacturingOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  where: Prisma.ContractManufacturingOrderWhereUniqueInput
}


export type ContractManufacturingOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  where: Prisma.ContractManufacturingOrderWhereUniqueInput
}


export type ContractManufacturingOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  where?: Prisma.ContractManufacturingOrderWhereInput
  
  orderBy?: Prisma.ContractManufacturingOrderOrderByWithRelationInput | Prisma.ContractManufacturingOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.ContractManufacturingOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.ContractManufacturingOrderScalarFieldEnum | Prisma.ContractManufacturingOrderScalarFieldEnum[]
}


export type ContractManufacturingOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  where?: Prisma.ContractManufacturingOrderWhereInput
  
  orderBy?: Prisma.ContractManufacturingOrderOrderByWithRelationInput | Prisma.ContractManufacturingOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.ContractManufacturingOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.ContractManufacturingOrderScalarFieldEnum | Prisma.ContractManufacturingOrderScalarFieldEnum[]
}


export type ContractManufacturingOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  where?: Prisma.ContractManufacturingOrderWhereInput
  
  orderBy?: Prisma.ContractManufacturingOrderOrderByWithRelationInput | Prisma.ContractManufacturingOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.ContractManufacturingOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.ContractManufacturingOrderScalarFieldEnum | Prisma.ContractManufacturingOrderScalarFieldEnum[]
}


export type ContractManufacturingOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ContractManufacturingOrderCreateInput, Prisma.ContractManufacturingOrderUncheckedCreateInput>
}


export type ContractManufacturingOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.ContractManufacturingOrderCreateManyInput | Prisma.ContractManufacturingOrderCreateManyInput[]
  skipDuplicates?: boolean
}


export type ContractManufacturingOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  data: Prisma.ContractManufacturingOrderCreateManyInput | Prisma.ContractManufacturingOrderCreateManyInput[]
  skipDuplicates?: boolean
}


export type ContractManufacturingOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ContractManufacturingOrderUpdateInput, Prisma.ContractManufacturingOrderUncheckedUpdateInput>
  
  where: Prisma.ContractManufacturingOrderWhereUniqueInput
}


export type ContractManufacturingOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.ContractManufacturingOrderUpdateManyMutationInput, Prisma.ContractManufacturingOrderUncheckedUpdateManyInput>
  
  where?: Prisma.ContractManufacturingOrderWhereInput
  
  limit?: number
}


export type ContractManufacturingOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ContractManufacturingOrderUpdateManyMutationInput, Prisma.ContractManufacturingOrderUncheckedUpdateManyInput>
  
  where?: Prisma.ContractManufacturingOrderWhereInput
  
  limit?: number
}


export type ContractManufacturingOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  where: Prisma.ContractManufacturingOrderWhereUniqueInput
  
  create: Prisma.XOR<Prisma.ContractManufacturingOrderCreateInput, Prisma.ContractManufacturingOrderUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.ContractManufacturingOrderUpdateInput, Prisma.ContractManufacturingOrderUncheckedUpdateInput>
}


export type ContractManufacturingOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
  
  where: Prisma.ContractManufacturingOrderWhereUniqueInput
}


export type ContractManufacturingOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.ContractManufacturingOrderWhereInput
  
  limit?: number
}


export type ContractManufacturingOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ContractManufacturingOrderSelect<ExtArgs> | null
  
  omit?: Prisma.ContractManufacturingOrderOmit<ExtArgs> | null
}
