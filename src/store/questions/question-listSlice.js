import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { publicAxios } from '../../utils/axios-stage';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  questions: [],
  total: null,
  error: null,
};

export const getQuestionsList = createAsyncThunk(
  'get/questions',
  async (page, thunkAPI) => {
    try {
      const res = await publicAxios.get(`/api/questions?page=${page}`);
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

const questionsListSlice = createSlice({
  name: 'questions-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionsList.pending, (state) => {
        state.loading = true;
        state.questions = [];
      })
      .addCase(getQuestionsList.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(getQuestionsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default questionsListSlice;
