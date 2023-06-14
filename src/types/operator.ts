import { Realm } from "..";

interface DefaultParams {
    id?: string;
    userName?: string;
    displayName?: string;
    role?: string;
    realmId?: string;
    photo?: string;
}

export type OperatorQueryableParams = Omit<DefaultParams, "userName" | "photo">;

export type OperatorCreatableParams = Omit<DefaultParams, "id">;

export type OperatorEditableParams = Pick<
    DefaultParams,
    "displayName" | "role" | "photo"
>;

export enum OperatorRole {
    ADMIN = "OPERATOR_ROLE_ADMIN",
    MANAGER = "OPERATOR_ROLE_MANAGER",
    WORKER = "OPERATOR_ROLE_WORKER",
}

export interface Operator {
    _id: string;
    displayName: string;
    role: OperatorRole;
    realm: Pick<Realm, "_id" | "name">;
    photo: string;
}
