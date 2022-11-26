import React, { useMemo } from "react";
import { Pressable, ScrollView, TextInput, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography, TypographySize } from "./Typography.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";

export const IndexHeader = () => {
    const {
        files,
        indexOptions,
        searchValue,
        setSearchValue,
        selectedTags,
        setSelectedTags,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;

    const titleString =
        typeof indexOptions.headerTitle === "string"
            ? indexOptions.headerTitle
            : "Component Library";
    const placeholderString =
        indexOptions.headerSearchPlaceholder || "Type to search";
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

    const Container = (indexOptions.headerComponent || View) as NonNullable<
        IndexOptions["headerComponent"]
    >;
    const Title = (indexOptions.headerTitleComponent || View) as NonNullable<
        IndexOptions["headerTitleComponent"]
    >;
    const Search = (indexOptions.headerSearchComponent || View) as NonNullable<
        IndexOptions["headerSearchComponent"]
    >;
    const Tags = (indexOptions.headerTagsComponent ||
        (({ style, ...props }: any) => (
            <ScrollView horizontal contentContainerStyle={style} {...props} />
        ))) as NonNullable<IndexOptions["headerTagsComponent"]>;

    return (
        <Container
            title={titleString}
            style={[
                disableDefaultStyles
                    ? {}
                    : { marginVertical: defaultStyles.margin },
                indexOptions.headerStyle,
            ]}
        >
            {/** TITLE */}
            {titleString !== "" && (
                <Title
                    title={titleString}
                    style={[
                        disableDefaultStyles
                            ? {}
                            : { marginHorizontal: defaultStyles.margin },
                        indexOptions.headerTitleStyle,
                    ]}
                    textStyle={indexOptions.headerTitleTextStyle}
                >
                    <Typography
                        bold
                        size={TypographySize.Large}
                        style={indexOptions.headerTitleTextStyle}
                        disableDefaultStyles={disableDefaultStyles}
                    >
                        {titleString}
                    </Typography>
                </Title>
            )}

            {/** SEARCH */}
            {indexOptions.headerSearchHidden || (
                <Search
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder={placeholderString}
                    style={[
                        disableDefaultStyles
                            ? {}
                            : {
                                  marginTop: defaultStyles.margin,
                                  marginHorizontal: defaultStyles.margin,
                              },
                        indexOptions.headerSearchStyle,
                    ]}
                    inputStyle={indexOptions.headerSearchInputStyle}
                >
                    <TextInput
                        placeholder={placeholderString}
                        value={searchValue}
                        onChangeText={setSearchValue}
                        returnKeyType="search"
                        style={[
                            disableDefaultStyles
                                ? {}
                                : {
                                      height: 40,
                                      paddingHorizontal: 10,
                                      backgroundColor: "#eee",
                                      borderWidth: 1,
                                      borderColor: "#ccc",
                                  },
                            indexOptions.headerSearchInputStyle,
                        ]}
                    />
                </Search>
            )}

            {/** TAGS */}
            {indexOptions.headerTagsHidden || (
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
            )}
        </Container>
    );
};
