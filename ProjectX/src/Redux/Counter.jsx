import { createSlice } from "@reduxjs/toolkit";


// slicess

const counterSlice = createSlice({
  name: "Counter",
  initialState: { countNumber: 1000, username: "" },
  reducers: {
    increment: (state, action) => {
      state.countNumber++;
    },
    decrement: (state, action) => {
      state.countNumber--;
    },
    inc_by_user: (state, action) => {
      console.log("Action : ", action.payload);
      state.countNumber += action.payload;
    },
    updateUser: (state, action) => {
      state.username += action.payload;
    },
  },
});

export default counterSlice.reducer;
// actions is passed to increment and decrement function and it is export
export const { increment, decrement, inc_by_user, updateUser } =
  counterSlice.actions;
