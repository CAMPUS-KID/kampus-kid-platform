import { useQuery } from '@shared_hooks';
import { SerieService } from '@shared_services';
import { useRef } from 'react';
import { SearchingRequest } from 'src/shared/services/MovieService/types';
import { ListingSerieElement } from 'src/shared/services/SerieService/types';

const useFetchSeries = () => {
  const serieList = useRef<ListingSerieElement[]>([]);
  const search = useRef('');
  const [fetchSeries, isFetchingSeries, fetchSeriesError] = useQuery(
    async (request: SearchingRequest) => {
      if (search.current !== request.query.trim()) {
        serieList.current = [];
        search.current = request.query.trim();
      }
      if (search.current) {
        const result = await SerieService.search({ ...request, query: search.current });
        serieList.current = [...serieList.current, ...result.results];
        return result;
      }
      const result = await SerieService.fetchPopular(request);
      serieList.current = [...serieList.current, ...result.results];
      return result;
    },
    [],
    true
  );
  return { fetchSeries, isFetchingSeries, fetchSeriesError, serieList: serieList.current };
};
export default useFetchSeries;
