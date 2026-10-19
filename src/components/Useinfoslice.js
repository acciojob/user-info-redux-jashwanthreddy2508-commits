import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:"",
};


const Useinfoslice = createSlice({
  name: "info",
  initialState,
  reducers: {

  edited:(state,action)=>{
  state.value=action.payload
  },
 });

export const {edited}=Useinfoslice.actions
export default Useinfoslice.reducer;
