import {createSlice} from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addToBg: (state, action) => {
       state.push(action.payload);
    },
    
    deleteToBag: (state, action) => {
      return state.filter(itemId=> itemId !== action.payload);
   },
  }
});

export const bagActions = bagSlice.actions;

export default bagSlice;
