import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

//Reducers
import userReducer from '../Reducers/userSlice';
import { apiSlice } from '../Reducers/Api/apiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
