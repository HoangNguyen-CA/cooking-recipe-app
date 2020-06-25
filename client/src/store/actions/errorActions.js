import { SET_ERROR, HIDE_ERROR } from './actionTypes';

//RETURN ERRORS (used in dispatch at authActions)
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: { error },
  };
};
//CLEAR ERRORS
export const hideError = () => {
  return {
    type: HIDE_ERROR,
  };
};
