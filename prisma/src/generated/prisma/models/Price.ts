





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type PriceModel = runtime.Types.Result.DefaultSelection<Prisma.$PricePayload>

export type AggregatePrice = {
  _count: PriceCountAggregateOutputType | null
  _avg: PriceAvgAggregateOutputType | null
  _sum: PriceSumAggregateOutputType | null
  _min: PriceMinAggregateOutputType | null
  _max: PriceMaxAggregateOutputType | null
}

export type PriceAvgAggregateOutputType = {
  amount: number | null
}

export type PriceSumAggregateOutputType = {
  amount: number | null
}

export type PriceMinAggregateOutputType = {
  id: string | null
  productName: string | null
  amount: number | null
}

export type PriceMaxAggregateOutputType = {
  id: string | null
  productName: string | null
  amount: number | null
}

export type PriceCountAggregateOutputType = {
  id: number
  productName: number
  amount: number
  _all: number
}


export type PriceAvgAggregateInputType = {
  amount?: true
}

export type PriceSumAggregateInputType = {
  amount?: true
}

export type PriceMinAggregateInputType = {
  id?: true
  productName?: true
  amount?: true
}

export type PriceMaxAggregateInputType = {
  id?: true
  productName?: true
  amount?: true
}

export type PriceCountAggregateInputType = {
  id?: true
  productName?: true
  amount?: true
  _all?: true
}

export type PriceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.PriceWhereInput
  
  orderBy?: Prisma.PriceOrderByWithRelationInput | Prisma.PriceOrderByWithRelationInput[]
  
  cursor?: Prisma.PriceWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | PriceCountAggregateInputType
  
  _avg?: PriceAvgAggregateInputType
  
  _sum?: PriceSumAggregateInputType
  
  _min?: PriceMinAggregateInputType
  
  _max?: PriceMaxAggregateInputType
}

export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
      [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregatePrice[P]>
    : Prisma.GetScalarType<T[P], AggregatePrice[P]>
}




export type PriceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.PriceWhereInput
  orderBy?: Prisma.PriceOrderByWithAggregationInput | Prisma.PriceOrderByWithAggregationInput[]
  by: Prisma.PriceScalarFieldEnum[] | Prisma.PriceScalarFieldEnum
  having?: Prisma.PriceScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: PriceCountAggregateInputType | true
  _avg?: PriceAvgAggregateInputType
  _sum?: PriceSumAggregateInputType
  _min?: PriceMinAggregateInputType
  _max?: PriceMaxAggregateInputType
}

export type PriceGroupByOutputType = {
  id: string
  productName: string
  amount: number
  _count: PriceCountAggregateOutputType | null
  _avg: PriceAvgAggregateOutputType | null
  _sum: PriceSumAggregateOutputType | null
  _min: PriceMinAggregateOutputType | null
  _max: PriceMaxAggregateOutputType | null
}

export type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<PriceGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], PriceGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], PriceGroupByOutputType[P]>
      }
    >
  >



export type PriceWhereInput = {
  AND?: Prisma.PriceWhereInput | Prisma.PriceWhereInput[]
  OR?: Prisma.PriceWhereInput[]
  NOT?: Prisma.PriceWhereInput | Prisma.PriceWhereInput[]
  id?: Prisma.StringFilter<"Price"> | string
  productName?: Prisma.StringFilter<"Price"> | string
  amount?: Prisma.FloatFilter<"Price"> | number
  orderItems?: Prisma.OrderItemListRelationFilter
}

export type PriceOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  orderItems?: Prisma.OrderItemOrderByRelationAggregateInput
}

export type PriceWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.PriceWhereInput | Prisma.PriceWhereInput[]
  OR?: Prisma.PriceWhereInput[]
  NOT?: Prisma.PriceWhereInput | Prisma.PriceWhereInput[]
  productName?: Prisma.StringFilter<"Price"> | string
  amount?: Prisma.FloatFilter<"Price"> | number
  orderItems?: Prisma.OrderItemListRelationFilter
}, "id">

export type PriceOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  amount?: Prisma.SortOrder
  _count?: Prisma.PriceCountOrderByAggregateInput
  _avg?: Prisma.PriceAvgOrderByAggregateInput
  _max?: Prisma.PriceMaxOrderByAggregateInput
  _min?: Prisma.PriceMinOrderByAggregateInput
  _sum?: Prisma.PriceSumOrderByAggregateInput
}

