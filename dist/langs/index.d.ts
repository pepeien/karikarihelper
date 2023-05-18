declare const Langs: {
    ptBr: import("..").InHouseLang;
    enUs: import("..").InHouseLang;
};
type LangKey = keyof typeof Langs;
export { Langs, LangKey };
