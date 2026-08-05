





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>

export type AggregateUser = {
  _count: UserCountAggregateOutputType | null
  _min: UserMinAggregateOutputType | null
  _max: UserMaxAggregateOutputType | null
}

export type UserMinAggregateOutputType = {
  id: string | null
  email: string | null
  roleId: string | null
  passwordHash: string | null
  firstName: string | null
  lastName: string | null
  isActive: boolean | null
  createdAt: Date | null
  updatedAt: Date | null
  tenantId: string | null
  resetToken: string | null
  resetTokenExpires: Date | null
  isMfaEnabled: boolean | null
  mfaSecret: string | null
}

export type UserMaxAggregateOutputType = {
  id: string | null
  email: string | null
  roleId: string | null
  passwordHash: string | null
  firstName: string | null
  lastName: string | null
  isActive: boolean | null
  createdAt: Date | null
  updatedAt: Date | null
  tenantId: string | null
  resetToken: string | null
  resetTokenExpires: Date | null
  isMfaEnabled: boolean | null
  mfaSecret: string | null
}

export type UserCountAggregateOutputType = {
  id: number
  email: number
  roleId: number
  passwordHash: number
  firstName: number
  lastName: number
  isActive: number
  createdAt: number
  updatedAt: number
  tenantId: number
  resetToken: number
  resetTokenExpires: number
  isMfaEnabled: number
  mfaSecret: number
  _all: number
}


export type UserMinAggregateInputType = {
  id?: true
  email?: true
  roleId?: true
  passwordHash?: true
  firstName?: true
  lastName?: true
  isActive?: true
  createdAt?: true
  updatedAt?: true
  tenantId?: true
  resetToken?: true
  resetTokenExpires?: true
  isMfaEnabled?: true
  mfaSecret?: true
}

export type UserMaxAggregateInputType = {
  id?: true
  email?: true
  roleId?: true
  passwordHash?: true
  firstName?: true
  lastName?: true
  isActive?: true
  createdAt?: true
  updatedAt?: true
  tenantId?: true
  resetToken?: true
  resetTokenExpires?: true
  isMfaEnabled?: true
  mfaSecret?: true
}

export type UserCountAggregateInputType = {
  id?: true
  email?: true
  roleId?: true
  passwordHash?: true
  firstName?: true
  lastName?: true
  isActive?: true
  createdAt?: true
  updatedAt?: true
  tenantId?: true
  resetToken?: true
  resetTokenExpires?: true
  isMfaEnabled?: true
  mfaSecret?: true
  _all?: true
}

export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.UserWhereInput
  
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
  
  cursor?: Prisma.UserWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | UserCountAggregateInputType
  
  _min?: UserMinAggregateInputType
  
  _max?: UserMaxAggregateInputType
}

export type GetUserAggregateType<T extends UserAggregateArgs> = {
      [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateUser[P]>
    : Prisma.GetScalarType<T[P], AggregateUser[P]>
}




export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.UserWhereInput
  orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[]
  by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum
  having?: Prisma.UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: UserCountAggregateInputType | true
  _min?: UserMinAggregateInputType
  _max?: UserMaxAggregateInputType
}

export type UserGroupByOutputType = {
  id: string
  email: string
  roleId: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  tenantId: string
  resetToken: string | null
  resetTokenExpires: Date | null
  isMfaEnabled: boolean
  mfaSecret: string | null
  _count: UserCountAggregateOutputType | null
  _min: UserMinAggregateOutputType | null
  _max: UserMaxAggregateOutputType | null
}

export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<UserGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >



export type UserWhereInput = {
  AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  OR?: Prisma.UserWhereInput[]
  NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  id?: Prisma.StringFilter<"User"> | string
  email?: Prisma.StringFilter<"User"> | string
  roleId?: Prisma.StringNullableFilter<"User"> | string | null
  passwordHash?: Prisma.StringFilter<"User"> | string
  firstName?: Prisma.StringFilter<"User"> | string
  lastName?: Prisma.StringFilter<"User"> | string
  isActive?: Prisma.BoolFilter<"User"> | boolean
  createdAt?: Prisma.DateTimeFilter<"User"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string
  tenantId?: Prisma.StringFilter<"User"> | string
  resetToken?: Prisma.StringNullableFilter<"User"> | string | null
  resetTokenExpires?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null
  isMfaEnabled?: Prisma.BoolFilter<"User"> | boolean
  mfaSecret?: Prisma.StringNullableFilter<"User"> | string | null
  tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>
  userRoles?: Prisma.UserRoleListRelationFilter
  refreshTokens?: Prisma.RefreshTokenListRelationFilter
  auditLogs?: Prisma.AuditLogListRelationFilter
}

