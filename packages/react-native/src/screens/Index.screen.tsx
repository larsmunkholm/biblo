import React, { useMemo } from "react";
import { Animated, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { IndexHeader } from "../components/IndexHeader.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";
import { IndexSectionHeader } from "../components/IndexSectionHeader.component";
import { IndexItem } from "../components/IndexItem.component";

export const IndexScreen = () => {
    const {
        items,
        searchValue,
        selectedTags,
        indexOptions,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;
    const filteredItems: typeof items = useMemo(() => {
        const lowerCaseQuery = searchValue.toLowerCase();
        return lowerCaseQuery || selectedTags.length
            ? [...items].map((section) => ({
                  ...section,
                  data: section.data.filter((exports) => {
                      let skip = false;
                      if (selectedTags.length) {
                          skip = !selectedTags.some((tag) =>
                              exports.tags?.includes(tag),
                          );
                      }
                      if (lowerCaseQuery) {
                          skip =
                              skip ||
                              !(
                                  exports.title
                                      .toLowerCase()
                                      .includes(lowerCaseQuery) ||
                                  exports.subtitle
                                      ?.toLowerCase()
                                      .includes(lowerCaseQuery) ||
                                  exports.searchTerms?.some((term) =>
                                      term.includes(lowerCaseQuery),
                                  )
                              );
                      }
                      return !skip;
                  }),
              }))
            : items;
    }, [items, searchValue, selectedTags]);

    const Wrapper = (indexOptions.wrapperComponent || View) as NonNullable<
        IndexOptions["wrapperComponent"]
    >;
    const SectionFooter = (indexOptions.sectionFooterComponent ||
        View) as NonNullable<IndexOptions["sectionFooterComponent"]>;
    const Footer = (indexOptions.footerComponent || View) as NonNullable<
        IndexOptions["footerComponent"]
    >;

    return (
        <Wrapper
            style={[
                disableDefaultStyles ? {} : { flex: 1 },
                indexOptions.wrapperStyle,
            ]}
        >
            <Animated.SectionList
                sections={filteredItems}
                keyExtractor={(_, index) => `item-${index}`}
                stickySectionHeadersEnabled
                ListHeaderComponent={IndexHeader}
                ListFooterComponent={() => (
                    <Footer style={indexOptions.footerStyle} />
                )}
                renderSectionHeader={({ section }) => (
                    <IndexSectionHeader
                        title={section.title}
                        itemsCount={section.data.length}
                    />
                )}
                renderSectionFooter={({ section }) =>
                    section.data.length ? (
                        <SectionFooter
                            title={section.title}
                            itemsCount={section.data.length}
                            style={[
                                { height: indexOptions.sectionListItemHeight },
                                indexOptions.sectionFooterStyle,
                            ]}
                        />
                    ) : null
                }
                renderItem={({ item }) => <IndexItem item={item} />}
                getItemLayout={(data, index) => ({
                    length: indexOptions.sectionListItemHeight,
                    offset:
                        (indexOptions.sectionListItemHeight as number) * index,
                    index,
                })}
                {...(indexOptions.sectionListProps as any)}
            />
        </Wrapper>
    );
};
