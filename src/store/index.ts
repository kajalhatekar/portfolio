import { configureStore } from "@reduxjs/toolkit";
import themeReducer, { persistThemeState } from "./themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

store.subscribe(() => {
  persistThemeState(store.getState().theme);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
