import {
  ADD_FAV,
  DELETE_FAV,
  GET_FAV,
  FAV_LOADING,
  FAV_STOP_LOADING
} from '../actions/types';

const initialState = {
  favorites: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FAV: {
      return {
        ...state,
        favorites: action.payload,
        loading: false
      };
    }
    case DELETE_FAV: {
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav._id !== action.payload)
      };
    }
    case ADD_FAV: {
      return {
        ...state,
        favorites: [action.payload, ...state.recipes]
      };
    }
    case FAV_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case FAV_STOP_LOADING: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
}
