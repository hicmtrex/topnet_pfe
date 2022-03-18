import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../../utils/help-api';

const initialState = {
  loading: false,
  stages: [],
  error: null,
};

export const getStagesList = createAsyncThunk(
  'get/stages',
  async (thunkAPI) => {
    try {
      const res = await adminAxios.get('/stages');
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

const stagesListSlice = createSlice({
  name: 'stages-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStagesList.pending, (state) => {
        state.loading = true;
        state.stages = [];
      })
      .addCase(getStagesList.fulfilled, (state, action) => {
        state.loading = false;
        state.stages = action.payload;
      })
      .addCase(getStagesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default stagesListSlice;
