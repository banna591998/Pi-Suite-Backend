





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type EnterpriseAssetModel = runtime.Types.Result.DefaultSelection<Prisma.$EnterpriseAssetPayload>

export type AggregateEnterpriseAsset = {
  _count: EnterpriseAssetCountAggregateOutputType | null
  _avg: EnterpriseAssetAvgAggregateOutputType | null
  _sum: EnterpriseAssetSumAggregateOutputType | null
  _min: EnterpriseAssetMinAggregateOutputType | null
  _max: EnterpriseAssetMaxAggregateOutputType | null
}

export type EnterpriseAssetAvgAggregateOutputType = {
  purchaseCost: number | null
  salvageValue: number | null
  usefulLifeYears: number | null
}

export type EnterpriseAssetSumAggregateOutputType = {
  purchaseCost: number | null
  salvageValue: number | null
  usefulLifeYears: number | null
}

export type EnterpriseAssetMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  assetName: string | null
  serialNumber: string | null
  category: string | null
  purchaseCost: number | null
  salvageValue: number | null
  usefulLifeYears: number | null
  purchaseDate: Date | null
  status: $Enums.AssetStatus | null
  lastMaintenance: Date | null
  nextMaintenance: Date | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type EnterpriseAssetMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  assetName: string | null
  serialNumber: string | null
  category: string | null
  purchaseCost: number | null
  salvageValue: number | null
  usefulLifeYears: number | null
  purchaseDate: Date | null
  status: $Enums.AssetStatus | null
  lastMaintenance: Date | null
  nextMaintenance: Date | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type EnterpriseAssetCountAggregateOutputType = {
  id: number
  tenantId: number
  assetName: number
  serialNumber: number
  category: number
  purchaseCost: number
  salvageValue: number
  usefulLifeYears: number
  purchaseDate: number
  status: number
  lastMaintenance: number
  nextMaintenance: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type EnterpriseAssetAvgAggregateInputType = {
  purchaseCost?: true
  salvageValue?: true
  usefulLifeYears?: true
}

export type EnterpriseAssetSumAggregateInputType = {
  purchaseCost?: true
  salvageValue?: true
  usefulLifeYears?: true
}

export type EnterpriseAssetMinAggregateInputType = {
  id?: true
  tenantId?: true
  assetName?: true
  serialNumber?: true
  category?: true
  purchaseCost?: true
  salvageValue?: true
  usefulLifeYears?: true
  purchaseDate?: true
  status?: true
  lastMaintenance?: true
  nextMaintenance?: true
  createdAt?: true
  updatedAt?: true
}

export type EnterpriseAssetMaxAggregateInputType = {
  id?: true
  tenantId?: true
  assetName?: true
  serialNumber?: true
  category?: true
  purchaseCost?: true
  salvageValue?: true
  usefulLifeYears?: true
  purchaseDate?: true
  status?: true
  lastMaintenance?: true
  nextMaintenance?: true
  createdAt?: true
  updatedAt?: true
}

export type EnterpriseAssetCountAggregateInputType = {
  id?: true
  tenantId?: true
  assetName?: true
  serialNumber?: true
  category?: true
  purchaseCost?: true
  salvageValue?: true
  usefulLifeYears?: true
  purchaseDate?: true
  status?: true
  lastMaintenance?: true
  nextMaintenance?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type EnterpriseAssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.EnterpriseAssetWhereInput
  
  orderBy?: Prisma.EnterpriseAssetOrderByWithRelationInput | Prisma.EnterpriseAssetOrderByWithRelationInput[]
  
  cursor?: Prisma.EnterpriseAssetWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | EnterpriseAssetCountAggregateInputType
  
  _avg?: EnterpriseAssetAvgAggregateInputType
  
  _sum?: EnterpriseAssetSumAggregateInputType
  
  _min?: EnterpriseAssetMinAggregateInputType
  
  _max?: EnterpriseAssetMaxAggregateInputType
}

export type GetEnterpriseAssetAggregateType<T extends EnterpriseAssetAggregateArgs> = {
      [P in keyof T & keyof AggregateEnterpriseAsset]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateEnterpriseAsset[P]>
    : Prisma.GetScalarType<T[P], AggregateEnterpriseAsset[P]>
}




export type EnterpriseAssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.EnterpriseAssetWhereInput
  orderBy?: Prisma.EnterpriseAssetOrderByWithAggregationInput | Prisma.EnterpriseAssetOrderByWithAggregationInput[]
  by: Prisma.EnterpriseAssetScalarFieldEnum[] | Prisma.EnterpriseAssetScalarFieldEnum
  having?: Prisma.EnterpriseAssetScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: EnterpriseAssetCountAggregateInputType | true
  _avg?: EnterpriseAssetAvgAggregateInputType
  _sum?: EnterpriseAssetSumAggregateInputType
  _min?: EnterpriseAssetMinAggregateInputType
  _max?: EnterpriseAssetMaxAggregateInputType
}

