import React from "react";
import { BibloBio, BibloItem } from "@biblo/react-native";
import { SkeletonParagraph } from "./SkeletonParagraph.component";
import { SkeletonParagraphProps } from "./SkeletonParagraph.props";
import { ParagraphSize } from "../Paragraph/Paragraph.component";

export default {
    title: "SkeletonParagraph",
    tags: ["indicator", "typography"],
    props: {
        lines: 4,
    },
} as BibloBio<SkeletonParagraphProps>;

const Template: BibloItem<SkeletonParagraphProps> = (props) => (
    <SkeletonParagraph {...props} />
);

export const Default = Template.bind({});
Default.props = { lines: 1 };

export const MultipleLines = Template.bind({});

export const Colored: BibloItem<SkeletonParagraphProps> = (args) => {
    return <SkeletonParagraph {...args} color="red" />;
};

export const WithoutOpacity = Template.bind({});
WithoutOpacity.props = { opacity: 1 };

export const WithCustomOpacity = Template.bind({});
WithCustomOpacity.props = { opacity: 0.5 };

export const Tiny = Template.bind({});
Tiny.props = { size: ParagraphSize.Tiny };

export const Small = Template.bind({});
Small.props = { size: ParagraphSize.Small };

export const Large = Template.bind({});
Large.props = { size: ParagraphSize.Large };

export const Larger = Template.bind({});
Larger.props = { size: ParagraphSize.Larger };

export const ExtraLarge = Template.bind({});
ExtraLarge.props = { size: ParagraphSize.ExtraLarge };

export const LineHeight1 = Template.bind({});
LineHeight1.title = "Line height 1";
LineHeight1.props = { lineHeight: 1 };

export const LineHeight15 = Template.bind({});
LineHeight15.title = "Line height 1.5";
LineHeight15.props = { lineHeight: 1.5 };

export const LineHeight2 = Template.bind({});
LineHeight2.title = "Line height 2";
LineHeight2.props = { lineHeight: 2 };
