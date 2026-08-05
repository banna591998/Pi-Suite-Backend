





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type FinancialLedgerModel = runtime.Types.Result.DefaultSelection<Prisma.$FinancialLedgerPayload>

export type AggregateFinancialLedger = {
  _count: FinancialLedgerCountAggregateOutputType | null
  _avg: FinancialLedgerAvgAggregateOutputType | null
  _sum: FinancialLedgerSumAggregateOutputType | null
  _min: FinancialLedgerMinAggregateOutputType | null
  _max: FinancialLedgerMaxAggregateOutputType | null
}

export type FinancialLedgerAvgAggregateOutputType = {
  amount: number | null
  exchangeRate: number | null
}

export type FinancialLedgerSumAggregateOutputType = {
  amount: number | null
  exchangeRate: number | null
}

export type FinancialLedgerMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  transactionNo: string | null
  currency: $Enums.CurrencyType | null
  amount: number | null
  exchangeRate: number | null
  category: string | null
  referenceId: string | null
  description: string | null
  createdAt: Date | null
}

export type FinancialLedgerMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  transactionNo: string | null
  currency: $Enums.CurrencyType | null
  amount: number | null
  exchangeRate: number | null
  category: string | null
  referenceId: string | null
  description: string | null
  createdAt: Date | null
}

export type FinancialLedgerCountAggregateOutputType = {
  id: number
  tenantId: number
  transactionNo: number
  currency: number
  amount: number
  exchangeRate: number
  category: number
  referenceId: number
  description: number
  createdAt: number
  _all: number
}


export type FinancialLedgerAvgAggregateInputType = {
  amount?: true
  exchangeRate?: true
}

export type FinancialLedgerSumAggregateInputType = {
  amount?: true
  exchangeRate?: true
}

export type FinancialLedgerMinAggregateInputType = {
  id?: true
  tenantId?: true
  transactionNo?: true
  currency?: true
  amount?: true
  exchangeRate?: true
  category?: true
  referenceId?: true
  description?: true
  createdAt?: true
}

export type FinancialLedgerMaxAggregateInputType = {
  id?: true
  tenantId?: true
  transactionNo?: true
  currency?: true
  amount?: true
  exchangeRate?: true
  category?: true
  referenceId?: true
  description?: true
  createdAt?: true
}

export type FinancialLedgerCountAggregateInputType = {
  id?: true
  tenantId?: true
  transactionNo?: true
  currency?: true
  amount?: true
  exchangeRate?: true
  category?: true
  referenceId?: true
  description?: true
  createdAt?: true
  _all?: true
}

export type FinancialLedgerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.FinancialLedgerWhereInput
  
  orderBy?: Prisma.FinancialLedgerOrderByWithRelationInput | Prisma.FinancialLedgerOrderByWithRelationInput[]
  
  cursor?: Prisma.FinancialLedgerWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | FinancialLedgerCountAggregateInputType
  
  _avg?: FinancialLedgerAvgAggregateInputType
  
  _sum?: FinancialLedgerSumAggregateInputType
  
  _min?: FinancialLedgerMinAggregateInputType
  
  _max?: FinancialLedgerMaxAggregateInputType
}

export type GetFinancialLedgerAggregateType<T extends FinancialLedgerAggregateArgs> = {
      [P in keyof T & keyof AggregateFinancialLedger]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateFinancialLedger[P]>
    : Prisma.GetScalarType<T[P], AggregateFinancialLedger[P]>
}




export type FinancialLedgerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FinancialLedgerWhereInput
  orderBy?: Prisma.FinancialLedgerOrderByWithAggregationInput | Prisma.FinancialLedgerOrderByWithAggregationInput[]
  by: Prisma.FinancialLedgerScalarFieldEnum[] | Prisma.FinancialLedgerScalarFieldEnum
  having?: Prisma.FinancialLedgerScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: FinancialLedgerCountAggregateInputType | true
  _avg?: FinancialLedgerAvgAggregateInputType
  _sum?: FinancialLedgerSumAggregateInputType
  _min?: FinancialLedgerMinAggregateInputType
  _max?: FinancialLedgerMaxAggregateInputType
}