export type EnterpriseAssetGroupByOutputType = {
  id: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue: number
  usefulLifeYears: number
  purchaseDate: Date
  status: $Enums.AssetStatus
  lastMaintenance: Date | null
  nextMaintenance: Date | null
  createdAt: Date
  updatedAt: Date
  _count: EnterpriseAssetCountAggregateOutputType | null
  _avg: EnterpriseAssetAvgAggregateOutputType | null
  _sum: EnterpriseAssetSumAggregateOutputType | null
  _min: EnterpriseAssetMinAggregateOutputType | null
  _max: EnterpriseAssetMaxAggregateOutputType | null
}

export type GetEnterpriseAssetGroupByPayload<T extends EnterpriseAssetGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<EnterpriseAssetGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof EnterpriseAssetGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], EnterpriseAssetGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], EnterpriseAssetGroupByOutputType[P]>
      }
    >
  >



export type EnterpriseAssetWhereInput = {
  AND?: Prisma.EnterpriseAssetWhereInput | Prisma.EnterpriseAssetWhereInput[]
  OR?: Prisma.EnterpriseAssetWhereInput[]
  NOT?: Prisma.EnterpriseAssetWhereInput | Prisma.EnterpriseAssetWhereInput[]
  id?: Prisma.StringFilter<"EnterpriseAsset"> | string
  tenantId?: Prisma.StringFilter<"EnterpriseAsset"> | string
  assetName?: Prisma.StringFilter<"EnterpriseAsset"> | string
  serialNumber?: Prisma.StringFilter<"EnterpriseAsset"> | string
  category?: Prisma.StringFilter<"EnterpriseAsset"> | string
  purchaseCost?: Prisma.FloatFilter<"EnterpriseAsset"> | number
  salvageValue?: Prisma.FloatFilter<"EnterpriseAsset"> | number
  usefulLifeYears?: Prisma.IntFilter<"EnterpriseAsset"> | number
  purchaseDate?: Prisma.DateTimeFilter<"EnterpriseAsset"> | Date | string
  status?: Prisma.EnumAssetStatusFilter<"EnterpriseAsset"> | $Enums.AssetStatus
  lastMaintenance?: Prisma.DateTimeNullableFilter<"EnterpriseAsset"> | Date | string | null
  nextMaintenance?: Prisma.DateTimeNullableFilter<"EnterpriseAsset"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"EnterpriseAsset"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"EnterpriseAsset"> | Date | string
  spareParts?: Prisma.SparePartListRelationFilter
  maintenanceLogs?: Prisma.AssetMaintenanceLogListRelationFilter
}

export type EnterpriseAssetOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetName?: Prisma.SortOrder
  serialNumber?: Prisma.SortOrder
  category?: Prisma.SortOrder
  purchaseCost?: Prisma.SortOrder
  salvageValue?: Prisma.SortOrder
  usefulLifeYears?: Prisma.SortOrder
  purchaseDate?: Prisma.SortOrder
  status?: Prisma.SortOrder
  lastMaintenance?: Prisma.SortOrderInput | Prisma.SortOrder
  nextMaintenance?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  spareParts?: Prisma.SparePartOrderByRelationAggregateInput
  maintenanceLogs?: Prisma.AssetMaintenanceLogOrderByRelationAggregateInput
}