export type UserOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  roleId?: Prisma.SortOrderInput | Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  firstName?: Prisma.SortOrder
  lastName?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  resetToken?: Prisma.SortOrderInput | Prisma.SortOrder
  resetTokenExpires?: Prisma.SortOrderInput | Prisma.SortOrder
  isMfaEnabled?: Prisma.SortOrder
  mfaSecret?: Prisma.SortOrderInput | Prisma.SortOrder
  tenant?: Prisma.TenantOrderByWithRelationInput
  userRoles?: Prisma.UserRoleOrderByRelationAggregateInput
  refreshTokens?: Prisma.RefreshTokenOrderByRelationAggregateInput
  auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput
}

export type UserWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  email?: string
  AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  OR?: Prisma.UserWhereInput[]
  NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  roleId?: Prisma.StringNullableFilter<"User"> | string | null
  passwordHash?: Prisma.StringFilter<"User"> | string
  firstName?: Prisma.StringFilter<"User"> | string
  lastName?: Prisma.StringFilter<"User"> | string
  isActive?: Prisma.BoolFilter<"User"> | boolean
  createdAt?: Prisma.DateTimeFilter<"User"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string
  tenantId?: Prisma.StringFilter<"User"> | string
  resetToken?: Prisma.StringNullableFilter<"User"> | string | null
  resetTokenExpires?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null
  isMfaEnabled?: Prisma.BoolFilter<"User"> | boolean
  mfaSecret?: Prisma.StringNullableFilter<"User"> | string | null
  tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>
  userRoles?: Prisma.UserRoleListRelationFilter
  refreshTokens?: Prisma.RefreshTokenListRelationFilter
  auditLogs?: Prisma.AuditLogListRelationFilter
}, "id" | "email">

export type UserOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  roleId?: Prisma.SortOrderInput | Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  firstName?: Prisma.SortOrder
  lastName?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  resetToken?: Prisma.SortOrderInput | Prisma.SortOrder
  resetTokenExpires?: Prisma.SortOrderInput | Prisma.SortOrder
  isMfaEnabled?: Prisma.SortOrder
  mfaSecret?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.UserCountOrderByAggregateInput
  _max?: Prisma.UserMaxOrderByAggregateInput
  _min?: Prisma.UserMinOrderByAggregateInput
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[]
  OR?: Prisma.UserScalarWhereWithAggregatesInput[]
  NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"User"> | string
  email?: Prisma.StringWithAggregatesFilter<"User"> | string
  roleId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
  passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string
  firstName?: Prisma.StringWithAggregatesFilter<"User"> | string
  lastName?: Prisma.StringWithAggregatesFilter<"User"> | string
  isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string
  tenantId?: Prisma.StringWithAggregatesFilter<"User"> | string
  resetToken?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
  resetTokenExpires?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  isMfaEnabled?: Prisma.BoolWithAggregatesFilter<"User"> | boolean
  mfaSecret?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
}

export type UserCreateInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  tenant: Prisma.TenantCreateNestedOneWithoutUsersInput
  userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput
  refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  tenantId: string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput
  refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput
}

export type UserUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  tenant?: Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput
  userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput
  refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput
  refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateManyInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  tenantId: string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
}

export type UserUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type UserUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type UserCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  roleId?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  firstName?: Prisma.SortOrder
  lastName?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  resetToken?: Prisma.SortOrder
  resetTokenExpires?: Prisma.SortOrder
  isMfaEnabled?: Prisma.SortOrder
  mfaSecret?: Prisma.SortOrder
}

export type UserMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  roleId?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  firstName?: Prisma.SortOrder
  lastName?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  resetToken?: Prisma.SortOrder
  resetTokenExpires?: Prisma.SortOrder
  isMfaEnabled?: Prisma.SortOrder
  mfaSecret?: Prisma.SortOrder
}

