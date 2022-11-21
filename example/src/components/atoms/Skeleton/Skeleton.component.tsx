import React from "react";
import { View } from "react-native";
import { SkeletonProps } from "./Skeleton.props";

export const Skeleton = React.memo(
    ({
        width,
        height,
        color,
        opacity = 0.1,
        radius,
        margin,
        marginHorizontal,
        marginVertical,
    }: SkeletonProps) => {
        return (
            <View
                style={{
                    width,
                    height,
                    margin,
                    marginHorizontal,
                    marginVertical,
                    opacity,
                    borderRadius: radius || 5,
                    overflow: "hidden",
                    backgroundColor: color || "#000",
                }}
            />
        );
    },
);

Skeleton.displayName = "Skeleton";
