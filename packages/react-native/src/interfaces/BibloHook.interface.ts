import React from "react";
import { IndexOptions } from "./IndexOptions.interface";
import { ReaderOptions } from "./ReaderOptions.interface";
import { StyleProp, TextStyle } from "react-native";
import { BibloBioAndPath, DefaultStyles } from "./Biblo.interface";

type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
};

export interface BibloProviderProps {
    components: Record<string, any>;
    children: React.ReactNode;
    addons?: (BibloAddon | (() => BibloAddon))[];
    indexOptions?: IndexOptions;
    readerOptions?: ReaderOptions;
    defaultStyles?: RecursivePartial<DefaultStyles>;
    disableDefaultStyles?: boolean;
    textParser?: (
        text: string,
        meta: {
            type: "title" | "subtitle" | "description" | "path" | "tag";
            screen: "index" | "reader";
            scope: "section" | "file" | "item";
            style: StyleProp<TextStyle>;
        },
    ) => React.ReactNode;
    getSection?: (basics: BibloBioAndPath) => string;
    onSelectFile?: (path: string) => void;
}

export type BibloAddon = Omit<
    BibloProviderProps,
    "components" | "children" | "addons"
>;
