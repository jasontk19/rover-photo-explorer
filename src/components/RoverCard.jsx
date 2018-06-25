import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import {Utils} from  '../Utils';
import PropTypes from 'prop-types';

import Spirit from '../img/Spirit.jpg';
import Opportunity from '../img/Opportunity.jpg';
import Curiosity from '../img/Curiosity.jpg';

const styles = theme => ({
  card: {
    margin: 'auto',
    maxWidth: '600px'
  },
  cardMedia: {
    width: '250px',
    height: '250px',
    float: 'left'
  },
  cardContent: {
    float: 'left',
    margin: '15px'
  },
  contentDetails: {
    marginTop: '15px',
    fontSize: '1rem'
  }
});

const RoverCard = ({classes, name, manifest}) => {
  const images = {
    Spirit,
    Opportunity,
    Curiosity
  };
  const status = manifest.status.charAt(0).toUpperCase() + manifest.status.slice(1);
  const chipStyle =  { background: manifest.status === 'active' ? '#afa' : '#ffc' };
  const launchDate = Utils.formatDate(manifest.launch_date);
  const landingDate = Utils.formatDate(manifest.landing_date);

  return (
    <Card raised className={classes.card}>
      <CardMedia className={classes.cardMedia} image={images[name]} title={name + ' Rover'} />
      <CardContent className={classes.cardContent}>

        <Typography gutterBottom variant="headline" component="h2">
          {name}
        </Typography>

        <Chip label={status} style={chipStyle} />

        <Typography component="p" className={classes.contentDetails}>
          <b>Launched:</b> {launchDate} <br/>
          <b>Landed:</b> {landingDate} <br/>
          <b>Last active Sol:</b> {manifest.max_sol.toLocaleString()} <br/>
          <b>Total photos:</b> {manifest.total_photos.toLocaleString()} <br/>
        </Typography>

      </CardContent>
    </Card>
  );
};

RoverCard.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  manifest: PropTypes.object
};

export default withStyles(styles)(RoverCard);

