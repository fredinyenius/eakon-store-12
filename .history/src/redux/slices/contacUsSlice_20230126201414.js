import { createSlice } from "@reduxjs/toolkit";
import { fetchReadContacUsData } from "../thunks/contacUsThunk";

const initialState = {
  loading: false,
  error: {},
  aboutUsData: {}
};

export const contacSlice = createSlice({
  name: 'contactUs',
  initialState,
 
});

export default contacSlice.reducer;