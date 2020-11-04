import createSagaMiddleware from '@redux-saga/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import App from './components/App';
import { GlobalStyle } from './lib/css/GlobalStyle';
import rootReducer, { rootSaga } from './module';
import { loginFalse, loginSuccess } from './module/Login/login';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const loginCheck = () => {
  //  'user' 대신에 unique할 수 있는 key값을 사용하면 좋습니다. 혹여 겹칠 수도 있으니까요
  const user = localStorage.getItem('user');
  // user를 검증할 수 있다면 더 좋습니다. 물론 서버가 있을 때의 이야기지만..
  if (user) {
    store.dispatch(loginSuccess());
  } else {
    store.dispatch(loginFalse());
  }
};

sagaMiddleware.run(rootSaga);
loginCheck();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
