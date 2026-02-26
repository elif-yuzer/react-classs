import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    createUser: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
      // axios.post(URL,state.email)
      // localStorage.setItem("email",state.email)
    },

    removeUser: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { createUser, removeUser } = yetkiSlice.actions;
export default yetkiSlice.reducer;
