import { configureStore } from '@reduxjs/toolkit';
import { deezerApi } from './services/deezerApi';
import { musixMatchApi } from './services/musixMatchApi';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [deezerApi.reducerPath]: deezerApi.reducer,
    [musixMatchApi.reducerPath]: musixMatchApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(deezerApi.middleware, musixMatchApi.middleware)
});
