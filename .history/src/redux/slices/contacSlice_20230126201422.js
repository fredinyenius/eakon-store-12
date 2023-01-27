import { createSlice } from "@reduxjs/toolkit";


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