import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const deleteQuestion = createAsyncThunk(
  'delete/questions',
  async (id, thunkAPI) => {
    try {
      const res = await adminAxios.delete(`/questions/${id}`);
      if (res.data) {
        toast.success('question has been deleted');
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const deleteQuestionSlice = createSlice({
  name: 'delete-question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default deleteQuestionSlice;
