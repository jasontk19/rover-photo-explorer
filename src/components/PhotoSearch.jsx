import React from 'react';
import {connect} from 'react-redux';
import {requestPhotos} from '../state/actions';
import {RoverCard} from './RoverCard';
import PhotoForm from './PhotoForm';
import PhotoGrid from './PhotoGrid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: '20px'
  },
  form: {
    margin: '30px 15px',
    padding: '15px',
    float: 'left',
    backgroundColor: '#efefef',
    border: '1px solid #ddd'
  },
  results: {
    margin: '30px 5px'
  },
  solDropdown: {
    minWidth: '215px'
  }
});

class PhotoSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSol: '',
      selectedSolObj: { cameras: [] },
      selectedCamera: ''
    };
    this.handleSolChange = this.handleSolChange.bind(this);
    this.handleCameraChange = this.handleCameraChange.bind(this);
    this.requestPhotos = this.requestPhotos.bind(this);
  }

  handleSolChange (event) {
    let solNum = event.target.value;
    let photos = this.props.manifest.photos;
    let objForSol = photos.find(item => (item.sol == solNum));
    this.setState({
      selectedSol: solNum,
      selectedSolObj: objForSol,
      selectedCamera: ''
    });
  }

  handleCameraChange (event) {
    this.setState({
      selectedCamera: event.target.value
    })
  }

  requestPhotos() {
    const params = {
      sol: this.state.selectedSol,
      camera: this.state.selectedCamera,
      page: 1
    };
    this.props.requestPhotos(this.props.rover, params);
  }

  render() {
    const {
      rover,
      manifest,
      classes
    } = this.props;

    let singlePhoto = this.props.photos[0];
    let earthDate = singlePhoto && singlePhoto.earth_date;
    let cameraName = singlePhoto && singlePhoto.camera.full_name;

    return (
      <div className={classes.root}>
        <RoverCard key={rover} name={rover} manifest={manifest}/>
        <PhotoForm
          manifest={manifest}
          selectedSol={this.state.selectedSol}
          selectedSolObj={this.state.selectedSolObj}
          handleSolChange={this.handleSolChange}
          selectedCamera={this.state.selectedCamera}
          handleCameraChange={this.handleCameraChange}
          requestPhotos={this.requestPhotos}
        />
        { singlePhoto &&
          <div className={classes.results}>
            <h3>{cameraName}, {earthDate} </h3>
            <h4> {this.props.photos.length} photos </h4>
            {this.props.photos.length > 0 && <PhotoGrid photos={this.props.photos} />}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  requestPhotos: (rover, params) => dispatch(requestPhotos(rover, params))
});

const connected = connect(mapStateToProps, mapDispatchToProps)(PhotoSearch);

export default withStyles(styles)(connected);