import axios from 'axios';

import {
  GET_RECIPES_START,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
} from './actionTypes';

import { setError } from './errorActions';

export const getRecipes = ({
  search,
  ingredients,
  diet,
  health,
  calories,
  time,
  excluded,
}) => (dispatch) => {
  dispatch({ type: GET_RECIPES_START });

  axios
    .get(`/api/recipes/edamam`, {
      params: {
        search,
        ingredients,
        diet,
        health,
        calories,
        time,
        excluded,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_RECIPES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(setError(err.response.data.msg));
      dispatch({
        type: GET_RECIPES_FAIL,
      });
    });
};
