// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App actions
import * as AppActions from '../../actions/calendar-actions.js';

import { FxInput, FloatingInput, SearchInput } from '../../Components/FormElements';

class Components extends Component {

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <FxInput />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <FloatingInput />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <SearchInput />
        </div>
      </div>
    );
  };
}

Components.propTypes = {
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
)(Components);