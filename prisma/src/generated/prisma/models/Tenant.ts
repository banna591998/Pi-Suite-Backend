





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type TenantModel = runtime.Types.Result.DefaultSelection<Prisma.$TenantPayload>

export type AggregateTenant = {
  _count: TenantCountAggregateOutputType | null
  _min: TenantMinAggregateOutputType | null
  _max: TenantMaxAggregateOutputType | null
}

export type TenantMinAggregateOutputType = {
  id: string | null
  companyName: string | null
  slug: string | null
  isActive: boolean | null
  industry: string | null
  size: string | null
  address: string | null
  contactEmail: string | null
  phone: string | null
  createdAt: Date | null
  updatedAt: Date | null
  stripeSecretKey: string | null
  stripeWebhookSecret: string | null
}

export type TenantMaxAggregateOutputType = {
  id: string | null
  companyName: string | null
  slug: string | null
  isActive: boolean | null
  industry: string | null
  size: string | null
  address: string | null
  contactEmail: string | null
  phone: string | null
  createdAt: Date | null
  updatedAt: Date | null
  stripeSecretKey: string | null
  stripeWebhookSecret: string | null
}

export type TenantCountAggregateOutputType = {
  id: number
  companyName: number
  slug: number
  isActive: number
  industry: number
  size: number
  address: number
  contactEmail: number
  phone: number
  createdAt: number
  updatedAt: number
  allowedIps: number
  stripeSecretKey: number
  stripeWebhookSecret: number
  _all: number
}


export type TenantMinAggregateInputType = {
  id?: true
  companyName?: true
  slug?: true
  isActive?: true
  industry?: true
  size?: true
  address?: true
  contactEmail?: true
  phone?: true
  createdAt?: true
  updatedAt?: true
  stripeSecretKey?: true
  stripeWebhookSecret?: true
}

export type TenantMaxAggregateInputType = {
  id?: true
  companyName?: true
  slug?: true
  isActive?: true
  industry?: true
  size?: true
  address?: true
  contactEmail?: true
  phone?: true
  createdAt?: true
  updatedAt?: true
  stripeSecretKey?: true
  stripeWebhookSecret?: true
}

export type TenantCountAggregateInputType = {
  id?: true
  companyName?: true
  slug?: true
  isActive?: true
  industry?: true
  size?: true
  address?: true
  contactEmail?: true
  phone?: true
  createdAt?: true
  updatedAt?: true
  allowedIps?: true
  stripeSecretKey?: true
  stripeWebhookSecret?: true
  _all?: true
}

export type TenantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.TenantWhereInput
  
  orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | TenantCountAggregateInputType
  
  _min?: TenantMinAggregateInputType
  
  _max?: TenantMaxAggregateInputType
}

export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
      [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateTenant[P]>
    : Prisma.GetScalarType<T[P], AggregateTenant[P]>
}




export type TenantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.TenantWhereInput
  orderBy?: Prisma.TenantOrderByWithAggregationInput | Prisma.TenantOrderByWithAggregationInput[]
  by: Prisma.TenantScalarFieldEnum[] | Prisma.TenantScalarFieldEnum
  having?: Prisma.TenantScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: TenantCountAggregateInputType | true
  _min?: TenantMinAggregateInputType
  _max?: TenantMaxAggregateInputType
}

export type TenantGroupByOutputType = {
  id: string
  companyName: string
  slug: string
  isActive: boolean
  industry: string | null
  size: string | null
  address: string | null
  contactEmail: string | null
  phone: string | null
  createdAt: Date
  updatedAt: Date
  allowedIps: string[]
  stripeSecretKey: string | null
  stripeWebhookSecret: string | null
  _count: TenantCountAggregateOutputType | null
  _min: TenantMinAggregateOutputType | null
  _max: TenantMaxAggregateOutputType | null
}

export type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<TenantGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], TenantGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], TenantGroupByOutputType[P]>
      }
    >
  >



