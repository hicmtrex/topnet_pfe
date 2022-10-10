import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../../utils/help-api';

const initialState = {
  loading: false,
  approvedAnswers: [],
  error: null,
};

export const getApprovedAnswers = createAsyncThunk(
  'approved/result',
  async (thunkAPI) => {
    try {
      const res = await adminAxios.get('/answers/approvedresult');
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

const approvedAnswersSlice = createSlice({
  name: 'approved-result',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApprovedAnswers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApprovedAnswers.fulfilled, (state, action) => {
        state.loading = false;
        state.approvedAnswers = action.payload;
      })
      .addCase(getApprovedAnswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default approvedAnswersSlice;
