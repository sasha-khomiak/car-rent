import styled from 'styled-components';

export const StyledSection = styled.section``;

export const StyledContainer = styled.div`
  /*----Base mobile style 375 - 767 (адаптивний)----*/
  /* outline: 2px solid tomato; */
  margin: 0 auto;
  width: 100%;
  max-width: 375px;

  display: flex;
  row-gap: 25px;
  flex-direction: column;

  padding: 25px 50px;

  /*----Tablet style 768-1440 (adaptive) ----*/
  @media screen and (min-width: 768px) {
    max-width: 768px;
    row-gap: 50px;
    column-gap: 29px;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 25px 95px;
  }

  /*----Desktop style more than 1440 (adaptive)----*/

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 50px 128px;

    row-gap: 50px;
    column-gap: 29px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const SectionHeader = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
