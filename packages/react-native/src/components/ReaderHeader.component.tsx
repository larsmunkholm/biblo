import React from "react";
import { BibloBioAndPath } from "../interfaces/Biblo.interface";
import { Text, View } from "react-native";
import { Typography, TypographySize } from "./Typography.component";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";

interface Props {
    bio: BibloBioAndPath;
}

export const ReaderHeader = ({ bio }: Props) => {
    const {
        readerOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
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
            style={[
                disableDefaultStyles ? {} : { margin: defaultStyles.margin },
                readerOptions.headerStyle,
            ]}
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
                    {bio.title}
                </Typography>
            </Title>

            {/** SUBTITLE */}
            {bio.subtitle && !readerOptions.headerSubtitleHidden ? (
                <Subtitle
                    style={[
                        disableDefaultStyles
                            ? {}
                            : { marginTop: defaultStyles.margin },
                        readerOptions.headerSubtitleStyle,
                    ]}
                    textStyle={readerOptions.headerSubtitleTextStyle}
                    subtitle={bio.subtitle}
                >
                    <Typography
                        bold
                        style={readerOptions.headerSubtitleTextStyle}
                        disableDefaultStyles={disableDefaultStyles}
                    >
                        {bio.subtitle}
                    </Typography>
                </Subtitle>
            ) : null}

            {/** DESCRIPTION */}
            {bio.description ? (
                <Description
                    style={[
                        disableDefaultStyles
                            ? {}
                            : { marginTop: defaultStyles.margin },
                        readerOptions.headerDescriptionStyle,
                    ]}
                    textStyle={readerOptions.headerDescriptionTextStyle}
                    description={bio.description}
                >
                    {typeof bio.description === "string" ? (
                        <Typography
                            style={readerOptions.headerDescriptionTextStyle}
                            disableDefaultStyles={disableDefaultStyles}
                        >
                            {bio.description}
                        </Typography>
                    ) : (
                        bio.description
                    )}
                </Description>
            ) : null}

            {/** TAGS */}
            {bio.tags && bio.tags.length && !readerOptions.headerTagsHidden ? (
                <Tags
                    style={[
                        disableDefaultStyles
                            ? {}
                            : { marginTop: defaultStyles.margin },
                        readerOptions.headerTagsStyle,
                    ]}
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
                    style={[
                        disableDefaultStyles
                            ? {}
                            : { marginTop: defaultStyles.margin },
                        readerOptions.headerPathStyle,
                    ]}
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
