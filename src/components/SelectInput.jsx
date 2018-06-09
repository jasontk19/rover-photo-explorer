import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const SelectInput = (props) => {
  return (
    <FormControl>
      <FormLabel component="legend"> Sol </FormLabel>
      <Select
        native
        value={props.value}
        onChange={props.onChange}
        inputProps={props.inputProps}>

        {(props.options || []).map(item => (
          <option key={item.sol} value={item.sol}>
            Sol {item.sol}, ({item.total_photos} photos)
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;