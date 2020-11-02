import {
  ActionType,
  createAction,
  createAsyncAction,
  createReducer,
} from 'typesafe-actions';

import createAsyncSaga from '../../lib/utils/createSaga';
import * as api from '../../lib/api/api';
import { AxiosError } from 'axios';
import { takeLatest } from 'redux-saga/effects';
import {
  DETAIL,
  DETAIL_FAILURE,
  DETAIL_RESET,
  DETAIL_SUCCESS,
  getDetailAsync,
} from './action';
import { DetailState, DetailAction } from './type';

const getDetailSaga = createAsyncSaga(getDetailAsync, api.getDetail);

export function* detailSaga() {
  yield takeLatest(DETAIL, getDetailSaga);
}

const initialState: DetailState = {
  data: null,
  error: null,
};

const detail = createReducer<DetailState, DetailAction>(initialState, {
  [DETAIL_SUCCESS]: (state, action) => ({
    data: action.payload,
    error: null,
  }),
  [DETAIL_FAILURE]: (state, action) => ({
    data: null,
    error: action.payload,
  }),
  [DETAIL_RESET]: state => ({
    data: null,
    error: null,
  }),
});

export default detail;
