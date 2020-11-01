import { createReducer } from 'typesafe-actions';

import * as api from '../../lib/api/api';

import { takeLatest } from 'redux-saga/effects';
import { MovieAction, MovieState } from './type';
import {
  getMovieNowPlaingAsync,
  getMoviePopularAsync,
  getMovieUpcomingAsync,
  GET_MOVIE_NOW_PALYING,
  GET_MOVIE_NOW_PALYING_FAILURE,
  GET_MOVIE_NOW_PALYING_SUCCESS,
  GET_MOVIE_POPULAR,
  GET_MOVIE_POPULAR_FAILURE,
  GET_MOVIE_POPULAR_SUCCESS,
  GET_MOVIE_UPCOMING,
  GET_MOVIE_UPCOMING_FAILURE,
  GET_MOVIE_UPCOMING_SUCCESS,
} from './actions';
import createAsyncSaga from '../../lib/utils/createSaga';

const initialState: MovieState = {
  data: {
    nowPlaying: null,
    upcoming: null,
    popular: null,
  },
  error: null,
};

const getMovieNowPlayingSaga = createAsyncSaga(
  getMovieNowPlaingAsync,
  api.moviesApi.nowPlaying,
);
const getMoviePopularSaga = createAsyncSaga(
  getMoviePopularAsync,
  api.moviesApi.popular,
);
const getMovieUpcomingSaga = createAsyncSaga(
  getMovieUpcomingAsync,
  api.moviesApi.upcoming,
);

export function* movieSaga() {
  yield takeLatest(GET_MOVIE_NOW_PALYING, getMovieNowPlayingSaga);
  yield takeLatest(GET_MOVIE_POPULAR, getMoviePopularSaga);
  yield takeLatest(GET_MOVIE_UPCOMING, getMovieUpcomingSaga);
}

const movie = createReducer<MovieState, MovieAction>(initialState, {
  [GET_MOVIE_NOW_PALYING]: state => ({
    ...state,

    error: null,
  }),
  [GET_MOVIE_NOW_PALYING_SUCCESS]: (state, action) => {
    console.log('done');
    return {
      data: {
        ...state.data,
        nowPlaying: action.payload,
      },

      error: null,
    };
  },
  [GET_MOVIE_NOW_PALYING_FAILURE]: (state, action) => ({
    ...state,

    error: action.payload,
  }),
  [GET_MOVIE_POPULAR]: state => ({
    ...state,

    error: null,
  }),
  [GET_MOVIE_POPULAR_SUCCESS]: (state, action) => ({
    data: {
      ...state.data,
      popular: action.payload,
    },

    error: null,
  }),
  [GET_MOVIE_POPULAR_FAILURE]: (state, action) => ({
    ...state,

    error: action.payload,
  }),
  [GET_MOVIE_UPCOMING]: state => ({
    ...state,

    error: null,
  }),
  [GET_MOVIE_UPCOMING_SUCCESS]: (state, action) => ({
    data: {
      ...state.data,
      upcoming: action.payload,
    },

    error: null,
  }),
  [GET_MOVIE_UPCOMING_FAILURE]: (state, action) => ({
    ...state,

    error: action.payload,
  }),
});

export default movie;
