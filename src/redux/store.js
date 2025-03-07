import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./likeStore";
export let store = configureStore({
  reducer: {
    likeSlice,
  },
});
