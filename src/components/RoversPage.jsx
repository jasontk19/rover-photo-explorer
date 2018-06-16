import React from 'react';
import {connect} from 'react-redux';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

import { roverNames } from '../constants';
import { clearPhotos } from "../state/actions.photos";
import PhotoSearch from './PhotoSearch';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
});

class RoversPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event, value) => {
    this.props.dispatch(clearPhotos());
    this.setState({ value });
  };

  render() {
    let { classes } = this.props;
    let rover = roverNames[this.state.value];
    let manifest = this.props.manifests[rover];
    let finishedLoading = Object.keys(manifest).length > 0;

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
          centered>
            {roverNames.map(name => ( <Tab key={name} label={name} /> ))}
        </Tabs>
        {finishedLoading && <PhotoSearch key={rover} rover={rover} manifest={manifest} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  manifests: state.manifests
});

const connectedPage = connect(mapStateToProps)(RoversPage);

export default withStyles(styles)(connectedPage);