export type UserMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  email?: Prisma.SortOrder
  roleId?: Prisma.SortOrder
  passwordHash?: Prisma.SortOrder
  firstName?: Prisma.SortOrder
  lastName?: Prisma.SortOrder
  isActive?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  resetToken?: Prisma.SortOrder
  resetTokenExpires?: Prisma.SortOrder
  isMfaEnabled?: Prisma.SortOrder
  mfaSecret?: Prisma.SortOrder
}

export type UserScalarRelationFilter = {
  is?: Prisma.UserWhereInput
  isNot?: Prisma.UserWhereInput
}

export type UserListRelationFilter = {
  every?: Prisma.UserWhereInput
  some?: Prisma.UserWhereInput
  none?: Prisma.UserWhereInput
}

export type UserOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type UserCreateNestedOneWithoutRefreshTokensInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput
  upsert?: Prisma.UserUpsertWithoutRefreshTokensInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UserUpdateWithoutRefreshTokensInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>
}

export type UserCreateNestedOneWithoutAuditLogsInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput
  upsert?: Prisma.UserUpsertWithoutAuditLogsInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>
}

export type UserCreateNestedOneWithoutUserRolesInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserRolesInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserRolesInput
  upsert?: Prisma.UserUpsertWithoutUserRolesInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserRolesInput, Prisma.UserUpdateWithoutUserRolesInput>, Prisma.UserUncheckedUpdateWithoutUserRolesInput>
}

export type UserCreateNestedManyWithoutTenantInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[]
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[]
  createMany?: Prisma.UserCreateManyTenantInputEnvelope
  connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
}

export type UserUncheckedCreateNestedManyWithoutTenantInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[]
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[]
  createMany?: Prisma.UserCreateManyTenantInputEnvelope
  connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
}

export type UserUpdateManyWithoutTenantNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[]
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[]
  upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTenantInput | Prisma.UserUpsertWithWhereUniqueWithoutTenantInput[]
  createMany?: Prisma.UserCreateManyTenantInputEnvelope
  set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  update?: Prisma.UserUpdateWithWhereUniqueWithoutTenantInput | Prisma.UserUpdateWithWhereUniqueWithoutTenantInput[]
  updateMany?: Prisma.UserUpdateManyWithWhereWithoutTenantInput | Prisma.UserUpdateManyWithWhereWithoutTenantInput[]
  deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[]
}

export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[]
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[]
  upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTenantInput | Prisma.UserUpsertWithWhereUniqueWithoutTenantInput[]
  createMany?: Prisma.UserCreateManyTenantInputEnvelope
  set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[]
  update?: Prisma.UserUpdateWithWhereUniqueWithoutTenantInput | Prisma.UserUpdateWithWhereUniqueWithoutTenantInput[]
  updateMany?: Prisma.UserUpdateManyWithWhereWithoutTenantInput | Prisma.UserUpdateManyWithWhereWithoutTenantInput[]
  deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[]
}

export type UserCreateWithoutRefreshTokensInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  tenant: Prisma.TenantCreateNestedOneWithoutUsersInput
  userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutRefreshTokensInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  tenantId: string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutRefreshTokensInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
}

export type UserUpsertWithoutRefreshTokensInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>
}

export type UserUpdateWithoutRefreshTokensInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  tenant?: Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput
  userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutRefreshTokensInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutAuditLogsInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  tenant: Prisma.TenantCreateNestedOneWithoutUsersInput
  userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput
  refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutAuditLogsInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  tenantId: string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput
  refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutAuditLogsInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>
}

export type UserUpsertWithoutAuditLogsInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>
}

export type UserUpdateWithoutAuditLogsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  tenant?: Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput
  userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput
  refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutAuditLogsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput
  refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutUserRolesInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  tenant: Prisma.TenantCreateNestedOneWithoutUsersInput
  refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutUserRolesInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  tenantId: string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutUserRolesInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>
}

export type UserUpsertWithoutUserRolesInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutUserRolesInput, Prisma.UserUncheckedUpdateWithoutUserRolesInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutUserRolesInput, Prisma.UserUncheckedUpdateWithoutUserRolesInput>
}

export type UserUpdateWithoutUserRolesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  tenant?: Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput
  refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutUserRolesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutTenantInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput
  refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutTenantInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
  userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput
  refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutTenantInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput>
}

export type UserCreateManyTenantInputEnvelope = {
  data: Prisma.UserCreateManyTenantInput | Prisma.UserCreateManyTenantInput[]
  skipDuplicates?: boolean
}

