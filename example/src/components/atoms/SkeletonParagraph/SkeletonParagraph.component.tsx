import React, { useMemo } from "react";
import { View } from "react-native";
import { ParagraphSize } from "../Paragraph/Paragraph.component";
import { Skeleton } from "../Skeleton/Skeleton.component";
import { SkeletonParagraphProps } from "./SkeletonParagraph.props";
import { SIZES } from "../../../constants/sizes.constant";

export const SkeletonParagraph = React.memo(
    ({
        lines = 1,
        size = ParagraphSize.Medium,
        lineHeight = 1.25,
        color,
        marginBottom,
        width,
        opacity = 0.15,
    }: SkeletonParagraphProps) => {
        const lineArray = useMemo(() => {
            const height = SIZES[size] - (lineHeight === 1 ? 4 : 0);
            const marginVertical =
                (height * lineHeight - height) / 2 + (lineHeight === 1 ? 2 : 0);
            return new Array(Math.max(1, lines))
                .fill("")
                .map((_, index) => (
                    <Skeleton
                        key={`line-${index}`}
                        width={width || (index % 2 === 0 ? "85%" : "65%")}
                        height={height}
                        marginVertical={marginVertical}
                        color={color}
                        opacity={opacity}
                    />
                ));
        }, [lines, size, width, color, lineHeight, opacity]);

        return <View style={{ marginBottom }}>{lineArray}</View>;
    },
);

SkeletonParagraph.displayName = "SkeletonParagraph";