export type TenantWhereInput = {
  AND?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[]
  OR?: Prisma.TenantWhereInput[]
  NOT?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[]
  id?: Prisma.StringFilter<"Tenant"> | string
  companyName?: Prisma.StringFilter<"Tenant"> | string
  slug?: Prisma.StringFilter<"Tenant"> | string
  isActive?: Prisma.BoolFilter<"Tenant"> | boolean
  industry?: Prisma.StringNullableFilter<"Tenant"> | string | null
  size?: Prisma.StringNullableFilter<"Tenant"> | string | null
  address?: Prisma.StringNullableFilter<"Tenant"> | string | null
  contactEmail?: Prisma.StringNullableFilter<"Tenant"> | string | null
  phone?: Prisma.StringNullableFilter<"Tenant"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string
  allowedIps?: Prisma.StringNullableListFilter<"Tenant">
  stripeSecretKey?: Prisma.StringNullableFilter<"Tenant"> | string | null
  stripeWebhookSecret?: Prisma.StringNullableFilter<"Tenant"> | string | null
  users?: Prisma.UserListRelationFilter
  roles?: Prisma.RoleListRelationFilter
  branches?: Prisma.BranchListRelationFilter
}

export type TenantOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  companyName?: Prisma.SortOrder
  slug?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  industry?: Prisma.SortOrderInput | Prisma.SortOrder
  size?: Prisma.SortOrderInput | Prisma.SortOrder
  address?: Prisma.SortOrderInput | Prisma.SortOrder
  contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder
  phone?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  allowedIps?: Prisma.SortOrder
  stripeSecretKey?: Prisma.SortOrderInput | Prisma.SortOrder
  stripeWebhookSecret?: Prisma.SortOrderInput | Prisma.SortOrder
  users?: Prisma.UserOrderByRelationAggregateInput
  roles?: Prisma.RoleOrderByRelationAggregateInput
  branches?: Prisma.BranchOrderByRelationAggregateInput
}

export type TenantWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  slug?: string
  AND?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[]
  OR?: Prisma.TenantWhereInput[]
  NOT?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[]
  companyName?: Prisma.StringFilter<"Tenant"> | string
  isActive?: Prisma.BoolFilter<"Tenant"> | boolean
  industry?: Prisma.StringNullableFilter<"Tenant"> | string | null
  size?: Prisma.StringNullableFilter<"Tenant"> | string | null
  address?: Prisma.StringNullableFilter<"Tenant"> | string | null
  contactEmail?: Prisma.StringNullableFilter<"Tenant"> | string | null
  phone?: Prisma.StringNullableFilter<"Tenant"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string
  allowedIps?: Prisma.StringNullableListFilter<"Tenant">
  stripeSecretKey?: Prisma.StringNullableFilter<"Tenant"> | string | null
  stripeWebhookSecret?: Prisma.StringNullableFilter<"Tenant"> | string | null
  users?: Prisma.UserListRelationFilter
  roles?: Prisma.RoleListRelationFilter
  branches?: Prisma.BranchListRelationFilter
}, "id" | "slug">

export type TenantOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  companyName?: Prisma.SortOrder
  slug?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  industry?: Prisma.SortOrderInput | Prisma.SortOrder
  size?: Prisma.SortOrderInput | Prisma.SortOrder
  address?: Prisma.SortOrderInput | Prisma.SortOrder
  contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder
  phone?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  allowedIps?: Prisma.SortOrder
  stripeSecretKey?: Prisma.SortOrderInput | Prisma.SortOrder
  stripeWebhookSecret?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.TenantCountOrderByAggregateInput
  _max?: Prisma.TenantMaxOrderByAggregateInput
  _min?: Prisma.TenantMinOrderByAggregateInput
}

