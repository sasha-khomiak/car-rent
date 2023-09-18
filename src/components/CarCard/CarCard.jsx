import React from 'react';
import { useState } from 'react';
import {
  CarCardContainer,
  Image,
  Favorite,
  ImageThumb,
  MainInfo,
  Make,
  Model,
  Year,
  RentalPrice,
  ExtraInfo,
  ReviewItem,
  Delimiter,
  ButtonLearnMore,
} from './CarCard.styled';

import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'redux/favorites/favoritesSlice';

import DelimiterIco from '../../images/vector-line.svg';
import FavoriteIco from '../../images/favorive.svg';
import FavoriteActiveIco from '../../images/favorive-active.svg';

import CarModal from 'components/CarModal/CarModal';

const body = document.querySelector('body');

// component
const CarCard = ({ car }) => {
  // vars for layout
  const adress = car.address.split(', ');
  const country = adress[adress.length - 1];
  const city = adress[adress.length - 2];

  // dispatch and favs
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  // state of modal
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  // Перемикання модалки
  const handleToggleModal = () => {
    setIsOpenedModal(prevState => !prevState);
    if (isOpenedModal === true) {
      body.style.overflow = 'scroll';
    }
    if (isOpenedModal === false) {
      body.style.overflow = 'hidden';
    }
  };

  // Закриття модалки
  const closeModal = () => {
    setIsOpenedModal(false);
    body.style.overflow = 'scroll';
  };

  return (
    <>
      {/* показ модалки за умовою */}
      {isOpenedModal && (
        <CarModal
          handleToggleModal={handleToggleModal}
          closeModal={closeModal}
          car={car}
        />
      )}
      <CarCardContainer>
        <div>
          <ImageThumb>
            <Image src={car.img} alt="Car Image" />
            {/* показ серця не залитого за умовою */}
            {!favorites.includes(car.id) && (
              <Favorite
                src={FavoriteIco}
                onClick={() => dispatch(toggleFavorite(car.id))}
              />
            )}
            {/* показ серця залитого за умовою */}
            {favorites.includes(car.id) && (
              <Favorite
                src={FavoriteActiveIco}
                onClick={() => dispatch(toggleFavorite(car.id))}
              />
            )}
          </ImageThumb>
          <MainInfo>
            <div>
              <Make>{car.make} </Make>
              <Model>{car.model}</Model>
              <Year>, {car.year}</Year>
            </div>
            <RentalPrice>{car.rentalPrice}</RentalPrice>
          </MainInfo>
          <ExtraInfo>
            <ReviewItem>{city}</ReviewItem>
            <Delimiter src={DelimiterIco} />
            <ReviewItem>{country}</ReviewItem>
            <Delimiter src={DelimiterIco} />
            <ReviewItem>{car.rentalCompany}</ReviewItem>
            <Delimiter src={DelimiterIco} />
            <ReviewItem>Premium</ReviewItem>
          </ExtraInfo>
          <ExtraInfo>
            <ReviewItem>{car.type}</ReviewItem>
            <Delimiter src={DelimiterIco} />
            <ReviewItem>{car.make}</ReviewItem>
            <Delimiter src={DelimiterIco} />
            <ReviewItem>{car.id}</ReviewItem>
            <Delimiter src={DelimiterIco} />
            <ReviewItem>Power liftgate</ReviewItem>
          </ExtraInfo>
        </div>
        <ButtonLearnMore type="button" onClick={handleToggleModal}>
          Learn more
        </ButtonLearnMore>
      </CarCardContainer>
    </>
  );
};

export default CarCard;
