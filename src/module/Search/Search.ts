import { createReducer } from 'typesafe-actions';
import {
  getSearchAsync,
  SEARCH,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
} from './action';

import createAsyncSaga from '../../lib/utils/createSaga';
import * as api from '../../lib/api/api';
import { takeLatest } from 'redux-saga/effects';

import { SearchState, SearchAction } from './type';

const initialState: SearchState = {
  data: null,
  error: null,
};

const getSearchSaga = createAsyncSaga(getSearchAsync, api.getSearch);

export function* searchSaga() {
  yield takeLatest(SEARCH, getSearchSaga);
}

const search = createReducer<SearchState, SearchAction>(initialState, {
  [SEARCH_SUCCESS]: (state, action) => ({
    data: action.payload,
    error: null,
  }),
  [SEARCH_FAILURE]: (state, action) => ({
    data: null,
    error: action.payload,
  }),
});

export default search;
