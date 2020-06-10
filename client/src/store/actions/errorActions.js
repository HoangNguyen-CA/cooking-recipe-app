import { GET_ERRORS, CLEAR_ERRORS } from './actionTypes';

//RETURN ERRORS (used in dispatch at authActions)
export const setError = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: {
      msg,
      status,
      id,
    },
  };
};
//CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
