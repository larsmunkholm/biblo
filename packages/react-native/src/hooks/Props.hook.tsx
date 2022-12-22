import React, { useCallback, useEffect, useState } from "react";
import { PropsFromBioOrItem, PropTypes } from "../interfaces/Biblo.interface";
import { getPropType } from "../helpers/getPropType.helper";
import { updateProps } from "../helpers/setPropValue.helper";

interface PropsHook {
    propsFromBio: PropsFromBioOrItem;
    updatePropFromBio: (prop: string, value: any) => void;
}

const PropsContext = React.createContext<PropsHook>({
    propsFromBio: {},
    updatePropFromBio: () => null,
});

type Props = {
    props?: Record<string, any>;
    propTypes?: PropTypes;
    children: React.ReactNode;
};

const buildProps = (
    inheritedProps: Record<string, any> | undefined,
    propTypes: PropTypes,
): PropsHook["propsFromBio"] => {
    const propsObj = Object.entries(inheritedProps || {}).reduce<
        PropsHook["propsFromBio"]
    >(
        (obj, [key, value]) => ({
            ...obj,
            [key]: {
                type: getPropType(propTypes, key, value),
                title:
                    (typeof propTypes?.[key] === "object"
                        ? (propTypes[key] as { title?: string }).title
                        : key) || key,
                value,
            },
        }),
        {},
    );
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
            }
        });
    }
    return propsObj;
};

export const PropsProvider = ({
    props: inheritedProps,
    propTypes,
    children,
}: Props): JSX.Element => {
    const [propsFromBio, setPropsFromBio] = useState(
        buildProps(inheritedProps, propTypes),
    );

    const updatePropFromBio = useCallback((prop: string, value: any) => {
        setPropsFromBio((prevState) => updateProps(prevState, prop, value));
    }, []);

    useEffect(() => {
        setPropsFromBio(buildProps(inheritedProps, propTypes));
    }, [inheritedProps, propTypes]);

    return (
        <PropsContext.Provider
            value={{
                propsFromBio,
                updatePropFromBio,
            }}
        >
            {children}
        </PropsContext.Provider>
    );
};

export const useProps = (): PropsHook => React.useContext(PropsContext);