export type FinancialLedgerGroupByOutputType = {
  id: string
  tenantId: string
  transactionNo: string
  currency: $Enums.CurrencyType
  amount: number
  exchangeRate: number
  category: string
  referenceId: string | null
  description: string
  createdAt: Date
  _count: FinancialLedgerCountAggregateOutputType | null
  _avg: FinancialLedgerAvgAggregateOutputType | null
  _sum: FinancialLedgerSumAggregateOutputType | null
  _min: FinancialLedgerMinAggregateOutputType | null
  _max: FinancialLedgerMaxAggregateOutputType | null
}

export type GetFinancialLedgerGroupByPayload<T extends FinancialLedgerGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<FinancialLedgerGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof FinancialLedgerGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], FinancialLedgerGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], FinancialLedgerGroupByOutputType[P]>
      }
    >
  >



export type FinancialLedgerWhereInput = {
  AND?: Prisma.FinancialLedgerWhereInput | Prisma.FinancialLedgerWhereInput[]
  OR?: Prisma.FinancialLedgerWhereInput[]
  NOT?: Prisma.FinancialLedgerWhereInput | Prisma.FinancialLedgerWhereInput[]
  id?: Prisma.StringFilter<"FinancialLedger"> | string
  tenantId?: Prisma.StringFilter<"FinancialLedger"> | string
  transactionNo?: Prisma.StringFilter<"FinancialLedger"> | string
  currency?: Prisma.EnumCurrencyTypeFilter<"FinancialLedger"> | $Enums.CurrencyType
  amount?: Prisma.FloatFilter<"FinancialLedger"> | number
  exchangeRate?: Prisma.FloatFilter<"FinancialLedger"> | number
  category?: Prisma.StringFilter<"FinancialLedger"> | string
  referenceId?: Prisma.StringNullableFilter<"FinancialLedger"> | string | null
  description?: Prisma.StringFilter<"FinancialLedger"> | string
  createdAt?: Prisma.DateTimeFilter<"FinancialLedger"> | Date | string
}

export type FinancialLedgerOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  transactionNo?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  exchangeRate?: Prisma.SortOrder
  category?: Prisma.SortOrder
  referenceId?: Prisma.SortOrderInput | Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type FinancialLedgerWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  transactionNo?: string
  AND?: Prisma.FinancialLedgerWhereInput | Prisma.FinancialLedgerWhereInput[]
  OR?: Prisma.FinancialLedgerWhereInput[]
  NOT?: Prisma.FinancialLedgerWhereInput | Prisma.FinancialLedgerWhereInput[]
  tenantId?: Prisma.StringFilter<"FinancialLedger"> | string
  currency?: Prisma.EnumCurrencyTypeFilter<"FinancialLedger"> | $Enums.CurrencyType
  amount?: Prisma.FloatFilter<"FinancialLedger"> | number
  exchangeRate?: Prisma.FloatFilter<"FinancialLedger"> | number
  category?: Prisma.StringFilter<"FinancialLedger"> | string
  referenceId?: Prisma.StringNullableFilter<"FinancialLedger"> | string | null
  description?: Prisma.StringFilter<"FinancialLedger"> | string
  createdAt?: Prisma.DateTimeFilter<"FinancialLedger"> | Date | string
}, "id" | "transactionNo">

export type FinancialLedgerOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  transactionNo?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  exchangeRate?: Prisma.SortOrder
  category?: Prisma.SortOrder
  referenceId?: Prisma.SortOrderInput | Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.FinancialLedgerCountOrderByAggregateInput
  _avg?: Prisma.FinancialLedgerAvgOrderByAggregateInput
  _max?: Prisma.FinancialLedgerMaxOrderByAggregateInput
  _min?: Prisma.FinancialLedgerMinOrderByAggregateInput
  _sum?: Prisma.FinancialLedgerSumOrderByAggregateInput
}

