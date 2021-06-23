import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './reducers/recipesReducer';
import authReducer from './reducers/authReducer';
import errorReducer from './reducers/errorReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipe: recipesReducer,
    error: errorReducer,
    user: userReducer,
  },
});

export default store;