export type TenantScalarWhereWithAggregatesInput = {
  AND?: Prisma.TenantScalarWhereWithAggregatesInput | Prisma.TenantScalarWhereWithAggregatesInput[]
  OR?: Prisma.TenantScalarWhereWithAggregatesInput[]
  NOT?: Prisma.TenantScalarWhereWithAggregatesInput | Prisma.TenantScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Tenant"> | string
  companyName?: Prisma.StringWithAggregatesFilter<"Tenant"> | string
  slug?: Prisma.StringWithAggregatesFilter<"Tenant"> | string
  isActive?: Prisma.BoolWithAggregatesFilter<"Tenant"> | boolean
  industry?: Prisma.StringNullableWithAggregatesFilter<"Tenant"> | string | null
  size?: Prisma.StringNullableWithAggregatesFilter<"Tenant"> | string | null
  address?: Prisma.StringNullableWithAggregatesFilter<"Tenant"> | string | null
  contactEmail?: Prisma.StringNullableWithAggregatesFilter<"Tenant"> | string | null
  phone?: Prisma.StringNullableWithAggregatesFilter<"Tenant"> | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  allowedIps?: Prisma.StringNullableListFilter<"Tenant">
  stripeSecretKey?: Prisma.StringNullableWithAggregatesFilter<"Tenant"> | string | null
  stripeWebhookSecret?: Prisma.StringNullableWithAggregatesFilter<"Tenant"> | string | null
}

export type TenantCreateInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  users?: Prisma.UserCreateNestedManyWithoutTenantInput
  roles?: Prisma.RoleCreateNestedManyWithoutTenantInput
  branches?: Prisma.BranchCreateNestedManyWithoutTenantInput
}

export type TenantUncheckedCreateInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput
  roles?: Prisma.RoleUncheckedCreateNestedManyWithoutTenantInput
  branches?: Prisma.BranchUncheckedCreateNestedManyWithoutTenantInput
}

export type TenantUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  users?: Prisma.UserUpdateManyWithoutTenantNestedInput
  roles?: Prisma.RoleUpdateManyWithoutTenantNestedInput
  branches?: Prisma.BranchUpdateManyWithoutTenantNestedInput
}

export type TenantUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput
  roles?: Prisma.RoleUncheckedUpdateManyWithoutTenantNestedInput
  branches?: Prisma.BranchUncheckedUpdateManyWithoutTenantNestedInput
}

export type TenantCreateManyInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
}

export type TenantUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type TenantUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type TenantScalarRelationFilter = {
  is?: Prisma.TenantWhereInput
  isNot?: Prisma.TenantWhereInput
}

export type TenantCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  companyName?: Prisma.SortOrder
  slug?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  industry?: Prisma.SortOrder
  size?: Prisma.SortOrder
  address?: Prisma.SortOrder
  contactEmail?: Prisma.SortOrder
  phone?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  allowedIps?: Prisma.SortOrder
  stripeSecretKey?: Prisma.SortOrder
  stripeWebhookSecret?: Prisma.SortOrder
}

export type TenantMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  companyName?: Prisma.SortOrder
  slug?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  industry?: Prisma.SortOrder
  size?: Prisma.SortOrder
  address?: Prisma.SortOrder
  contactEmail?: Prisma.SortOrder
  phone?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  stripeSecretKey?: Prisma.SortOrder
  stripeWebhookSecret?: Prisma.SortOrder
}

export type TenantMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  companyName?: Prisma.SortOrder
  slug?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  industry?: Prisma.SortOrder
  size?: Prisma.SortOrder
  address?: Prisma.SortOrder
  contactEmail?: Prisma.SortOrder
  phone?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  stripeSecretKey?: Prisma.SortOrder
  stripeWebhookSecret?: Prisma.SortOrder
}

export type TenantCreateNestedOneWithoutUsersInput = {
  create?: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>
  connectOrCreate?: Prisma.TenantCreateOrConnectWithoutUsersInput
  connect?: Prisma.TenantWhereUniqueInput
}

export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
  create?: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>
  connectOrCreate?: Prisma.TenantCreateOrConnectWithoutUsersInput
  upsert?: Prisma.TenantUpsertWithoutUsersInput
  connect?: Prisma.TenantWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutUsersInput, Prisma.TenantUpdateWithoutUsersInput>, Prisma.TenantUncheckedUpdateWithoutUsersInput>
}

