import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },
    logout: (state) => {
      return {
        ...state,
        user: null,
        accessToken: null,
      };
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
