import React from "react";
import { TextInput, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography, TypographySize } from "./Typography.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";
import { IndexHeaderTags } from "./IndexHeaderTags.component";
import { getTextStyles, getViewStyles } from "../helpers/getStyles.helper";
import { ErrorBoundary } from "./ErrorBoundary.component";

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
            : "";
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
        <ErrorBoundary type="headerComponent">
            <Container
                title={titleString}
                style={getViewStyles(
                    indexOptions.headerStyle,
                    { paddingVertical: defaultStyles.spacing },
                    disableDefaultStyles,
                )}
            >
                {/** TITLE */}
                {titleString !== "" && (
                    <ErrorBoundary type="headerTitle">
                        <Title
                            title={titleString}
                            style={getViewStyles(
                                indexOptions.headerTitleStyle,
                                { paddingHorizontal: defaultStyles.spacing },
                                disableDefaultStyles,
                            )}
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
                    </ErrorBoundary>
                )}

                {/** SEARCH */}
                {indexOptions.headerSearchHidden || (
                    <ErrorBoundary type="headerSearchComponent">
                        <Search
                            value={searchValue}
                            onChangeText={setSearchValue}
                            placeholder={placeholderString}
                            style={getViewStyles(
                                indexOptions.headerSearchStyle,
                                {
                                    marginTop:
                                        titleString === ""
                                            ? 0
                                            : defaultStyles.spacing,
                                    paddingHorizontal: defaultStyles.spacing,
                                },
                                disableDefaultStyles,
                            )}
                            inputStyle={indexOptions.headerSearchInputStyle}
                        >
                            <TextInput
                                placeholder={placeholderString}
                                value={searchValue}
                                onChangeText={setSearchValue}
                                returnKeyType="search"
                                style={getTextStyles(
                                    indexOptions.headerSearchInputStyle,
                                    {
                                        height: 40,
                                        paddingHorizontal: 10,
                                        backgroundColor: "#eee",
                                        borderWidth: 1,
                                        borderColor: "#ccc",
                                    },
                                    disableDefaultStyles,
                                )}
                            />
                        </Search>
                    </ErrorBoundary>
                )}

                {/** TAGS */}
                {indexOptions.headerTagsHidden || (
                    <ErrorBoundary type="headerTagsComponent">
                        <IndexHeaderTags />
                    </ErrorBoundary>
                )}
            </Container>
        </ErrorBoundary>
    );
};