export type TenantCreateNestedOneWithoutRolesInput = {
  create?: Prisma.XOR<Prisma.TenantCreateWithoutRolesInput, Prisma.TenantUncheckedCreateWithoutRolesInput>
  connectOrCreate?: Prisma.TenantCreateOrConnectWithoutRolesInput
  connect?: Prisma.TenantWhereUniqueInput
}

export type TenantUpdateOneRequiredWithoutRolesNestedInput = {
  create?: Prisma.XOR<Prisma.TenantCreateWithoutRolesInput, Prisma.TenantUncheckedCreateWithoutRolesInput>
  connectOrCreate?: Prisma.TenantCreateOrConnectWithoutRolesInput
  upsert?: Prisma.TenantUpsertWithoutRolesInput
  connect?: Prisma.TenantWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutRolesInput, Prisma.TenantUpdateWithoutRolesInput>, Prisma.TenantUncheckedUpdateWithoutRolesInput>
}

export type TenantCreateallowedIpsInput = {
  set: string[]
}

export type TenantUpdateallowedIpsInput = {
  set?: string[]
  push?: string | string[]
}

export type TenantCreateNestedOneWithoutBranchesInput = {
  create?: Prisma.XOR<Prisma.TenantCreateWithoutBranchesInput, Prisma.TenantUncheckedCreateWithoutBranchesInput>
  connectOrCreate?: Prisma.TenantCreateOrConnectWithoutBranchesInput
  connect?: Prisma.TenantWhereUniqueInput
}

export type TenantUpdateOneRequiredWithoutBranchesNestedInput = {
  create?: Prisma.XOR<Prisma.TenantCreateWithoutBranchesInput, Prisma.TenantUncheckedCreateWithoutBranchesInput>
  connectOrCreate?: Prisma.TenantCreateOrConnectWithoutBranchesInput
  upsert?: Prisma.TenantUpsertWithoutBranchesInput
  connect?: Prisma.TenantWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutBranchesInput, Prisma.TenantUpdateWithoutBranchesInput>, Prisma.TenantUncheckedUpdateWithoutBranchesInput>
}

export type TenantCreateWithoutUsersInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  roles?: Prisma.RoleCreateNestedManyWithoutTenantInput
  branches?: Prisma.BranchCreateNestedManyWithoutTenantInput
}

export type TenantUncheckedCreateWithoutUsersInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  roles?: Prisma.RoleUncheckedCreateNestedManyWithoutTenantInput
  branches?: Prisma.BranchUncheckedCreateNestedManyWithoutTenantInput
}

export type TenantCreateOrConnectWithoutUsersInput = {
  where: Prisma.TenantWhereUniqueInput
  create: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>
}

export type TenantUpsertWithoutUsersInput = {
  update: Prisma.XOR<Prisma.TenantUpdateWithoutUsersInput, Prisma.TenantUncheckedUpdateWithoutUsersInput>
  create: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>
  where?: Prisma.TenantWhereInput
}

export type TenantUpdateToOneWithWhereWithoutUsersInput = {
  where?: Prisma.TenantWhereInput
  data: Prisma.XOR<Prisma.TenantUpdateWithoutUsersInput, Prisma.TenantUncheckedUpdateWithoutUsersInput>
}

export type TenantUpdateWithoutUsersInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  roles?: Prisma.RoleUpdateManyWithoutTenantNestedInput
  branches?: Prisma.BranchUpdateManyWithoutTenantNestedInput
}

export type TenantUncheckedUpdateWithoutUsersInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  roles?: Prisma.RoleUncheckedUpdateManyWithoutTenantNestedInput
  branches?: Prisma.BranchUncheckedUpdateManyWithoutTenantNestedInput
}

export type TenantCreateWithoutRolesInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  users?: Prisma.UserCreateNestedManyWithoutTenantInput
  branches?: Prisma.BranchCreateNestedManyWithoutTenantInput
}

export type TenantUncheckedCreateWithoutRolesInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput
  branches?: Prisma.BranchUncheckedCreateNestedManyWithoutTenantInput
}

export type TenantCreateOrConnectWithoutRolesInput = {
  where: Prisma.TenantWhereUniqueInput
  create: Prisma.XOR<Prisma.TenantCreateWithoutRolesInput, Prisma.TenantUncheckedCreateWithoutRolesInput>
}

