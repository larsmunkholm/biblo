import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const getViewStyles = (
    userStyles: StyleProp<ViewStyle>,
    defaultStyles: StyleProp<ViewStyle>,
    disableDefaultStyles: boolean | undefined,
) => [disableDefaultStyles ? {} : defaultStyles, userStyles];

export const getTextStyles = (
    userStyles: StyleProp<TextStyle>,
    defaultStyles: StyleProp<TextStyle>,
    disableDefaultStyles: boolean | undefined,
) => [disableDefaultStyles ? {} : defaultStyles, userStyles];
