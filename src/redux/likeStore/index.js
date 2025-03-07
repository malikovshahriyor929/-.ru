import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  data: JSON.parse(localStorage.getItem("like")) || [],
};

let likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    liked: (state, { payload }) => {
      state.data.push(payload);
      localStorage.setItem("like", JSON.stringify(state.data));
    },
  },
});
export const { liked } = likeSlice.actions;
export default likeSlice.reducer;
