import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as apiType from '../../lib/api/apiType';
import { actions } from './action';

export type DetailAction = ActionType<typeof actions>;

export type DetailState = {
  data: apiType.detail_Result | null;
  error: AxiosError | null;
};
