import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";

interface Props {
    disableDefaultStyles?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const Separator = (props: Props) => {
    const { defaultStyles } = useBiblo();
    return (
        <View
            style={[
                props.disableDefaultStyles
                    ? {}
                    : {
                          marginHorizontal: defaultStyles.margin,
                          borderTopWidth: 1,
                          borderTopColor: "#ddd",
                      },
                props.style,
            ]}
        />
    );
};