export type TenantUpsertWithoutRolesInput = {
  update: Prisma.XOR<Prisma.TenantUpdateWithoutRolesInput, Prisma.TenantUncheckedUpdateWithoutRolesInput>
  create: Prisma.XOR<Prisma.TenantCreateWithoutRolesInput, Prisma.TenantUncheckedCreateWithoutRolesInput>
  where?: Prisma.TenantWhereInput
}

export type TenantUpdateToOneWithWhereWithoutRolesInput = {
  where?: Prisma.TenantWhereInput
  data: Prisma.XOR<Prisma.TenantUpdateWithoutRolesInput, Prisma.TenantUncheckedUpdateWithoutRolesInput>
}

export type TenantUpdateWithoutRolesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  users?: Prisma.UserUpdateManyWithoutTenantNestedInput
  branches?: Prisma.BranchUpdateManyWithoutTenantNestedInput
}

export type TenantUncheckedUpdateWithoutRolesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput
  branches?: Prisma.BranchUncheckedUpdateManyWithoutTenantNestedInput
}

export type TenantCreateWithoutBranchesInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  users?: Prisma.UserCreateNestedManyWithoutTenantInput
  roles?: Prisma.RoleCreateNestedManyWithoutTenantInput
}

export type TenantUncheckedCreateWithoutBranchesInput = {
  id?: string
  companyName: string
  slug: string
  isActive?: boolean
  industry?: string | null
  size?: string | null
  address?: string | null
  contactEmail?: string | null
  phone?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  allowedIps?: Prisma.TenantCreateallowedIpsInput | string[]
  stripeSecretKey?: string | null
  stripeWebhookSecret?: string | null
  users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput
  roles?: Prisma.RoleUncheckedCreateNestedManyWithoutTenantInput
}

export type TenantCreateOrConnectWithoutBranchesInput = {
  where: Prisma.TenantWhereUniqueInput
  create: Prisma.XOR<Prisma.TenantCreateWithoutBranchesInput, Prisma.TenantUncheckedCreateWithoutBranchesInput>
}

export type TenantUpsertWithoutBranchesInput = {
  update: Prisma.XOR<Prisma.TenantUpdateWithoutBranchesInput, Prisma.TenantUncheckedUpdateWithoutBranchesInput>
  create: Prisma.XOR<Prisma.TenantCreateWithoutBranchesInput, Prisma.TenantUncheckedCreateWithoutBranchesInput>
  where?: Prisma.TenantWhereInput
}

export type TenantUpdateToOneWithWhereWithoutBranchesInput = {
  where?: Prisma.TenantWhereInput
  data: Prisma.XOR<Prisma.TenantUpdateWithoutBranchesInput, Prisma.TenantUncheckedUpdateWithoutBranchesInput>
}

export type TenantUpdateWithoutBranchesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  users?: Prisma.UserUpdateManyWithoutTenantNestedInput
  roles?: Prisma.RoleUpdateManyWithoutTenantNestedInput
}

export type TenantUncheckedUpdateWithoutBranchesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  companyName?: Prisma.StringFieldUpdateOperationsInput | string
  slug?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  allowedIps?: Prisma.TenantUpdateallowedIpsInput | string[]
  stripeSecretKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  stripeWebhookSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput
  roles?: Prisma.RoleUncheckedUpdateManyWithoutTenantNestedInput
}




export type TenantCountOutputType = {
  users: number
  roles: number
  branches: number
}

export type TenantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  users?: boolean | TenantCountOutputTypeCountUsersArgs
  roles?: boolean | TenantCountOutputTypeCountRolesArgs
  branches?: boolean | TenantCountOutputTypeCountBranchesArgs
}


export type TenantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantCountOutputTypeSelect<ExtArgs> | null
}


export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.UserWhereInput
}


export type TenantCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.RoleWhereInput
}


export type TenantCountOutputTypeCountBranchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.BranchWhereInput
}


