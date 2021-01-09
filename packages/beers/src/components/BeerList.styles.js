import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
 
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

`;

export const CartWrapper = styled.section`
  background: #f8f8f8;
`;

export const Cart = styled.section`
  text-align: center;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
 
`;

export const Title = styled.h2`
  font-size: 16px;
  display: inline-block;
`;

export const Img = styled.a`
  display: block;
  background-image: ${props => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
`;

