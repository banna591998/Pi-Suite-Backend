





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type PaymentLogModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentLogPayload>

export type AggregatePaymentLog = {
  _count: PaymentLogCountAggregateOutputType | null
  _avg: PaymentLogAvgAggregateOutputType | null
  _sum: PaymentLogSumAggregateOutputType | null
  _min: PaymentLogMinAggregateOutputType | null
  _max: PaymentLogMaxAggregateOutputType | null
}

export type PaymentLogAvgAggregateOutputType = {
  amount: number | null
}

export type PaymentLogSumAggregateOutputType = {
  amount: number | null
}

export type PaymentLogMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  stripeSessionId: string | null
  amount: number | null
  currency: string | null
  status: string | null
  invoiceUrl: string | null
  createdAt: Date | null
}

export type PaymentLogMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  stripeSessionId: string | null
  amount: number | null
  currency: string | null
  status: string | null
  invoiceUrl: string | null
  createdAt: Date | null
}

export type PaymentLogCountAggregateOutputType = {
  id: number
  tenantId: number
  stripeSessionId: number
  amount: number
  currency: number
  status: number
  invoiceUrl: number
  createdAt: number
  _all: number
}


export type PaymentLogAvgAggregateInputType = {
  amount?: true
}

export type PaymentLogSumAggregateInputType = {
  amount?: true
}

export type PaymentLogMinAggregateInputType = {
  id?: true
  tenantId?: true
  stripeSessionId?: true
  amount?: true
  currency?: true
  status?: true
  invoiceUrl?: true
  createdAt?: true
}

export type PaymentLogMaxAggregateInputType = {
  id?: true
  tenantId?: true
  stripeSessionId?: true
  amount?: true
  currency?: true
  status?: true
  invoiceUrl?: true
  createdAt?: true
}

export type PaymentLogCountAggregateInputType = {
  id?: true
  tenantId?: true
  stripeSessionId?: true
  amount?: true
  currency?: true
  status?: true
  invoiceUrl?: true
  createdAt?: true
  _all?: true
}

export type PaymentLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.PaymentLogWhereInput
  
  orderBy?: Prisma.PaymentLogOrderByWithRelationInput | Prisma.PaymentLogOrderByWithRelationInput[]
  
  cursor?: Prisma.PaymentLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | PaymentLogCountAggregateInputType
  
  _avg?: PaymentLogAvgAggregateInputType
  
  _sum?: PaymentLogSumAggregateInputType
  
  _min?: PaymentLogMinAggregateInputType
  
  _max?: PaymentLogMaxAggregateInputType
}

export type GetPaymentLogAggregateType<T extends PaymentLogAggregateArgs> = {
      [P in keyof T & keyof AggregatePaymentLog]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregatePaymentLog[P]>
    : Prisma.GetScalarType<T[P], AggregatePaymentLog[P]>
}




export type PaymentLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.PaymentLogWhereInput
  orderBy?: Prisma.PaymentLogOrderByWithAggregationInput | Prisma.PaymentLogOrderByWithAggregationInput[]
  by: Prisma.PaymentLogScalarFieldEnum[] | Prisma.PaymentLogScalarFieldEnum
  having?: Prisma.PaymentLogScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: PaymentLogCountAggregateInputType | true
  _avg?: PaymentLogAvgAggregateInputType
  _sum?: PaymentLogSumAggregateInputType
  _min?: PaymentLogMinAggregateInputType
  _max?: PaymentLogMaxAggregateInputType
}

export type PaymentLogGroupByOutputType = {
  id: string
  tenantId: string
  stripeSessionId: string
  amount: number
  currency: string
  status: string
  invoiceUrl: string | null
  createdAt: Date
  _count: PaymentLogCountAggregateOutputType | null
  _avg: PaymentLogAvgAggregateOutputType | null
  _sum: PaymentLogSumAggregateOutputType | null
  _min: PaymentLogMinAggregateOutputType | null
  _max: PaymentLogMaxAggregateOutputType | null
}

export type GetPaymentLogGroupByPayload<T extends PaymentLogGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<PaymentLogGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof PaymentLogGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
      }
    >
  >



export type PaymentLogWhereInput = {
  AND?: Prisma.PaymentLogWhereInput | Prisma.PaymentLogWhereInput[]
  OR?: Prisma.PaymentLogWhereInput[]
  NOT?: Prisma.PaymentLogWhereInput | Prisma.PaymentLogWhereInput[]
  id?: Prisma.StringFilter<"PaymentLog"> | string
  tenantId?: Prisma.StringFilter<"PaymentLog"> | string
  stripeSessionId?: Prisma.StringFilter<"PaymentLog"> | string
  amount?: Prisma.FloatFilter<"PaymentLog"> | number
  currency?: Prisma.StringFilter<"PaymentLog"> | string
  status?: Prisma.StringFilter<"PaymentLog"> | string
  invoiceUrl?: Prisma.StringNullableFilter<"PaymentLog"> | string | null
  createdAt?: Prisma.DateTimeFilter<"PaymentLog"> | Date | string
}

