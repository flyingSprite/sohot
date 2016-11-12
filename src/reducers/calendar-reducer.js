
// Immutable
import { Map } from 'immutable';

const initialState = Map({
});

export default function app(state = initialState, action) {
  let nextState = state;
  switch (action.type) {
    case 'TEST':
      return nextState;
    default:
      return nextState;
  }
  return nextState;
}
