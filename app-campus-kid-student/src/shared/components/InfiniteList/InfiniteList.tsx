import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useBuildStyles } from '@shared_hooks';

import { styleSheet } from './styles';

interface ListItem {
  id: number | string;
}

interface Props<T extends ListItem> {
  data: T[];
  onLoadMore: (page: number) => Promise<number>;
  renderItem: (item: T) => ReactElement;
}

function InfiniteList<T extends ListItem>({ data, onLoadMore, renderItem }: Props<T>) {
  const page = useRef(0);
  const totalPages = useRef(0);
  const [isLoading, setIsLoading] = useState(false);

  const styles = useBuildStyles(styleSheet);

  const LoadItems = useCallback(async () => {
    if (isLoading || page.current > totalPages.current) return;
    setIsLoading(true);
    page.current = page.current + 1;
    totalPages.current = await onLoadMore(page.current);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    LoadItems();
  }, []);
  return (
    <FlatList
      columnWrapperStyle={styles.columnWrapper}
      data={data}
      keyExtractor={item => `${item.id}`}
      onEndReached={LoadItems}
      onEndReachedThreshold={0.1}
      numColumns={2}
      keyboardShouldPersistTaps="always"
      renderItem={({ item }) => renderItem(item)}
      ListFooterComponent={() => {
        if (!isLoading) return null;
        return (
          <View style={styles.listFooter}>
            <ActivityIndicator animating size="large" />
          </View>
        );
      }}
    />
  );
}
export default InfiniteList;
