import { useQuery } from '@shared_hooks';
import { MovieService } from '@shared_services';
import { useEffect } from 'react';
import { DetailRequest } from 'src/shared/services/MovieService/types';

const useFetchMovieDetail = (id?: number) => {
  const [fetchMovieDetail, isFetchingMovieDetail = !!id, fetchMovieDetailError, movieDetail] =
    useQuery(async (request: DetailRequest) => MovieService.fetchDetail(request), []);


  useEffect(() => {
    if (id) fetchMovieDetail({ id });
  }, []);
  
  return { fetchMovieDetail, isFetchingMovieDetail, fetchMovieDetailError, movieDetail };
};
export default useFetchMovieDetail;
