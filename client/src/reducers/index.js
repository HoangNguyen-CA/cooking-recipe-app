import { combineReducers } from 'redux';
import recipesReducer from './itemReducer';

export default combineReducers({
  recipe: recipesReducer
  //more reducers here
});