export type TenantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  companyName?: boolean
  slug?: boolean
  isActive?: boolean
  industry?: boolean
  size?: boolean
  address?: boolean
  contactEmail?: boolean
  phone?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  allowedIps?: boolean
  stripeSecretKey?: boolean
  stripeWebhookSecret?: boolean
  users?: boolean | Prisma.Tenant$usersArgs<ExtArgs>
  roles?: boolean | Prisma.Tenant$rolesArgs<ExtArgs>
  branches?: boolean | Prisma.Tenant$branchesArgs<ExtArgs>
  _count?: boolean | Prisma.TenantCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["tenant"]>

export type TenantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  companyName?: boolean
  slug?: boolean
  isActive?: boolean
  industry?: boolean
  size?: boolean
  address?: boolean
  contactEmail?: boolean
  phone?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  allowedIps?: boolean
  stripeSecretKey?: boolean
  stripeWebhookSecret?: boolean
}, ExtArgs["result"]["tenant"]>

export type TenantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  companyName?: boolean
  slug?: boolean
  isActive?: boolean
  industry?: boolean
  size?: boolean
  address?: boolean
  contactEmail?: boolean
  phone?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  allowedIps?: boolean
  stripeSecretKey?: boolean
  stripeWebhookSecret?: boolean
}, ExtArgs["result"]["tenant"]>

export type TenantSelectScalar = {
  id?: boolean
  companyName?: boolean
  slug?: boolean
  isActive?: boolean
  industry?: boolean
  size?: boolean
  address?: boolean
  contactEmail?: boolean
  phone?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  allowedIps?: boolean
  stripeSecretKey?: boolean
  stripeWebhookSecret?: boolean
}

export type TenantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyName" | "slug" | "isActive" | "industry" | "size" | "address" | "contactEmail" | "phone" | "createdAt" | "updatedAt" | "allowedIps" | "stripeSecretKey" | "stripeWebhookSecret", ExtArgs["result"]["tenant"]>
export type TenantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  users?: boolean | Prisma.Tenant$usersArgs<ExtArgs>
  roles?: boolean | Prisma.Tenant$rolesArgs<ExtArgs>
  branches?: boolean | Prisma.Tenant$branchesArgs<ExtArgs>
  _count?: boolean | Prisma.TenantCountOutputTypeDefaultArgs<ExtArgs>
}
export type TenantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type TenantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $TenantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Tenant"
  objects: {
    users: Prisma.$UserPayload<ExtArgs>[]
    roles: Prisma.$RolePayload<ExtArgs>[]
    branches: Prisma.$BranchPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    companyName: string
    slug: string
    isActive: boolean
    industry: string | null
    size: string | null
    address: string | null
    contactEmail: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    allowedIps: string[]
    stripeSecretKey: string | null
    stripeWebhookSecret: string | null
  }, ExtArgs["result"]["tenant"]>
  composites: {}
}

export type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TenantPayload, S>

export type TenantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TenantCountAggregateInputType | true
  }