export type UserUpsertWithWhereUniqueWithoutTenantInput = {
  where: Prisma.UserWhereUniqueInput
  update: Prisma.XOR<Prisma.UserUpdateWithoutTenantInput, Prisma.UserUncheckedUpdateWithoutTenantInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput>
}

export type UserUpdateWithWhereUniqueWithoutTenantInput = {
  where: Prisma.UserWhereUniqueInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutTenantInput, Prisma.UserUncheckedUpdateWithoutTenantInput>
}

export type UserUpdateManyWithWhereWithoutTenantInput = {
  where: Prisma.UserScalarWhereInput
  data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutTenantInput>
}

export type UserScalarWhereInput = {
  AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[]
  OR?: Prisma.UserScalarWhereInput[]
  NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[]
  id?: Prisma.StringFilter<"User"> | string
  email?: Prisma.StringFilter<"User"> | string
  roleId?: Prisma.StringNullableFilter<"User"> | string | null
  passwordHash?: Prisma.StringFilter<"User"> | string
  firstName?: Prisma.StringFilter<"User"> | string
  lastName?: Prisma.StringFilter<"User"> | string
  isActive?: Prisma.BoolFilter<"User"> | boolean
  createdAt?: Prisma.DateTimeFilter<"User"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string
  tenantId?: Prisma.StringFilter<"User"> | string
  resetToken?: Prisma.StringNullableFilter<"User"> | string | null
  resetTokenExpires?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null
  isMfaEnabled?: Prisma.BoolFilter<"User"> | boolean
  mfaSecret?: Prisma.StringNullableFilter<"User"> | string | null
}

export type UserCreateManyTenantInput = {
  id?: string
  email: string
  roleId?: string | null
  passwordHash: string
  firstName: string
  lastName: string
  isActive?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  resetToken?: string | null
  resetTokenExpires?: Date | string | null
  isMfaEnabled?: boolean
  mfaSecret?: string | null
}

export type UserUpdateWithoutTenantInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput
  refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutTenantInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput
  refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateManyWithoutTenantInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  email?: Prisma.StringFieldUpdateOperationsInput | string
  roleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  passwordHash?: Prisma.StringFieldUpdateOperationsInput | string
  firstName?: Prisma.StringFieldUpdateOperationsInput | string
  lastName?: Prisma.StringFieldUpdateOperationsInput | string
  isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resetTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  isMfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean
  mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}




export type UserCountOutputType = {
  userRoles: number
  refreshTokens: number
  auditLogs: number
}

export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
  refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
}


export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null
}


export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.UserRoleWhereInput
}


export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.RefreshTokenWhereInput
}


export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AuditLogWhereInput
}


export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  email?: boolean
  roleId?: boolean
  passwordHash?: boolean
  firstName?: boolean
  lastName?: boolean
  isActive?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  tenantId?: boolean
  resetToken?: boolean
  resetTokenExpires?: boolean
  isMfaEnabled?: boolean
  mfaSecret?: boolean
  tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>
  userRoles?: boolean | Prisma.User$userRolesArgs<ExtArgs>
  refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>
  auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>
  _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["user"]>

export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  email?: boolean
  roleId?: boolean
  passwordHash?: boolean
  firstName?: boolean
  lastName?: boolean
  isActive?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  tenantId?: boolean
  resetToken?: boolean
  resetTokenExpires?: boolean
  isMfaEnabled?: boolean
  mfaSecret?: boolean
  tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>
}, ExtArgs["result"]["user"]>

export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  email?: boolean
  roleId?: boolean
  passwordHash?: boolean
  firstName?: boolean
  lastName?: boolean
  isActive?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  tenantId?: boolean
  resetToken?: boolean
  resetTokenExpires?: boolean
  isMfaEnabled?: boolean
  mfaSecret?: boolean
  tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>
}, ExtArgs["result"]["user"]>

export type UserSelectScalar = {
  id?: boolean
  email?: boolean
  roleId?: boolean
  passwordHash?: boolean
  firstName?: boolean
  lastName?: boolean
  isActive?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  tenantId?: boolean
  resetToken?: boolean
  resetTokenExpires?: boolean
  isMfaEnabled?: boolean
  mfaSecret?: boolean
}

