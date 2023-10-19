import { createSlice } from "@reduxjs/toolkit";

export const focusSlice = createSlice({
  name: "focus",
  initialState : {
    isFocused: false,
  },
  reducers: {
    setFocus: (state) => {
      state.isFocused = true;
    },
    clearFocus: (state) => {
      state.isFocused = false;
    },
  },
});

export const { setFocus, clearFocus } = focusSlice.actions;
export default focusSlice.reducer;
