import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  cover: {
    data: "",
  },
  loading: false,
  request: {},
};

export const coverSlice = createSlice({
  name: "cover",
  initialState,
  reducers: {
    getCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCover: (state, action) => {
      state.cover = action.payload.data;
    },
    fetchDataStart: (state) => {
      state.loading = true; // Set loading to true when the request starts
    },
    fetchDataSuccess: (state, action) => {
      state.characters = action?.payload?.data || [];
      state.loading = false; // Set loading to false when the request is successful
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false; // Set loading to false on failure
      state.error = action?.payload?.error_message || "Something went wrong";
    },
    createCoverSuccess: (state, action) => {
      state.request = action?.payload?.data || {};
    },
    createCoverFailure: (state, action) => {
      state.request = action.payload;
    },
    getCoversSuccess: (state, action) => {
      state.request = action.payload;
    },
    getCoversFailure: (state, action) => {
      state.request = action.payload;
    },
  },
});

export const {
  getCharacters,
  setCover,
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  createCoverSuccess,
  createCoverFailure,
} = coverSlice.actions;

export const selectCover = (state) => state.cover;

export default coverSlice.reducer;
