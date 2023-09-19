import React from 'react';

import {
  StyledSection,
  StyledContainer,
  Message,
  Image,
} from './NoSearchingResults.styled';

import SearchingGif from '../../images/searching.gif';

const NoSearchingResults = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Message>There is no matches</Message>
        <Message>Try to change request fields</Message>
        <Image src={SearchingGif} alt="no results" />
      </StyledContainer>
    </StyledSection>
  );
};

export default NoSearchingResults;
