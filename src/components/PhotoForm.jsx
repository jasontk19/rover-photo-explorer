import React from 'react';

import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
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
  let solChoices = manifest.photos.reverse();
  let cameras = selectedSolObj.cameras;

  return (
    <div className={classes.root}>

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
    </div>
  );
};

export default withStyles(styles)(PhotoForm);