export type EnterpriseAssetWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  serialNumber?: string
  AND?: Prisma.EnterpriseAssetWhereInput | Prisma.EnterpriseAssetWhereInput[]
  OR?: Prisma.EnterpriseAssetWhereInput[]
  NOT?: Prisma.EnterpriseAssetWhereInput | Prisma.EnterpriseAssetWhereInput[]
  tenantId?: Prisma.StringFilter<"EnterpriseAsset"> | string
  assetName?: Prisma.StringFilter<"EnterpriseAsset"> | string
  category?: Prisma.StringFilter<"EnterpriseAsset"> | string
  purchaseCost?: Prisma.FloatFilter<"EnterpriseAsset"> | number
  salvageValue?: Prisma.FloatFilter<"EnterpriseAsset"> | number
  usefulLifeYears?: Prisma.IntFilter<"EnterpriseAsset"> | number
  purchaseDate?: Prisma.DateTimeFilter<"EnterpriseAsset"> | Date | string
  status?: Prisma.EnumAssetStatusFilter<"EnterpriseAsset"> | $Enums.AssetStatus
  lastMaintenance?: Prisma.DateTimeNullableFilter<"EnterpriseAsset"> | Date | string | null
  nextMaintenance?: Prisma.DateTimeNullableFilter<"EnterpriseAsset"> | Date | string | null
  createdAt?: Prisma.DateTimeFilter<"EnterpriseAsset"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"EnterpriseAsset"> | Date | string
  spareParts?: Prisma.SparePartListRelationFilter
  maintenanceLogs?: Prisma.AssetMaintenanceLogListRelationFilter
}, "id" | "serialNumber">

export type EnterpriseAssetOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetName?: Prisma.SortOrder
  serialNumber?: Prisma.SortOrder
  category?: Prisma.SortOrder
  purchaseCost?: Prisma.SortOrder
  salvageValue?: Prisma.SortOrder
  usefulLifeYears?: Prisma.SortOrder
  purchaseDate?: Prisma.SortOrder
  status?: Prisma.SortOrder
  lastMaintenance?: Prisma.SortOrderInput | Prisma.SortOrder
  nextMaintenance?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.EnterpriseAssetCountOrderByAggregateInput
  _avg?: Prisma.EnterpriseAssetAvgOrderByAggregateInput
  _max?: Prisma.EnterpriseAssetMaxOrderByAggregateInput
  _min?: Prisma.EnterpriseAssetMinOrderByAggregateInput
  _sum?: Prisma.EnterpriseAssetSumOrderByAggregateInput
}

export type EnterpriseAssetScalarWhereWithAggregatesInput = {
  AND?: Prisma.EnterpriseAssetScalarWhereWithAggregatesInput | Prisma.EnterpriseAssetScalarWhereWithAggregatesInput[]
  OR?: Prisma.EnterpriseAssetScalarWhereWithAggregatesInput[]
  NOT?: Prisma.EnterpriseAssetScalarWhereWithAggregatesInput | Prisma.EnterpriseAssetScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"EnterpriseAsset"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"EnterpriseAsset"> | string
  assetName?: Prisma.StringWithAggregatesFilter<"EnterpriseAsset"> | string
  serialNumber?: Prisma.StringWithAggregatesFilter<"EnterpriseAsset"> | string
  category?: Prisma.StringWithAggregatesFilter<"EnterpriseAsset"> | string
  purchaseCost?: Prisma.FloatWithAggregatesFilter<"EnterpriseAsset"> | number
  salvageValue?: Prisma.FloatWithAggregatesFilter<"EnterpriseAsset"> | number
  usefulLifeYears?: Prisma.IntWithAggregatesFilter<"EnterpriseAsset"> | number
  purchaseDate?: Prisma.DateTimeWithAggregatesFilter<"EnterpriseAsset"> | Date | string
  status?: Prisma.EnumAssetStatusWithAggregatesFilter<"EnterpriseAsset"> | $Enums.AssetStatus
  lastMaintenance?: Prisma.DateTimeNullableWithAggregatesFilter<"EnterpriseAsset"> | Date | string | null
  nextMaintenance?: Prisma.DateTimeNullableWithAggregatesFilter<"EnterpriseAsset"> | Date | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"EnterpriseAsset"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EnterpriseAsset"> | Date | string
}

export type EnterpriseAssetCreateInput = {
  id?: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue?: number
  usefulLifeYears: number
  purchaseDate: Date | string
  status?: $Enums.AssetStatus
  lastMaintenance?: Date | string | null
  nextMaintenance?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  spareParts?: Prisma.SparePartCreateNestedManyWithoutAssetInput
  maintenanceLogs?: Prisma.AssetMaintenanceLogCreateNestedManyWithoutAssetInput
}

export type EnterpriseAssetUncheckedCreateInput = {
  id?: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue?: number
  usefulLifeYears: number
  purchaseDate: Date | string
  status?: $Enums.AssetStatus
  lastMaintenance?: Date | string | null
  nextMaintenance?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  spareParts?: Prisma.SparePartUncheckedCreateNestedManyWithoutAssetInput
  maintenanceLogs?: Prisma.AssetMaintenanceLogUncheckedCreateNestedManyWithoutAssetInput
}

