import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  FirstName: "",
  LastName: "",
  ProfileName: "",
  Email: "",
};
export const UserSlice = createSlice({
  name: "User",
  initialState: InitialState,
  reducers: {
    setFirtName: (state, action) => {
      state.FirstName = action.payload;
    },

    setLastName: (state, action) => {
      state.LastName = action.payload;
    },
    setProfileName: (state, action) => {
      state.ProfileName = action.payload;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
  },
});
export default UserSlice.reducer;
export const { setFirtName, setLastName, setProfileName, setEmail } =
  UserSlice.actions;
