import React from 'react';
import { StyledHeaderContainer, StyledHeaderSection } from './Header.styled';

import { StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeaderSection>
      <StyledHeaderContainer>
        <StyledNavLink to="/">Main</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </StyledHeaderContainer>
    </StyledHeaderSection>
  );
};

export default Header;
