import React from "react";
import { Text, TextProps } from "react-native";
import { SIZES } from "../../../constants/sizes.constant";

export enum ParagraphSize {
    Tiny = "tiny",
    Small = "small",
    Medium = "medium",
    Large = "large",
    Larger = "larger",
    ExtraLarge = "extraLarge",
}

export type ParagraphLineHeights = "auto" | 1 | 1.25 | 1.5 | 2;

export enum ParagraphWeight {
    Regular = "Regular",
    Bold = "Bold",
}

export interface ParagraphProps extends Omit<TextProps, "style"> {
    size?: ParagraphSize;
    lineHeight?: ParagraphLineHeights;
    weight?: ParagraphWeight;
    italic?: boolean;
    color?: string;
    marginTop?: number;
    marginBottom?: number;
    opacity?: number;
    center?: boolean;
}

export const Paragraph = ({
    size = ParagraphSize.Medium,
    lineHeight: lineHeightProp = 1.25,
    weight = ParagraphWeight.Regular,
    italic,
    color: colorProp,
    marginTop,
    marginBottom,
    opacity,
    center,
    children,
    ...props
}: ParagraphProps) => {
    const color = colorProp || "#000";
    const fontSize = SIZES[size];
    const lineHeight =
        lineHeightProp === "auto" ? undefined : SIZES[size] * lineHeightProp;

    return (
        <Text
            {...props}
            style={{
                color,
                fontSize,
                fontWeight:
                    weight === ParagraphWeight.Bold ? "bold" : undefined,
                fontStyle: italic ? "italic" : undefined,
                lineHeight,
                opacity,
                marginTop,
                marginBottom,
                textAlign: center ? "center" : undefined,
            }}
        >
            {children}
        </Text>
    );
};
