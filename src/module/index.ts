import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import detail, { detailSaga } from './Detail/Detail';
import login from './Login/login';
import movie, { movieSaga } from './Movie/movie';
import search, { searchSaga } from './Search/Search';
import select from './Select/Select';

const rootReducer = combineReducers({
  movie,
  search,
  detail,
  login,
  select,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([movieSaga(), searchSaga(), detailSaga()]);
}
