import React, { useEffect } from 'react';
import CarsBlock from 'components/CarsBlock/CarsBlock';
import { useDispatch, useSelector } from 'react-redux';
import carsOperations from 'redux/cars/carsOperations';
import NoFavorites from 'components/NoFavorites/NoFavorites';

const FavoritesPage = () => {
  // getting cars from API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsOperations.fetchCars());
  }, [dispatch]);
  const cars = useSelector(state => state.cars.items);

  // getting Favorites list
  const favorites = useSelector(state => state.favorites.items);

  //filtering cars
  let filteredCars = [];
  filteredCars = cars.filter(car => favorites.includes(car.id));

  return (
    <>
      {filteredCars.length !== 0 && <CarsBlock cars={filteredCars} />}

      {filteredCars.length === 0 && <NoFavorites />}
    </>
  );
};

export default FavoritesPage;
