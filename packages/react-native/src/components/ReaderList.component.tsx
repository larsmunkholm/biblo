import React from "react";
import { View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderItem } from "./ReaderItem.component";
import { Separator as DefaultSeparator } from "./Separator.component";
import { BibloFile } from "../interfaces/Biblo.interface";
import { ReaderHeader } from "./ReaderHeader.component";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";

interface Props {
    file: BibloFile;
}

export const ReaderList = React.memo(({ file }: Props) => {
    const { readerOptions, disableDefaultStyles: disableDefaultStylesGlobal } =
        useBiblo();
    const { items, ...bio } = file;
    const disableDefaultStyles =
        disableDefaultStylesGlobal || readerOptions.disableDefaultStyles;
    const disableFooterSeparator =
        readerOptions.disableFooterSeparator ||
        (!readerOptions.footerStyle && !readerOptions.footerComponent);

    const Footer = (readerOptions.footerComponent || View) as NonNullable<
        ReaderOptions["footerComponent"]
    >;
    const Separator = (readerOptions.separator ||
        ((props: any) => (
            <DefaultSeparator
                disableDefaultStyles={disableDefaultStyles}
                {...props}
            />
        ))) as NonNullable<ReaderOptions["separator"]>;

    return (
        <>
            {/** Component header */}
            <ReaderHeader bio={bio} />

            {items.map((item, index) => (
                <View key={index}>
                    {/** Separator */}
                    {(index > 0 || !readerOptions.disableHeaderSeparator) && (
                        <Separator
                            index={
                                index -
                                (readerOptions.disableHeaderSeparator ? 1 : 0)
                            }
                            isFirst={
                                index ===
                                (readerOptions.disableHeaderSeparator ? 1 : 0)
                            }
                            isLast={
                                disableFooterSeparator
                                    ? index === items.length - 1
                                    : false
                            }
                            style={readerOptions.separatorStyle}
                        />
                    )}

                    {/** Component item */}
                    <ReaderItem
                        index={index}
                        isFirst={index === 0}
                        isLast={index === items.length - 1}
                        Component={item.component}
                        props={{ ...bio.props, ...item.component.props }}
                        Wrapper={item.component.wrapper || bio.wrapper}
                        wrapperStyle={[
                            bio.wrapperStyle,
                            item.component.wrapperStyle,
                        ]}
                        title={
                            item.component.title === ""
                                ? null
                                : item.component.title || item.title
                        }
                        originalTitle={item.originalTitle}
                        description={item.component.description}
                        bio={bio}
                    />
                </View>
            ))}

            {/** Separator */}
            {disableFooterSeparator || (
                <Separator index={items.length} isFirst={false} isLast={true} />
            )}

            {/** Footer */}
            <Footer bio={bio} style={readerOptions.footerStyle} />
        </>
    );
});

ReaderList.displayName = "ReaderList";