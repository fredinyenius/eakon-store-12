import { createSlice } from "@reduxjs/toolkit";
import {fetchReadContacData} from


const initialState = {
  loading: false,
  error: {},
  contacData: {}
};

export const contacSlice = createSlice({
  name: 'contactUs',
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

export default contacSlice.reducer;