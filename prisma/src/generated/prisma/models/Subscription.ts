





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type SubscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$SubscriptionPayload>

export type AggregateSubscription = {
  _count: SubscriptionCountAggregateOutputType | null
  _avg: SubscriptionAvgAggregateOutputType | null
  _sum: SubscriptionSumAggregateOutputType | null
  _min: SubscriptionMinAggregateOutputType | null
  _max: SubscriptionMaxAggregateOutputType | null
}

export type SubscriptionAvgAggregateOutputType = {
  userCount: number | null
  licenseCost: number | null
  setupFee: number | null
  trainingFee: number | null
  customModuleFee: number | null
}

export type SubscriptionSumAggregateOutputType = {
  userCount: number | null
  licenseCost: number | null
  setupFee: number | null
  trainingFee: number | null
  customModuleFee: number | null
}

export type SubscriptionMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  stripeCustomerId: string | null
  stripeSubId: string | null
  status: string | null
  planType: string | null
  currentPeriodEnd: Date | null
  userCount: number | null
  licenseCost: number | null
  setupFee: number | null
  trainingFee: number | null
  customModuleFee: number | null
  paymentRef: string | null
  customerName: string | null
  role: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type SubscriptionMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  stripeCustomerId: string | null
  stripeSubId: string | null
  status: string | null
  planType: string | null
  currentPeriodEnd: Date | null
  userCount: number | null
  licenseCost: number | null
  setupFee: number | null
  trainingFee: number | null
  customModuleFee: number | null
  paymentRef: string | null
  customerName: string | null
  role: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type SubscriptionCountAggregateOutputType = {
  id: number
  tenantId: number
  stripeCustomerId: number
  stripeSubId: number
  status: number
  planType: number
  currentPeriodEnd: number
  userCount: number
  licenseCost: number
  setupFee: number
  trainingFee: number
  customModuleFee: number
  paymentRef: number
  customerName: number
  role: number
  permissions: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type SubscriptionAvgAggregateInputType = {
  userCount?: true
  licenseCost?: true
  setupFee?: true
  trainingFee?: true
  customModuleFee?: true
}

export type SubscriptionSumAggregateInputType = {
  userCount?: true
  licenseCost?: true
  setupFee?: true
  trainingFee?: true
  customModuleFee?: true
}

export type SubscriptionMinAggregateInputType = {
  id?: true
  tenantId?: true
  stripeCustomerId?: true
  stripeSubId?: true
  status?: true
  planType?: true
  currentPeriodEnd?: true
  userCount?: true
  licenseCost?: true
  setupFee?: true
  trainingFee?: true
  customModuleFee?: true
  paymentRef?: true
  customerName?: true
  role?: true
  createdAt?: true
  updatedAt?: true
}

export type SubscriptionMaxAggregateInputType = {
  id?: true
  tenantId?: true
  stripeCustomerId?: true
  stripeSubId?: true
  status?: true
  planType?: true
  currentPeriodEnd?: true
  userCount?: true
  licenseCost?: true
  setupFee?: true
  trainingFee?: true
  customModuleFee?: true
  paymentRef?: true
  customerName?: true
  role?: true
  createdAt?: true
  updatedAt?: true
}

export type SubscriptionCountAggregateInputType = {
  id?: true
  tenantId?: true
  stripeCustomerId?: true
  stripeSubId?: true
  status?: true
  planType?: true
  currentPeriodEnd?: true
  userCount?: true
  licenseCost?: true
  setupFee?: true
  trainingFee?: true
  customModuleFee?: true
  paymentRef?: true
  customerName?: true
  role?: true
  permissions?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type SubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SubscriptionWhereInput
  
  orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.SubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | SubscriptionCountAggregateInputType
  
  _avg?: SubscriptionAvgAggregateInputType
  
  _sum?: SubscriptionSumAggregateInputType
  
  _min?: SubscriptionMinAggregateInputType
  
  _max?: SubscriptionMaxAggregateInputType
}

export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
      [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateSubscription[P]>
    : Prisma.GetScalarType<T[P], AggregateSubscription[P]>
}




export type SubscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SubscriptionWhereInput
  orderBy?: Prisma.SubscriptionOrderByWithAggregationInput | Prisma.SubscriptionOrderByWithAggregationInput[]
  by: Prisma.SubscriptionScalarFieldEnum[] | Prisma.SubscriptionScalarFieldEnum
  having?: Prisma.SubscriptionScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: SubscriptionCountAggregateInputType | true
  _avg?: SubscriptionAvgAggregateInputType
  _sum?: SubscriptionSumAggregateInputType
  _min?: SubscriptionMinAggregateInputType
  _max?: SubscriptionMaxAggregateInputType
}

