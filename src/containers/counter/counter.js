import './_style.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Checkbox from 'material-ui/lib/checkbox';

import TagColor from '../../components/tag-color/tag-color.js';

import * as CounterAction from '../../actions/counter-actions.js';

class Counter extends Component {
  constructor() {
    super();
    this._click = ::this._click;
    this._onSelectColor = ::this._onSelectColor;
    this.state = {
      color: ''
    };
  }

  _click(){
    const {tagColor} = this.refs;
    this.setState({'color': tagColor.getColor});
    console.log(tagColor.getColor() );
  }

  _onSelectColor(color) {
    console.log(color);
    this.setState({color: color});
  }

  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement } = this.props.appActions;

    const { counter } = this.props.appState;
    //渲染组件，包括一个数字，四个按钮
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <button onClick={this._click} >message</button>
          <div className="sohot-card mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">Tag Color</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <TagColor ref="tagColor" onSelect={this._onSelectColor}/>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <span className={this.state.color}>Show Color</span>
            </div>
          </div>
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