import React from "react";
import { View } from "react-native";
import { IndexOptions } from "../interfaces/IndexOptions.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography } from "./Typography.component";

interface Props {
    title: string;
    itemsCount: number;
}

export const IndexSectionHeader = ({ title, itemsCount }: Props) => {
    const {
        indexOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;

    const Container = (indexOptions.sectionHeaderComponent ||
        View) as NonNullable<IndexOptions["sectionHeaderComponent"]>;

    return itemsCount ? (
        <Container
            title={title}
            style={[
                disableDefaultStyles
                    ? {}
                    : {
                          paddingHorizontal: defaultStyles.margin,
                          backgroundColor: "#ccc",
                          justifyContent: "center",
                      },
                { height: indexOptions.listItemHeight },
                indexOptions.sectionHeaderStyle,
            ]}
            textStyle={indexOptions.sectionHeaderTextStyle}
        >
            <Typography
                bold
                disableDefaultStyles={disableDefaultStyles}
                style={indexOptions.sectionHeaderTextStyle}
            >
                {title}
            </Typography>
        </Container>
    ) : null;
};
