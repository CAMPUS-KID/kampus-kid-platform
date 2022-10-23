import { useQuery } from '@shared_hooks';
import { MovieService } from '@shared_services';
import { useRef } from 'react';
import { ListingMovieElement, SearchingRequest } from 'src/shared/services/MovieService/types';

const useFetchMovies = () => {
  const movieList = useRef<ListingMovieElement[]>([]);
  const search = useRef('');
  const [fetchMovies, isFetchingMovies, fetchMoviesError] = useQuery(
    async (request: SearchingRequest) => {
      if (search.current !== request.query.trim()) {
        movieList.current = [];
        search.current = request.query.trim();
      }
      if (search.current) {
        const result = await MovieService.search({ ...request, query: search.current });
        movieList.current = [...movieList.current, ...result.results];
        return result;
      }
      const result = await MovieService.fetchPopular(request);
      movieList.current = [...movieList.current, ...result.results];
      return result;
    },
    [],
    true
  );
  return { fetchMovies, isFetchingMovies, fetchMoviesError, movieList: movieList.current };
};
export default useFetchMovies;
