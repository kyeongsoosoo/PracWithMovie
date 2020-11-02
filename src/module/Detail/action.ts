import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import * as apiType from '../../lib/api/apiType';

export const DETAIL = 'detail/detail';
export const DETAIL_SUCCESS = 'detail/detail_success';
export const DETAIL_FAILURE = 'datail/detail_failure';

export const DETAIL_RESET = 'detail/detail_reset';

export const detailReset = createAction(DETAIL_RESET)();

export const getDetailAsync = createAsyncAction(
  DETAIL,
  DETAIL_SUCCESS,
  DETAIL_FAILURE,
)<string, apiType.detail_Result, AxiosError>();

export const actions = { getDetailAsync, detailReset };
