





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type PurchaseOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchaseOrderPayload>

export type AggregatePurchaseOrder = {
  _count: PurchaseOrderCountAggregateOutputType | null
  _avg: PurchaseOrderAvgAggregateOutputType | null
  _sum: PurchaseOrderSumAggregateOutputType | null
  _min: PurchaseOrderMinAggregateOutputType | null
  _max: PurchaseOrderMaxAggregateOutputType | null
}

export type PurchaseOrderAvgAggregateOutputType = {
  totalAmount: number | null
}

export type PurchaseOrderSumAggregateOutputType = {
  totalAmount: number | null
}

export type PurchaseOrderMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  poNumber: string | null
  vendorId: string | null
  totalAmount: number | null
  status: $Enums.PoStatus | null
  invoiceMatch: boolean | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type PurchaseOrderMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  poNumber: string | null
  vendorId: string | null
  totalAmount: number | null
  status: $Enums.PoStatus | null
  invoiceMatch: boolean | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type PurchaseOrderCountAggregateOutputType = {
  id: number
  tenantId: number
  poNumber: number
  vendorId: number
  totalAmount: number
  status: number
  invoiceMatch: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type PurchaseOrderAvgAggregateInputType = {
  totalAmount?: true
}

export type PurchaseOrderSumAggregateInputType = {
  totalAmount?: true
}

export type PurchaseOrderMinAggregateInputType = {
  id?: true
  tenantId?: true
  poNumber?: true
  vendorId?: true
  totalAmount?: true
  status?: true
  invoiceMatch?: true
  createdAt?: true
  updatedAt?: true
}

export type PurchaseOrderMaxAggregateInputType = {
  id?: true
  tenantId?: true
  poNumber?: true
  vendorId?: true
  totalAmount?: true
  status?: true
  invoiceMatch?: true
  createdAt?: true
  updatedAt?: true
}

export type PurchaseOrderCountAggregateInputType = {
  id?: true
  tenantId?: true
  poNumber?: true
  vendorId?: true
  totalAmount?: true
  status?: true
  invoiceMatch?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type PurchaseOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.PurchaseOrderWhereInput
  
  orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.PurchaseOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | PurchaseOrderCountAggregateInputType
  
  _avg?: PurchaseOrderAvgAggregateInputType
  
  _sum?: PurchaseOrderSumAggregateInputType
  
  _min?: PurchaseOrderMinAggregateInputType
  
  _max?: PurchaseOrderMaxAggregateInputType
}

export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
      [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregatePurchaseOrder[P]>
    : Prisma.GetScalarType<T[P], AggregatePurchaseOrder[P]>
}




export type PurchaseOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.PurchaseOrderWhereInput
  orderBy?: Prisma.PurchaseOrderOrderByWithAggregationInput | Prisma.PurchaseOrderOrderByWithAggregationInput[]
  by: Prisma.PurchaseOrderScalarFieldEnum[] | Prisma.PurchaseOrderScalarFieldEnum
  having?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: PurchaseOrderCountAggregateInputType | true
  _avg?: PurchaseOrderAvgAggregateInputType
  _sum?: PurchaseOrderSumAggregateInputType
  _min?: PurchaseOrderMinAggregateInputType
  _max?: PurchaseOrderMaxAggregateInputType
}

export type PurchaseOrderGroupByOutputType = {
  id: string
  tenantId: string
  poNumber: string
  vendorId: string
  totalAmount: number
  status: $Enums.PoStatus
  invoiceMatch: boolean
  createdAt: Date
  updatedAt: Date
  _count: PurchaseOrderCountAggregateOutputType | null
  _avg: PurchaseOrderAvgAggregateOutputType | null
  _sum: PurchaseOrderSumAggregateOutputType | null
  _min: PurchaseOrderMinAggregateOutputType | null
  _max: PurchaseOrderMaxAggregateOutputType | null
}

export type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
      }
    >
  >



export type PurchaseOrderWhereInput = {
  AND?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[]
  OR?: Prisma.PurchaseOrderWhereInput[]
  NOT?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[]
  id?: Prisma.StringFilter<"PurchaseOrder"> | string
  tenantId?: Prisma.StringFilter<"PurchaseOrder"> | string
  poNumber?: Prisma.StringFilter<"PurchaseOrder"> | string
  vendorId?: Prisma.StringFilter<"PurchaseOrder"> | string
  totalAmount?: Prisma.FloatFilter<"PurchaseOrder"> | number
  status?: Prisma.EnumPoStatusFilter<"PurchaseOrder"> | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFilter<"PurchaseOrder"> | boolean
  createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string
  vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>
}

