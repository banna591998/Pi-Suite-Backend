





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type RequestForQuoteModel = runtime.Types.Result.DefaultSelection<Prisma.$RequestForQuotePayload>

export type AggregateRequestForQuote = {
  _count: RequestForQuoteCountAggregateOutputType | null
  _avg: RequestForQuoteAvgAggregateOutputType | null
  _sum: RequestForQuoteSumAggregateOutputType | null
  _min: RequestForQuoteMinAggregateOutputType | null
  _max: RequestForQuoteMaxAggregateOutputType | null
}

export type RequestForQuoteAvgAggregateOutputType = {
  targetPrice: number | null
}

export type RequestForQuoteSumAggregateOutputType = {
  targetPrice: number | null
}

export type RequestForQuoteMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  vendorId: string | null
  itemDetails: string | null
  targetPrice: number | null
  status: $Enums.RfqStatus | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type RequestForQuoteMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  vendorId: string | null
  itemDetails: string | null
  targetPrice: number | null
  status: $Enums.RfqStatus | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type RequestForQuoteCountAggregateOutputType = {
  id: number
  tenantId: number
  vendorId: number
  itemDetails: number
  targetPrice: number
  status: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type RequestForQuoteAvgAggregateInputType = {
  targetPrice?: true
}

export type RequestForQuoteSumAggregateInputType = {
  targetPrice?: true
}

export type RequestForQuoteMinAggregateInputType = {
  id?: true
  tenantId?: true
  vendorId?: true
  itemDetails?: true
  targetPrice?: true
  status?: true
  createdAt?: true
  updatedAt?: true
}

export type RequestForQuoteMaxAggregateInputType = {
  id?: true
  tenantId?: true
  vendorId?: true
  itemDetails?: true
  targetPrice?: true
  status?: true
  createdAt?: true
  updatedAt?: true
}

export type RequestForQuoteCountAggregateInputType = {
  id?: true
  tenantId?: true
  vendorId?: true
  itemDetails?: true
  targetPrice?: true
  status?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type RequestForQuoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.RequestForQuoteWhereInput
  
  orderBy?: Prisma.RequestForQuoteOrderByWithRelationInput | Prisma.RequestForQuoteOrderByWithRelationInput[]
  
  cursor?: Prisma.RequestForQuoteWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | RequestForQuoteCountAggregateInputType
  
  _avg?: RequestForQuoteAvgAggregateInputType
  
  _sum?: RequestForQuoteSumAggregateInputType
  
  _min?: RequestForQuoteMinAggregateInputType
  
  _max?: RequestForQuoteMaxAggregateInputType
}

export type GetRequestForQuoteAggregateType<T extends RequestForQuoteAggregateArgs> = {
      [P in keyof T & keyof AggregateRequestForQuote]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateRequestForQuote[P]>
    : Prisma.GetScalarType<T[P], AggregateRequestForQuote[P]>
}




export type RequestForQuoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.RequestForQuoteWhereInput
  orderBy?: Prisma.RequestForQuoteOrderByWithAggregationInput | Prisma.RequestForQuoteOrderByWithAggregationInput[]
  by: Prisma.RequestForQuoteScalarFieldEnum[] | Prisma.RequestForQuoteScalarFieldEnum
  having?: Prisma.RequestForQuoteScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: RequestForQuoteCountAggregateInputType | true
  _avg?: RequestForQuoteAvgAggregateInputType
  _sum?: RequestForQuoteSumAggregateInputType
  _min?: RequestForQuoteMinAggregateInputType
  _max?: RequestForQuoteMaxAggregateInputType
}

export type RequestForQuoteGroupByOutputType = {
  id: string
  tenantId: string
  vendorId: string
  itemDetails: string
  targetPrice: number
  status: $Enums.RfqStatus
  createdAt: Date
  updatedAt: Date
  _count: RequestForQuoteCountAggregateOutputType | null
  _avg: RequestForQuoteAvgAggregateOutputType | null
  _sum: RequestForQuoteSumAggregateOutputType | null
  _min: RequestForQuoteMinAggregateOutputType | null
  _max: RequestForQuoteMaxAggregateOutputType | null
}

