import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "./Urls";

const initialState = { data: [], isLoading: false, isError: false };

// First, create the thunk
export const addImageHistoryAsync = createAsyncThunk(
  "imagesBazar/addHistory",

  async ({ imageId, imageUrl, userId }) => {
    // console.log("11 -- > ", backendUrl.addFavorite);
    // console.log("imageId - " , imageId  )
    // console.log("imageUrl - " , imageUrl  )
    // console.log("userId - " , userId  )

    const response = await axios.post(backendUrl.addHistory, {
      imageId: imageId,
      imageUrl: imageUrl,
      userId: userId,
    });
    // console.log(response.data)
    return response.data;
  }
);

export const getImagesHistoryAsync = createAsyncThunk(
  "imagesBazar/getHistory",

  async () => {
    const response = await axios.get(backendUrl.addHistory);
    // console.log(response.data)
    return response.data;
  }
);

export const deleteHistoryAsync = createAsyncThunk(
  "imagesBazar/deleteHistory",

  async ({ userId, imageId }) => {
    // console.log("selete id ", id);
    const url = `${backendUrl.deleteHistory}/${userId}/${imageId}`;
    // console.log("url ", url);
    const response = await axios.delete(url);
    // console.log(response.data);
    return response.data;
  }
);

const HistorySlice = createSlice({
  name: "imagesHistory",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addImageHistoryAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(addImageHistoryAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        alert(action.payload.msg);
        state.data = action.payload;
      })

      .addCase(addImageHistoryAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(getImagesHistoryAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getImagesHistoryAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(getImagesHistoryAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(deleteHistoryAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(deleteHistoryAsync.fulfilled, (state, action) => {
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

      .addCase(deleteHistoryAsync.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// export const { } = FavoritesSlice.actions;
export default HistorySlice.reducer;
