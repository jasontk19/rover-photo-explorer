import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleBookmark } from "../state/actions.photos";
import PropTypes from 'prop-types';

const styles = {
  bookmark: {
    float: 'left'
  },
  close: {
    float: 'right',
  },
  img: {
    width: '100%',
    height: 'auto'
  }
};

class PhotoDialog extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark () {
    let photo = this.props.photo;
    this.props.dispatch(toggleBookmark(photo))
  }

  render() {
    const { classes, photo, onClose, ...other } = this.props;
    const isBookmarked = this.props.bookmarkedPhotos.find(bookmarkedPhoto => bookmarkedPhoto.id === photo.id);
    const btnColor = isBookmarked ? 'primary' : 'secondary';

    return (
      <Dialog maxWidth={false} onClose={onClose} aria-labelledby="dialog-title" {...other}>
        <DialogTitle id="dialog-title">
          <Button
            className={classes.close}
            color="secondary"
            variant="flat"
            size="small"
            onClick={onClose}>
            <CloseIcon/>
          </Button>
          <Button
            className={classes.bookmark}
            color={btnColor}
            variant="fab"
            size="medium"
            onClick={this.toggleBookmark}>
            <FavoriteIcon/>
          </Button>
        </DialogTitle>
        <div>
          <img src={photo.img_src} alt={''} style={styles.img}/>
        </div>
      </Dialog>
    );
  }
}

PhotoDialog.propTypes = {
  dispatch: PropTypes.func,
  bookmarkedPhotos: PropTypes.array,
  photo: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  bookmarkedPhotos: state.bookmarkedPhotos
});

const connected = connect(mapStateToProps, null)(PhotoDialog);
export default withStyles(styles)(connected);
