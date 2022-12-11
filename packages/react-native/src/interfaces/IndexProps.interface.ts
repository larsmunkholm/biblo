import React from "react";
import { Animated, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface BibloIndexWrapperProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export type BibloIndexSectionListProps = React.ComponentProps<
    typeof Animated.SectionList
>;

export interface BibloIndexHeaderProps {
    style?: StyleProp<ViewStyle>;
    title: string;
    children: React.ReactNode;
}

export interface BibloIndexHeaderTitleProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    title: string;
    children: React.ReactNode;
}

export interface BibloIndexHeaderSearchProps {
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
    children: React.ReactNode;
}

export interface BibloIndexHeaderTagsProps {
    style?: StyleProp<ViewStyle>;
    itemStyle?: StyleProp<ViewStyle>;
    itemTextStyle?: StyleProp<TextStyle>;
    tags: { tag: string; enabled: boolean }[];
    enabledTags: string[];
    enableTag: (tag: string, multiple?: boolean) => void;
    disableTag: (tag: string) => void;
    resetTags: () => void;
    children: React.ReactNode;
}

export interface BibloIndexSectionHeaderProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    title: string;
    children: React.ReactNode;
}

export interface BibloIndexSectionItemProps {
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    subtitleStyle?: StyleProp<TextStyle>;
    title: string;
    subtitle?: string;
    active: boolean;
    onPress: () => void;
    children: React.ReactNode;
}

export interface BibloIndexSectionFooterProps {
    title: string;
    itemsCount: number;
    style?: StyleProp<ViewStyle>;
}

export interface BibloIndexSeparatorProps {
    style?: StyleProp<ViewStyle>;
}

export interface BibloIndexFooterProps {
    style?: StyleProp<ViewStyle>;
}
