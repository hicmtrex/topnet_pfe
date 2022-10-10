import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { publicAxios } from '../../utils/axios-stage';
import { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  credentials: null,
  error: null,
};

export const confirmEmail = createAsyncThunk(
  'confirm/email',
  async (email, thunkAPI) => {
    try {
      const { data } = await publicAxios.post('/api/password/forgot', email, {
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

const confirmEmailSlice = createSlice({
  name: 'confirm-email',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(confirmEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.credentials = action.payload;
      })
      .addCase(confirmEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default confirmEmailSlice;
