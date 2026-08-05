





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>

export type AggregateInvoice = {
  _count: InvoiceCountAggregateOutputType | null
  _avg: InvoiceAvgAggregateOutputType | null
  _sum: InvoiceSumAggregateOutputType | null
  _min: InvoiceMinAggregateOutputType | null
  _max: InvoiceMaxAggregateOutputType | null
}

export type InvoiceAvgAggregateOutputType = {
  taxAmount: number | null
  discountAmount: number | null
  netAmount: number | null
}

export type InvoiceSumAggregateOutputType = {
  taxAmount: number | null
  discountAmount: number | null
  netAmount: number | null
}

export type InvoiceMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  invoiceNumber: string | null
  orderId: string | null
  taxAmount: number | null
  discountAmount: number | null
  netAmount: number | null
  createdAt: Date | null
  subscription: string | null
}

export type InvoiceMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  invoiceNumber: string | null
  orderId: string | null
  taxAmount: number | null
  discountAmount: number | null
  netAmount: number | null
  createdAt: Date | null
  subscription: string | null
}

export type InvoiceCountAggregateOutputType = {
  id: number
  tenantId: number
  invoiceNumber: number
  orderId: number
  taxAmount: number
  discountAmount: number
  netAmount: number
  createdAt: number
  subscription: number
  _all: number
}


export type InvoiceAvgAggregateInputType = {
  taxAmount?: true
  discountAmount?: true
  netAmount?: true
}

export type InvoiceSumAggregateInputType = {
  taxAmount?: true
  discountAmount?: true
  netAmount?: true
}

export type InvoiceMinAggregateInputType = {
  id?: true
  tenantId?: true
  invoiceNumber?: true
  orderId?: true
  taxAmount?: true
  discountAmount?: true
  netAmount?: true
  createdAt?: true
  subscription?: true
}

export type InvoiceMaxAggregateInputType = {
  id?: true
  tenantId?: true
  invoiceNumber?: true
  orderId?: true
  taxAmount?: true
  discountAmount?: true
  netAmount?: true
  createdAt?: true
  subscription?: true
}

export type InvoiceCountAggregateInputType = {
  id?: true
  tenantId?: true
  invoiceNumber?: true
  orderId?: true
  taxAmount?: true
  discountAmount?: true
  netAmount?: true
  createdAt?: true
  subscription?: true
  _all?: true
}

export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.InvoiceWhereInput
  
  orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[]
  
  cursor?: Prisma.InvoiceWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | InvoiceCountAggregateInputType
  
  _avg?: InvoiceAvgAggregateInputType
  
  _sum?: InvoiceSumAggregateInputType
  
  _min?: InvoiceMinAggregateInputType
  
  _max?: InvoiceMaxAggregateInputType
}

export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
      [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateInvoice[P]>
    : Prisma.GetScalarType<T[P], AggregateInvoice[P]>
}




export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.InvoiceWhereInput
  orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[]
  by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum
  having?: Prisma.InvoiceScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: InvoiceCountAggregateInputType | true
  _avg?: InvoiceAvgAggregateInputType
  _sum?: InvoiceSumAggregateInputType
  _min?: InvoiceMinAggregateInputType
  _max?: InvoiceMaxAggregateInputType
}

export type InvoiceGroupByOutputType = {
  id: string
  tenantId: string
  invoiceNumber: string
  orderId: string
  taxAmount: number
  discountAmount: number
  netAmount: number
  createdAt: Date
  subscription: string
  _count: InvoiceCountAggregateOutputType | null
  _avg: InvoiceAvgAggregateOutputType | null
  _sum: InvoiceSumAggregateOutputType | null
  _min: InvoiceMinAggregateOutputType | null
  _max: InvoiceMaxAggregateOutputType | null
}

export type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>
      }
    >
  >



export type InvoiceWhereInput = {
  AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[]
  OR?: Prisma.InvoiceWhereInput[]
  NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[]
  id?: Prisma.StringFilter<"Invoice"> | string
  tenantId?: Prisma.StringFilter<"Invoice"> | string
  invoiceNumber?: Prisma.StringFilter<"Invoice"> | string
  orderId?: Prisma.StringFilter<"Invoice"> | string
  taxAmount?: Prisma.FloatFilter<"Invoice"> | number
  discountAmount?: Prisma.FloatFilter<"Invoice"> | number
  netAmount?: Prisma.FloatFilter<"Invoice"> | number
  createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string
  subscription?: Prisma.StringFilter<"Invoice"> | string
  order?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>
}

export type InvoiceOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  invoiceNumber?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  taxAmount?: Prisma.SortOrder
  discountAmount?: Prisma.SortOrder
  netAmount?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  subscription?: Prisma.SortOrder
  order?: Prisma.SalesOrderOrderByWithRelationInput
}