export type GetRequestForQuoteGroupByPayload<T extends RequestForQuoteGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<RequestForQuoteGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof RequestForQuoteGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], RequestForQuoteGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], RequestForQuoteGroupByOutputType[P]>
      }
    >
  >



export type RequestForQuoteWhereInput = {
  AND?: Prisma.RequestForQuoteWhereInput | Prisma.RequestForQuoteWhereInput[]
  OR?: Prisma.RequestForQuoteWhereInput[]
  NOT?: Prisma.RequestForQuoteWhereInput | Prisma.RequestForQuoteWhereInput[]
  id?: Prisma.StringFilter<"RequestForQuote"> | string
  tenantId?: Prisma.StringFilter<"RequestForQuote"> | string
  vendorId?: Prisma.StringFilter<"RequestForQuote"> | string
  itemDetails?: Prisma.StringFilter<"RequestForQuote"> | string
  targetPrice?: Prisma.FloatFilter<"RequestForQuote"> | number
  status?: Prisma.EnumRfqStatusFilter<"RequestForQuote"> | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFilter<"RequestForQuote"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"RequestForQuote"> | Date | string
  vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>
}

export type RequestForQuoteOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  itemDetails?: Prisma.SortOrder
  targetPrice?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  vendor?: Prisma.VendorOrderByWithRelationInput
}

export type RequestForQuoteWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.RequestForQuoteWhereInput | Prisma.RequestForQuoteWhereInput[]
  OR?: Prisma.RequestForQuoteWhereInput[]
  NOT?: Prisma.RequestForQuoteWhereInput | Prisma.RequestForQuoteWhereInput[]
  tenantId?: Prisma.StringFilter<"RequestForQuote"> | string
  vendorId?: Prisma.StringFilter<"RequestForQuote"> | string
  itemDetails?: Prisma.StringFilter<"RequestForQuote"> | string
  targetPrice?: Prisma.FloatFilter<"RequestForQuote"> | number
  status?: Prisma.EnumRfqStatusFilter<"RequestForQuote"> | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFilter<"RequestForQuote"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"RequestForQuote"> | Date | string
  vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>
}, "id">

export type RequestForQuoteOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  itemDetails?: Prisma.SortOrder
  targetPrice?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.RequestForQuoteCountOrderByAggregateInput
  _avg?: Prisma.RequestForQuoteAvgOrderByAggregateInput
  _max?: Prisma.RequestForQuoteMaxOrderByAggregateInput
  _min?: Prisma.RequestForQuoteMinOrderByAggregateInput
  _sum?: Prisma.RequestForQuoteSumOrderByAggregateInput
}

export type RequestForQuoteScalarWhereWithAggregatesInput = {
  AND?: Prisma.RequestForQuoteScalarWhereWithAggregatesInput | Prisma.RequestForQuoteScalarWhereWithAggregatesInput[]
  OR?: Prisma.RequestForQuoteScalarWhereWithAggregatesInput[]
  NOT?: Prisma.RequestForQuoteScalarWhereWithAggregatesInput | Prisma.RequestForQuoteScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"RequestForQuote"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"RequestForQuote"> | string
  vendorId?: Prisma.StringWithAggregatesFilter<"RequestForQuote"> | string
  itemDetails?: Prisma.StringWithAggregatesFilter<"RequestForQuote"> | string
  targetPrice?: Prisma.FloatWithAggregatesFilter<"RequestForQuote"> | number
  status?: Prisma.EnumRfqStatusWithAggregatesFilter<"RequestForQuote"> | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"RequestForQuote"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RequestForQuote"> | Date | string
}

export type RequestForQuoteCreateInput = {
  id?: string
  tenantId: string
  itemDetails: string
  targetPrice: number
  status?: $Enums.RfqStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  vendor: Prisma.VendorCreateNestedOneWithoutRfqsInput
}

export type RequestForQuoteUncheckedCreateInput = {
  id?: string
  tenantId: string
  vendorId: string
  itemDetails: string
  targetPrice: number
  status?: $Enums.RfqStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type RequestForQuoteUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemDetails?: Prisma.StringFieldUpdateOperationsInput | string
  targetPrice?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumRfqStatusFieldUpdateOperationsInput | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  vendor?: Prisma.VendorUpdateOneRequiredWithoutRfqsNestedInput
}

