import React, { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import { Separator as DefaultSeparator } from "./Separator.component";
import { BibloFile } from "../interfaces/Biblo.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography, TypographySize } from "./Typography.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";

interface Props {
    file: BibloFile;
}

export const IndexItem = ({ file }: Props) => {
    const [active, setActive] = useState(false);
    const {
        selectedFile,
        setSelectedFile,
        indexOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;

    const onPress = useCallback(() => {
        const setAsActive =
            selectedFile?.path !== file.path ||
            !indexOptions.sectionItemToggleOnPress;
        setActive(setAsActive);
        setSelectedFile(setAsActive ? file : undefined);
    }, [selectedFile, setSelectedFile, file, indexOptions]);

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
                style={[
                    disableDefaultStyles
                        ? {}
                        : {
                              flex: 1,
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginHorizontal: defaultStyles.margin,
                          },
                    indexOptions.sectionItemStyle,
                ]}
            >
                {/** TITLE */}
                <Typography
                    style={indexOptions.sectionItemTitleStyle}
                    disableDefaultStyles={disableDefaultStyles}
                >
                    {file.title}
                </Typography>

                {/** SUBTITLE */}
                {file.subtitle && !indexOptions.sectionItemSubtitleHidden && (
                    <Typography
                        size={TypographySize.Small}
                        style={indexOptions.sectionItemSubtitleStyle}
                        disableDefaultStyles={disableDefaultStyles}
                    >
                        {file.subtitle}
                    </Typography>
                )}
            </Pressable>

            {/** SEPARATOR */}
            {indexOptions.sectionItemSeparatorHidden || <DefaultSeparator />}
        </Container>
    );
};
