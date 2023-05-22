import { ProductVariant } from "./product-variant";
import { Realm } from "./realm";

interface DefaultParams {
    id?: string;
    name?: string;
    realmId?: string;
}

export type ProductQueryableParams = Omit<DefaultParams, "variants">;

export type ProductCreatableParams = Pick<DefaultParams, "name">;

export type ProductEditableParams = Pick<DefaultParams, "name">;

export interface Product {
    _id: string;
    name: string;
    realm: Realm;
    variants: Array<Omit<ProductVariant, "variant" | "realm">>;
}
