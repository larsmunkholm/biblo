import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ReaderOptions } from "./ReaderOptions.interface";
import { IndexOptions } from "./IndexOptions.interface";

type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
};

type DefaultType = Record<string, any>;

export type BibloWrapper = (props: {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}) => React.ReactNode;

interface Basics<T> {
    props?: Partial<T>;
    wrapper?: BibloWrapper;
    wrapperStyle?: StyleProp<ViewStyle>;
}

export interface BibloBio<T = DefaultType> extends Basics<T> {
    component?: React.ElementType<T>;
    title: string;
    subtitle?: string;
    description?: React.ReactNode;
    searchTerms?: string[];
    tags?: string[];
    section?: string[];
}

export type BibloBasics<T = DefaultType> = BibloBio<T> & { path: string };

export type BibloBook<T = DefaultType> = (
    | ((props: T) => React.ReactNode)
    | object
) &
    Basics<T> & {
        title?: string;
        description?: React.ReactNode;
        bind?: (props: Record<string, any>) => Basics<T> & {
            title?: string;
            description?: React.ReactNode;
        };
    };

export type BibloItem<T = DefaultType> = BibloBasics<T> & {
    books: {
        title: string;
        component: BibloBook;
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
    getSection?: (basics: BibloBasics) => string;
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
    bio: BibloBasics;
}