export type EnterpriseAssetUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  spareParts?: Prisma.SparePartUpdateManyWithoutAssetNestedInput
  maintenanceLogs?: Prisma.AssetMaintenanceLogUpdateManyWithoutAssetNestedInput
}

export type EnterpriseAssetUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  spareParts?: Prisma.SparePartUncheckedUpdateManyWithoutAssetNestedInput
  maintenanceLogs?: Prisma.AssetMaintenanceLogUncheckedUpdateManyWithoutAssetNestedInput
}

export type EnterpriseAssetCreateManyInput = {
  id?: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue?: number
  usefulLifeYears: number
  purchaseDate: Date | string
  status?: $Enums.AssetStatus
  lastMaintenance?: Date | string | null
  nextMaintenance?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type EnterpriseAssetUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type EnterpriseAssetUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type EnterpriseAssetCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetName?: Prisma.SortOrder
  serialNumber?: Prisma.SortOrder
  category?: Prisma.SortOrder
  purchaseCost?: Prisma.SortOrder
  salvageValue?: Prisma.SortOrder
  usefulLifeYears?: Prisma.SortOrder
  purchaseDate?: Prisma.SortOrder
  status?: Prisma.SortOrder
  lastMaintenance?: Prisma.SortOrder
  nextMaintenance?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type EnterpriseAssetAvgOrderByAggregateInput = {
  purchaseCost?: Prisma.SortOrder
  salvageValue?: Prisma.SortOrder
  usefulLifeYears?: Prisma.SortOrder
}

export type EnterpriseAssetMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetName?: Prisma.SortOrder
  serialNumber?: Prisma.SortOrder
  category?: Prisma.SortOrder
  purchaseCost?: Prisma.SortOrder
  salvageValue?: Prisma.SortOrder
  usefulLifeYears?: Prisma.SortOrder
  purchaseDate?: Prisma.SortOrder
  status?: Prisma.SortOrder
  lastMaintenance?: Prisma.SortOrder
  nextMaintenance?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type EnterpriseAssetMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  assetName?: Prisma.SortOrder
  serialNumber?: Prisma.SortOrder
  category?: Prisma.SortOrder
  purchaseCost?: Prisma.SortOrder
  salvageValue?: Prisma.SortOrder
  usefulLifeYears?: Prisma.SortOrder
  purchaseDate?: Prisma.SortOrder
  status?: Prisma.SortOrder
  lastMaintenance?: Prisma.SortOrder
  nextMaintenance?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type EnterpriseAssetSumOrderByAggregateInput = {
  purchaseCost?: Prisma.SortOrder
  salvageValue?: Prisma.SortOrder
  usefulLifeYears?: Prisma.SortOrder
}

export type EnterpriseAssetScalarRelationFilter = {
  is?: Prisma.EnterpriseAssetWhereInput
  isNot?: Prisma.EnterpriseAssetWhereInput
}

export type EnumAssetStatusFieldUpdateOperationsInput = {
  set?: $Enums.AssetStatus
}

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Date | string | null
}

export type EnterpriseAssetCreateNestedOneWithoutSparePartsInput = {
  create?: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutSparePartsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutSparePartsInput>
  connectOrCreate?: Prisma.EnterpriseAssetCreateOrConnectWithoutSparePartsInput
  connect?: Prisma.EnterpriseAssetWhereUniqueInput
}

export type EnterpriseAssetUpdateOneRequiredWithoutSparePartsNestedInput = {
  create?: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutSparePartsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutSparePartsInput>
  connectOrCreate?: Prisma.EnterpriseAssetCreateOrConnectWithoutSparePartsInput
  upsert?: Prisma.EnterpriseAssetUpsertWithoutSparePartsInput
  connect?: Prisma.EnterpriseAssetWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.EnterpriseAssetUpdateToOneWithWhereWithoutSparePartsInput, Prisma.EnterpriseAssetUpdateWithoutSparePartsInput>, Prisma.EnterpriseAssetUncheckedUpdateWithoutSparePartsInput>
}

export type EnterpriseAssetCreateNestedOneWithoutMaintenanceLogsInput = {
  create?: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutMaintenanceLogsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutMaintenanceLogsInput>
  connectOrCreate?: Prisma.EnterpriseAssetCreateOrConnectWithoutMaintenanceLogsInput
  connect?: Prisma.EnterpriseAssetWhereUniqueInput
}

