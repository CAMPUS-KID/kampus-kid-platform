export type ListingRequest = {
  page: number;
};

export type ListingResponse<TElement> = {
  page: number;
  results: TElement[];
  total_pages: number;
  total_results: number;
};

export type ListingMovieElement = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ListingMovieResponse = ListingResponse<ListingMovieElement>;

export type SearchingRequest = {
  page: number;
  query: string;
};

export type DetailRequest = {
  id: number;
};

export type IGenre = { id: number; name: string };

export type ILanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type ICompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ICountry = {
  iso_3166_1: string;
  name: string;
};

export type MovieDetailResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ICompany[];
  production_countries: ICountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
