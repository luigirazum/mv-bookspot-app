import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiRequest from '../api/apiConfig';

const selectLibrary = (store) => store.books;

/*-------------------------------------------------
 * Action Type DEFINITIONS
 *-------------------------------------------------*/
const FETCH_BOOKS = 'books/fetchBooks';

const initialState = {
  library: [],
  isLoading: false,
};

const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async (_, thunkAPI) => {
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
        }));
  },
});

export { selectLibrary };

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
