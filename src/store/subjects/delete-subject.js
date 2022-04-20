import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  success: false,
  loading: false,
  error: null,
};

export const deleteSubject = createAsyncThunk(
  'delete/subjects/:id',
  async (id, thunkAPI) => {
    try {
      const res = await adminAxios.delete(`/subjects/${id}`);
      if (res.data) {
        toast.success('Subject has been deleted');
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const deleteSubjectSlice = createSlice({
  name: 'delete-subjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteSubject.pending, (state) => {
        state.loading = true;
        state.subjects = [];
      })
      .addCase(deleteSubject.fulfilled, (state) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(deleteSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default deleteSubjectSlice;
