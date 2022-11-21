import React from "react";
import { View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { ReaderItem } from "./ReaderItem.component";
import { Separator as DefaultSeparator } from "./Separator.component";
import { BibloItem } from "../interfaces/Biblo.interface";
import { ReaderHeader } from "./ReaderHeader.component";
import { ReaderOptions } from "../interfaces/ReaderOptions.interface";

interface Props {
    item: BibloItem;
}

export const ReaderList = React.memo(({ item }: Props) => {
    const { readerOptions, disableDefaultStyles: disableDefaultStylesGlobal } =
        useBiblo();
    const { books, ...bio } = item;
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

            {books.map((book, index) => (
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
                                    ? index === books.length - 1
                                    : false
                            }
                            style={readerOptions.separatorStyle}
                        />
                    )}

                    {/** Component item */}
                    <ReaderItem
                        index={index}
                        isFirst={index === 0}
                        isLast={index === books.length - 1}
                        Component={book.component}
                        args={{ ...bio.args, ...book.component.args }}
                        Wrapper={book.component.wrapper || bio.wrapper}
                        wrapperStyle={[
                            bio.wrapperStyle,
                            book.component.wrapperStyle,
                        ]}
                        title={
                            book.component.title === ""
                                ? null
                                : book.component.title ||
                                  book.title
                                      .replace(/([A-Z]+)/g, " $1")
                                      .replace(/([A-Z][a-z])/g, " $1")
                                      .trim()
                        }
                        description={book.component.description}
                        bio={bio}
                    />
                </View>
            ))}

            {/** Separator */}
            {disableFooterSeparator || (
                <Separator index={books.length} isFirst={false} isLast={true} />
            )}

            {/** Footer */}
            <Footer bio={bio} style={readerOptions.footerStyle} />
        </>
    );
});

ReaderList.displayName = "ReaderList";
