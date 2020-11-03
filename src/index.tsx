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
  const user = localStorage.getItem('user');
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
