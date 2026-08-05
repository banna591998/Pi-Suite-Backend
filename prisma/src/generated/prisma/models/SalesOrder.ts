





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type SalesOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$SalesOrderPayload>

export type AggregateSalesOrder = {
  _count: SalesOrderCountAggregateOutputType | null
  _avg: SalesOrderAvgAggregateOutputType | null
  _sum: SalesOrderSumAggregateOutputType | null
  _min: SalesOrderMinAggregateOutputType | null
  _max: SalesOrderMaxAggregateOutputType | null
}

export type SalesOrderAvgAggregateOutputType = {
  totalAmount: number | null
}

export type SalesOrderSumAggregateOutputType = {
  totalAmount: number | null
}

export type SalesOrderMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  orderNumber: string | null
  channel: $Enums.SalesChannel | null
  customerName: string | null
  totalAmount: number | null
  isBackorder: boolean | null
  status: $Enums.OrderStatus | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type SalesOrderMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  orderNumber: string | null
  channel: $Enums.SalesChannel | null
  customerName: string | null
  totalAmount: number | null
  isBackorder: boolean | null
  status: $Enums.OrderStatus | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type SalesOrderCountAggregateOutputType = {
  id: number
  tenantId: number
  orderNumber: number
  channel: number
  customerName: number
  totalAmount: number
  isBackorder: number
  status: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type SalesOrderAvgAggregateInputType = {
  totalAmount?: true
}

export type SalesOrderSumAggregateInputType = {
  totalAmount?: true
}

export type SalesOrderMinAggregateInputType = {
  id?: true
  tenantId?: true
  orderNumber?: true
  channel?: true
  customerName?: true
  totalAmount?: true
  isBackorder?: true
  status?: true
  createdAt?: true
  updatedAt?: true
}

export type SalesOrderMaxAggregateInputType = {
  id?: true
  tenantId?: true
  orderNumber?: true
  channel?: true
  customerName?: true
  totalAmount?: true
  isBackorder?: true
  status?: true
  createdAt?: true
  updatedAt?: true
}

export type SalesOrderCountAggregateInputType = {
  id?: true
  tenantId?: true
  orderNumber?: true
  channel?: true
  customerName?: true
  totalAmount?: true
  isBackorder?: true
  status?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type SalesOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SalesOrderWhereInput
  
  orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.SalesOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | SalesOrderCountAggregateInputType
  
  _avg?: SalesOrderAvgAggregateInputType
  
  _sum?: SalesOrderSumAggregateInputType
  
  _min?: SalesOrderMinAggregateInputType
  
  _max?: SalesOrderMaxAggregateInputType
}

export type GetSalesOrderAggregateType<T extends SalesOrderAggregateArgs> = {
      [P in keyof T & keyof AggregateSalesOrder]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateSalesOrder[P]>
    : Prisma.GetScalarType<T[P], AggregateSalesOrder[P]>
}




export type SalesOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SalesOrderWhereInput
  orderBy?: Prisma.SalesOrderOrderByWithAggregationInput | Prisma.SalesOrderOrderByWithAggregationInput[]
  by: Prisma.SalesOrderScalarFieldEnum[] | Prisma.SalesOrderScalarFieldEnum
  having?: Prisma.SalesOrderScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: SalesOrderCountAggregateInputType | true
  _avg?: SalesOrderAvgAggregateInputType
  _sum?: SalesOrderSumAggregateInputType
  _min?: SalesOrderMinAggregateInputType
  _max?: SalesOrderMaxAggregateInputType
}

export type SalesOrderGroupByOutputType = {
  id: string
  tenantId: string
  orderNumber: string
  channel: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder: boolean
  status: $Enums.OrderStatus
  createdAt: Date
  updatedAt: Date
  _count: SalesOrderCountAggregateOutputType | null
  _avg: SalesOrderAvgAggregateOutputType | null
  _sum: SalesOrderSumAggregateOutputType | null
  _min: SalesOrderMinAggregateOutputType | null
  _max: SalesOrderMaxAggregateOutputType | null
}

export type GetSalesOrderGroupByPayload<T extends SalesOrderGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<SalesOrderGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof SalesOrderGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
      }
    >
  >



