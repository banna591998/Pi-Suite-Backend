





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type OrderItemModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderItemPayload>

export type AggregateOrderItem = {
  _count: OrderItemCountAggregateOutputType | null
  _avg: OrderItemAvgAggregateOutputType | null
  _sum: OrderItemSumAggregateOutputType | null
  _min: OrderItemMinAggregateOutputType | null
  _max: OrderItemMaxAggregateOutputType | null
}

export type OrderItemAvgAggregateOutputType = {
  quantity: number | null
}

export type OrderItemSumAggregateOutputType = {
  quantity: number | null
}

export type OrderItemMinAggregateOutputType = {
  id: string | null
  orderId: string | null
  productName: string | null
  quantity: number | null
  priceId: string | null
}

export type OrderItemMaxAggregateOutputType = {
  id: string | null
  orderId: string | null
  productName: string | null
  quantity: number | null
  priceId: string | null
}

export type OrderItemCountAggregateOutputType = {
  id: number
  orderId: number
  productName: number
  quantity: number
  priceId: number
  _all: number
}


export type OrderItemAvgAggregateInputType = {
  quantity?: true
}

export type OrderItemSumAggregateInputType = {
  quantity?: true
}

export type OrderItemMinAggregateInputType = {
  id?: true
  orderId?: true
  productName?: true
  quantity?: true
  priceId?: true
}

export type OrderItemMaxAggregateInputType = {
  id?: true
  orderId?: true
  productName?: true
  quantity?: true
  priceId?: true
}

export type OrderItemCountAggregateInputType = {
  id?: true
  orderId?: true
  productName?: true
  quantity?: true
  priceId?: true
  _all?: true
}

export type OrderItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.OrderItemWhereInput
  
  orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[]
  
  cursor?: Prisma.OrderItemWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | OrderItemCountAggregateInputType
  
  _avg?: OrderItemAvgAggregateInputType
  
  _sum?: OrderItemSumAggregateInputType
  
  _min?: OrderItemMinAggregateInputType
  
  _max?: OrderItemMaxAggregateInputType
}

export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
      [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateOrderItem[P]>
    : Prisma.GetScalarType<T[P], AggregateOrderItem[P]>
}




export type OrderItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.OrderItemWhereInput
  orderBy?: Prisma.OrderItemOrderByWithAggregationInput | Prisma.OrderItemOrderByWithAggregationInput[]
  by: Prisma.OrderItemScalarFieldEnum[] | Prisma.OrderItemScalarFieldEnum
  having?: Prisma.OrderItemScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: OrderItemCountAggregateInputType | true
  _avg?: OrderItemAvgAggregateInputType
  _sum?: OrderItemSumAggregateInputType
  _min?: OrderItemMinAggregateInputType
  _max?: OrderItemMaxAggregateInputType
}

export type OrderItemGroupByOutputType = {
  id: string
  orderId: string
  productName: string
  quantity: number
  priceId: string
  _count: OrderItemCountAggregateOutputType | null
  _avg: OrderItemAvgAggregateOutputType | null
  _sum: OrderItemSumAggregateOutputType | null
  _min: OrderItemMinAggregateOutputType | null
  _max: OrderItemMaxAggregateOutputType | null
}

export type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<OrderItemGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], OrderItemGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], OrderItemGroupByOutputType[P]>
      }
    >
  >



export type OrderItemWhereInput = {
  AND?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[]
  OR?: Prisma.OrderItemWhereInput[]
  NOT?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[]
  id?: Prisma.StringFilter<"OrderItem"> | string
  orderId?: Prisma.StringFilter<"OrderItem"> | string
  productName?: Prisma.StringFilter<"OrderItem"> | string
  quantity?: Prisma.IntFilter<"OrderItem"> | number
  priceId?: Prisma.StringFilter<"OrderItem"> | string
  unitPrice?: Prisma.XOR<Prisma.PriceScalarRelationFilter, Prisma.PriceWhereInput>
  order?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>
}

export type OrderItemOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  priceId?: Prisma.SortOrder
  unitPrice?: Prisma.PriceOrderByWithRelationInput
  order?: Prisma.SalesOrderOrderByWithRelationInput
}

export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[]
  OR?: Prisma.OrderItemWhereInput[]
  NOT?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[]
  orderId?: Prisma.StringFilter<"OrderItem"> | string
  productName?: Prisma.StringFilter<"OrderItem"> | string
  quantity?: Prisma.IntFilter<"OrderItem"> | number
  priceId?: Prisma.StringFilter<"OrderItem"> | string
  unitPrice?: Prisma.XOR<Prisma.PriceScalarRelationFilter, Prisma.PriceWhereInput>
  order?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>
}, "id">

