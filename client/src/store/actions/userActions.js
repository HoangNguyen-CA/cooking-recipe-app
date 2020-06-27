import axios from 'axios';

import {
  ADD_FAV,
  DELETE_FAV,
  GET_FAV_START,
  GET_FAV_SUCCESS,
  GET_FAV_FAIL,
} from './actionTypes';
import { tokenConfig } from '../util';

import { setError } from './errorActions';

export const getFavorites = () => (dispatch, getState) => {
  dispatch({
    type: GET_FAV_START,
  });
  axios
    .get('/api/recipes/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FAV_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(setError(err.response.data.msg));
      dispatch({
        type: GET_FAV_FAIL,
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
