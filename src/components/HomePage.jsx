import React from 'react';
import RoverCard from "./RoverCard";
import Grid from '@material-ui/core/Grid';

const pageContainer = { margin: '20px auto', maxWidth: 1200,  };
const headerText = { marginBottom: '100px' };
const roverNames = ['Curiosity', 'Opportunity', 'Spirit'];
const manifestStub = {
  Curiosity: {
    "name": "Curiosity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active",
    "max_sol": 2063,
    "max_date": "2018-05-26",
    "total_photos": 337109,
  },
  Opportunity: {
    "name": "Opportunity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active",
    "max_sol": 2063,
    "max_date": "2018-05-26",
    "total_photos": 41109,
  },
  Spirit: {
    "name": "Spirit",
    "landing_date": "2010-08-06",
    "launch_date": "2008-11-26",
    "status": "complete",
    "max_sol": 1042,
    "max_date": "2014-03-26",
    "total_photos": 127109,
  }
};

export function HomePage () {
  return (
    <div style={pageContainer}>
      <h1 style={headerText}> NASA Mars Rover Mission Explorer </h1>
      <Grid container spacing={40}>
        { roverNames.map(name => (
          <Grid item xs={12} md={4} key={name}>
            <RoverCard name={name} manifest={manifestStub[name]} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}