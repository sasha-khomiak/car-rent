import styled from 'styled-components';

export const SectionHero = styled.section`
  background-color: yellow;
`;

export const Container = styled.div`
  /*----Base mobile style 375 - 767 (адаптивний)----*/
  outline: 2px solid tomato;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  /* padding: 0 20px; */
  /* display: flex; */
  /* flex-direction: column; */
  /* padding-top: 24px; */

  /* background-repeat: no-repeat; */
  /* background-position: top; */
  /* background-size: cover; */
  /* max-width: 100%; */
  /* border-radius: 100px; */

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
