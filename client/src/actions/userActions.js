import {
  RECIPES_LOADING,
  ADD_RECIPE,
  GET_RECIPES,
  DELETE_RECIPE,
  RECIPES_STOP_LOADING
} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getFavorites = () => (dispatch, getState) => {};
