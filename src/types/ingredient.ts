export enum IngredientType {
    BASE = "INGREDIENT_TYPE_BASE",
    OPTIONAL = "INGREDIENT_TYPE_OPTIONAL",
    ADDITIONAL = "INGREDIENT_TYPE_ADDITIONAL",
}

export interface Ingredient {
    name: string;
    type: IngredientType;
}
