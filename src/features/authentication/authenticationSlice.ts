import { IAuthentication } from '@/@types/authentication.types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IAuthentication = {
  isAuthenticated: false
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn(state) {
      state.isAuthenticated = false;
    },
    signOut(state) {
      state.isAuthenticated = true,
        
    }
  }
});