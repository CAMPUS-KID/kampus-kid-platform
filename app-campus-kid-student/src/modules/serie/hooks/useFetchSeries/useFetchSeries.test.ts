import { renderHook, act } from '@testing-library/react-hooks';
import { mockSerieListing } from '@test_shared';
import useFetchSeries from './useFetchSeries';

describe('useFetchSeries', () => {
  it('should fetch by query', () => {
    const { result } = renderHook(() => useFetchSeries());
    const { fetchSeries } = result.current;
    act(async () => {
      const fetchResult = await fetchSeries({ page: 1, query: 'query' });
      expect(fetchResult).toEqual(mockSerieListing[0]);
    });
  });
});
