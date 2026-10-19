import { createSlice } from "@reduxjs/toolkit";

const Useinfoslice = createSlice({
  name: "response",

  initialState: {
    name: "",
    email: ""
  },

  reducers: {
    edited: (state, action) => {
      if (action.payload.name !== undefined) {
        state.name = action.payload.name;
      }

      if (action.payload.email !== undefined) {
        state.email = action.payload.email;
      }
    }
  }
});

export const { edited } = Useinfoslice.actions;

export default Useinfoslice.reducer;
