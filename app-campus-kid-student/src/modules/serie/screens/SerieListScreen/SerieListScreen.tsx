import React, { memo, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigate } from '@shared_hooks';

import { InfiniteList } from '@shared_components';
import { Routes } from '@shared_constants';
import { NavigateActionEnum } from '@shared_enums';
import { useFetchSeries } from '@modules/serie/hooks';
import { SerieCard } from '@modules/serie/components';

const SerieListScreen = () => {
  const [query] = useState('');
  const navigate = useNavigate();

  const { fetchSeries, serieList } = useFetchSeries();

  const fetchMoviesByPage = useCallback(async (page: number) => {
    const movieResponse = await fetchSeries({ page: page, query });
    return movieResponse.total_pages;
  }, []);

  return (
    <SafeAreaView>
      <InfiniteList
        data={serieList}
        onLoadMore={fetchMoviesByPage}
        renderItem={serie => (
          <SerieCard
            serie={serie}
            onPress={() =>
              navigate(Routes.SERIES.SERIE_DETAIL, { serieId: serie.id }, NavigateActionEnum.PUSH)
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(SerieListScreen);
