import { Event } from "./event";
import { Operator } from "./operator";
import { Product } from "./product";
import { Realm } from "./realm";

interface DefaultParams {
    id?: string;
    eventId?: string;
    status?: string;
    operatorId?: string;
    realmId?: string;
    clientName?: string;
    itemsId?: string[];
}

export type EventOrderQueryableParams = DefaultParams;

export type EventOrderCreatableParams = Omit<DefaultParams, "id" | "realmId">;

export type EventOrderEditableParams = Pick<DefaultParams, "status">;

export enum OrderStatus {
    COOKING = "ORDER_STATUS_COOKING",
    READY = "ORDER_STATUS_READY",
    PICKED_UP = "ORDER_STATUS_PICKED_UP",
}

export interface OrderItem {
    id: string;
    product: Product;
}

export interface EventOrder {
    _id: string;
    event: Omit<Event, "orders">;
    status: OrderStatus;
    operator: Pick<Operator, "_id" | "displayName">;
    realm: Pick<Realm, "_id" | "name">;
    client: string;
    items: Omit<Product, "realm">[];
}