export type OrderItemOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  priceId?: Prisma.SortOrder
  _count?: Prisma.OrderItemCountOrderByAggregateInput
  _avg?: Prisma.OrderItemAvgOrderByAggregateInput
  _max?: Prisma.OrderItemMaxOrderByAggregateInput
  _min?: Prisma.OrderItemMinOrderByAggregateInput
  _sum?: Prisma.OrderItemSumOrderByAggregateInput
}

export type OrderItemScalarWhereWithAggregatesInput = {
  AND?: Prisma.OrderItemScalarWhereWithAggregatesInput | Prisma.OrderItemScalarWhereWithAggregatesInput[]
  OR?: Prisma.OrderItemScalarWhereWithAggregatesInput[]
  NOT?: Prisma.OrderItemScalarWhereWithAggregatesInput | Prisma.OrderItemScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string
  orderId?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string
  productName?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string
  quantity?: Prisma.IntWithAggregatesFilter<"OrderItem"> | number
  priceId?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string
}

export type OrderItemCreateInput = {
  id?: string
  productName: string
  quantity: number
  unitPrice: Prisma.PriceCreateNestedOneWithoutOrderItemsInput
  order: Prisma.SalesOrderCreateNestedOneWithoutOrderItemsInput
}

export type OrderItemUncheckedCreateInput = {
  id?: string
  orderId: string
  productName: string
  quantity: number
  priceId: string
}

export type OrderItemUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  unitPrice?: Prisma.PriceUpdateOneRequiredWithoutOrderItemsNestedInput
  order?: Prisma.SalesOrderUpdateOneRequiredWithoutOrderItemsNestedInput
}

export type OrderItemUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  priceId?: Prisma.StringFieldUpdateOperationsInput | string
}

export type OrderItemCreateManyInput = {
  id?: string
  orderId: string
  productName: string
  quantity: number
  priceId: string
}

export type OrderItemUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
}

export type OrderItemUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  priceId?: Prisma.StringFieldUpdateOperationsInput | string
}

export type OrderItemListRelationFilter = {
  every?: Prisma.OrderItemWhereInput
  some?: Prisma.OrderItemWhereInput
  none?: Prisma.OrderItemWhereInput
}

export type OrderItemOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type OrderItemCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  priceId?: Prisma.SortOrder
}

export type OrderItemAvgOrderByAggregateInput = {
  quantity?: Prisma.SortOrder
}

export type OrderItemMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  priceId?: Prisma.SortOrder
}

export type OrderItemMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  productName?: Prisma.SortOrder
  quantity?: Prisma.SortOrder
  priceId?: Prisma.SortOrder
}

export type OrderItemSumOrderByAggregateInput = {
  quantity?: Prisma.SortOrder
}

export type OrderItemCreateNestedManyWithoutOrderInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[]
  createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
}

export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[]
  createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
}

export type OrderItemUpdateManyWithoutOrderNestedInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[]
  upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
  createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope
  set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
  updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput[]
  deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[]
}

export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[]
  upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
  createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope
  set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
  updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput[]
  deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[]
}

export type OrderItemCreateNestedManyWithoutUnitPriceInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutUnitPriceInput, Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput> | Prisma.OrderItemCreateWithoutUnitPriceInput[] | Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput | Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput[]
  createMany?: Prisma.OrderItemCreateManyUnitPriceInputEnvelope
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
}

export type OrderItemUncheckedCreateNestedManyWithoutUnitPriceInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutUnitPriceInput, Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput> | Prisma.OrderItemCreateWithoutUnitPriceInput[] | Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput | Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput[]
  createMany?: Prisma.OrderItemCreateManyUnitPriceInputEnvelope
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
}

export type OrderItemUpdateManyWithoutUnitPriceNestedInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutUnitPriceInput, Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput> | Prisma.OrderItemCreateWithoutUnitPriceInput[] | Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput | Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput[]
  upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutUnitPriceInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutUnitPriceInput[]
  createMany?: Prisma.OrderItemCreateManyUnitPriceInputEnvelope
  set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutUnitPriceInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutUnitPriceInput[]
  updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutUnitPriceInput | Prisma.OrderItemUpdateManyWithWhereWithoutUnitPriceInput[]
  deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[]
}

export type OrderItemUncheckedUpdateManyWithoutUnitPriceNestedInput = {
  create?: Prisma.XOR<Prisma.OrderItemCreateWithoutUnitPriceInput, Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput> | Prisma.OrderItemCreateWithoutUnitPriceInput[] | Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput[]
  connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput | Prisma.OrderItemCreateOrConnectWithoutUnitPriceInput[]
  upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutUnitPriceInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutUnitPriceInput[]
  createMany?: Prisma.OrderItemCreateManyUnitPriceInputEnvelope
  set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[]
  update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutUnitPriceInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutUnitPriceInput[]
  updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutUnitPriceInput | Prisma.OrderItemUpdateManyWithWhereWithoutUnitPriceInput[]
  deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[]
}

