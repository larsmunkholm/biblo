import React from "react";
import { Animated, StyleProp, TextStyle, ViewStyle } from "react-native";
import { BibloBio, BibloItem, BibloWrapper } from "./Biblo.interface";

export interface ReaderOptions {
    disableDefaultStyles?: boolean;
    wrapperStyle?: StyleProp<ViewStyle>;
    wrapperComponent?: (props: {
        item: BibloItem;
        style?: StyleProp<ViewStyle>;
        children: React.ReactNode;
    }) => React.ReactElement;
    scrollViewProps?: React.ComponentProps<typeof Animated.ScrollView>;
    headerStyle?: StyleProp<ViewStyle>;
    headerComponent?: (props: {
        bio: BibloBio;
        style?: StyleProp<ViewStyle>;
        children: React.ReactNode;
    }) => React.ReactElement;
    headerTitleStyle?: StyleProp<ViewStyle>;
    headerTitleTextStyle?: StyleProp<TextStyle>;
    headerTitleComponent?: ({
        style,
        textStyle,
        title,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        title: string;
        children: React.ReactNode;
    }) => React.ReactElement;
    headerSubtitleHidden?: boolean;
    headerSubtitleStyle?: StyleProp<ViewStyle>;
    headerSubtitleTextStyle?: StyleProp<TextStyle>;
    headerSubtitleComponent?: ({
        style,
        textStyle,
        subtitle,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        subtitle: string;
        children: React.ReactNode;
    }) => React.ReactElement;
    headerDescriptionStyle?: StyleProp<ViewStyle>;
    headerDescriptionTextStyle?: StyleProp<TextStyle>;
    headerDescriptionComponent?: ({
        style,
        textStyle,
        description,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        description: React.ReactNode;
        children: React.ReactNode;
    }) => React.ReactElement;
    headerTagsHidden?: boolean;
    headerTagsStyle?: StyleProp<ViewStyle>;
    headerTagsTextStyle?: StyleProp<TextStyle>;
    headerTagsComponent?: ({
        style,
        textStyle,
        tags,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        tags: string[];
        children: React.ReactNode;
    }) => React.ReactElement;
    headerPathHidden?: boolean;
    headerPathStyle?: StyleProp<ViewStyle>;
    headerPathTextStyle?: StyleProp<TextStyle>;
    headerPathComponent?: ({
        style,
        textStyle,
        path,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        path: string;
        children: React.ReactNode;
    }) => React.ReactElement;
    separatorStyle?: StyleProp<ViewStyle>;
    separator?: (props: {
        index: number;
        isFirst: boolean;
        isLast: boolean;
        style?: StyleProp<ViewStyle>;
    }) => React.ReactElement;
    disableHeaderSeparator?: boolean;
    disableFooterSeparator?: boolean;
    itemStyle?: StyleProp<ViewStyle>;
    item?: (props: {
        index: number;
        isFirst: boolean;
        isLast: boolean;
        bio: BibloBio;
        title: string;
        description?: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        children: React.ReactNode;
    }) => React.ReactNode;
    itemTitleStyle?: StyleProp<ViewStyle>;
    itemTitleTextStyle?: StyleProp<TextStyle>;
    itemTitleComponent?: (props: {
        title: string;
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        children: React.ReactNode;
    }) => React.ReactElement;
    itemDescriptionStyle?: StyleProp<ViewStyle>;
    itemDescriptionTextStyle?: StyleProp<TextStyle>;
    itemDescriptionComponent?: (props: {
        description: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        children: React.ReactNode;
    }) => React.ReactElement;
    itemComponentStyle?: StyleProp<ViewStyle>;
    itemComponentWrapper?: BibloWrapper;
    footerStyle?: StyleProp<ViewStyle>;
    footerComponent?: (props: {
        bio: BibloBio;
        style?: StyleProp<ViewStyle>;
    }) => React.ReactElement;
    onMount?: () => void;
}
