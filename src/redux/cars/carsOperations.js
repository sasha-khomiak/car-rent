import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6505cefbef808d3c66f07d37.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/all',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/adverts');
      //   console.log('response', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const carsOperations = {
  fetchCars,
};
export default carsOperations;
