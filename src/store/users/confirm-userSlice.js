import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  credentials: null,
  error: null,
};

export const confirmUser = createAsyncThunk(
  'confirm/email',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/password/forgot_user', email, {
        headers: {
          Accpet: 'application/json',
        },
      });

      return data;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const confirmUserSlice = createSlice({
  name: 'confirm-email',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(confirmUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmUser.fulfilled, (state, action) => {
        state.loading = false;
        state.credentials = action.payload;
      })
      .addCase(confirmUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default confirmUserSlice;
