import styled from 'styled-components';

export const CarCardContainer = styled.div`
  width: 274px;
  /* background-color: orange; */
`;

export const ImageThumb = styled.div`
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
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;
