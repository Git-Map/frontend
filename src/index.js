import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { createStoreWithRouter, RouterProvider } from 'redux-little-router';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';
import App from './container/App';

import './lib/open-sans-fontface/open-sans.scss';

const routes = {
  '/': {
    title: 'Home'
  },
  '/map': {
    title: 'Map'
  }
};

const loggerMiddleware = createLogger({
  level:'debug',
  collapsed:true,
});

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  Reducers,
  compose(
    applyMiddleware(loggerMiddleware),
    applyMiddleware(sagaMiddleware),
    createStoreWithRouter({
      routes,
      pathname: window.location.pathname
    }),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <App/>
    </RouterProvider>
  </Provider>,
  document.getElementById('container')
);
