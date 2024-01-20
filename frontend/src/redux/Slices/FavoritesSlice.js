import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "./Urls";

const initialState = { data: [], isLoading: false, isError: false };

// First, create the thunk
export const addImageFavoriteAsync = createAsyncThunk(
  "imagesBazar/addToFavorite",

  async ({ imageId, imageUrl, userId }) => {

    const response = await axios.post(backendUrl.addFavorite, {
      imageId: imageId,
      imageUrl: imageUrl,
      userId: userId,
    });
    // console.log(response.data)
    return response.data;
  }
);

export const getImagesFavoritesAsync = createAsyncThunk(
  "imagesBazar/getFavorites",

  async () => {
    const response = await axios.get(backendUrl.addFavorite);
    // console.log(response.data)
    return response.data;
  }
);

export const deleteImageAsync = createAsyncThunk(
  "imagesBazar/deletefavorite",

  async ({ userId, imageId }) => {
    // console.log("selete id ", id);
    const url = `${backendUrl.deleteFavorite}/${userId}/${imageId}`;
    // console.log("url ", url);
    const response = await axios.delete(url);
    // console.log(response.data);
    return response.data;
  }
);

const FavoritesSlice = createSlice({
  name: "addFavorites",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addImageFavoriteAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(addImageFavoriteAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        alert(action.payload.msg);
        state.data = action.payload;
      })

      .addCase(addImageFavoriteAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(getImagesFavoritesAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getImagesFavoritesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getImagesFavoritesAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(deleteImageAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(deleteImageAsync.fulfilled, (state, action) => {
        state.isLoading = false;

        // console.log( action.payload );

        if (action.payload.msg === "Data Deleted") {
          alert(action.payload.msg);
        }

        const { id } = action.meta.arg;

        // state.data.data.findinde
        const imageIdx = state.data.data.findIndex((data) => {
          return data.id === id;
        });

        state.data.data.splice(imageIdx, 1);
      })

      .addCase(deleteImageAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// export const { } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
