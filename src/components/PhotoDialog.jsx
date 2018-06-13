import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

class PhotoDialog extends React.Component {

  render() {
    const { photo, onClose, ...other } = this.props;

    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title"> {photo.earth_date} from {photo.camera.name} </DialogTitle>
        <div>
          <img src={photo.img_src} alt={''} />
        </div>
      </Dialog>
    );
  }
}
export default PhotoDialog;