export type PurchaseOrderOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  poNumber?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceMatch?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  vendor?: Prisma.VendorOrderByWithRelationInput
}

export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  poNumber?: string
  AND?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[]
  OR?: Prisma.PurchaseOrderWhereInput[]
  NOT?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[]
  tenantId?: Prisma.StringFilter<"PurchaseOrder"> | string
  vendorId?: Prisma.StringFilter<"PurchaseOrder"> | string
  totalAmount?: Prisma.FloatFilter<"PurchaseOrder"> | number
  status?: Prisma.EnumPoStatusFilter<"PurchaseOrder"> | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFilter<"PurchaseOrder"> | boolean
  createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string
  vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>
}, "id" | "poNumber">

export type PurchaseOrderOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  poNumber?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceMatch?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.PurchaseOrderCountOrderByAggregateInput
  _avg?: Prisma.PurchaseOrderAvgOrderByAggregateInput
  _max?: Prisma.PurchaseOrderMaxOrderByAggregateInput
  _min?: Prisma.PurchaseOrderMinOrderByAggregateInput
  _sum?: Prisma.PurchaseOrderSumOrderByAggregateInput
}

export type PurchaseOrderScalarWhereWithAggregatesInput = {
  AND?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput | Prisma.PurchaseOrderScalarWhereWithAggregatesInput[]
  OR?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput[]
  NOT?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput | Prisma.PurchaseOrderScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string
  poNumber?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string
  vendorId?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string
  totalAmount?: Prisma.FloatWithAggregatesFilter<"PurchaseOrder"> | number
  status?: Prisma.EnumPoStatusWithAggregatesFilter<"PurchaseOrder"> | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
}

export type PurchaseOrderCreateInput = {
  id?: string
  tenantId: string
  poNumber: string
  totalAmount: number
  status?: $Enums.PoStatus
  invoiceMatch?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  vendor: Prisma.VendorCreateNestedOneWithoutPurchaseOrdersInput
}

export type PurchaseOrderUncheckedCreateInput = {
  id?: string
  tenantId: string
  poNumber: string
  vendorId: string
  totalAmount: number
  status?: $Enums.PoStatus
  invoiceMatch?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type PurchaseOrderUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  poNumber?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  vendor?: Prisma.VendorUpdateOneRequiredWithoutPurchaseOrdersNestedInput
}

