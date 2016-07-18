// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App actions
import * as AppActions from '../../actions/calendar-actions.js';

// Components
import FullCalendar from '../../Components/full-calendar/full-calendar.js';

class Calendar extends Component {

  render() {
    let events = [
      {
        title: 'My Works!',
        date: '2016-04-10',
        allDay: true
      }
    ];
    return (
      <div className="mdl-grid">
        <FullCalendar events={events} />
      </div>
    );
  };
}

Calendar.propTypes = {
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
)(Calendar);