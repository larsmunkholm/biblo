import React from "react";
import { BibloBio, BibloBook } from "@biblo/react-native";
import { SkeletonParagraph } from "./SkeletonParagraph.component";
import { SkeletonParagraphProps } from "./SkeletonParagraph.props";
import { ParagraphSize } from "../Paragraph/Paragraph.component";

export default {
    title: "SkeletonParagraph",
    tags: ["indicator", "typography"],
    component: SkeletonParagraph,
    args: {
        lines: 4,
    },
} as BibloBio<SkeletonParagraphProps>;

export const Default = { title: "Standard", args: { lines: 1 } };

export const MultipleLines = { title: "Flere linjer" };

export const Colored: BibloBook<SkeletonParagraphProps> = (args) => {
    return <SkeletonParagraph {...args} color="red" />;
};
Colored.title = "Farvet";

export const WithoutOpacity: BibloBook<SkeletonParagraphProps> = {
    title: "Uden transparens",
    args: { opacity: 1 },
};

export const WithCustomOpacity: BibloBook<SkeletonParagraphProps> = {
    title: "Med defineret transparens",
    args: { opacity: 0.5 },
};

export const Tiny: BibloBook<SkeletonParagraphProps> = {
    title: "Mindst",
    args: { size: ParagraphSize.Tiny },
};

export const Small: BibloBook<SkeletonParagraphProps> = {
    title: "Lille",
    args: { size: ParagraphSize.Small },
};

export const Large: BibloBook<SkeletonParagraphProps> = {
    title: "Stor",
    args: { size: ParagraphSize.Large },
};

export const Larger: BibloBook<SkeletonParagraphProps> = {
    title: "Større",
    args: { size: ParagraphSize.Larger },
};

export const ExtraLarge: BibloBook<SkeletonParagraphProps> = {
    title: "Størst",
    args: { size: ParagraphSize.ExtraLarge },
};

export const LineHeight1: BibloBook<SkeletonParagraphProps> = {
    title: "Linjehøjde 1",
    args: { lineHeight: 1 },
};

export const LineHeight15: BibloBook<SkeletonParagraphProps> = {
    title: "Linjehøjde 1.5",
    args: { lineHeight: 1.5 },
};

export const LineHeight2: BibloBook<SkeletonParagraphProps> = {
    title: "Linjehøjde 2",
    args: { lineHeight: 2 },
};
