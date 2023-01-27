import { createSlice } from "@reduxjs/toolkit";
import {fetchReadContacData} from "../thunks/contacThunk";


const initialState = {
  loading: false,
  error: {},
  contacData: {}
};

export const contacSlice = createSlice({
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

export default contacSlice.reducer;