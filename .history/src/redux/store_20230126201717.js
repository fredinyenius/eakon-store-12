import { configureStore } from "@reduxjs/toolkit";
import  aboutReducer  from "./slices/aboutUsSlice";
import homeReducer from "./slices/homeSlice";
import contacReducer from "./slices/contacSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    aboutUs: aboutReducer,
    contac: contacReducer
  }
});