import React from 'react';

import { StyledSection, StyledContainer } from './CarsBlock.styled';
import CarCard from 'components/CarCard/CarCard';

const CarsBlock = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </StyledContainer>
    </StyledSection>
  );
};

export default CarsBlock;
