import React from "react";
import { BibloBio, BibloBook } from "@biblo/react-native";
import { Skeleton } from "./Skeleton.component";
import { SkeletonProps } from "./Skeleton.props";

export default {
    title: "Skeleton",
    tags: ["indicator"],
    component: Skeleton,
    args: {
        width: 200,
        height: 100,
    },
} as BibloBio<SkeletonProps>;

export const Default = { title: "Standard" };

export const Colored: BibloBook<SkeletonProps> = (args) => {
    return <Skeleton {...args} color="red" />;
};
Colored.title = "Farvet";

export const WithoutOpacity: BibloBook<SkeletonProps> = {
    title: "Uden transparens",
    args: { opacity: 1 },
};

export const WithCustomOpacity: BibloBook<SkeletonProps> = {
    title: "Med defineret transparens",
    args: { opacity: 0.5 },
};

export const WithCustomRadius: BibloBook<SkeletonProps> = {
    title: "Med defineret radius",
    args: { radius: 50 },
};
