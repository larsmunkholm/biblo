import React from "react";
import { BibloComponentItem } from "../interfaces/Biblo.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { View } from "react-native";
import { Typography, TypographySize } from "./Typography.component";
import { getTextStyles, getViewStyles } from "../helpers/getStyles.helper";
import { ErrorBoundary } from "./ErrorBoundary.component";

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
        <ErrorBoundary type="item">
            <Item
                index={props.index}
                isFirst={props.isFirst}
                isLast={props.isLast}
                bio={props.bio}
                title={props.title}
                originalTitle={props.originalTitle}
                description={props.description}
                style={getViewStyles(
                    readerOptions.itemStyle,
                    { marginVertical: defaultStyles.spacing },
                    disableDefaultStyles,
                )}
            >
                {/** Component title */}
                {props.title && (
                    <ErrorBoundary type="itemTitleComponent">
                        <ItemTitleComponent
                            title={props.title}
                            originalTitle={props.originalTitle}
                            style={getViewStyles(
                                readerOptions.itemTitleStyle,
                                { paddingHorizontal: defaultStyles.spacing },
                                disableDefaultStyles,
                            )}
                        >
                            <ErrorBoundary type="the title">
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
                            </ErrorBoundary>
                        </ItemTitleComponent>
                    </ErrorBoundary>
                )}

                {/** Component description */}
                {props.description && (
                    <ErrorBoundary type="itemDescriptionComponent">
                        <ItemDescriptionComponent
                            description={props.description}
                            style={getViewStyles(
                                readerOptions.itemDescriptionStyle,
                                {
                                    marginTop: defaultStyles.spacing,
                                    paddingHorizontal: defaultStyles.spacing,
                                },
                                disableDefaultStyles,
                            )}
                        >
                            <ErrorBoundary type="the description">
                                {typeof props.description === "string" ? (
                                    <Typography
                                        size={TypographySize.Small}
                                        style={
                                            readerOptions.headerDescriptionTextStyle
                                        }
                                        disableDefaultStyles={
                                            disableDefaultStyles
                                        }
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
                            </ErrorBoundary>
                        </ItemDescriptionComponent>
                    </ErrorBoundary>
                )}

                {/** The actual component */}
                <ErrorBoundary type="itemComponentWrapper">
                    <ItemComponentWrapper
                        style={getViewStyles(
                            [
                                readerOptions.itemComponentStyle,
                                props.wrapperStyle,
                            ],
                            {
                                marginTop: defaultStyles.spacing,
                                paddingHorizontal: defaultStyles.spacing,
                            },
                            disableDefaultStyles,
                        )}
                    >
                        <ErrorBoundary type="the component">
                            <props.Component {...props.props} />
                        </ErrorBoundary>
                    </ItemComponentWrapper>
                </ErrorBoundary>
            </Item>
        </ErrorBoundary>
    );
});

ReaderItem.displayName = "ReaderItem";
