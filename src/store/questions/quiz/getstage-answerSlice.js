import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';
import clientAxios from '../../../utils/axios-stage';

const initialState = {
  loading: false,
  results: [],
  error: null,
};

export const getStageTest = createAsyncThunk(
  'get/answers_stage',
  async (thunkAPI) => {
    try {
      const res = await clientAxios.get('/answers_stage');
      if (res.data) {
        const result = Object.values(res.data);
        return result;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const getStageTestSlice = createSlice({
  name: 'stage-test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStageTest.pending, (state) => {
        state.loading = true;
        state.questions = [];
      })
      .addCase(getStageTest.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(getStageTest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getStageTestSlice;
