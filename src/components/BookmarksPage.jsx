import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PhotoGrid from './PhotoGrid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { clearBookmarks } from '../state/actions.photos';

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
  constructor(props) {
    super(props);
    this.clearBookmarks = this.clearBookmarks.bind(this);
  }

  clearBookmarks () {
    this.props.dispatch(clearBookmarks())
  }

  render() {
    let { classes } = this.props;
    let hasPhotos = this.props.bookmarkedPhotos.length > 0;

    return (
      <div className={classes.root}>
        <Typography variant="title" align="center" className={classes.title}> Bookmarked Photos </Typography>
        {
          !hasPhotos ? <Typography align="center"> No bookmarks yet! </Typography> :
            <Button className={classes.clearBtn} onClick={this.clearBookmarks}> Clear All </Button>
        }
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