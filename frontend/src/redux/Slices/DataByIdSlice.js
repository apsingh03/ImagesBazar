import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { data: [], isLoading: false, isError: false };

export const getRestaurantByIdAsync = createAsyncThunk(
  "restaurant/getRestaurantById",

  async ({ id }) => {
    const response = await axios.get(
      `https://datavalidation.pythonanywhere.com/restaurant/getBy/${id}`
    );
    // console.log(response.data)
    return response.data;
  }
);

const dataByIdSlice = createSlice({
  name: "getRestaurantBySlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantByIdAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getRestaurantByIdAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // alert(action.payload.msg);
        state.data = action.payload;
      })

      .addCase(getRestaurantByIdAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default dataByIdSlice.reducer;
