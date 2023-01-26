import { configureStore } from "@reduxjs/toolkit";
import { aboutReducer } from "./slices/aboutUsSlice";
import homeReducer from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    aboutUs: aboutReducer
  }
});