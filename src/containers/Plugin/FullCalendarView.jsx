// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import connectToWrap from '../../Utils/Wrapper';

// App actions
import * as AppActions from '../../actions/calendar-actions.js';

// Plugins
import {FullCalendar} from '../../Components/Plugin';

// Layouts
import {Card} from 'material-ui/Card';

@connectToWrap('Full Calendar')
class FullCalendarView extends Component {

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

function mapStateToProps(state) {
  return {
    appState: state.calendar.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions : bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullCalendarView);