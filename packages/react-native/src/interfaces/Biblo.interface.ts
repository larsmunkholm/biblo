import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { BibloReaderItemComponentWrapperProps } from "./ReaderProps.interface";

type DefaultType = Record<string, any>;

type PropTypeOptions = "string" | "number" | "hidden";
export type PropTypes = Record<
    string,
    PropTypeOptions | { type?: PropTypeOptions; title?: string }
>;

export type PropsFromBioOrItem = Record<
    string,
    {
        type: string;
        title: string;
        value: any;
    }
>;

interface SharedBasics<T> {
    props?: Partial<T>;
    propTypes?: PropTypes;
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
        originalTitle: string;
        component: BibloItem;
    }[];
};

export interface DefaultStyles {
    fontSizes: {
        small: number;
        medium: number;
        large: number;
    };
    textInput: {
        height: number;
        paddingHorizontal: number;
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
    };
    spacing: number;
    lineHeight: number;
    textColor: string;
    surfaceColor: string;
    separatorColor: string;
}

export interface BibloComponentItem {
    index: number;
    isFirst: boolean;
    isLast: boolean;
    title: string | null;
    originalTitle: string;
    description?: React.ReactNode;
    Wrapper?: any;
    wrapperStyle?: StyleProp<ViewStyle>;
    props: any;
    Component: any;
    bio: BibloBioAndPath;
}
