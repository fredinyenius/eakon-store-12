import { createSlice } from "@reduxjs/toolkit";
import { fetchReadContacData } from "../thunks/aboutUsThunk";

const initialState = {
  loading: false,
  error: {},
  aboutUsData: {}
};

export const aboutSlice = createSlice({
  name: 'contac',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadContacData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadContacData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.aboutUsData = action.payload.data;
    });
    builder.addCase(fetchReadContacData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.aboutUsData = {};
    });
  }
});

export default aboutSlice.reducer;
