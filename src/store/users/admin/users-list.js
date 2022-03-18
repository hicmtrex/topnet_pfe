import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../../utils/help-api';

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const getUsersList = createAsyncThunk('get/users', async (thunkAPI) => {
  try {
    const res = await adminAxios.get('/users');
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    const message = setError(error);
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

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
        state.users = action.payload;
      })
      .addCase(getUsersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersListSlice;
