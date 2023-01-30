import { createSlice } from "@reduxjs/toolkit";
import { fetchReadServisData } from "../thunks/servisThunk";

const initialState = {
  loading: false,
  error: {},
  servisData: {}
};

export const servisSlice = createSlice({
  name: 'servis',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadServisData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadServisData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.servisData = action.payload.data;
    });
    builder.addCase(fetchReadServisData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.servisData = {};
    });
  }
});

export default servisSlice.reducer;