import React, {useEffect, useState} from 'react';

const url = 'https://api.punkapi.com/v2/beers';

const BeerList = () => {

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
        <div key={beer.id}>
          {beer.name}
        </div>
      ))}
    </div>
  );
};

export default BeerList;
