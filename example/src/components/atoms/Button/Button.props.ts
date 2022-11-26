import { PressableProps, StyleProp, ViewStyle } from "react-native";

export interface ButtonProps
    extends Omit<
        PressableProps,
        "accessibilityRole" | "onPress" | "children" | "style"
    > {
    text: string;
    onPress: () => void;
    textColor?: string;
    backgroundColor?: string;
    width?: number;
    height?: number;
    radius?: number;
    radiusLeft?: number;
    radiusRight?: number;
    style?: Exclude<
        StyleProp<ViewStyle>,
        "width" | "height" | "borderRadius" | "backgroundColor"
    >;
}
