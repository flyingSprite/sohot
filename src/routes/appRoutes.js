// Libraries
import React from 'react';
import { Router, Route, browserHistory  } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';

// import App from '../containers/app/app.js';
import Main from '../Containers/main/main.js';
import FieldDesignShow from '../Containers/field-design/show.js';
import Counter from '../Containers/counter/counter.js';
import Components from '../Containers/Components/Components.js';

import {
  MaterialDesignIconView
} from '../Containers/Library';

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
      <Route path="counter" component={Counter} />
      <Route path="components" component={Components} />
      <Route path="show" component={FieldDesignShow} />
      <Route path="library">
        <Route path="material-design-icon" component={MaterialDesignIconView} />
      </Route>
      <Route path="plugin">
        <Route path="full-calendar" component={FullCalendarView} />
      </Route>
      <Route path="form-elements">
        <Route path="input" component={InputView} />
      </Route>
    </Route>
  </Router>
);

export default appRoutes;