import React from 'react';
import {connect} from 'react-redux';
import {requestPhotos} from '../state/actions';
import RoverCard from './RoverCard';

import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

class PhotoSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRover: '',
      selectedManifest: {},
      selectedSol: '',
      selectedSolObj: { cameras: [] },
      selectedCamera: '',
      solChoices: []
    };
    this.handleSolChange = this.handleSolChange.bind(this);
    this.handleCameraChange = this.handleCameraChange.bind(this);
    this.requestPhotos = this.requestPhotos.bind(this);
  }

  handleSolChange (event) {
    let solNum = event.target.value;
    let photos = this.state.selectedManifest.photos;
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
      camera: this.state.selectedCamera
    };
    // this.props.requestPhotos(params);
  }

  componentWillReceiveProps(nextProps) {
    let roverName = nextProps.name;
    let manifest = nextProps.manifests[roverName];
    this.setState({
      selectedRover: roverName,
      selectedManifest: manifest,
      solChoices: manifest.photos
    });
  }

  render() {
    const {name} = this.props;
    return (
      <div>
        <RoverCard key={name} name={name} manifest={this.state.selectedManifest}/>

        <FormControl>
          <FormLabel component="legend">Sol</FormLabel>
          <Select
            native
            value={this.state.selectedSol}
            onChange={this.handleSolChange}
            inputProps={{ name: 'selectedSol', id: 'sol-select' }}
            disabled={!this.state.solChoices || this.state.solChoices.length < 1}>

            <option value=""> </option> /** TODO don't show empty default once a selection has been made */
            {(this.state.solChoices || []).map(item => (
              <option key={item.sol} value={item.sol}>
                Sol {item.sol}, ({item.total_photos} photos)
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Camera</FormLabel>
          <RadioGroup
            aria-label="camera"
            name="camera"
            value={this.state.selectedCamera}
            onChange={this.handleCameraChange}
            disabled={this.state.selectedSolObj.cameras.length < 1}>

            {this.state.selectedSolObj.cameras.map(camera => (
              <FormControlLabel key={camera} value={camera} control={<Radio/>} label={camera}/>
            ))}
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={this.requestPhotos}
          disabled={!this.state.selectedCamera || !this.state.selectedSol}>
          Search <Search />
        </Button>

        <h2>Photo Results</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    manifests: state.manifests,
    photos: state.photos
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPhotos: dispatch(requestPhotos)
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSearch);