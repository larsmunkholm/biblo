import React, { useEffect } from "react";
import { Animated, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderList } from "../components/ReaderList.component";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";

export const ReaderScreen = React.memo(() => {
    const {
        selectedFile,
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
    }, [readerOptions]);

    return selectedFile ? (
        <Wrapper
            item={selectedFile}
            style={[
                disableDefaultStyles ? {} : { flex: 1 },
                readerOptions.wrapperStyle,
            ]}
        >
            <Animated.ScrollView
                key={selectedFile.path}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
                {...readerOptions.scrollViewProps}
            >
                <ReaderList file={selectedFile} />
            </Animated.ScrollView>
        </Wrapper>
    ) : null;
});
ReaderScreen.displayName = "ReaderScreen";