export type PurchaseOrderUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  poNumber?: Prisma.StringFieldUpdateOperationsInput | string
  vendorId?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PurchaseOrderCreateManyInput = {
  id?: string
  tenantId: string
  poNumber: string
  vendorId: string
  totalAmount: number
  status?: $Enums.PoStatus
  invoiceMatch?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type PurchaseOrderUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  poNumber?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PurchaseOrderUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  poNumber?: Prisma.StringFieldUpdateOperationsInput | string
  vendorId?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PurchaseOrderListRelationFilter = {
  every?: Prisma.PurchaseOrderWhereInput
  some?: Prisma.PurchaseOrderWhereInput
  none?: Prisma.PurchaseOrderWhereInput
}

export type PurchaseOrderOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type PurchaseOrderCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  poNumber?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceMatch?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type PurchaseOrderAvgOrderByAggregateInput = {
  totalAmount?: Prisma.SortOrder
}

export type PurchaseOrderMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  poNumber?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceMatch?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type PurchaseOrderMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  poNumber?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  totalAmount?: Prisma.SortOrder
  status?: Prisma.SortOrder
  invoiceMatch?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type PurchaseOrderSumOrderByAggregateInput = {
  totalAmount?: Prisma.SortOrder
}

export type PurchaseOrderCreateNestedManyWithoutVendorInput = {
  create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[]
  createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope
  connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
}

export type PurchaseOrderUncheckedCreateNestedManyWithoutVendorInput = {
  create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[]
  createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope
  connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
}

export type PurchaseOrderUpdateManyWithoutVendorNestedInput = {
  create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[]
  upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput[]
  createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope
  set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput[]
  updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput[]
  deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[]
}

export type PurchaseOrderUncheckedUpdateManyWithoutVendorNestedInput = {
  create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput> | Prisma.PurchaseOrderCreateWithoutVendorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput | Prisma.PurchaseOrderCreateOrConnectWithoutVendorInput[]
  upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput[]
  createMany?: Prisma.PurchaseOrderCreateManyVendorInputEnvelope
  set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[]
  update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput[]
  updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutVendorInput[]
  deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[]
}

export type EnumPoStatusFieldUpdateOperationsInput = {
  set?: $Enums.PoStatus
}

export type PurchaseOrderCreateWithoutVendorInput = {
  id?: string
  tenantId: string
  poNumber: string
  totalAmount: number
  status?: $Enums.PoStatus
  invoiceMatch?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type PurchaseOrderUncheckedCreateWithoutVendorInput = {
  id?: string
  tenantId: string
  poNumber: string
  totalAmount: number
  status?: $Enums.PoStatus
  invoiceMatch?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type PurchaseOrderCreateOrConnectWithoutVendorInput = {
  where: Prisma.PurchaseOrderWhereUniqueInput
  create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput>
}

export type PurchaseOrderCreateManyVendorInputEnvelope = {
  data: Prisma.PurchaseOrderCreateManyVendorInput | Prisma.PurchaseOrderCreateManyVendorInput[]
  skipDuplicates?: boolean
}

export type PurchaseOrderUpsertWithWhereUniqueWithoutVendorInput = {
  where: Prisma.PurchaseOrderWhereUniqueInput
  update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutVendorInput, Prisma.PurchaseOrderUncheckedUpdateWithoutVendorInput>
  create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutVendorInput, Prisma.PurchaseOrderUncheckedCreateWithoutVendorInput>
}

export type PurchaseOrderUpdateWithWhereUniqueWithoutVendorInput = {
  where: Prisma.PurchaseOrderWhereUniqueInput
  data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutVendorInput, Prisma.PurchaseOrderUncheckedUpdateWithoutVendorInput>
}

export type PurchaseOrderUpdateManyWithWhereWithoutVendorInput = {
  where: Prisma.PurchaseOrderScalarWhereInput
  data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutVendorInput>
}

export type PurchaseOrderScalarWhereInput = {
  AND?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[]
  OR?: Prisma.PurchaseOrderScalarWhereInput[]
  NOT?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[]
  id?: Prisma.StringFilter<"PurchaseOrder"> | string
  tenantId?: Prisma.StringFilter<"PurchaseOrder"> | string
  poNumber?: Prisma.StringFilter<"PurchaseOrder"> | string
  vendorId?: Prisma.StringFilter<"PurchaseOrder"> | string
  totalAmount?: Prisma.FloatFilter<"PurchaseOrder"> | number
  status?: Prisma.EnumPoStatusFilter<"PurchaseOrder"> | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFilter<"PurchaseOrder"> | boolean
  createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string
}

export type PurchaseOrderCreateManyVendorInput = {
  id?: string
  tenantId: string
  poNumber: string
  totalAmount: number
  status?: $Enums.PoStatus
  invoiceMatch?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type PurchaseOrderUpdateWithoutVendorInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  poNumber?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PurchaseOrderUncheckedUpdateWithoutVendorInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  poNumber?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type PurchaseOrderUncheckedUpdateManyWithoutVendorInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  poNumber?: Prisma.StringFieldUpdateOperationsInput | string
  totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumPoStatusFieldUpdateOperationsInput | $Enums.PoStatus
  invoiceMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type PurchaseOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  poNumber?: boolean
  vendorId?: boolean
  totalAmount?: boolean
  status?: boolean
  invoiceMatch?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}, ExtArgs["result"]["purchaseOrder"]>

export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  poNumber?: boolean
  vendorId?: boolean
  totalAmount?: boolean
  status?: boolean
  invoiceMatch?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}, ExtArgs["result"]["purchaseOrder"]>

export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  poNumber?: boolean
  vendorId?: boolean
  totalAmount?: boolean
  status?: boolean
  invoiceMatch?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}, ExtArgs["result"]["purchaseOrder"]>

export type PurchaseOrderSelectScalar = {
  id?: boolean
  tenantId?: boolean
  poNumber?: boolean
  vendorId?: boolean
  totalAmount?: boolean
  status?: boolean
  invoiceMatch?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type PurchaseOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "poNumber" | "vendorId" | "totalAmount" | "status" | "invoiceMatch" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseOrder"]>
export type PurchaseOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}
export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}
export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}

