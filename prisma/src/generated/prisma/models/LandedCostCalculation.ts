





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type LandedCostCalculationModel = runtime.Types.Result.DefaultSelection<Prisma.$LandedCostCalculationPayload>

export type AggregateLandedCostCalculation = {
  _count: LandedCostCalculationCountAggregateOutputType | null
  _avg: LandedCostCalculationAvgAggregateOutputType | null
  _sum: LandedCostCalculationSumAggregateOutputType | null
  _min: LandedCostCalculationMinAggregateOutputType | null
  _max: LandedCostCalculationMaxAggregateOutputType | null
}

export type LandedCostCalculationAvgAggregateOutputType = {
  baseProductCost: number | null
  freightCost: number | null
  customsDuty: number | null
  insurance: number | null
  tax: number | null
  totalLandedCost: number | null
}

export type LandedCostCalculationSumAggregateOutputType = {
  baseProductCost: number | null
  freightCost: number | null
  customsDuty: number | null
  insurance: number | null
  tax: number | null
  totalLandedCost: number | null
}

export type LandedCostCalculationMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  productId: string | null
  baseProductCost: number | null
  freightCost: number | null
  customsDuty: number | null
  insurance: number | null
  tax: number | null
  totalLandedCost: number | null
  createdAt: Date | null
}

export type LandedCostCalculationMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  productId: string | null
  baseProductCost: number | null
  freightCost: number | null
  customsDuty: number | null
  insurance: number | null
  tax: number | null
  totalLandedCost: number | null
  createdAt: Date | null
}

export type LandedCostCalculationCountAggregateOutputType = {
  id: number
  tenantId: number
  productId: number
  baseProductCost: number
  freightCost: number
  customsDuty: number
  insurance: number
  tax: number
  totalLandedCost: number
  createdAt: number
  _all: number
}


export type LandedCostCalculationAvgAggregateInputType = {
  baseProductCost?: true
  freightCost?: true
  customsDuty?: true
  insurance?: true
  tax?: true
  totalLandedCost?: true
}

export type LandedCostCalculationSumAggregateInputType = {
  baseProductCost?: true
  freightCost?: true
  customsDuty?: true
  insurance?: true
  tax?: true
  totalLandedCost?: true
}

export type LandedCostCalculationMinAggregateInputType = {
  id?: true
  tenantId?: true
  productId?: true
  baseProductCost?: true
  freightCost?: true
  customsDuty?: true
  insurance?: true
  tax?: true
  totalLandedCost?: true
  createdAt?: true
}

export type LandedCostCalculationMaxAggregateInputType = {
  id?: true
  tenantId?: true
  productId?: true
  baseProductCost?: true
  freightCost?: true
  customsDuty?: true
  insurance?: true
  tax?: true
  totalLandedCost?: true
  createdAt?: true
}

export type LandedCostCalculationCountAggregateInputType = {
  id?: true
  tenantId?: true
  productId?: true
  baseProductCost?: true
  freightCost?: true
  customsDuty?: true
  insurance?: true
  tax?: true
  totalLandedCost?: true
  createdAt?: true
  _all?: true
}

export type LandedCostCalculationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.LandedCostCalculationWhereInput
  
  orderBy?: Prisma.LandedCostCalculationOrderByWithRelationInput | Prisma.LandedCostCalculationOrderByWithRelationInput[]
  
  cursor?: Prisma.LandedCostCalculationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | LandedCostCalculationCountAggregateInputType
  
  _avg?: LandedCostCalculationAvgAggregateInputType
  
  _sum?: LandedCostCalculationSumAggregateInputType
  
  _min?: LandedCostCalculationMinAggregateInputType
  
  _max?: LandedCostCalculationMaxAggregateInputType
}

export type GetLandedCostCalculationAggregateType<T extends LandedCostCalculationAggregateArgs> = {
      [P in keyof T & keyof AggregateLandedCostCalculation]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateLandedCostCalculation[P]>
    : Prisma.GetScalarType<T[P], AggregateLandedCostCalculation[P]>
}




