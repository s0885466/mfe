import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
 
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

`;

export const Cart = styled.section`
text-align: center;
  background: #f8f8f8;
  border-radius: 4px;
  width: 100%;
  padding: 5px;
 
`;

export const Title = styled.h2`
  font-size: 16px;
`;

export const Img = styled.a`
  display: block;
  background-image: ${props => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
`;

