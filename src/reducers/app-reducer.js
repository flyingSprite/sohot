
// Immutable
import { Map } from 'immutable';

const initialState = Map({
    token: '',
    isLoading: false,
    errorMessage: '',
    currentUser: Map({}),
    isAuthenticated: undefined,
    loginError: ''
});

export default function app(state = initialState, action) {
  let nextState = state;
  switch (action.type) {
    case 'SET_LOADING_STATE':
      return nextState.set('isLoading', action.state);
    default:
      return nextState;
  }
}