export type LandedCostCalculationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.LandedCostCalculationWhereInput
  orderBy?: Prisma.LandedCostCalculationOrderByWithAggregationInput | Prisma.LandedCostCalculationOrderByWithAggregationInput[]
  by: Prisma.LandedCostCalculationScalarFieldEnum[] | Prisma.LandedCostCalculationScalarFieldEnum
  having?: Prisma.LandedCostCalculationScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: LandedCostCalculationCountAggregateInputType | true
  _avg?: LandedCostCalculationAvgAggregateInputType
  _sum?: LandedCostCalculationSumAggregateInputType
  _min?: LandedCostCalculationMinAggregateInputType
  _max?: LandedCostCalculationMaxAggregateInputType
}

export type LandedCostCalculationGroupByOutputType = {
  id: string
  tenantId: string
  productId: string
  baseProductCost: number
  freightCost: number
  customsDuty: number
  insurance: number
  tax: number
  totalLandedCost: number
  createdAt: Date
  _count: LandedCostCalculationCountAggregateOutputType | null
  _avg: LandedCostCalculationAvgAggregateOutputType | null
  _sum: LandedCostCalculationSumAggregateOutputType | null
  _min: LandedCostCalculationMinAggregateOutputType | null
  _max: LandedCostCalculationMaxAggregateOutputType | null
}

export type GetLandedCostCalculationGroupByPayload<T extends LandedCostCalculationGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<LandedCostCalculationGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof LandedCostCalculationGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], LandedCostCalculationGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], LandedCostCalculationGroupByOutputType[P]>
      }
    >
  >



export type LandedCostCalculationWhereInput = {
  AND?: Prisma.LandedCostCalculationWhereInput | Prisma.LandedCostCalculationWhereInput[]
  OR?: Prisma.LandedCostCalculationWhereInput[]
  NOT?: Prisma.LandedCostCalculationWhereInput | Prisma.LandedCostCalculationWhereInput[]
  id?: Prisma.StringFilter<"LandedCostCalculation"> | string
  tenantId?: Prisma.StringFilter<"LandedCostCalculation"> | string
  productId?: Prisma.StringFilter<"LandedCostCalculation"> | string
  baseProductCost?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  freightCost?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  customsDuty?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  insurance?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  tax?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  totalLandedCost?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  createdAt?: Prisma.DateTimeFilter<"LandedCostCalculation"> | Date | string
}

export type LandedCostCalculationOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productId?: Prisma.SortOrder
  baseProductCost?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  customsDuty?: Prisma.SortOrder
  insurance?: Prisma.SortOrder
  tax?: Prisma.SortOrder
  totalLandedCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type LandedCostCalculationWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.LandedCostCalculationWhereInput | Prisma.LandedCostCalculationWhereInput[]
  OR?: Prisma.LandedCostCalculationWhereInput[]
  NOT?: Prisma.LandedCostCalculationWhereInput | Prisma.LandedCostCalculationWhereInput[]
  tenantId?: Prisma.StringFilter<"LandedCostCalculation"> | string
  productId?: Prisma.StringFilter<"LandedCostCalculation"> | string
  baseProductCost?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  freightCost?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  customsDuty?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  insurance?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  tax?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  totalLandedCost?: Prisma.FloatFilter<"LandedCostCalculation"> | number
  createdAt?: Prisma.DateTimeFilter<"LandedCostCalculation"> | Date | string
}, "id">

export type LandedCostCalculationOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productId?: Prisma.SortOrder
  baseProductCost?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  customsDuty?: Prisma.SortOrder
  insurance?: Prisma.SortOrder
  tax?: Prisma.SortOrder
  totalLandedCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.LandedCostCalculationCountOrderByAggregateInput
  _avg?: Prisma.LandedCostCalculationAvgOrderByAggregateInput
  _max?: Prisma.LandedCostCalculationMaxOrderByAggregateInput
  _min?: Prisma.LandedCostCalculationMinOrderByAggregateInput
  _sum?: Prisma.LandedCostCalculationSumOrderByAggregateInput
}

export type LandedCostCalculationScalarWhereWithAggregatesInput = {
  AND?: Prisma.LandedCostCalculationScalarWhereWithAggregatesInput | Prisma.LandedCostCalculationScalarWhereWithAggregatesInput[]
  OR?: Prisma.LandedCostCalculationScalarWhereWithAggregatesInput[]
  NOT?: Prisma.LandedCostCalculationScalarWhereWithAggregatesInput | Prisma.LandedCostCalculationScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"LandedCostCalculation"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"LandedCostCalculation"> | string
  productId?: Prisma.StringWithAggregatesFilter<"LandedCostCalculation"> | string
  baseProductCost?: Prisma.FloatWithAggregatesFilter<"LandedCostCalculation"> | number
  freightCost?: Prisma.FloatWithAggregatesFilter<"LandedCostCalculation"> | number
  customsDuty?: Prisma.FloatWithAggregatesFilter<"LandedCostCalculation"> | number
  insurance?: Prisma.FloatWithAggregatesFilter<"LandedCostCalculation"> | number
  tax?: Prisma.FloatWithAggregatesFilter<"LandedCostCalculation"> | number
  totalLandedCost?: Prisma.FloatWithAggregatesFilter<"LandedCostCalculation"> | number
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"LandedCostCalculation"> | Date | string
}

