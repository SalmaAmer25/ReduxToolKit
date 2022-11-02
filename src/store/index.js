import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducer/booksSlice";
import { counterReducer } from "./reducer/countSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    booksList: booksReducer,
  },
});
