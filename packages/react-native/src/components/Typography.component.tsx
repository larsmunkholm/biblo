import React from "react";
import { Text, TextProps } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";

export enum TypographySize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export interface TypographyProps extends TextProps {
    size?: TypographySize;
    bold?: boolean;
    italic?: boolean;
    color?: string;
    marginTop?: number;
    marginBottom?: number;
    opacity?: number;
    disableDefaultStyles?: boolean;
}

export const Typography = ({
    size = TypographySize.Medium,
    bold,
    italic,
    color: colorProp,
    marginTop,
    marginBottom,
    opacity,
    children,
    style,
    disableDefaultStyles,
    ...props
}: TypographyProps) => {
    const { defaultStyles } = useBiblo();
    const color = colorProp || defaultStyles.textColor;
    const fontSize = defaultStyles.fontSizes[size];
    const lineHeight = defaultStyles.fontSizes[size] * defaultStyles.lineHeight;

    return (
        <Text
            {...props}
            style={[
                disableDefaultStyles
                    ? {}
                    : {
                          color,
                          fontSize,
                          fontWeight: bold ? "bold" : undefined,
                          fontStyle: italic ? "italic" : undefined,
                          lineHeight,
                          opacity,
                          marginTop,
                          marginBottom,
                      },
                style,
            ]}
        >
            {children}
        </Text>
    );
};
