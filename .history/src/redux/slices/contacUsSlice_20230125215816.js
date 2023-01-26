import { createSlice } from "@reduxjs/toolkit";
import { fetchReadContacUsData } from "../thunks/contacUsThunk";

const initialState = {
  loading: false,
  error: {},
  aboutUsData: {}
};

export const aboutSlice = createSlice({
  name: 'contactUs',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadContacUsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadContacUsData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.aboutUsData = action.payload.data;
    });
    builder.addCase(fetchReadContacUsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.aboutUsData = {};
    });
  }
});

export default aboutSlice.reducer;