import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as apiType from '../../lib/api/apiType';
import { actions } from './action';

// 액션과 state에 관련한 타입은 type.ts에 넣지 않고, SearchAction은 acion 파일에, SearchState 타입은 Search.ts에 넣어주시는게
// 각 파일에서 바로바로 타입을 확인할 수 있어서 좋습니다.
export type SearchAction = ActionType<typeof actions>;

export type SearchState = {
  data: apiType.movie_nowPlaying | null;
  error: AxiosError | null;
};