export type EnterpriseAssetUpdateOneRequiredWithoutMaintenanceLogsNestedInput = {
  create?: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutMaintenanceLogsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutMaintenanceLogsInput>
  connectOrCreate?: Prisma.EnterpriseAssetCreateOrConnectWithoutMaintenanceLogsInput
  upsert?: Prisma.EnterpriseAssetUpsertWithoutMaintenanceLogsInput
  connect?: Prisma.EnterpriseAssetWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.EnterpriseAssetUpdateToOneWithWhereWithoutMaintenanceLogsInput, Prisma.EnterpriseAssetUpdateWithoutMaintenanceLogsInput>, Prisma.EnterpriseAssetUncheckedUpdateWithoutMaintenanceLogsInput>
}

export type EnterpriseAssetCreateWithoutSparePartsInput = {
  id?: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue?: number
  usefulLifeYears: number
  purchaseDate: Date | string
  status?: $Enums.AssetStatus
  lastMaintenance?: Date | string | null
  nextMaintenance?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  maintenanceLogs?: Prisma.AssetMaintenanceLogCreateNestedManyWithoutAssetInput
}

export type EnterpriseAssetUncheckedCreateWithoutSparePartsInput = {
  id?: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue?: number
  usefulLifeYears: number
  purchaseDate: Date | string
  status?: $Enums.AssetStatus
  lastMaintenance?: Date | string | null
  nextMaintenance?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  maintenanceLogs?: Prisma.AssetMaintenanceLogUncheckedCreateNestedManyWithoutAssetInput
}

export type EnterpriseAssetCreateOrConnectWithoutSparePartsInput = {
  where: Prisma.EnterpriseAssetWhereUniqueInput
  create: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutSparePartsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutSparePartsInput>
}

export type EnterpriseAssetUpsertWithoutSparePartsInput = {
  update: Prisma.XOR<Prisma.EnterpriseAssetUpdateWithoutSparePartsInput, Prisma.EnterpriseAssetUncheckedUpdateWithoutSparePartsInput>
  create: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutSparePartsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutSparePartsInput>
  where?: Prisma.EnterpriseAssetWhereInput
}

export type EnterpriseAssetUpdateToOneWithWhereWithoutSparePartsInput = {
  where?: Prisma.EnterpriseAssetWhereInput
  data: Prisma.XOR<Prisma.EnterpriseAssetUpdateWithoutSparePartsInput, Prisma.EnterpriseAssetUncheckedUpdateWithoutSparePartsInput>
}

export type EnterpriseAssetUpdateWithoutSparePartsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  maintenanceLogs?: Prisma.AssetMaintenanceLogUpdateManyWithoutAssetNestedInput
}

export type EnterpriseAssetUncheckedUpdateWithoutSparePartsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  maintenanceLogs?: Prisma.AssetMaintenanceLogUncheckedUpdateManyWithoutAssetNestedInput
}

export type EnterpriseAssetCreateWithoutMaintenanceLogsInput = {
  id?: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue?: number
  usefulLifeYears: number
  purchaseDate: Date | string
  status?: $Enums.AssetStatus
  lastMaintenance?: Date | string | null
  nextMaintenance?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  spareParts?: Prisma.SparePartCreateNestedManyWithoutAssetInput
}

export type EnterpriseAssetUncheckedCreateWithoutMaintenanceLogsInput = {
  id?: string
  tenantId: string
  assetName: string
  serialNumber: string
  category: string
  purchaseCost: number
  salvageValue?: number
  usefulLifeYears: number
  purchaseDate: Date | string
  status?: $Enums.AssetStatus
  lastMaintenance?: Date | string | null
  nextMaintenance?: Date | string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  spareParts?: Prisma.SparePartUncheckedCreateNestedManyWithoutAssetInput
}

export type EnterpriseAssetCreateOrConnectWithoutMaintenanceLogsInput = {
  where: Prisma.EnterpriseAssetWhereUniqueInput
  create: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutMaintenanceLogsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutMaintenanceLogsInput>
}

export type EnterpriseAssetUpsertWithoutMaintenanceLogsInput = {
  update: Prisma.XOR<Prisma.EnterpriseAssetUpdateWithoutMaintenanceLogsInput, Prisma.EnterpriseAssetUncheckedUpdateWithoutMaintenanceLogsInput>
  create: Prisma.XOR<Prisma.EnterpriseAssetCreateWithoutMaintenanceLogsInput, Prisma.EnterpriseAssetUncheckedCreateWithoutMaintenanceLogsInput>
  where?: Prisma.EnterpriseAssetWhereInput
}

