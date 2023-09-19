import styled from 'styled-components';

import ImgBg from '../../images/6_0.jpg';
import { ReactSVG } from 'react-svg';

export const SectionHero = styled.section`
  /* background-color: yellow; */
`;

export const Container = styled.div`
  /*----Base mobile style 375 - 767 (адаптивний)----*/
  /* outline: 2px solid tomato; */
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  padding: 20px;

  /*----Tablet style 768-1440 (adaptive) ----*/
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  /*----Desktop style more than 1440 (adaptive)----*/

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Hero = styled.div`
  width: 100%;
  height: 200px;
  /* outline: 2px solid tomato; */
  background-image: url(${ImgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 24px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    height: 600px;
  }
`;

export const HeroText = styled.h1`
  color: white;
  font-size: 40px;
  text-shadow: 4px 4px #0b44cd;

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 80px;
  }

  animation: hearbeat 3s linear infinite;

  // кі фрейм для руху нашого логотипа
  @keyframes hearbeat {
    0%,
    7% {
      transform: rotateZ(0);
    }

    50% {
      transform: scale(1.1);
    }

    20% {
      transform: rotateZ(10deg);
    }

    25% {
      transform: rotateZ(-10deg);
    }

    30% {
      transform: rotateZ(6deg);
    }

    35% {
      transform: rotateZ(-4deg);
    }

    40%,
    100% {
      transform: rotateZ(0);
    }
  }
`;

export const HeroButton = styled.a`
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;

  margin-top: 30px;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;
  text-decoration: none;

  transition: transform 250ms linear, background-color 250ms linear;

  &:hover {
    background-color: #0b44cd;
    transform: scale(1.05);
  }
`;

export const Title = styled.h2``;

export const BlockLogos = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const LogoThumb = styled.div`
  /* background-color: red; */
  width: 149px;
  padding: 10px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: solid 2px grey;
  color: grey;

  transition: color 250ms linear, transform 250ms linear,
    border-color 250ms linear;

  @media screen and (min-width: 768px) {
    width: calc((100% - 60px) / 4);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 140px) / 8);
  }

  &:hover {
    transform: scale(1.05);
    color: #3470ff;
    border-color: #3470ff;
  }
`;

export const StyledLogo = styled(ReactSVG)`
  width: 60px;
  fill: currentColor;
`;
