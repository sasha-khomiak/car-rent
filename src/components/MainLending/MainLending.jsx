import React from 'react';

import {
  SectionHero,
  Container,
  Hero,
  HeroText,
  HeroButton,
  Title,
  BlockLogos,
  LogoThumb,
  StyledLogo,
} from './MainLending.styled';

import VolkswagenSVG from '../../images/car-logos/volkswagen-1.svg';
import MersedesSVG from '../../images/car-logos/mercedes-benz.svg';
import BMWSVG from '../../images/car-logos/bmw-791.svg';
import FordSVG from '../../images/car-logos/ford-7.svg';
import AudiSVG from '../../images/car-logos/audi-14.svg';
import ChevroletSVG from '../../images/car-logos/chevrolet-1.svg';
import HondaSVG from '../../images/car-logos/honda-automobiels-1.svg';
import OpelSVG from '../../images/car-logos/opel-2.svg';
import NissanSVG from '../../images/car-logos/nissan-2020-logo.svg';
import HyndaiSVG from '../../images/car-logos/hyundai-automobiles-1.svg';
import LexusSVG from '../../images/car-logos/lexus.svg';
import InfinitySVG from '../../images/car-logos/infiniti-1.svg';
import MitsubishiSVG from '../../images/car-logos/mitsubishi-motors-new-logo.svg';
import VolvoSVG from '../../images/car-logos/volvo-logo-2021.svg';
import LamborghiniSVG from '../../images/car-logos/lamborghini-3.svg';
import ToyotaSVG from '../../images/car-logos/toyota-center.svg';

const MainLending = () => {
  return (
    <>
      <main>
        <SectionHero>
          <Container>
            <Hero>
              <HeroText>The best car rent</HeroText>
              <div>
                <HeroButton href="tel:+380730000000">Rent Car Now</HeroButton>
              </div>
            </Hero>
            <Title>All popular brands</Title>
            <BlockLogos>
              <LogoThumb>
                <StyledLogo src={VolkswagenSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={MersedesSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={BMWSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={FordSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={AudiSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={ChevroletSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={HondaSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={OpelSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={NissanSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={HyndaiSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={LexusSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={InfinitySVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={MitsubishiSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={VolvoSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={LamborghiniSVG} />
              </LogoThumb>
              <LogoThumb>
                <StyledLogo src={ToyotaSVG} />
              </LogoThumb>
            </BlockLogos>

            <Title>Best servise</Title>
          </Container>
        </SectionHero>
      </main>
    </>
  );
};

export default MainLending;
