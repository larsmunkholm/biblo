import React from "react";
import { Alert, useColorScheme } from "react-native";
import { BibloBio, BibloItem } from "@biblo/react-native";
import { Button } from "./Button.component";
import { ButtonProps } from "./Button.props";

export default {
    title: "Button",
    tags: ["interactive", "button"],
    props: {
        text: "Press me",
        onPress: () => Alert.alert("Bonk!", "You pressed the button."),
    },
} as BibloBio<ButtonProps>;

const Template: BibloItem<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.props = { width: undefined, height: undefined };

export const WithCustomDimensions = Template.bind({});
WithCustomDimensions.props = {
    width: 150,
    height: 60,
};

export const Colored: BibloItem<ButtonProps> = (props) => {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === "light" ? "maroon" : "pink";
    const textColor = colorScheme === "light" ? "pink" : "maroon";
    return (
        <Button
            {...props}
            backgroundColor={backgroundColor}
            textColor={textColor}
        />
    );
};

export const WithRadius = Template.bind({});
WithRadius.title = "With round corners";
WithRadius.props = { radius: 10 };

export const WithRadiusLeft = Template.bind({});
WithRadiusLeft.title = "With round corners left";
WithRadiusLeft.props = { radiusLeft: 10 };

export const WithRadiusRight = Template.bind({});
WithRadiusRight.title = "With round corners right";
WithRadiusRight.props = { radiusRight: 10 };
