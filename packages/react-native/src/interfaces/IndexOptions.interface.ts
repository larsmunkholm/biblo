import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import {
    BibloIndexFooterProps,
    BibloIndexHeaderProps,
    BibloIndexHeaderSearchProps,
    BibloIndexHeaderTagsProps,
    BibloIndexHeaderTitleProps,
    BibloIndexSectionFooterProps,
    BibloIndexSectionHeaderProps,
    BibloIndexSectionItemProps,
    BibloIndexSectionListProps,
    BibloIndexSeparatorProps,
    BibloIndexWrapperProps,
} from "./IndexProps.interface";

export interface IndexOptions {
    disableDefaultStyles?: boolean;
    wrapperStyle?: StyleProp<ViewStyle>;
    wrapperComponent?: React.ElementType<BibloIndexWrapperProps>;
    headerStyle?: StyleProp<ViewStyle>;
    headerComponent?: React.ElementType<BibloIndexHeaderProps>;
    headerTitle?: string;
    headerTitleStyle?: StyleProp<ViewStyle>;
    headerTitleTextStyle?: StyleProp<TextStyle>;
    headerTitleComponent?: React.ElementType<BibloIndexHeaderTitleProps>;
    headerSearchHidden?: boolean;
    headerSearchPlaceholder?: string;
    headerSearchStyle?: StyleProp<ViewStyle>;
    headerSearchInputStyle?: StyleProp<TextStyle>;
    headerSearchComponent?: React.ElementType<BibloIndexHeaderSearchProps>;
    headerTagsHidden?: boolean;
    headerTagsStyle?: StyleProp<ViewStyle>;
    headerTagsItemStyle?: StyleProp<ViewStyle>;
    headerTagsItemTextStyle?: StyleProp<TextStyle>;
    headerTagsComponent?: React.ElementType<BibloIndexHeaderTagsProps>;
    sectionListItemHeight?: number;
    sectionListProps?: BibloIndexSectionListProps;
    sectionHeaderStyle?: StyleProp<ViewStyle>;
    sectionHeaderTextStyle?: StyleProp<TextStyle>;
    sectionHeaderComponent?: React.ElementType<BibloIndexSectionHeaderProps>;
    sectionItemToggleOnPress?: boolean;
    sectionItemStyle?: StyleProp<ViewStyle>;
    sectionItemTitleStyle?: StyleProp<TextStyle>;
    sectionItemSubtitleHidden?: boolean;
    sectionItemSubtitleStyle?: StyleProp<TextStyle>;
    sectionItemSeparator?: React.ElementType<BibloIndexSeparatorProps>;
    sectionItemSeparatorHidden?: boolean;
    sectionItemSeparatorStyle?: StyleProp<ViewStyle>;
    sectionItemComponent?: React.ElementType<BibloIndexSectionItemProps>;
    sectionFooterStyle?: StyleProp<ViewStyle>;
    sectionFooterComponent?: React.ElementType<BibloIndexSectionFooterProps>;
    footerStyle?: StyleProp<ViewStyle>;
    footerComponent?: React.ElementType<BibloIndexFooterProps>;
}