export type RequestForQuoteUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vendorId?: Prisma.StringFieldUpdateOperationsInput | string
  itemDetails?: Prisma.StringFieldUpdateOperationsInput | string
  targetPrice?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumRfqStatusFieldUpdateOperationsInput | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type RequestForQuoteCreateManyInput = {
  id?: string
  tenantId: string
  vendorId: string
  itemDetails: string
  targetPrice: number
  status?: $Enums.RfqStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type RequestForQuoteUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemDetails?: Prisma.StringFieldUpdateOperationsInput | string
  targetPrice?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumRfqStatusFieldUpdateOperationsInput | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type RequestForQuoteUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  vendorId?: Prisma.StringFieldUpdateOperationsInput | string
  itemDetails?: Prisma.StringFieldUpdateOperationsInput | string
  targetPrice?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumRfqStatusFieldUpdateOperationsInput | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type RequestForQuoteListRelationFilter = {
  every?: Prisma.RequestForQuoteWhereInput
  some?: Prisma.RequestForQuoteWhereInput
  none?: Prisma.RequestForQuoteWhereInput
}

export type RequestForQuoteOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type RequestForQuoteCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  itemDetails?: Prisma.SortOrder
  targetPrice?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type RequestForQuoteAvgOrderByAggregateInput = {
  targetPrice?: Prisma.SortOrder
}

export type RequestForQuoteMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  itemDetails?: Prisma.SortOrder
  targetPrice?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type RequestForQuoteMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  vendorId?: Prisma.SortOrder
  itemDetails?: Prisma.SortOrder
  targetPrice?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type RequestForQuoteSumOrderByAggregateInput = {
  targetPrice?: Prisma.SortOrder
}

export type RequestForQuoteCreateNestedManyWithoutVendorInput = {
  create?: Prisma.XOR<Prisma.RequestForQuoteCreateWithoutVendorInput, Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput> | Prisma.RequestForQuoteCreateWithoutVendorInput[] | Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput | Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput[]
  createMany?: Prisma.RequestForQuoteCreateManyVendorInputEnvelope
  connect?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
}

export type RequestForQuoteUncheckedCreateNestedManyWithoutVendorInput = {
  create?: Prisma.XOR<Prisma.RequestForQuoteCreateWithoutVendorInput, Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput> | Prisma.RequestForQuoteCreateWithoutVendorInput[] | Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput | Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput[]
  createMany?: Prisma.RequestForQuoteCreateManyVendorInputEnvelope
  connect?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
}

export type RequestForQuoteUpdateManyWithoutVendorNestedInput = {
  create?: Prisma.XOR<Prisma.RequestForQuoteCreateWithoutVendorInput, Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput> | Prisma.RequestForQuoteCreateWithoutVendorInput[] | Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput | Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput[]
  upsert?: Prisma.RequestForQuoteUpsertWithWhereUniqueWithoutVendorInput | Prisma.RequestForQuoteUpsertWithWhereUniqueWithoutVendorInput[]
  createMany?: Prisma.RequestForQuoteCreateManyVendorInputEnvelope
  set?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  disconnect?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  delete?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  connect?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  update?: Prisma.RequestForQuoteUpdateWithWhereUniqueWithoutVendorInput | Prisma.RequestForQuoteUpdateWithWhereUniqueWithoutVendorInput[]
  updateMany?: Prisma.RequestForQuoteUpdateManyWithWhereWithoutVendorInput | Prisma.RequestForQuoteUpdateManyWithWhereWithoutVendorInput[]
  deleteMany?: Prisma.RequestForQuoteScalarWhereInput | Prisma.RequestForQuoteScalarWhereInput[]
}

export type RequestForQuoteUncheckedUpdateManyWithoutVendorNestedInput = {
  create?: Prisma.XOR<Prisma.RequestForQuoteCreateWithoutVendorInput, Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput> | Prisma.RequestForQuoteCreateWithoutVendorInput[] | Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput[]
  connectOrCreate?: Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput | Prisma.RequestForQuoteCreateOrConnectWithoutVendorInput[]
  upsert?: Prisma.RequestForQuoteUpsertWithWhereUniqueWithoutVendorInput | Prisma.RequestForQuoteUpsertWithWhereUniqueWithoutVendorInput[]
  createMany?: Prisma.RequestForQuoteCreateManyVendorInputEnvelope
  set?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  disconnect?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  delete?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  connect?: Prisma.RequestForQuoteWhereUniqueInput | Prisma.RequestForQuoteWhereUniqueInput[]
  update?: Prisma.RequestForQuoteUpdateWithWhereUniqueWithoutVendorInput | Prisma.RequestForQuoteUpdateWithWhereUniqueWithoutVendorInput[]
  updateMany?: Prisma.RequestForQuoteUpdateManyWithWhereWithoutVendorInput | Prisma.RequestForQuoteUpdateManyWithWhereWithoutVendorInput[]
  deleteMany?: Prisma.RequestForQuoteScalarWhereInput | Prisma.RequestForQuoteScalarWhereInput[]
}

export type EnumRfqStatusFieldUpdateOperationsInput = {
  set?: $Enums.RfqStatus
}

export type RequestForQuoteCreateWithoutVendorInput = {
  id?: string
  tenantId: string
  itemDetails: string
  targetPrice: number
  status?: $Enums.RfqStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type RequestForQuoteUncheckedCreateWithoutVendorInput = {
  id?: string
  tenantId: string
  itemDetails: string
  targetPrice: number
  status?: $Enums.RfqStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type RequestForQuoteCreateOrConnectWithoutVendorInput = {
  where: Prisma.RequestForQuoteWhereUniqueInput
  create: Prisma.XOR<Prisma.RequestForQuoteCreateWithoutVendorInput, Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput>
}

export type RequestForQuoteCreateManyVendorInputEnvelope = {
  data: Prisma.RequestForQuoteCreateManyVendorInput | Prisma.RequestForQuoteCreateManyVendorInput[]
  skipDuplicates?: boolean
}

export type RequestForQuoteUpsertWithWhereUniqueWithoutVendorInput = {
  where: Prisma.RequestForQuoteWhereUniqueInput
  update: Prisma.XOR<Prisma.RequestForQuoteUpdateWithoutVendorInput, Prisma.RequestForQuoteUncheckedUpdateWithoutVendorInput>
  create: Prisma.XOR<Prisma.RequestForQuoteCreateWithoutVendorInput, Prisma.RequestForQuoteUncheckedCreateWithoutVendorInput>
}

export type RequestForQuoteUpdateWithWhereUniqueWithoutVendorInput = {
  where: Prisma.RequestForQuoteWhereUniqueInput
  data: Prisma.XOR<Prisma.RequestForQuoteUpdateWithoutVendorInput, Prisma.RequestForQuoteUncheckedUpdateWithoutVendorInput>
}

export type RequestForQuoteUpdateManyWithWhereWithoutVendorInput = {
  where: Prisma.RequestForQuoteScalarWhereInput
  data: Prisma.XOR<Prisma.RequestForQuoteUpdateManyMutationInput, Prisma.RequestForQuoteUncheckedUpdateManyWithoutVendorInput>
}

export type RequestForQuoteScalarWhereInput = {
  AND?: Prisma.RequestForQuoteScalarWhereInput | Prisma.RequestForQuoteScalarWhereInput[]
  OR?: Prisma.RequestForQuoteScalarWhereInput[]
  NOT?: Prisma.RequestForQuoteScalarWhereInput | Prisma.RequestForQuoteScalarWhereInput[]
  id?: Prisma.StringFilter<"RequestForQuote"> | string
  tenantId?: Prisma.StringFilter<"RequestForQuote"> | string
  vendorId?: Prisma.StringFilter<"RequestForQuote"> | string
  itemDetails?: Prisma.StringFilter<"RequestForQuote"> | string
  targetPrice?: Prisma.FloatFilter<"RequestForQuote"> | number
  status?: Prisma.EnumRfqStatusFilter<"RequestForQuote"> | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFilter<"RequestForQuote"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"RequestForQuote"> | Date | string
}

export type RequestForQuoteCreateManyVendorInput = {
  id?: string
  tenantId: string
  itemDetails: string
  targetPrice: number
  status?: $Enums.RfqStatus
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type RequestForQuoteUpdateWithoutVendorInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemDetails?: Prisma.StringFieldUpdateOperationsInput | string
  targetPrice?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumRfqStatusFieldUpdateOperationsInput | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type RequestForQuoteUncheckedUpdateWithoutVendorInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemDetails?: Prisma.StringFieldUpdateOperationsInput | string
  targetPrice?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumRfqStatusFieldUpdateOperationsInput | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type RequestForQuoteUncheckedUpdateManyWithoutVendorInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  itemDetails?: Prisma.StringFieldUpdateOperationsInput | string
  targetPrice?: Prisma.FloatFieldUpdateOperationsInput | number
  status?: Prisma.EnumRfqStatusFieldUpdateOperationsInput | $Enums.RfqStatus
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type RequestForQuoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  vendorId?: boolean
  itemDetails?: boolean
  targetPrice?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}, ExtArgs["result"]["requestForQuote"]>

export type RequestForQuoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  vendorId?: boolean
  itemDetails?: boolean
  targetPrice?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}, ExtArgs["result"]["requestForQuote"]>

export type RequestForQuoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  vendorId?: boolean
  itemDetails?: boolean
  targetPrice?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}, ExtArgs["result"]["requestForQuote"]>

export type RequestForQuoteSelectScalar = {
  id?: boolean
  tenantId?: boolean
  vendorId?: boolean
  itemDetails?: boolean
  targetPrice?: boolean
  status?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type RequestForQuoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "vendorId" | "itemDetails" | "targetPrice" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["requestForQuote"]>
export type RequestForQuoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}
export type RequestForQuoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}
export type RequestForQuoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>
}

