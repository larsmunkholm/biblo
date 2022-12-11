import React from "react";
import { View } from "react-native";
import { IndexOptions } from "../interfaces/IndexOptions.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography } from "./Typography.component";
import { getTextStyles, getViewStyles } from "../helpers/getStyles.helper";
import { ErrorBoundary } from "./ErrorBoundary.component";

interface Props {
    title: string;
    itemsCount: number;
}

export const IndexSectionHeader = ({ title, itemsCount }: Props) => {
    const {
        indexOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
        textParser,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;

    const Container = (indexOptions.sectionHeaderComponent ||
        View) as NonNullable<IndexOptions["sectionHeaderComponent"]>;

    return itemsCount ? (
        <ErrorBoundary type="sectionHeaderComponent">
            <Container
                title={title}
                style={getViewStyles(
                    [
                        { height: indexOptions.sectionListItemHeight },
                        indexOptions.sectionHeaderStyle,
                    ],
                    {
                        paddingHorizontal: defaultStyles.spacing,
                        backgroundColor: "#ccc",
                        justifyContent: "center",
                    },
                    disableDefaultStyles,
                )}
                textStyle={indexOptions.sectionHeaderTextStyle}
            >
                <Typography
                    bold
                    disableDefaultStyles={disableDefaultStyles}
                    style={indexOptions.sectionHeaderTextStyle}
                >
                    {textParser(title, {
                        type: "title",
                        screen: "index",
                        scope: "section",
                        style: getTextStyles(
                            indexOptions.sectionHeaderTextStyle,
                            { fontWeight: "bold" },
                            disableDefaultStyles,
                        ),
                    })}
                </Typography>
            </Container>
        </ErrorBoundary>
    ) : null;
};
