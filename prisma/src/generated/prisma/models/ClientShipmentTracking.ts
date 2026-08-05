





import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"


export type ClientShipmentTrackingModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientShipmentTrackingPayload>

export type AggregateClientShipmentTracking = {
  _count: ClientShipmentTrackingCountAggregateOutputType | null
  _min: ClientShipmentTrackingMinAggregateOutputType | null
  _max: ClientShipmentTrackingMaxAggregateOutputType | null
}

export type ClientShipmentTrackingMinAggregateOutputType = {
  id: string | null
  tenantId: string | null
  trackingCode: string | null
  clientName: string | null
  clientEmail: string | null
  currentLocation: string | null
  status: $Enums.ShipmentStatus | null
  estimatedDelivery: Date | null
  updatedAt: Date | null
}

export type ClientShipmentTrackingMaxAggregateOutputType = {
  id: string | null
  tenantId: string | null
  trackingCode: string | null
  clientName: string | null
  clientEmail: string | null
  currentLocation: string | null
  status: $Enums.ShipmentStatus | null
  estimatedDelivery: Date | null
  updatedAt: Date | null
}

export type ClientShipmentTrackingCountAggregateOutputType = {
  id: number
  tenantId: number
  trackingCode: number
  clientName: number
  clientEmail: number
  currentLocation: number
  status: number
  estimatedDelivery: number
  updatedAt: number
  _all: number
}


export type ClientShipmentTrackingMinAggregateInputType = {
  id?: true
  tenantId?: true
  trackingCode?: true
  clientName?: true
  clientEmail?: true
  currentLocation?: true
  status?: true
  estimatedDelivery?: true
  updatedAt?: true
}

export type ClientShipmentTrackingMaxAggregateInputType = {
  id?: true
  tenantId?: true
  trackingCode?: true
  clientName?: true
  clientEmail?: true
  currentLocation?: true
  status?: true
  estimatedDelivery?: true
  updatedAt?: true
}

export type ClientShipmentTrackingCountAggregateInputType = {
  id?: true
  tenantId?: true
  trackingCode?: true
  clientName?: true
  clientEmail?: true
  currentLocation?: true
  status?: true
  estimatedDelivery?: true
  updatedAt?: true
  _all?: true
}

export type ClientShipmentTrackingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.ClientShipmentTrackingWhereInput
  
  orderBy?: Prisma.ClientShipmentTrackingOrderByWithRelationInput | Prisma.ClientShipmentTrackingOrderByWithRelationInput[]
  
  cursor?: Prisma.ClientShipmentTrackingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  _count?: true | ClientShipmentTrackingCountAggregateInputType
  
  _min?: ClientShipmentTrackingMinAggregateInputType
  
  _max?: ClientShipmentTrackingMaxAggregateInputType
}

export type GetClientShipmentTrackingAggregateType<T extends ClientShipmentTrackingAggregateArgs> = {
      [P in keyof T & keyof AggregateClientShipmentTracking]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateClientShipmentTracking[P]>
    : Prisma.GetScalarType<T[P], AggregateClientShipmentTracking[P]>
}




export type ClientShipmentTrackingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ClientShipmentTrackingWhereInput
  orderBy?: Prisma.ClientShipmentTrackingOrderByWithAggregationInput | Prisma.ClientShipmentTrackingOrderByWithAggregationInput[]
  by: Prisma.ClientShipmentTrackingScalarFieldEnum[] | Prisma.ClientShipmentTrackingScalarFieldEnum
  having?: Prisma.ClientShipmentTrackingScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ClientShipmentTrackingCountAggregateInputType | true
  _min?: ClientShipmentTrackingMinAggregateInputType
  _max?: ClientShipmentTrackingMaxAggregateInputType
}

export type ClientShipmentTrackingGroupByOutputType = {
  id: string
  tenantId: string
  trackingCode: string
  clientName: string
  clientEmail: string
  currentLocation: string
  status: $Enums.ShipmentStatus
  estimatedDelivery: Date
  updatedAt: Date
  _count: ClientShipmentTrackingCountAggregateOutputType | null
  _min: ClientShipmentTrackingMinAggregateOutputType | null
  _max: ClientShipmentTrackingMaxAggregateOutputType | null
}