export type $RequestForQuotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "RequestForQuote"
  objects: {
    vendor: Prisma.$VendorPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    vendorId: string
    itemDetails: string
    targetPrice: number
    status: $Enums.RfqStatus
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["requestForQuote"]>
  composites: {}
}

export type RequestForQuoteGetPayload<S extends boolean | null | undefined | RequestForQuoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload, S>

export type RequestForQuoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<RequestForQuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RequestForQuoteCountAggregateInputType | true
  }

export interface RequestForQuoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestForQuote'], meta: { name: 'RequestForQuote' } }
  
  findUnique<T extends RequestForQuoteFindUniqueArgs>(args: Prisma.SelectSubset<T, RequestForQuoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends RequestForQuoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RequestForQuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends RequestForQuoteFindFirstArgs>(args?: Prisma.SelectSubset<T, RequestForQuoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends RequestForQuoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RequestForQuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends RequestForQuoteFindManyArgs>(args?: Prisma.SelectSubset<T, RequestForQuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends RequestForQuoteCreateArgs>(args: Prisma.SelectSubset<T, RequestForQuoteCreateArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends RequestForQuoteCreateManyArgs>(args?: Prisma.SelectSubset<T, RequestForQuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends RequestForQuoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RequestForQuoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends RequestForQuoteDeleteArgs>(args: Prisma.SelectSubset<T, RequestForQuoteDeleteArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends RequestForQuoteUpdateArgs>(args: Prisma.SelectSubset<T, RequestForQuoteUpdateArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends RequestForQuoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, RequestForQuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends RequestForQuoteUpdateManyArgs>(args: Prisma.SelectSubset<T, RequestForQuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends RequestForQuoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RequestForQuoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends RequestForQuoteUpsertArgs>(args: Prisma.SelectSubset<T, RequestForQuoteUpsertArgs<ExtArgs>>): Prisma.Prisma__RequestForQuoteClient<runtime.Types.Result.GetResult<Prisma.$RequestForQuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends RequestForQuoteCountArgs>(
    args?: Prisma.Subset<T, RequestForQuoteCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], RequestForQuoteCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends RequestForQuoteAggregateArgs>(args: Prisma.Subset<T, RequestForQuoteAggregateArgs>): Prisma.PrismaPromise<GetRequestForQuoteAggregateType<T>>

  
  groupBy<
    T extends RequestForQuoteGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: RequestForQuoteGroupByArgs['orderBy'] }
      : { orderBy?: RequestForQuoteGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, RequestForQuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestForQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: RequestForQuoteFieldRefs;
}


export interface Prisma__RequestForQuoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  vendor<T extends Prisma.VendorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface RequestForQuoteFieldRefs {
  readonly id: Prisma.FieldRef<"RequestForQuote", 'String'>
  readonly tenantId: Prisma.FieldRef<"RequestForQuote", 'String'>
  readonly vendorId: Prisma.FieldRef<"RequestForQuote", 'String'>
  readonly itemDetails: Prisma.FieldRef<"RequestForQuote", 'String'>
  readonly targetPrice: Prisma.FieldRef<"RequestForQuote", 'Float'>
  readonly status: Prisma.FieldRef<"RequestForQuote", 'RfqStatus'>
  readonly createdAt: Prisma.FieldRef<"RequestForQuote", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"RequestForQuote", 'DateTime'>
}
    



export type RequestForQuoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  where: Prisma.RequestForQuoteWhereUniqueInput
}


export type RequestForQuoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  where: Prisma.RequestForQuoteWhereUniqueInput
}


export type RequestForQuoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  where?: Prisma.RequestForQuoteWhereInput
  
  orderBy?: Prisma.RequestForQuoteOrderByWithRelationInput | Prisma.RequestForQuoteOrderByWithRelationInput[]
  
  cursor?: Prisma.RequestForQuoteWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.RequestForQuoteScalarFieldEnum | Prisma.RequestForQuoteScalarFieldEnum[]
}


export type RequestForQuoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  where?: Prisma.RequestForQuoteWhereInput
  
  orderBy?: Prisma.RequestForQuoteOrderByWithRelationInput | Prisma.RequestForQuoteOrderByWithRelationInput[]
  
  cursor?: Prisma.RequestForQuoteWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.RequestForQuoteScalarFieldEnum | Prisma.RequestForQuoteScalarFieldEnum[]
}


export type RequestForQuoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  where?: Prisma.RequestForQuoteWhereInput
  
  orderBy?: Prisma.RequestForQuoteOrderByWithRelationInput | Prisma.RequestForQuoteOrderByWithRelationInput[]
  
  cursor?: Prisma.RequestForQuoteWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.RequestForQuoteScalarFieldEnum | Prisma.RequestForQuoteScalarFieldEnum[]
}


export type RequestForQuoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.RequestForQuoteCreateInput, Prisma.RequestForQuoteUncheckedCreateInput>
}


export type RequestForQuoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.RequestForQuoteCreateManyInput | Prisma.RequestForQuoteCreateManyInput[]
  skipDuplicates?: boolean
}


