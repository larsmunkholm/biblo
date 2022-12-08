import React, { ErrorInfo } from "react";
import { Text, View } from "react-native";

interface Props {
    type: string;
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
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
                </View>
            );
        }

        return this.props.children;
    }
}
