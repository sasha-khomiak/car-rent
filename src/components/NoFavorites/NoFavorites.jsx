import React from 'react';

import {
  StyledSection,
  StyledContainer,
  Message,
  Image,
  LinkToCatalog,
} from './NoFavorites.styled';

import EyesGif from '../../images/NoResults.gif';

const NoFavorites = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Message>There is no favorite cars</Message>
        <Image src={EyesGif} alt="o results" />
        <LinkToCatalog to="/catalog">
          Follow to catalog and choose favorite cars
        </LinkToCatalog>
      </StyledContainer>
    </StyledSection>
  );
};

export default NoFavorites;
