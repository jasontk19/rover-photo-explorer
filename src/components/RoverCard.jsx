import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const cardStyles = { maxWidth: 600 };

const RoverCard = ({name, manifest}) => {
  return (
    <Card style={cardStyles}>
      <CardMedia image="http://www.placehold.it/250" title={name + 'Rover Details'} />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {name}
        </Typography>
        <Typography component="p">
          Mission Status: {manifest.status} <br/>
          Launched: {manifest.launch_date} <br/>
          Landed: {manifest.landing_date} <br/>
          Last active Sol: {manifest.max_sol} <br/>
          Total photos: {manifest.total_photos} <br/>
          Mission Status: {manifest.status} <br/>
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

export default withStyles(cardStyles)(RoverCard);


