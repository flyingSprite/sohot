import './_style.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Checkbox } from 'material-ui';

import TagColorCard from '../../cards/tag-color-card/tag-color-card.js';
import Editor from '../../components/editor/editor.js';

import * as CounterAction from '../../actions/counter-actions.js';

class Counter extends Component {
  constructor() {
    super();
  }

  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement } = this.props.appActions;

    const { counter } = this.props.appState;
    //渲染组件，包括一个数字，四个按钮
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <TagColorCard />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <Editor />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <Checkbox style={{ marginBottom: 16 }} />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          Clicked: {counter} times
          {' '}
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={increment}><i className="material-icons">add</i>
          </button>
          {' '}
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={decrement}>-
          </button>
          {' '}
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={incrementIfOdd}>Increment if odd
          </button>
          {' '}
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={() => incrementAsync()}>Increment async
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  appState  : PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.counter.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions : bindActionCreators(CounterAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);