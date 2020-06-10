import axios from 'axios';

import {
  RECIPES_LOADING,
  GET_RECIPES,
  RECIPES_STOP_LOADING,
} from './actionTypes';
import { clearErrors, setError } from './errorActions';

export const getRecipes = ({
  search,
  ingredients,
  diet,
  health,
  calories,
  time,
  excluded,
}) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({
    type: RECIPES_LOADING,
  });

  axios
    .get(
      `/api/recipes/edamam`,
      {
        params: { search, ingredients, diet, health, calories, time, excluded },
      },
      config
    )
    .then((res) => {
      dispatch(clearErrors());
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        setError(err.response.data, err.response.status, 'GET_RECIPES_FAIL')
      );
      dispatch({
        type: RECIPES_STOP_LOADING,
      });
    });
};