export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  invoiceNumber?: string
  AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[]
  OR?: Prisma.InvoiceWhereInput[]
  NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[]
  tenantId?: Prisma.StringFilter<"Invoice"> | string
  orderId?: Prisma.StringFilter<"Invoice"> | string
  taxAmount?: Prisma.FloatFilter<"Invoice"> | number
  discountAmount?: Prisma.FloatFilter<"Invoice"> | number
  netAmount?: Prisma.FloatFilter<"Invoice"> | number
  createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string
  subscription?: Prisma.StringFilter<"Invoice"> | string
  order?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>
}, "id" | "invoiceNumber">

export type InvoiceOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  invoiceNumber?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  taxAmount?: Prisma.SortOrder
  discountAmount?: Prisma.SortOrder
  netAmount?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  subscription?: Prisma.SortOrder
  _count?: Prisma.InvoiceCountOrderByAggregateInput
  _avg?: Prisma.InvoiceAvgOrderByAggregateInput
  _max?: Prisma.InvoiceMaxOrderByAggregateInput
  _min?: Prisma.InvoiceMinOrderByAggregateInput
  _sum?: Prisma.InvoiceSumOrderByAggregateInput
}

export type InvoiceScalarWhereWithAggregatesInput = {
  AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[]
  OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[]
  NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Invoice"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string
  invoiceNumber?: Prisma.StringWithAggregatesFilter<"Invoice"> | string
  orderId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string
  taxAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number
  discountAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number
  netAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  subscription?: Prisma.StringWithAggregatesFilter<"Invoice"> | string
}

export type InvoiceCreateInput = {
  id?: string
  tenantId: string
  invoiceNumber: string
  taxAmount: number
  discountAmount?: number
  netAmount: number
  createdAt?: Date | string
  subscription: string
  order: Prisma.SalesOrderCreateNestedOneWithoutInvoicesInput
}

export type InvoiceUncheckedCreateInput = {
  id?: string
  tenantId: string
  invoiceNumber: string
  orderId: string
  taxAmount: number
  discountAmount?: number
  netAmount: number
  createdAt?: Date | string
  subscription: string
}

export type InvoiceUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string
  taxAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  discountAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  netAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  subscription?: Prisma.StringFieldUpdateOperationsInput | string
  order?: Prisma.SalesOrderUpdateOneRequiredWithoutInvoicesNestedInput
}

export type InvoiceUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  taxAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  discountAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  netAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  subscription?: Prisma.StringFieldUpdateOperationsInput | string
}

export type InvoiceCreateManyInput = {
  id?: string
  tenantId: string
  invoiceNumber: string
  orderId: string
  taxAmount: number
  discountAmount?: number
  netAmount: number
  createdAt?: Date | string
  subscription: string
}

export type InvoiceUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string
  taxAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  discountAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  netAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  subscription?: Prisma.StringFieldUpdateOperationsInput | string
}

export type InvoiceUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string
  orderId?: Prisma.StringFieldUpdateOperationsInput | string
  taxAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  discountAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  netAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  subscription?: Prisma.StringFieldUpdateOperationsInput | string
}

export type InvoiceListRelationFilter = {
  every?: Prisma.InvoiceWhereInput
  some?: Prisma.InvoiceWhereInput
  none?: Prisma.InvoiceWhereInput
}

export type InvoiceOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type InvoiceCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  invoiceNumber?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  taxAmount?: Prisma.SortOrder
  discountAmount?: Prisma.SortOrder
  netAmount?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  subscription?: Prisma.SortOrder
}

export type InvoiceAvgOrderByAggregateInput = {
  taxAmount?: Prisma.SortOrder
  discountAmount?: Prisma.SortOrder
  netAmount?: Prisma.SortOrder
}

export type InvoiceMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  invoiceNumber?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  taxAmount?: Prisma.SortOrder
  discountAmount?: Prisma.SortOrder
  netAmount?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  subscription?: Prisma.SortOrder
}

export type InvoiceMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  invoiceNumber?: Prisma.SortOrder
  orderId?: Prisma.SortOrder
  taxAmount?: Prisma.SortOrder
  discountAmount?: Prisma.SortOrder
  netAmount?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  subscription?: Prisma.SortOrder
}

export type InvoiceSumOrderByAggregateInput = {
  taxAmount?: Prisma.SortOrder
  discountAmount?: Prisma.SortOrder
  netAmount?: Prisma.SortOrder
}

export type InvoiceCreateNestedManyWithoutOrderInput = {
  create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrderInput, Prisma.InvoiceUncheckedCreateWithoutOrderInput> | Prisma.InvoiceCreateWithoutOrderInput[] | Prisma.InvoiceUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrderInput | Prisma.InvoiceCreateOrConnectWithoutOrderInput[]
  createMany?: Prisma.InvoiceCreateManyOrderInputEnvelope
  connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
}

export type InvoiceUncheckedCreateNestedManyWithoutOrderInput = {
  create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrderInput, Prisma.InvoiceUncheckedCreateWithoutOrderInput> | Prisma.InvoiceCreateWithoutOrderInput[] | Prisma.InvoiceUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrderInput | Prisma.InvoiceCreateOrConnectWithoutOrderInput[]
  createMany?: Prisma.InvoiceCreateManyOrderInputEnvelope
  connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
}

export type InvoiceUpdateManyWithoutOrderNestedInput = {
  create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrderInput, Prisma.InvoiceUncheckedCreateWithoutOrderInput> | Prisma.InvoiceCreateWithoutOrderInput[] | Prisma.InvoiceUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrderInput | Prisma.InvoiceCreateOrConnectWithoutOrderInput[]
  upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutOrderInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutOrderInput[]
  createMany?: Prisma.InvoiceCreateManyOrderInputEnvelope
  set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutOrderInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutOrderInput[]
  updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutOrderInput | Prisma.InvoiceUpdateManyWithWhereWithoutOrderInput[]
  deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[]
}

export type InvoiceUncheckedUpdateManyWithoutOrderNestedInput = {
  create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrderInput, Prisma.InvoiceUncheckedCreateWithoutOrderInput> | Prisma.InvoiceCreateWithoutOrderInput[] | Prisma.InvoiceUncheckedCreateWithoutOrderInput[]
  connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrderInput | Prisma.InvoiceCreateOrConnectWithoutOrderInput[]
  upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutOrderInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutOrderInput[]
  createMany?: Prisma.InvoiceCreateManyOrderInputEnvelope
  set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[]
  update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutOrderInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutOrderInput[]
  updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutOrderInput | Prisma.InvoiceUpdateManyWithWhereWithoutOrderInput[]
  deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[]
}

export type InvoiceCreateWithoutOrderInput = {
  id?: string
  tenantId: string
  invoiceNumber: string
  taxAmount: number
  discountAmount?: number
  netAmount: number
  createdAt?: Date | string
  subscription: string
}

export type InvoiceUncheckedCreateWithoutOrderInput = {
  id?: string
  tenantId: string
  invoiceNumber: string
  taxAmount: number
  discountAmount?: number
  netAmount: number
  createdAt?: Date | string
  subscription: string
}

export type InvoiceCreateOrConnectWithoutOrderInput = {
  where: Prisma.InvoiceWhereUniqueInput
  create: Prisma.XOR<Prisma.InvoiceCreateWithoutOrderInput, Prisma.InvoiceUncheckedCreateWithoutOrderInput>
}

export type InvoiceCreateManyOrderInputEnvelope = {
  data: Prisma.InvoiceCreateManyOrderInput | Prisma.InvoiceCreateManyOrderInput[]
  skipDuplicates?: boolean
}

export type InvoiceUpsertWithWhereUniqueWithoutOrderInput = {
  where: Prisma.InvoiceWhereUniqueInput
  update: Prisma.XOR<Prisma.InvoiceUpdateWithoutOrderInput, Prisma.InvoiceUncheckedUpdateWithoutOrderInput>
  create: Prisma.XOR<Prisma.InvoiceCreateWithoutOrderInput, Prisma.InvoiceUncheckedCreateWithoutOrderInput>
}

export type InvoiceUpdateWithWhereUniqueWithoutOrderInput = {
  where: Prisma.InvoiceWhereUniqueInput
  data: Prisma.XOR<Prisma.InvoiceUpdateWithoutOrderInput, Prisma.InvoiceUncheckedUpdateWithoutOrderInput>
}

export type InvoiceUpdateManyWithWhereWithoutOrderInput = {
  where: Prisma.InvoiceScalarWhereInput
  data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutOrderInput>
}

export type InvoiceScalarWhereInput = {
  AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[]
  OR?: Prisma.InvoiceScalarWhereInput[]
  NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[]
  id?: Prisma.StringFilter<"Invoice"> | string
  tenantId?: Prisma.StringFilter<"Invoice"> | string
  invoiceNumber?: Prisma.StringFilter<"Invoice"> | string
  orderId?: Prisma.StringFilter<"Invoice"> | string
  taxAmount?: Prisma.FloatFilter<"Invoice"> | number
  discountAmount?: Prisma.FloatFilter<"Invoice"> | number
  netAmount?: Prisma.FloatFilter<"Invoice"> | number
  createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string
  subscription?: Prisma.StringFilter<"Invoice"> | string
}