export type LandedCostCalculationCreateInput = {
  id?: string
  tenantId: string
  productId: string
  baseProductCost: number
  freightCost?: number
  customsDuty?: number
  insurance?: number
  tax?: number
  totalLandedCost: number
  createdAt?: Date | string
}

export type LandedCostCalculationUncheckedCreateInput = {
  id?: string
  tenantId: string
  productId: string
  baseProductCost: number
  freightCost?: number
  customsDuty?: number
  insurance?: number
  tax?: number
  totalLandedCost: number
  createdAt?: Date | string
}

export type LandedCostCalculationUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productId?: Prisma.StringFieldUpdateOperationsInput | string
  baseProductCost?: Prisma.FloatFieldUpdateOperationsInput | number
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  customsDuty?: Prisma.FloatFieldUpdateOperationsInput | number
  insurance?: Prisma.FloatFieldUpdateOperationsInput | number
  tax?: Prisma.FloatFieldUpdateOperationsInput | number
  totalLandedCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LandedCostCalculationUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productId?: Prisma.StringFieldUpdateOperationsInput | string
  baseProductCost?: Prisma.FloatFieldUpdateOperationsInput | number
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  customsDuty?: Prisma.FloatFieldUpdateOperationsInput | number
  insurance?: Prisma.FloatFieldUpdateOperationsInput | number
  tax?: Prisma.FloatFieldUpdateOperationsInput | number
  totalLandedCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LandedCostCalculationCreateManyInput = {
  id?: string
  tenantId: string
  productId: string
  baseProductCost: number
  freightCost?: number
  customsDuty?: number
  insurance?: number
  tax?: number
  totalLandedCost: number
  createdAt?: Date | string
}

export type LandedCostCalculationUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productId?: Prisma.StringFieldUpdateOperationsInput | string
  baseProductCost?: Prisma.FloatFieldUpdateOperationsInput | number
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  customsDuty?: Prisma.FloatFieldUpdateOperationsInput | number
  insurance?: Prisma.FloatFieldUpdateOperationsInput | number
  tax?: Prisma.FloatFieldUpdateOperationsInput | number
  totalLandedCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LandedCostCalculationUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  productId?: Prisma.StringFieldUpdateOperationsInput | string
  baseProductCost?: Prisma.FloatFieldUpdateOperationsInput | number
  freightCost?: Prisma.FloatFieldUpdateOperationsInput | number
  customsDuty?: Prisma.FloatFieldUpdateOperationsInput | number
  insurance?: Prisma.FloatFieldUpdateOperationsInput | number
  tax?: Prisma.FloatFieldUpdateOperationsInput | number
  totalLandedCost?: Prisma.FloatFieldUpdateOperationsInput | number
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LandedCostCalculationCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productId?: Prisma.SortOrder
  baseProductCost?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  customsDuty?: Prisma.SortOrder
  insurance?: Prisma.SortOrder
  tax?: Prisma.SortOrder
  totalLandedCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type LandedCostCalculationAvgOrderByAggregateInput = {
  baseProductCost?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  customsDuty?: Prisma.SortOrder
  insurance?: Prisma.SortOrder
  tax?: Prisma.SortOrder
  totalLandedCost?: Prisma.SortOrder
}

export type LandedCostCalculationMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productId?: Prisma.SortOrder
  baseProductCost?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  customsDuty?: Prisma.SortOrder
  insurance?: Prisma.SortOrder
  tax?: Prisma.SortOrder
  totalLandedCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type LandedCostCalculationMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  productId?: Prisma.SortOrder
  baseProductCost?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  customsDuty?: Prisma.SortOrder
  insurance?: Prisma.SortOrder
  tax?: Prisma.SortOrder
  totalLandedCost?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type LandedCostCalculationSumOrderByAggregateInput = {
  baseProductCost?: Prisma.SortOrder
  freightCost?: Prisma.SortOrder
  customsDuty?: Prisma.SortOrder
  insurance?: Prisma.SortOrder
  tax?: Prisma.SortOrder
  totalLandedCost?: Prisma.SortOrder
}



