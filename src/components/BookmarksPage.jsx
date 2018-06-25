import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PhotoGrid from './PhotoGrid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { clearBookmarks } from '../state/actions.photos';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '10px'
  },
  title: {
    margin: '20px'
  },
  btnRow: {
    display: 'block',
    minHeight: '60px'
  },
  clearBtn: {
    margin: '20px',
    float: 'right',
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
    let { classes, bookmarkedPhotos } = this.props;
    let hasPhotos = bookmarkedPhotos.length > 0;

    return (
      <div className={classes.root}>
        <Typography variant="title" align="center" className={classes.title}> Bookmarked Photos </Typography>
        {
          !hasPhotos ? <Typography align="center"> No bookmarks yet! </Typography> :
            <div className={classes.btnRow}>
              <Button
                color="secondary"
                variant="raised"
                className={classes.clearBtn}
                onClick={this.clearBookmarks}> Clear All
              </Button>
            </div>
        }
        <PhotoGrid photos={bookmarkedPhotos} />
      </div>
    );
  }
}

RoversPage.propTypes = {
  bookmarkedPhotos: PropTypes.array,
  classes: PropTypes.object
};


const mapStateToProps = (state, ownProps) => ({
  bookmarkedPhotos: state.bookmarkedPhotos
});

const connectedPage = connect(mapStateToProps)(RoversPage);

export default withStyles(styles)(connectedPage);