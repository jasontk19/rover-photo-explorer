import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Spirit from '../img/Spirit.jpg';
import Opportunity from '../img/Opportunity.jpg';
import Curiosity from '../img/Curiosity.jpg';

const cardStyles = { margin: 'auto', width: '80%' };
const cardMediaStyles =  {
  width: '250px',
  height: '250px',
  float: 'left'
};
const cardContentStyles = {
  float: 'left',
  margin: '15px'
};

export const RoverCard = ({name, manifest}) => {
  const images = {
    Spirit,
    Opportunity,
    Curiosity
  };
  return (
    <Card raised style={cardStyles}>
      <CardMedia style={cardMediaStyles} image={images[name]} title={name + ' Rover'} />
      <CardContent style={cardContentStyles}>
        <Typography gutterBottom variant="headline" component="h2">
          {name}
        </Typography>
        <Typography component="p">
          <b>Launched:</b> {manifest.launch_date} <br/>
          <b>Landed:</b> {manifest.landing_date} <br/>
          <b>Last active Sol:</b> {manifest.max_sol} <br/>
          <b>Total photos:</b> {manifest.total_photos} <br/>
          <b>Mission Status:</b> {manifest.status} <br/>
        </Typography>
      </CardContent>
    </Card>
  );
};


