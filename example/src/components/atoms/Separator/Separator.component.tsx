import React from "react";
import { View } from "react-native";
import { SeparatorProps } from "./Separator.props";

export const Separator = ({
    marginTop,
    marginBottom,
    marginVertical,
    noMarginHorizontal,
}: SeparatorProps) => {
    return (
        <View
            style={{
                marginVertical: marginVertical ? 15 : undefined,
                marginTop: marginTop ? 15 : undefined,
                marginBottom: marginBottom ? 15 : undefined,
                marginHorizontal: noMarginHorizontal ? undefined : 15,
                overflow: "hidden",
            }}
        >
            <View
                style={{
                    marginTop: -1,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderStyle: "dashed",
                }}
            />
        </View>
    );
};
