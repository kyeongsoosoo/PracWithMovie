import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { movie_nowPlaying } from '../../lib/api/apiType';

export const SEARCH = 'search/search';
export const SEARCH_SUCCESS = 'search/search_success';
export const SEARCH_FAILURE = 'search/search_failure';

export const getSearchAsync = createAsyncAction(
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
)<string, movie_nowPlaying, AxiosError>();

export const actions = { getSearchAsync };