export type FinancialLedgerScalarWhereWithAggregatesInput = {
  AND?: Prisma.FinancialLedgerScalarWhereWithAggregatesInput | Prisma.FinancialLedgerScalarWhereWithAggregatesInput[]
  OR?: Prisma.FinancialLedgerScalarWhereWithAggregatesInput[]
  NOT?: Prisma.FinancialLedgerScalarWhereWithAggregatesInput | Prisma.FinancialLedgerScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"FinancialLedger"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"FinancialLedger"> | string
  transactionNo?: Prisma.StringWithAggregatesFilter<"FinancialLedger"> | string
  currency?: Prisma.EnumCurrencyTypeWithAggregatesFilter<"FinancialLedger"> | $Enums.CurrencyType
  amount?: Prisma.FloatWithAggregatesFilter<"FinancialLedger"> | number
  exchangeRate?: Prisma.FloatWithAggregatesFilter<"FinancialLedger"> | number
  category?: Prisma.StringWithAggregatesFilter<"FinancialLedger"> | string
  referenceId?: Prisma.StringNullableWithAggregatesFilter<"FinancialLedger"> | string | null
  description?: Prisma.StringWithAggregatesFilter<"FinancialLedger"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"FinancialLedger"> | Date | string
}

export type FinancialLedgerCreateInput = {
  id?: string
  tenantId: string
  transactionNo: string
  currency?: $Enums.CurrencyType
  amount: number
  exchangeRate?: number
  category: string
  referenceId?: string | null
  description: string
  createdAt?: Date | string
}

export type FinancialLedgerUncheckedCreateInput = {
  id?: string
  tenantId: string
  transactionNo: string
  currency?: $Enums.CurrencyType
  amount: number
  exchangeRate?: number
  category: string
  referenceId?: string | null
  description: string
  createdAt?: Date | string
}

export type FinancialLedgerUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  transactionNo?: Prisma.StringFieldUpdateOperationsInput | string
  currency?: Prisma.EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  exchangeRate?: Prisma.FloatFieldUpdateOperationsInput | number
  category?: Prisma.StringFieldUpdateOperationsInput | string
  referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  description?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FinancialLedgerUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  transactionNo?: Prisma.StringFieldUpdateOperationsInput | string
  currency?: Prisma.EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  exchangeRate?: Prisma.FloatFieldUpdateOperationsInput | number
  category?: Prisma.StringFieldUpdateOperationsInput | string
  referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  description?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FinancialLedgerCreateManyInput = {
  id?: string
  tenantId: string
  transactionNo: string
  currency?: $Enums.CurrencyType
  amount: number
  exchangeRate?: number
  category: string
  referenceId?: string | null
  description: string
  createdAt?: Date | string
}

export type FinancialLedgerUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  transactionNo?: Prisma.StringFieldUpdateOperationsInput | string
  currency?: Prisma.EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  exchangeRate?: Prisma.FloatFieldUpdateOperationsInput | number
  category?: Prisma.StringFieldUpdateOperationsInput | string
  referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  description?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FinancialLedgerUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  transactionNo?: Prisma.StringFieldUpdateOperationsInput | string
  currency?: Prisma.EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  exchangeRate?: Prisma.FloatFieldUpdateOperationsInput | number
  category?: Prisma.StringFieldUpdateOperationsInput | string
  referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  description?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FinancialLedgerCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  transactionNo?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  exchangeRate?: Prisma.SortOrder
  category?: Prisma.SortOrder
  referenceId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type FinancialLedgerAvgOrderByAggregateInput = {
  amount?: Prisma.SortOrder
  exchangeRate?: Prisma.SortOrder
}

export type FinancialLedgerMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  transactionNo?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  exchangeRate?: Prisma.SortOrder
  category?: Prisma.SortOrder
  referenceId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type FinancialLedgerMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  transactionNo?: Prisma.SortOrder
  currency?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  exchangeRate?: Prisma.SortOrder
  category?: Prisma.SortOrder
  referenceId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type FinancialLedgerSumOrderByAggregateInput = {
  amount?: Prisma.SortOrder
  exchangeRate?: Prisma.SortOrder
}

export type EnumCurrencyTypeFieldUpdateOperationsInput = {
  set?: $Enums.CurrencyType
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}



