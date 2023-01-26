import { createSlice } from "@reduxjs/toolkit";
import { fetchReadAboutUsData } from "../thunks/aboutUsThunk";

const initialState = {
  loading: false,
  error: {},
  aboutUsData: {}
};

export const aboutSlice = createSlice({
  name: 'aboutUs',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadAboutUsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadAboutUsData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.aboutUsData = action.payload.data;
    });
    builder.addCase(fetchReadAboutUsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.aboutUsData = {};
    });
  }
});

export default aboutSlice.reducer;