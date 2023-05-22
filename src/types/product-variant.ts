import { Product } from "./product";
import { Realm } from "./realm";

interface DefaultParams {
    id?: string;
    name?: string;
    productId?: string;
    realmId?: string;
}

export type ProductVariantQueryableParams = DefaultParams;

export type ProductVariantCreatableParams = Omit<DefaultParams, "id">;

export type ProductVariantEditableParams = Pick<DefaultParams, "name">;

export interface ProductVariant {
    _id: string;
    name: string;
    product: Omit<Product, "realm" | "variants">;
    realm: Realm;
}
