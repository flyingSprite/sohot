import 'Roboto-fontface';
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
