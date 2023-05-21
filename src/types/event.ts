import { EventOrder } from "./event-order";

interface DefaultParams {
    _id?: string;
    name?: string;
    date?: Date;
}

export type EventQueryableParams = Omit<DefaultParams, "orders">;

export type EventCreatableParams = Omit<DefaultParams, "_id">;

export type EventEditableParams = Pick<DefaultParams, "name">;

export interface Event {
    _id: string;
    name: string;
    date: Date;
    orders: Array<Omit<EventOrder, "event">>;
}
