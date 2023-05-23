import { Realm } from "./realm";

interface DefaultParams {
    id?: string;
    name?: string;
    realmId?: string;
    parentId?: string;
}

export type ProductQueryableParams = DefaultParams;

export type ProductCreatableParams = Omit<DefaultParams, "id">;

export type ProductEditableParams = Pick<DefaultParams, "name">;

export interface Product {
    _id: string;
    name: string;
    realm: Realm;
    parent?: Product;
    variants: Omit<Product, "variants" | "realm">[];
}
