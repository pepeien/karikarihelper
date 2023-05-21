import { ProductVariant } from "./product-variant";

interface DefaultParams {
    id?: string;
    name?: string;
}

export type ProductQueryableParams = Omit<DefaultParams, "variants">;

export type ProductCreatableParams = Pick<DefaultParams, "name">;

export type ProductEditableParams = Pick<DefaultParams, "name">;

export interface Product {
    _id: string;
    name: string;
    variants: Array<Omit<ProductVariant, "product">>;
}
