// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App actions
import * as AppActions from '../../actions/calendar-actions.js';

// Components
import FullCalendar from '../../components/full-calendar/full-calendar.js';

class Calendar extends Component {

  render() {
    return (
      <div>
        <FullCalendar />
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