import React from 'react';

import { Match } from 'react-router/Match';

import asyncComponent from '../helpers/asyncComponent';

// const main = asyncComponent(() => {
//   System
//   .import('../Containers/main/main')
//   .then(module => module.default);
// });

const MaterialDesignIconView = asyncComponent(() => {
  System
  .import('../Containers/Library/MaterialDesignIconView')
  .then(module => module.default);
});

const FullCalendarView = asyncComponent(() => {
  System
  .import('../Containers/Plugin/FullCalendarView')
  .then(module => module.default);
});

const InputView = asyncComponent(() => {
  System
  .import('../Containers/FormElements/InputView')
  .then(module => module.default);
});

export default () => (
<div>
  <Match
    key="material-design-icon-view"
    pattern="/library/material-design-icon"
    component={MaterialDesignIconView}
  />
  <Match
    key="full-calendar-view"
    pattern="/Plugin/full-calendar"
    component={FullCalendarView}
  />
  <Match
    key="input-view"
    pattern="/Layout/input"
    component={InputView}
  />
</div>);
