import React, { useEffect, useMemo } from "react";
import { Animated, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderList } from "../components/ReaderList.component";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";
import { BibloFile } from "../interfaces/Biblo.interface";

interface Props {
    file?: string;
}

export const ReaderScreen = React.memo(({ file }: Props) => {
    const {
        files,
        selectedFile,
        readerOptions,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();

    const showFile: BibloFile | undefined = useMemo(() => {
        const findFilePath = file || selectedFile;
        let foundFile: BibloFile | undefined = undefined;

        if (findFilePath) {
            files.find(({ data }) =>
                data.find((currentFile) => {
                    if (currentFile.path === findFilePath) {
                        foundFile = { ...currentFile };
                    }
                }),
            );
        }

        return foundFile;
    }, [files, file, selectedFile]);

    const disableDefaultStyles =
        disableDefaultStylesGlobal || readerOptions.disableDefaultStyles;
    const Wrapper = (readerOptions.wrapperComponent || View) as NonNullable<
        ReaderOptions["wrapperComponent"]
    >;

    useEffect(() => {
        if (readerOptions.onMount) {
            readerOptions.onMount();
        }

        // We don't want to add readerOptions to the dependency array,
        // because that will cause onMount() to fire on every change
        // and not just on mount.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return showFile ? (
        <Wrapper
            item={showFile}
            style={[
                disableDefaultStyles ? {} : { flex: 1 },
                readerOptions.wrapperStyle,
            ]}
        >
            <Animated.ScrollView
                key={selectedFile}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
                {...readerOptions.scrollViewProps}
            >
                <ReaderList file={showFile} />
            </Animated.ScrollView>
        </Wrapper>
    ) : null;
});
ReaderScreen.displayName = "ReaderScreen";
