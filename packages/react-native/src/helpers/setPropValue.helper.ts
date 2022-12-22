import { PropsFromBioOrItem } from "../interfaces/Biblo.interface";

export const updateProps = (
    props: PropsFromBioOrItem,
    key: string,
    value: any,
) => {
    const newState = { ...props };
    newState[key].value =
        typeof value === newState[key].type &&
        (newState[key].type !== "number" || !isNaN(value))
            ? value
            : undefined;
    return newState;
};