export type OrderItemCreateWithoutOrderInput = {
  id?: string
  productName: string
  quantity: number
  unitPrice: Prisma.PriceCreateNestedOneWithoutOrderItemsInput
}

export type OrderItemUncheckedCreateWithoutOrderInput = {
  id?: string
  productName: string
  quantity: number
  priceId: string
}

export type OrderItemCreateOrConnectWithoutOrderInput = {
  where: Prisma.OrderItemWhereUniqueInput
  create: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput>
}

export type OrderItemCreateManyOrderInputEnvelope = {
  data: Prisma.OrderItemCreateManyOrderInput | Prisma.OrderItemCreateManyOrderInput[]
  skipDuplicates?: boolean
}

export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
  where: Prisma.OrderItemWhereUniqueInput
  update: Prisma.XOR<Prisma.OrderItemUpdateWithoutOrderInput, Prisma.OrderItemUncheckedUpdateWithoutOrderInput>
  create: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput>
}

export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
  where: Prisma.OrderItemWhereUniqueInput
  data: Prisma.XOR<Prisma.OrderItemUpdateWithoutOrderInput, Prisma.OrderItemUncheckedUpdateWithoutOrderInput>
}

export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
  where: Prisma.OrderItemScalarWhereInput
  data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput>
}

export type OrderItemScalarWhereInput = {
  AND?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[]
  OR?: Prisma.OrderItemScalarWhereInput[]
  NOT?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[]
  id?: Prisma.StringFilter<"OrderItem"> | string
  orderId?: Prisma.StringFilter<"OrderItem"> | string
  productName?: Prisma.StringFilter<"OrderItem"> | string
  quantity?: Prisma.IntFilter<"OrderItem"> | number
  priceId?: Prisma.StringFilter<"OrderItem"> | string
}

export type OrderItemCreateWithoutUnitPriceInput = {
  id?: string
  productName: string
  quantity: number
  order: Prisma.SalesOrderCreateNestedOneWithoutOrderItemsInput
}

export type OrderItemUncheckedCreateWithoutUnitPriceInput = {
  id?: string
  orderId: string
  productName: string
  quantity: number
}

export type OrderItemCreateOrConnectWithoutUnitPriceInput = {
  where: Prisma.OrderItemWhereUniqueInput
  create: Prisma.XOR<Prisma.OrderItemCreateWithoutUnitPriceInput, Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput>
}

export type OrderItemCreateManyUnitPriceInputEnvelope = {
  data: Prisma.OrderItemCreateManyUnitPriceInput | Prisma.OrderItemCreateManyUnitPriceInput[]
  skipDuplicates?: boolean
}

export type OrderItemUpsertWithWhereUniqueWithoutUnitPriceInput = {
  where: Prisma.OrderItemWhereUniqueInput
  update: Prisma.XOR<Prisma.OrderItemUpdateWithoutUnitPriceInput, Prisma.OrderItemUncheckedUpdateWithoutUnitPriceInput>
  create: Prisma.XOR<Prisma.OrderItemCreateWithoutUnitPriceInput, Prisma.OrderItemUncheckedCreateWithoutUnitPriceInput>
}

export type OrderItemUpdateWithWhereUniqueWithoutUnitPriceInput = {
  where: Prisma.OrderItemWhereUniqueInput
  data: Prisma.XOR<Prisma.OrderItemUpdateWithoutUnitPriceInput, Prisma.OrderItemUncheckedUpdateWithoutUnitPriceInput>
}

export type OrderItemUpdateManyWithWhereWithoutUnitPriceInput = {
  where: Prisma.OrderItemScalarWhereInput
  data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutUnitPriceInput>
}

export type OrderItemCreateManyOrderInput = {
  id?: string
  productName: string
  quantity: number
  priceId: string
}

export type OrderItemUpdateWithoutOrderInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  unitPrice?: Prisma.PriceUpdateOneRequiredWithoutOrderItemsNestedInput
}

export type OrderItemUncheckedUpdateWithoutOrderInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  priceId?: Prisma.StringFieldUpdateOperationsInput | string
}

export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  priceId?: Prisma.StringFieldUpdateOperationsInput | string
}

export type OrderItemCreateManyUnitPriceInput = {
  id?: string
  orderId: string
  productName: string
  quantity: number
}

export type OrderItemUpdateWithoutUnitPriceInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
  order?: Prisma.SalesOrderUpdateOneRequiredWithoutOrderItemsNestedInput
}

export type OrderItemUncheckedUpdateWithoutUnitPriceInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
}

export type OrderItemUncheckedUpdateManyWithoutUnitPriceInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  productName?: Prisma.StringFieldUpdateOperationsInput | string
  quantity?: Prisma.IntFieldUpdateOperationsInput | number
}



