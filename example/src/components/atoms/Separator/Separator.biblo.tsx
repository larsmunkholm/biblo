import React from "react";
import { BibloBio, BibloItem } from "@biblo/react-native";
import { Separator } from "./Separator.component";
import { SeparatorProps } from "./Separator.props";

export default {
    title: "Separator",
    description:
        "Be aware that the separator in all these examples is placed in a box with padding in top and bottom.",
    tags: ["graphics"],
    wrapperStyle: {
        marginHorizontal: 0,
        paddingVertical: 10,
        justifyContent: "center",
        backgroundColor: "#efefef",
    },
} as BibloBio<SeparatorProps>;

const Template: BibloItem<SeparatorProps> = (props) => <Separator {...props} />;

export const Default = Template.bind({});

export const MarginVertical = Template.bind({});
MarginVertical.props = { marginVertical: true };

export const MarginTop = Template.bind({});
MarginTop.props = { marginTop: true };

export const MarginBottom = Template.bind({});
MarginBottom.props = { marginTop: true };

export const NoMarginHorizontal = Template.bind({});
NoMarginHorizontal.props = { noMarginHorizontal: true };
