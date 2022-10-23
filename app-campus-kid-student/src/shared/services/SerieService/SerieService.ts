import { ApiAssistant } from '@shared_assistants';
import { DetailRequest, ListingRequest, SearchingRequest } from '../MovieService/types';
import { ListingSerieResponse, SerieDetailResponse } from './types';

const BASE_ENDPOINT = '/tv';
const BASE_SEARCH_ENDPOINT = '/search/tv';

const fetchPopular = (request: ListingRequest): Promise<ListingSerieResponse> =>
  ApiAssistant.makeRequest(`${BASE_ENDPOINT}/popular`, request);

const search = (request: SearchingRequest): Promise<ListingSerieResponse> =>
  ApiAssistant.makeRequest(`${BASE_SEARCH_ENDPOINT}`, request);

const fetchDetail = (request: DetailRequest): Promise<SerieDetailResponse> =>
  ApiAssistant.makeRequest(`${BASE_ENDPOINT}/${request.id}`);

export default { fetchPopular, search, fetchDetail };
