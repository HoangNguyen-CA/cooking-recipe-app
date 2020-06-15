import axios from 'axios';

import {
  FAV_LOADING,
  ADD_FAV,
  GET_FAV,
  DELETE_FAV,
  FAV_STOP_LOADING,
} from './actionTypes';
import { tokenConfig } from './authActions';

import { setError } from './errorActions';

export const getFavorites = () => (dispatch, getState) => {
  dispatch({
    type: FAV_LOADING,
  });
  axios
    .get('/api/recipes/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FAV,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAV_STOP_LOADING,
        error: err.response.data.msg,
      });
    });
};

export const addFavorite = (recipe) => (dispatch, getState) => {
  const body = {
    ...recipe,
  };

  axios
    .post('api/recipes/', body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_FAV,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(setError(err.response.data.msg));
    });
};

export const deleteFavorite = (id) => (dispatch, getState) => {
  axios
    .delete(`api/recipes/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_FAV,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch(setError(err.response.data.msg));
    });
};
