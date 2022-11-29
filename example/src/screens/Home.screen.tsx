import React from "react";
import { Button, View } from "react-native";
import { useLinkTo } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function HomeScreen() {
    const linkTo = useLinkTo<NativeStackNavigationProp<any>>();
    return (
        <View style={{ padding: 15 }}>
            <View style={{ marginBottom: 15 }}>
                <Button
                    title="Basic viewport"
                    onPress={() => linkTo("/basic-viewport")}
                />
            </View>
            <View style={{ marginBottom: 15 }}>
                <Button
                    title="React Navigation"
                    onPress={() => linkTo("/react-navigation")}
                />
            </View>
        </View>
    );
}