export type SalesOrderWhereInput = {
  AND?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[]
  OR?: Prisma.SalesOrderWhereInput[]
  NOT?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[]
  id?: Prisma.StringFilter<"SalesOrder"> | string
  tenantId?: Prisma.StringFilter<"SalesOrder"> | string
  orderNumber?: Prisma.StringFilter<"SalesOrder"> | string
  channel?: Prisma.EnumSalesChannelFilter<"SalesOrder"> | $Enums.SalesChannel
  customerName?: Prisma.StringFilter<"SalesOrder"> | string
  totalAmount?: Prisma.FloatFilter<"SalesOrder"> | number
  isBackorder?: Prisma.BoolFilter<"SalesOrder"> | boolean
  status?: Prisma.EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string
  orderItems?: Prisma.OrderItemListRelationFilter
  invoices?: Prisma.InvoiceListRelationFilter
}

export type SalesOrderOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  channel?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  isBackorder?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  orderItems?: Prisma.OrderItemOrderByRelationAggregateInput
  invoices?: Prisma.InvoiceOrderByRelationAggregateInput
}

export type SalesOrderWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  orderNumber?: string
  AND?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[]
  OR?: Prisma.SalesOrderWhereInput[]
  NOT?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[]
  tenantId?: Prisma.StringFilter<"SalesOrder"> | string
  channel?: Prisma.EnumSalesChannelFilter<"SalesOrder"> | $Enums.SalesChannel
  customerName?: Prisma.StringFilter<"SalesOrder"> | string
  totalAmount?: Prisma.FloatFilter<"SalesOrder"> | number
  isBackorder?: Prisma.BoolFilter<"SalesOrder"> | boolean
  status?: Prisma.EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string
  orderItems?: Prisma.OrderItemListRelationFilter
  invoices?: Prisma.InvoiceListRelationFilter
}, "id" | "orderNumber">

export type SalesOrderOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  channel?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  isBackorder?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.SalesOrderCountOrderByAggregateInput
  _avg?: Prisma.SalesOrderAvgOrderByAggregateInput
  _max?: Prisma.SalesOrderMaxOrderByAggregateInput
  _min?: Prisma.SalesOrderMinOrderByAggregateInput
  _sum?: Prisma.SalesOrderSumOrderByAggregateInput
}

export type SalesOrderScalarWhereWithAggregatesInput = {
  AND?: Prisma.SalesOrderScalarWhereWithAggregatesInput | Prisma.SalesOrderScalarWhereWithAggregatesInput[]
  OR?: Prisma.SalesOrderScalarWhereWithAggregatesInput[]
  NOT?: Prisma.SalesOrderScalarWhereWithAggregatesInput | Prisma.SalesOrderScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"SalesOrder"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"SalesOrder"> | string
  orderNumber?: Prisma.StringWithAggregatesFilter<"SalesOrder"> | string
  channel?: Prisma.EnumSalesChannelWithAggregatesFilter<"SalesOrder"> | $Enums.SalesChannel
  customerName?: Prisma.StringWithAggregatesFilter<"SalesOrder"> | string
  totalAmount?: Prisma.FloatWithAggregatesFilter<"SalesOrder"> | number
  isBackorder?: Prisma.BoolWithAggregatesFilter<"SalesOrder"> | boolean
  status?: Prisma.EnumOrderStatusWithAggregatesFilter<"SalesOrder"> | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
}

export type SalesOrderCreateInput = {
  id?: string
  tenantId: string
  orderNumber: string
  channel?: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder?: boolean
  status?: $Enums.OrderStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput
  invoices?: Prisma.InvoiceCreateNestedManyWithoutOrderInput
}

export type SalesOrderUncheckedCreateInput = {
  id?: string
  tenantId: string
  orderNumber: string
  channel?: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder?: boolean
  status?: $Enums.OrderStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput
  invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrderInput
}

export type SalesOrderUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  orderItems?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput
  invoices?: Prisma.InvoiceUpdateManyWithoutOrderNestedInput
}

export type SalesOrderUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrderNestedInput
}

