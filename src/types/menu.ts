interface DefaultParams {
    id?: string;
    realm?: string;
    title?: string;
    icon?: string;
    route?: string;
    parentId?: string;
    isRootOnly?: boolean;
}

export type MenuQueryableParams = Omit<DefaultParams, "route" | "icon">;

export type MenuCreatableParams = Omit<DefaultParams, "id">;

export type MenuEditableParams = Omit<DefaultParams, "id" | "parentId">;

export interface Menu {
    _id: string;
    realm: string;
    title: string;
    icon?: string;
    route: string;
    parent?: string;
    children: Menu[];
}
