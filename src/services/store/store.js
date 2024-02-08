import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import modalReducer from "./reducers/modalSlice";
import navMenuReducer from "./reducers/navMenuSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    navMenu: navMenuReducer,
  },
});