export type RequestForQuoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  data: Prisma.RequestForQuoteCreateManyInput | Prisma.RequestForQuoteCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.RequestForQuoteIncludeCreateManyAndReturn<ExtArgs> | null
}


export type RequestForQuoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.RequestForQuoteUpdateInput, Prisma.RequestForQuoteUncheckedUpdateInput>
  
  where: Prisma.RequestForQuoteWhereUniqueInput
}


export type RequestForQuoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.RequestForQuoteUpdateManyMutationInput, Prisma.RequestForQuoteUncheckedUpdateManyInput>
  
  where?: Prisma.RequestForQuoteWhereInput
  
  limit?: number
}


export type RequestForQuoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.RequestForQuoteUpdateManyMutationInput, Prisma.RequestForQuoteUncheckedUpdateManyInput>
  
  where?: Prisma.RequestForQuoteWhereInput
  
  limit?: number
  
  include?: Prisma.RequestForQuoteIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type RequestForQuoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  where: Prisma.RequestForQuoteWhereUniqueInput
  
  create: Prisma.XOR<Prisma.RequestForQuoteCreateInput, Prisma.RequestForQuoteUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.RequestForQuoteUpdateInput, Prisma.RequestForQuoteUncheckedUpdateInput>
}


export type RequestForQuoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
  
  where: Prisma.RequestForQuoteWhereUniqueInput
}


export type RequestForQuoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.RequestForQuoteWhereInput
  
  limit?: number
}


export type RequestForQuoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RequestForQuoteSelect<ExtArgs> | null
  
  omit?: Prisma.RequestForQuoteOmit<ExtArgs> | null
  
  include?: Prisma.RequestForQuoteInclude<ExtArgs> | null
}
