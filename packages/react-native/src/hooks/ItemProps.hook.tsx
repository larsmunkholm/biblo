import React, { useCallback, useEffect, useState } from "react";
import { useProps } from "./Props.hook";
import { PropsFromBioOrItem, PropTypes } from "../interfaces/Biblo.interface";
import { getPropType } from "../helpers/getPropType.helper";
import { updateProps } from "../helpers/setPropValue.helper";

interface ItemPropsHook {
    propsFromItem: PropsFromBioOrItem;
    updatePropFromItem: (prop: string, value: any) => void;
    getPropsForComponent: () => Record<string, any>;
}

const ItemPropsContext = React.createContext<ItemPropsHook>({
    propsFromItem: {},
    updatePropFromItem: () => null,
    getPropsForComponent: () => ({}),
});

type Props = {
    props?: Record<string, any>;
    propTypes?: PropTypes;
    children: React.ReactNode;
};

const buildProps = (
    propsFromBio: Record<string, any>,
    inheritedProps: Record<string, any> | undefined,
    propTypes?: PropTypes,
): ItemPropsHook["propsFromItem"] => {
    const propsObj = { ...propsFromBio };
    if (inheritedProps) {
        Object.entries(inheritedProps).forEach(
            ([key, value]) =>
                (propsObj[key] = {
                    type: getPropType(
                        propTypes,
                        key,
                        value,
                        propsObj[key]?.type,
                    ),
                    title:
                        propsObj[key]?.title ||
                        (typeof propTypes?.[key] === "object"
                            ? (propTypes[key] as { title?: string }).title
                            : key) ||
                        key,
                    value,
                }),
        );
    }
    if (propTypes) {
        Object.entries(propTypes).forEach(([key, value]) => {
            if (typeof propsObj[key] === "undefined") {
                propsObj[key] = {
                    type: typeof value === "string" ? value : value.type,
                    title:
                        typeof value === "object" && value.title
                            ? value.title
                            : key,
                    value: undefined,
                };
            } else {
                propsObj[key].type =
                    (typeof value === "string" ? value : value.type) ||
                    propsObj[key].type;
                propsObj[key].title =
                    typeof value === "object" && value.title
                        ? value.title
                        : propsObj[key].title;
            }
        });
    }
    return propsObj;
};

export const ItemPropsProvider = ({
    props: inheritedProps,
    propTypes,
    children,
}: Props): JSX.Element => {
    const { propsFromBio } = useProps();
    const [propsFromItem, setPropsFromItem] = useState(() =>
        buildProps(propsFromBio, inheritedProps, propTypes),
    );

    const updatePropFromItem = useCallback((prop: string, value: any) => {
        setPropsFromItem((prevState) => updateProps(prevState, prop, value));
    }, []);

    const getPropsForComponent = useCallback(
        () =>
            Object.entries(propsFromItem).reduce(
                (obj, [key, data]) => ({ ...obj, [key]: data.value }),
                {},
            ),
        [propsFromItem],
    );

    useEffect(() => {
        setPropsFromItem(buildProps(propsFromBio, inheritedProps, propTypes));
    }, [propsFromBio, inheritedProps, propTypes]);

    return (
        <ItemPropsContext.Provider
            value={{
                propsFromItem,
                updatePropFromItem,
                getPropsForComponent,
            }}
        >
            {children}
        </ItemPropsContext.Provider>
    );
};

export const useItemProps = (): ItemPropsHook =>
    React.useContext(ItemPropsContext);
