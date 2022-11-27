import React from "react";
import { Text, StyleSheet } from "react-native";
import { BibloAddon } from "@biblo/react-native";

interface Options {
    bold?: string;
    italic?: string;
}

interface Markup {
    text: string;
    bold: boolean;
    italic: boolean;
}

const escapeRegex = (string: string) =>
    string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");

const getMarkup = (input: string, options: Options): Markup[] => {
    const { bold: boldDelimiter, italic: italicDelimiter } = {
        bold: "**",
        italic: "_",
        ...options,
    };
    const output: Markup[] = [];
    const regex = new RegExp(
        `(${escapeRegex(boldDelimiter)}|${escapeRegex(italicDelimiter)})`,
        "g",
    );

    let bold = false;
    let italic = false;

    const text = input.split(regex).reduce((a, b) => {
        if (b === boldDelimiter) {
            if (bold) {
                if (a !== "") {
                    output.push({ text: a, bold, italic });
                }

                bold = false;
            } else {
                output.push({ text: a, bold, italic });
                bold = true;
            }

            return "";
        } else if (b === italicDelimiter) {
            if (italic) {
                if (a !== "") {
                    output.push({ text: a, bold, italic });
                }

                italic = false;
            } else {
                output.push({ text: a, bold, italic });
                italic = true;
            }

            return "";
        } else {
            return a + b;
        }
    }, "");

    if (text !== "") {
        output.push({ text: text, bold: false, italic: false });
    }

    return output;
};

export default (options: Options = {}): BibloAddon => ({
    textParser: (text, { style }) => {
        const inheritedStyle = style ? StyleSheet.flatten(style) : {};
        return getMarkup(text, options).map(({ text, bold, italic }, index) => (
            <Text
                key={index}
                style={[
                    {
                        fontStyle: italic ? "italic" : inheritedStyle.fontStyle,
                        fontWeight: bold ? "bold" : inheritedStyle.fontWeight,
                    },
                ]}
            >
                {text}
            </Text>
        ));
    },
});
