import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import sharedReducers from '../modules/shared/state/reducers';
import sharedSagas from '../modules/shared/state/sagas';
import routes from './routes';


const loggerMiddleware = createLogger({
    level:'debug',
    collapsed:true,
});

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    shared:sharedReducers
});

const routerOptions = {
    routes
};

const {
  routerEnhancer,
  routerMiddleware
} = routerForBrowser(routerOptions);

export default () => {
    const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(loggerMiddleware),
      routerEnhancer,
      applyMiddleware(routerMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

    sagaMiddleware.run(sharedSagas);

    return store;
};

