import './_main.css';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DevTools from '../../devTools/dev-tool.js';

import 'bootstrap/dist/css/bootstrap.min.css';

// App actions
import * as AppActions from '../../actions/app-actions.js';

// Components
import { ReactHeadroom } from '../../Components/Layouts';

// import Headroom from 'react-headroom';

class Main extends Component {

  render() {
    return (
      <div>
        <ReactHeadroom>
          <span>Sohot</span>
          <div></div>
          <nav>
            <Link to="/main/counter">Counter</Link>
            <Link to="/main/calendar">Calendar</Link>
          </nav>
        </ReactHeadroom>
        <div style={{ position: 'absolute', top: '40px' }}>
          {this.props.children}
        </div>
        <DevTools />
      </div>
    );
  };
}

Main.propTypes = {
  appState  : PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.app.toJS()
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
)(Main);