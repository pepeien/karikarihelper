interface DefaultParams {
    id?: string;
    name?: string;
}

export type RealmQueryableParams = DefaultParams;

export type RealmCreatableParams = Pick<DefaultParams, "name">;

export type RealmEditableParams = Pick<DefaultParams, "name">;

export interface Realm {
    _id: string;
    name: string;
}
