import { BibloBio, BibloItem } from "@biblo/react-native";
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
    props: {
        children: "Lorem ipsum dolor sit amet.",
    },
} as BibloBio<ParagraphProps>;

export const Default: BibloItem<ParagraphProps> = {};

export const Italic: BibloItem<ParagraphProps> = {
    props: { italic: true },
};

export const Tiny: BibloItem<ParagraphProps> = {
    description: "Very small text. Use with caution.",
    props: { size: ParagraphSize.Tiny },
};

export const Small: BibloItem<ParagraphProps> = {
    props: { size: ParagraphSize.Small },
};

export const Large: BibloItem<ParagraphProps> = {
    props: { size: ParagraphSize.Large },
};

export const Larger: BibloItem<ParagraphProps> = {
    props: { size: ParagraphSize.Larger },
};

export const ExtraLarge: BibloItem<ParagraphProps> = {
    props: { size: ParagraphSize.ExtraLarge },
};

export const Bold: BibloItem<ParagraphProps> = {
    props: { weight: ParagraphWeight.Bold },
};

export const WithOpacity: BibloItem<ParagraphProps> = {
    props: { opacity: 0.333 },
};

export const Colored = { props: { color: "red" } };

export const Centered: BibloItem<ParagraphProps> = { props: { center: true } };

export const LineHeight125: BibloItem<ParagraphProps> = {
    title: "Line height 1.25",
    description: "This is the default line height.",
    props: { children: MOCK_LOREM_IPSUM },
};

export const LineHeight1: BibloItem<ParagraphProps> = {
    title: "Line height 1",
    props: { children: MOCK_LOREM_IPSUM, lineHeight: 1 },
};

export const LineHeight15: BibloItem<ParagraphProps> = {
    title: "Line height 1.5",
    description: "Use this for longer texts",
    props: { children: MOCK_LOREM_IPSUM, lineHeight: 1.5 },
};

export const LineHeight2: BibloItem<ParagraphProps> = {
    title: "Line height 2",
    props: { children: MOCK_LOREM_IPSUM, lineHeight: 2 },
};
