import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
   roles: number[];
   accessToken: string | null;
   searchText: string;
}

const initialState: IInitialState = {
   roles: [],
   accessToken: null,
   searchText: "",
};

const authSlice = createSlice({
   name: "auth",
   initialState: initialState,
   reducers: {
      setCredentials: (state, action) => {
         const { accessToken, roles } = action.payload;
         state.roles = roles;
         state.accessToken = accessToken;
      },
      logOut: (state) => {
         state.roles = [];
         state.accessToken = null;
      },
      setSearchText: (state, action) => {
         state.searchText = action.payload;
      }
   },
});

export const { setCredentials, logOut, setSearchText } = authSlice.actions;

export default authSlice.reducer; 
