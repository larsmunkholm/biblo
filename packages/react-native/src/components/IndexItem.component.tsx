import React, { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import { Separator as DefaultSeparator } from "./Separator.component";
import { BibloItem } from "../interfaces/Biblo.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { Typography, TypographySize } from "./Typography.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";

interface Props {
    item: BibloItem;
}

export const IndexItem = ({ item }: Props) => {
    const [active, setActive] = useState(false);
    const {
        selectedItem,
        setSelectedItem,
        indexOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;

    const onPress = useCallback(() => {
        const setAsActive =
            selectedItem?.path !== item.path ||
            !indexOptions.sectionItemToggleOnPress;
        setActive(setAsActive);
        setSelectedItem(setAsActive ? item : undefined);
    }, [selectedItem, setSelectedItem, item, indexOptions]);

    const Container = (indexOptions.sectionItemComponent ||
        View) as NonNullable<IndexOptions["sectionItemComponent"]>;

    return (
        <Container
            style={{ height: indexOptions.listItemHeight }}
            title={item.title}
            subtitle={item.subtitle}
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
                    {item.title}
                </Typography>

                {/** SUBTITLE */}
                {item.subtitle && !indexOptions.sectionItemSubtitleHidden && (
                    <Typography
                        size={TypographySize.Small}
                        style={indexOptions.sectionItemSubtitleStyle}
                        disableDefaultStyles={disableDefaultStyles}
                    >
                        {item.subtitle}
                    </Typography>
                )}
            </Pressable>

            {/** SEPARATOR */}
            {indexOptions.sectionItemSeparatorHidden || <DefaultSeparator />}
        </Container>
    );
};
