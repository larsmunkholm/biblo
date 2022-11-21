import React, { useRef } from "react";
import {
    Dimensions,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
} from "react-native";
import {
    bibloImporter,
    BibloProvider,
    BibloIndex,
    BibloReader,
} from "@biblo/react-native";

// @ts-ignore
const components = bibloImporter(require.context("/", true, /\.biblo\.tsx$/));

export default function App() {
    const scrollViewRef = useRef<ScrollView>(null);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                maxHeight: Dimensions.get("window").height,
                paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
                backgroundColor: "white",
            }}
        >
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
                getSection={({ path }) =>
                    path.match(/components\/([a-z]+)\//)[1]
                }
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
        </SafeAreaView>
    );
}
