import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function HomeScreen() {
    const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <View style={{ padding: 15 }}>
            <View style={{ marginBottom: 15 }}>
                <Button
                    title="Basic viewport"
                    onPress={() =>
                        navigate({ name: "BasicViewport", params: {} })
                    }
                />
            </View>
            <View style={{ marginBottom: 15 }}>
                <Button
                    title="React Navigation"
                    onPress={() =>
                        navigate({ name: "ReactNavigation", params: {} })
                    }
                />
            </View>
        </View>
    );
}
