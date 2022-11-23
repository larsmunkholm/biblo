import React from "react";
import { BibloBio, BibloBook } from "@biblo/react-native";
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

export const Colored: BibloBook<SkeletonProps> = (props) => {
    return <Skeleton {...props} color="red" />;
};

export const WithoutOpacity: BibloBook<SkeletonProps> = {
    props: { opacity: 1 },
};

export const WithCustomOpacity: BibloBook<SkeletonProps> = {
    props: { opacity: 0.5 },
};

export const WithCustomRadius: BibloBook<SkeletonProps> = {
    props: { radius: 50 },
};
