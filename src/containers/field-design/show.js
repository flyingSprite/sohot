// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App actions
import * as AppActions from '../../actions/app-actions.js';

// Components
import OptionProperty from './OptionProperty';
// import Spinner from '../../components/spinner/spinner.js';

class FieldDesignShow extends Component {

  static propTypes = {
    appState  : PropTypes.object.isRequired,
    appActions: PropTypes.object.isRequired
  };

  componentWillReceiveProps() {
  }
  componentDidUpdate() {
    /* eslint-disable */
    /* component handler is used by Material Design Lite, every react component
       needs to upgrade its DOM in order to maintain the effect.
    */
    componentHandler.upgradeDom();
    /* eslint-enable */
  }

  render() {
    console.log(this.props.children);
    return (
      <div>
        <OptionProperty options={[]} />
      </div>
    );
  };
}

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
)(FieldDesignShow);