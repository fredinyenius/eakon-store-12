import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadHeroProducts = createAsyncThunk(
  'home/fetchReadHeroProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/productos?filters[posicion][slug][$eq]=cabecera&populate=subcategoria,marca,imagen`
      };
      const { data } = await axiosInstance(options);
      return data.data ?? [];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchReadBestSellersProducts = createAsyncThunk(
  'home/fetchReadBestSellersProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/productos?filters[posicion][slug][$eq]=mas-vendidos&populate=marca,imagen`
      };
      const { data } = await axiosInstance(options);
      return data.data ?? [];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);