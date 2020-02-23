import {
  RECIPES_LOADING,
  ADD_RECIPE,
  GET_RECIPES,
  DELETE_RECIPE
} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
import axios from 'axios';

export const getRecipes = ({
  search,
  ingredients,
  diet,
  health,
  calories,
  time,
  excluded
}) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios
    .get(
      `/api/recipes/edamam`,
      {
        params: { search, ingredients, diet, health, calories, time, excluded }
      },
      config
    )
    .then(res => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data
      });
    })
    .catch(err => {});
};
