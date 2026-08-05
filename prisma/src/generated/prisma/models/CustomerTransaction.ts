





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type CustomerTransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerTransactionPayload>

export type AggregateCustomerTransaction = {
  _count: CustomerTransactionCountAggregateOutputType | null
  _avg: CustomerTransactionAvgAggregateOutputType | null
  _sum: CustomerTransactionSumAggregateOutputType | null
  _min: CustomerTransactionMinAggregateOutputType | null
  _max: CustomerTransactionMaxAggregateOutputType | null
}

export type CustomerTransactionAvgAggregateOutputType = {
  amount: number | null
}

export type CustomerTransactionSumAggregateOutputType = {
  amount: number | null
}

export type CustomerTransactionMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  customerEmail: string | null
  amount: number | null
  status: string | null
  gatewayReference: string | null
  createdAt: Date | null
}

export type CustomerTransactionMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  customerEmail: string | null
  amount: number | null
  status: string | null
  gatewayReference: string | null
  createdAt: Date | null
}

export type CustomerTransactionCountAggregateOutputType = {
  id: number
  tenantId: number
  customerEmail: number
  amount: number
  status: number
  gatewayReference: number
  createdAt: number
  _all: number
}


export type CustomerTransactionAvgAggregateInputType = {
  amount?: true
}

export type CustomerTransactionSumAggregateInputType = {
  amount?: true
}

export type CustomerTransactionMinAggregateInputType = {
  id?: true
  tenantId?: true
  customerEmail?: true
  amount?: true
  status?: true
  gatewayReference?: true
  createdAt?: true
}

export type CustomerTransactionMaxAggregateInputType = {
  id?: true
  tenantId?: true
  customerEmail?: true
  amount?: true
  status?: true
  gatewayReference?: true
  createdAt?: true
}

export type CustomerTransactionCountAggregateInputType = {
  id?: true
  tenantId?: true
  customerEmail?: true
  amount?: true
  status?: true
  gatewayReference?: true
  createdAt?: true
  _all?: true
}

export type CustomerTransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.CustomerTransactionWhereInput
  
  orderBy?: Prisma.CustomerTransactionOrderByWithRelationInput | Prisma.CustomerTransactionOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomerTransactionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | CustomerTransactionCountAggregateInputType
  
  _avg?: CustomerTransactionAvgAggregateInputType
  
  _sum?: CustomerTransactionSumAggregateInputType
  
  _min?: CustomerTransactionMinAggregateInputType
  
  _max?: CustomerTransactionMaxAggregateInputType
}

export type GetCustomerTransactionAggregateType<T extends CustomerTransactionAggregateArgs> = {
      [P in keyof T & keyof AggregateCustomerTransaction]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateCustomerTransaction[P]>
    : Prisma.GetScalarType<T[P], AggregateCustomerTransaction[P]>
}




export type CustomerTransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.CustomerTransactionWhereInput
  orderBy?: Prisma.CustomerTransactionOrderByWithAggregationInput | Prisma.CustomerTransactionOrderByWithAggregationInput[]
  by: Prisma.CustomerTransactionScalarFieldEnum[] | Prisma.CustomerTransactionScalarFieldEnum
  having?: Prisma.CustomerTransactionScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: CustomerTransactionCountAggregateInputType | true
  _avg?: CustomerTransactionAvgAggregateInputType
  _sum?: CustomerTransactionSumAggregateInputType
  _min?: CustomerTransactionMinAggregateInputType
  _max?: CustomerTransactionMaxAggregateInputType
}

export type CustomerTransactionGroupByOutputType = {
  id: string
  tenantId: string
  customerEmail: string
  amount: number
  status: string
  gatewayReference: string
  createdAt: Date
  _count: CustomerTransactionCountAggregateOutputType | null
  _avg: CustomerTransactionAvgAggregateOutputType | null
  _sum: CustomerTransactionSumAggregateOutputType | null
  _min: CustomerTransactionMinAggregateOutputType | null
  _max: CustomerTransactionMaxAggregateOutputType | null
}

export type GetCustomerTransactionGroupByPayload<T extends CustomerTransactionGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<CustomerTransactionGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof CustomerTransactionGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], CustomerTransactionGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], CustomerTransactionGroupByOutputType[P]>
      }
    >
  >



export type CustomerTransactionWhereInput = {
  AND?: Prisma.CustomerTransactionWhereInput | Prisma.CustomerTransactionWhereInput[]
  OR?: Prisma.CustomerTransactionWhereInput[]
  NOT?: Prisma.CustomerTransactionWhereInput | Prisma.CustomerTransactionWhereInput[]
  id?: Prisma.StringFilter<"CustomerTransaction"> | string
  tenantId?: Prisma.StringFilter<"CustomerTransaction"> | string
  customerEmail?: Prisma.StringFilter<"CustomerTransaction"> | string
  amount?: Prisma.FloatFilter<"CustomerTransaction"> | number
  status?: Prisma.StringFilter<"CustomerTransaction"> | string
  gatewayReference?: Prisma.StringFilter<"CustomerTransaction"> | string
  createdAt?: Prisma.DateTimeFilter<"CustomerTransaction"> | Date | string
}

