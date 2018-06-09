import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { roverNames } from '../constants';
import PhotoSearch from './PhotoSearch';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
});

class RoversPage extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    let { classes} = this.props;
    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth>
            {roverNames.map(name => ( <Tab key={name} label={name} /> ))}
        </Tabs>
        <SwipeableViews
          axis='x'
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
            {roverNames.map(name => ( <PhotoSearch key={name} name={name} /> ))}
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(RoversPage);