import React, { useEffect } from "react";
import { Animated, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderList } from "../components/ReaderList.component";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";

export const ReaderScreen = React.memo(() => {
    const {
        selectedItem,
        readerOptions,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();

    const disableDefaultStyles =
        disableDefaultStylesGlobal || readerOptions.disableDefaultStyles;
    const Wrapper = (readerOptions.wrapperComponent || View) as NonNullable<
        ReaderOptions["wrapperComponent"]
    >;

    useEffect(() => {
        if (readerOptions.onMount) {
            readerOptions.onMount();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return selectedItem ? (
        <Wrapper
            item={selectedItem}
            style={[
                disableDefaultStyles ? {} : { flex: 1 },
                readerOptions.wrapperStyle,
            ]}
        >
            <Animated.ScrollView
                key={selectedItem.path}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
                {...readerOptions.scrollViewProps}
            >
                <ReaderList item={selectedItem} />
            </Animated.ScrollView>
        </Wrapper>
    ) : null;
});
ReaderScreen.displayName = "ReaderScreen";