export type SubscriptionGroupByOutputType = {
  id: string
  tenantId: string
  stripeCustomerId: string | null
  stripeSubId: string | null
  status: string
  planType: string
  currentPeriodEnd: Date
  userCount: number
  licenseCost: number
  setupFee: number
  trainingFee: number
  customModuleFee: number
  paymentRef: string | null
  customerName: string | null
  role: string
  permissions: string[]
  createdAt: Date
  updatedAt: Date
  _count: SubscriptionCountAggregateOutputType | null
  _avg: SubscriptionAvgAggregateOutputType | null
  _sum: SubscriptionSumAggregateOutputType | null
  _min: SubscriptionMinAggregateOutputType | null
  _max: SubscriptionMaxAggregateOutputType | null
}

export type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
      }
    >
  >



export type SubscriptionWhereInput = {
  AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[]
  OR?: Prisma.SubscriptionWhereInput[]
  NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[]
  id?: Prisma.StringFilter<"Subscription"> | string
  tenantId?: Prisma.StringFilter<"Subscription"> | string
  stripeCustomerId?: Prisma.StringNullableFilter<"Subscription"> | string | null
  stripeSubId?: Prisma.StringNullableFilter<"Subscription"> | string | null
  status?: Prisma.StringFilter<"Subscription"> | string
  planType?: Prisma.StringFilter<"Subscription"> | string
  currentPeriodEnd?: Prisma.DateTimeFilter<"Subscription"> | Date | string
  userCount?: Prisma.IntFilter<"Subscription"> | number
  licenseCost?: Prisma.FloatFilter<"Subscription"> | number
  setupFee?: Prisma.FloatFilter<"Subscription"> | number
  trainingFee?: Prisma.FloatFilter<"Subscription"> | number
  customModuleFee?: Prisma.FloatFilter<"Subscription"> | number
  paymentRef?: Prisma.StringNullableFilter<"Subscription"> | string | null
  customerName?: Prisma.StringNullableFilter<"Subscription"> | string | null
  role?: Prisma.StringFilter<"Subscription"> | string
  permissions?: Prisma.StringNullableListFilter<"Subscription">
  createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string
}

export type SubscriptionOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeCustomerId?: Prisma.SortOrderInput | Prisma.SortOrder
  stripeSubId?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  licenseCost?: Prisma.SortOrder
  setupFee?: Prisma.SortOrder
  trainingFee?: Prisma.SortOrder
  customModuleFee?: Prisma.SortOrder
  paymentRef?: Prisma.SortOrderInput | Prisma.SortOrder
  customerName?: Prisma.SortOrderInput | Prisma.SortOrder
  role?: Prisma.SortOrder
  permissions?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  tenantId?: string
  stripeSubId?: string
  AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[]
  OR?: Prisma.SubscriptionWhereInput[]
  NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[]
  stripeCustomerId?: Prisma.StringNullableFilter<"Subscription"> | string | null
  status?: Prisma.StringFilter<"Subscription"> | string
  planType?: Prisma.StringFilter<"Subscription"> | string
  currentPeriodEnd?: Prisma.DateTimeFilter<"Subscription"> | Date | string
  userCount?: Prisma.IntFilter<"Subscription"> | number
  licenseCost?: Prisma.FloatFilter<"Subscription"> | number
  setupFee?: Prisma.FloatFilter<"Subscription"> | number
  trainingFee?: Prisma.FloatFilter<"Subscription"> | number
  customModuleFee?: Prisma.FloatFilter<"Subscription"> | number
  paymentRef?: Prisma.StringNullableFilter<"Subscription"> | string | null
  customerName?: Prisma.StringNullableFilter<"Subscription"> | string | null
  role?: Prisma.StringFilter<"Subscription"> | string
  permissions?: Prisma.StringNullableListFilter<"Subscription">
  createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string
}, "id" | "tenantId" | "stripeSubId">

export type SubscriptionOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeCustomerId?: Prisma.SortOrderInput | Prisma.SortOrder
  stripeSubId?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  licenseCost?: Prisma.SortOrder
  setupFee?: Prisma.SortOrder
  trainingFee?: Prisma.SortOrder
  customModuleFee?: Prisma.SortOrder
  paymentRef?: Prisma.SortOrderInput | Prisma.SortOrder
  customerName?: Prisma.SortOrderInput | Prisma.SortOrder
  role?: Prisma.SortOrder
  permissions?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.SubscriptionCountOrderByAggregateInput
  _avg?: Prisma.SubscriptionAvgOrderByAggregateInput
  _max?: Prisma.SubscriptionMaxOrderByAggregateInput
  _min?: Prisma.SubscriptionMinOrderByAggregateInput
  _sum?: Prisma.SubscriptionSumOrderByAggregateInput
}

