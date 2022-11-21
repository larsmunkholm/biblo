import React from "react";
import { BibloComponentItem } from "../interfaces/Biblo.interface";
import { useBiblo } from "../hooks/Biblo.hook";
import { View } from "react-native";
import { Typography, TypographySize } from "./Typography.component";

export const ReaderItem = React.memo((props: BibloComponentItem) => {
    const {
        readerOptions,
        defaultStyles,
        disableDefaultStyles: disabledDefaultStylesGlobal,
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
            style={[
                disableDefaultStyles ? {} : { margin: defaultStyles.margin },
                readerOptions.itemStyle,
            ]}
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
                        {props.title}
                    </Typography>
                </ItemTitleComponent>
            )}

            {/** Component description */}
            {props.description && (
                <ItemDescriptionComponent
                    description={props.description}
                    style={[
                        disableDefaultStyles
                            ? {}
                            : { marginTop: defaultStyles.margin },
                        readerOptions.itemDescriptionStyle,
                    ]}
                >
                    {typeof props.description === "string" ? (
                        <Typography
                            size={TypographySize.Small}
                            style={readerOptions.headerDescriptionTextStyle}
                            disableDefaultStyles={disableDefaultStyles}
                        >
                            {props.description}
                        </Typography>
                    ) : (
                        props.description
                    )}
                </ItemDescriptionComponent>
            )}

            {/** The actual component */}
            <ItemComponentWrapper
                style={[
                    disableDefaultStyles
                        ? {}
                        : { marginTop: defaultStyles.margin },
                    readerOptions.itemComponentStyle,
                    props.wrapperStyle,
                ]}
            >
                <props.Component {...props.args} />
            </ItemComponentWrapper>
        </Item>
    );
});

ReaderItem.displayName = "ReaderItem";
