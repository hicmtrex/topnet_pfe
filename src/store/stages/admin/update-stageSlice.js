import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../../utils/help-api';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const updateStage = createAsyncThunk(
  'put/stage:id',
  async (user, thunkAPI) => {
    try {
      const res = await adminAxios.put(`/stages/${user.id}`, user);
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

const updateStageSlice = createSlice({
  name: 'stages-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateStage.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStage.fulfilled, (state) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(updateStage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default updateStageSlice;
