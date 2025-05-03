// store.ts
import {configureStore} from '@reduxjs/toolkit';
import userDataReducer from './userData';
import {persistenceMiddleware} from './persistenceMiddleware';

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(persistenceMiddleware),
});
