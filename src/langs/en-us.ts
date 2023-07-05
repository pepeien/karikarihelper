import { InHouseLang } from "..";

export default {
    LANGUAGE_META_NAME: "en",
    LANGUAGE_DISPLAY_NAME: "English (US)",

    /**
     * Dialog
     */
    DIALOG_CONFIRM_BUTTON: "Confirm",
    DIALOG_CANCEL_BUTTON: "Cancel",

    /**
     * Component
     */
    FILE_INPUT_TITLE: "Drag & Drop or Browse for the file",

    /**
     * Login
     */
    LOGIN_USERNAME_INPUT_TITLE: "Username",
    LOGIN_BUTTON_TITLE: "Log In",

    /**
     * Operator
     */
    OPERATOR_ROLE_ADMIN: "Administrator",
    OPERATOR_ROLE_MANAGER: "Manager",
    OPERATOR_ROLE_WORKER: "Worker",

    /**
     * Menu
     */
    MENU_EDIT_TITLE: "Edit",
    MENU_TRANSLATE_TITLE: "Language",
    MENU_LOG_OUT_TITLE: "Log Out",

    MENU_HOME_TITLE: "Home",

    MENU_REGISTRY_TITLE: "Registry",

    MENU_REGISTRY_EVENT_TITLE: "Event",
    MENU_REGISTRY_EVENT_INDEX_TITLE: "Events",
    MENU_REGISTRY_EVENT_ORDER_TITLE: "Orders",

    MENU_REGISTRY_MENU_TITLE: "Menus",

    MENU_REGISTRY_OPERATOR_TITLE: "Operators",

    MENU_REGISTRY_PRODUCT_TITLE: "Products",

    MENU_REGISTRY_REALM_TITLE: "Stands",

    /**
     * Registry
     */
    REGISTRY_MENU_REALM_INPUT: "Realm",
    REGISTRY_MENU_TITLE_INPUT: "Title",
    REGISTRY_MENU_ROUTE_INPUT: "Route",
    REGISTRY_MENU_PARENT_INPUT: "Parent Menu",
    REGISTRY_MENU_ICON_INPUT: "Icon",

    REGISTRY_EVENT_NAME_INPUT: "Name",
    REGISTRY_EVENT_DATE_INPUT: "Date",

    REGISTRY_EVENT_ORDER_EVENT_INPUT: "Event",
    REGISTRY_EVENT_ORDER_STATUS_INPUT: "Status",
    REGISTRY_EVENT_ORDER_OPERATOR_INPUT: "Operator",
    REGISTRY_EVENT_ORDER_CLIENT_INPUT: "Client",
    REGISTRY_EVENT_ORDER_ITEMS_INPUT: "Items",
    REGISTRY_EVENT_ORDER_ITEMS_ADDITIONAL_TITLE: "Additionals",
    REGISTRY_EVENT_ORDER_ITEMS_OPTIONAL_TITLE: "Optionals",

    REGISTRY_OPERATOR_DISPLAY_NAME_INPUT: "Display Name",
    REGISTRY_OPERATOR_USER_NAME_INPUT: "User Name",
    REGISTRY_OPERATOR_REALM_INPUT: "Stand",
    REGISTRY_OPERATOR_ROLE_INPUT: "Role",
    REGISTRY_OPERATOR_PHOTO_INPUT: "Photo",

    REGISTRY_PRODUCT_NAME_INPUT: "Name",
    REGISTRY_PRODUCT_REALM_INPUT: "Stand",
    REGISTRY_PRODUCT_INGREDIENT_TITLE: "Ingredients",
    REGISTRY_PRODUCT_INGREDIENT_NAME_INPUT: "Name",
    REGISTRY_PRODUCT_INGREDIENT_TYPE_INPUT: "Type",

    REGISTRY_REALM_NAME_INPUT: "Name",

    /**
     * Table
     */
    TABLE_ENTRY_EDIT_TITLE: "Edit",
    TABLE_ENTRY_DELETE_TITLE: "Delete",
    PAGINATOR_ITEMS_PER_PAGE_LABEL: "Items per page:",
    PAGINATOR_PREVIOUS_PAGE_LABEL: "Previous page",
    PAGINATOR_NEXT_PAGE_LABEL: "Next page",
    PAGINATOR_FIRST_PAGE_LABEL: "First page",
    PAGINATOR_LAST_PAGE_LABEL: "Last page",
    PAGINATOR_RANGE_CONNECTOR_LABEL: "of",

    /**
     * View
     */
    REGISTRY_EDITOR_CREATION_TITLE: "Creation",
    REGISTRY_EDITOR_EDITION_TITLE: "Edition",
    REGISTRY_EDITOR_CREATION_ACTION: "Create",
    REGISTRY_EDITOR_EDITION_ACTION: "Edit",
    REGISTRY_EDITOR_CANCEL_ACTION: "Cancel",

    EVENT_VIEW_TITLE: "Events",
    EVENT_VIEW_FINISHED_TITLE: "Finished",
    EVENT_VIEW_ONGOING_TITLE: "Ongoing",
    EVENT_VIEW_UPCOMING_TITLE: "Upcoming",
    EVENT_NEW_TITLE: "New Event",
    EVENT_REGISTRY_DELETE_MESSAGE:
        "Do you really want to delete this event ? This action is irreversible",

    EVENT_ORDER_VIEW_TITLE: "Orders",
    EVENT_ORDER_VIEW_PICKED_UP_TITLE: "Picked Up",
    EVENT_ORDER_VIEW_COOKING_TITLE: "Preparing",
    EVENT_ORDER_VIEW_READY_TITLE: "Ready",
    EVENT_ORDER_NEW_TITLE: "New Order",
    EVENT_ORDER_REGISTRY_DELETE_MESSAGE:
        "Do you really want to delete this order ? This action is irreversible",
    EVENT_ORDER_REGISTRY_CLIENT_STEP_TITLE: "Client",
    EVENT_ORDER_REGISTRY_ITEMS_STEP_TITLE: "Items",

    MENU_VIEW_TITLE: "Menus",
    MENU_NEW_TITLE: "New Menu",
    MENU_REGISTRY_DELETE_MESSAGE:
        "Do you really want to delete this menu ? This action is irreversible",

    OPERATOR_VIEW_TITLE: "Operators",
    OPERATOR_NEW_TITLE: "New Operator",
    OPERATOR_REGISTRY_DELETE_MESSAGE:
        "Do you really want to delete this operator ? This action is irreversible",

    PRODUCT_VIEW_TITLE: "Products",
    PRODUCT_NEW_TITLE: "New Product",
    PRODUCT_REGISTRY_DELETE_MESSAGE:
        "Do you really want to delete this product ? This action is irreversible",

    INGREDIENT_TYPE_BASE: "Base",
    INGREDIENT_TYPE_OPTIONAL: "Optional",
    INGREDIENT_TYPE_ADDITIONAL: "Additional",

    REALM_VIEW_TITLE: "Stands",
    REALM_NEW_TITLE: "New Stand",
    REALM_REGISTRY_DELETE_MESSAGE:
        "Do you really want to delete this stand ? This action is irreversible",

    REGISTRY_STEP_BACK: "Back",
    REGISTRY_STEP_NEXT: "Next",

    /**
     * API Error
     */
    ERROR_EVENT_DATE_REQUIRED: "Event date is required",
    ERROR_EVENT_DATE_DUPLICATED: "Two events cannot be held at the same day",
    ERROR_EVENT_INVALID: "Event data is invalid",
    ERROR_EVENT_NOT_FOUND: "Event was not found",
    ERROR_EVENT_NAME_REQUIRED: "Event name is required",
    ERROR_EVENT_ORDER_INVALID: "Event order is invalid",
    ERROR_EVENT_ORDER_DUPLICATED: "Event order is duplicated",
    ERROR_EVENT_IS_CLOSED: "Event is closed",

    ERROR_MENU_INVALID: "Menu data is invalid",
    ERROR_MENU_ICON_INVALID: "Menu icon is invalid",
    ERROR_MENU_NOT_FOUND: "Menu was not found",
    ERROR_MENU_ROUTE_DUPLICATED: "Menu route is duplicated",
    ERROR_MENU_TITLE_DUPLICATED: " Menu title is duplicated",
    ERROR_MENU_TITLE_REQUIRED: "Menu title is required",

    ERROR_OPERATOR_DISPLAY_NAME_GREATER_THAN_MAX_LENGTH:
        "Operator display name is greater than the max length",
    ERROR_OPERATOR_DISPLAY_NAME_GREATER_THAN_MIN_LENGTH:
        "Operator display name is less than the min length",
    ERROR_OPERATOR_DISPLAY_NAME_REQUIRED: "Operator display name is required",
    ERROR_OPERATOR_INVALID: "Operator data is invalid",
    ERROR_OPERATOR_NOT_FOUND: "Operator was not found",
    ERROR_OPERATOR_USER_NAME_DUPLICATED: "Operator user name is duplicated",
    ERROR_OPERATOR_USER_NAME_GREATER_THAN_MAX_LENGTH:
        "Operator user name is greater than the max length",
    ERROR_OPERATOR_USER_NAME_LESS_THAN_MIN_LENGTH:
        "Operator user name is less than the min length",
    ERROR_OPERATOR_USER_NAME_REQUIRED: "Operator user name is required",
    ERROR_OPERATOR_PHOTO_INVALID: "Operator photo is invalid",

    ERROR_ORDER_CLIENT_NAME_GREATER_THAN_MAX_LENGTH:
        "Order client name is greater than the max length",
    ERROR_ORDER_CLIENT_NAME_LESS_THAN_MIN_LENGTH:
        "Order client name is less than the min length",
    ERROR_ORDER_CLIENT_NAME_REQUIRED: "Order client name is required",
    ERROR_ORDER_EVENT_INVALID: "Order event is invalid",
    ERROR_ORDER_EVENT_REQUIRED: "Order event is required",
    ERROR_ORDER_INVALID: "Order is invalid",
    ERROR_ORDER_ITEMS_INVALID: "Order items are invalid",
    ERROR_ORDER_ITEMS_REQUIRED: "Order items are required",
    ERROR_ORDER_NOT_FOUND: "Order was not found",
    ERROR_ORDER_OPERATOR_INVALID: "Order operator is invalid",
    ERROR_ORDER_OPERATOR_REQUIRED: "Order operator is required",

    ERROR_PRODUCT_INVALID: "Product is invalid",
    ERROR_PRODUCT_NAME_DUPLICATED: "Product name is duplicated",
    ERROR_PRODUCT_NAME_GREATER_THAN_MAX_LENGTH:
        "Product name is greater than the max length",
    ERROR_PRODUCT_NAME_LESS_THAN_MIN_LENGTH:
        "Product name is less than the min length",
    ERROR_PRODUCT_NAME_REQUIRED: "Product name is required",
    ERROR_PRODUCT_NOT_FOUND: "Product was not found",
    ERROR_PRODUCT_REALM_INVALID: "Product stand is invalid",
    ERROR_PRODUCT_REALM_REQUIRED: "Product stand is required",
    ERROR_PRODUCT_PARENT_INVALID: "Base product is invalid",

    ERROR_JWT_SETTINGS_INVALID:
        "JWT settings are invalid, please contact the administrator",
    ERROR_JWT_ACCESS_TOKEN_SETTINGS_INVALID:
        "JWT access token settings are invalid, please contact the administrator",
    ERROR_JWT_ACCESS_TOKEN_NOT_FOUND: "Access token was not found",
    ERROR_JWT_ACCESS_TOKEN_INVALID: "Access token is invalid",
    ERROR_JWT_REFRESH_TOKEN_SETTINGS_INVALID:
        "JWT refresh token settings are invalid, please contact the administrator",
    ERROR_JWT_REFRESH_TOKEN_NOT_FOUND: "Refresh token was not found",
    ERROR_JWT_REFRESH_TOKEN_INVALID: "Refresh token is invalid",

    ERROR_REALM_INVALID: "Stand is invalid",
    ERROR_REALM_NAME_DUPLICATED: "Stand name is duplicated",
    ERROR_REALM_NAME_GREATER_THAN_MAX_LENGTH:
        "Stand name is greater than the max length",
    ERROR_REALM_NAME_REQUIRED: "Stand name is required",
    ERROR_REALM_NAME_LESS_THAN_MIN_LENGT:
        "Stand name is less than the min length",
    ERROR_REALM_NOT_FOUND: "Stand name was not found",
} as InHouseLang;
