import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
  GET_RECIPES_START,
} from '../actions/actionTypes';

import { updateObject } from '../../shared/util';

const initialState = {
  recipes: [],
  loading: false,
};

export default function (state = initialState, action) {
  //payload is an array of recipes.
  const payload = action.payload;

  switch (action.type) {
    case GET_RECIPES_START: {
      return updateObject(state, { loading: true });
    }
    case GET_RECIPES_SUCCESS: {
      return updateObject(state, { recipes: payload, loading: false });
    }
    case GET_RECIPES_FAIL: {
      return updateObject(state, { loading: false });
    }
    default:
      return state;
  }
}
