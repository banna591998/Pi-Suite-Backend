





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type SupplierPortalRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierPortalRecordPayload>

export type AggregateSupplierPortalRecord = {
  _count: SupplierPortalRecordCountAggregateOutputType | null
  _min: SupplierPortalRecordMinAggregateOutputType | null
  _max: SupplierPortalRecordMaxAggregateOutputType | null
}

export type SupplierPortalRecordMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  supplierName: string | null
  supplierEmail: string | null
  invoiceNo: string | null
  shippingStatus: string | null
  submittedAt: Date | null
}

export type SupplierPortalRecordMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  supplierName: string | null
  supplierEmail: string | null
  invoiceNo: string | null
  shippingStatus: string | null
  submittedAt: Date | null
}

export type SupplierPortalRecordCountAggregateOutputType = {
  id: number
  tenantId: number
  supplierName: number
  supplierEmail: number
  invoiceNo: number
  shippingStatus: number
  submittedAt: number
  _all: number
}


export type SupplierPortalRecordMinAggregateInputType = {
  id?: true
  tenantId?: true
  supplierName?: true
  supplierEmail?: true
  invoiceNo?: true
  shippingStatus?: true
  submittedAt?: true
}

export type SupplierPortalRecordMaxAggregateInputType = {
  id?: true
  tenantId?: true
  supplierName?: true
  supplierEmail?: true
  invoiceNo?: true
  shippingStatus?: true
  submittedAt?: true
}

export type SupplierPortalRecordCountAggregateInputType = {
  id?: true
  tenantId?: true
  supplierName?: true
  supplierEmail?: true
  invoiceNo?: true
  shippingStatus?: true
  submittedAt?: true
  _all?: true
}

export type SupplierPortalRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SupplierPortalRecordWhereInput
  
  orderBy?: Prisma.SupplierPortalRecordOrderByWithRelationInput | Prisma.SupplierPortalRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplierPortalRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | SupplierPortalRecordCountAggregateInputType
  
  _min?: SupplierPortalRecordMinAggregateInputType
  
  _max?: SupplierPortalRecordMaxAggregateInputType
}

export type GetSupplierPortalRecordAggregateType<T extends SupplierPortalRecordAggregateArgs> = {
      [P in keyof T & keyof AggregateSupplierPortalRecord]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateSupplierPortalRecord[P]>
    : Prisma.GetScalarType<T[P], AggregateSupplierPortalRecord[P]>
}




export type SupplierPortalRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SupplierPortalRecordWhereInput
  orderBy?: Prisma.SupplierPortalRecordOrderByWithAggregationInput | Prisma.SupplierPortalRecordOrderByWithAggregationInput[]
  by: Prisma.SupplierPortalRecordScalarFieldEnum[] | Prisma.SupplierPortalRecordScalarFieldEnum
  having?: Prisma.SupplierPortalRecordScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: SupplierPortalRecordCountAggregateInputType | true
  _min?: SupplierPortalRecordMinAggregateInputType
  _max?: SupplierPortalRecordMaxAggregateInputType
}

export type SupplierPortalRecordGroupByOutputType = {
  id: string
  tenantId: string
  supplierName: string
  supplierEmail: string
  invoiceNo: string
  shippingStatus: string
  submittedAt: Date
  _count: SupplierPortalRecordCountAggregateOutputType | null
  _min: SupplierPortalRecordMinAggregateOutputType | null
  _max: SupplierPortalRecordMaxAggregateOutputType | null
}

export type GetSupplierPortalRecordGroupByPayload<T extends SupplierPortalRecordGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<SupplierPortalRecordGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof SupplierPortalRecordGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], SupplierPortalRecordGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], SupplierPortalRecordGroupByOutputType[P]>
      }
    >
  >



export type SupplierPortalRecordWhereInput = {
  AND?: Prisma.SupplierPortalRecordWhereInput | Prisma.SupplierPortalRecordWhereInput[]
  OR?: Prisma.SupplierPortalRecordWhereInput[]
  NOT?: Prisma.SupplierPortalRecordWhereInput | Prisma.SupplierPortalRecordWhereInput[]
  id?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  tenantId?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  supplierName?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  supplierEmail?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  invoiceNo?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  shippingStatus?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  submittedAt?: Prisma.DateTimeFilter<"SupplierPortalRecord"> | Date | string
}

