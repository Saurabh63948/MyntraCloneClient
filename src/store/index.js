import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemsSlice";
import fetchstatusSlice from "./fetchstatusSlice";
import bagSlice from "./bagSlice";
const myntraStore = configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus : fetchstatusSlice.reducer,
    bag : bagSlice.reducer,
  }
});
export default myntraStore;