export type EnterpriseAssetUpdateToOneWithWhereWithoutMaintenanceLogsInput = {
  where?: Prisma.EnterpriseAssetWhereInput
  data: Prisma.XOR<Prisma.EnterpriseAssetUpdateWithoutMaintenanceLogsInput, Prisma.EnterpriseAssetUncheckedUpdateWithoutMaintenanceLogsInput>
}

export type EnterpriseAssetUpdateWithoutMaintenanceLogsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  spareParts?: Prisma.SparePartUpdateManyWithoutAssetNestedInput
}

export type EnterpriseAssetUncheckedUpdateWithoutMaintenanceLogsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  assetName?: Prisma.StringFieldUpdateOperationsInput | string
  serialNumber?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  purchaseCost?: Prisma.FloatFieldUpdateOperationsInput | number
  salvageValue?: Prisma.FloatFieldUpdateOperationsInput | number
  usefulLifeYears?: Prisma.IntFieldUpdateOperationsInput | number
  purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus
  lastMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  nextMaintenance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  spareParts?: Prisma.SparePartUncheckedUpdateManyWithoutAssetNestedInput
}




export type EnterpriseAssetCountOutputType = {
  spareParts: number
  maintenanceLogs: number
}

export type EnterpriseAssetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  spareParts?: boolean | EnterpriseAssetCountOutputTypeCountSparePartsArgs
  maintenanceLogs?: boolean | EnterpriseAssetCountOutputTypeCountMaintenanceLogsArgs
}


export type EnterpriseAssetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetCountOutputTypeSelect<ExtArgs> | null
}


export type EnterpriseAssetCountOutputTypeCountSparePartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SparePartWhereInput
}


export type EnterpriseAssetCountOutputTypeCountMaintenanceLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AssetMaintenanceLogWhereInput
}


export type EnterpriseAssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  assetName?: boolean
  serialNumber?: boolean
  category?: boolean
  purchaseCost?: boolean
  salvageValue?: boolean
  usefulLifeYears?: boolean
  purchaseDate?: boolean
  status?: boolean
  lastMaintenance?: boolean
  nextMaintenance?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  spareParts?: boolean | Prisma.EnterpriseAsset$sparePartsArgs<ExtArgs>
  maintenanceLogs?: boolean | Prisma.EnterpriseAsset$maintenanceLogsArgs<ExtArgs>
  _count?: boolean | Prisma.EnterpriseAssetCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["enterpriseAsset"]>

export type EnterpriseAssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  assetName?: boolean
  serialNumber?: boolean
  category?: boolean
  purchaseCost?: boolean
  salvageValue?: boolean
  usefulLifeYears?: boolean
  purchaseDate?: boolean
  status?: boolean
  lastMaintenance?: boolean
  nextMaintenance?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["enterpriseAsset"]>

export type EnterpriseAssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  assetName?: boolean
  serialNumber?: boolean
  category?: boolean
  purchaseCost?: boolean
  salvageValue?: boolean
  usefulLifeYears?: boolean
  purchaseDate?: boolean
  status?: boolean
  lastMaintenance?: boolean
  nextMaintenance?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["enterpriseAsset"]>

export type EnterpriseAssetSelectScalar = {
  id?: boolean
  tenantId?: boolean
  assetName?: boolean
  serialNumber?: boolean
  category?: boolean
  purchaseCost?: boolean
  salvageValue?: boolean
  usefulLifeYears?: boolean
  purchaseDate?: boolean
  status?: boolean
  lastMaintenance?: boolean
  nextMaintenance?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type EnterpriseAssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "assetName" | "serialNumber" | "category" | "purchaseCost" | "salvageValue" | "usefulLifeYears" | "purchaseDate" | "status" | "lastMaintenance" | "nextMaintenance" | "createdAt" | "updatedAt", ExtArgs["result"]["enterpriseAsset"]>
export type EnterpriseAssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  spareParts?: boolean | Prisma.EnterpriseAsset$sparePartsArgs<ExtArgs>
  maintenanceLogs?: boolean | Prisma.EnterpriseAsset$maintenanceLogsArgs<ExtArgs>
  _count?: boolean | Prisma.EnterpriseAssetCountOutputTypeDefaultArgs<ExtArgs>
}
export type EnterpriseAssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type EnterpriseAssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $EnterpriseAssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "EnterpriseAsset"
  objects: {
    spareParts: Prisma.$SparePartPayload<ExtArgs>[]
    maintenanceLogs: Prisma.$AssetMaintenanceLogPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    assetName: string
    serialNumber: string
    category: string
    purchaseCost: number
    salvageValue: number
    usefulLifeYears: number
    purchaseDate: Date
    status: $Enums.AssetStatus
    lastMaintenance: Date | null
    nextMaintenance: Date | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["enterpriseAsset"]>
  composites: {}
}

