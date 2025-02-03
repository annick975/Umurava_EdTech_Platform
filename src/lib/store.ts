import { configureStore } from '@reduxjs/toolkit';
import { challengesApi } from './api/challengesApi';

export const store = configureStore({
  reducer: {
    [challengesApi.reducerPath]: challengesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(challengesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;