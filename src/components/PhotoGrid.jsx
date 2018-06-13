import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PhotoDialog from './PhotoDialog';

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
    return (
      <div>

        { this.state.dialogOpen &&
          <PhotoDialog
            photo={this.state.dialogPhoto}
            open={this.state.dialogOpen}
            onClose={this.handleClose}
          />
        }

        <GridList cellHeight={120} spacing={4} cols={3}>

          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div"> Photo Results </ListSubheader>
          </GridListTile>

          {(this.props.photos || []).map(photo => (
            <GridListTile key={photo.id} cols={1}>

              <img onClick={this.handleClickOpen.bind(this, photo)}
                   src={photo.img_src}
                   alt={photo.earth_date + photo.camera.name} />

              <GridListTileBar
                title={photo.earth_date}
                subtitle={<span>Camera: {photo.camera.name}</span>}
              />
            </GridListTile>
          ))}

        </GridList>
      </div>
    )
  }
}

export default PhotoGrid;