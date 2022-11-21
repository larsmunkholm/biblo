import React from "react";
import { BibloBio, BibloBook } from "@biblo/react-native";
import {
    Paragraph,
    ParagraphProps,
    ParagraphSize,
    ParagraphWeight,
} from "./Paragraph.component";

const MOCK_LOREM_IPSUM =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolores id impedit ipsam laboriosam necessitatibus praesentium reiciendis sunt veniam veritatis voluptas voluptatum. Ipsam nesciunt ratione velit! Delectus dolorem est repudiandae.";

export default {
    title: "Paragraph",
    subtitle: "A component for text nodes",
    description:
        "Use this for texts of all types, sizes, weights and colors. Paragraphs, headlines, comments, and so on.",
    tags: ["typography", "text"],
    component: Paragraph,
    args: {
        children: "Lorem ipsum dolor sit amet.",
    },
} as BibloBio<ParagraphProps>;

export const Default: BibloBook<ParagraphProps> = {};

export const Italic: BibloBook<ParagraphProps> = {
    args: { italic: true },
};

export const Tiny: BibloBook<ParagraphProps> = {
    description: "Very small text. Use with caution.",
    args: { size: ParagraphSize.Tiny },
};

export const Small: BibloBook<ParagraphProps> = {
    args: { size: ParagraphSize.Small },
};

export const Large: BibloBook<ParagraphProps> = {
    args: { size: ParagraphSize.Large },
};

export const Larger: BibloBook<ParagraphProps> = {
    args: { size: ParagraphSize.Larger },
};

export const ExtraLarge: BibloBook<ParagraphProps> = {
    args: { size: ParagraphSize.ExtraLarge },
};

export const Bold: BibloBook<ParagraphProps> = {
    args: { weight: ParagraphWeight.Bold },
};

export const WithOpacity: BibloBook<ParagraphProps> = {
    args: { opacity: 0.333 },
};

export const Colored = { args: { color: "red" } };

export const Centered: BibloBook<ParagraphProps> = { args: { center: true } };

export const LineHeight125: BibloBook<ParagraphProps> = {
    title: "Line height 1.25",
    description: "This is the default line height.",
    args: { children: MOCK_LOREM_IPSUM },
};

export const LineHeight1: BibloBook<ParagraphProps> = {
    title: "Line height 1",
    args: { children: MOCK_LOREM_IPSUM, lineHeight: 1 },
};

export const LineHeight15: BibloBook<ParagraphProps> = {
    title: "Line height 1.5",
    description: "Use this for longer texts",
    args: { children: MOCK_LOREM_IPSUM, lineHeight: 1.5 },
};

export const LineHeight2: BibloBook<ParagraphProps> = {
    title: "Line height 2",
    args: { children: MOCK_LOREM_IPSUM, lineHeight: 2 },
};
