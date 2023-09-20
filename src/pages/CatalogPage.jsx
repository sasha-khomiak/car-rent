import CarsBlock from 'components/CarsBlock/CarsBlock';
import FilterSidebar from 'components/FilterSidebar/FilterSidebar';
import LoadMore from 'components/LoadMore/LoadMore';
import NoSearchingResults from 'components/NoSearchingResults/NoSearchingResults';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carsOperations from 'redux/cars/carsOperations';

import Loader from 'components/Loader/Loader';

const CatalogPage = () => {
  // getting cars from API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsOperations.fetchCars());
  }, [dispatch]);
  const cars = useSelector(state => state.cars.items);
  const showLoader = useSelector(state => state.cars.showLoader);

  // page for pagination
  const [page, setPage] = useState(1);

  //searching fields
  const [selectedBrand, setSelectedBrand] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  // filtered cars
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleFilter = () => {
    setPage(1);
    let tempCars = cars;
    //перевірка по фірмі
    if (selectedBrand !== '') {
      tempCars = tempCars.filter(
        item => item.make.toLowerCase() === selectedBrand.toLowerCase()
      );
    }
    //перевірка по ціні некоректна
    // if (price !== '') {
    //   tempCars = tempCars.filter(item => {
    //     const justRentalPrice = item.rentalPrice.slice(
    //       1,
    //       item.rentalPrice.length
    //     );
    //     if (justRentalPrice <= price) {
    //       return item;
    //     }
    //   });
    // }

    //перевірка по ціні
    if (price !== '') {
      const array = [...tempCars];
      tempCars = [...[]];

      for (let car of array) {
        const justRentalPrice = car.rentalPrice.slice(
          1,
          car.rentalPrice.length
        );

        if (justRentalPrice <= price) {
          tempCars.push(car);
        }
      }
    }

    //перевірка по мінімальному пробігу
    if (from !== '') {
      tempCars = tempCars.filter(item => from <= item.mileage);
    }

    //перевірка по максимальному пробігу
    if (to !== '') {
      tempCars = tempCars.filter(item => to >= item.mileage);
    }

    setFilteredCars(tempCars);
  };

  // cars for layout
  let carsForShow = [];

  carsForShow = filteredCars.filter(
    (element, index, array) => index < page * 8
  );

  return (
    <>
      {showLoader && <Loader />}
      <FilterSidebar
        setSelectedBrand={setSelectedBrand}
        selectedBrand={selectedBrand}
        setPrice={setPrice}
        price={price}
        setFrom={setFrom}
        from={from}
        to={to}
        setTo={setTo}
        handleFilter={handleFilter}
      />
      <CarsBlock cars={carsForShow} />
      {carsForShow.length === 0 && !showLoader && <NoSearchingResults />}
      {filteredCars.length > page * 8 && <LoadMore setPage={setPage} />}
    </>
  );
};

export default CatalogPage;
