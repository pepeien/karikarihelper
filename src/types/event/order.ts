import { Event } from "./event";
import { Operator } from "../operator";
import { Realm } from "../realm";
import { Ingredient } from "../ingredient";
import { Product } from "../product";

interface DefaultParams {
    id?: string;
    eventId?: string;
    status?: string;
    operatorId?: string;
    realmId?: string;
    clientName?: string;
    items?: OrderItem[];
}

export type EventOrderQueryableParams = Omit<DefaultParams, "items">;

export type EventOrderCreatableParams = Omit<DefaultParams, "id" | "realmId">;

export type EventOrderEditableParams = Pick<DefaultParams, "status">;

export enum OrderStatus {
    COOKING = "ORDER_STATUS_COOKING",
    READY = "ORDER_STATUS_READY",
    PICKED_UP = "ORDER_STATUS_PICKED_UP",
}

export interface OrderItem {
    product: Product;
    modifications: Ingredient[];
}

export interface EventOrder {
    _id: string;
    event: Omit<Event, "orders">;
    status: OrderStatus;
    operator: Pick<Operator, "_id" | "displayName">;
    realm: Pick<Realm, "_id" | "name">;
    client: string;
    items: OrderItem[];
}
