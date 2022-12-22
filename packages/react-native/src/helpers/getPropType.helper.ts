import { PropTypes } from "../interfaces/Biblo.interface";

export const getPropType = (
    propTypes: PropTypes | undefined,
    key: string,
    value: any,
    fallback?: any,
): string | undefined =>
    propTypes?.[key]
        ? typeof propTypes[key] === "string"
            ? (propTypes[key] as string)
            : (propTypes[key] as { type: string }).type
        : typeof value === "undefined"
        ? fallback || "undefined"
        : typeof value;