export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "roleId" | "passwordHash" | "firstName" | "lastName" | "isActive" | "createdAt" | "updatedAt" | "tenantId" | "resetToken" | "resetTokenExpires" | "isMfaEnabled" | "mfaSecret", ExtArgs["result"]["user"]>
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>
  userRoles?: boolean | Prisma.User$userRolesArgs<ExtArgs>
  refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>
  auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>
  _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>
}
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>
}
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>
}

export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    tenant: Prisma.$TenantPayload<ExtArgs>
    userRoles: Prisma.$UserRolePayload<ExtArgs>[]
    refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    email: string
    roleId: string | null
    passwordHash: string
    firstName: string
    lastName: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    tenantId: string
    resetToken: string | null
    resetTokenExpires: Date | null
    isMfaEnabled: boolean
    mfaSecret: string | null
  }, ExtArgs["result"]["user"]>
  composites: {}
}

export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>

export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true
  }

export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
  
  findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends UserCountArgs>(
    args?: Prisma.Subset<T, UserCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

  
  groupBy<
    T extends UserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: UserGroupByArgs['orderBy'] }
      : { orderBy?: UserGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: UserFieldRefs;
}


export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  userRoles<T extends Prisma.User$userRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  refreshTokens<T extends Prisma.User$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface UserFieldRefs {
  readonly id: Prisma.FieldRef<"User", 'String'>
  readonly email: Prisma.FieldRef<"User", 'String'>
  readonly roleId: Prisma.FieldRef<"User", 'String'>
  readonly passwordHash: Prisma.FieldRef<"User", 'String'>
  readonly firstName: Prisma.FieldRef<"User", 'String'>
  readonly lastName: Prisma.FieldRef<"User", 'String'>
  readonly isActive: Prisma.FieldRef<"User", 'Boolean'>
  readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>
  readonly tenantId: Prisma.FieldRef<"User", 'String'>
  readonly resetToken: Prisma.FieldRef<"User", 'String'>
  readonly resetTokenExpires: Prisma.FieldRef<"User", 'DateTime'>
  readonly isMfaEnabled: Prisma.FieldRef<"User", 'Boolean'>
  readonly mfaSecret: Prisma.FieldRef<"User", 'String'>
}
    



export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
  
  where: Prisma.UserWhereUniqueInput
}


export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
  
  where: Prisma.UserWhereUniqueInput
}


export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
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


export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>
}


export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[]
  skipDuplicates?: boolean
}


export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[]
  skipDuplicates?: boolean
  
  include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null
}


export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>
  
  where: Prisma.UserWhereUniqueInput
}


export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>
  
  where?: Prisma.UserWhereInput
  
  limit?: number
}


export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>
  
  where?: Prisma.UserWhereInput
  
  limit?: number
  
  include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null
}


export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
  
  where: Prisma.UserWhereUniqueInput
  
  create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>
}


export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
  
  where: Prisma.UserWhereUniqueInput
}


export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.UserWhereInput
  
  limit?: number
}


export type User$userRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserRoleSelect<ExtArgs> | null
  
  omit?: Prisma.UserRoleOmit<ExtArgs> | null
  
  include?: Prisma.UserRoleInclude<ExtArgs> | null
  where?: Prisma.UserRoleWhereInput
  orderBy?: Prisma.UserRoleOrderByWithRelationInput | Prisma.UserRoleOrderByWithRelationInput[]
  cursor?: Prisma.UserRoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.UserRoleScalarFieldEnum | Prisma.UserRoleScalarFieldEnum[]
}


export type User$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.RefreshTokenSelect<ExtArgs> | null
  
  omit?: Prisma.RefreshTokenOmit<ExtArgs> | null
  
  include?: Prisma.RefreshTokenInclude<ExtArgs> | null
  where?: Prisma.RefreshTokenWhereInput
  orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[]
  cursor?: Prisma.RefreshTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[]
}


export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AuditLogSelect<ExtArgs> | null
  
  omit?: Prisma.AuditLogOmit<ExtArgs> | null
  
  include?: Prisma.AuditLogInclude<ExtArgs> | null
  where?: Prisma.AuditLogWhereInput
  orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[]
  cursor?: Prisma.AuditLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[]
}


export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.UserSelect<ExtArgs> | null
  
  omit?: Prisma.UserOmit<ExtArgs> | null
  
  include?: Prisma.UserInclude<ExtArgs> | null
}
