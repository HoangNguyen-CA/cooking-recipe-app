import {
  GET_RECIPES,
  RECIPES_LOADING,
  RECIPES_STOP_LOADING,
} from '../actions/actionTypes';

const initialState = {
  recipes: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES: {
      //payload is an array of recipes.
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    }

    case RECIPES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case RECIPES_STOP_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}
