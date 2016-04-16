
import { Map } from 'immutable';

const initState = Map({
  counter: 0
});

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = initState, action) {
  let nextState = state;
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return nextState.set('counter', nextState.get('counter') + 1);
    case 'DECREMENT_COUNTER':
      return nextState.set('counter', nextState.get('counter') - 1);
    default:
      return nextState;
  }
};
