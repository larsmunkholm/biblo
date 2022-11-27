import React from "react";
import { Pressable, useColorScheme, View } from "react-native";
import { ButtonProps } from "./Button.props";
import { Paragraph } from "../Paragraph/Paragraph.component";

export const Button = ({
    text,
    onPress,
    textColor,
    backgroundColor: bgColor,
    width,
    height = 40,
    radius,
    radiusLeft,
    radiusRight,
    style,
    ...pressableProps
}: ButtonProps) => {
    const colorScheme = useColorScheme();
    const color = textColor || (colorScheme === "light" ? "#fff" : "#000");
    const backgroundColor =
        bgColor || (colorScheme === "light" ? "#333" : "#ddd");
    return (
        <Pressable
            accessibilityRole="button"
            onPress={onPress}
            style={{
                position: "relative",
                overflow: "hidden",
                borderTopLeftRadius: radiusLeft,
                borderBottomLeftRadius: radiusLeft,
                borderTopRightRadius: radiusRight,
                borderBottomRightRadius: radiusRight,
                borderRadius: radius,
                width,
                height,
                backgroundColor,
            }}
            {...pressableProps}
        >
            <View
                pointerEvents="none"
                style={[
                    {
                        width,
                        height,
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    style,
                ]}
            >
                <Paragraph color={color}>{text}</Paragraph>
            </View>
        </Pressable>
    );
};
