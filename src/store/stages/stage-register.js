import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/help-api';

export const stagerRegister = createAsyncThunk(
  'stages/register',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/api/stages/register', user, {
        headers: {
          Accpet: 'application/json',
        },
      });
      if (res.data) {
        toast.success(`You have been registered`);
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const registerStageSlice = createSlice({
  name: 'stages-register',
  initialState,
  reducers: {
    resetErrorRegister: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(stagerRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(stagerRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(stagerRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { resetErrorRegister } = registerStageSlice.actions;
export default registerStageSlice;