export type SalesOrderCreateManyInput = {
  id?: string
  tenantId: string
  orderNumber: string
  channel?: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder?: boolean
  status?: $Enums.OrderStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type SalesOrderUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SalesOrderUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SalesOrderCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  channel?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  isBackorder?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type SalesOrderAvgOrderByAggregateInput = {
  totalAmount?: Prisma.SortOrder
}

export type SalesOrderMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  channel?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  isBackorder?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type SalesOrderMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  orderNumber?: Prisma.SortOrder
  channel?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  isBackorder?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type SalesOrderSumOrderByAggregateInput = {
  totalAmount?: Prisma.SortOrder
}

export type SalesOrderScalarRelationFilter = {
  is?: Prisma.SalesOrderWhereInput
  isNot?: Prisma.SalesOrderWhereInput
}

export type EnumSalesChannelFieldUpdateOperationsInput = {
  set?: $Enums.SalesChannel
}

export type EnumOrderStatusFieldUpdateOperationsInput = {
  set?: $Enums.OrderStatus
}

export type SalesOrderCreateNestedOneWithoutOrderItemsInput = {
  create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutOrderItemsInput, Prisma.SalesOrderUncheckedCreateWithoutOrderItemsInput>
  connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutOrderItemsInput
  connect?: Prisma.SalesOrderWhereUniqueInput
}

export type SalesOrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
  create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutOrderItemsInput, Prisma.SalesOrderUncheckedCreateWithoutOrderItemsInput>
  connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutOrderItemsInput
  upsert?: Prisma.SalesOrderUpsertWithoutOrderItemsInput
  connect?: Prisma.SalesOrderWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.SalesOrderUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.SalesOrderUpdateWithoutOrderItemsInput>, Prisma.SalesOrderUncheckedUpdateWithoutOrderItemsInput>
}

export type SalesOrderCreateNestedOneWithoutInvoicesInput = {
  create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutInvoicesInput, Prisma.SalesOrderUncheckedCreateWithoutInvoicesInput>
  connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutInvoicesInput
  connect?: Prisma.SalesOrderWhereUniqueInput
}

export type SalesOrderUpdateOneRequiredWithoutInvoicesNestedInput = {
  create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutInvoicesInput, Prisma.SalesOrderUncheckedCreateWithoutInvoicesInput>
  connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutInvoicesInput
  upsert?: Prisma.SalesOrderUpsertWithoutInvoicesInput
  connect?: Prisma.SalesOrderWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.SalesOrderUpdateToOneWithWhereWithoutInvoicesInput, Prisma.SalesOrderUpdateWithoutInvoicesInput>, Prisma.SalesOrderUncheckedUpdateWithoutInvoicesInput>
}

export type SalesOrderCreateWithoutOrderItemsInput = {
  id?: string
  tenantId: string
  orderNumber: string
  channel?: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder?: boolean
  status?: $Enums.OrderStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  invoices?: Prisma.InvoiceCreateNestedManyWithoutOrderInput
}

export type SalesOrderUncheckedCreateWithoutOrderItemsInput = {
  id?: string
  tenantId: string
  orderNumber: string
  channel?: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder?: boolean
  status?: $Enums.OrderStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrderInput
}

export type SalesOrderCreateOrConnectWithoutOrderItemsInput = {
  where: Prisma.SalesOrderWhereUniqueInput
  create: Prisma.XOR<Prisma.SalesOrderCreateWithoutOrderItemsInput, Prisma.SalesOrderUncheckedCreateWithoutOrderItemsInput>
}

export type SalesOrderUpsertWithoutOrderItemsInput = {
  update: Prisma.XOR<Prisma.SalesOrderUpdateWithoutOrderItemsInput, Prisma.SalesOrderUncheckedUpdateWithoutOrderItemsInput>
  create: Prisma.XOR<Prisma.SalesOrderCreateWithoutOrderItemsInput, Prisma.SalesOrderUncheckedCreateWithoutOrderItemsInput>
  where?: Prisma.SalesOrderWhereInput
}

export type SalesOrderUpdateToOneWithWhereWithoutOrderItemsInput = {
  where?: Prisma.SalesOrderWhereInput
  data: Prisma.XOR<Prisma.SalesOrderUpdateWithoutOrderItemsInput, Prisma.SalesOrderUncheckedUpdateWithoutOrderItemsInput>
}

export type SalesOrderUpdateWithoutOrderItemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  invoices?: Prisma.InvoiceUpdateManyWithoutOrderNestedInput
}

export type SalesOrderUncheckedUpdateWithoutOrderItemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrderNestedInput
}

export type SalesOrderCreateWithoutInvoicesInput = {
  id?: string
  tenantId: string
  orderNumber: string
  channel?: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder?: boolean
  status?: $Enums.OrderStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput
}

export type SalesOrderUncheckedCreateWithoutInvoicesInput = {
  id?: string
  tenantId: string
  orderNumber: string
  channel?: $Enums.SalesChannel
  customerName: string
  totalAmount: number
  isBackorder?: boolean
  status?: $Enums.OrderStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput
}