export type LandedCostCalculationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  productId?: boolean
  baseProductCost?: boolean
  freightCost?: boolean
  customsDuty?: boolean
  insurance?: boolean
  tax?: boolean
  totalLandedCost?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["landedCostCalculation"]>

export type LandedCostCalculationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  productId?: boolean
  baseProductCost?: boolean
  freightCost?: boolean
  customsDuty?: boolean
  insurance?: boolean
  tax?: boolean
  totalLandedCost?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["landedCostCalculation"]>

export type LandedCostCalculationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  productId?: boolean
  baseProductCost?: boolean
  freightCost?: boolean
  customsDuty?: boolean
  insurance?: boolean
  tax?: boolean
  totalLandedCost?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["landedCostCalculation"]>

export type LandedCostCalculationSelectScalar = {
  id?: boolean
  tenantId?: boolean
  productId?: boolean
  baseProductCost?: boolean
  freightCost?: boolean
  customsDuty?: boolean
  insurance?: boolean
  tax?: boolean
  totalLandedCost?: boolean
  createdAt?: boolean
}

export type LandedCostCalculationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "productId" | "baseProductCost" | "freightCost" | "customsDuty" | "insurance" | "tax" | "totalLandedCost" | "createdAt", ExtArgs["result"]["landedCostCalculation"]>

export type $LandedCostCalculationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "LandedCostCalculation"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    productId: string
    baseProductCost: number
    freightCost: number
    customsDuty: number
    insurance: number
    tax: number
    totalLandedCost: number
    createdAt: Date
  }, ExtArgs["result"]["landedCostCalculation"]>
  composites: {}
}

export type LandedCostCalculationGetPayload<S extends boolean | null | undefined | LandedCostCalculationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload, S>

export type LandedCostCalculationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<LandedCostCalculationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LandedCostCalculationCountAggregateInputType | true
  }

export interface LandedCostCalculationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LandedCostCalculation'], meta: { name: 'LandedCostCalculation' } }
  
  findUnique<T extends LandedCostCalculationFindUniqueArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends LandedCostCalculationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends LandedCostCalculationFindFirstArgs>(args?: Prisma.SelectSubset<T, LandedCostCalculationFindFirstArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends LandedCostCalculationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LandedCostCalculationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends LandedCostCalculationFindManyArgs>(args?: Prisma.SelectSubset<T, LandedCostCalculationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends LandedCostCalculationCreateArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationCreateArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends LandedCostCalculationCreateManyArgs>(args?: Prisma.SelectSubset<T, LandedCostCalculationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends LandedCostCalculationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LandedCostCalculationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends LandedCostCalculationDeleteArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationDeleteArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends LandedCostCalculationUpdateArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationUpdateArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends LandedCostCalculationDeleteManyArgs>(args?: Prisma.SelectSubset<T, LandedCostCalculationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends LandedCostCalculationUpdateManyArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends LandedCostCalculationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends LandedCostCalculationUpsertArgs>(args: Prisma.SelectSubset<T, LandedCostCalculationUpsertArgs<ExtArgs>>): Prisma.Prisma__LandedCostCalculationClient<runtime.Types.Result.GetResult<Prisma.$LandedCostCalculationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends LandedCostCalculationCountArgs>(
    args?: Prisma.Subset<T, LandedCostCalculationCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], LandedCostCalculationCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends LandedCostCalculationAggregateArgs>(args: Prisma.Subset<T, LandedCostCalculationAggregateArgs>): Prisma.PrismaPromise<GetLandedCostCalculationAggregateType<T>>

  
  groupBy<
    T extends LandedCostCalculationGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: LandedCostCalculationGroupByArgs['orderBy'] }
      : { orderBy?: LandedCostCalculationGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, LandedCostCalculationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandedCostCalculationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: LandedCostCalculationFieldRefs;
}


export interface Prisma__LandedCostCalculationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface LandedCostCalculationFieldRefs {
  readonly id: Prisma.FieldRef<"LandedCostCalculation", 'String'>
  readonly tenantId: Prisma.FieldRef<"LandedCostCalculation", 'String'>
  readonly productId: Prisma.FieldRef<"LandedCostCalculation", 'String'>
  readonly baseProductCost: Prisma.FieldRef<"LandedCostCalculation", 'Float'>
  readonly freightCost: Prisma.FieldRef<"LandedCostCalculation", 'Float'>
  readonly customsDuty: Prisma.FieldRef<"LandedCostCalculation", 'Float'>
  readonly insurance: Prisma.FieldRef<"LandedCostCalculation", 'Float'>
  readonly tax: Prisma.FieldRef<"LandedCostCalculation", 'Float'>
  readonly totalLandedCost: Prisma.FieldRef<"LandedCostCalculation", 'Float'>
  readonly createdAt: Prisma.FieldRef<"LandedCostCalculation", 'DateTime'>
}
    



export type LandedCostCalculationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  where: Prisma.LandedCostCalculationWhereUniqueInput
}


export type LandedCostCalculationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  where: Prisma.LandedCostCalculationWhereUniqueInput
}


export type LandedCostCalculationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  where?: Prisma.LandedCostCalculationWhereInput
  
  orderBy?: Prisma.LandedCostCalculationOrderByWithRelationInput | Prisma.LandedCostCalculationOrderByWithRelationInput[]
  
  cursor?: Prisma.LandedCostCalculationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.LandedCostCalculationScalarFieldEnum | Prisma.LandedCostCalculationScalarFieldEnum[]
}


