import { SET_ERROR, HIDE_ERROR } from './actionTypes';

//RETURN ERRORS (used in dispatch at authActions)
export const setError = (error, id, show) => {
  return {
    type: SET_ERROR,
    error: error,
    errorId: id,
    showError: show,
  };
};
//CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: HIDE_ERROR,
  };
};
