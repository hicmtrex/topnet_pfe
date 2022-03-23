import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../../utils/help-api';

const initialState = {
  loading: false,
  users: [],
  total: null,
  error: null,
};

export const getUsersList = createAsyncThunk(
  'get/users',
  async (page, thunkAPI) => {
    try {
      const res = await adminAxios.get(`/users?page=${page}`);
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const usersListSlice = createSlice({
  name: 'users-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersList.pending, (state) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(getUsersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersListSlice;
