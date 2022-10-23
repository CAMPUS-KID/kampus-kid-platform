import { renderHook, act } from '@testing-library/react-hooks';
import { mockMovieListing } from '@test_shared';
import useFetchMovies from './useFetchMovies';

describe('useFetchMovies', () => {
  it('should fetch by query', () => {
    const { result } = renderHook(() => useFetchMovies());
    const { fetchMovies } = result.current;
    act(async () => {
      const fetchResult = await fetchMovies({ page: 1, query: 'query' });
      expect(fetchResult).toEqual(mockMovieListing[0]);
    });
  });
});
