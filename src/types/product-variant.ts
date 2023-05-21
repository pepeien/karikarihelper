import { Product } from "./product";

interface DefaultParams {
    id?: string;
    name?: string;
    productId?: string;
}

export type ProductVariantQueryableParams = DefaultParams;

export type ProductVariantCreatableParams = Omit<DefaultParams, "id">;

export type ProductVariantEditableParams = Pick<DefaultParams, "name">;

export interface ProductVariant {
    _id: string;
    name: string;
    product: Omit<Product, "variants">;
}
