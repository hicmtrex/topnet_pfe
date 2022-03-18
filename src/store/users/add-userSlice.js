import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const createUser = createAsyncThunk(
  'post/stages',
  async (user, thunkAPI) => {
    try {
      const res = await adminAxios.post('/users', user);
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

const createUserSlice = createSlice({
  name: 'create-user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default createUserSlice;
