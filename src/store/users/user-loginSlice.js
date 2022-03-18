import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LOCAL_STORAGE, setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  userInfo: localStorage.getItem(LOCAL_STORAGE.auth)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.auth))
    : null,
  error: null,
};

export const userLogin = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/login', user, {
        headers: {
          Accpet: 'application/json',
        },
      });
      if (res.data) {
        toast.success(`Welcome ${res.data.user.first_name}`);
        localStorage.setItem(LOCAL_STORAGE.auth, JSON.stringify(res.data));
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginUserSlice = createSlice({
  name: 'users-login',
  initialState,
  reducers: {
    userLogout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE.auth);
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { userLogout } = loginUserSlice.actions;
export default loginUserSlice;
