import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../../utils/help-api';

const initialState = {
  loading: false,
  stage: {},
  error: null,
};

export const getStageDetail = createAsyncThunk(
  'get/stage:id',
  async (id, thunkAPI) => {
    try {
      const res = await adminAxios.get(`/stages/${id}`);
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

const stageDetailSlice = createSlice({
  name: 'stages-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStageDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStageDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.stage = action.payload;
      })
      .addCase(getStageDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default stageDetailSlice;
