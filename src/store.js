import { configureStore } from "@reduxjs/toolkit";
import flashDealsReducer from "./features/flashDealsSlice";

export const store = configureStore({
  reducer: {
    items: flashDealsReducer,
  },
});
