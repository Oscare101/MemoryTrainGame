import {Middleware} from '@reduxjs/toolkit';
import {storage, USER_DATA_KEY} from './userData';

export const persistenceMiddleware: Middleware =
  storeAPI => next => (action: any) => {
    // Let the action hit the reducer first
    const result = next(action);

    // If it’s one of our userData actions, re-persist the slice
    if (action.type.startsWith('userData/')) {
      const state = storeAPI.getState().userData;
      try {
        storage.set(USER_DATA_KEY, JSON.stringify(state));
      } catch (e) {
        console.error('Failed to persist userData', e);
      }
    }

    return result;
  };
