import React from 'react';

export function RoverDetails ({name, details, launch_date, landing_date, status, max_sol, max_date, total_photos}) {

  return (
    <div className="row">
      <div className="rover-details">
        <h2>{name}</h2>
        <div>Mission Status: {status}</div>
        <div>Launched: {launch_date}, Landed: {landing_date}</div>
        <div>Days active: {max_sol}</div>
        <div>Total photos: {total_photos}</div>
      </div>
    </div>
  );
}

