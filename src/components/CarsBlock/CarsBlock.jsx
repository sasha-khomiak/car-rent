import React from 'react';

import {
  StyledSection,
  StyledContainer,
  SectionHeader,
} from './CarsBlock.styled';
import CarCard from 'components/CarCard/CarCard';

const CarsBlock = ({ cars }) => {
  return (
    <StyledSection>
      <SectionHeader>Cars for rent</SectionHeader>
      <StyledContainer>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </StyledContainer>
    </StyledSection>
  );
};

export default CarsBlock;
