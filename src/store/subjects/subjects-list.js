import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { publicAxios } from '../../utils/axios-stage';
import { setError } from '../../utils/help-api';

const initialState = {
  subjects: [],
  loading: false,
  error: null,
};

export const getSubjectsList = createAsyncThunk(
  'get/subjects',
  async (thunkAPI) => {
    try {
      const res = await publicAxios.get('/api/subjects');
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

const subjectListSlice = createSlice({
  name: 'get-subjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubjectsList.pending, (state) => {
        state.loading = true;
        state.subjects = [];
      })
      .addCase(getSubjectsList.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = action.payload;
      })
      .addCase(getSubjectsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subjectListSlice;
