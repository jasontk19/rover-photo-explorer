import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

class PhotoDialog extends React.Component {
  render() {
    const { photo, onClose, ...other } = this.props;

    return (
      <Dialog maxWidth={false} onClose={onClose} aria-labelledby="dialog-title" {...other}>
        <DialogTitle id="dialog-title">
          {/* TODO add to favorites interaction */}
          <span>&nbsp;</span>
        </DialogTitle>
        <div>
          <img src={photo.img_src} alt={''} />
        </div>
      </Dialog>
    );
  }
}
export default PhotoDialog;
