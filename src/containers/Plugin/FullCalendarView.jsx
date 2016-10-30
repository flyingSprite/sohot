// React & Redux
import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import reduxManager from '../../helpers/reduxManager';


// App actions
// import * as AppActions from '../../actions/calendar-actions.js';

// Plugins
import {FullCalendar} from '../../Components/Plugin';

// Layouts
import {Card} from 'material-ui/Card';

class FullCalendarView extends Component {

  static defaultTitle = 'Full Calendar';

  render() {
    let events = [
      {
        title: 'My Works!',
        date: '2016-04-10',
        allDay: true
      }
    ];

    return (
      <Card>
        <FullCalendar events={events} />
      </Card>
    );
  };
}

FullCalendarView.propTypes = {
  appState  : PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

export default reduxManager(FullCalendarView);
