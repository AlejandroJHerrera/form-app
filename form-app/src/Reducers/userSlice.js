import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    unSetUser: (state) => {
      state.fullName = '';
      state.email = '';
      state.token = '';
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
