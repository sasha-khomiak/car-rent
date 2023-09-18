import styled from 'styled-components';

export const StyledFilterBlock = styled.div`
  /* background-color: green; */
`;

export const StyledFilterContainer = styled.div`
  /*----Base mobile style 375 - 767 (адаптивний)----*/
  /* outline: 2px solid tomato; */
  margin: 0 auto;
  width: 100%;
  max-width: 375px;

  padding: 20px 50px;

  display: flex;
  justify-content: center;
  gap: 20px;

  flex-wrap: wrap;

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

export const Button = styled.button`
  padding: 14px 44px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #3470ff;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;

  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #0b44cd;
  }
`;
