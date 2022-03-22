import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  question: {},
  error: null,
};

export const createQuestion = createAsyncThunk(
  'post/questions',
  async (question, thunkAPI) => {
    try {
      const res = await adminAxios.post('/questions', question);
      if (res.data) {
        toast.success('question has been created');
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const createquestionSlice = createSlice({
  name: 'create-question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default createquestionSlice;