export type PaymentLogOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeSessionId?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceUrl?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type PaymentLogWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  stripeSessionId?: string
  AND?: Prisma.PaymentLogWhereInput | Prisma.PaymentLogWhereInput[]
  OR?: Prisma.PaymentLogWhereInput[]
  NOT?: Prisma.PaymentLogWhereInput | Prisma.PaymentLogWhereInput[]
  tenantId?: Prisma.StringFilter<"PaymentLog"> | string
  amount?: Prisma.FloatFilter<"PaymentLog"> | number
  currency?: Prisma.StringFilter<"PaymentLog"> | string
  status?: Prisma.StringFilter<"PaymentLog"> | string
  invoiceUrl?: Prisma.StringNullableFilter<"PaymentLog"> | string | null
  createdAt?: Prisma.DateTimeFilter<"PaymentLog"> | Date | string
}, "id" | "stripeSessionId">

export type PaymentLogOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeSessionId?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceUrl?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.PaymentLogCountOrderByAggregateInput
  _avg?: Prisma.PaymentLogAvgOrderByAggregateInput
  _max?: Prisma.PaymentLogMaxOrderByAggregateInput
  _min?: Prisma.PaymentLogMinOrderByAggregateInput
  _sum?: Prisma.PaymentLogSumOrderByAggregateInput
}

export type PaymentLogScalarWhereWithAggregatesInput = {
  AND?: Prisma.PaymentLogScalarWhereWithAggregatesInput | Prisma.PaymentLogScalarWhereWithAggregatesInput[]
  OR?: Prisma.PaymentLogScalarWhereWithAggregatesInput[]
  NOT?: Prisma.PaymentLogScalarWhereWithAggregatesInput | Prisma.PaymentLogScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"PaymentLog"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"PaymentLog"> | string
  stripeSessionId?: Prisma.StringWithAggregatesFilter<"PaymentLog"> | string
  amount?: Prisma.FloatWithAggregatesFilter<"PaymentLog"> | number
  currency?: Prisma.StringWithAggregatesFilter<"PaymentLog"> | string
  status?: Prisma.StringWithAggregatesFilter<"PaymentLog"> | string
  invoiceUrl?: Prisma.StringNullableWithAggregatesFilter<"PaymentLog"> | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentLog"> | Date | string
}

export type PaymentLogCreateInput = {
  id?: string
  tenantId: string
  stripeSessionId: string
  amount: number
  currency?: string
  status: string
  invoiceUrl?: string | null
  createdAt?: Date | string
}

export type PaymentLogUncheckedCreateInput = {
  id?: string
  tenantId: string
  stripeSessionId: string
  amount: number
  currency?: string
  status: string
  invoiceUrl?: string | null
  createdAt?: Date | string
}

export type PaymentLogUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeSessionId?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  currency?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PaymentLogUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeSessionId?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  currency?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PaymentLogCreateManyInput = {
  id?: string
  tenantId: string
  stripeSessionId: string
  amount: number
  currency?: string
  status: string
  invoiceUrl?: string | null
  createdAt?: Date | string
}

export type PaymentLogUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeSessionId?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  currency?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PaymentLogUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeSessionId?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  currency?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PaymentLogCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeSessionId?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceUrl?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type PaymentLogAvgOrderByAggregateInput = {
  amount?: Prisma.SortOrder
}

export type PaymentLogMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeSessionId?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceUrl?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type PaymentLogMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeSessionId?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceUrl?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type PaymentLogSumOrderByAggregateInput = {
  amount?: Prisma.SortOrder
}



export type PaymentLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  stripeSessionId?: boolean
  amount?: boolean
  currency?: boolean
  status?: boolean
  invoiceUrl?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["paymentLog"]>

export type PaymentLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  stripeSessionId?: boolean
  amount?: boolean
  currency?: boolean
  status?: boolean
  invoiceUrl?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["paymentLog"]>

export type PaymentLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  stripeSessionId?: boolean
  amount?: boolean
  currency?: boolean
  status?: boolean
  invoiceUrl?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["paymentLog"]>

export type PaymentLogSelectScalar = {
  id?: boolean
  tenantId?: boolean
  stripeSessionId?: boolean
  amount?: boolean
  currency?: boolean
  status?: boolean
  invoiceUrl?: boolean
  createdAt?: boolean
}

export type PaymentLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "stripeSessionId" | "amount" | "currency" | "status" | "invoiceUrl" | "createdAt", ExtArgs["result"]["paymentLog"]>

export type $PaymentLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "PaymentLog"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    stripeSessionId: string
    amount: number
    currency: string
    status: string
    invoiceUrl: string | null
    createdAt: Date
  }, ExtArgs["result"]["paymentLog"]>
  composites: {}
}

export type PaymentLogGetPayload<S extends boolean | null | undefined | PaymentLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload, S>

export type PaymentLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<PaymentLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentLogCountAggregateInputType | true
  }

