import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './slices/recipeSlice';
import authReducer from './slices/authSlice';
import errorReducer from './slices/errorSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipe: recipesReducer,
    error: errorReducer,
    user: userReducer,
  },
});

export default store;
