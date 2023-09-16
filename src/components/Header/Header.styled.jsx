import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledHeaderSection = styled.header`
  background-color: yellow;
`;

export const StyledHeaderContainer = styled.div`
  /*----Base mobile style 375 - 767 (адаптивний)----*/
  outline: 2px solid tomato;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;

  /*----Tablet style 768-1440 (adaptive) ----*/
  @media screen and (min-width: 768px) {
    max-width: 768px;
    /* padding: 0 32px; */
    /* padding-top: 24px; */
  }

  /*----Desktop style more than 1440 (adaptive)----*/

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
