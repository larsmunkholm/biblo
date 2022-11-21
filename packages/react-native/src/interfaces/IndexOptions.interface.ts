import React from "react";
import { Animated, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IndexOptions {
    disableDefaultStyles?: boolean;
    wrapperStyle?: StyleProp<ViewStyle>;
    wrapperComponent?: (props: {
        style?: StyleProp<ViewStyle>;
        children: React.ReactNode;
    }) => JSX.Element;
    sectionListProps?: React.ComponentProps<typeof Animated.SectionList>;
    headerStyle?: StyleProp<ViewStyle>;
    headerComponent?: (props: {
        style?: StyleProp<ViewStyle>;
        title: string;
        children: React.ReactNode;
    }) => JSX.Element;
    headerTitle?: string;
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
    }) => JSX.Element;
    headerSearchHidden?: boolean;
    headerSearchPlaceholder?: string;
    headerSearchStyle?: StyleProp<ViewStyle>;
    headerSearchInputStyle?: StyleProp<TextStyle>;
    headerSearchComponent?: ({
        style,
        inputStyle,
        placeholder,
        value,
        onChangeText,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        inputStyle?: StyleProp<TextStyle>;
        placeholder: string;
        value: string;
        onChangeText: (value: string) => void;
        children: React.ReactNode;
    }) => JSX.Element;
    headerTagsHidden?: boolean;
    headerTagsStyle?: StyleProp<ViewStyle>;
    headerTagsItemStyle?: StyleProp<ViewStyle>;
    headerTagsItemTextStyle?: StyleProp<TextStyle>;
    headerTagsComponent?: ({
        style,
        itemStyle,
        itemTextStyle,
        tags,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        itemStyle?: StyleProp<ViewStyle>;
        itemTextStyle?: StyleProp<TextStyle>;
        tags: { tag: string; active: boolean }[];
        children: React.ReactNode;
    }) => JSX.Element;
    listItemHeight?: number;
    sectionHeaderStyle?: StyleProp<ViewStyle>;
    sectionHeaderTextStyle?: StyleProp<TextStyle>;
    sectionHeaderComponent?: ({
        style,
        textStyle,
        title,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        title: string;
        children: React.ReactNode;
    }) => JSX.Element;
    sectionItemToggleOnPress?: boolean;
    sectionItemStyle?: StyleProp<ViewStyle>;
    sectionItemTitleStyle?: StyleProp<TextStyle>;
    sectionItemSubtitleHidden?: boolean;
    sectionItemSubtitleStyle?: StyleProp<TextStyle>;
    sectionItemSeparatorHidden?: boolean;
    sectionItemComponent?: ({
        style,
        titleStyle,
        subtitleStyle,
        title,
        subtitle,
        active,
        onPress,
        children,
    }: {
        style?: StyleProp<ViewStyle>;
        titleStyle?: StyleProp<TextStyle>;
        subtitleStyle?: StyleProp<TextStyle>;
        title: string;
        subtitle?: string;
        active: boolean;
        onPress: () => void;
        children: React.ReactNode;
    }) => JSX.Element;
    sectionFooterStyle?: StyleProp<ViewStyle>;
    sectionFooterComponent?: React.ElementType<{
        title: string;
        itemsCount: number;
        style?: StyleProp<ViewStyle>;
    }>;
    footerStyle?: StyleProp<ViewStyle>;
    footerComponent?: React.ElementType<{ style?: StyleProp<ViewStyle> }>;
}
