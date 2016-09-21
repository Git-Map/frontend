import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { RouterProvider } from 'redux-little-router';

import App from './container/App';
import createStore from './state/createStore';

import './lib/open-sans-fontface/open-sans.scss';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <App/>
    </RouterProvider>
  </Provider>,
  document.getElementById('container')
);
