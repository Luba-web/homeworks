import { configureStore } from '@reduxjs/toolkit';
import factsReducer from './slice';

export const store = configureStore({
  reducer: {
    facts: factsReducer,
  },
});
