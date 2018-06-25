import React from 'react';
import PropTypes from 'prop-types';
import PhotoDialog from './PhotoDialog';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '600px',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  tile: {
    cursor: 'pointer'
  }
});

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }

  handleClickOpen = photo => {
    this.setState({
      dialogPhoto: photo,
      dialogOpen: true,
    });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  render () {
    const { classes, photos } = this.props;

    return (
      <div className={classes.root}>
        { this.state.dialogOpen &&
          <PhotoDialog
            photo={this.state.dialogPhoto}
            open={this.state.dialogOpen}
            onClose={this.handleClose}
          />
        }
        <GridList cellHeight={120} spacing={8} cols={3}>
          { (photos || []).map(photo => (
            <GridListTile
              key={photo.id}
              className={classes.tile}
              cols={1}
              onClick={this.handleClickOpen.bind(this, photo)}>
              <img src={photo.img_src} alt={photo.earth_date + photo.camera.name} />
            </GridListTile>
          )) }
        </GridList>
      </div>
    )
  }
}

PhotoGrid.propTypes = {
  classes: PropTypes.object,
  photos: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(PhotoGrid);