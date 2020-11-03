import { createAction, createReducer } from 'typesafe-actions';

const SELECT = 'select/select';

export const selectSuccess = createAction(SELECT)<PosterProp>();

type SelectAction = ReturnType<typeof selectSuccess>;

export type PosterProp = {
  bgUrl: string;
  rating: number;
  title: string;
  id: string;
};

type SelectState = PosterProp[];

const initialState: SelectState = [];

const select = createReducer<SelectState, SelectAction>(initialState, {
  [SELECT]: (state, action) => [...initialState, action.payload],
});

export default select;