export type $PurchaseOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "PurchaseOrder"
  objects: {
    vendor: Prisma.$VendorPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    poNumber: string
    vendorId: string
    totalAmount: number
    status: $Enums.PoStatus
    invoiceMatch: boolean
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["purchaseOrder"]>
  composites: {}
}

export type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload, S>

export type PurchaseOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseOrderCountAggregateInputType | true
  }

export interface PurchaseOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
  
  findUnique<T extends PurchaseOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends PurchaseOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends PurchaseOrderFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends PurchaseOrderCreateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends PurchaseOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends PurchaseOrderDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends PurchaseOrderUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends PurchaseOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends PurchaseOrderUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends PurchaseOrderCountArgs>(
    args?: Prisma.Subset<T, PurchaseOrderCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends PurchaseOrderAggregateArgs>(args: Prisma.Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

  
  groupBy<
    T extends PurchaseOrderGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
      : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: PurchaseOrderFieldRefs;
}


export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  vendor<T extends Prisma.VendorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface PurchaseOrderFieldRefs {
  readonly id: Prisma.FieldRef<"PurchaseOrder", 'String'>
  readonly tenantId: Prisma.FieldRef<"PurchaseOrder", 'String'>
  readonly poNumber: Prisma.FieldRef<"PurchaseOrder", 'String'>
  readonly vendorId: Prisma.FieldRef<"PurchaseOrder", 'String'>
  readonly totalAmount: Prisma.FieldRef<"PurchaseOrder", 'Float'>
  readonly status: Prisma.FieldRef<"PurchaseOrder", 'PoStatus'>
  readonly invoiceMatch: Prisma.FieldRef<"PurchaseOrder", 'Boolean'>
  readonly createdAt: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>
}
    



export type PurchaseOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  where: Prisma.PurchaseOrderWhereUniqueInput
}


export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  where: Prisma.PurchaseOrderWhereUniqueInput
}


export type PurchaseOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  where?: Prisma.PurchaseOrderWhereInput
  
  orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.PurchaseOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[]
}


export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  where?: Prisma.PurchaseOrderWhereInput
  
  orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.PurchaseOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[]
}


export type PurchaseOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  where?: Prisma.PurchaseOrderWhereInput
  
  orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[]
  
  cursor?: Prisma.PurchaseOrderWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[]
}


export type PurchaseOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PurchaseOrderCreateInput, Prisma.PurchaseOrderUncheckedCreateInput>
}


export type PurchaseOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.PurchaseOrderCreateManyInput | Prisma.PurchaseOrderCreateManyInput[]
  skipDuplicates?: boolean
}


export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  data: Prisma.PurchaseOrderCreateManyInput | Prisma.PurchaseOrderCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null
}


export type PurchaseOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PurchaseOrderUpdateInput, Prisma.PurchaseOrderUncheckedUpdateInput>
  
  where: Prisma.PurchaseOrderWhereUniqueInput
}


export type PurchaseOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyInput>
  
  where?: Prisma.PurchaseOrderWhereInput
  
  limit?: number
}


export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyInput>
  
  where?: Prisma.PurchaseOrderWhereInput
  
  limit?: number
  
  include?: Prisma.PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type PurchaseOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  where: Prisma.PurchaseOrderWhereUniqueInput
  
  create: Prisma.XOR<Prisma.PurchaseOrderCreateInput, Prisma.PurchaseOrderUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.PurchaseOrderUpdateInput, Prisma.PurchaseOrderUncheckedUpdateInput>
}


export type PurchaseOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
  
  where: Prisma.PurchaseOrderWhereUniqueInput
}


export type PurchaseOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.PurchaseOrderWhereInput
  
  limit?: number
}


export type PurchaseOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.PurchaseOrderSelect<ExtArgs> | null
  
  omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null
  
  include?: Prisma.PurchaseOrderInclude<ExtArgs> | null
}
