// createSlice constructor
import { createSlice } from '@reduxjs/toolkit';

// connect carsOperations
import carsOperations from './carsOperations';

// initialState
const initialState = { items: [] };

// carsSlice
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(carsOperations.fetchCars.pending, state => {
        // state.isFetchingCurrentUser = true;
      })
      //set Current User fulfilled
      .addCase(carsOperations.fetchCars.fulfilled, (state, action) => {
        // console.log('action', action);
        state.items = action.payload;
        // console.log('state.items', state.items);
        // state.isLoggedIn = true;
        // state.isFetchingCurrentUser = false;
      })
      //set Current User rejected
      .addCase(carsOperations.fetchCars.rejected, state => {
        // state.isFetchingCurrentUser = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
