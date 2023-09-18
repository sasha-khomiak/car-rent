import React from 'react';

import { ButtonContainer, ButtonStyled } from './LoadMore.styled';

const LoadMore = ({ setPage }) => {
  return (
    <ButtonContainer>
      <ButtonStyled
        type="button"
        onClick={() => setPage(prevState => prevState + 1)}
      >
        Load more
      </ButtonStyled>
    </ButtonContainer>
  );
};

export default LoadMore;
