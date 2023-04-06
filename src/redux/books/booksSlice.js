import { createSlice } from '@reduxjs/toolkit';
import booksInitializer from '../initializers/booksInitializer';

const initialState = {
  library: [...booksInitializer],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { payload } = action;

      return ({
        ...state,
        library: [
          ...state.library,
          payload,
        ],
      });
    },
    removeBook: (state, { payload }) => {
      const { library } = state;
      const newLibrary = library.filter((book) => book.id !== payload) || [];

      return ({
        ...state,
        library: newLibrary,
      });
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
