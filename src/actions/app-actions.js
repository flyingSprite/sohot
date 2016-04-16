// Constants
import actionTypes from '../constants/action-types';

/* Set loading state */
export function setLoadingState(state) {
  return {
    type: actionTypes.SET_LOADING_STATE,
    state
  };
};