export type CustomerTransactionOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  customerEmail?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  gatewayReference?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type CustomerTransactionWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.CustomerTransactionWhereInput | Prisma.CustomerTransactionWhereInput[]
  OR?: Prisma.CustomerTransactionWhereInput[]
  NOT?: Prisma.CustomerTransactionWhereInput | Prisma.CustomerTransactionWhereInput[]
  tenantId?: Prisma.StringFilter<"CustomerTransaction"> | string
  customerEmail?: Prisma.StringFilter<"CustomerTransaction"> | string
  amount?: Prisma.FloatFilter<"CustomerTransaction"> | number
  status?: Prisma.StringFilter<"CustomerTransaction"> | string
  gatewayReference?: Prisma.StringFilter<"CustomerTransaction"> | string
  createdAt?: Prisma.DateTimeFilter<"CustomerTransaction"> | Date | string
}, "id">

export type CustomerTransactionOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  customerEmail?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  gatewayReference?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.CustomerTransactionCountOrderByAggregateInput
  _avg?: Prisma.CustomerTransactionAvgOrderByAggregateInput
  _max?: Prisma.CustomerTransactionMaxOrderByAggregateInput
  _min?: Prisma.CustomerTransactionMinOrderByAggregateInput
  _sum?: Prisma.CustomerTransactionSumOrderByAggregateInput
}

export type CustomerTransactionScalarWhereWithAggregatesInput = {
  AND?: Prisma.CustomerTransactionScalarWhereWithAggregatesInput | Prisma.CustomerTransactionScalarWhereWithAggregatesInput[]
  OR?: Prisma.CustomerTransactionScalarWhereWithAggregatesInput[]
  NOT?: Prisma.CustomerTransactionScalarWhereWithAggregatesInput | Prisma.CustomerTransactionScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"CustomerTransaction"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"CustomerTransaction"> | string
  customerEmail?: Prisma.StringWithAggregatesFilter<"CustomerTransaction"> | string
  amount?: Prisma.FloatWithAggregatesFilter<"CustomerTransaction"> | number
  status?: Prisma.StringWithAggregatesFilter<"CustomerTransaction"> | string
  gatewayReference?: Prisma.StringWithAggregatesFilter<"CustomerTransaction"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerTransaction"> | Date | string
}

export type CustomerTransactionCreateInput = {
  id?: string
  tenantId: string
  customerEmail: string
  amount: number
  status: string
  gatewayReference: string
  createdAt?: Date | string
}

export type CustomerTransactionUncheckedCreateInput = {
  id?: string
  tenantId: string
  customerEmail: string
  amount: number
  status: string
  gatewayReference: string
  createdAt?: Date | string
}

export type CustomerTransactionUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  customerEmail?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  gatewayReference?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomerTransactionUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  customerEmail?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  gatewayReference?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomerTransactionCreateManyInput = {
  id?: string
  tenantId: string
  customerEmail: string
  amount: number
  status: string
  gatewayReference: string
  createdAt?: Date | string
}

export type CustomerTransactionUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  customerEmail?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  gatewayReference?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomerTransactionUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  customerEmail?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.StringFieldUpdateOperationsInput | string
  gatewayReference?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CustomerTransactionCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  customerEmail?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  gatewayReference?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type CustomerTransactionAvgOrderByAggregateInput = {
  amount?: Prisma.SortOrder
}

export type CustomerTransactionMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  customerEmail?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  gatewayReference?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type CustomerTransactionMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  customerEmail?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  gatewayReference?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type CustomerTransactionSumOrderByAggregateInput = {
  amount?: Prisma.SortOrder
}



export type CustomerTransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  customerEmail?: boolean
  amount?: boolean
  status?: boolean
  gatewayReference?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["customerTransaction"]>

export type CustomerTransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  customerEmail?: boolean
  amount?: boolean
  status?: boolean
  gatewayReference?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["customerTransaction"]>

export type CustomerTransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  customerEmail?: boolean
  amount?: boolean
  status?: boolean
  gatewayReference?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["customerTransaction"]>

export type CustomerTransactionSelectScalar = {
  id?: boolean
  tenantId?: boolean
  customerEmail?: boolean
  amount?: boolean
  status?: boolean
  gatewayReference?: boolean
  createdAt?: boolean
}

export type CustomerTransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "customerEmail" | "amount" | "status" | "gatewayReference" | "createdAt", ExtArgs["result"]["customerTransaction"]>

export type $CustomerTransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "CustomerTransaction"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    customerEmail: string
    amount: number
    status: string
    gatewayReference: string
    createdAt: Date
  }, ExtArgs["result"]["customerTransaction"]>
  composites: {}
}

export type CustomerTransactionGetPayload<S extends boolean | null | undefined | CustomerTransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload, S>

export type CustomerTransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<CustomerTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerTransactionCountAggregateInputType | true
  }