export type GetClientShipmentTrackingGroupByPayload<T extends ClientShipmentTrackingGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ClientShipmentTrackingGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ClientShipmentTrackingGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ClientShipmentTrackingGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ClientShipmentTrackingGroupByOutputType[P]>
      }
    >
  >



export type ClientShipmentTrackingWhereInput = {
  AND?: Prisma.ClientShipmentTrackingWhereInput | Prisma.ClientShipmentTrackingWhereInput[]
  OR?: Prisma.ClientShipmentTrackingWhereInput[]
  NOT?: Prisma.ClientShipmentTrackingWhereInput | Prisma.ClientShipmentTrackingWhereInput[]
  id?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  tenantId?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  trackingCode?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  clientName?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  clientEmail?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  currentLocation?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  status?: Prisma.EnumShipmentStatusFilter<"ClientShipmentTracking"> | $Enums.ShipmentStatus
  estimatedDelivery?: Prisma.DateTimeFilter<"ClientShipmentTracking"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"ClientShipmentTracking"> | Date | string
}

export type ClientShipmentTrackingOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingCode?: Prisma.SortOrder
  clientName?: Prisma.SortOrder
  clientEmail?: Prisma.SortOrder
  currentLocation?: Prisma.SortOrder
  status?: Prisma.SortOrder
  estimatedDelivery?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ClientShipmentTrackingWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  trackingCode?: string
  AND?: Prisma.ClientShipmentTrackingWhereInput | Prisma.ClientShipmentTrackingWhereInput[]
  OR?: Prisma.ClientShipmentTrackingWhereInput[]
  NOT?: Prisma.ClientShipmentTrackingWhereInput | Prisma.ClientShipmentTrackingWhereInput[]
  tenantId?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  clientName?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  clientEmail?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  currentLocation?: Prisma.StringFilter<"ClientShipmentTracking"> | string
  status?: Prisma.EnumShipmentStatusFilter<"ClientShipmentTracking"> | $Enums.ShipmentStatus
  estimatedDelivery?: Prisma.DateTimeFilter<"ClientShipmentTracking"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"ClientShipmentTracking"> | Date | string
}, "id" | "trackingCode">

export type ClientShipmentTrackingOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingCode?: Prisma.SortOrder
  clientName?: Prisma.SortOrder
  clientEmail?: Prisma.SortOrder
  currentLocation?: Prisma.SortOrder
  status?: Prisma.SortOrder
  estimatedDelivery?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.ClientShipmentTrackingCountOrderByAggregateInput
  _max?: Prisma.ClientShipmentTrackingMaxOrderByAggregateInput
  _min?: Prisma.ClientShipmentTrackingMinOrderByAggregateInput
}

export type ClientShipmentTrackingScalarWhereWithAggregatesInput = {
  AND?: Prisma.ClientShipmentTrackingScalarWhereWithAggregatesInput | Prisma.ClientShipmentTrackingScalarWhereWithAggregatesInput[]
  OR?: Prisma.ClientShipmentTrackingScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ClientShipmentTrackingScalarWhereWithAggregatesInput | Prisma.ClientShipmentTrackingScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"ClientShipmentTracking"> | string
  tenantId?: Prisma.StringWithAggregatesFilter<"ClientShipmentTracking"> | string
  trackingCode?: Prisma.StringWithAggregatesFilter<"ClientShipmentTracking"> | string
  clientName?: Prisma.StringWithAggregatesFilter<"ClientShipmentTracking"> | string
  clientEmail?: Prisma.StringWithAggregatesFilter<"ClientShipmentTracking"> | string
  currentLocation?: Prisma.StringWithAggregatesFilter<"ClientShipmentTracking"> | string
  status?: Prisma.EnumShipmentStatusWithAggregatesFilter<"ClientShipmentTracking"> | $Enums.ShipmentStatus
  estimatedDelivery?: Prisma.DateTimeWithAggregatesFilter<"ClientShipmentTracking"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ClientShipmentTracking"> | Date | string
}

