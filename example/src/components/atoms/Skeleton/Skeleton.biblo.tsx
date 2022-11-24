import React from "react";
import { BibloBio, BibloItem } from "@biblo/react-native";
import { Skeleton } from "./Skeleton.component";
import { SkeletonProps } from "./Skeleton.props";

export default {
    title: "Skeleton",
    tags: ["indicator"],
    component: Skeleton,
    props: {
        width: 200,
        height: 100,
    },
} as BibloBio<SkeletonProps>;

export const Default = {};

export const Colored: BibloItem<SkeletonProps> = (props) => {
    return <Skeleton {...props} color="red" />;
};

export const WithoutOpacity: BibloItem<SkeletonProps> = {
    props: { opacity: 1 },
};

export const WithCustomOpacity: BibloItem<SkeletonProps> = {
    props: { opacity: 0.5 },
};

export const WithCustomRadius: BibloItem<SkeletonProps> = {
    props: { radius: 50 },
};
