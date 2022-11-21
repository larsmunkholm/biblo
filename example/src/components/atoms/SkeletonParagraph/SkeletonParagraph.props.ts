import {
    ParagraphLineHeights,
    ParagraphSize,
} from "../Paragraph/Paragraph.component";

export interface SkeletonParagraphProps {
    lines?: number;
    size?: ParagraphSize;
    lineHeight?: Exclude<ParagraphLineHeights, "auto">;
    color?: string;
    marginBottom?: number;
    width?: number;
    opacity?: number;
}
