import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
  status: true,
};

const navMenuSlice = createSlice({
  name: "navMenu",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const selectNavMenu = (state) => state.navMenu;
export const { toggleMenu, setStatus } = navMenuSlice.actions;

export default navMenuSlice.reducer;