export type OrderItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  orderId?: boolean
  productName?: boolean
  quantity?: boolean
  priceId?: boolean
  unitPrice?: boolean | Prisma.PriceDefaultArgs<ExtArgs>
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}, ExtArgs["result"]["orderItem"]>

export type OrderItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  orderId?: boolean
  productName?: boolean
  quantity?: boolean
  priceId?: boolean
  unitPrice?: boolean | Prisma.PriceDefaultArgs<ExtArgs>
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}, ExtArgs["result"]["orderItem"]>

export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  orderId?: boolean
  productName?: boolean
  quantity?: boolean
  priceId?: boolean
  unitPrice?: boolean | Prisma.PriceDefaultArgs<ExtArgs>
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}, ExtArgs["result"]["orderItem"]>

export type OrderItemSelectScalar = {
  id?: boolean
  orderId?: boolean
  productName?: boolean
  quantity?: boolean
  priceId?: boolean
}

export type OrderItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "productName" | "quantity" | "priceId", ExtArgs["result"]["orderItem"]>
export type OrderItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  unitPrice?: boolean | Prisma.PriceDefaultArgs<ExtArgs>
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}
export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  unitPrice?: boolean | Prisma.PriceDefaultArgs<ExtArgs>
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}
export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  unitPrice?: boolean | Prisma.PriceDefaultArgs<ExtArgs>
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}

export type $OrderItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "OrderItem"
  objects: {
    unitPrice: Prisma.$PricePayload<ExtArgs>
    order: Prisma.$SalesOrderPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    orderId: string
    productName: string
    quantity: number
    priceId: string
  }, ExtArgs["result"]["orderItem"]>
  composites: {}
}

export type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderItemPayload, S>

export type OrderItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderItemCountAggregateInputType | true
  }

export interface OrderItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
  
  findUnique<T extends OrderItemFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends OrderItemFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends OrderItemFindManyArgs>(args?: Prisma.SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends OrderItemCreateArgs>(args: Prisma.SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends OrderItemCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends OrderItemDeleteArgs>(args: Prisma.SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends OrderItemUpdateArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends OrderItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends OrderItemUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends OrderItemUpsertArgs>(args: Prisma.SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends OrderItemCountArgs>(
    args?: Prisma.Subset<T, OrderItemCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], OrderItemCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends OrderItemAggregateArgs>(args: Prisma.Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

  
  groupBy<
    T extends OrderItemGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: OrderItemGroupByArgs['orderBy'] }
      : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: OrderItemFieldRefs;
}


export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  unitPrice<T extends Prisma.PriceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PriceDefaultArgs<ExtArgs>>): Prisma.Prisma__PriceClient<runtime.Types.Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  order<T extends Prisma.SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface OrderItemFieldRefs {
  readonly id: Prisma.FieldRef<"OrderItem", 'String'>
  readonly orderId: Prisma.FieldRef<"OrderItem", 'String'>
  readonly productName: Prisma.FieldRef<"OrderItem", 'String'>
  readonly quantity: Prisma.FieldRef<"OrderItem", 'Int'>
  readonly priceId: Prisma.FieldRef<"OrderItem", 'String'>
}
    



export type OrderItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
  
  where: Prisma.OrderItemWhereUniqueInput
}


export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
  
  where: Prisma.OrderItemWhereUniqueInput
}


export type OrderItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type OrderItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type OrderItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type OrderItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OrderItemCreateInput, Prisma.OrderItemUncheckedCreateInput>
}


export type OrderItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.OrderItemCreateManyInput | Prisma.OrderItemCreateManyInput[]
  skipDuplicates?: boolean
}


export type OrderItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  data: Prisma.OrderItemCreateManyInput | Prisma.OrderItemCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
}


export type OrderItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OrderItemUpdateInput, Prisma.OrderItemUncheckedUpdateInput>
  
  where: Prisma.OrderItemWhereUniqueInput
}


export type OrderItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyInput>
  
  where?: Prisma.OrderItemWhereInput
  
  limit?: number
}


export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyInput>
  
  where?: Prisma.OrderItemWhereInput
  
  limit?: number
  
  include?: Prisma.OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type OrderItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
  
  where: Prisma.OrderItemWhereUniqueInput
  
  create: Prisma.XOR<Prisma.OrderItemCreateInput, Prisma.OrderItemUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.OrderItemUpdateInput, Prisma.OrderItemUncheckedUpdateInput>
}


export type OrderItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
  
  where: Prisma.OrderItemWhereUniqueInput
}


export type OrderItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.OrderItemWhereInput
  
  limit?: number
}


export type OrderItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.OrderItemSelect<ExtArgs> | null
  
  omit?: Prisma.OrderItemOmit<ExtArgs> | null
  
  include?: Prisma.OrderItemInclude<ExtArgs> | null
}
