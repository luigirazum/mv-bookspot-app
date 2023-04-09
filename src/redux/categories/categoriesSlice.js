import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCategoriesStatus from '../helpers/delayedData';

/*-------------------------------------------------
 * Action Type DEFINITIONS
 *-------------------------------------------------*/
const FETCH_CATEGORIES_STATUS = 'categories/fetchCategoriesStatus';

const fetchCategoriesStatus = createAsyncThunk(
  FETCH_CATEGORIES_STATUS,
  async (_, thunkAPI) => {
    try {
      const data = await getCategoriesStatus(
        { status: 'under construction' },
        2,
      );
      return data;
    } catch (error) {
      return thunkAPI
        .rejectWithValue('We are sorry to tell you that something went wrong.');
    }
  },
);

const initialState = {
  available: [],
  status: '',
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetStatus: (state) => ({
      ...state,
      status: '',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesStatus.pending,
        (state) => ({
          ...state,
          isLoading: true,
        }))

      .addCase(fetchCategoriesStatus.fulfilled,
        (state, { payload: { status } }) => ({
          ...state,
          status,
          isLoading: false,
        }))

      .addCase(fetchCategoriesStatus.rejected,
        (state, { payload }) => ({
          ...state,
          payload,
          isLoading: false,
        }));
  },
});

export const { resetStatus } = categoriesSlice.actions;

export { fetchCategoriesStatus };

export default categoriesSlice.reducer;
