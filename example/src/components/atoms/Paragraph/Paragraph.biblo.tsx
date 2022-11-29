import React from "react";
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
    subtitle: "A component for _text nodes_",
    description: `Use this for **texts** of all sizes, weights and colors.

• Paragraphs
• Headlines
• Comments
• and so on...`,
    tags: ["typography", "text"],
    props: {
        children: "Lorem ipsum dolor sit amet.",
    },
} as BibloBio<ParagraphProps>;

const Template: BibloItem<ParagraphProps> = (props) => <Paragraph {...props} />;

export const Default = Template.bind({});

export const Italic = Template.bind({});
Italic.props = { italic: true };

export const Tiny = Template.bind({});
Tiny.description = "Very small text. Use with caution.";
Tiny.props = { size: ParagraphSize.Tiny };

export const Small = Template.bind({});
Small.props = { size: ParagraphSize.Small };

export const Large = Template.bind({});
Large.props = { size: ParagraphSize.Large };

export const Larger = Template.bind({});
Larger.props = { size: ParagraphSize.Larger };

export const ExtraLarge = Template.bind({});
ExtraLarge.props = { size: ParagraphSize.ExtraLarge };

export const Bold = Template.bind({});
Bold.props = { weight: ParagraphWeight.Bold };

export const WithOpacity = Template.bind({});
WithOpacity.props = { opacity: 0.333 };

export const Colored = Template.bind({});
Colored.props = { color: "red" };

export const Centered = Template.bind({});
Centered.props = { center: true };

export const LineHeight125 = Template.bind({});
LineHeight125.title = "Line height 1.25";
LineHeight125.description = "This is the default line height.";
LineHeight125.props = { children: MOCK_LOREM_IPSUM };

export const LineHeight1 = Template.bind({});
LineHeight1.title = "Line height 1";
LineHeight1.props = { children: MOCK_LOREM_IPSUM, lineHeight: 1 };

export const LineHeight15 = Template.bind({});
LineHeight15.title = "Line height 1.5";
LineHeight15.description = "Use this for longer texts";
LineHeight15.props = { children: MOCK_LOREM_IPSUM, lineHeight: 1.5 };

export const LineHeight2 = Template.bind({});
LineHeight2.title = "Line height 2";
LineHeight2.props = { children: MOCK_LOREM_IPSUM, lineHeight: 2 };
