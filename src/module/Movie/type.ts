import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';

import * as apiType from '../../lib/api/apiType';
import { actions, getMovieNowPlaingAsync } from './actions';

export type MovieAction = ActionType<typeof actions>;

export type MovieState = {
  data: {
    nowPlaying: apiType.movie_nowPlaying | null;
    upcoming: apiType.movie_upcoming | null;
    popular: apiType.movie_popular | null;
  };
  error: AxiosError | null;
};
