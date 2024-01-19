import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const initialState = { data: [], isLoading: false, isError: false };

// First, create the thunk
export const addRestaurantAsync = createAsyncThunk(
  "restaurants/addRestaurant",

  async ({ name, cuisine, address, city, rating }) => {
    // console.log("11 -- > ", name, cuisine, address, city, rating);
    const response = await axios.post(
      "https://datavalidation.pythonanywhere.com/restaurant/add/",
      {
        name: name,
        cuisine: cuisine,
        address: address,
        city: city,
        rating: rating,
      }
    );
    // console.log(response.data)
    return response.data;
  }
);

export const updateRestaurantAsync = createAsyncThunk(
  "restaurants/updateRestaurant",

  async ({ resoId, name, cuisine, address, city, rating }) => {
    // console.log("11 -- > ", resoId , name, cuisine, address, city, rating);

    const response = await axios.put(
      "https://datavalidation.pythonanywhere.com/restaurant/update/",
      {
        resoId: resoId,
        name: name,
        cuisine: cuisine,
        address: address,
        city: city,
        rating: rating,
      }
    );
    // console.log(response.data)
    return response.data;
  }
);

export const getRestaurantAsync = createAsyncThunk(
  "restaurants/getRestaurant",

  async () => {
    const response = await axios.get(
      "https://datavalidation.pythonanywhere.com/restaurant/add/"
    );
    // console.log(response.data)
    return response.data;
  }
);

export const deleteRestaurantAsync = createAsyncThunk(
  "restaurants/deleteRestaurant",

  async ({ id }) => {
    console.log("selete id ", id);
    const response = await axios.delete(
      `https://datavalidation.pythonanywhere.com/restaurant/delete/${id}`
    );
    // console.log(response.data);
    return response.data;
  }
);

const addRestaurantSlice = createSlice({
  name: "addRestaurant",
  initialState,
  reducers: {
    filterIt(state, action) {
      console.log("filter it ");

      // action.push(italianData);
      // console.log( "italianData ",  italianData)
    },

    sortByRating(state, action) {
      let ratingData = state.data.data.sort((a, b) => {
        return b.rating - a.rating;
      });

      state.data.data = ratingData;
    },

    sortByName(state, action) {
      let nameData = state.data.data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      state.data.data = nameData;
    },

    filterItalian(state, action) {
      let italianData =
        state.data.data &&
        state.data.data.filter((data) => {
          return data.cuisine === "italian";
        });

      console.log("italianData -> ", italianData);

      state.data.data = italianData;
    },

    filterMaxican(state, action) {
      let maxicanData =
        state.data.data &&
        state.data.data.filter((data) => {
          return data.cuisine === "maxican";
        });

      console.log("maxicanData -> ", maxicanData);

      state.data.data = maxicanData;
    },

    filterAll(state, action) {
      // let allData = state.data.data.map( (data) => {
      //   return data
      // });

      state.data.data = action.payload;

      // console.log( "filterAll -> ", allData )

      // state.data.data = {...allData};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addRestaurantAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(addRestaurantAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        alert(action.payload.msg);
        state.data = action.payload;
      })

      .addCase(addRestaurantAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(getRestaurantAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getRestaurantAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getRestaurantAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(deleteRestaurantAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(deleteRestaurantAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        alert(action.payload.msg);

        const { id } = action.meta.arg;

        // state.data.data.findinde
        const blogIdx = state.data.data.findIndex((data) => {
          return data.id === id;
        });

        state.data.data.splice(blogIdx, 1);
      })

      .addCase(deleteRestaurantAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(updateRestaurantAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(updateRestaurantAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        alert(action.payload.msg);
        state.data = action.payload;
      })

      .addCase(updateRestaurantAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const {
  sortByName,
  sortByRating,
  filterItalian,
  filterMaxican,
  filterAll,
} = addRestaurantSlice.actions;
export default addRestaurantSlice.reducer;
