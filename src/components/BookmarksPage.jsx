import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PhotoGrid from './PhotoGrid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: '20px'
  },
  clearBtn: {
    margin: '20px'
  }
});

class RoversPage extends React.Component {
  clearAll() {
    //TODO dispatch a clear bookmarks action
  }

  render() {
    let { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title" align="center" className={classes.title}> Bookmarked Photos </Typography>
        <Button className={classes.clearBtn}> Clear All </Button>
        <PhotoGrid photos={this.props.bookmarkedPhotos} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  bookmarkedPhotos: state.bookmarkedPhotos
});

const connectedPage = connect(mapStateToProps)(RoversPage);

export default withStyles(styles)(connectedPage);