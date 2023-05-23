import { Operator } from "./operator";
import { Product } from "./product";

interface DefaultParams {
    id?: string;
    eventId?: string;
    status?: string;
    operatorId?: string;
    clientName?: string;
    itemsId?: string[];
}

export type EventOrderQueryableParams = DefaultParams;

export type EventOrderCreatableParams = Omit<DefaultParams, "id">;

export type EventOrderEditableParams = Pick<DefaultParams, "status">;

export enum OrderStatus {
    COOKING = "ORDER_STATUS_COOKING",
    READY = "ORDER_STATUS_READY",
    PICKED_UP = "ORDER_STATUS_PICKED_UP",
}

export interface EventOrder {
    _id: string;
    event: Omit<Event, "orders">;
    status: OrderStatus;
    operator: Operator;
    client: string;
    items: Omit<Product, "variants">[];
}
