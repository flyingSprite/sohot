import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import counter from './counter';
import calendar from './calendar-reducer.js';
import app from './app-reducer.js';

// 使用redux的combineReducers方法将所有reducer打包起来
// 每当一个Action被调用，边执行所有的reducer方法
const rootReducer = combineReducers({
  app,
  calendar,
  counter,
  form
});

export default rootReducer;
