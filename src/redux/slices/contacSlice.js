import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  error: {},
  contacData: {}
};

export const contacSlice = createSlice({
  name: 'contactUs',
  initialState,
 
});

export default contacSlice.reducer;