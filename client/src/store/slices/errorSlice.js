import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  show: false,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
      state.show = true;
    },
    hideError(state) {
      state.error = '';
      state.show = false;
    },
  },
});

export const { setError, hideError } = errorSlice.actions;

export default errorSlice.reducer;