export type SubscriptionScalarWhereWithAggregatesInput = {
  AND?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[]
  OR?: Prisma.SubscriptionScalarWhereWithAggregatesInput[]
  NOT?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Subscription"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"Subscription"> | string
  stripeCustomerId?: Prisma.StringNullableWithAggregatesFilter<"Subscription"> | string | null
  stripeSubId?: Prisma.StringNullableWithAggregatesFilter<"Subscription"> | string | null
  status?: Prisma.StringWithAggregatesFilter<"Subscription"> | string
  planType?: Prisma.StringWithAggregatesFilter<"Subscription"> | string
  currentPeriodEnd?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  userCount?: Prisma.IntWithAggregatesFilter<"Subscription"> | number
  licenseCost?: Prisma.FloatWithAggregatesFilter<"Subscription"> | number
  setupFee?: Prisma.FloatWithAggregatesFilter<"Subscription"> | number
  trainingFee?: Prisma.FloatWithAggregatesFilter<"Subscription"> | number
  customModuleFee?: Prisma.FloatWithAggregatesFilter<"Subscription"> | number
  paymentRef?: Prisma.StringNullableWithAggregatesFilter<"Subscription"> | string | null
  customerName?: Prisma.StringNullableWithAggregatesFilter<"Subscription"> | string | null
  role?: Prisma.StringWithAggregatesFilter<"Subscription"> | string
  permissions?: Prisma.StringNullableListFilter<"Subscription">
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string
}

