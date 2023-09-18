import CarsBlock from 'components/CarsBlock/CarsBlock';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carsOperations from 'redux/cars/carsOperations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsOperations.fetchCars());
  }, [dispatch]);
  const cars = useSelector(state => state.cars.items);
  // console.log('cars', cars);
  const [page, setPage] = useState(1);
  let carsForShow = [];

  carsForShow = cars.filter((element, index, array) => index < page * 8);

  return (
    <>
      <CarsBlock cars={carsForShow} />
      {cars.length > page * 8 && (
        <button
          type="button"
          onClick={() => setPage(prevState => prevState + 1)}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
