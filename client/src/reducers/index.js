import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

export default combineReducers({
  recipe: recipesReducer,
  auth: authReducer,
  error: errorReducer,
  user: userReducer
});
