import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import DevTools from '../devTools/dev-tool.js';

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
const createStoreWithMiddleware = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  // window.devToolsExtension ? window.devToolsExtension() : f => f
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
