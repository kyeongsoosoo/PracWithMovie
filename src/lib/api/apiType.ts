export interface movie_nowPlaying {
  page: number;
  results: nowPlaying_Result[];
  dates: Dates;
  total_pages: number;
  total_results: number;
}

// 네이밍 시에 _ 쓰지 마세요
// api 내부에서 받아오는 데이터의 경우 어쩔 수 없지만
// 저는 이런 데이터들도 최대한 camelCase로 변환하는 편입니다.
export interface nowPlaying_Result {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: OriginalLanguage;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface movie_popular {
  page: number;
  total_results: number;
  total_pages: number;
  results: popular_Result[];
}

export interface popular_Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: OriginalLanguage;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: Date;
}

export interface movie_upcoming {
  results: upcoming_Result[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface upcoming_Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: null | string;
  original_language: OriginalLanguage;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: Date;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

// 이런 것들은 constants 폴더를 빼고 OriginalLanguage.ts 파일을 만들어서 import 해주세요
export enum OriginalLanguage {
  En = 'en',
  Sv = 'sv',
  Es = 'es',
  Ja = 'ja',
  Ko = 'ko',
  It = 'it',
  Zh = 'zh',
}

export interface detail_Result {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}
