import React from 'react';

import { StyledSection, StyledContainer } from './CarsBlock.styled';
import CarCard from 'components/CarCard/CarCard';

const CarsBlock = ({ cars }) => {
  return (
    <StyledSection>
      <StyledContainer>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}

        {/* <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard /> */}
      </StyledContainer>
    </StyledSection>
  );
};

export default CarsBlock;
