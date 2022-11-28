export type {
    BibloAddon,
    BibloBio,
    BibloItem,
} from "./interfaces/Biblo.interface";
export * from "./interfaces/IndexProps.interface";
export * from "./interfaces/ReaderProps.interface";
export { BibloProvider } from "./hooks/Biblo.hook";
export { IndexScreen as BibloIndex } from "./screens/Index.screen";
export { ReaderScreen as BibloReader } from "./screens/Reader.screen";

/**
 * Function for importing files using a regex.
 * This has to be imported by the user, since it must happen in a local file
 * to allow detecting changes made in the imported files.
 */
export const bibloImporter = (context: {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
    id: string;
}) =>
    context.keys().reduce(
        (obj: Record<string, any>, key: string) => ({
            ...obj,
            [key]: context(key),
        }),
        {},
    ) as Record<string, any>;
