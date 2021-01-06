import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const url = 'https://api.punkapi.com/v2/beers';

const BeerList = () => {

  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


  const [beers, setBeers] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(beers => {
        setBeers(beers);
      })
  }, []);

  return (
    <div>
      <h1>Beers</h1>
      {beers && beers.map(beer => (
        <Wrapper key={beer.id}>
          {beer.name}
        </Wrapper>
      ))}
    </div>
  );
};

export default BeerList;
