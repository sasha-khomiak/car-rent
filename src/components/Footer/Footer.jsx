import React from 'react';

import {
  StyledFooterSection,
  StyledFooterContainer,
  CopyLink,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterContainer>
        <CopyLink
          href="https://www.linkedin.com/in/oleksandr-khomiak/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          &copy; Oleksandr Khomiak, 2023
        </CopyLink>
      </StyledFooterContainer>
    </StyledFooterSection>
  );
};

export default Footer;
