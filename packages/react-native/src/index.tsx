import "./interfaces/metroRequire";
export type { BibloBio, BibloItem } from "./interfaces/Biblo.interface";
export * from "./interfaces/IndexProps.interface";
export * from "./interfaces/ReaderProps.interface";
export { BibloProvider } from "./hooks/Biblo.hook";
export { IndexScreen as BibloIndex } from "./screens/Index.screen";
export { ReaderScreen as BibloReader } from "./screens/Reader.screen";

export const bibloImporter = (context: __MetroModuleApi.RequireContext) =>
    context.keys().reduce((obj, key) => ({ ...obj, [key]: context(key) }), {});
