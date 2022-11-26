import React, { useEffect, useMemo } from "react";
import { Pressable, ScrollView } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography, TypographySize } from "./Typography.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";

export const IndexHeaderTags = () => {
    const {
        files,
        indexOptions,
        selectedTags,
        setSelectedTags,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;

    const tags = useMemo(
        () =>
            [
                ...new Set(
                    files
                        .map((file) => file.data.map(({ tags }) => tags))
                        .flat(2),
                ),
            ]
                .sort()
                .filter((tag) => typeof tag === "string")
                .map((tag) => ({
                    tag: tag as string,
                    active: selectedTags.includes(tag as string),
                })),
        [files, selectedTags],
    );

    const Tags = useMemo(
        () =>
            (indexOptions.headerTagsComponent ||
                (({ style, ...props }: any) => (
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={style}
                        {...props}
                    />
                ))) as NonNullable<IndexOptions["headerTagsComponent"]>,
        [indexOptions.headerTagsComponent],
    );

    return (
        <Tags
            tags={tags}
            style={[
                disableDefaultStyles
                    ? {}
                    : {
                          marginTop: defaultStyles.margin,
                          paddingHorizontal: defaultStyles.margin,
                      },
                indexOptions.headerTagsStyle,
            ]}
            itemStyle={indexOptions.headerTagsItemStyle}
            itemTextStyle={indexOptions.headerTagsItemTextStyle}
            resetTags={() => setSelectedTags([])}
        >
            {tags.map(({ tag, active }, index) =>
                tag ? (
                    <Pressable
                        key={tag}
                        onPress={() =>
                            setSelectedTags(
                                active
                                    ? [...selectedTags].filter(
                                          (value) => value !== tag,
                                      )
                                    : [tag],
                            )
                        }
                        onLongPress={() =>
                            setSelectedTags(
                                active
                                    ? [...selectedTags].filter(
                                          (value) => value !== tag,
                                      )
                                    : [...selectedTags, tag],
                            )
                        }
                        style={[
                            disableDefaultStyles
                                ? {}
                                : {
                                      marginLeft: index ? 5 : 0,
                                      height: 40,
                                      padding: 10,
                                      justifyContent: "center",
                                      backgroundColor: active
                                          ? "#7f7f7f3f"
                                          : "#7f7f7f7f",
                                  },
                            indexOptions.headerTagsItemStyle,
                        ]}
                    >
                        <Typography
                            size={TypographySize.Small}
                            disableDefaultStyles={disableDefaultStyles}
                            style={indexOptions.headerTagsItemTextStyle}
                        >
                            {tag}
                        </Typography>
                    </Pressable>
                ) : null,
            )}
        </Tags>
    );
};
