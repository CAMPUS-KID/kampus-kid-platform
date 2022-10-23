import { useQuery } from '@shared_hooks';
import { SerieService } from '@shared_services';
import { useEffect } from 'react';
import { DetailRequest } from 'src/shared/services/MovieService/types';

const useFetchSerieDetail = (id?: number) => {
  const [fetchSerieDetail, isFetchingSerieDetail = !!id, fetchSerieDetailError, serieDetail] =
    useQuery(async (request: DetailRequest) => SerieService.fetchDetail(request), []);
  useEffect(() => {
    if (id) fetchSerieDetail({ id });
  }, []);
  return { fetchSerieDetail, isFetchingSerieDetail, fetchSerieDetailError, serieDetail };
};
export default useFetchSerieDetail;
