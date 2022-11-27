import React from "react";
import {
    bibloImporter,
    BibloProvider,
    BibloIndex,
    BibloReader,
} from "@biblo/react-native";
import BibloAddonSimpleMarkup from "@biblo/addon-simple-markup";
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

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
            onSelectFile={() => navigate({ name: "BibloReader", params: {} })}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name="BibloIndex"
                    component={BibloIndex}
                    options={{ title: "React Navigation" }}
                />
                <Stack.Screen name="BibloReader" component={BibloReader} />
            </Stack.Navigator>
        </BibloProvider>
    );
}