export type SupplierPortalRecordOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  supplierName?: Prisma.SortOrder
  supplierEmail?: Prisma.SortOrder
  invoiceNo?: Prisma.SortOrder
  shippingStatus?: Prisma.SortOrder
  submittedAt?: Prisma.SortOrder
}

export type SupplierPortalRecordWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.SupplierPortalRecordWhereInput | Prisma.SupplierPortalRecordWhereInput[]
  OR?: Prisma.SupplierPortalRecordWhereInput[]
  NOT?: Prisma.SupplierPortalRecordWhereInput | Prisma.SupplierPortalRecordWhereInput[]
  tenantId?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  supplierName?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  supplierEmail?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  invoiceNo?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  shippingStatus?: Prisma.StringFilter<"SupplierPortalRecord"> | string
  submittedAt?: Prisma.DateTimeFilter<"SupplierPortalRecord"> | Date | string
}, "id">

export type SupplierPortalRecordOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  supplierName?: Prisma.SortOrder
  supplierEmail?: Prisma.SortOrder
  invoiceNo?: Prisma.SortOrder
  shippingStatus?: Prisma.SortOrder
  submittedAt?: Prisma.SortOrder
  _count?: Prisma.SupplierPortalRecordCountOrderByAggregateInput
  _max?: Prisma.SupplierPortalRecordMaxOrderByAggregateInput
  _min?: Prisma.SupplierPortalRecordMinOrderByAggregateInput
}

export type SupplierPortalRecordScalarWhereWithAggregatesInput = {
  AND?: Prisma.SupplierPortalRecordScalarWhereWithAggregatesInput | Prisma.SupplierPortalRecordScalarWhereWithAggregatesInput[]
  OR?: Prisma.SupplierPortalRecordScalarWhereWithAggregatesInput[]
  NOT?: Prisma.SupplierPortalRecordScalarWhereWithAggregatesInput | Prisma.SupplierPortalRecordScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"SupplierPortalRecord"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"SupplierPortalRecord"> | string
  supplierName?: Prisma.StringWithAggregatesFilter<"SupplierPortalRecord"> | string
  supplierEmail?: Prisma.StringWithAggregatesFilter<"SupplierPortalRecord"> | string
  invoiceNo?: Prisma.StringWithAggregatesFilter<"SupplierPortalRecord"> | string
  shippingStatus?: Prisma.StringWithAggregatesFilter<"SupplierPortalRecord"> | string
  submittedAt?: Prisma.DateTimeWithAggregatesFilter<"SupplierPortalRecord"> | Date | string
}

export type SupplierPortalRecordCreateInput = {
  id?: string
  tenantId: string
  supplierName: string
  supplierEmail: string
  invoiceNo: string
  shippingStatus: string
  submittedAt?: Date | string
}

export type SupplierPortalRecordUncheckedCreateInput = {
  id?: string
  tenantId: string
  supplierName: string
  supplierEmail: string
  invoiceNo: string
  shippingStatus: string
  submittedAt?: Date | string
}

export type SupplierPortalRecordUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  supplierName?: Prisma.StringFieldUpdateOperationsInput | string
  supplierEmail?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string
  shippingStatus?: Prisma.StringFieldUpdateOperationsInput | string
  submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplierPortalRecordUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  supplierName?: Prisma.StringFieldUpdateOperationsInput | string
  supplierEmail?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string
  shippingStatus?: Prisma.StringFieldUpdateOperationsInput | string
  submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplierPortalRecordCreateManyInput = {
  id?: string
  tenantId: string
  supplierName: string
  supplierEmail: string
  invoiceNo: string
  shippingStatus: string
  submittedAt?: Date | string
}

