import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';
import clientAxios from '../../../utils/axios-stage';

const initialState = {
  loading: false,
  questions: [],
  error: null,
};

export const getStageQuestion = createAsyncThunk(
  'get/questions/quiz',
  async (thunkAPI) => {
    try {
      const res = await clientAxios.get('/questions/quiz');
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

const stageQuestionSlice = createSlice({
  name: 'stage-questions',
  initialState,
  reducers: {},
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

export default stageQuestionSlice;
