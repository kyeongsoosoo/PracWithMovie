import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as apiType from '../../lib/api/apiType';
import { actions } from './action';

export type SearchAction = ActionType<typeof actions>;

export type SearchState = {
  data: apiType.movie_nowPlaying | null;
  error: AxiosError | null;
};
