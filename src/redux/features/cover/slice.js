import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  cover: {
    data: "",
  },
  loading: false,
};

export const coverSlice = createSlice({
  name: "cover",
  initialState,
  reducers: {
    getCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCover: (state, action) => {
      state.cover = action.payload;
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
  },
});

export const {
  getCharacters,
  setCover,
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} = coverSlice.actions;

export const selectCover = (state) => state.cover;

export default coverSlice.reducer;
