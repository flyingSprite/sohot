import 'Roboto-fontface';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './src/containers/app';

import configureStore from './src/store/configureStore';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
