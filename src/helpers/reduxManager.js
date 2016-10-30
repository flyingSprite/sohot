
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DefaultWrapper from '../Components/Wrappers/DefaultWrapper';

// App actions
import * as AppActions from '../actions/calendar-actions.js';

const reduxManager = (innerElement) => {

  // Let innerElement connect to redux.
  let connectNode = connect(
    (state) => {
      return {
        appState: state.app.toJS()
      };
    },
    (dispatch) => {
      return {
        appActions: bindActionCreators(AppActions, dispatch)
      };
    }
  )(innerElement);

  // Set connectNode default title in page wrapper.
  connectNode.defaultTitle
  && (connectNode = DefaultWrapper(connectNode.defaultTitle)(connectNode));

  return connectNode;
};

export default reduxManager;
