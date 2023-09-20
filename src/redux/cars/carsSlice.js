// createSlice constructor
import { createSlice } from '@reduxjs/toolkit';

// connect carsOperations
import carsOperations from './carsOperations';

// initialState
const initialState = { items: [], showLoader: false };

// carsSlice
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(carsOperations.fetchCars.pending, state => {
        // state.isFetchingCurrentUser = true;
        state.showLoader = true;
      })
      //set Current User fulfilled
      .addCase(carsOperations.fetchCars.fulfilled, (state, action) => {
        // console.log('action', action);
        state.items = action.payload;
        state.showLoader = false;
        // console.log('state.items', state.items);
        // state.isLoggedIn = true;
        // state.isFetchingCurrentUser = false;
      })
      //set Current User rejected
      .addCase(carsOperations.fetchCars.rejected, state => {
        // state.isFetchingCurrentUser = false;
        state.showLoader = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