export type InvoiceCreateManyOrderInput = {
  id?: string
  tenantId: string
  invoiceNumber: string
  taxAmount: number
  discountAmount?: number
  netAmount: number
  createdAt?: Date | string
  subscription: string
}

export type InvoiceUpdateWithoutOrderInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string
  taxAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  discountAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  netAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  subscription?: Prisma.StringFieldUpdateOperationsInput | string
}

export type InvoiceUncheckedUpdateWithoutOrderInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string
  taxAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  discountAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  netAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  subscription?: Prisma.StringFieldUpdateOperationsInput | string
}

export type InvoiceUncheckedUpdateManyWithoutOrderInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string
  taxAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  discountAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  netAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  subscription?: Prisma.StringFieldUpdateOperationsInput | string
}



export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  invoiceNumber?: boolean
  orderId?: boolean
  taxAmount?: boolean
  discountAmount?: boolean
  netAmount?: boolean
  createdAt?: boolean
  subscription?: boolean
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}, ExtArgs["result"]["invoice"]>

export type InvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  invoiceNumber?: boolean
  orderId?: boolean
  taxAmount?: boolean
  discountAmount?: boolean
  netAmount?: boolean
  createdAt?: boolean
  subscription?: boolean
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}, ExtArgs["result"]["invoice"]>

export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  invoiceNumber?: boolean
  orderId?: boolean
  taxAmount?: boolean
  discountAmount?: boolean
  netAmount?: boolean
  createdAt?: boolean
  subscription?: boolean
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}, ExtArgs["result"]["invoice"]>

export type InvoiceSelectScalar = {
  id?: boolean
  tenantId?: boolean
  invoiceNumber?: boolean
  orderId?: boolean
  taxAmount?: boolean
  discountAmount?: boolean
  netAmount?: boolean
  createdAt?: boolean
  subscription?: boolean
}

export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "invoiceNumber" | "orderId" | "taxAmount" | "discountAmount" | "netAmount" | "createdAt" | "subscription", ExtArgs["result"]["invoice"]>
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}
export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}
export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  order?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>
}

export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Invoice"
  objects: {
    order: Prisma.$SalesOrderPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    invoiceNumber: string
    orderId: string
    taxAmount: number
    discountAmount: number
    netAmount: number
    createdAt: Date
    subscription: string
  }, ExtArgs["result"]["invoice"]>
  composites: {}
}

export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>

export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true
  }

export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
  
  findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends InvoiceCountArgs>(
    args?: Prisma.Subset<T, InvoiceCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

  
  groupBy<
    T extends InvoiceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: InvoiceGroupByArgs['orderBy'] }
      : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: InvoiceFieldRefs;
}


export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  order<T extends Prisma.SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface InvoiceFieldRefs {
  readonly id: Prisma.FieldRef<"Invoice", 'String'>
  readonly tenantId: Prisma.FieldRef<"Invoice", 'String'>
  readonly invoiceNumber: Prisma.FieldRef<"Invoice", 'String'>
  readonly orderId: Prisma.FieldRef<"Invoice", 'String'>
  readonly taxAmount: Prisma.FieldRef<"Invoice", 'Float'>
  readonly discountAmount: Prisma.FieldRef<"Invoice", 'Float'>
  readonly netAmount: Prisma.FieldRef<"Invoice", 'Float'>
  readonly createdAt: Prisma.FieldRef<"Invoice", 'DateTime'>
  readonly subscription: Prisma.FieldRef<"Invoice", 'String'>
}
    



export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
  
  where: Prisma.InvoiceWhereUniqueInput
}


export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
  
  where: Prisma.InvoiceWhereUniqueInput
}


export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>
}


export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[]
  skipDuplicates?: boolean
}


export type InvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
}


export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>
  
  where: Prisma.InvoiceWhereUniqueInput
}


export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>
  
  where?: Prisma.InvoiceWhereInput
  
  limit?: number
}


export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>
  
  where?: Prisma.InvoiceWhereInput
  
  limit?: number
  
  include?: Prisma.InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
  
  where: Prisma.InvoiceWhereUniqueInput
  
  create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>
}


export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
  
  where: Prisma.InvoiceWhereUniqueInput
}


export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.InvoiceWhereInput
  
  limit?: number
}


export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.InvoiceSelect<ExtArgs> | null
  
  omit?: Prisma.InvoiceOmit<ExtArgs> | null
  
  include?: Prisma.InvoiceInclude<ExtArgs> | null
}