export type SalesOrderCreateOrConnectWithoutInvoicesInput = {
  where: Prisma.SalesOrderWhereUniqueInput
  create: Prisma.XOR<Prisma.SalesOrderCreateWithoutInvoicesInput, Prisma.SalesOrderUncheckedCreateWithoutInvoicesInput>
}

export type SalesOrderUpsertWithoutInvoicesInput = {
  update: Prisma.XOR<Prisma.SalesOrderUpdateWithoutInvoicesInput, Prisma.SalesOrderUncheckedUpdateWithoutInvoicesInput>
  create: Prisma.XOR<Prisma.SalesOrderCreateWithoutInvoicesInput, Prisma.SalesOrderUncheckedCreateWithoutInvoicesInput>
  where?: Prisma.SalesOrderWhereInput
}

export type SalesOrderUpdateToOneWithWhereWithoutInvoicesInput = {
  where?: Prisma.SalesOrderWhereInput
  data: Prisma.XOR<Prisma.SalesOrderUpdateWithoutInvoicesInput, Prisma.SalesOrderUncheckedUpdateWithoutInvoicesInput>
}

export type SalesOrderUpdateWithoutInvoicesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  orderItems?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput
}

export type SalesOrderUncheckedUpdateWithoutInvoicesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  orderNumber?: Prisma.StringFieldUpdateOperationsInput | string
  channel?: Prisma.EnumSalesChannelFieldUpdateOperationsInput | $Enums.SalesChannel
  customerName?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  isBackorder?: Prisma.BoolFieldUpdateOperationsInput | boolean
  status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput
}




export type SalesOrderCountOutputType = {
  orderItems: number
  invoices: number
}

export type SalesOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  orderItems?: boolean | SalesOrderCountOutputTypeCountOrderItemsArgs
  invoices?: boolean | SalesOrderCountOutputTypeCountInvoicesArgs
}


export type SalesOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderCountOutputTypeSelect<ExtArgs> | null
}


export type SalesOrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.OrderItemWhereInput
}


export type SalesOrderCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.InvoiceWhereInput
}


export type SalesOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  channel?: boolean
  customerName?: boolean
  totalAmount?: boolean
  isBackorder?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  orderItems?: boolean | Prisma.SalesOrder$orderItemsArgs<ExtArgs>
  invoices?: boolean | Prisma.SalesOrder$invoicesArgs<ExtArgs>
  _count?: boolean | Prisma.SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["salesOrder"]>

export type SalesOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  channel?: boolean
  customerName?: boolean
  totalAmount?: boolean
  isBackorder?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["salesOrder"]>

export type SalesOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  channel?: boolean
  customerName?: boolean
  totalAmount?: boolean
  isBackorder?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["salesOrder"]>

export type SalesOrderSelectScalar = {
  id?: boolean
  tenantId?: boolean
  orderNumber?: boolean
  channel?: boolean
  customerName?: boolean
  totalAmount?: boolean
  isBackorder?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type SalesOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "orderNumber" | "channel" | "customerName" | "totalAmount" | "isBackorder" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["salesOrder"]>
export type SalesOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  orderItems?: boolean | Prisma.SalesOrder$orderItemsArgs<ExtArgs>
  invoices?: boolean | Prisma.SalesOrder$invoicesArgs<ExtArgs>
  _count?: boolean | Prisma.SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
}
export type SalesOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type SalesOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $SalesOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "SalesOrder"
  objects: {
    orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    invoices: Prisma.$InvoicePayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    orderNumber: string
    channel: $Enums.SalesChannel
    customerName: string
    totalAmount: number
    isBackorder: boolean
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["salesOrder"]>
  composites: {}
}

export type SalesOrderGetPayload<S extends boolean | null | undefined | SalesOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload, S>

export type SalesOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<SalesOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalesOrderCountAggregateInputType | true
  }

