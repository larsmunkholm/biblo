import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import {
    bibloImporter,
    BibloProvider,
    BibloIndex,
    BibloReader,
} from "@biblo/react-native";

const components = bibloImporter(
    require.context("../../", true, /\.biblo\.[tj]sx?$/),
);

export default function BasicViewportScreen() {
    const scrollViewRef = useRef<ScrollView>(null);
    return (
        <BibloProvider
            components={components}
            readerOptions={{
                scrollViewProps: {
                    ref: scrollViewRef,
                },
                onMount: () =>
                    scrollViewRef.current?.scrollTo({
                        x: 0,
                        y: 0,
                        animated: false,
                    }),
            }}
        >
            <View style={{ backgroundColor: "white", height: "50%" }}>
                <BibloIndex />
            </View>
            <View
                style={{
                    height: "50%",
                    backgroundColor: "white",
                    borderTopWidth: 1,
                    borderTopColor: "#000",
                }}
            >
                <BibloReader />
            </View>
        </BibloProvider>
    );
}
