import React from "react";
import { BibloBioAndPath } from "../interfaces/Biblo.interface";
import { Text, View } from "react-native";
import { Typography, TypographySize } from "./Typography.component";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";
import { getTextStyles, getViewStyles } from "../helpers/getStyles.helper";

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
    const Path = (readerOptions.headerPathComponent || View) as NonNullable<
        ReaderOptions["headerPathComponent"]
    >;

    return (
        <Container
            bio={bio}
            style={getViewStyles(
                readerOptions.headerStyle,
                { margin: defaultStyles.margin },
                disableDefaultStyles,
            )}
        >
            {/** TITLE */}
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

            {/** SUBTITLE */}
            {bio.subtitle && !readerOptions.headerSubtitleHidden ? (
                <Subtitle
                    style={getViewStyles(
                        readerOptions.headerSubtitleStyle,
                        { marginTop: defaultStyles.margin },
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
            ) : null}

            {/** DESCRIPTION */}
            {bio.description ? (
                <Description
                    style={getViewStyles(
                        readerOptions.headerDescriptionStyle,
                        { marginTop: defaultStyles.margin },
                        disableDefaultStyles,
                    )}
                    textStyle={readerOptions.headerDescriptionTextStyle}
                    description={bio.description}
                >
                    {typeof bio.description === "string" ? (
                        <Typography
                            style={readerOptions.headerDescriptionTextStyle}
                            disableDefaultStyles={disableDefaultStyles}
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
                </Description>
            ) : null}

            {/** TAGS */}
            {bio.tags && bio.tags.length && !readerOptions.headerTagsHidden ? (
                <Tags
                    style={getViewStyles(
                        readerOptions.headerTagsStyle,
                        { marginTop: defaultStyles.margin },
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
                                {index < (bio.tags as string[]).length - 1 && (
                                    <Text>, </Text>
                                )}
                            </React.Fragment>
                        ))}
                    </Typography>
                </Tags>
            ) : null}

            {/** PATH */}
            {readerOptions.headerPathHidden || (
                <Path
                    style={getViewStyles(
                        readerOptions.headerPathStyle,
                        { marginTop: defaultStyles.margin },
                        disableDefaultStyles,
                    )}
                    textStyle={readerOptions.headerPathTextStyle}
                    path={bio.path}
                >
                    <Typography
                        style={readerOptions.headerPathTextStyle}
                        disableDefaultStyles={disableDefaultStyles}
                    >
                        <Text
                            style={
                                disableDefaultStyles
                                    ? {}
                                    : { fontWeight: "bold" }
                            }
                        >
                            Path:{" "}
                        </Text>
                        <Text>{bio.path}</Text>
                    </Typography>
                </Path>
            )}
        </Container>
    );
};
