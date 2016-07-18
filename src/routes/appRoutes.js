// Libraries
import React from 'react';
import { Router, Route, browserHistory  } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from '../containers/app/app.js';
import Main from '../containers/main/main.js';
import FieldDesignShow from '../containers/field-design/show.js';
import Counter from '../containers/counter/counter.js';
import Calendar from '../containers/calendar/calendar.js';


// Modify url http://localhost:8080/#/?_k=fa2fff to http://localhost:8080/
// Use createBrowserHistory()

const appRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="main" component={Main}>
        <Route path="counter" component={Counter} />
        <Route path="calendar" component={Calendar} />
      </Route>
      <Route path="show" component={FieldDesignShow} />
    </Route>
  </Router>
);

export default appRoutes;