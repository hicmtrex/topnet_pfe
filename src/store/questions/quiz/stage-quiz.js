import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';
import clientAxios from '../../../utils/axios-stage';

const initialState = {
  loading: false,
  questions: [],
  error: null,
  currentQuestions: [],
};

export const getStageQuestion = createAsyncThunk(
  'get/questions/quiz',
  async (thunkAPI) => {
    try {
      const res = await clientAxios.get('/questions/quiz');
      if (res.data) {
        const merged = [].concat.apply([], res.data);
        return merged;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const stageQuestionSlice = createSlice({
  name: 'stage-questions',
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.currentQuestions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStageQuestion.pending, (state) => {
        state.loading = true;
        state.questions = [];
      })
      .addCase(getStageQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(getStageQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setQuestions } = stageQuestionSlice.actions;

export default stageQuestionSlice;