export type EnterpriseAssetGetPayload<S extends boolean | null | undefined | EnterpriseAssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload, S>

export type EnterpriseAssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<EnterpriseAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnterpriseAssetCountAggregateInputType | true
  }

export interface EnterpriseAssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnterpriseAsset'], meta: { name: 'EnterpriseAsset' } }
  
  findUnique<T extends EnterpriseAssetFindUniqueArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends EnterpriseAssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends EnterpriseAssetFindFirstArgs>(args?: Prisma.SelectSubset<T, EnterpriseAssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends EnterpriseAssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnterpriseAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends EnterpriseAssetFindManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends EnterpriseAssetCreateArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetCreateArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends EnterpriseAssetCreateManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends EnterpriseAssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnterpriseAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends EnterpriseAssetDeleteArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetDeleteArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends EnterpriseAssetUpdateArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetUpdateArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends EnterpriseAssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnterpriseAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends EnterpriseAssetUpdateManyArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends EnterpriseAssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends EnterpriseAssetUpsertArgs>(args: Prisma.SelectSubset<T, EnterpriseAssetUpsertArgs<ExtArgs>>): Prisma.Prisma__EnterpriseAssetClient<runtime.Types.Result.GetResult<Prisma.$EnterpriseAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends EnterpriseAssetCountArgs>(
    args?: Prisma.Subset<T, EnterpriseAssetCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], EnterpriseAssetCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends EnterpriseAssetAggregateArgs>(args: Prisma.Subset<T, EnterpriseAssetAggregateArgs>): Prisma.PrismaPromise<GetEnterpriseAssetAggregateType<T>>

  
  groupBy<
    T extends EnterpriseAssetGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: EnterpriseAssetGroupByArgs['orderBy'] }
      : { orderBy?: EnterpriseAssetGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, EnterpriseAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnterpriseAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: EnterpriseAssetFieldRefs;
}


export interface Prisma__EnterpriseAssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  spareParts<T extends Prisma.EnterpriseAsset$sparePartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseAsset$sparePartsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  maintenanceLogs<T extends Prisma.EnterpriseAsset$maintenanceLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnterpriseAsset$maintenanceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetMaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface EnterpriseAssetFieldRefs {
  readonly id: Prisma.FieldRef<"EnterpriseAsset", 'String'>
  readonly tenantId: Prisma.FieldRef<"EnterpriseAsset", 'String'>
  readonly assetName: Prisma.FieldRef<"EnterpriseAsset", 'String'>
  readonly serialNumber: Prisma.FieldRef<"EnterpriseAsset", 'String'>
  readonly category: Prisma.FieldRef<"EnterpriseAsset", 'String'>
  readonly purchaseCost: Prisma.FieldRef<"EnterpriseAsset", 'Float'>
  readonly salvageValue: Prisma.FieldRef<"EnterpriseAsset", 'Float'>
  readonly usefulLifeYears: Prisma.FieldRef<"EnterpriseAsset", 'Int'>
  readonly purchaseDate: Prisma.FieldRef<"EnterpriseAsset", 'DateTime'>
  readonly status: Prisma.FieldRef<"EnterpriseAsset", 'AssetStatus'>
  readonly lastMaintenance: Prisma.FieldRef<"EnterpriseAsset", 'DateTime'>
  readonly nextMaintenance: Prisma.FieldRef<"EnterpriseAsset", 'DateTime'>
  readonly createdAt: Prisma.FieldRef<"EnterpriseAsset", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"EnterpriseAsset", 'DateTime'>
}
    



export type EnterpriseAssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  where: Prisma.EnterpriseAssetWhereUniqueInput
}


export type EnterpriseAssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  where: Prisma.EnterpriseAssetWhereUniqueInput
}