export type SupplierPortalRecordUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  supplierName?: Prisma.StringFieldUpdateOperationsInput | string
  supplierEmail?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string
  shippingStatus?: Prisma.StringFieldUpdateOperationsInput | string
  submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplierPortalRecordUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  supplierName?: Prisma.StringFieldUpdateOperationsInput | string
  supplierEmail?: Prisma.StringFieldUpdateOperationsInput | string
  invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string
  shippingStatus?: Prisma.StringFieldUpdateOperationsInput | string
  submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type SupplierPortalRecordCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  supplierName?: Prisma.SortOrder
  supplierEmail?: Prisma.SortOrder
  invoiceNo?: Prisma.SortOrder
  shippingStatus?: Prisma.SortOrder
  submittedAt?: Prisma.SortOrder
}

export type SupplierPortalRecordMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  supplierName?: Prisma.SortOrder
  supplierEmail?: Prisma.SortOrder
  invoiceNo?: Prisma.SortOrder
  shippingStatus?: Prisma.SortOrder
  submittedAt?: Prisma.SortOrder
}

export type SupplierPortalRecordMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  supplierName?: Prisma.SortOrder
  supplierEmail?: Prisma.SortOrder
  invoiceNo?: Prisma.SortOrder
  shippingStatus?: Prisma.SortOrder
  submittedAt?: Prisma.SortOrder
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}



export type SupplierPortalRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  supplierName?: boolean
  supplierEmail?: boolean
  invoiceNo?: boolean
  shippingStatus?: boolean
  submittedAt?: boolean
}, ExtArgs["result"]["supplierPortalRecord"]>

export type SupplierPortalRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  supplierName?: boolean
  supplierEmail?: boolean
  invoiceNo?: boolean
  shippingStatus?: boolean
  submittedAt?: boolean
}, ExtArgs["result"]["supplierPortalRecord"]>

export type SupplierPortalRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  supplierName?: boolean
  supplierEmail?: boolean
  invoiceNo?: boolean
  shippingStatus?: boolean
  submittedAt?: boolean
}, ExtArgs["result"]["supplierPortalRecord"]>

export type SupplierPortalRecordSelectScalar = {
  id?: boolean
  tenantId?: boolean
  supplierName?: boolean
  supplierEmail?: boolean
  invoiceNo?: boolean
  shippingStatus?: boolean
  submittedAt?: boolean
}

export type SupplierPortalRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "supplierName" | "supplierEmail" | "invoiceNo" | "shippingStatus" | "submittedAt", ExtArgs["result"]["supplierPortalRecord"]>

export type $SupplierPortalRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "SupplierPortalRecord"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    supplierName: string
    supplierEmail: string
    invoiceNo: string
    shippingStatus: string
    submittedAt: Date
  }, ExtArgs["result"]["supplierPortalRecord"]>
  composites: {}
}

export type SupplierPortalRecordGetPayload<S extends boolean | null | undefined | SupplierPortalRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload, S>

export type SupplierPortalRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<SupplierPortalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierPortalRecordCountAggregateInputType | true
  }

export interface SupplierPortalRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierPortalRecord'], meta: { name: 'SupplierPortalRecord' } }
  
  findUnique<T extends SupplierPortalRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends SupplierPortalRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends SupplierPortalRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierPortalRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends SupplierPortalRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierPortalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends SupplierPortalRecordFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierPortalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends SupplierPortalRecordCreateArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends SupplierPortalRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierPortalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends SupplierPortalRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierPortalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends SupplierPortalRecordDeleteArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends SupplierPortalRecordUpdateArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends SupplierPortalRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierPortalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends SupplierPortalRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends SupplierPortalRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends SupplierPortalRecordUpsertArgs>(args: Prisma.SelectSubset<T, SupplierPortalRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierPortalRecordClient<runtime.Types.Result.GetResult<Prisma.$SupplierPortalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends SupplierPortalRecordCountArgs>(
    args?: Prisma.Subset<T, SupplierPortalRecordCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], SupplierPortalRecordCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends SupplierPortalRecordAggregateArgs>(args: Prisma.Subset<T, SupplierPortalRecordAggregateArgs>): Prisma.PrismaPromise<GetSupplierPortalRecordAggregateType<T>>

  
  groupBy<
    T extends SupplierPortalRecordGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: SupplierPortalRecordGroupByArgs['orderBy'] }
      : { orderBy?: SupplierPortalRecordGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, SupplierPortalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierPortalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: SupplierPortalRecordFieldRefs;
}


