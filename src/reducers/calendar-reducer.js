
// Immutable
import { Map } from 'immutable';

const initialState = Map({
});

export default function app(state = initialState, action) {
  console.log(action);
  let nextState = state;
  return nextState;
}