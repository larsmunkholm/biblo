import React from "react";
import { Pressable, View } from "react-native";
import { ErrorBoundary } from "../ErrorBoundary.component";
import { Typography } from "../Typography.component";
import { useBiblo } from "../../hooks/Biblo.hook";
import { ReaderOptions } from "../../interfaces/ReaderOptions.interface";
import { BibloControlsBaseProps } from "../../interfaces/ReaderProps.interface";

export const ReaderControlsToggle = (props: BibloControlsBaseProps) => {
    const {
        defaultStyles,
        readerOptions,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || readerOptions.disableDefaultStyles;

    const Element = (readerOptions.controlsToggle || View) as NonNullable<
        ReaderOptions["controlsToggle"]
    >;

    return (
        <ErrorBoundary type="the controls button">
            <Element
                style={
                    disableDefaultStyles
                        ? undefined
                        : { marginLeft: defaultStyles.spacing, width: 40 }
                }
                controlsShown={props.controlsShown}
                setControlsShown={props.setControlsShown}
            >
                <Pressable
                    style={
                        disableDefaultStyles
                            ? undefined
                            : {
                                  position: "absolute",
                                  top: -20,
                                  right: -defaultStyles.spacing,
                                  width: 40,
                                  height: 40,
                                  alignItems: "center",
                                  justifyContent: "center",
                              }
                    }
                    onPress={() =>
                        props.setControlsShown((prevState) => !prevState)
                    }
                >
                    <Typography>⚙</Typography>
                </Pressable>
            </Element>
        </ErrorBoundary>
    );
};