export type SubscriptionCreateInput = {
  id?: string
  tenantId: string
  stripeCustomerId?: string | null
  stripeSubId?: string | null
  status: string
  planType?: string
  currentPeriodEnd: Date | string
  userCount?: number
  licenseCost?: number
  setupFee?: number
  trainingFee?: number
  customModuleFee?: number
  paymentRef?: string | null
  customerName?: string | null
  role?: string
  permissions?: Prisma.SubscriptionCreatepermissionsInput | string[]
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type SubscriptionUncheckedCreateInput = {
  id?: string
  tenantId: string
  stripeCustomerId?: string | null
  stripeSubId?: string | null
  status: string
  planType?: string
  currentPeriodEnd: Date | string
  userCount?: number
  licenseCost?: number
  setupFee?: number
  trainingFee?: number
  customModuleFee?: number
  paymentRef?: string | null
  customerName?: string | null
  role?: string
  permissions?: Prisma.SubscriptionCreatepermissionsInput | string[]
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type SubscriptionUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeSubId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  licenseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  setupFee?: Prisma.FloatFieldUpdateOperationsInput | number
  trainingFee?: Prisma.FloatFieldUpdateOperationsInput | number
  customModuleFee?: Prisma.FloatFieldUpdateOperationsInput | number
  paymentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  customerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  role?: Prisma.StringFieldUpdateOperationsInput | string
  permissions?: Prisma.SubscriptionUpdatepermissionsInput | string[]
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SubscriptionUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeSubId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  licenseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  setupFee?: Prisma.FloatFieldUpdateOperationsInput | number
  trainingFee?: Prisma.FloatFieldUpdateOperationsInput | number
  customModuleFee?: Prisma.FloatFieldUpdateOperationsInput | number
  paymentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  customerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  role?: Prisma.StringFieldUpdateOperationsInput | string
  permissions?: Prisma.SubscriptionUpdatepermissionsInput | string[]
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SubscriptionCreateManyInput = {
  id?: string
  tenantId: string
  stripeCustomerId?: string | null
  stripeSubId?: string | null
  status: string
  planType?: string
  currentPeriodEnd: Date | string
  userCount?: number
  licenseCost?: number
  setupFee?: number
  trainingFee?: number
  customModuleFee?: number
  paymentRef?: string | null
  customerName?: string | null
  role?: string
  permissions?: Prisma.SubscriptionCreatepermissionsInput | string[]
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type SubscriptionUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeSubId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  licenseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  setupFee?: Prisma.FloatFieldUpdateOperationsInput | number
  trainingFee?: Prisma.FloatFieldUpdateOperationsInput | number
  customModuleFee?: Prisma.FloatFieldUpdateOperationsInput | number
  paymentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  customerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  role?: Prisma.StringFieldUpdateOperationsInput | string
  permissions?: Prisma.SubscriptionUpdatepermissionsInput | string[]
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SubscriptionUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeSubId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  planType?: Prisma.StringFieldUpdateOperationsInput | string
  currentPeriodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  userCount?: Prisma.IntFieldUpdateOperationsInput | number
  licenseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  setupFee?: Prisma.FloatFieldUpdateOperationsInput | number
  trainingFee?: Prisma.FloatFieldUpdateOperationsInput | number
  customModuleFee?: Prisma.FloatFieldUpdateOperationsInput | number
  paymentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  customerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  role?: Prisma.StringFieldUpdateOperationsInput | string
  permissions?: Prisma.SubscriptionUpdatepermissionsInput | string[]
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type StringNullableListFilter<$PrismaModel = never> = {
  equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null
  has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null
  hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>
  isEmpty?: boolean
}

export type SubscriptionCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeCustomerId?: Prisma.SortOrder
  stripeSubId?: Prisma.SortOrder
  status?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  licenseCost?: Prisma.SortOrder
  setupFee?: Prisma.SortOrder
  trainingFee?: Prisma.SortOrder
  customModuleFee?: Prisma.SortOrder
  paymentRef?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  role?: Prisma.SortOrder
  permissions?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type SubscriptionAvgOrderByAggregateInput = {
  userCount?: Prisma.SortOrder
  licenseCost?: Prisma.SortOrder
  setupFee?: Prisma.SortOrder
  trainingFee?: Prisma.SortOrder
  customModuleFee?: Prisma.SortOrder
}

export type SubscriptionMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeCustomerId?: Prisma.SortOrder
  stripeSubId?: Prisma.SortOrder
  status?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  licenseCost?: Prisma.SortOrder
  setupFee?: Prisma.SortOrder
  trainingFee?: Prisma.SortOrder
  customModuleFee?: Prisma.SortOrder
  paymentRef?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  role?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type SubscriptionMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  stripeCustomerId?: Prisma.SortOrder
  stripeSubId?: Prisma.SortOrder
  status?: Prisma.SortOrder
  planType?: Prisma.SortOrder
  currentPeriodEnd?: Prisma.SortOrder
  userCount?: Prisma.SortOrder
  licenseCost?: Prisma.SortOrder
  setupFee?: Prisma.SortOrder
  trainingFee?: Prisma.SortOrder
  customModuleFee?: Prisma.SortOrder
  paymentRef?: Prisma.SortOrder
  customerName?: Prisma.SortOrder
  role?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type SubscriptionSumOrderByAggregateInput = {
  userCount?: Prisma.SortOrder
  licenseCost?: Prisma.SortOrder
  setupFee?: Prisma.SortOrder
  trainingFee?: Prisma.SortOrder
  customModuleFee?: Prisma.SortOrder
}

export type SubscriptionCreatepermissionsInput = {
  set: string[]
}

export type SubscriptionUpdatepermissionsInput = {
  set?: string[]
  push?: string | string[]
}



export type SubscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  stripeCustomerId?: boolean
  stripeSubId?: boolean
  status?: boolean
  planType?: boolean
  currentPeriodEnd?: boolean
  userCount?: boolean
  licenseCost?: boolean
  setupFee?: boolean
  trainingFee?: boolean
  customModuleFee?: boolean
  paymentRef?: boolean
  customerName?: boolean
  role?: boolean
  permissions?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["subscription"]>

export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  stripeCustomerId?: boolean
  stripeSubId?: boolean
  status?: boolean
  planType?: boolean
  currentPeriodEnd?: boolean
  userCount?: boolean
  licenseCost?: boolean
  setupFee?: boolean
  trainingFee?: boolean
  customModuleFee?: boolean
  paymentRef?: boolean
  customerName?: boolean
  role?: boolean
  permissions?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["subscription"]>

export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  stripeCustomerId?: boolean
  stripeSubId?: boolean
  status?: boolean
  planType?: boolean
  currentPeriodEnd?: boolean
  userCount?: boolean
  licenseCost?: boolean
  setupFee?: boolean
  trainingFee?: boolean
  customModuleFee?: boolean
  paymentRef?: boolean
  customerName?: boolean
  role?: boolean
  permissions?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["subscription"]>

export type SubscriptionSelectScalar = {
  id?: boolean
  tenantId?: boolean
  stripeCustomerId?: boolean
  stripeSubId?: boolean
  status?: boolean
  planType?: boolean
  currentPeriodEnd?: boolean
  userCount?: boolean
  licenseCost?: boolean
  setupFee?: boolean
  trainingFee?: boolean
  customModuleFee?: boolean
  paymentRef?: boolean
  customerName?: boolean
  role?: boolean
  permissions?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type SubscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "stripeCustomerId" | "stripeSubId" | "status" | "planType" | "currentPeriodEnd" | "userCount" | "licenseCost" | "setupFee" | "trainingFee" | "customModuleFee" | "paymentRef" | "customerName" | "role" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>

export type $SubscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Subscription"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    stripeCustomerId: string | null
    stripeSubId: string | null
    status: string
    planType: string
    currentPeriodEnd: Date
    userCount: number
    licenseCost: number
    setupFee: number
    trainingFee: number
    customModuleFee: number
    paymentRef: string | null
    customerName: string | null
    role: string
    permissions: string[]
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["subscription"]>
  composites: {}
}

export type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload, S>

export type SubscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionCountAggregateInputType | true
  }

export interface SubscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
  
  findUnique<T extends SubscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends SubscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends SubscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends SubscriptionCreateArgs>(args: Prisma.SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends SubscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends SubscriptionDeleteArgs>(args: Prisma.SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends SubscriptionUpdateArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends SubscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends SubscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends SubscriptionUpsertArgs>(args: Prisma.SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends SubscriptionCountArgs>(
    args?: Prisma.Subset<T, SubscriptionCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends SubscriptionAggregateArgs>(args: Prisma.Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

  
  groupBy<
    T extends SubscriptionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
      : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: SubscriptionFieldRefs;
}


export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface SubscriptionFieldRefs {
  readonly id: Prisma.FieldRef<"Subscription", 'String'>
  readonly tenantId: Prisma.FieldRef<"Subscription", 'String'>
  readonly stripeCustomerId: Prisma.FieldRef<"Subscription", 'String'>
  readonly stripeSubId: Prisma.FieldRef<"Subscription", 'String'>
  readonly status: Prisma.FieldRef<"Subscription", 'String'>
  readonly planType: Prisma.FieldRef<"Subscription", 'String'>
  readonly currentPeriodEnd: Prisma.FieldRef<"Subscription", 'DateTime'>
  readonly userCount: Prisma.FieldRef<"Subscription", 'Int'>
  readonly licenseCost: Prisma.FieldRef<"Subscription", 'Float'>
  readonly setupFee: Prisma.FieldRef<"Subscription", 'Float'>
  readonly trainingFee: Prisma.FieldRef<"Subscription", 'Float'>
  readonly customModuleFee: Prisma.FieldRef<"Subscription", 'Float'>
  readonly paymentRef: Prisma.FieldRef<"Subscription", 'String'>
  readonly customerName: Prisma.FieldRef<"Subscription", 'String'>
  readonly role: Prisma.FieldRef<"Subscription", 'String'>
  readonly permissions: Prisma.FieldRef<"Subscription", 'String[]'>
  readonly createdAt: Prisma.FieldRef<"Subscription", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Subscription", 'DateTime'>
}
    



export type SubscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  where: Prisma.SubscriptionWhereUniqueInput
}


export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  where: Prisma.SubscriptionWhereUniqueInput
}


export type SubscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  where?: Prisma.SubscriptionWhereInput
  
  orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.SubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[]
}


export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  where?: Prisma.SubscriptionWhereInput
  
  orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.SubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[]
}


export type SubscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  where?: Prisma.SubscriptionWhereInput
  
  orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[]
  
  cursor?: Prisma.SubscriptionWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[]
}


export type SubscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>
}


export type SubscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[]
  skipDuplicates?: boolean
}


export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[]
  skipDuplicates?: boolean
}


export type SubscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>
  
  where: Prisma.SubscriptionWhereUniqueInput
}


export type SubscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>
  
  where?: Prisma.SubscriptionWhereInput
  
  limit?: number
}


export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>
  
  where?: Prisma.SubscriptionWhereInput
  
  limit?: number
}


export type SubscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  where: Prisma.SubscriptionWhereUniqueInput
  
  create: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>
}


export type SubscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
  
  where: Prisma.SubscriptionWhereUniqueInput
}


export type SubscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SubscriptionWhereInput
  
  limit?: number
}


export type SubscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SubscriptionSelect<ExtArgs> | null
  
  omit?: Prisma.SubscriptionOmit<ExtArgs> | null
}