export type ClientShipmentTrackingCreateInput = {
  id?: string
  tenantId: string
  trackingCode: string
  clientName: string
  clientEmail: string
  currentLocation: string
  status?: $Enums.ShipmentStatus
  estimatedDelivery: Date | string
  updatedAt?: Date | string
}

export type ClientShipmentTrackingUncheckedCreateInput = {
  id?: string
  tenantId: string
  trackingCode: string
  clientName: string
  clientEmail: string
  currentLocation: string
  status?: $Enums.ShipmentStatus
  estimatedDelivery: Date | string
  updatedAt?: Date | string
}

export type ClientShipmentTrackingUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingCode?: Prisma.StringFieldUpdateOperationsInput | string
  clientName?: Prisma.StringFieldUpdateOperationsInput | string
  clientEmail?: Prisma.StringFieldUpdateOperationsInput | string
  currentLocation?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  estimatedDelivery?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ClientShipmentTrackingUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingCode?: Prisma.StringFieldUpdateOperationsInput | string
  clientName?: Prisma.StringFieldUpdateOperationsInput | string
  clientEmail?: Prisma.StringFieldUpdateOperationsInput | string
  currentLocation?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  estimatedDelivery?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ClientShipmentTrackingCreateManyInput = {
  id?: string
  tenantId: string
  trackingCode: string
  clientName: string
  clientEmail: string
  currentLocation: string
  status?: $Enums.ShipmentStatus
  estimatedDelivery: Date | string
  updatedAt?: Date | string
}

export type ClientShipmentTrackingUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingCode?: Prisma.StringFieldUpdateOperationsInput | string
  clientName?: Prisma.StringFieldUpdateOperationsInput | string
  clientEmail?: Prisma.StringFieldUpdateOperationsInput | string
  currentLocation?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  estimatedDelivery?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ClientShipmentTrackingUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  tenantId?: Prisma.StringFieldUpdateOperationsInput | string
  trackingCode?: Prisma.StringFieldUpdateOperationsInput | string
  clientName?: Prisma.StringFieldUpdateOperationsInput | string
  clientEmail?: Prisma.StringFieldUpdateOperationsInput | string
  currentLocation?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  estimatedDelivery?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ClientShipmentTrackingCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingCode?: Prisma.SortOrder
  clientName?: Prisma.SortOrder
  clientEmail?: Prisma.SortOrder
  currentLocation?: Prisma.SortOrder
  status?: Prisma.SortOrder
  estimatedDelivery?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ClientShipmentTrackingMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingCode?: Prisma.SortOrder
  clientName?: Prisma.SortOrder
  clientEmail?: Prisma.SortOrder
  currentLocation?: Prisma.SortOrder
  status?: Prisma.SortOrder
  estimatedDelivery?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ClientShipmentTrackingMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  tenantId?: Prisma.SortOrder
  trackingCode?: Prisma.SortOrder
  clientName?: Prisma.SortOrder
  clientEmail?: Prisma.SortOrder
  currentLocation?: Prisma.SortOrder
  status?: Prisma.SortOrder
  estimatedDelivery?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type EnumShipmentStatusFieldUpdateOperationsInput = {
  set?: $Enums.ShipmentStatus
}



export type ClientShipmentTrackingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  trackingCode?: boolean
  clientName?: boolean
  clientEmail?: boolean
  currentLocation?: boolean
  status?: boolean
  estimatedDelivery?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["clientShipmentTracking"]>

export type ClientShipmentTrackingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  trackingCode?: boolean
  clientName?: boolean
  clientEmail?: boolean
  currentLocation?: boolean
  status?: boolean
  estimatedDelivery?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["clientShipmentTracking"]>

export type ClientShipmentTrackingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  tenantId?: boolean
  trackingCode?: boolean
  clientName?: boolean
  clientEmail?: boolean
  currentLocation?: boolean
  status?: boolean
  estimatedDelivery?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["clientShipmentTracking"]>

