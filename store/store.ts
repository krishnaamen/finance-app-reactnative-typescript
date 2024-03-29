import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import entryReducer from "./entrySlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    entries: entryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
