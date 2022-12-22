import React from "react";
import { View } from "react-native";
import { useBiblo } from "../../hooks/Biblo.hook";
import { ReaderItem } from "./ReaderItem.component";
import { Separator as DefaultSeparator } from "../Separator.component";
import { BibloFile } from "../../interfaces/Biblo.interface";
import { ReaderHeader } from "./ReaderHeader.component";
import { ReaderOptions } from "../../interfaces/ReaderOptions.interface";
import { PropsProvider } from "../../hooks/Props.hook";
import { ItemPropsProvider } from "../../hooks/ItemProps.hook";

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
        readerOptions.footerSeparatorHidden ||
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
        <PropsProvider props={bio.props} propTypes={bio.propTypes}>
            {/** Component header */}
            <ReaderHeader bio={bio} />

            {items.map((item, index) => (
                <View key={index}>
                    {/** Separator */}
                    {(index > 0 || !readerOptions.headerSeparatorHidden) && (
                        <Separator
                            index={
                                index -
                                (readerOptions.headerSeparatorHidden ? 1 : 0)
                            }
                            isFirst={
                                index ===
                                (readerOptions.headerSeparatorHidden ? 1 : 0)
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
                    <ItemPropsProvider
                        props={item.component.props}
                        propTypes={item.component.propTypes}
                    >
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
                    </ItemPropsProvider>
                </View>
            ))}

            {/** Separator */}
            {disableFooterSeparator || (
                <Separator index={items.length} isFirst={false} isLast={true} />
            )}

            {/** Footer */}
            <Footer bio={bio} style={readerOptions.footerStyle} />
        </PropsProvider>
    );
});

ReaderList.displayName = "ReaderList";
