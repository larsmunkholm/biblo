"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const escapeRegex = (string) => string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
const getMarkup = (input, options) => {
    const { bold: boldDelimiter, italic: italicDelimiter } = {
        bold: "**",
        italic: "_",
        ...options,
    };
    const output = [];
    const regex = new RegExp(`(${escapeRegex(boldDelimiter)}|${escapeRegex(italicDelimiter)})`, "g");
    let bold = false;
    let italic = false;
    const text = input.split(regex).reduce((a, b) => {
        if (b === boldDelimiter) {
            if (bold) {
                if (a !== "") {
                    output.push({ text: a, bold, italic });
                }
                bold = false;
            }
            else {
                output.push({ text: a, bold, italic });
                bold = true;
            }
            return "";
        }
        else if (b === italicDelimiter) {
            if (italic) {
                if (a !== "") {
                    output.push({ text: a, bold, italic });
                }
                italic = false;
            }
            else {
                output.push({ text: a, bold, italic });
                italic = true;
            }
            return "";
        }
        else {
            return a + b;
        }
    }, "");
    if (text !== "") {
        output.push({ text: text, bold: false, italic: false });
    }
    return output;
};
exports.default = (options) => ({
    textParser: (text, { style }) => {
        const inheritedStyle = style ? react_native_1.StyleSheet.flatten(style) : {};
        return getMarkup(text, options).map(({ text, bold, italic }, index) => (<react_native_1.Text key={index} style={[
                {
                    fontStyle: italic ? "italic" : inheritedStyle.fontStyle,
                    fontWeight: bold ? "bold" : inheritedStyle.fontWeight,
                },
            ]}>
                {text}
            </react_native_1.Text>));
    },
});
