import React from 'react';

import PhotoDialog from './PhotoDialog';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import TablePagination from "@material-ui/core/TablePagination";

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }

  // handleChangePage = (event, page) => {
  //   this.setState({ page })
  // };

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
    let tileStyles = { cursor: 'pointer' };
    let containerStyles = {
      height: '600px',
      overflowY: 'auto',
      overflowX: 'hidden'
    };
    return (
      <div style={containerStyles}>
        { this.state.dialogOpen &&
          <PhotoDialog
            photo={this.state.dialogPhoto}
            open={this.state.dialogOpen}
            onClose={this.handleClose}
          />
        }
        <GridList cellHeight={120} spacing={4} cols={3}>

          {(this.props.photos || []).map(photo => (
            <GridListTile
              key={photo.id}
              style={tileStyles}
              cols={1}
              onClick={this.handleClickOpen.bind(this, photo)}>

              <img src={photo.img_src} alt={photo.earth_date + photo.camera.name} />

            </GridListTile>
          ))}

        </GridList>
        {/*<TablePagination*/}
          {/*component="div"*/}
          {/*count={data.length}*/}
          {/*rowsPerPage={25}*/}
          {/*rowsPerPageOptions={25}*/}
          {/*page={this.state.page}*/}
          {/*onChangePage={this.handleChangePage}*/}
        {/*/>*/}
      </div>
    )
  }
}

export default PhotoGrid;