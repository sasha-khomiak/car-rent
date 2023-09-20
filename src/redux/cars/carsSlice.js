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
      // Pending Cars
      .addCase(carsOperations.fetchCars.pending, state => {
        state.showLoader = true;
      })
      // fulfilled Cars
      .addCase(carsOperations.fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.showLoader = false;
      })
      // rejected cars
      .addCase(carsOperations.fetchCars.rejected, state => {
        state.showLoader = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
