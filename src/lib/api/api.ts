import axios from 'axios';
import { async } from 'q';

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

export const moviesApi = {
  nowPlaying: async (payload: string) => getNowPlaying(payload),
  upcoming: (payload: string) => getUpcoming(payload),
  popular: (payload: string) => getpopular(payload),
  movieDetail: (id: string) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term: string) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
