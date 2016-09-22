// Libraries
import React from 'react';
import { Router, Route, browserHistory  } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';

// import App from '../containers/app/app.js';
import Main from '../Containers/main/main.js';

import {
  MaterialDesignIconView
} from '../Containers/Library';

import {
  AsyncValidationView,
  SimpleFormView,
  SyncValidationView
} from '../Containers/Library/ReduxForm';

import {
  FullCalendarView
} from '../Containers/Plugin';

import {
  InputView
} from '../Containers/FormElements';

// Modify url http://localhost:8080/#/?_k=fa2fff to http://localhost:8080/
// Use createBrowserHistory()

const appRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="library">
        <Route path="material-design-icon" component={MaterialDesignIconView} />
      </Route>
      <Route path="plugin">
        <Route path="full-calendar" component={FullCalendarView} />
      </Route>
      <Route path="form-elements">
        <Route path="input" component={InputView} />
      </Route>
      <Route path="redux-form">
        <Route path="simple" component={SimpleFormView} />
        <Route path="syncValidation" component={SyncValidationView} />
        <Route path="asyncValidation" component={AsyncValidationView} />
      </Route>
    </Route>
  </Router>
);

export default appRoutes;