import { configureStore } from "@reduxjs/toolkit";
import  aboutReducer  from "./slices/aboutUsSlice";
import homeReducer from "./slices/homeSlice";
import contactReducer from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    aboutUs: aboutReducer,
    contact: contactReducer
  }
});