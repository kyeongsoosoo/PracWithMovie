import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import * as apiType from '../../lib/api/apiType';

export const GET_MOVIE_NOW_PALYING = 'movie/get_movie_nowPlaying';

export const GET_MOVIE_NOW_PALYING_SUCCESS =
  'movie/get_movie_nowPlaying_SUCCESS';
export const GET_MOVIE_NOW_PALYING_FAILURE =
  'movie/get_movie_nowPlaying_FAILURE';

export const GET_MOVIE_POPULAR = 'movie/get_movie_popular';

export const GET_MOVIE_POPULAR_SUCCESS = 'movie/get_movie_popular_SUCCESS';
export const GET_MOVIE_POPULAR_FAILURE = 'movie/get_movie_popular_FAILURE';

export const GET_MOVIE_UPCOMING = 'movie/get_movie_upcoming';

export const GET_MOVIE_UPCOMING_SUCCESS = 'movie/get_movie_upcoming_SUCCESS';
export const GET_MOVIE_UPCOMING_FAILURE = 'movie/get_movie_upcoming_FAILURE';

export const getMovieNowPlaingAsync = createAsyncAction(
  GET_MOVIE_NOW_PALYING,
  GET_MOVIE_NOW_PALYING_SUCCESS,
  GET_MOVIE_NOW_PALYING_FAILURE,
)<string, apiType.movie_nowPlaying, AxiosError>();

export const getMoviePopularAsync = createAsyncAction(
  GET_MOVIE_POPULAR,
  GET_MOVIE_POPULAR_SUCCESS,
  GET_MOVIE_POPULAR_FAILURE,
)<string, apiType.movie_popular, AxiosError>();

export const getMovieUpcomingAsync = createAsyncAction(
  GET_MOVIE_UPCOMING,
  GET_MOVIE_UPCOMING_SUCCESS,
  GET_MOVIE_UPCOMING_FAILURE,
)<string, apiType.movie_upcoming, AxiosError>();

export const actions = {
  getMovieNowPlaingAsync,
  getMoviePopularAsync,
  getMovieUpcomingAsync,
};
