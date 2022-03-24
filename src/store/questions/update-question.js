import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const updateQuestion = createAsyncThunk(
  'put/questions/:id',
  async (question, thunkAPI) => {
    try {
      const res = await adminAxios.put(`/questions/${question._id}`, question);
      if (res.data) {
        toast.success('question has been updated');
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const updateQuestionSlice = createSlice({
  name: 'update-question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(updateQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default updateQuestionSlice;
