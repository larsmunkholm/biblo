import React from "react";
import { bibloImporter, BibloProvider, BibloIndex } from "@biblo/react-native";
import BibloAddonSimpleMarkup from "@biblo/addon-simple-markup";
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { ReaderScreen } from "./Reader.screen";

const components = bibloImporter(
    require.context("../../", true, /\.biblo\.[tj]sx?$/),
);

const Stack = createNativeStackNavigator();

export default function ReactNavigationScreen() {
    const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <BibloProvider
            components={components}
            addons={[BibloAddonSimpleMarkup]}
            onSelectFile={(file) => {
                navigate({ name: "reader", params: { file } });
            }}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name="index"
                    component={BibloIndex}
                    options={{ title: "React Navigation" }}
                />
                <Stack.Screen
                    name="reader"
                    component={ReaderScreen}
                    options={{ title: "Biblo file" }}
                />
            </Stack.Navigator>
        </BibloProvider>
    );
}