export type ClientShipmentTrackingSelectScalar = {
  id?: boolean
  tenantId?: boolean
  trackingCode?: boolean
  clientName?: boolean
  clientEmail?: boolean
  currentLocation?: boolean
  status?: boolean
  estimatedDelivery?: boolean
  updatedAt?: boolean
}

export type ClientShipmentTrackingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "trackingCode" | "clientName" | "clientEmail" | "currentLocation" | "status" | "estimatedDelivery" | "updatedAt", ExtArgs["result"]["clientShipmentTracking"]>

export type $ClientShipmentTrackingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "ClientShipmentTracking"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    tenantId: string
    trackingCode: string
    clientName: string
    clientEmail: string
    currentLocation: string
    status: $Enums.ShipmentStatus
    estimatedDelivery: Date
    updatedAt: Date
  }, ExtArgs["result"]["clientShipmentTracking"]>
  composites: {}
}

export type ClientShipmentTrackingGetPayload<S extends boolean | null | undefined | ClientShipmentTrackingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload, S>

export type ClientShipmentTrackingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ClientShipmentTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientShipmentTrackingCountAggregateInputType | true
  }

export interface ClientShipmentTrackingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientShipmentTracking'], meta: { name: 'ClientShipmentTracking' } }
  
  findUnique<T extends ClientShipmentTrackingFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findUniqueOrThrow<T extends ClientShipmentTrackingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findFirst<T extends ClientShipmentTrackingFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientShipmentTrackingFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  
  findFirstOrThrow<T extends ClientShipmentTrackingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientShipmentTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  findMany<T extends ClientShipmentTrackingFindManyArgs>(args?: Prisma.SelectSubset<T, ClientShipmentTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  
  create<T extends ClientShipmentTrackingCreateArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingCreateArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  createMany<T extends ClientShipmentTrackingCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientShipmentTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  createManyAndReturn<T extends ClientShipmentTrackingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientShipmentTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  
  delete<T extends ClientShipmentTrackingDeleteArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  update<T extends ClientShipmentTrackingUpdateArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  
  deleteMany<T extends ClientShipmentTrackingDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientShipmentTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateMany<T extends ClientShipmentTrackingUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  
  updateManyAndReturn<T extends ClientShipmentTrackingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  
  upsert<T extends ClientShipmentTrackingUpsertArgs>(args: Prisma.SelectSubset<T, ClientShipmentTrackingUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientShipmentTrackingClient<runtime.Types.Result.GetResult<Prisma.$ClientShipmentTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  
  count<T extends ClientShipmentTrackingCountArgs>(
    args?: Prisma.Subset<T, ClientShipmentTrackingCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ClientShipmentTrackingCountAggregateOutputType>
      : number
  >

  
  aggregate<T extends ClientShipmentTrackingAggregateArgs>(args: Prisma.Subset<T, ClientShipmentTrackingAggregateArgs>): Prisma.PrismaPromise<GetClientShipmentTrackingAggregateType<T>>

  
  groupBy<
    T extends ClientShipmentTrackingGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ClientShipmentTrackingGroupByArgs['orderBy'] }
      : { orderBy?: ClientShipmentTrackingGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, ClientShipmentTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientShipmentTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

readonly fields: ClientShipmentTrackingFieldRefs;
}


export interface Prisma__ClientShipmentTrackingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}





export interface ClientShipmentTrackingFieldRefs {
  readonly id: Prisma.FieldRef<"ClientShipmentTracking", 'String'>
  readonly tenantId: Prisma.FieldRef<"ClientShipmentTracking", 'String'>
  readonly trackingCode: Prisma.FieldRef<"ClientShipmentTracking", 'String'>
  readonly clientName: Prisma.FieldRef<"ClientShipmentTracking", 'String'>
  readonly clientEmail: Prisma.FieldRef<"ClientShipmentTracking", 'String'>
  readonly currentLocation: Prisma.FieldRef<"ClientShipmentTracking", 'String'>
  readonly status: Prisma.FieldRef<"ClientShipmentTracking", 'ShipmentStatus'>
  readonly estimatedDelivery: Prisma.FieldRef<"ClientShipmentTracking", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"ClientShipmentTracking", 'DateTime'>
}
    



export type ClientShipmentTrackingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  where: Prisma.ClientShipmentTrackingWhereUniqueInput
}


