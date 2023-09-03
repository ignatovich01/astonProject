import { configureStore } from '@reduxjs/toolkit';
import { favorites } from './slices/favoriteSlice';
import { history } from './slices/historySlice';
import { moviesApi } from './API/moviesAPI';
import { user } from './slices/userSlice';

export const store = configureStore({
   reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
      favorites,
      history,
      user,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesApi.middleware),
});
