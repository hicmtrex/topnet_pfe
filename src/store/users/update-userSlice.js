import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import adminAxios, { setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const updateUser = createAsyncThunk(
  'put/users',
  async (user, thunkAPI) => {
    try {
      const res = await adminAxios.put(`/admin/users/${user.id}`, user);
      if (res.data) {
        toast.success('user has been updated');
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const updateUserSlice = createSlice({
  name: 'update-user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.success = !state.success;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default updateUserSlice;