export interface Prisma__SupplierPortalRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface SupplierPortalRecordFieldRefs {
  readonly id: Prisma.FieldRef<"SupplierPortalRecord", 'String'>
  readonly tenantId: Prisma.FieldRef<"SupplierPortalRecord", 'String'>
  readonly supplierName: Prisma.FieldRef<"SupplierPortalRecord", 'String'>
  readonly supplierEmail: Prisma.FieldRef<"SupplierPortalRecord", 'String'>
  readonly invoiceNo: Prisma.FieldRef<"SupplierPortalRecord", 'String'>
  readonly shippingStatus: Prisma.FieldRef<"SupplierPortalRecord", 'String'>
  readonly submittedAt: Prisma.FieldRef<"SupplierPortalRecord", 'DateTime'>
}
    



export type SupplierPortalRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  where: Prisma.SupplierPortalRecordWhereUniqueInput
}


export type SupplierPortalRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  where: Prisma.SupplierPortalRecordWhereUniqueInput
}


export type SupplierPortalRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  where?: Prisma.SupplierPortalRecordWhereInput
  
  orderBy?: Prisma.SupplierPortalRecordOrderByWithRelationInput | Prisma.SupplierPortalRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplierPortalRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SupplierPortalRecordScalarFieldEnum | Prisma.SupplierPortalRecordScalarFieldEnum[]
}


export type SupplierPortalRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  where?: Prisma.SupplierPortalRecordWhereInput
  
  orderBy?: Prisma.SupplierPortalRecordOrderByWithRelationInput | Prisma.SupplierPortalRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplierPortalRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SupplierPortalRecordScalarFieldEnum | Prisma.SupplierPortalRecordScalarFieldEnum[]
}


export type SupplierPortalRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  where?: Prisma.SupplierPortalRecordWhereInput
  
  orderBy?: Prisma.SupplierPortalRecordOrderByWithRelationInput | Prisma.SupplierPortalRecordOrderByWithRelationInput[]
  
  cursor?: Prisma.SupplierPortalRecordWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.SupplierPortalRecordScalarFieldEnum | Prisma.SupplierPortalRecordScalarFieldEnum[]
}


export type SupplierPortalRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SupplierPortalRecordCreateInput, Prisma.SupplierPortalRecordUncheckedCreateInput>
}


export type SupplierPortalRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.SupplierPortalRecordCreateManyInput | Prisma.SupplierPortalRecordCreateManyInput[]
  skipDuplicates?: boolean
}


export type SupplierPortalRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  data: Prisma.SupplierPortalRecordCreateManyInput | Prisma.SupplierPortalRecordCreateManyInput[]
  skipDuplicates?: boolean
}


export type SupplierPortalRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SupplierPortalRecordUpdateInput, Prisma.SupplierPortalRecordUncheckedUpdateInput>
  
  where: Prisma.SupplierPortalRecordWhereUniqueInput
}


export type SupplierPortalRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.SupplierPortalRecordUpdateManyMutationInput, Prisma.SupplierPortalRecordUncheckedUpdateManyInput>
  
  where?: Prisma.SupplierPortalRecordWhereInput
  
  limit?: number
}


export type SupplierPortalRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.SupplierPortalRecordUpdateManyMutationInput, Prisma.SupplierPortalRecordUncheckedUpdateManyInput>
  
  where?: Prisma.SupplierPortalRecordWhereInput
  
  limit?: number
}


export type SupplierPortalRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  where: Prisma.SupplierPortalRecordWhereUniqueInput
  
  create: Prisma.XOR<Prisma.SupplierPortalRecordCreateInput, Prisma.SupplierPortalRecordUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.SupplierPortalRecordUpdateInput, Prisma.SupplierPortalRecordUncheckedUpdateInput>
}


export type SupplierPortalRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
  
  where: Prisma.SupplierPortalRecordWhereUniqueInput
}


export type SupplierPortalRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.SupplierPortalRecordWhereInput
  
  limit?: number
}


export type SupplierPortalRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.SupplierPortalRecordSelect<ExtArgs> | null
  
  omit?: Prisma.SupplierPortalRecordOmit<ExtArgs> | null
}
