import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './cars/carsSlice';
import { persistedFavoritesReducer } from './favorites/favoritesSlice';

import { persistStore } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

// експортуємо стор прогнаний через персістор
export const persistor = persistStore(store);
