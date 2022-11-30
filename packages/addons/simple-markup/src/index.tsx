import React from "react";
import { Text, StyleSheet } from "react-native";
import { BibloAddon } from "@biblo/react-native";

interface Options {
    bold?: string;
    italic?: string;
    strikeThrough?: string;
}

interface Markup {
    text: string;
    bold: boolean;
    italic: boolean;
    strikeThrough: boolean;
}

const escapeRegex = (string: string) =>
    string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");

const getMarkup = (input: string, options: Options): Markup[] => {
    const {
        bold: boldDelimiter,
        italic: italicDelimiter,
        strikeThrough: strikeThroughDelimiter,
    } = {
        bold: "**",
        italic: "_",
        strikeThrough: "~~",
        ...options,
    };
    const output: Markup[] = [];
    const regex = new RegExp(
        `(${escapeRegex(boldDelimiter)}|${escapeRegex(italicDelimiter)})`,
        "g",
    );

    let bold = false;
    let italic = false;
    let strikeThrough = false;

    const text = input.split(regex).reduce((a, b) => {
        if (b === boldDelimiter) {
            if (bold) {
                if (a !== "") {
                    output.push({ text: a, bold, italic, strikeThrough });
                }

                bold = false;
            } else {
                output.push({ text: a, bold, italic, strikeThrough });
                bold = true;
            }

            return "";
        } else if (b === italicDelimiter) {
            if (italic) {
                if (a !== "") {
                    output.push({ text: a, bold, italic, strikeThrough });
                }

                italic = false;
            } else {
                output.push({ text: a, bold, italic, strikeThrough });
                italic = true;
            }

            return "";
        } else if (b === strikeThroughDelimiter) {
            if (strikeThrough) {
                if (a !== "") {
                    output.push({ text: a, bold, italic, strikeThrough });
                }

                strikeThrough = false;
            } else {
                output.push({ text: a, bold, italic, strikeThrough });
                strikeThrough = true;
            }

            return "";
        } else {
            return a + b;
        }
    }, "");

    if (text !== "") {
        output.push({
            text: text,
            bold: false,
            italic: false,
            strikeThrough: false,
        });
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
