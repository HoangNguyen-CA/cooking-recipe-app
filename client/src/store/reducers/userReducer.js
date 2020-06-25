import {
  ADD_FAV,
  DELETE_FAV,
  GET_FAV_START,
  GET_FAV_SUCCESS,
  GET_FAV_FAIL,
} from '../actions/actionTypes';

import { updateObject } from '../../shared/util';

const initialState = {
  favorites: [],
  loading: false,
};

export default function (state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case GET_FAV_SUCCESS: {
      return updateObject(state, { favorites: payload, loading: false });
    }
    case DELETE_FAV: {
      return updateObject(state, {
        favorites: state.favorites.filter((fav) => fav._id !== action.payload),
      });
    }
    case ADD_FAV: {
      return updateObject(state, {
        favorites: [...state.favorites, action.payload],
      });
    }
    case GET_FAV_START: {
      return updateObject(state, { loading: true });
    }
    case GET_FAV_FAIL: {
      return updateObject(state, { loading: false });
    }
    default:
      return state;
  }
}
