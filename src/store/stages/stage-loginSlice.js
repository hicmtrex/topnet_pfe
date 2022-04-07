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

export const stagerLogin = createAsyncThunk(
  'stages/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/stages/login', user, {
        headers: {
          Accpet: 'application/json',
        },
      });

      if (data.user.status === true) {
        toast(`Welcome ${data.user.first_name}`, {
          icon: '👏',
        });
        localStorage.setItem(LOCAL_STORAGE.auth, JSON.stringify(data));
      }
      return data;
    } catch (error) {
      const message = setError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginStageSlice = createSlice({
  name: 'stages-login',
  initialState,
  reducers: {
    stageLogout: (state) => {
      state.userInfo = null;
      localStorage.removeItem(LOCAL_STORAGE.auth);
      localStorage.removeItem(LOCAL_STORAGE.admin);
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(stagerLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(stagerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(stagerLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { stageLogout, resetError } = loginStageSlice.actions;
export default loginStageSlice;
