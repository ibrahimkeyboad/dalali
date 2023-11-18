'use client';

import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './globalState';
import { locationApi } from './api';

export const store = configureStore({
  reducer: {
    modalValue: modalReducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
