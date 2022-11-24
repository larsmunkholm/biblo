import React, { useEffect, useMemo, useState } from "react";
import {
    BibloFile,
    BibloProviderProps,
    DefaultStyles,
} from "../interfaces/Biblo.interface";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";
import { IndexOptions } from "../interfaces/IndexOptions.interface";

interface BibloHook {
    items: { title: string; data: BibloFile[] }[];
    selectedItem: BibloFile | undefined;
    setSelectedItem: (item: BibloFile | undefined) => void;
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
    const [selectedItem, setSelectedItem] = useState<BibloFile | undefined>();
    const [searchValue, setSearchValue] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const items: BibloHook["items"] = useMemo(
        () =>
            Object.entries(
                Object.entries(components).reduce<Record<string, any>>(
                    (acc: any, [path, value]: any) => {
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

                        const books = Object.entries(exports).map(
                            ([title, component]) => {
                                const returnComponent =
                                    typeof component === "function"
                                        ? component
                                        : typeof bio.component === "object"
                                        ? { ...bio.component }
                                        : typeof bio.component !== "undefined"
                                        ? bio.component.bind({})
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
                            books.sort(
                                (a, b) =>
                                    order.indexOf(a.title) -
                                    order.indexOf(b.title),
                            );
                        }

                        acc[section].push({
                            ...bio,
                            path,
                            books,
                        });
                        return acc;
                    },
                    {},
                ),
            ).map(([title, data]) => ({ title, data })),
        [components, getSection],
    );

    useEffect(() => {
        setSelectedItem((current) => {
            let updatedItem: BibloFile | undefined;
            if (current) {
                items.find((arr) => {
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
    }, [items]);

    return (
        <BibloContext.Provider
            value={{
                items,
                selectedItem,
                setSelectedItem,
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
