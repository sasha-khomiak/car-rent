import React from 'react';

import { CarCardContainer, Image, ImageThumb } from './CarCard.styled';

import CarImage from '../../images/aMsrBLBrO.jpg';

const CarCard = () => {
  return (
    <CarCardContainer>
      <ImageThumb>
        <Image src={CarImage} alt="Car Image" />
      </ImageThumb>
      CarCard
    </CarCardContainer>
  );
};

export default CarCard;
