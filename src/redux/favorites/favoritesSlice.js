// createSlice constructor
import { createSlice } from '@reduxjs/toolkit';

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

export const { toggleFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
