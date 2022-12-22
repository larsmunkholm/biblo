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
    BibloReaderSeparatorProps,
    BibloReaderItemProps,
    BibloReaderItemTitleProps,
    BibloReaderItemDescriptionProps,
    BibloReaderFooterProps,
    BibloReaderItemComponentWrapperProps,
    BibloReaderHeaderKnobsProps,
    BibloReaderControlsToggleProps,
} from "./ReaderProps.interface";
import { ReaderControlsToggle } from "../components/reader/ReaderControlsToggle.component";

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
    headerControlsStyle?: StyleProp<ViewStyle>;
    headerControlsTextStyle?: StyleProp<TextStyle>;
    headerControlsComponent?: React.ElementType<BibloReaderHeaderKnobsProps>;
    separatorStyle?: StyleProp<ViewStyle>;
    separator?: React.ElementType<BibloReaderSeparatorProps>;
    headerSeparatorHidden?: boolean;
    footerSeparatorHidden?: boolean;
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
    controlsToggle?: React.ElementType<BibloReaderControlsToggleProps>;
    headerControlsToggleHidden?: boolean;
    itemControlsToggleHidden?: boolean;
    onMount?: () => void;
}
