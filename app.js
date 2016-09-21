// Styles - Public
import 'roboto-fontface';
import 'material-design-icons';

import './src/asserts/index.css';


// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Store
import configureStore from './src/store/configureStore';
// Routes
import appRoutes from './src/routes/appRoutes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      {appRoutes(store)}
  </Provider>,
  document.getElementById('root')
);