export type LandedCostCalculationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  where?: Prisma.LandedCostCalculationWhereInput
  
  orderBy?: Prisma.LandedCostCalculationOrderByWithRelationInput | Prisma.LandedCostCalculationOrderByWithRelationInput[]
  
  cursor?: Prisma.LandedCostCalculationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.LandedCostCalculationScalarFieldEnum | Prisma.LandedCostCalculationScalarFieldEnum[]
}


export type LandedCostCalculationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  where?: Prisma.LandedCostCalculationWhereInput
  
  orderBy?: Prisma.LandedCostCalculationOrderByWithRelationInput | Prisma.LandedCostCalculationOrderByWithRelationInput[]
  
  cursor?: Prisma.LandedCostCalculationWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.LandedCostCalculationScalarFieldEnum | Prisma.LandedCostCalculationScalarFieldEnum[]
}


export type LandedCostCalculationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.LandedCostCalculationCreateInput, Prisma.LandedCostCalculationUncheckedCreateInput>
}


export type LandedCostCalculationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.LandedCostCalculationCreateManyInput | Prisma.LandedCostCalculationCreateManyInput[]
  skipDuplicates?: boolean
}


export type LandedCostCalculationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  data: Prisma.LandedCostCalculationCreateManyInput | Prisma.LandedCostCalculationCreateManyInput[]
  skipDuplicates?: boolean
}


export type LandedCostCalculationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.LandedCostCalculationUpdateInput, Prisma.LandedCostCalculationUncheckedUpdateInput>
  
  where: Prisma.LandedCostCalculationWhereUniqueInput
}


export type LandedCostCalculationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.LandedCostCalculationUpdateManyMutationInput, Prisma.LandedCostCalculationUncheckedUpdateManyInput>
  
  where?: Prisma.LandedCostCalculationWhereInput
  
  limit?: number
}


export type LandedCostCalculationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.LandedCostCalculationUpdateManyMutationInput, Prisma.LandedCostCalculationUncheckedUpdateManyInput>
  
  where?: Prisma.LandedCostCalculationWhereInput
  
  limit?: number
}


export type LandedCostCalculationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  where: Prisma.LandedCostCalculationWhereUniqueInput
  
  create: Prisma.XOR<Prisma.LandedCostCalculationCreateInput, Prisma.LandedCostCalculationUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.LandedCostCalculationUpdateInput, Prisma.LandedCostCalculationUncheckedUpdateInput>
}


export type LandedCostCalculationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
  
  where: Prisma.LandedCostCalculationWhereUniqueInput
}


export type LandedCostCalculationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.LandedCostCalculationWhereInput
  
  limit?: number
}


export type LandedCostCalculationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.LandedCostCalculationSelect<ExtArgs> | null
  
  omit?: Prisma.LandedCostCalculationOmit<ExtArgs> | null
}
