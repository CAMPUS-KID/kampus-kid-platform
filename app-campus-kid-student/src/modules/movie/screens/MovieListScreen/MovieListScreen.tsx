import React, { memo, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFetchMovies } from '@modules/movie/hooks';
import { useNavigate } from '@shared_hooks';

import { InfiniteList } from '@shared_components';
import { MovieCard } from '@modules/movie/components';
import { Routes } from '@shared_constants';
import { NavigateActionEnum } from '@shared_enums';

const MovieListScreen = () => {
  const [query] = useState('');
  const navigate = useNavigate();

  const { fetchMovies, movieList } = useFetchMovies();

  const fetchMoviesByPage = useCallback(async (page: number) => {
    const movieResponse = await fetchMovies({ page: page, query });
    return movieResponse.total_pages;
  }, []);

  return (
    <SafeAreaView>
      <InfiniteList
        data={movieList}
        onLoadMore={fetchMoviesByPage}
        renderItem={movie => (
          <MovieCard
            movie={movie}
            onPress={() =>
              navigate(Routes.MOVIES.MOVIE_DETAIL, { movieId: movie.id }, NavigateActionEnum.PUSH)
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(MovieListScreen);
