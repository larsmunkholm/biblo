import React, { useMemo, useState } from "react";
import {
    BibloBio,
    BibloFile,
    BibloProviderProps,
    DefaultStyles,
} from "../interfaces/Biblo.interface";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";
import { IndexOptions } from "../interfaces/IndexOptions.interface";

interface BibloHook {
    files: { title: string; data: BibloFile[] }[];
    selectedFile: string | undefined;
    setSelectedFile: (path: string | undefined) => void;
    onSelectFile?: (path: string) => void;
    indexOptions: IndexOptions;
    readerOptions: ReaderOptions;
    defaultStyles: DefaultStyles;
    disableDefaultStyles: boolean;
    textParser: NonNullable<BibloProviderProps["textParser"]>;
    searchValue: string;
    setSearchValue: (value: string) => void;
    enabledTags: string[];
    setEnabledTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const BibloContext = React.createContext<BibloHook>({} as BibloHook);

export const BibloProvider = ({
    components,
    children,
    addons = [],
    ...props
}: BibloProviderProps): JSX.Element => {
    const [selectedFile, setSelectedFile] = useState<string | undefined>();
    const [searchValue, setSearchValue] = useState("");
    const [enabledTags, setEnabledTags] = useState<string[]>([]);

    const {
        indexOptions = {},
        readerOptions = {},
        defaultStyles: defStyles,
        disableDefaultStyles = false,
        textParser = (input: string) => input,
        getSection,
        onSelectFile,
    } = {
        ...addons.reduce(
            (obj, addon) =>
                typeof addon === "function"
                    ? { ...obj, ...addon() }
                    : { ...obj, ...addon },
            {},
        ),
        ...props,
    };

    const defaultStyles: DefaultStyles = {
        margin: 15,
        lineHeight: 1.25,
        textColor: "#000",
        ...defStyles,
        fontSizes: {
            small: 13,
            medium: 15,
            large: 20,
            ...defStyles?.fontSizes,
        },
    };

    const files: BibloHook["files"] = useMemo(
        () =>
            Object.entries(
                Object.entries(components).reduce<Record<string, any>>(
                    (
                        acc: Record<string, BibloFile[]>,
                        [path, value]: [
                            string,
                            {
                                default: BibloBio;
                                __namedExportsOrder: string[];
                            },
                        ],
                    ) => {
                        const {
                            default: bio,
                            __namedExportsOrder: order,
                            ...exports
                        } = value;

                        const section =
                            bio.section ||
                            (getSection
                                ? getSection({ ...bio, path })
                                : "Components");
                        if (typeof acc[section] === "undefined") {
                            acc[section] = [];
                        }

                        const items = Object.entries(exports).map(
                            ([title, component]) => ({
                                title,
                                component: component as any,
                            }),
                        );

                        if (order?.length) {
                            items.sort(
                                (a, b) =>
                                    order.indexOf(a.title) -
                                    order.indexOf(b.title),
                            );
                        }

                        acc[section].push({
                            ...bio,
                            path,
                            items,
                        });
                        return acc;
                    },
                    {},
                ),
            ).map(([title, data]) => ({ title, data })),
        [components, getSection],
    );

    return (
        <BibloContext.Provider
            value={{
                files,
                selectedFile,
                setSelectedFile,
                onSelectFile,
                indexOptions: {
                    ...indexOptions,
                    sectionListItemHeight:
                        indexOptions?.sectionListItemHeight || 40,
                },
                readerOptions,
                defaultStyles,
                disableDefaultStyles,
                textParser,
                searchValue,
                setSearchValue,
                enabledTags,
                setEnabledTags,
            }}
        >
            {children}
        </BibloContext.Provider>
    );
};

export const useBiblo = (): BibloHook => React.useContext(BibloContext);
