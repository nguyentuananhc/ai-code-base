import { configureStore } from "@reduxjs/toolkit";
import coverReducer from "./features/cover/slice";

const store = configureStore({
  reducer: { covers: coverReducer },
});

export default store;
