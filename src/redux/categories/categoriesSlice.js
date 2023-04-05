import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  available: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      available: 'under construction',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