export interface TenantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
  
  findUnique<T extends TenantFindUniqueArgs>(args: Prisma.SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends TenantFindFirstArgs>(args?: Prisma.SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends TenantFindManyArgs>(args?: Prisma.SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends TenantCreateArgs>(args: Prisma.SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends TenantCreateManyArgs>(args?: Prisma.SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends TenantDeleteArgs>(args: Prisma.SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends TenantUpdateArgs>(args: Prisma.SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends TenantDeleteManyArgs>(args?: Prisma.SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends TenantUpdateManyArgs>(args: Prisma.SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends TenantUpsertArgs>(args: Prisma.SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends TenantCountArgs>(
    args?: Prisma.Subset<T, TenantCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], TenantCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends TenantAggregateArgs>(args: Prisma.Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

  
  groupBy<
    T extends TenantGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: TenantGroupByArgs['orderBy'] }
      : { orderBy?: TenantGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: TenantFieldRefs;
}


export interface Prisma__TenantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  users<T extends Prisma.Tenant$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  roles<T extends Prisma.Tenant$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  branches<T extends Prisma.Tenant$branchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface TenantFieldRefs {
  readonly id: Prisma.FieldRef<"Tenant", 'String'>
  readonly companyName: Prisma.FieldRef<"Tenant", 'String'>
  readonly slug: Prisma.FieldRef<"Tenant", 'String'>
  readonly isActive: Prisma.FieldRef<"Tenant", 'Boolean'>
  readonly industry: Prisma.FieldRef<"Tenant", 'String'>
  readonly size: Prisma.FieldRef<"Tenant", 'String'>
  readonly address: Prisma.FieldRef<"Tenant", 'String'>
  readonly contactEmail: Prisma.FieldRef<"Tenant", 'String'>
  readonly phone: Prisma.FieldRef<"Tenant", 'String'>
  readonly createdAt: Prisma.FieldRef<"Tenant", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Tenant", 'DateTime'>
  readonly allowedIps: Prisma.FieldRef<"Tenant", 'String[]'>
  readonly stripeSecretKey: Prisma.FieldRef<"Tenant", 'String'>
  readonly stripeWebhookSecret: Prisma.FieldRef<"Tenant", 'String'>
}
    



export type TenantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  where: Prisma.TenantWhereUniqueInput
}


export type TenantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  where: Prisma.TenantWhereUniqueInput
}


export type TenantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  where?: Prisma.TenantWhereInput
  
  orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[]
}


export type TenantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  where?: Prisma.TenantWhereInput
  
  orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[]
}


export type TenantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  where?: Prisma.TenantWhereInput
  
  orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[]
  
  cursor?: Prisma.TenantWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[]
}


export type TenantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.TenantCreateInput, Prisma.TenantUncheckedCreateInput>
}


export type TenantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.TenantCreateManyInput | Prisma.TenantCreateManyInput[]
  skipDuplicates?: boolean
}


export type TenantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  data: Prisma.TenantCreateManyInput | Prisma.TenantCreateManyInput[]
  skipDuplicates?: boolean
}


export type TenantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.TenantUpdateInput, Prisma.TenantUncheckedUpdateInput>
  
  where: Prisma.TenantWhereUniqueInput
}


export type TenantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.TenantUpdateManyMutationInput, Prisma.TenantUncheckedUpdateManyInput>
  
  where?: Prisma.TenantWhereInput
  
  limit?: number
}


export type TenantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.TenantUpdateManyMutationInput, Prisma.TenantUncheckedUpdateManyInput>
  
  where?: Prisma.TenantWhereInput
  
  limit?: number
}


export type TenantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  where: Prisma.TenantWhereUniqueInput
  
  create: Prisma.XOR<Prisma.TenantCreateInput, Prisma.TenantUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.TenantUpdateInput, Prisma.TenantUncheckedUpdateInput>
}


export type TenantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
  
  where: Prisma.TenantWhereUniqueInput
}


export type TenantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.TenantWhereInput
  
  limit?: number
}


export type Tenant$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
  where?: Prisma.UserWhereInput
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
  cursor?: Prisma.UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[]
}


export type Tenant$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RoleSelect<ExtArgs> | null
  
  omit?: Prisma.RoleOmit<ExtArgs> | null
  
  include?: Prisma.RoleInclude<ExtArgs> | null
  where?: Prisma.RoleWhereInput
  orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[]
  cursor?: Prisma.RoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[]
}


export type Tenant$branchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.BranchSelect<ExtArgs> | null
  
  omit?: Prisma.BranchOmit<ExtArgs> | null
  
  include?: Prisma.BranchInclude<ExtArgs> | null
  where?: Prisma.BranchWhereInput
  orderBy?: Prisma.BranchOrderByWithRelationInput | Prisma.BranchOrderByWithRelationInput[]
  cursor?: Prisma.BranchWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.BranchScalarFieldEnum | Prisma.BranchScalarFieldEnum[]
}


export type TenantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.TenantSelect<ExtArgs> | null
  
  omit?: Prisma.TenantOmit<ExtArgs> | null
  
  include?: Prisma.TenantInclude<ExtArgs> | null
}
