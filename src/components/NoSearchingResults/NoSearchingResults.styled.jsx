import styled from 'styled-components';

export const StyledSection = styled.div`
  /* background-color: #3470ff; */
`;

export const StyledContainer = styled.div`
  /*----Base mobile style 375 - 767 (адаптивний)----*/
  /* outline: 2px solid tomato; */
  margin: 0 auto;
  width: 100%;
  max-width: 375px;

  padding: 20px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Message = styled.p`
  color: #3470ff;
  font-family: Manrope;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  line-height: 24px;

  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;
