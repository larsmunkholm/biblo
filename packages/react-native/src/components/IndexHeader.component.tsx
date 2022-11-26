import React from "react";
import { TextInput, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography, TypographySize } from "./Typography.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";
import { IndexHeaderTags } from "./IndexHeaderTags.components";

export const IndexHeader = () => {
    const {
        indexOptions,
        searchValue,
        setSearchValue,
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

    const Container = (indexOptions.headerComponent || View) as NonNullable<
        IndexOptions["headerComponent"]
    >;
    const Title = (indexOptions.headerTitleComponent || View) as NonNullable<
        IndexOptions["headerTitleComponent"]
    >;
    const Search = (indexOptions.headerSearchComponent || View) as NonNullable<
        IndexOptions["headerSearchComponent"]
    >;

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
            {indexOptions.headerTagsHidden || <IndexHeaderTags />}
        </Container>
    );
};
