import CarsBlock from 'components/CarsBlock/CarsBlock';
// import FilterSidebar from 'components/FilterSidebar/FilterSidebar';
import LoadMore from 'components/LoadMore/LoadMore';
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

  // const [selectedBrand, setSelectedBrand] = useState('');

  let carsForShow = [];

  carsForShow = cars.filter((element, index, array) => index < page * 8);

  return (
    <>
      {/* <FilterSidebar setSelectedBrand={setSelectedBrand} /> */}
      <CarsBlock cars={carsForShow} />
      {cars.length > page * 8 && <LoadMore setPage={setPage} />}
    </>
  );
};

export default CatalogPage;