export type ClientShipmentTrackingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  where: Prisma.ClientShipmentTrackingWhereUniqueInput
}


export type ClientShipmentTrackingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  where?: Prisma.ClientShipmentTrackingWhereInput
  
  orderBy?: Prisma.ClientShipmentTrackingOrderByWithRelationInput | Prisma.ClientShipmentTrackingOrderByWithRelationInput[]
  
  cursor?: Prisma.ClientShipmentTrackingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.ClientShipmentTrackingScalarFieldEnum | Prisma.ClientShipmentTrackingScalarFieldEnum[]
}


export type ClientShipmentTrackingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  where?: Prisma.ClientShipmentTrackingWhereInput
  
  orderBy?: Prisma.ClientShipmentTrackingOrderByWithRelationInput | Prisma.ClientShipmentTrackingOrderByWithRelationInput[]
  
  cursor?: Prisma.ClientShipmentTrackingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.ClientShipmentTrackingScalarFieldEnum | Prisma.ClientShipmentTrackingScalarFieldEnum[]
}


export type ClientShipmentTrackingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  where?: Prisma.ClientShipmentTrackingWhereInput
  
  orderBy?: Prisma.ClientShipmentTrackingOrderByWithRelationInput | Prisma.ClientShipmentTrackingOrderByWithRelationInput[]
  
  cursor?: Prisma.ClientShipmentTrackingWhereUniqueInput
  
  take?: number
  
  skip?: number
  
  distinct?: Prisma.ClientShipmentTrackingScalarFieldEnum | Prisma.ClientShipmentTrackingScalarFieldEnum[]
}


export type ClientShipmentTrackingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ClientShipmentTrackingCreateInput, Prisma.ClientShipmentTrackingUncheckedCreateInput>
}


export type ClientShipmentTrackingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.ClientShipmentTrackingCreateManyInput | Prisma.ClientShipmentTrackingCreateManyInput[]
  skipDuplicates?: boolean
}


export type ClientShipmentTrackingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelectCreateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  data: Prisma.ClientShipmentTrackingCreateManyInput | Prisma.ClientShipmentTrackingCreateManyInput[]
  skipDuplicates?: boolean
}


export type ClientShipmentTrackingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ClientShipmentTrackingUpdateInput, Prisma.ClientShipmentTrackingUncheckedUpdateInput>
  
  where: Prisma.ClientShipmentTrackingWhereUniqueInput
}


export type ClientShipmentTrackingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  data: Prisma.XOR<Prisma.ClientShipmentTrackingUpdateManyMutationInput, Prisma.ClientShipmentTrackingUncheckedUpdateManyInput>
  
  where?: Prisma.ClientShipmentTrackingWhereInput
  
  limit?: number
}


export type ClientShipmentTrackingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelectUpdateManyAndReturn<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  data: Prisma.XOR<Prisma.ClientShipmentTrackingUpdateManyMutationInput, Prisma.ClientShipmentTrackingUncheckedUpdateManyInput>
  
  where?: Prisma.ClientShipmentTrackingWhereInput
  
  limit?: number
}


export type ClientShipmentTrackingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  where: Prisma.ClientShipmentTrackingWhereUniqueInput
  
  create: Prisma.XOR<Prisma.ClientShipmentTrackingCreateInput, Prisma.ClientShipmentTrackingUncheckedCreateInput>
  
  update: Prisma.XOR<Prisma.ClientShipmentTrackingUpdateInput, Prisma.ClientShipmentTrackingUncheckedUpdateInput>
}


export type ClientShipmentTrackingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
  
  where: Prisma.ClientShipmentTrackingWhereUniqueInput
}


export type ClientShipmentTrackingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  where?: Prisma.ClientShipmentTrackingWhereInput
  
  limit?: number
}


export type ClientShipmentTrackingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  
  select?: Prisma.ClientShipmentTrackingSelect<ExtArgs> | null
  
  omit?: Prisma.ClientShipmentTrackingOmit<ExtArgs> | null
}
