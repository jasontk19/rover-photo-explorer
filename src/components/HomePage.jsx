import React from 'react';
import { connect } from 'react-redux';
import RoverCard from "./RoverCard";
import Grid from '@material-ui/core/Grid';
import { roverNames } from '../constants';

const pageContainer = { margin: '20px auto', maxWidth: 1200 };
const headerText = { marginBottom: '100px' };

function HomePage (props) {
  return (
    <div style={pageContainer}>
      <h1 style={headerText}> NASA Mars Rover Mission Explorer </h1>
      <Grid container spacing={40}>
        { roverNames.map(name => (
          <Grid item xs={12} md={4} key={name}>
            <RoverCard name={name} manifest={props.manifests[name]} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    manifests: state.manifests
  };
};


export default connect(mapStateToProps)(HomePage);