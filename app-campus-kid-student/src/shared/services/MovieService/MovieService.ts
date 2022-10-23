import { ApiAssistant } from '@shared_assistants';
import {
  DetailRequest,
  ListingMovieResponse,
  ListingRequest,
  MovieDetailResponse,
  SearchingRequest
} from './types';

const BASE_ENDPOINT = '/movie';
const BASE_SEARCH_ENDPOINT = '/search/movie';

const fetchPopular = (request: ListingRequest): Promise<ListingMovieResponse> =>
  ApiAssistant.makeRequest(`${BASE_ENDPOINT}/popular`, request);

const search = (request: SearchingRequest): Promise<ListingMovieResponse> =>
  ApiAssistant.makeRequest(`${BASE_SEARCH_ENDPOINT}`, request);

const fetchDetail = (request: DetailRequest): Promise<MovieDetailResponse> =>
  ApiAssistant.makeRequest(`${BASE_ENDPOINT}/${request.id}`);

export default { fetchPopular, search, fetchDetail };
