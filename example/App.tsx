import React from "react";
import { Dimensions, Platform, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home.screen";
import BasicViewportScreen from "./src/screens/basic-viewport/BasicViewport.screen";
import ReactNavigationScreen from "./src/screens/react-navigation/ReactNavigation.screen";

const Stack = createNativeStackNavigator();

export default function App() {
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
            <NavigationContainer
                linking={{
                    prefixes: [],
                    config: {
                        screens: {
                            Home: "/demo",
                            BasicViewport: "/demo/basic-viewport",
                            ReactNavigation: "/demo/react-navigation",
                        },
                    },
                }}
            >
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen
                        name="BasicViewport"
                        options={{ title: "Basic viewport" }}
                        component={BasicViewportScreen}
                    />
                    <Stack.Screen
                        name="ReactNavigation"
                        options={{ headerShown: false }}
                        component={ReactNavigationScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
