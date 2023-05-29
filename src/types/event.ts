import { EventOrder } from "./event-order";

interface DefaultParams {
    id?: string;
    name?: string;
    date?: Date;
    isOpen?: boolean;
}

export type EventQueryableParams = Omit<DefaultParams, "orders">;

export type EventCreatableParams = Omit<DefaultParams, "id">;

export type EventEditableParams = Pick<DefaultParams, "name">;

export interface Event {
    _id: string;
    name: string;
    date: Date;
    orders: Pick<
        EventOrder,
        "_id" | "status" | "client" | "operator" | "realm" | "items"
    >[];
    isOpen: boolean;
}
