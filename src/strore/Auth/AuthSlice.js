import { createSlice } from '@reduxjs/toolkit';
import {
  getRefreshUser,
  register,
  userLogin,
} from 'strore/contacts/Operations';

export const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    error: null,
    isLoading: false,
    token: null,
    userEmail: null,
    userName: null,
    isAuth: false,
  },

  reducers: {
    logOutAction: state => {
      state.error = null;
      state.isLoading = false;
      state.token = null;
      state.userEmail = null;
      state.userName = null;
      state.isAuth = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.userEmail = payload.user.email;
        state.userName = payload.user.name;
        state.isAuth = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      })
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.userEmail = payload.user.email;
        state.userName = payload.user.name;
        state.isAuth = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      })
      .addCase(getRefreshUser.pending, state => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(getRefreshUser.fulfilled, (state, { payload }) => {
        state.userEmail = payload.email;
        state.userName = payload.name;
        state.isAuth = true;
      })
      .addCase(getRefreshUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logOutAction } = authSlice.actions;
