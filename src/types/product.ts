import { Realm } from "./realm";

interface DefaultParams {
    id?: string;
    name?: string;
    realmId?: string;
    optionals?: string[];
    additionals?: string[];
}

export type ProductQueryableParams = DefaultParams;

export type ProductCreatableParams = Omit<DefaultParams, "id">;

export type ProductEditableParams = Omit<DefaultParams, "id">;

export interface Product {
    _id: string;
    name: string;
    realm: Pick<Realm, "_id" | "name">;
    optionals: string[];
    additionals: string[];
}
