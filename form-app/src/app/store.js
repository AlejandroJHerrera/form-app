import { configureStore } from '@reduxjs/toolkit';

//Reducers
import userReducer from '../Reducers/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
