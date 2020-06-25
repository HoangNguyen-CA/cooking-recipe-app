import {
  USER_LOADING_START,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/actionTypes';

import { updateObject } from '../../shared/util';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  isLoading: false,
  loginError: null,
  registerError: null,
};

const removeToken = (state, props = {}) => {
  localStorage.removeItem('token');
  return updateObject(state, {
    token: null,
    user: null,
    isAuthenticated: null,
    isLoading: false,
    ...props,
  });
};

export default function (state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case LOGIN_START:
    case REGISTER_START:
    case USER_LOADING_START:
      return updateObject(state, { isLoading: true });
    case USER_LOADING_SUCCESS:
      return updateObject(state, {
        isAuthenticated: true,
        isLoading: false,
        user: payload,
      });
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return updateObject(state, {
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      });

    case USER_LOADING_FAIL:
    case LOGOUT_SUCCESS:
      return removeToken(state);
    case LOGIN_FAIL:
      return removeToken(state, { loginError: payload.error });
    case REGISTER_FAIL:
      return removeToken(state, { registerError: payload.error });

    default:
      return state;
  }
}
