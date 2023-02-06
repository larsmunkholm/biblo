import React from "react";
import { TextInput, View } from "react-native";
import { Typography } from "../Typography.component";
import { useBiblo } from "../../hooks/Biblo.hook";
import { ReaderOptions } from "../../interfaces/ReaderOptions.interface";
import { getTextStyles, getViewStyles } from "../../helpers/getStyles.helper";
import { ErrorBoundary } from "../ErrorBoundary.component";
import { PropsFromBioOrItem } from "../../interfaces/Biblo.interface";

interface Props {
    props: PropsFromBioOrItem;
    updateProp: (prop: string, value: any) => void;
    parent: "header" | "item";
    shown: boolean;
    setShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReaderControls = ({
    props,
    updateProp,
    parent,
    shown,
    setShown,
}: Props) => {
    const {
        readerOptions,
        defaultStyles,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const propsArray = Object.entries(props);
    const disableDefaultStyles =
        disableDefaultStylesGlobal || readerOptions.disableDefaultStyles;

    const Controls = (readerOptions.controlsComponent || View) as NonNullable<
        ReaderOptions["controlsComponent"]
    >;

    const inputStyle = getTextStyles(
        readerOptions.controlsInputStyle,
        defaultStyles.textInput,
        disableDefaultStyles,
    );

    return shown || readerOptions.controlsComponent ? (
        <ErrorBoundary type="propsComponent">
            <Controls
                shown={shown}
                setShown={setShown}
                parent={parent}
                style={readerOptions.controlsStyle}
                textStyle={readerOptions.controlsTextStyle}
                inputStyle={readerOptions.controlsInputStyle}
            >
                {propsArray.map(([prop, data], index) => {
                    return (
                        !["hidden", "undefined", "function"].includes(
                            data.type,
                        ) && (
                            <View
                                key={`${prop}-${index}`}
                                style={getViewStyles(
                                    readerOptions.controlsStyle,
                                    {
                                        marginHorizontal:
                                            parent === "item"
                                                ? defaultStyles.spacing
                                                : 0,
                                        marginTop: defaultStyles.spacing,
                                    },
                                    disableDefaultStyles,
                                )}
                            >
                                <Typography
                                    bold
                                    style={getTextStyles(
                                        readerOptions.controlsTextStyle,
                                        { marginBottom: 5 },
                                        disableDefaultStyles,
                                    )}
                                    disableDefaultStyles={disableDefaultStyles}
                                >
                                    {data.title}
                                </Typography>

                                {data.type === "string" ? (
                                    <TextInput
                                        defaultValue={data.value}
                                        placeholder="undefined"
                                        onChangeText={(newValue) =>
                                            updateProp(prop, newValue)
                                        }
                                        style={inputStyle}
                                    />
                                ) : data.type === "number" ? (
                                    <TextInput
                                        defaultValue={
                                            typeof data.value === "number"
                                                ? data.value.toString()
                                                : ""
                                        }
                                        keyboardType="numeric"
                                        placeholder="undefined"
                                        onChangeText={(newValue) =>
                                            updateProp(
                                                prop,
                                                parseFloat(newValue),
                                            )
                                        }
                                        style={inputStyle}
                                    />
                                ) : null}
                            </View>
                        )
                    );
                })}
            </Controls>
        </ErrorBoundary>
    ) : null;
};
