// Libraries
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../containers/app/app.js';
import Main from '../containers/main/main.js';
import Counter from '../containers/counter/counter.js';
import Calendar from '../containers/calendar/calendar.js';


const appRoutes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="main" component={Main}>
        <IndexRoute component={Main} />
        <Route path="counter" component={Counter} />
        <Route path="calendar" component={Calendar} />
      </Route>
    </Route>
  </Router>
);

export default appRoutes;