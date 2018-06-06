import React from 'react';
import {RoverCard} from "./RoverCard";

export function HomePage (props) {

  //TODO get manifest for all rovers by name from API
  let curiosityManifest = {
    "name": "Curiosity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active",
    "max_sol": 2063,
    "max_date": "2018-05-26",
    "total_photos": 337109,
  };
  let opportunityManifest = {
    "name": "Opportunity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active",
    "max_sol": 2063,
    "max_date": "2018-05-26",
    "total_photos": 41109,
  };
  let spiritManifest = {
    "name": "Spirit",
    "landing_date": "2010-08-06",
    "launch_date": "2008-11-26",
    "status": "complete",
    "max_sol": 1042,
    "max_date": "2014-03-26",
    "total_photos": 127109,
  };

  return (
    <div className="col-4">
      <div className="container">
        <h1>NASA Mars Rover Mission Explorer</h1>
        <div className="row">
          <RoverCard name="Curiosity" manifest={curiosityManifest} />
          <RoverCard name="Opportunity" manifest={opportunityManifest} />
          <RoverCard name="Spirit" manifest={spiritManifest} />
        </div>
      </div>
    </div>
  );
}