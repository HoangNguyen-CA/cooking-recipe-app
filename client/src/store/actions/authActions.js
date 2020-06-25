import axios from 'axios';
import {
  USER_LOADING_SUCCESS,
  USER_LOADING_START,
  USER_LOADING_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_ERRORS,
} from './actionTypes';

import { tokenConfig } from '../util';

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING_START });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADING_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_LOADING_FAIL,
      });
    });
};

export const register = ({ name, email, password }) => (dispatch) => {
  dispatch({ type: REGISTER_START });

  const body = JSON.stringify({ name, email, password });
  axios
    .post('/api/users', body)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: { error: err.response.data.msg },
      });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  const body = JSON.stringify({ email, password });
  axios
    .post('/api/auth', body)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: err.response.data.msg },
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const clearAuthErrors = () => {
  return {
    type: CLEAR_AUTH_ERRORS,
  };
};
