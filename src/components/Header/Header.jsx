import React from 'react';
import { StyledHeaderContainer, StyledHeaderSection } from './Header.styled';

import { HeaderLeft, StyledNavLink, LogoImg } from './Header.styled';

import LogoCar from '../../images/icon-car-yellow.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeaderSection>
      <StyledHeaderContainer>
        <HeaderLeft>
          <Link to="/">
            <LogoImg src={LogoCar} alt="logo" />
          </Link>
          <StyledNavLink to="/">Main</StyledNavLink>
        </HeaderLeft>

        <HeaderLeft>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </HeaderLeft>
      </StyledHeaderContainer>
    </StyledHeaderSection>
  );
};

export default Header;
