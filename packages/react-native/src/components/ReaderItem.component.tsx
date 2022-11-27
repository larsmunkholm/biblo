import React from "react";
import { BibloComponentItem } from "../interfaces/Biblo.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { View } from "react-native";
import { Typography, TypographySize } from "./Typography.component";
import { getTextStyles, getViewStyles } from "../helpers/getStyles.helper";

export const ReaderItem = React.memo((props: BibloComponentItem) => {
    const {
        readerOptions,
        defaultStyles,
        disableDefaultStyles: disabledDefaultStylesGlobal,
        textParser,
    } = useBiblo();
    const Item = (readerOptions.item || View) as any;
    const ItemTitleComponent = (readerOptions.itemTitleComponent ||
        View) as any;
    const ItemDescriptionComponent = (readerOptions.itemDescriptionComponent ||
        View) as any;
    const ItemComponentWrapper = (props.Wrapper ||
        readerOptions.itemComponentWrapper ||
        View) as any;
    const disableDefaultStyles =
        disabledDefaultStylesGlobal || readerOptions.disableDefaultStyles;

    return (
        <Item
            index={props.index}
            isFirst={props.isFirst}
            isLast={props.isLast}
            bio={props.bio}
            title={props.title}
            description={props.description}
            style={getViewStyles(
                readerOptions.itemStyle,
                { margin: defaultStyles.margin },
                disableDefaultStyles,
            )}
        >
            {/** Component title */}
            {props.title && (
                <ItemTitleComponent
                    title={props.title}
                    style={readerOptions.itemTitleStyle}
                >
                    <Typography
                        bold
                        style={readerOptions.itemTitleTextStyle}
                        disableDefaultStyles={disableDefaultStyles}
                    >
                        {textParser(props.title, {
                            type: "title",
                            screen: "reader",
                            scope: "item",
                            style: getTextStyles(
                                readerOptions.itemTitleTextStyle,
                                { fontWeight: "bold" },
                                disableDefaultStyles,
                            ),
                        })}
                    </Typography>
                </ItemTitleComponent>
            )}

            {/** Component description */}
            {props.description && (
                <ItemDescriptionComponent
                    description={props.description}
                    style={getViewStyles(
                        readerOptions.itemDescriptionStyle,
                        { marginTop: defaultStyles.margin },
                        disableDefaultStyles,
                    )}
                >
                    {typeof props.description === "string" ? (
                        <Typography
                            size={TypographySize.Small}
                            style={readerOptions.headerDescriptionTextStyle}
                            disableDefaultStyles={disableDefaultStyles}
                        >
                            {textParser(props.description, {
                                type: "description",
                                screen: "reader",
                                scope: "item",
                                style: readerOptions.headerSubtitleTextStyle,
                            })}
                        </Typography>
                    ) : (
                        props.description
                    )}
                </ItemDescriptionComponent>
            )}

            {/** The actual component */}
            <ItemComponentWrapper
                style={getViewStyles(
                    [readerOptions.itemComponentStyle, props.wrapperStyle],
                    { marginTop: defaultStyles.margin },
                    disableDefaultStyles,
                )}
            >
                <props.Component {...props.props} />
            </ItemComponentWrapper>
        </Item>
    );
});

ReaderItem.displayName = "ReaderItem";
