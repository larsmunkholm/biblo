import "./interfaces/metroRequire";
export type { BibloBio, BibloBook } from "./interfaces/Biblo.interface";
export { IndexScreen as BibloIndex } from "./screens/Index.screen";
export { ReaderScreen as BibloReader } from "./screens/Reader.screen";
export { BibloProvider } from "./hooks/Biblo.hook";

export const bibloImporter = (context: __MetroModuleApi.RequireContext) =>
    context.keys().reduce((obj, key) => ({ ...obj, [key]: context(key) }), {});
