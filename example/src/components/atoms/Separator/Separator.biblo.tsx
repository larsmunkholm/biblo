import { BibloBio, BibloBook } from "@biblo/react-native";
import { Separator } from "./Separator.component";
import { SeparatorProps } from "./Separator.props";

export default {
    title: "Separator",
    description:
        "Be aware that the separator in all these examples is placed in a box with padding in top and bottom.",
    tags: ["graphics"],
    component: Separator,
    wrapperStyle: {
        marginHorizontal: 0,
        paddingVertical: 10,
        justifyContent: "center",
        backgroundColor: "#efefef",
    },
} as BibloBio<SeparatorProps>;

export const Default: BibloBook = {};

export const MarginVertical: BibloBook<SeparatorProps> = {
    props: { marginVertical: true },
};

export const MarginTop: BibloBook<SeparatorProps> = {
    props: { marginTop: true },
};

export const MarginBottom: BibloBook<SeparatorProps> = {
    props: { marginTop: true },
};

export const NoMarginHorizontal: BibloBook<SeparatorProps> = {
    props: { noMarginHorizontal: true },
};
