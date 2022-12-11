import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { getViewStyles } from "../helpers/getStyles.helper";

interface Props {
    disableDefaultStyles?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const Separator = (props: Props) => {
    const { defaultStyles } = useBiblo();
    return (
        <View
            style={getViewStyles(
                props.style,
                {
                    marginHorizontal: defaultStyles.spacing,
                    height: 1,
                    backgroundColor: defaultStyles.separatorColor,
                },
                props.disableDefaultStyles,
            )}
        />
    );
};
