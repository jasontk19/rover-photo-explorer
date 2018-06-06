import React from 'react';
import {Link} from 'react-router';

export function RoverCard ({name, manifest}) {

  return (
    <div className="col-4">
      <div className="card">
        <img className="card-img-top" src="http://www.placehold.it/250" alt="Rover details" />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text">
            Mission Status: {manifest.status} <br/>
            Total Photos: {manifest.total_photos} <br/>
          </p>
          <Link to={'/RoverDetails/' + name} className="btn btn-primary"> Learn more </Link>
        </div>
      </div>
    </div>
  );
}

