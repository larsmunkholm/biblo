import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ReaderOptions } from "./ReaderOptions.interface";
import { IndexOptions } from "./IndexOptions.interface";
import { BibloReaderItemComponentWrapperProps } from "./ReaderProps.interface";

type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
};

type DefaultType = Record<string, any>;

interface SharedBasics<T> {
    props?: Partial<T>;
    wrapper?: React.ElementType<BibloReaderItemComponentWrapperProps>;
    wrapperStyle?: StyleProp<ViewStyle>;
}

export interface BibloBio<T = DefaultType> extends SharedBasics<T> {
    title: string;
    subtitle?: string;
    description?: React.ReactNode;
    searchTerms?: string[];
    tags?: string[];
    section?: string;
}

export type BibloBioAndPath<T = DefaultType> = BibloBio<T> & { path: string };

export type BibloItem<T = DefaultType> = ((props: T) => React.ReactNode) &
    SharedBasics<T> & {
        title?: string;
        description?: React.ReactNode;
        bind?: (props: Record<string, any>) => SharedBasics<T> & {
            title?: string;
            description?: React.ReactNode;
        };
    };

export type BibloFile<T = DefaultType> = BibloBioAndPath<T> & {
    items: {
        title: string;
        component: BibloItem;
    }[];
};

export interface DefaultStyles {
    fontSizes: {
        small: number;
        medium: number;
        large: number;
    };
    lineHeight: number;
    textColor: string;
    margin: number;
}

export interface BibloProviderProps {
    components: Record<string, any>;
    children: React.ReactNode;
    indexOptions?: IndexOptions;
    readerOptions?: ReaderOptions;
    defaultStyles?: RecursivePartial<DefaultStyles>;
    disableDefaultStyles?: boolean;
    getSection?: (basics: BibloBioAndPath) => string;
}

export interface BibloComponentItem {
    index: number;
    isFirst: boolean;
    isLast: boolean;
    title: string | null;
    description?: React.ReactNode;
    Wrapper?: any;
    wrapperStyle?: StyleProp<ViewStyle>;
    props: any;
    Component: any;
    bio: BibloBioAndPath;
}
