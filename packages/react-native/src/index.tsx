export type { BibloBio, BibloBook } from "./interfaces/Biblo.interface";
export { IndexScreen as BibloIndex } from "./screens/Index.screen";
export { ReaderScreen as BibloReader } from "./screens/Reader.screen";
export { BibloProvider } from "./hooks/Biblo.hook";

export const bibloImporter = (
    context: ((key: string) => any) & { keys: () => string[] },
) => context.keys().reduce((obj, key) => ({ ...obj, [key]: context(key) }), {});
