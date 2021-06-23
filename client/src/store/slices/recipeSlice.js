import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import { setError } from './errorSlice';

const initialState = {
  recipes: [],
  loading: false,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    getRecipesStart(state) {
      state.loading = true;
    },
    getRecipesSuccess(state, action) {
      state.recipes = action.payload;
      state.loading = false;
    },
    getRecipesFail(state) {
      state.loading = false;
    },
  },
});

const { getRecipesFail, getRecipesStart, getRecipesSuccess } =
  recipeSlice.actions;

export const getRecipes =
  ({ search, ingredients, diet, health, calories, time, excluded }) =>
  async (dispatch) => {
    try {
      dispatch(getRecipesStart());
      const res = await axios.get(`/api/recipes/edamam`, {
        params: {
          search,
          ingredients,
          diet,
          health,
          calories,
          time,
          excluded,
        },
      });
      dispatch(getRecipesSuccess(res.data));
    } catch (e) {
      dispatch(getRecipesFail());
      dispatch(setError(e.response.data.msg));
    }
  };

export default recipeSlice.reducer;
