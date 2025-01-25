import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NavState: false,
};

const NavigationSlice = createSlice({
  name: "Navigation",
  initialState,
  reducers: {
    Open: (state) => {
      state.NavState = !state.NavState;
    },
  },
});

export const { Open } = NavigationSlice.actions;
export default NavigationSlice.reducer;
