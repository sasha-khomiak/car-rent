import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledHeaderSection = styled.header`
  background-color: #3470ff;
`;

export const StyledHeaderContainer = styled.div`
  /*----Base mobile style 375 - 767 (адаптивний)----*/
  /* outline: 2px solid tomato; */
  margin: 0 auto;
  width: 100%;
  max-width: 375px;

  padding: 20px 50px;

  display: flex;
  gap: 20px;

  /*----Tablet style 768-1440 (adaptive) ----*/
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 20px 95px;
  }

  /*----Desktop style more than 1440 (adaptive)----*/

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 20px 128px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  /* font-weight: 600; */
  line-height: 1.42857;
  text-decoration: none;
  color: #ffffff;

  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    font-weight: bold;
  }
`;