export interface CustomerTransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerTransaction'], meta: { name: 'CustomerTransaction' } }
  
  findUnique<T extends CustomerTransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerTransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends CustomerTransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends CustomerTransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerTransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends CustomerTransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends CustomerTransactionFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends CustomerTransactionCreateArgs>(args: Prisma.SelectSubset<T, CustomerTransactionCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends CustomerTransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends CustomerTransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends CustomerTransactionDeleteArgs>(args: Prisma.SelectSubset<T, CustomerTransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends CustomerTransactionUpdateArgs>(args: Prisma.SelectSubset<T, CustomerTransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends CustomerTransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends CustomerTransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends CustomerTransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends CustomerTransactionUpsertArgs>(args: Prisma.SelectSubset<T, CustomerTransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerTransactionClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends CustomerTransactionCountArgs>(
    args?: Prisma.Subset<T, CustomerTransactionCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], CustomerTransactionCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends CustomerTransactionAggregateArgs>(args: Prisma.Subset<T, CustomerTransactionAggregateArgs>): Prisma.PrismaPromise<GetCustomerTransactionAggregateType<T>>

  
  groupBy<
    T extends CustomerTransactionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: CustomerTransactionGroupByArgs['orderBy'] }
      : { orderBy?: CustomerTransactionGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, CustomerTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: CustomerTransactionFieldRefs;
}


export interface Prisma__CustomerTransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface CustomerTransactionFieldRefs {
  readonly id: Prisma.FieldRef<"CustomerTransaction", 'String'>
  readonly tenantId: Prisma.FieldRef<"CustomerTransaction", 'String'>
  readonly customerEmail: Prisma.FieldRef<"CustomerTransaction", 'String'>
  readonly amount: Prisma.FieldRef<"CustomerTransaction", 'Float'>
  readonly status: Prisma.FieldRef<"CustomerTransaction", 'String'>
  readonly gatewayReference: Prisma.FieldRef<"CustomerTransaction", 'String'>
  readonly createdAt: Prisma.FieldRef<"CustomerTransaction", 'DateTime'>
}
    



export type CustomerTransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  where: Prisma.CustomerTransactionWhereUniqueInput
}


export type CustomerTransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  where: Prisma.CustomerTransactionWhereUniqueInput
}


export type CustomerTransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  where?: Prisma.CustomerTransactionWhereInput
  
  orderBy?: Prisma.CustomerTransactionOrderByWithRelationInput | Prisma.CustomerTransactionOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomerTransactionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.CustomerTransactionScalarFieldEnum | Prisma.CustomerTransactionScalarFieldEnum[]
}


export type CustomerTransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  where?: Prisma.CustomerTransactionWhereInput
  
  orderBy?: Prisma.CustomerTransactionOrderByWithRelationInput | Prisma.CustomerTransactionOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomerTransactionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.CustomerTransactionScalarFieldEnum | Prisma.CustomerTransactionScalarFieldEnum[]
}


export type CustomerTransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  where?: Prisma.CustomerTransactionWhereInput
  
  orderBy?: Prisma.CustomerTransactionOrderByWithRelationInput | Prisma.CustomerTransactionOrderByWithRelationInput[]
  
  cursor?: Prisma.CustomerTransactionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.CustomerTransactionScalarFieldEnum | Prisma.CustomerTransactionScalarFieldEnum[]
}


export type CustomerTransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.CustomerTransactionCreateInput, Prisma.CustomerTransactionUncheckedCreateInput>
}


export type CustomerTransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.CustomerTransactionCreateManyInput | Prisma.CustomerTransactionCreateManyInput[]
  skipDuplicates?: boolean
}


export type CustomerTransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  data: Prisma.CustomerTransactionCreateManyInput | Prisma.CustomerTransactionCreateManyInput[]
  skipDuplicates?: boolean
}


export type CustomerTransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.CustomerTransactionUpdateInput, Prisma.CustomerTransactionUncheckedUpdateInput>
  
  where: Prisma.CustomerTransactionWhereUniqueInput
}


export type CustomerTransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.CustomerTransactionUpdateManyMutationInput, Prisma.CustomerTransactionUncheckedUpdateManyInput>
  
  where?: Prisma.CustomerTransactionWhereInput
  
  limit?: number
}


export type CustomerTransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.CustomerTransactionUpdateManyMutationInput, Prisma.CustomerTransactionUncheckedUpdateManyInput>
  
  where?: Prisma.CustomerTransactionWhereInput
  
  limit?: number
}


export type CustomerTransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  where: Prisma.CustomerTransactionWhereUniqueInput
  
  create: Prisma.XOR<Prisma.CustomerTransactionCreateInput, Prisma.CustomerTransactionUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.CustomerTransactionUpdateInput, Prisma.CustomerTransactionUncheckedUpdateInput>
}


export type CustomerTransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
  
  where: Prisma.CustomerTransactionWhereUniqueInput
}


export type CustomerTransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.CustomerTransactionWhereInput
  
  limit?: number
}


export type CustomerTransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.CustomerTransactionSelect<ExtArgs> | null
  
  omit?: Prisma.CustomerTransactionOmit<ExtArgs> | null
}
