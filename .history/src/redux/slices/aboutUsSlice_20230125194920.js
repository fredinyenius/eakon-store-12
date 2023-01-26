import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: {},
    aboutUsData: {}
};

export const aboutUsSlice = createSlice( {
  name: 'aboutUs',
  initialState,
  extraReducers:{}
  
});
export default aboutUsSlice.reducer;
