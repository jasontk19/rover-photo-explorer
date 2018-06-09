import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardStyles = {margin: 'auto', width: '80%'};
const cardMediaStyles =  {width: '250px', height: '50px'};

const RoverCard = ({name, manifest}) => {
  const imgUrl = `/img/${name}.jpg`;
  return (
    <Card style={cardStyles}>
      <CardMedia style={cardMediaStyles} image={imgUrl} title={name + ' Rover'} />
      <CardContent>
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

export default RoverCard;


