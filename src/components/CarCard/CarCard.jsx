import React from 'react';

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

// import CarImage from '../../images/aMsrBLBrO.jpg';
import DelimiterIco from '../../images/vector-line.svg';
// import FavoriteIco from '../../images/favorive.svg';
import FavoriteActiveIco from '../../images/favorive-active.svg';

const CarCard = ({ car }) => {
  const adress = car.address.split(', ');
  const country = adress[adress.length - 1];
  const city = adress[adress.length - 2];

  return (
    <CarCardContainer>
      <ImageThumb>
        <Image src={car.img} alt="Car Image" />
        <Favorite src={FavoriteActiveIco} />
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
      <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
    </CarCardContainer>
  );
};

export default CarCard;
