import React from "react";
import { BibloBio, BibloItem } from "@biblo/react-native";
import { Skeleton } from "./Skeleton.component";
import { SkeletonProps } from "./Skeleton.props";

export default {
    title: "Skeleton",
    tags: ["indicator"],
    props: {
        width: 200,
        height: 100,
    },
} as BibloBio<SkeletonProps>;

const Template: BibloItem<SkeletonProps> = (props) => <Skeleton {...props} />;

export const Default = Template.bind({});

export const Colored: BibloItem<SkeletonProps> = (props) => {
    return <Skeleton {...props} color="red" />;
};

export const WithoutOpacity = Template.bind({});
WithoutOpacity.props = { opacity: 1 };

export const WithCustomOpacity = Template.bind({});
WithCustomOpacity.props = { opacity: 0.5 };

export const WithCustomRadius = Template.bind({});
WithCustomRadius.props = { radius: 50 };
