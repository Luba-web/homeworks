import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import photosReducer from '../features/slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
  middleware: (getDefaultMiddleware) => customizedMiddleware,
});
