import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';
import clientAxios from '../../../utils/axios-stage';

const initialState = {
  loading: false,
  selectedStage: null,
  success: false,
  error: null,
};

export const saveStageResult = createAsyncThunk(
  'post/questions_answers',
  async (answer, thunkAPI) => {
    try {
      const res = await clientAxios.post('/questions_answers', answer);
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

const saveStageResultSlice = createSlice({
  name: 'stage-answers',
  initialState,
  reducers: {
    setSelectedStage: (state, action) => {
      state.selectedStage = action.payload;
    },
    resetSelectedStage: (state) => {
      state.selectedStage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveStageResult.pending, (state) => {
        state.loading = true;
        state.questions = [];
      })
      .addCase(saveStageResult.fulfilled, (state) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(saveStageResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setSelectedStage, resetSelectedStage } =
  saveStageResultSlice.actions;
export default saveStageResultSlice;
