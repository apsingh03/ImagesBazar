import { configureStore, Tuple } from "@reduxjs/toolkit";

import AddDataSlice from "./Slices/AddDataSlice";
import DataByIdSlice from "./Slices/DataByIdSlice";
import signUpSlice from "./Slices/SignUpSlice"
import SignInSlice from './Slices/SignInSlice';
import FavoritesSlice from "./Slices/FavoritesSlice";
import HistorySlice from "./Slices/HistorySlice";


export const store = configureStore({
  reducer: {
    getData: AddDataSlice,
    getDataBy: DataByIdSlice,
    signup : signUpSlice,
    signin : SignInSlice,
    favorites : FavoritesSlice,
    history : HistorySlice,

  },
});
