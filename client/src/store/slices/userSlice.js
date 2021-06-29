import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import { tokenConfig } from '../util';

import { setError } from './errorSlice';

const initialState = {
  favorites: [],
  loading: false,
  open: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getFavStart(state, action) {
      state.loading = true;
    },
    getFavSuccess(state, action) {
      state.favorites = action.payload;
      state.loading = false;
    },
    getFavFail(state, action) {
      state.loading = false;
    },

    addFav(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFav(state, action) {
      const newFavorities = state.favorites.filter(
        (fav) => fav._id !== action.payload
      );
      state.favorites = newFavorities;
    },
    setUserOpen(state, action) {
      state.open = action.payload || false;
    },
  },
});

const { getFavStart, getFavSuccess, getFavFail, addFav, deleteFav } =
  userSlice.actions;

export const { setUserOpen } = userSlice.actions;

//async actions

export const getFavorites = () => async (dispatch, getState) => {
  try {
    dispatch(getFavStart());
    const res = await axios.get('/api/recipes/', tokenConfig(getState));
    dispatch(getFavSuccess(res.data));
  } catch (e) {
    console.log(e);
    dispatch(getFavFail());
    dispatch(setError(e.response.data.msg));
  }
};

export const addFavorite = (recipe) => async (dispatch, getState) => {
  try {
    const body = {
      ...recipe,
    };
    const res = await axios.post('api/recipes/', body, tokenConfig(getState));
    dispatch(addFav(res.data));
  } catch (e) {
    dispatch(setError(e.response.data.msg));
  }
};

export const deleteFavorite = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`api/recipes/${id}/`, tokenConfig(getState));
    dispatch(deleteFav(id));
  } catch (e) {
    dispatch(setError(e.response.data.msg));
  }
};

export default userSlice.reducer;
