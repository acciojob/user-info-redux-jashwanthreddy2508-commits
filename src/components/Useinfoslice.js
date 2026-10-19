
import { createSlice } from "@reduxjs/toolkit";

const Useinfoslice = createSlice({
  name: "response",

  initialState: {
    value: {
      name: "",
      email: ""
    }
  },

  reducers: {
    edited: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload
      };
    }
  }
});

export const { edited } = Useinfoslice.actions;

export default Useinfoslice.reducer;