export interface PaymentLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentLog'], meta: { name: 'PaymentLog' } }
  
  findUnique<T extends PaymentLogFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends PaymentLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends PaymentLogFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends PaymentLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends PaymentLogFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends PaymentLogCreateArgs>(args: Prisma.SelectSubset<T, PaymentLogCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends PaymentLogCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends PaymentLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends PaymentLogDeleteArgs>(args: Prisma.SelectSubset<T, PaymentLogDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends PaymentLogUpdateArgs>(args: Prisma.SelectSubset<T, PaymentLogUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends PaymentLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends PaymentLogUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends PaymentLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends PaymentLogUpsertArgs>(args: Prisma.SelectSubset<T, PaymentLogUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentLogClient<runtime.Types.Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends PaymentLogCountArgs>(
    args?: Prisma.Subset<T, PaymentLogCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], PaymentLogCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends PaymentLogAggregateArgs>(args: Prisma.Subset<T, PaymentLogAggregateArgs>): Prisma.PrismaPromise<GetPaymentLogAggregateType<T>>

  
  groupBy<
    T extends PaymentLogGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: PaymentLogGroupByArgs['orderBy'] }
      : { orderBy?: PaymentLogGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, PaymentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: PaymentLogFieldRefs;
}


export interface Prisma__PaymentLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface PaymentLogFieldRefs {
  readonly id: Prisma.FieldRef<"PaymentLog", 'String'>
  readonly tenantId: Prisma.FieldRef<"PaymentLog", 'String'>
  readonly stripeSessionId: Prisma.FieldRef<"PaymentLog", 'String'>
  readonly amount: Prisma.FieldRef<"PaymentLog", 'Float'>
  readonly currency: Prisma.FieldRef<"PaymentLog", 'String'>
  readonly status: Prisma.FieldRef<"PaymentLog", 'String'>
  readonly invoiceUrl: Prisma.FieldRef<"PaymentLog", 'String'>
  readonly createdAt: Prisma.FieldRef<"PaymentLog", 'DateTime'>
}
    



export type PaymentLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  where: Prisma.PaymentLogWhereUniqueInput
}


export type PaymentLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  where: Prisma.PaymentLogWhereUniqueInput
}


export type PaymentLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  where?: Prisma.PaymentLogWhereInput
  
  orderBy?: Prisma.PaymentLogOrderByWithRelationInput | Prisma.PaymentLogOrderByWithRelationInput[]
  
  cursor?: Prisma.PaymentLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PaymentLogScalarFieldEnum | Prisma.PaymentLogScalarFieldEnum[]
}


export type PaymentLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  where?: Prisma.PaymentLogWhereInput
  
  orderBy?: Prisma.PaymentLogOrderByWithRelationInput | Prisma.PaymentLogOrderByWithRelationInput[]
  
  cursor?: Prisma.PaymentLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PaymentLogScalarFieldEnum | Prisma.PaymentLogScalarFieldEnum[]
}


export type PaymentLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  where?: Prisma.PaymentLogWhereInput
  
  orderBy?: Prisma.PaymentLogOrderByWithRelationInput | Prisma.PaymentLogOrderByWithRelationInput[]
  
  cursor?: Prisma.PaymentLogWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PaymentLogScalarFieldEnum | Prisma.PaymentLogScalarFieldEnum[]
}


export type PaymentLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PaymentLogCreateInput, Prisma.PaymentLogUncheckedCreateInput>
}


export type PaymentLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.PaymentLogCreateManyInput | Prisma.PaymentLogCreateManyInput[]
  skipDuplicates?: boolean
}


export type PaymentLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  data: Prisma.PaymentLogCreateManyInput | Prisma.PaymentLogCreateManyInput[]
  skipDuplicates?: boolean
}


export type PaymentLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PaymentLogUpdateInput, Prisma.PaymentLogUncheckedUpdateInput>
  
  where: Prisma.PaymentLogWhereUniqueInput
}


export type PaymentLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.PaymentLogUpdateManyMutationInput, Prisma.PaymentLogUncheckedUpdateManyInput>
  
  where?: Prisma.PaymentLogWhereInput
  
  limit?: number
}


export type PaymentLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PaymentLogUpdateManyMutationInput, Prisma.PaymentLogUncheckedUpdateManyInput>
  
  where?: Prisma.PaymentLogWhereInput
  
  limit?: number
}


export type PaymentLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  where: Prisma.PaymentLogWhereUniqueInput
  
  create: Prisma.XOR<Prisma.PaymentLogCreateInput, Prisma.PaymentLogUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.PaymentLogUpdateInput, Prisma.PaymentLogUncheckedUpdateInput>
}


export type PaymentLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
  
  where: Prisma.PaymentLogWhereUniqueInput
}


export type PaymentLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.PaymentLogWhereInput
  
  limit?: number
}


export type PaymentLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PaymentLogSelect<ExtArgs> | null
  
  omit?: Prisma.PaymentLogOmit<ExtArgs> | null
}
