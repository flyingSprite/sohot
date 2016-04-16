// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App actions
import * as AppActions from '../../actions/app-actions.js';

// Components
import Spinner from '../../components/spinner/spinner.js';

class App extends Component {

  render() {
    const {
      isLoading
    } = this.props.appState;
    return (
      <div>
        <Spinner hide={!isLoading} />
        {this.props.children}
      </div>
    );
  };
}

App.propTypes = {
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
)(App);