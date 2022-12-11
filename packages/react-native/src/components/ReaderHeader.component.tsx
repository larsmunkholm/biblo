import React from "react";
import { BibloBioAndPath } from "../interfaces/Biblo.interface";
import { Text, View } from "react-native";
import { Typography, TypographySize } from "./Typography.component";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";
import { getTextStyles, getViewStyles } from "../helpers/getStyles.helper";
import { ErrorBoundary } from "./ErrorBoundary.component";

interface Props {
    bio: BibloBioAndPath;
}

export const ReaderHeader = ({ bio }: Props) => {
    const {
        readerOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
        textParser,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || readerOptions.disableDefaultStyles;

    const Container = (readerOptions.headerComponent || View) as NonNullable<
        ReaderOptions["headerComponent"]
    >;
    const Title = (readerOptions.headerTitleComponent || View) as NonNullable<
        ReaderOptions["headerTitleComponent"]
    >;
    const Subtitle = (readerOptions.headerSubtitleComponent ||
        View) as NonNullable<ReaderOptions["headerSubtitleComponent"]>;
    const Description = (readerOptions.headerDescriptionComponent ||
        View) as NonNullable<ReaderOptions["headerDescriptionComponent"]>;
    const Tags = (readerOptions.headerTagsComponent || View) as NonNullable<
        ReaderOptions["headerTagsComponent"]
    >;

    return (
        <ErrorBoundary type="the header">
            <Container
                bio={bio}
                style={getViewStyles(
                    readerOptions.headerStyle,
                    { padding: defaultStyles.spacing },
                    disableDefaultStyles,
                )}
            >
                {/** TITLE */}
                <ErrorBoundary type="headerTitleComponent">
                    <Title
                        style={readerOptions.headerTitleStyle}
                        textStyle={readerOptions.headerTitleTextStyle}
                        title={bio.title}
                    >
                        <Typography
                            bold
                            size={TypographySize.Large}
                            style={readerOptions.headerTitleTextStyle}
                            disableDefaultStyles={disableDefaultStyles}
                        >
                            {textParser(bio.title, {
                                type: "title",
                                screen: "reader",
                                scope: "file",
                                style: getTextStyles(
                                    readerOptions.headerTitleTextStyle,
                                    { fontWeight: "bold" },
                                    disableDefaultStyles,
                                ),
                            })}
                        </Typography>
                    </Title>
                </ErrorBoundary>

                {/** SUBTITLE */}
                {bio.subtitle && !readerOptions.headerSubtitleHidden ? (
                    <ErrorBoundary type="headerSubtitleComponent">
                        <Subtitle
                            style={getViewStyles(
                                readerOptions.headerSubtitleStyle,
                                { marginTop: defaultStyles.spacing },
                                disableDefaultStyles,
                            )}
                            textStyle={readerOptions.headerSubtitleTextStyle}
                            subtitle={bio.subtitle}
                        >
                            <Typography
                                bold
                                style={readerOptions.headerSubtitleTextStyle}
                                disableDefaultStyles={disableDefaultStyles}
                            >
                                {textParser(bio.subtitle, {
                                    type: "subtitle",
                                    screen: "reader",
                                    scope: "file",
                                    style: getTextStyles(
                                        readerOptions.headerSubtitleTextStyle,
                                        { fontWeight: "bold" },
                                        disableDefaultStyles,
                                    ),
                                })}
                            </Typography>
                        </Subtitle>
                    </ErrorBoundary>
                ) : null}

                {/** DESCRIPTION */}
                {bio.description ? (
                    <ErrorBoundary type="headerDescriptionComponent">
                        <Description
                            style={getViewStyles(
                                readerOptions.headerDescriptionStyle,
                                { marginTop: defaultStyles.spacing },
                                disableDefaultStyles,
                            )}
                            textStyle={readerOptions.headerDescriptionTextStyle}
                            description={bio.description}
                        >
                            <ErrorBoundary type="the description">
                                {typeof bio.description === "string" ? (
                                    <Typography
                                        style={
                                            readerOptions.headerDescriptionTextStyle
                                        }
                                        disableDefaultStyles={
                                            disableDefaultStyles
                                        }
                                    >
                                        {textParser(bio.description, {
                                            type: "description",
                                            screen: "reader",
                                            scope: "file",
                                            style: readerOptions.headerDescriptionTextStyle,
                                        })}
                                    </Typography>
                                ) : (
                                    bio.description
                                )}
                            </ErrorBoundary>
                        </Description>
                    </ErrorBoundary>
                ) : null}

                {/** TAGS */}
                {bio.tags &&
                bio.tags.length &&
                !readerOptions.headerTagsHidden ? (
                    <ErrorBoundary type="tags">
                        <Tags
                            style={getViewStyles(
                                readerOptions.headerTagsStyle,
                                { marginTop: defaultStyles.spacing },
                                disableDefaultStyles,
                            )}
                            textStyle={readerOptions.headerTagsTextStyle}
                            tags={bio.tags}
                        >
                            <Typography
                                style={readerOptions.headerTagsTextStyle}
                                disableDefaultStyles={disableDefaultStyles}
                            >
                                <Text
                                    style={
                                        disableDefaultStyles
                                            ? {}
                                            : { fontWeight: "bold" }
                                    }
                                >
                                    Tags:{" "}
                                </Text>
                                {bio.tags.map((tag, index) => (
                                    <React.Fragment key={tag}>
                                        <Text>{tag}</Text>
                                        {index <
                                            (bio.tags as string[]).length -
                                                1 && <Text>, </Text>}
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </Tags>
                    </ErrorBoundary>
                ) : null}
            </Container>
        </ErrorBoundary>
    );
};
