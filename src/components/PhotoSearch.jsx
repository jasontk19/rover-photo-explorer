import React from 'react';
import {connect} from 'react-redux';
import {requestPhotos} from '../state/actions';
import {RoverCard} from './RoverCard';
import PhotoGrid from './PhotoGrid';

import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
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
      camera: this.state.selectedCamera
    };
    this.props.requestPhotos(this.props.rover, params);
  }

  render() {
    const {rover, manifest, classes} = this.props;
    let solChoices = manifest.photos;
    let cameras = this.state.selectedSolObj.cameras;

    return (
      <div className={classes.root}>
        <RoverCard key={rover} name={rover} manifest={manifest}/>

        <div className={classes.form}>

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Martian Sol</FormLabel>
            <Select
              native
              className={classes.solDropdown}
              value={this.state.selectedSol}
              onChange={this.handleSolChange}
              inputProps={{ name: 'selectedSol', id: 'sol-select' }}
              disabled={!solChoices || solChoices.length < 1}>

              { !this.state.selectedSol && <option value=""> </option> }

              { (solChoices || []).map(item => (
                <option key={item.sol} value={item.sol}>
                  Sol {item.sol}, ({item.total_photos} photos)
                </option>
              )) }
            </Select>
          </FormControl>

          <br/>

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Camera</FormLabel>
            <RadioGroup
              aria-label="camera"
              name="camera"
              value={this.state.selectedCamera}
              onChange={this.handleCameraChange}
              disabled={!cameras.length}>

              {!cameras.length && <FormControlLabel value="..." control={<Radio/>} label="..."/>}

              {cameras.map(camera => (
                <FormControlLabel key={camera} value={camera} control={<Radio/>} label={camera}/>
              ))}
            </RadioGroup>
          </FormControl>

          <br/>

          <FormControl margin="normal" fullWidth>
            <Button
              variant="contained"
              color="primary"
              onClick={this.requestPhotos}
              disabled={!this.state.selectedCamera || !this.state.selectedSol}>
              Search <Search />
            </Button>
          </FormControl>
        </div>

        {this.props.photos.length > 0 && <PhotoGrid photos={this.props.photos} />}

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