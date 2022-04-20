import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  success: false,
  loading: false,
  error: null,
};

export const createSubject = createAsyncThunk(
  'post/subjects',
  async (subject, thunkAPI) => {
    try {
      const res = await adminAxios.post('/subjects', subject);
      if (res.data) {
        toast.success('Subject has been created');
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const createSubjectSlice = createSlice({
  name: 'post-subjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSubject.pending, (state) => {
        state.loading = true;
        state.subjects = [];
      })
      .addCase(createSubject.fulfilled, (state) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(createSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default createSubjectSlice;
