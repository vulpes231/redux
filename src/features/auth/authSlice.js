import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loading: false,
  accessToken: null,
  error: "",
};

export const loginUsers = createAsyncThunk("auth/loginUsers", () => {
  return axios
    .get("http://localhost:3500")
    .then((response) => (response.data = accessToken));
});

// axios.post()

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload;
      state.isLoggedIn = true;
      state.error = "";
    });
    builder.addCase(loginUsers.rejected, (state, action) => {
      state.loading = false;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
