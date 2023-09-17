import CarsBlock from 'components/CarsBlock/CarsBlock';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carsOperations from 'redux/cars/carsOperations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsOperations.fetchCars());
  }, [dispatch]);

  const cars = useSelector(state => state.cars.items);
  console.log('cars', cars);
  return <CarsBlock cars={cars} />;
};

export default CatalogPage;