export type PriceScalarWhereWithAggregatesInput = {
  AND?: Prisma.PriceScalarWhereWithAggregatesInput | Prisma.PriceScalarWhereWithAggregatesInput[]
  OR?: Prisma.PriceScalarWhereWithAggregatesInput[]
  NOT?: Prisma.PriceScalarWhereWithAggregatesInput | Prisma.PriceScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Price"> | string
  productName?: Prisma.StringWithAggregatesFilter<"Price"> | string
  amount?: Prisma.FloatWithAggregatesFilter<"Price"> | number
}

export type PriceCreateInput = {
  id?: string
  productName: string
  amount: number
  orderItems?: Prisma.OrderItemCreateNestedManyWithoutUnitPriceInput
}

export type PriceUncheckedCreateInput = {
  id?: string
  productName: string
  amount: number
  orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutUnitPriceInput
}

export type PriceUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  orderItems?: Prisma.OrderItemUpdateManyWithoutUnitPriceNestedInput
}

export type PriceUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
  orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutUnitPriceNestedInput
}

export type PriceCreateManyInput = {
  id?: string
  productName: string
  amount: number
}

export type PriceUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
}

export type PriceUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
}

export type PriceScalarRelationFilter = {
  is?: Prisma.PriceWhereInput
  isNot?: Prisma.PriceWhereInput
}

export type PriceCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  amount?: Prisma.SortOrder
}

export type PriceAvgOrderByAggregateInput = {
  amount?: Prisma.SortOrder
}

export type PriceMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  amount?: Prisma.SortOrder
}

export type PriceMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  amount?: Prisma.SortOrder
}

export type PriceSumOrderByAggregateInput = {
  amount?: Prisma.SortOrder
}

export type PriceCreateNestedOneWithoutOrderItemsInput = {
  create?: Prisma.XOR<Prisma.PriceCreateWithoutOrderItemsInput, Prisma.PriceUncheckedCreateWithoutOrderItemsInput>
  connectOrCreate?: Prisma.PriceCreateOrConnectWithoutOrderItemsInput
  connect?: Prisma.PriceWhereUniqueInput
}

export type PriceUpdateOneRequiredWithoutOrderItemsNestedInput = {
  create?: Prisma.XOR<Prisma.PriceCreateWithoutOrderItemsInput, Prisma.PriceUncheckedCreateWithoutOrderItemsInput>
  connectOrCreate?: Prisma.PriceCreateOrConnectWithoutOrderItemsInput
  upsert?: Prisma.PriceUpsertWithoutOrderItemsInput
  connect?: Prisma.PriceWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.PriceUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.PriceUpdateWithoutOrderItemsInput>, Prisma.PriceUncheckedUpdateWithoutOrderItemsInput>
}

export type PriceCreateWithoutOrderItemsInput = {
  id?: string
  productName: string
  amount: number
}

export type PriceUncheckedCreateWithoutOrderItemsInput = {
  id?: string
  productName: string
  amount: number
}

export type PriceCreateOrConnectWithoutOrderItemsInput = {
  where: Prisma.PriceWhereUniqueInput
  create: Prisma.XOR<Prisma.PriceCreateWithoutOrderItemsInput, Prisma.PriceUncheckedCreateWithoutOrderItemsInput>
}

export type PriceUpsertWithoutOrderItemsInput = {
  update: Prisma.XOR<Prisma.PriceUpdateWithoutOrderItemsInput, Prisma.PriceUncheckedUpdateWithoutOrderItemsInput>
  create: Prisma.XOR<Prisma.PriceCreateWithoutOrderItemsInput, Prisma.PriceUncheckedCreateWithoutOrderItemsInput>
  where?: Prisma.PriceWhereInput
}

export type PriceUpdateToOneWithWhereWithoutOrderItemsInput = {
  where?: Prisma.PriceWhereInput
  data: Prisma.XOR<Prisma.PriceUpdateWithoutOrderItemsInput, Prisma.PriceUncheckedUpdateWithoutOrderItemsInput>
}

export type PriceUpdateWithoutOrderItemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
}

export type PriceUncheckedUpdateWithoutOrderItemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  amount?: Prisma.FloatFieldUpdateOperationsInput | number
}




export type PriceCountOutputType = {
  orderItems: number
}

export type PriceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  orderItems?: boolean | PriceCountOutputTypeCountOrderItemsArgs
}


export type PriceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceCountOutputTypeSelect<ExtArgs> | null
}


export type PriceCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.OrderItemWhereInput
}


export type PriceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  productName?: boolean
  amount?: boolean
  orderItems?: boolean | Prisma.Price$orderItemsArgs<ExtArgs>
  _count?: boolean | Prisma.PriceCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["price"]>

export type PriceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  productName?: boolean
  amount?: boolean
}, ExtArgs["result"]["price"]>

export type PriceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  productName?: boolean
  amount?: boolean
}, ExtArgs["result"]["price"]>

