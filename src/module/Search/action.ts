import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { movie_nowPlaying } from '../../lib/api/apiType';
import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from './Search';

export const getSearchAsync = createAsyncAction(
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
)<string, movie_nowPlaying, AxiosError>();

export const actions = { getSearchAsync };
