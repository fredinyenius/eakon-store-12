import { configureStore } from "@reduxjs/toolkit";
import { aboutUsSlice } from "./slices/aboutUsSlice";
import homeReducer from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    aboutUs: aboutReducer
  }
});