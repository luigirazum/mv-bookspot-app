import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../api/apiConfig';
import asyncSleep from '../initializers/sleepTimer';

/*-------------------------------------------------
 * Selectors DEFINITIONS (for useSelector)
 *-------------------------------------------------*/
const selectLibrary = (store) => store.books.library;
const selectIsLoading = (store) => store.books.isLoading;

/*-------------------------------------------------
 * Action Type DEFINITIONS
 *-------------------------------------------------*/
const FETCH_BOOKS = 'books/fetchBooks';
const SAVE_BOOK = 'books/saveBook';
const DELETE_BOOK = 'books/deleteBook';

const initialState = {
  library: [],
  isLoading: false,
};

const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async (_, thunkAPI) => {
    await asyncSleep(3.5);
    try {
      const { data } = await axios
        .request(apiRequest('GET'));
      return data;
    } catch (error) {
      return thunkAPI
        .rejectWithValue('We are sorry to tell you that something went wrong.');
    }
  },
);

const saveBook = createAsyncThunk(
  SAVE_BOOK,
  async (newBook, thunkAPI) => {
    try {
      await axios
        .request(apiRequest('POST', newBook));

      const {
        item_id: id, title, author, category,
      } = newBook;

      return ({
        id,
        title,
        author,
        category,
      });
    } catch (error) {
      return thunkAPI
        .rejectWithValue('We are sorry to tell you that something went wrong.');
    }
  },
);

const deleteBook = createAsyncThunk(
  DELETE_BOOK,
  async (bookId, thunkAPI) => {
    try {
      await axios
        .request(apiRequest('DELETE', bookId));

      const { item_id: id } = bookId;

      return ({ id });
    } catch (error) {
      return thunkAPI
        .rejectWithValue('We are sorry to tell you that something went wrong.');
    }
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending,
        (state) => ({
          ...state,
          isLoading: true,
        }))

      .addCase(fetchBooks.fulfilled,
        (state, { payload: data }) => {
          const fetchedLibrary = Object.entries(data)
            .map((b) => (
              {
                id: b[0],
                ...data[b[0]][0],
              }
            ));

          return ({
            ...state,
            library: fetchedLibrary,
            isLoading: false,
          });
        })

      .addCase(fetchBooks.rejected,
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload,
        }))

      .addCase(saveBook.pending,
        (state) => ({
          ...state,
          isLoading: true,
        }))

      .addCase(saveBook.fulfilled,
        (state, { payload }) => ({
          ...state,
          library: [
            ...state.library,
            payload,
          ],
          isLoading: false,
        }))

      .addCase(saveBook.rejected,
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload,
        }))

      .addCase(deleteBook.pending,
        (state) => ({
          ...state,
          isLoading: true,
        }))

      .addCase(deleteBook.fulfilled,
        (state, { payload: { id } }) => {
          const { library } = state;

          const newLibrary = library
            .filter((book) => book.id !== id) || [];

          return ({
            ...state,
            library: newLibrary,
            isLoading: false,
          });
        })

      .addCase(deleteBook.rejected,
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload,
        }));
  },
});

export { selectLibrary, selectIsLoading };

export const { addBook, removeBook } = booksSlice.actions;

export { fetchBooks, saveBook, deleteBook };

export default booksSlice.reducer;
