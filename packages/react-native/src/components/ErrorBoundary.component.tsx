import React from "react";
import { Text, View } from "react-native";

interface Props {
    type: string;
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    name: string;
    message: string;
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, name: "", message: "" };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, name: error.name, message: error.message };
    }

    render() {
        if (this.state.hasError) {
            return (
                <View
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderColor: "#DF1924",
                        backgroundColor: "#FCD5D4",
                    }}
                >
                    <Text style={{ color: "#DF1924" }}>
                        Something went wrong rendering{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            {this.props.type}
                        </Text>
                    </Text>
                    <View
                        style={{
                            marginVertical: 5,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            borderWidth: 1,
                            borderColor: "#DF1924",
                            backgroundColor: "#fff",
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "#000" }}>
                            <Text style={{ fontWeight: "bold" }}>
                                {this.state.name}:
                            </Text>{" "}
                            {this.state.message}
                        </Text>
                    </View>
                </View>
            );
        }

        return this.props.children;
    }
}
