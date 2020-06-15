import axios from 'axios';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './actionTypes';

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  //Get token from localStorage
  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        error: err.response.data.msg,
        showError: false,
      });
    });
};

//Register User
export const register = ({ name, email, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //Request body
  const body = JSON.stringify({ name, email, password });
  axios
    .post('/api/users', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        error: err.response.data.msg,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

//Register User
export const login = ({ email, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //Request body
  const body = JSON.stringify({ email, password });
  axios
    .post('/api/auth', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        error: err.response.data.msg,
      });
    });
};

//Setup config/headers and token
export const tokenConfig = (getState) => {
  //Headers
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};
