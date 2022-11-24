import React from "react";
import { BibloBio, BibloItem } from "@biblo/react-native";
import { SkeletonParagraph } from "./SkeletonParagraph.component";
import { SkeletonParagraphProps } from "./SkeletonParagraph.props";
import { ParagraphSize } from "../Paragraph/Paragraph.component";

export default {
    title: "SkeletonParagraph",
    tags: ["indicator", "typography"],
    component: SkeletonParagraph,
    props: {
        lines: 4,
    },
} as BibloBio<SkeletonParagraphProps>;

export const Default = { props: { lines: 1 } };

export const MultipleLines = {};

export const Colored: BibloItem<SkeletonParagraphProps> = (args) => {
    return <SkeletonParagraph {...args} color="red" />;
};

export const WithoutOpacity: BibloItem<SkeletonParagraphProps> = {
    props: { opacity: 1 },
};

export const WithCustomOpacity: BibloItem<SkeletonParagraphProps> = {
    props: { opacity: 0.5 },
};

export const Tiny: BibloItem<SkeletonParagraphProps> = {
    props: { size: ParagraphSize.Tiny },
};

export const Small: BibloItem<SkeletonParagraphProps> = {
    props: { size: ParagraphSize.Small },
};

export const Large: BibloItem<SkeletonParagraphProps> = {
    props: { size: ParagraphSize.Large },
};

export const Larger: BibloItem<SkeletonParagraphProps> = {
    props: { size: ParagraphSize.Larger },
};

export const ExtraLarge: BibloItem<SkeletonParagraphProps> = {
    props: { size: ParagraphSize.ExtraLarge },
};

export const LineHeight1: BibloItem<SkeletonParagraphProps> = {
    title: "Line height 1",
    props: { lineHeight: 1 },
};

export const LineHeight15: BibloItem<SkeletonParagraphProps> = {
    title: "Line height 1.5",
    props: { lineHeight: 1.5 },
};

export const LineHeight2: BibloItem<SkeletonParagraphProps> = {
    title: "Line height 2",
    props: { lineHeight: 2 },
};
