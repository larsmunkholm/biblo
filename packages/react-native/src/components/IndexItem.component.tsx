import React, { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import { Separator as DefaultSeparator } from "./Separator.component";
import { BibloFile } from "../interfaces/Biblo.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography, TypographySize } from "./Typography.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";
import { getViewStyles } from "../helpers/getStyles.helper";

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

    return (
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
                        marginHorizontal: defaultStyles.margin,
                    },
                    disableDefaultStyles,
                )}
            >
                {/** TITLE */}
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

                {/** SUBTITLE */}
                {file.subtitle && !indexOptions.sectionItemSubtitleHidden && (
                    <Typography
                        size={TypographySize.Small}
                        style={indexOptions.sectionItemSubtitleStyle}
                        disableDefaultStyles={disableDefaultStyles}
                    >
                        {textParser(file.subtitle, {
                            type: "subtitle",
                            screen: "index",
                            scope: "file",
                            style: indexOptions.sectionItemSubtitleStyle,
                        })}
                    </Typography>
                )}
            </Pressable>

            {/** SEPARATOR */}
            {indexOptions.sectionItemSeparatorHidden || <DefaultSeparator />}
        </Container>
    );
};
