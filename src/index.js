import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';
import App from './components/App';

const logger = createLogger({
  level: 'debug'
});

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  Reducers,
  compose(
    applyMiddleware(logger, sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('container')
);
