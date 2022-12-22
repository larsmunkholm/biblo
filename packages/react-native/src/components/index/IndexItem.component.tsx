import React, { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import { Separator as DefaultSeparator } from "../Separator.component";
import { BibloFile } from "../../interfaces/Biblo.interface";
import { useBiblo } from "../../hooks/Biblo.hook";
import { Typography, TypographySize } from "../Typography.component";
import { IndexOptions } from "../../interfaces/IndexOptions.interface";
import { getViewStyles } from "../../helpers/getStyles.helper";
import { ErrorBoundary } from "../ErrorBoundary.component";
import { ReaderOptions } from "../../interfaces/ReaderOptions.interface";

interface Props {
    file: BibloFile;
}

export const IndexItem = ({ file }: Props) => {
    const [active, setActive] = useState(false);
    const {
        selectedFile,
        setSelectedFile,
        onSelectFile,
        indexOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
        textParser,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;

    const onPress = useCallback(() => {
        const setAsActive =
            selectedFile !== file.path ||
            !indexOptions.sectionItemToggleOnPress;

        setActive(setAsActive);
        setSelectedFile(setAsActive ? file.path : undefined);

        if (setAsActive && onSelectFile) {
            onSelectFile(file.path);
        }
    }, [selectedFile, setSelectedFile, onSelectFile, file, indexOptions]);

    const Container = (indexOptions.sectionItemComponent ||
        View) as NonNullable<IndexOptions["sectionItemComponent"]>;
    const Separator = (indexOptions.sectionItemSeparator ||
        ((props: any) => (
            <DefaultSeparator
                disableDefaultStyles={disableDefaultStyles}
                {...props}
            />
        ))) as NonNullable<IndexOptions["sectionItemSeparator"]>;

    return (
        <ErrorBoundary type="the item">
            <Container
                style={{ height: indexOptions.sectionListItemHeight }}
                title={file.title}
                subtitle={file.subtitle}
                titleStyle={indexOptions.sectionItemTitleStyle}
                subtitleStyle={indexOptions.sectionItemSubtitleStyle}
                active={active}
                onPress={onPress}
            >
                <Pressable
                    onPress={onPress}
                    style={getViewStyles(
                        indexOptions.sectionItemStyle,
                        {
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingHorizontal: defaultStyles.spacing,
                        },
                        disableDefaultStyles,
                    )}
                >
                    {/** TITLE */}
                    <ErrorBoundary type="the title">
                        <Typography
                            style={indexOptions.sectionItemTitleStyle}
                            disableDefaultStyles={disableDefaultStyles}
                        >
                            {textParser(file.title, {
                                type: "title",
                                screen: "index",
                                scope: "file",
                                style: indexOptions.sectionItemTitleStyle,
                            })}
                        </Typography>
                    </ErrorBoundary>

                    {/** SUBTITLE */}
                    {file.subtitle &&
                        !indexOptions.sectionItemSubtitleHidden && (
                            <ErrorBoundary type="the subtitle">
                                <Typography
                                    size={TypographySize.Small}
                                    style={
                                        indexOptions.sectionItemSubtitleStyle
                                    }
                                    disableDefaultStyles={disableDefaultStyles}
                                >
                                    {textParser(file.subtitle, {
                                        type: "subtitle",
                                        screen: "index",
                                        scope: "file",
                                        style: indexOptions.sectionItemSubtitleStyle,
                                    })}
                                </Typography>
                            </ErrorBoundary>
                        )}
                </Pressable>

                {/** SEPARATOR */}
                {indexOptions.sectionItemSeparatorHidden || (
                    <Separator style={indexOptions.sectionItemSeparatorStyle} />
                )}
            </Container>
        </ErrorBoundary>
    );
};
