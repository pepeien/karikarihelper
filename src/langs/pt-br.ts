import { InHouseLang } from "..";

export default {
    LANGUAGE_META_NAME: "pt",
    LANGUAGE_DISPLAY_NAME: "Português (Brasil)",

    /**
     * Dialog
     */
    DIALOG_CONFIRM_BUTTON: "Confirmar",
    DIALOG_CANCEL_BUTTON: "Cancelar",

    /**
     * Component
     */
    FILE_INPUT_TITLE: "Arraste ou Pesquise o arquivo",

    /**
     * Login
     */
    LOGIN_USERNAME_INPUT_TITLE: "Usuário",
    LOGIN_BUTTON_TITLE: "Entrar",

    /**
     * Operator
     */
    OPERATOR_ROLE_ADMIN: "Administrador",
    OPERATOR_ROLE_MANAGER: "Gerente",
    OPERATOR_ROLE_WORKER: "Funcionário",

    /**
     * Menu
     */
    MENU_EDIT_TITLE: "Editar",
    MENU_TRANSLATE_TITLE: "Idioma",
    MENU_LOG_OUT_TITLE: "Sair",

    MENU_HOME_TITLE: "Início",

    MENU_REGISTRY_TITLE: "Registro",

    MENU_REGISTRY_EVENT_TITLE: "Evento",
    MENU_REGISTRY_EVENT_INDEX_TITLE: "Eventos",
    MENU_REGISTRY_EVENT_ORDER_TITLE: "Pedidos",

    MENU_REGISTRY_MENU_TITLE: "Menus",

    MENU_REGISTRY_OPERATOR_TITLE: "Operadores",

    MENU_REGISTRY_PRODUCT_TITLE: "Produtos",

    MENU_REGISTRY_REALM_TITLE: "Barracas",

    /**
     * Registry
     */
    REGISTRY_MENU_REALM_INPUT: "Dominio",
    REGISTRY_MENU_TITLE_INPUT: "Título",
    REGISTRY_MENU_ROUTE_INPUT: "Rota",
    REGISTRY_MENU_PARENT_INPUT: "Menu Parente",
    REGISTRY_MENU_ICON_INPUT: "Ícone",

    REGISTRY_EVENT_NAME_INPUT: "Nome",
    REGISTRY_EVENT_DATE_INPUT: "Data",

    REGISTRY_EVENT_ORDER_EVENT_INPUT: "Evento",
    REGISTRY_EVENT_ORDER_STATUS_INPUT: "Status",
    REGISTRY_EVENT_ORDER_OPERATOR_INPUT: "Operador(a)",
    REGISTRY_EVENT_ORDER_CLIENT_INPUT: "Cliente",
    REGISTRY_EVENT_ORDER_ITEMS_INPUT: "Itens",
    REGISTRY_EVENT_ORDER_ITEMS_ADDITIONAL_TITLE: "Adicionais",
    REGISTRY_EVENT_ORDER_ITEMS_OPTIONAL_TITLE: "Opcionais",

    REGISTRY_OPERATOR_DISPLAY_NAME_INPUT: "Nome de exibição",
    REGISTRY_OPERATOR_USER_NAME_INPUT: "Nome de usuário",
    REGISTRY_OPERATOR_REALM_INPUT: "Barraca",
    REGISTRY_OPERATOR_ROLE_INPUT: "Função",
    REGISTRY_OPERATOR_PHOTO_INPUT: "Foto",

    REGISTRY_PRODUCT_NAME_INPUT: "Nome",
    REGISTRY_PRODUCT_REALM_INPUT: "Barraca",
    REGISTRY_PRODUCT_INGREDIENT_TITLE: "Ingredientes",
    REGISTRY_PRODUCT_INGREDIENT_NAME_INPUT: "Nome",
    REGISTRY_PRODUCT_INGREDIENT_TYPE_INPUT: "Tipo",

    REGISTRY_REALM_NAME_INPUT: "Nome",

    /**
     * Table
     */
    TABLE_ENTRY_EDIT_TITLE: "Editar",
    TABLE_ENTRY_DELETE_TITLE: "Deletar",
    PAGINATOR_ITEMS_PER_PAGE_LABEL: "Itens por página:",
    PAGINATOR_PREVIOUS_PAGE_LABEL: "Página anterior",
    PAGINATOR_NEXT_PAGE_LABEL: "Próxima página",
    PAGINATOR_FIRST_PAGE_LABEL: "Primeira página",
    PAGINATOR_LAST_PAGE_LABEL: "Última página",
    PAGINATOR_RANGE_CONNECTOR_LABEL: "de",

    /**
     * View
     */
    REGISTRY_EDITOR_CREATION_TITLE: "Criação",
    REGISTRY_EDITOR_EDITION_TITLE: "Edição",
    REGISTRY_EDITOR_CREATION_ACTION: "Criar",
    REGISTRY_EDITOR_EDITION_ACTION: "Editar",
    REGISTRY_EDITOR_CANCEL_ACTION: "Cancelar",

    EVENT_VIEW_TITLE: "Eventos",
    EVENT_VIEW_FINISHED_TITLE: "Concluído",
    EVENT_VIEW_ONGOING_TITLE: "Acontecendo",
    EVENT_VIEW_UPCOMING_TITLE: "Por vir",
    EVENT_NEW_TITLE: "Novo Evento",
    EVENT_REGISTRY_DELETE_MESSAGE:
        "Você realmente quer excluir este evento ? Esta ação é irreversível",

    EVENT_ORDER_VIEW_TITLE: "Pedidos",
    EVENT_ORDER_VIEW_PICKED_UP_TITLE: "Retirado",
    EVENT_ORDER_VIEW_COOKING_TITLE: "Preparando",
    EVENT_ORDER_VIEW_READY_TITLE: "Pronto",
    EVENT_ORDER_NEW_TITLE: "Novo Pedido",
    EVENT_ORDER_REGISTRY_DELETE_MESSAGE:
        "Você realmente quer excluir este pedido ? Esta ação é irreversível",
    EVENT_ORDER_REGISTRY_CLIENT_STEP_TITLE: "Cliente",
    EVENT_ORDER_REGISTRY_ITEMS_STEP_TITLE: "Items",

    MENU_VIEW_TITLE: "Menus",
    MENU_NEW_TITLE: "Novo Menu",
    MENU_REGISTRY_DELETE_MESSAGE:
        "Você realmente quer excluir este menu ? Esta ação é irreversível",

    OPERATOR_VIEW_TITLE: "Operadores",
    OPERATOR_NEW_TITLE: "Novo Operador",
    OPERATOR_REGISTRY_DELETE_MESSAGE:
        "Você realmente quer excluir este(a) operador(a) ? Esta ação é irreversível",

    PRODUCT_VIEW_TITLE: "Produtos",
    PRODUCT_NEW_TITLE: "Novo Produto",
    PRODUCT_REGISTRY_DELETE_MESSAGE:
        "Você realmente quer excluir este produto ? Esta ação é irreversível",

    INGREDIENT_TYPE_BASE: "Base",
    INGREDIENT_TYPE_OPTIONAL: "Opcional",
    INGREDIENT_TYPE_ADDITIONAL: "Adicional",

    REALM_VIEW_TITLE: "Barracas",
    REALM_NEW_TITLE: "Novo Barraca",
    REALM_REGISTRY_DELETE_MESSAGE:
        "Você realmente quer excluir esta barraca ? Esta ação é irreversível",

    REGISTRY_STEP_BACK: "Voltar",
    REGISTRY_STEP_NEXT: "Próximo",

    /**
     * Telemetry
     * */
    TELEMETRY_MOST_ORDERED_PRODUCT_EMPTY: "Não existem dados dos pedidos",
    TELEMETRY_MOST_ORDERED_PRODUCT_PREFIX: "O produto mais pedido é",

    TELEMETRY_FASTER_STAND_EMPTY: "Não existem dados desta barraca",
    TELEMETRY_FASTER_STAND_PREFIX: "A barraca mais rápida é",
    TELEMETRY_FASTER_STAND_MID: "com a média de",
    TELEMETRY_FASTER_STAND_SUFFIX: "por pedido",

    TELEMETRY_PENDING_ORDERS_EMPTY: "Não existem pedidos pendentes",
    TELEMETRY_PENDING_ORDERS_PREFIX: "Existem",
    TELEMETRY_PENDING_ORDERS_SUFFIX: "pedidos pendentes",
    TELEMETRY_PENDING_ORDERS_TABLE_TITLE: "Pedidos Pendentes",

    UPCOMING_TITLE: "Por Vir",
    UPCOMING_EMPTY: "Não existem eventos por vir",

    /**
     * Time
     */
    TIME_SECOND: "segundo",
    TIME_SECONDS: "segundos",
    TIME_MINUTE: "minuto",
    TIME_MINUTES: "minutos",
    TIME_HOUR: "hora",
    TIME_HOURS: "horas",
    TIME_DAY: "dia",
    TIME_DAYS: "dias",

    /**
     * API Error
     */
    ERROR_EVENT_DATE_REQUIRED: "Data do evento é obrigatória",
    ERROR_EVENT_DATE_DUPLICATED:
        "Dois eventos não podem acontecer no mesmo dia",
    ERROR_EVENT_INVALID: "Data do evento é inválida",
    ERROR_EVENT_NOT_FOUND: "Evento não foi encontrado",
    ERROR_EVENT_NAME_REQUIRED: "Nome do evento é obrigatório",
    ERROR_EVENT_ORDER_INVALID: "Pedido do evento é inválido",
    ERROR_EVENT_ORDER_DUPLICATED: "Pedido do evento já existe",
    ERROR_EVENT_IS_CLOSED: "Event está fechado",

    ERROR_MENU_INVALID: "Dados do menu são inválidos",
    ERROR_MENU_ICON_INVALID: "Ícone do menu é inválido",
    ERROR_MENU_NOT_FOUND: "Menu não foi encontrado",
    ERROR_MENU_ROUTE_DUPLICATED: "Rota do menu já existe",
    ERROR_MENU_TITLE_DUPLICATED: " Título do menu já existe",
    ERROR_MENU_TITLE_REQUIRED: "Título do menu é obrigatório",

    ERROR_OPERATOR_DISPLAY_NAME_GREATER_THAN_MAX_LENGTH:
        "Nome de exibição do(a) operador(a) é muito grande",
    ERROR_OPERATOR_DISPLAY_NAME_GREATER_THAN_MIN_LENGTH:
        "Nome de exibição do(a) operador(a) é muito pequeno",
    ERROR_OPERATOR_DISPLAY_NAME_REQUIRED:
        "Nome de exibição do operador é obrigatório",
    ERROR_OPERATOR_INVALID: "Dados do(a) operador(a) são inválidos",
    ERROR_OPERATOR_NOT_FOUND: "Operador(a) não encontrado(a)",
    ERROR_OPERATOR_USER_NAME_DUPLICATED:
        "Nome de usuário(a) do(a) operador(a) já existe",
    ERROR_OPERATOR_USER_NAME_GREATER_THAN_MAX_LENGTH:
        "Nome de usuário(a) do(a) operador(a) é muito grande",
    ERROR_OPERATOR_USER_NAME_LESS_THAN_MIN_LENGTH:
        "Nome de usuário(a) do(a) operador(a) é muito pequeno",
    ERROR_OPERATOR_USER_NAME_REQUIRED:
        "Nome de usuário(a) do(a) operador(a) é obrigatório",
    ERROR_OPERATOR_PHOTO_INVALID: "Foto do(a) operador(a) é inválido",

    ERROR_ORDER_CLIENT_NAME_GREATER_THAN_MAX_LENGTH:
        "Nome do(a) cliente do pedido é muito grande",
    ERROR_ORDER_CLIENT_NAME_LESS_THAN_MIN_LENGTH:
        "Nome do(a) cliente do pedido é muito pequeno",
    ERROR_ORDER_CLIENT_NAME_REQUIRED:
        "Nome do(a) cliente do pedido é obrigatório",
    ERROR_ORDER_EVENT_INVALID: "Os dados do evento do pedido estão inválidos",
    ERROR_ORDER_EVENT_REQUIRED: "O evento do pedido é obrigatório",
    ERROR_ORDER_INVALID: "Os dados do pedido estão inválidos",
    ERROR_ORDER_ITEMS_INVALID: "Os itens do pedido são inválidos",
    ERROR_ORDER_ITEMS_REQUIRED: "Os itens do pedido são obrigatórios",
    ERROR_ORDER_NOT_FOUND: "Pedido não foi encontrado",
    ERROR_ORDER_OPERATOR_INVALID: "Operador(a) do pedido é inválido",
    ERROR_ORDER_OPERATOR_REQUIRED: "Operador(a) do pedido é obrigatório",

    ERROR_PRODUCT_INVALID: "Os dados do produto estão inválidos",
    ERROR_PRODUCT_NAME_DUPLICATED: "Um produto com esse nome já existe",
    ERROR_PRODUCT_NAME_GREATER_THAN_MAX_LENGTH:
        "Nome do produto é muito grande",
    ERROR_PRODUCT_NAME_LESS_THAN_MIN_LENGTH: "Nome do produto é muito pequeno",
    ERROR_PRODUCT_NAME_REQUIRED: "Nome do produto é obrigatório",
    ERROR_PRODUCT_NOT_FOUND: "Produto não foi encontrado",
    ERROR_PRODUCT_REALM_INVALID: "Barraca do produto é inválida",
    ERROR_PRODUCT_REALM_REQUIRED: "Barraca do produto é obrigatória",
    ERROR_PRODUCT_PARENT_INVALID: "Produto base é inválido",

    ERROR_JWT_SETTINGS_INVALID:
        "Configurações do JWT são inválidas, por favor, contate do administrador",
    ERROR_JWT_ACCESS_TOKEN_SETTINGS_INVALID:
        "Configurações do token de acesso são inválidas, por favor, contate do administrador",
    ERROR_JWT_ACCESS_TOKEN_NOT_FOUND: "Token de acesso é obrigatório",
    ERROR_JWT_ACCESS_TOKEN_INVALID: "Token de acesso é inválido",
    ERROR_JWT_REFRESH_TOKEN_SETTINGS_INVALID:
        "Configurações do token de atualização são inválidas, por favor, contate do administrador",
    ERROR_JWT_REFRESH_TOKEN_NOT_FOUND: "Token de atualização é obrigatório",
    ERROR_JWT_REFRESH_TOKEN_INVALID: "Token de atualização é inválido",

    ERROR_REALM_INVALID: "Os dados da barraca estão inválidos",
    ERROR_REALM_NAME_DUPLICATED: "Nome da barraca já existe",
    ERROR_REALM_NAME_GREATER_THAN_MAX_LENGTH: "Nome da barraca é muito grande",
    ERROR_REALM_NAME_LESS_THAN_MIN_LENGT: "Nome da barraca é muito pequeno",
    ERROR_REALM_NAME_REQUIRED: "Nome da barraca é obrigatório",
    ERROR_REALM_NOT_FOUND: "Barraca não foi encontrada",
} as InHouseLang;
