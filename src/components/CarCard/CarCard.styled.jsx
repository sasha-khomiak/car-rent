import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const CarCardContainer = styled.div`
  width: 274px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageThumb = styled.div`
  position: relative;
  height: 268px;
  width: 274px;

  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  overflow: hidden;

  margin-bottom: 14px;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;

  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Favorite = styled(ReactSVG)`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Make = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const Model = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const Year = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const RentalPrice = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const ExtraInfo = styled.div`
  display: flex;
  /* justify-content: left; */
  flex-wrap: wrap;
`;

export const ReviewItem = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const Delimiter = styled(ReactSVG)`
  margin-right: 6px;
  margin-left: 6px;
`;

export const ButtonLearnMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 12px;

  border: none;
  border-radius: 12px;
  background-color: #3470ff;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;

  margin-top: 28px;

  cursor: pointer;

  transition: background-color 250ms linear, transform 250ms linear;

  &:hover {
    background-color: #0b44cd;
    transform: scale(1.05);
  }
`;
