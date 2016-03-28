import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    //渲染组件，包括一个数字，四个按钮
    return (
      <div>
        Clicked: {counter} times
        {' '}
        <RaisedButton label="+" onClick={increment}/>
        {' '}
        <RaisedButton label="-" onClick={decrement}/>
        {' '}
        <RaisedButton label="Increment if odd" onClick={incrementIfOdd}/>
        {' '}
        <RaisedButton label="Increment async" onClick={() => incrementAsync()} />
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
