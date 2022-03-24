import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  question: null,
  error: null,
};

export const getQuestionDetail = createAsyncThunk(
  'get/question/:id',
  async (id, thunkAPI) => {
    try {
      const res = await adminAxios.get(`/questions/${id}`);
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

const questionDetailSlice = createSlice({
  name: 'question-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestionDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
      })
      .addCase(getQuestionDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default questionDetailSlice;
