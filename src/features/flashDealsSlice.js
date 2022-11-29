import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://dummyjson.com/products";

const initialState = {
  flashDealsItems: [],
  total: 0,
  isLoading: true,
};

export const getFlashDealsItem = createAsyncThunk(
  "items/getFlashDealsItem",
  async () => {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  }
);

const flashDealsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    increase: (state) => {
      state.total = state.total + 1;
    },
  },
  extraReducers: {
    [getFlashDealsItem.pending]: (state) => {
      state.isLoading = true;
    },
    [getFlashDealsItem.fulfilled]: (state, action) => {
      state.flashDealsItems = action.payload?.products?.slice(0, 7);
      state.isLoading = false;
    },
    [getFlashDealsItem.rejected]: (state) => {
      state.isLoading = false;
      //! Handle Error
    },
  },
});

export const { increase } = flashDealsSlice.actions;

export default flashDealsSlice.reducer;
