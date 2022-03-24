import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LOCAL_STORAGE, setError } from '../../utils/help-api';

const initialState = {
  loading: false,
  userInfo: localStorage.getItem(LOCAL_STORAGE.admin)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.admin))
    : null,
  error: null,
};

export const userLogin = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/users/login', user, {
        headers: {
          Accpet: 'application/json',
        },
      });
      if (data?.user.status === true) {
        toast(`Welcome ${data.user.first_name}`, {
          icon: '👏',
        });
        localStorage.setItem(LOCAL_STORAGE.admin, JSON.stringify(data));
        return data;
      } else {
        toast.error('Your Account is deactivated!');
        return data;
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
      state.userInfo = null;
      localStorage.removeItem(LOCAL_STORAGE.auth);
      localStorage.removeItem(LOCAL_STORAGE.admin);
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
