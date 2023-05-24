import { Realm } from "..";

interface DefaultParams {
    id?: string;
    userName?: string;
    displayName?: string;
    realmId?: string;
    photo?: string;
}

export type OperatorQueryableParams = Omit<DefaultParams, "userName" | "photo">;

export type OperatorCreatableParams = Omit<DefaultParams, "id">;

export type OperatorEditableParams = Pick<
    DefaultParams,
    "displayName" | "photo"
>;

export interface Operator {
    _id: string;
    displayName: string;
    realm: Pick<Realm, "_id" | "name">;
    photo: string;
}
