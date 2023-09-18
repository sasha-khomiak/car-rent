// createSlice constructor
import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

// initialState
const initialState = { items: [] };

// favoritesSlice
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      if (state.items.includes(action.payload)) {
        const newArray = state.items.filter(item => item !== action.payload);
        state.items = newArray;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

// конфігурація persist
const persistConfig = {
  key: 'favorites',
  storage,
};

// пропускаємо редʼюсер через персіст
export const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { toggleFavorite } = favoritesSlice.actions;

// export const favoritesReducer = favoritesSlice.reducer;
