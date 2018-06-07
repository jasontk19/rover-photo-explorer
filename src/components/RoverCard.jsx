import React from 'react';
import {Link} from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const cardStyles = { maxWidth: 600 };
const cardMediaStyles =  {width: '250px', height: '250px'};

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
        <CardActions>
          <Button size="medium" color="primary">
            <Link to={'/rover/' + name}> Learn more </Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RoverCard;


