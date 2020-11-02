import axios from 'axios';

import * as apiType from './apiType';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'fcc0b5d14e31fa7cd6e898dfafc8611b',
    language: 'en-US',
  },
});

export async function getNowPlaying(payload: string) {
  const response = await api.get<apiType.movie_nowPlaying>('movie/now_playing');

  return response.data;
}

export async function getpopular(payload: string) {
  const response = await api.get<apiType.movie_popular>('movie/popular');

  return response.data;
}
export async function getUpcoming(payload: string) {
  const response = await api.get<apiType.movie_upcoming>('movie/upcoming');

  return response.data;
}
export async function getSearch(payload: string) {
  const response = await api.get<apiType.movie_nowPlaying>('search/movie', {
    params: {
      query: encodeURIComponent(payload),
    },
  });

  return response.data;
}

export async function getDetail(payload: string) {
  const response = await api.get<apiType.detail_Result>(`movie/${payload}`, {
    params: {
      append_to_response: 'videos',
    },
  });
  return response.data;
}

export const moviesApi = {
  nowPlaying: async (payload: string) => getNowPlaying(payload),
  upcoming: (payload: string) => getUpcoming(payload),
  popular: (payload: string) => getpopular(payload),
  movieDetail: (id: string) => getDetail(id),
  search: (term: string) => getSearch(term),
};