export type PriceSelectScalar = {
  id?: boolean
  productName?: boolean
  amount?: boolean
}

export type PriceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productName" | "amount", ExtArgs["result"]["price"]>
export type PriceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  orderItems?: boolean | Prisma.Price$orderItemsArgs<ExtArgs>
  _count?: boolean | Prisma.PriceCountOutputTypeDefaultArgs<ExtArgs>
}
export type PriceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type PriceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $PricePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Price"
  objects: {
    orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    productName: string
    amount: number
  }, ExtArgs["result"]["price"]>
  composites: {}
}

export type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PricePayload, S>

export type PriceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PriceCountAggregateInputType | true
  }

export interface PriceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
  
  findUnique<T extends PriceFindUniqueArgs>(args: Prisma.SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends PriceFindFirstArgs>(args?: Prisma.SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends PriceFindManyArgs>(args?: Prisma.SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends PriceCreateArgs>(args: Prisma.SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends PriceCreateManyArgs>(args?: Prisma.SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends PriceDeleteArgs>(args: Prisma.SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends PriceUpdateArgs>(args: Prisma.SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends PriceDeleteManyArgs>(args?: Prisma.SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends PriceUpdateManyArgs>(args: Prisma.SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends PriceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends PriceUpsertArgs>(args: Prisma.SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends PriceCountArgs>(
    args?: Prisma.Subset<T, PriceCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], PriceCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends PriceAggregateArgs>(args: Prisma.Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

  
  groupBy<
    T extends PriceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: PriceGroupByArgs['orderBy'] }
      : { orderBy?: PriceGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: PriceFieldRefs;
}


export interface Prisma__PriceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  orderItems<T extends Prisma.Price$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Price$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface PriceFieldRefs {
  readonly id: Prisma.FieldRef<"Price", 'String'>
  readonly productName: Prisma.FieldRef<"Price", 'String'>
  readonly amount: Prisma.FieldRef<"Price", 'Float'>
}
    



export type PriceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  where: Prisma.PriceWhereUniqueInput
}


export type PriceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  where: Prisma.PriceWhereUniqueInput
}


export type PriceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  where?: Prisma.PriceWhereInput
  
  orderBy?: Prisma.PriceOrderByWithRelationInput | Prisma.PriceOrderByWithRelationInput[]
  
  cursor?: Prisma.PriceWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PriceScalarFieldEnum | Prisma.PriceScalarFieldEnum[]
}


export type PriceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  where?: Prisma.PriceWhereInput
  
  orderBy?: Prisma.PriceOrderByWithRelationInput | Prisma.PriceOrderByWithRelationInput[]
  
  cursor?: Prisma.PriceWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PriceScalarFieldEnum | Prisma.PriceScalarFieldEnum[]
}


export type PriceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  where?: Prisma.PriceWhereInput
  
  orderBy?: Prisma.PriceOrderByWithRelationInput | Prisma.PriceOrderByWithRelationInput[]
  
  cursor?: Prisma.PriceWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PriceScalarFieldEnum | Prisma.PriceScalarFieldEnum[]
}


export type PriceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PriceCreateInput, Prisma.PriceUncheckedCreateInput>
}


export type PriceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.PriceCreateManyInput | Prisma.PriceCreateManyInput[]
  skipDuplicates?: boolean
}


export type PriceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  data: Prisma.PriceCreateManyInput | Prisma.PriceCreateManyInput[]
  skipDuplicates?: boolean
}


export type PriceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PriceUpdateInput, Prisma.PriceUncheckedUpdateInput>
  
  where: Prisma.PriceWhereUniqueInput
}


export type PriceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.PriceUpdateManyMutationInput, Prisma.PriceUncheckedUpdateManyInput>
  
  where?: Prisma.PriceWhereInput
  
  limit?: number
}


export type PriceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PriceUpdateManyMutationInput, Prisma.PriceUncheckedUpdateManyInput>
  
  where?: Prisma.PriceWhereInput
  
  limit?: number
}


export type PriceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  where: Prisma.PriceWhereUniqueInput
  
  create: Prisma.XOR<Prisma.PriceCreateInput, Prisma.PriceUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.PriceUpdateInput, Prisma.PriceUncheckedUpdateInput>
}


export type PriceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
  
  where: Prisma.PriceWhereUniqueInput
}


export type PriceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.PriceWhereInput
  
  limit?: number
}


export type Price$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
  where?: Prisma.OrderItemWhereInput
  orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[]
  cursor?: Prisma.OrderItemWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[]
}


export type PriceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PriceSelect<ExtArgs> | null
  
  omit?: Prisma.PriceOmit<ExtArgs> | null
  
  include?: Prisma.PriceInclude<ExtArgs> | null
}
