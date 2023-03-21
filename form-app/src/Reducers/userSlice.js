import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  dni: '',
  isAdmin: '',
  signature: '',
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.dni = action.payload.dni;
      state.isAdmin = action.payload.isAdmin;
      state.signature = action.payload.signature;
      state.id = action.payload.id;
    },
    unSetUser: (state) => {
      state.fullName = '';
      state.email = '';
      state.dni = '';
      state.isAdmin = '';
      state.signature = '';
      state.id = '';
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
