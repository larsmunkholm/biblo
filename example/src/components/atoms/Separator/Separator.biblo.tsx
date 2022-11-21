import { BibloBio, BibloBook } from "@biblo/react-native";
import { Separator } from "./Separator.component";
import { SeparatorProps } from "./Separator.props";

export default {
    title: "Separator",
    description:
        "Vær opmærksom på, at separatoren i alle disse eksempler er placeret i en kasse med luft i top og bund.",
    tags: ["graphics"],
    component: Separator,
    //wrapper: (style: StyleProp<ViewStyle>) => <View style={style} />,
    wrapperStyle: {
        marginHorizontal: 0,
        paddingVertical: 10,
        justifyContent: "center",
        backgroundColor: "#efefef",
    },
} as BibloBio<SeparatorProps>;

export const Default: BibloBook = {
    title: "Standard",
};

export const MarginVertical: BibloBook<SeparatorProps> = {
    title: "Margin vertikalt",
    args: { marginVertical: true },
};

export const MarginTop: BibloBook<SeparatorProps> = {
    title: "Margin top",
    args: { marginTop: true },
};

export const MarginBottom: BibloBook<SeparatorProps> = {
    title: "Margin bottom",
    args: { marginTop: true },
};

export const NoMarginHorizontal: BibloBook<SeparatorProps> = {
    title: "Uden horisontal margin",
    args: { noMarginHorizontal: true },
};