export type FinancialLedgerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  transactionNo?: boolean
  currency?: boolean
  amount?: boolean
  exchangeRate?: boolean
  category?: boolean
  referenceId?: boolean
  description?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["financialLedger"]>

export type FinancialLedgerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  transactionNo?: boolean
  currency?: boolean
  amount?: boolean
  exchangeRate?: boolean
  category?: boolean
  referenceId?: boolean
  description?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["financialLedger"]>

export type FinancialLedgerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  transactionNo?: boolean
  currency?: boolean
  amount?: boolean
  exchangeRate?: boolean
  category?: boolean
  referenceId?: boolean
  description?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["financialLedger"]>

export type FinancialLedgerSelectScalar = {
  id?: boolean
  tenantId?: boolean
  transactionNo?: boolean
  currency?: boolean
  amount?: boolean
  exchangeRate?: boolean
  category?: boolean
  referenceId?: boolean
  description?: boolean
  createdAt?: boolean
}

export type FinancialLedgerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "transactionNo" | "currency" | "amount" | "exchangeRate" | "category" | "referenceId" | "description" | "createdAt", ExtArgs["result"]["financialLedger"]>

export type $FinancialLedgerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "FinancialLedger"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    transactionNo: string
    currency: $Enums.CurrencyType
    amount: number
    exchangeRate: number
    category: string
    referenceId: string | null
    description: string
    createdAt: Date
  }, ExtArgs["result"]["financialLedger"]>
  composites: {}
}

export type FinancialLedgerGetPayload<S extends boolean | null | undefined | FinancialLedgerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload, S>

export type FinancialLedgerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<FinancialLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FinancialLedgerCountAggregateInputType | true
  }

