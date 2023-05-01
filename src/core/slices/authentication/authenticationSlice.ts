import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { IAuthentication } from "@/@types/authentication.types";
import { AccessGroupEnum } from "@/@types/user.types";

import { makeUser } from "@/core/services/mock/authentication";

const initialState: IAuthentication = {
  isAuthenticated: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<IAuthentication>) {
      state = action.payload;
    },
    signInMock(state) {
      state.isAuthenticated = true;
      state.user = makeUser(AccessGroupEnum.MEMBER);
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export const { signIn, signInMock, signOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;
