import { configureStore, Tuple } from "@reduxjs/toolkit";

import AddDataSlice from "./Slices/AddDataSlice";
import DataByIdSlice from "./Slices/DataByIdSlice";

export const store = configureStore({
  reducer: {
    addData: AddDataSlice,
    getDataBy: DataByIdSlice,
  },
});