export interface FinancialLedgerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialLedger'], meta: { name: 'FinancialLedger' } }
  
  findUnique<T extends FinancialLedgerFindUniqueArgs>(args: Prisma.SelectSubset<T, FinancialLedgerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends FinancialLedgerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FinancialLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends FinancialLedgerFindFirstArgs>(args?: Prisma.SelectSubset<T, FinancialLedgerFindFirstArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends FinancialLedgerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FinancialLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends FinancialLedgerFindManyArgs>(args?: Prisma.SelectSubset<T, FinancialLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends FinancialLedgerCreateArgs>(args: Prisma.SelectSubset<T, FinancialLedgerCreateArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends FinancialLedgerCreateManyArgs>(args?: Prisma.SelectSubset<T, FinancialLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends FinancialLedgerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FinancialLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends FinancialLedgerDeleteArgs>(args: Prisma.SelectSubset<T, FinancialLedgerDeleteArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends FinancialLedgerUpdateArgs>(args: Prisma.SelectSubset<T, FinancialLedgerUpdateArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends FinancialLedgerDeleteManyArgs>(args?: Prisma.SelectSubset<T, FinancialLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends FinancialLedgerUpdateManyArgs>(args: Prisma.SelectSubset<T, FinancialLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends FinancialLedgerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FinancialLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends FinancialLedgerUpsertArgs>(args: Prisma.SelectSubset<T, FinancialLedgerUpsertArgs<ExtArgs>>): Prisma.Prisma__FinancialLedgerClient<runtime.Types.Result.GetResult<Prisma.$FinancialLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends FinancialLedgerCountArgs>(
    args?: Prisma.Subset<T, FinancialLedgerCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], FinancialLedgerCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends FinancialLedgerAggregateArgs>(args: Prisma.Subset<T, FinancialLedgerAggregateArgs>): Prisma.PrismaPromise<GetFinancialLedgerAggregateType<T>>

  
  groupBy<
    T extends FinancialLedgerGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: FinancialLedgerGroupByArgs['orderBy'] }
      : { orderBy?: FinancialLedgerGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, FinancialLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: FinancialLedgerFieldRefs;
}


export interface Prisma__FinancialLedgerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface FinancialLedgerFieldRefs {
  readonly id: Prisma.FieldRef<"FinancialLedger", 'String'>
  readonly tenantId: Prisma.FieldRef<"FinancialLedger", 'String'>
  readonly transactionNo: Prisma.FieldRef<"FinancialLedger", 'String'>
  readonly currency: Prisma.FieldRef<"FinancialLedger", 'CurrencyType'>
  readonly amount: Prisma.FieldRef<"FinancialLedger", 'Float'>
  readonly exchangeRate: Prisma.FieldRef<"FinancialLedger", 'Float'>
  readonly category: Prisma.FieldRef<"FinancialLedger", 'String'>
  readonly referenceId: Prisma.FieldRef<"FinancialLedger", 'String'>
  readonly description: Prisma.FieldRef<"FinancialLedger", 'String'>
  readonly createdAt: Prisma.FieldRef<"FinancialLedger", 'DateTime'>
}
    



export type FinancialLedgerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  where: Prisma.FinancialLedgerWhereUniqueInput
}


export type FinancialLedgerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  where: Prisma.FinancialLedgerWhereUniqueInput
}


export type FinancialLedgerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  where?: Prisma.FinancialLedgerWhereInput
  
  orderBy?: Prisma.FinancialLedgerOrderByWithRelationInput | Prisma.FinancialLedgerOrderByWithRelationInput[]
  
  cursor?: Prisma.FinancialLedgerWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.FinancialLedgerScalarFieldEnum | Prisma.FinancialLedgerScalarFieldEnum[]
}


export type FinancialLedgerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  where?: Prisma.FinancialLedgerWhereInput
  
  orderBy?: Prisma.FinancialLedgerOrderByWithRelationInput | Prisma.FinancialLedgerOrderByWithRelationInput[]
  
  cursor?: Prisma.FinancialLedgerWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.FinancialLedgerScalarFieldEnum | Prisma.FinancialLedgerScalarFieldEnum[]
}


export type FinancialLedgerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  where?: Prisma.FinancialLedgerWhereInput
  
  orderBy?: Prisma.FinancialLedgerOrderByWithRelationInput | Prisma.FinancialLedgerOrderByWithRelationInput[]
  
  cursor?: Prisma.FinancialLedgerWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.FinancialLedgerScalarFieldEnum | Prisma.FinancialLedgerScalarFieldEnum[]
}


export type FinancialLedgerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.FinancialLedgerCreateInput, Prisma.FinancialLedgerUncheckedCreateInput>
}


export type FinancialLedgerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.FinancialLedgerCreateManyInput | Prisma.FinancialLedgerCreateManyInput[]
  skipDuplicates?: boolean
}


export type FinancialLedgerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  data: Prisma.FinancialLedgerCreateManyInput | Prisma.FinancialLedgerCreateManyInput[]
  skipDuplicates?: boolean
}


export type FinancialLedgerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.FinancialLedgerUpdateInput, Prisma.FinancialLedgerUncheckedUpdateInput>
  
  where: Prisma.FinancialLedgerWhereUniqueInput
}


export type FinancialLedgerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.FinancialLedgerUpdateManyMutationInput, Prisma.FinancialLedgerUncheckedUpdateManyInput>
  
  where?: Prisma.FinancialLedgerWhereInput
  
  limit?: number
}


export type FinancialLedgerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.FinancialLedgerUpdateManyMutationInput, Prisma.FinancialLedgerUncheckedUpdateManyInput>
  
  where?: Prisma.FinancialLedgerWhereInput
  
  limit?: number
}


export type FinancialLedgerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  where: Prisma.FinancialLedgerWhereUniqueInput
  
  create: Prisma.XOR<Prisma.FinancialLedgerCreateInput, Prisma.FinancialLedgerUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.FinancialLedgerUpdateInput, Prisma.FinancialLedgerUncheckedUpdateInput>
}


export type FinancialLedgerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
  
  where: Prisma.FinancialLedgerWhereUniqueInput
}


export type FinancialLedgerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.FinancialLedgerWhereInput
  
  limit?: number
}


export type FinancialLedgerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.FinancialLedgerSelect<ExtArgs> | null
  
  omit?: Prisma.FinancialLedgerOmit<ExtArgs> | null
}
