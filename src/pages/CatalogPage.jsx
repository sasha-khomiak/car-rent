import CarsBlock from 'components/CarsBlock/CarsBlock';
import FilterSidebar from 'components/FilterSidebar/FilterSidebar';
import LoadMore from 'components/LoadMore/LoadMore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carsOperations from 'redux/cars/carsOperations';

const CatalogPage = () => {
  // getting cars from API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsOperations.fetchCars());
  }, [dispatch]);
  const cars = useSelector(state => state.cars.items);

  // page for pagination
  const [page, setPage] = useState(1);

  //searching fields
  const [selectedBrand, setSelectedBrand] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  // filtered cars
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilter = () => {
    setPage(1);
    let tempCars = cars;
    //перевірка по фірмі
    if (selectedBrand !== '') {
      tempCars = tempCars.filter(
        item => item.make.toLowerCase() === selectedBrand.toLowerCase()
      );
    }
    //перевірка по ціні
    if (price !== '') {
      tempCars = tempCars.filter(item => {
        const justRentalPrice = item.rentalPrice.slice(
          1,
          item.rentalPrice.length
        );
        if (justRentalPrice <= price) {
          return item;
        }
      });
    }

    //перевірка по мінімальному пробігу
    if (from !== '') {
      tempCars = tempCars.filter(item => {
        if (from <= item.mileage) {
          return item;
        }
      });
    }

    //перевірка по максимальному пробігу
    if (to !== '') {
      tempCars = tempCars.filter(item => {
        if (to >= item.mileage) {
          return item;
        }
      });
    }

    setFilteredCars(tempCars);
  };

  // cars for layout
  let carsForShow = [];
  // if (
  //   selectedBrand === '' &&
  //   price === '' &&
  //   from === '' &&
  //   to === '' &&
  //   page === 1
  // ) {
  //   carsForShow = filteredCars.filter(
  //     (element, index, array) => index < page * 8
  //   );
  // } else {
  carsForShow = filteredCars.filter(
    (element, index, array) => index < page * 8
  );
  // }

  return (
    <>
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
      {carsForShow.length === 0 && <p>there is no results</p>}
      {filteredCars.length > page * 8 && <LoadMore setPage={setPage} />}
    </>
  );
};

export default CatalogPage;
