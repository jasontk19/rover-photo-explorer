import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

import { roverNames } from '../constants';
import { clearPhotos } from "../state/actions.photos";
import PhotoSearch from './PhotoSearch';

const styles = theme => ({
  tabs: {
    backgroundColor: theme.palette.primary.main,
    height: '40px'
  }
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
    let { classes, manifests } = this.props;
    let rover = roverNames[this.state.value];
    let manifest = manifests[rover];

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.tabs}
          textColor="secondary"
          fullWidth
          centered>
            {roverNames.map(name => ( <Tab key={name} label={name} /> ))}
        </Tabs>
        <PhotoSearch key={rover} rover={rover} manifest={manifest} />
      </div>
    );
  }
}

RoversPage.PropTypes = {
  classes: PropTypes.object,
  manifests: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state, ownProps) => ({
  manifests: state.manifests
});

const connectedPage = connect(mapStateToProps)(RoversPage);
export default withStyles(styles, { withTheme: true })(connectedPage);