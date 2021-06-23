import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import { tokenConfig } from '../util';

const removeToken = (state) => {
  localStorage.removeItem('token');
  state.token = null;
  state.user = null;
  state.isAuthenticated = null;
  state.loading = false;
};

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  loading: false,
  loginError: null,
  registerError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      localStorage.setItem('token', action.payload.token);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFail(state, action) {
      removeToken(state);
      state.loginError = action.payload.error;
    },

    registerStart(state) {
      state.loading = true;
    },
    registerSuccess(state, action) {
      localStorage.setItem('token', action.payload.token);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    registerFail(state, action) {
      removeToken(state);
      state.registerError = action.payload.error;
    },

    userLoadingStart(state) {
      state.loading = true;
    },
    userLoadingSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    userLoadingFail(state) {
      removeToken(state);
    },

    logout(state) {
      removeToken(state);
    },

    clearAuthErrors(state) {
      state.loginError = null;
      state.registerError = null;
    },
  },
});

const {
  loginStart,
  loginSuccess,
  loginFail,

  registerStart,
  registerSuccess,
  registerFail,

  userLoadingStart,
  userLoadingSuccess,
  userLoadingFail,
} = authSlice.actions;

export const { logout, clearAuthErrors } = authSlice.actions;

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginStart());
      const body = JSON.stringify({ email, password });
      const res = await axios.post('/api/auth', body);
      dispatch(loginSuccess(res.data));
    } catch (e) {
      dispatch(loginFail({ error: e.response.data.msg }));
    }
  };

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch(registerStart());
      const body = JSON.stringify({ name, email, password });
      const res = await axios.post('/api/users', body);
      dispatch(registerSuccess(res.data));
    } catch (e) {
      dispatch(registerFail({ error: e.response.data.msg }));
    }
  };
export const loadUser = () => async (dispatch, getState) => {
  try {
    dispatch(userLoadingStart());
    const res = await axios.get('/api/auth/user', tokenConfig(getState));
    dispatch(userLoadingSuccess(res.data));
  } catch (e) {
    dispatch(userLoadingFail());
  }
};

export default authSlice.reducer;