export type EnterpriseAssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  where?: Prisma.EnterpriseAssetWhereInput
  
  orderBy?: Prisma.EnterpriseAssetOrderByWithRelationInput | Prisma.EnterpriseAssetOrderByWithRelationInput[]
  
  cursor?: Prisma.EnterpriseAssetWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.EnterpriseAssetScalarFieldEnum | Prisma.EnterpriseAssetScalarFieldEnum[]
}


export type EnterpriseAssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  where?: Prisma.EnterpriseAssetWhereInput
  
  orderBy?: Prisma.EnterpriseAssetOrderByWithRelationInput | Prisma.EnterpriseAssetOrderByWithRelationInput[]
  
  cursor?: Prisma.EnterpriseAssetWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.EnterpriseAssetScalarFieldEnum | Prisma.EnterpriseAssetScalarFieldEnum[]
}


export type EnterpriseAssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  where?: Prisma.EnterpriseAssetWhereInput
  
  orderBy?: Prisma.EnterpriseAssetOrderByWithRelationInput | Prisma.EnterpriseAssetOrderByWithRelationInput[]
  
  cursor?: Prisma.EnterpriseAssetWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.EnterpriseAssetScalarFieldEnum | Prisma.EnterpriseAssetScalarFieldEnum[]
}


export type EnterpriseAssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.EnterpriseAssetCreateInput, Prisma.EnterpriseAssetUncheckedCreateInput>
}


export type EnterpriseAssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.EnterpriseAssetCreateManyInput | Prisma.EnterpriseAssetCreateManyInput[]
  skipDuplicates?: boolean
}


export type EnterpriseAssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  data: Prisma.EnterpriseAssetCreateManyInput | Prisma.EnterpriseAssetCreateManyInput[]
  skipDuplicates?: boolean
}


export type EnterpriseAssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.EnterpriseAssetUpdateInput, Prisma.EnterpriseAssetUncheckedUpdateInput>
  
  where: Prisma.EnterpriseAssetWhereUniqueInput
}


export type EnterpriseAssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.EnterpriseAssetUpdateManyMutationInput, Prisma.EnterpriseAssetUncheckedUpdateManyInput>
  
  where?: Prisma.EnterpriseAssetWhereInput
  
  limit?: number
}


export type EnterpriseAssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.EnterpriseAssetUpdateManyMutationInput, Prisma.EnterpriseAssetUncheckedUpdateManyInput>
  
  where?: Prisma.EnterpriseAssetWhereInput
  
  limit?: number
}


export type EnterpriseAssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  where: Prisma.EnterpriseAssetWhereUniqueInput
  
  create: Prisma.XOR<Prisma.EnterpriseAssetCreateInput, Prisma.EnterpriseAssetUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.EnterpriseAssetUpdateInput, Prisma.EnterpriseAssetUncheckedUpdateInput>
}


export type EnterpriseAssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
  
  where: Prisma.EnterpriseAssetWhereUniqueInput
}


export type EnterpriseAssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.EnterpriseAssetWhereInput
  
  limit?: number
}


export type EnterpriseAsset$sparePartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SparePartSelect<ExtArgs> | null
  
  omit?: Prisma.SparePartOmit<ExtArgs> | null
  
  include?: Prisma.SparePartInclude<ExtArgs> | null
  where?: Prisma.SparePartWhereInput
  orderBy?: Prisma.SparePartOrderByWithRelationInput | Prisma.SparePartOrderByWithRelationInput[]
  cursor?: Prisma.SparePartWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.SparePartScalarFieldEnum | Prisma.SparePartScalarFieldEnum[]
}


export type EnterpriseAsset$maintenanceLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.AssetMaintenanceLogSelect<ExtArgs> | null
  
  omit?: Prisma.AssetMaintenanceLogOmit<ExtArgs> | null
  
  include?: Prisma.AssetMaintenanceLogInclude<ExtArgs> | null
  where?: Prisma.AssetMaintenanceLogWhereInput
  orderBy?: Prisma.AssetMaintenanceLogOrderByWithRelationInput | Prisma.AssetMaintenanceLogOrderByWithRelationInput[]
  cursor?: Prisma.AssetMaintenanceLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.AssetMaintenanceLogScalarFieldEnum | Prisma.AssetMaintenanceLogScalarFieldEnum[]
}


export type EnterpriseAssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.EnterpriseAssetSelect<ExtArgs> | null
  
  omit?: Prisma.EnterpriseAssetOmit<ExtArgs> | null
  
  include?: Prisma.EnterpriseAssetInclude<ExtArgs> | null
}
