import React, { useEffect, useMemo, useState } from "react";
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
    selectedFile: BibloFile | undefined;
    setSelectedFile: (file: BibloFile | undefined) => void;
    indexOptions: IndexOptions;
    readerOptions: ReaderOptions;
    defaultStyles: DefaultStyles;
    disableDefaultStyles: boolean;
    searchValue: string;
    setSearchValue: (value: string) => void;
    selectedTags: string[];
    setSelectedTags: (tags: string[]) => void;
}

const BibloContext = React.createContext<BibloHook>({} as BibloHook);

export const BibloProvider = ({
    components,
    children,
    indexOptions = {},
    readerOptions = {},
    defaultStyles: defStyles,
    disableDefaultStyles = false,
    getSection,
}: BibloProviderProps): JSX.Element => {
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
    const [selectedFile, setSelectedFile] = useState<BibloFile | undefined>();
    const [searchValue, setSearchValue] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
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
                            ([title, component]) => {
                                const returnComponent =
                                    typeof component === "function"
                                        ? component
                                        : typeof bio.component === "object"
                                        ? { ...(bio.component as object) }
                                        : typeof bio.component !== "undefined"
                                        ? (bio.component as any).bind({})
                                        : () => bio.component;
                                if (
                                    typeof component === "object" ||
                                    typeof returnComponent === "object"
                                ) {
                                    Object.keys(
                                        component as Record<string, any>,
                                    ).map(
                                        (key) =>
                                            (returnComponent[key] = (
                                                component as Record<string, any>
                                            )[key]),
                                    );
                                }

                                return {
                                    title,
                                    component: returnComponent,
                                };
                            },
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

    useEffect(() => {
        setSelectedFile((current) => {
            let updatedItem: BibloFile | undefined;
            if (current) {
                files.find((arr) => {
                    const found = arr.data.find((item) => {
                        if (item.path === current?.path) {
                            updatedItem = { ...item };
                            return true;
                        }
                    });
                    return !!found;
                });
            }
            return updatedItem;
        });
    }, [files]);

    return (
        <BibloContext.Provider
            value={{
                files,
                selectedFile,
                setSelectedFile,
                indexOptions: {
                    ...indexOptions,
                    sectionListItemHeight:
                        indexOptions?.sectionListItemHeight || 40,
                },
                readerOptions,
                defaultStyles,
                disableDefaultStyles,
                searchValue,
                setSearchValue,
                selectedTags,
                setSelectedTags,
            }}
        >
            {children}
        </BibloContext.Provider>
    );
};

export const useBiblo = (): BibloHook => React.useContext(BibloContext);
