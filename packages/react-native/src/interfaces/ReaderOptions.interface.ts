import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import {
    BibloReaderWrapperProps,
    BibloReaderScrollViewProps,
    BibloReaderHeaderProps,
    BibloReaderHeaderTitleProps,
    BibloReaderHeaderSubtitleProps,
    BibloReaderHeaderDescriptionProps,
    BibloReaderHeaderTagsProps,
    BibloReaderHeaderPathProps,
    BibloReaderSeparatorProps,
    BibloReaderItemProps,
    BibloReaderItemTitleProps,
    BibloReaderItemDescriptionProps,
    BibloReaderFooterProps,
    BibloReaderItemComponentWrapperProps,
} from "./ReaderProps.interface";

export interface ReaderOptions {
    disableDefaultStyles?: boolean;
    wrapperStyle?: StyleProp<ViewStyle>;
    wrapperComponent?: React.ElementType<BibloReaderWrapperProps>;
    scrollViewProps?: BibloReaderScrollViewProps;
    headerStyle?: StyleProp<ViewStyle>;
    headerComponent?: React.ElementType<BibloReaderHeaderProps>;
    headerTitleStyle?: StyleProp<ViewStyle>;
    headerTitleTextStyle?: StyleProp<TextStyle>;
    headerTitleComponent?: React.ElementType<BibloReaderHeaderTitleProps>;
    headerSubtitleHidden?: boolean;
    headerSubtitleStyle?: StyleProp<ViewStyle>;
    headerSubtitleTextStyle?: StyleProp<TextStyle>;
    headerSubtitleComponent?: React.ElementType<BibloReaderHeaderSubtitleProps>;
    headerDescriptionStyle?: StyleProp<ViewStyle>;
    headerDescriptionTextStyle?: StyleProp<TextStyle>;
    headerDescriptionComponent?: React.ElementType<BibloReaderHeaderDescriptionProps>;
    headerTagsHidden?: boolean;
    headerTagsStyle?: StyleProp<ViewStyle>;
    headerTagsTextStyle?: StyleProp<TextStyle>;
    headerTagsComponent?: React.ElementType<BibloReaderHeaderTagsProps>;
    headerPathHidden?: boolean;
    headerPathStyle?: StyleProp<ViewStyle>;
    headerPathTextStyle?: StyleProp<TextStyle>;
    headerPathComponent?: React.ElementType<BibloReaderHeaderPathProps>;
    separatorStyle?: StyleProp<ViewStyle>;
    separator?: React.ElementType<BibloReaderSeparatorProps>;
    disableHeaderSeparator?: boolean;
    disableFooterSeparator?: boolean;
    itemStyle?: StyleProp<ViewStyle>;
    item?: React.ElementType<BibloReaderItemProps>;
    itemTitleStyle?: StyleProp<ViewStyle>;
    itemTitleTextStyle?: StyleProp<TextStyle>;
    itemTitleComponent?: React.ElementType<BibloReaderItemTitleProps>;
    itemDescriptionStyle?: StyleProp<ViewStyle>;
    itemDescriptionTextStyle?: StyleProp<TextStyle>;
    itemDescriptionComponent?: React.ElementType<BibloReaderItemDescriptionProps>;
    itemComponentStyle?: StyleProp<ViewStyle>;
    itemComponentWrapper?: React.ElementType<BibloReaderItemComponentWrapperProps>;
    footerStyle?: StyleProp<ViewStyle>;
    footerComponent?: React.ElementType<BibloReaderFooterProps>;
    onMount?: () => void;
}
