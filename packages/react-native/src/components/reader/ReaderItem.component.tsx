import React, { useState } from "react";
import { BibloComponentItem } from "../../interfaces/Biblo.interface";
import { useBiblo } from "../../hooks/Biblo.hook";
import { View } from "react-native";
import { Typography, TypographySize } from "../Typography.component";
import { getTextStyles, getViewStyles } from "../../helpers/getStyles.helper";
import { ErrorBoundary } from "../ErrorBoundary.component";
import { ReaderControls } from "./ReaderControls.component";
import { useItemProps } from "../../hooks/ItemProps.hook";
import { ReaderControlsToggle } from "./ReaderControlsToggle.component";

export const ReaderItem = React.memo((props: BibloComponentItem) => {
    const [controlsShown, setControlsShown] = useState(false);
    const {
        readerOptions,
        defaultStyles,
        disableDefaultStyles: disabledDefaultStylesGlobal,
        textParser,
    } = useBiblo();
    const { getPropsForComponent, propsFromItem, updatePropFromItem } =
        useItemProps();
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
                controlsShown={controlsShown}
                setControlsShown={setControlsShown}
                title={props.title}
                originalTitle={props.originalTitle}
                description={props.description}
                style={getViewStyles(
                    readerOptions.itemStyle,
                    { marginVertical: defaultStyles.spacing },
                    disableDefaultStyles,
                )}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    {/** TITLE */}
                    {props.title && (
                        <ErrorBoundary type="itemTitleComponent">
                            <ItemTitleComponent
                                title={props.title}
                                originalTitle={props.originalTitle}
                                style={getViewStyles(
                                    readerOptions.itemTitleStyle,
                                    {
                                        paddingHorizontal:
                                            defaultStyles.spacing,
                                    },
                                    disableDefaultStyles,
                                )}
                            >
                                <ErrorBoundary type="the title">
                                    <Typography
                                        bold
                                        style={readerOptions.itemTitleTextStyle}
                                        disableDefaultStyles={
                                            disableDefaultStyles
                                        }
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

                    {/** CONTROLS TOGGLE */}
                    {readerOptions.itemControlsToggleHidden === false &&
                        Object.keys(propsFromItem).length > 0 && (
                            <View
                                style={{
                                    alignSelf: "center",
                                    marginRight: defaultStyles.spacing,
                                }}
                            >
                                <ReaderControlsToggle
                                    controlsShown={controlsShown}
                                    setControlsShown={setControlsShown}
                                />
                            </View>
                        )}
                </View>

                {/** DESCRIPTION */}
                {props.description && (
                    <ErrorBoundary type="itemDescriptionComponent">
                        <ItemDescriptionComponent
                            description={props.description}
                            style={getViewStyles(
                                readerOptions.itemDescriptionStyle,
                                {
                                    marginTop: props.title
                                        ? defaultStyles.spacing
                                        : 0,
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

                {/** CONTROLS */}
                <ReaderControls
                    props={propsFromItem}
                    updateProp={updatePropFromItem}
                    shown={controlsShown}
                    setShown={setControlsShown}
                    parent="item"
                />

                {/** THE COMPONENT */}
                <ErrorBoundary type="itemComponentWrapper">
                    <ItemComponentWrapper
                        style={getViewStyles(
                            [
                                readerOptions.itemComponentStyle,
                                props.wrapperStyle,
                            ],
                            {
                                marginTop:
                                    props.title || props.description
                                        ? defaultStyles.spacing
                                        : 0,
                                paddingHorizontal: defaultStyles.spacing,
                            },
                            disableDefaultStyles,
                        )}
                    >
                        <ErrorBoundary type="the component">
                            <props.Component {...getPropsForComponent()} />
                        </ErrorBoundary>
                    </ItemComponentWrapper>
                </ErrorBoundary>
            </Item>
        </ErrorBoundary>
    );
});

ReaderItem.displayName = "ReaderItem";
