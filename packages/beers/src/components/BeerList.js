import React, {useEffect, useState} from 'react';
import {Cart, Container, Img, Title} from './BeerList.styles';

const url = 'https://api.punkapi.com/v2/beers';

const BeerList = () => {

  const [beers, setBeers] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(beers => {
        console.log(beers);
        setBeers(beers);
      })
  }, []);

  return (
    <Container>
      {beers && beers.map(beer => (
        <Cart key={beer.id}>
          <Title>{beer.name}</Title>
          <Img image={beer.image_url} loading="lazy"/>
        </Cart>
      ))}
    </Container>
  );
};

export default BeerList;
