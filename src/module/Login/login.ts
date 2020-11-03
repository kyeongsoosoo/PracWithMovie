import { ActionType, createAction, createReducer } from 'typesafe-actions';

const LOGIN_SUCCESS = 'login/success';
const LOGIN_FALSE = 'login/false';

export const loginSuccess = createAction(LOGIN_SUCCESS)();
export const loginFalse = createAction(LOGIN_FALSE)();

const actions = { loginFalse, loginSuccess };

type LoginAction = ActionType<typeof actions>;

type LoginState = {
  user: boolean;
};

const initailState: LoginState = {
  user: false,
};

const login = createReducer<LoginState, LoginAction>(initailState, {
  [LOGIN_SUCCESS]: () => ({
    user: true,
  }),
  [LOGIN_FALSE]: () => ({
    user: false,
  }),
});

export default login;
