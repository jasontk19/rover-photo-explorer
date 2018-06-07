import React from 'react';
import RoverCard from './RoverCard'


export function RoverDetails ({match}) {

  return (
    <div>
      <RoverCard name={match.params.name} manifest={{}} />
    </div>
  );
}

