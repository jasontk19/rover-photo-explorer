import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: '70px 15px 30px 15px',
    padding: '15px',
    float: 'left',
  },
  solDropdown: {
    minWidth: '215px'
  }
});

const propTypes = {
  classes: PropTypes.object,
  manifest: PropTypes.object,
  selectedSol: PropTypes.number,
  selectedSolObj: PropTypes.object,
  handleSolChange: PropTypes.func,
  selectedCamera: PropTypes.string,
  handleCameraChange: PropTypes.func,
  requestPhotos: PropTypes.func
};

const PhotoForm = props => {
  const {
    classes,
    manifest,
    selectedSol,
    selectedSolObj,
    handleSolChange,
    selectedCamera,
    handleCameraChange,
    requestPhotos
  } = props;

  /* TODO allow flipping ordering of sols (ASC v DESC) */
  let solChoices = manifest.photos && [...manifest.photos].reverse();
  let cameras = selectedSolObj.cameras;

  return (
    <Paper className={classes.root}>

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend"> Martian Sol </FormLabel>
        <Select
          native
          className={classes.solDropdown}
          value={selectedSol}
          onChange={handleSolChange}
          inputProps={{ name: 'selectedSol', id: 'sol-select' }}
          disabled={!solChoices || solChoices.length < 1}>

          { !selectedSol && <option value=""> </option> }

          { (solChoices || []).map(item => (
            <option key={item.sol} value={item.sol}>
              Sol {item.sol}, ({item.total_photos} photos)
            </option>
          )) }
        </Select>
      </FormControl>

      <br/>

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend"> Camera </FormLabel>
        <RadioGroup
          aria-label="camera"
          name="camera"
          value={selectedCamera}
          onChange={handleCameraChange}
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
          onClick={requestPhotos}
          disabled={!selectedCamera || !selectedSol}>
          Search &nbsp; <Search />
        </Button>
      </FormControl>
    </Paper>
  );
};

PhotoForm.propTypes = propTypes;

export default withStyles(styles)(PhotoForm);