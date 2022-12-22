import React, { useCallback, useMemo } from "react";
import { Pressable, ScrollView } from "react-native";
import { useBiblo } from "../../hooks/Biblo.hook";
import { Typography, TypographySize } from "../Typography.component";
import { IndexOptions } from "../../interfaces/IndexOptions.interface";
import { getViewStyles } from "../../helpers/getStyles.helper";

export const IndexHeaderTags = () => {
    const {
        files,
        indexOptions,
        enabledTags,
        setEnabledTags,
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
                    enabled: enabledTags.includes(tag as string),
                })),
        [files, enabledTags],
    );

    const enableTag = useCallback(
        (tag: string, multiple = false) =>
            setEnabledTags((current) => (multiple ? [...current, tag] : [tag])),
        [setEnabledTags],
    );

    const disableTag = useCallback(
        (tag: string) =>
            setEnabledTags((current) =>
                [...current].filter((value) => value !== tag),
            ),
        [setEnabledTags],
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
            enabledTags={enabledTags}
            style={getViewStyles(
                indexOptions.headerTagsStyle,
                {
                    marginTop: defaultStyles.spacing,
                    paddingHorizontal: defaultStyles.spacing,
                },
                disableDefaultStyles,
            )}
            itemStyle={indexOptions.headerTagsItemStyle}
            itemTextStyle={indexOptions.headerTagsItemTextStyle}
            enableTag={enableTag}
            disableTag={disableTag}
            resetTags={() => setEnabledTags([])}
        >
            {tags.map(({ tag, enabled }, index) =>
                tag ? (
                    <Pressable
                        key={tag}
                        onPress={() =>
                            enabled ? disableTag(tag) : enableTag(tag)
                        }
                        onLongPress={() =>
                            enabled ? disableTag(tag) : enableTag(tag, true)
                        }
                        style={getViewStyles(
                            indexOptions.headerTagsItemStyle,
                            {
                                marginLeft: index ? 5 : 0,
                                height: 40,
                                paddingHorizontal: 9,
                                justifyContent: "center",
                                borderWidth: 1,
                                borderColor: defaultStyles.surfaceColor,
                                backgroundColor: enabled
                                    ? undefined
                                    : defaultStyles.surfaceColor,
                            },
                            disableDefaultStyles,
                        )}
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
