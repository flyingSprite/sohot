import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    //渲染组件，包括一个数字，四个按钮
    return (
      <div>
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
    );
  }
}
//限制组件的props安全
Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
  counter: PropTypes.number.isRequired
};

export default Counter;
