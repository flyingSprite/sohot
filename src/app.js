// Styles - Public
import 'roboto-fontface';
import 'material-design-icons';

import './asserts/index.css';


// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Store
import configureStore from './store/configureStore';
// Routes
// import appRoutes from './routes/appRoutes';

import RootRouter from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      {/* appRoutes(store) */}
      <RootRouter />
  </Provider>,
  document.getElementById('root')
);
