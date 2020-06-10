import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  recipe: recipesReducer,
  auth: authReducer,
  error: errorReducer,
  user: userReducer,
});

export default rootReducer;