export interface SalesOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrder'], meta: { name: 'SalesOrder' } }
  
  findUnique<T extends SalesOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, SalesOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends SalesOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalesOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends SalesOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, SalesOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends SalesOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalesOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends SalesOrderFindManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends SalesOrderCreateArgs>(args: Prisma.SelectSubset<T, SalesOrderCreateArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends SalesOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends SalesOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalesOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends SalesOrderDeleteArgs>(args: Prisma.SelectSubset<T, SalesOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends SalesOrderUpdateArgs>(args: Prisma.SelectSubset<T, SalesOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends SalesOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends SalesOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, SalesOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends SalesOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalesOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends SalesOrderUpsertArgs>(args: Prisma.SelectSubset<T, SalesOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends SalesOrderCountArgs>(
    args?: Prisma.Subset<T, SalesOrderCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], SalesOrderCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends SalesOrderAggregateArgs>(args: Prisma.Subset<T, SalesOrderAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderAggregateType<T>>

  
  groupBy<
    T extends SalesOrderGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: SalesOrderGroupByArgs['orderBy'] }
      : { orderBy?: SalesOrderGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, SalesOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: SalesOrderFieldRefs;
}


export interface Prisma__SalesOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  orderItems<T extends Prisma.SalesOrder$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrder$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  invoices<T extends Prisma.SalesOrder$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrder$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface SalesOrderFieldRefs {
  readonly id: Prisma.FieldRef<"SalesOrder", 'String'>
  readonly tenantId: Prisma.FieldRef<"SalesOrder", 'String'>
  readonly orderNumber: Prisma.FieldRef<"SalesOrder", 'String'>
  readonly channel: Prisma.FieldRef<"SalesOrder", 'SalesChannel'>
  readonly customerName: Prisma.FieldRef<"SalesOrder", 'String'>
  readonly totalAmount: Prisma.FieldRef<"SalesOrder", 'Float'>
  readonly isBackorder: Prisma.FieldRef<"SalesOrder", 'Boolean'>
  readonly status: Prisma.FieldRef<"SalesOrder", 'OrderStatus'>
  readonly createdAt: Prisma.FieldRef<"SalesOrder", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"SalesOrder", 'DateTime'>
}
    



export type SalesOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  where: Prisma.SalesOrderWhereUniqueInput
}


export type SalesOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  where: Prisma.SalesOrderWhereUniqueInput
}


export type SalesOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  where?: Prisma.SalesOrderWhereInput
  
  orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.SalesOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SalesOrderScalarFieldEnum | Prisma.SalesOrderScalarFieldEnum[]
}


export type SalesOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  where?: Prisma.SalesOrderWhereInput
  
  orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.SalesOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SalesOrderScalarFieldEnum | Prisma.SalesOrderScalarFieldEnum[]
}


export type SalesOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  where?: Prisma.SalesOrderWhereInput
  
  orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.SalesOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SalesOrderScalarFieldEnum | Prisma.SalesOrderScalarFieldEnum[]
}


export type SalesOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SalesOrderCreateInput, Prisma.SalesOrderUncheckedCreateInput>
}


export type SalesOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.SalesOrderCreateManyInput | Prisma.SalesOrderCreateManyInput[]
  skipDuplicates?: boolean
}


export type SalesOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  data: Prisma.SalesOrderCreateManyInput | Prisma.SalesOrderCreateManyInput[]
  skipDuplicates?: boolean
}


export type SalesOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SalesOrderUpdateInput, Prisma.SalesOrderUncheckedUpdateInput>
  
  where: Prisma.SalesOrderWhereUniqueInput
}


export type SalesOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.SalesOrderUpdateManyMutationInput, Prisma.SalesOrderUncheckedUpdateManyInput>
  
  where?: Prisma.SalesOrderWhereInput
  
  limit?: number
}


export type SalesOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SalesOrderUpdateManyMutationInput, Prisma.SalesOrderUncheckedUpdateManyInput>
  
  where?: Prisma.SalesOrderWhereInput
  
  limit?: number
}


export type SalesOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  where: Prisma.SalesOrderWhereUniqueInput
  
  create: Prisma.XOR<Prisma.SalesOrderCreateInput, Prisma.SalesOrderUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.SalesOrderUpdateInput, Prisma.SalesOrderUncheckedUpdateInput>
}


export type SalesOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
  
  where: Prisma.SalesOrderWhereUniqueInput
}


export type SalesOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SalesOrderWhereInput
  
  limit?: number
}


export type SalesOrder$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type SalesOrder$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
  where?: Prisma.InvoiceWhereInput
  orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[]
  cursor?: Prisma.InvoiceWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[]
}


export type SalesOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SalesOrderSelect<ExtArgs> | null
  
  omit?: Prisma.SalesOrderOmit<ExtArgs> | null
  
  include?: Prisma.SalesOrderInclude<ExtArgs> | null
}
