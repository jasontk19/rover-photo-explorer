import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bookmarkPhoto } from "../state/actions.photos";


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

  bookmarkPhoto (photo) {
    this.props.bookmarkPhoto(photo);
  }

  render() {
    const { classes, photo, onClose, ...other } = this.props;

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
            color="primary"
            variant="fab"
            size="medium"
            onClick={this.bookmarkPhoto.bind(this, photo)}>
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

const mapDispatchToProps = dispatch => ({
  bookmarkPhoto: (photo) => dispatch(bookmarkPhoto(photo))
});

const connected = connect(null, mapDispatchToProps)(PhotoDialog);
export default withStyles(styles)(connected);
